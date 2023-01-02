<template>
  <span
    :data-header="computedLabel"
    class="wikisearch-result-property"
  >
    <span
      class="wikisearch-result-property__wrapper"
    >
      <component
        :is="tagName"
        v-for="(property, i) in properties"
        :key="data['_id'] + '_' + label + '-' + i"
        :index="data['_id'] + '_' + label + '-' + i"
        class="wikisearch-result-property__value"
        :class="'wikisearch-result-property__value--' + label.replace('$', '-')"
        :data="dataForComponent(property)"
        :label="labelForComponent(property)"
        :value="valueForComponent(property)"
        :src="src(property)"
        :loading="isLazy"
        :href="href(property)"
        :checked="isChecked"
        @click="onClick"
        @change="onChange"
      >
        <div
          v-if="isHighlichted"
          v-html="highlightProperty(sanitize(property))"
        />
        <template
          v-else
        >
          {{ property }}
        </template>
      </component>
    </span>
  </span>
</template>

<script>
import { sanitize } from '../utilities/stringUtils';
import WikisearchPill from './Pill.vue';
import WikisearchCheckbox from './Checkbox.vue';
import WikisearchWikiTemplate from './WikiTemplate.vue';

export default {
  name: 'WikisearchResultProperties',
  components: {
    WikisearchPill,
    WikisearchCheckbox,
    WikisearchWikiTemplate,
  },
  props: {
    config: {
      type: Object,
      default() {
        return {};
      },
    },
    label: {
      type: String,
      default: '',
    },
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      articlePath: mw.config.values.wgArticlePath.replace('/$1', ''),
      // eslint-disable-next-line no-undef
      configTitle: mw.config.values.WikiSearchFront.config.settings.title,
    };
  },
  computed: {
    computedLabel() {
      return this.config.label || this.label.replace(/^\$/, '');
    },
    properties() {
      return this.label.charAt(0) === '$'
        ? this.getUnderscorePropertiesFromData
        : this.getPropertiesFromData;
    },
    tagName() {
      const options = {
        pill: this.properties ? WikisearchPill : 'span',
        link: 'a',
        pdflink: 'a',
        image: 'img',
        template: WikisearchWikiTemplate,
        checkbox: WikisearchCheckbox,
        default: 'span',
        pdf: 'img',
      };
      return options[this.config.display] || options.default;
    },
    isHighlichted() {
      return this.config.highlight
        || this.label === '$snippet'
        || (this.label === '$title' && this.configTitle.highlight);
    },
    isLazy() {
      return this.config.display === 'image' || this.config.display === 'pdf' ? 'lazy' : false;
    },
    getPropertiesFromData() {
      const source = '_source';
      const key = `P:${this.config.key}`;
      const type = this.config.type === 'datField'
        ? 'dat_raw'
        : this.config.type;

      const props = this.config.key
        && this.data[source]
        && this.data[source][key]
        && this.data[source][key][type]
        ? this.data[source][key][type]
        : '';

      if (props && this.config.type === 'datField') {
        return this.formatDates(props);
      }
      return props;
    },
    getUnderscorePropertiesFromData() {
      const source = '_source';
      const prop = this.label.substring(1);

      const options = {
        'Modification date': this.data[source]['P:29'] ? this.formatDates(this.data[source]['P:29'].dat_raw) : '',
        page: [this.data[source].subject.title],
        image: [this.data[source].file_path],
        namespacename: [this.data[source].subject.namespacename],
        snippet: this.getSnippets,
        title: [this.getTitle],
      };

      return options[prop] || '';
    },
    getTitle() {
      // eslint-disable-next-line no-undef
      const { configTitle } = this;
      const source = '_source';
      const key = configTitle ? `P:${configTitle.key}` : '';
      return configTitle
        && configTitle.key
        && this.data[source][key]
        && this.data[source][key][configTitle.type]
        ? this.data[source][key][configTitle.type][0]
        : this.data[source].subject.title;
    },
    getSnippets() {
      return this.data.highlight
        ? Object.values(this.data.highlight).flat()
        : [];
    },
    isChecked() {
      return this.$store.state.selectAllResults;
    },
    getUrlString() {
      return this.$store.state.term
        ? `?${this.configTitle.urlstring}=${this.$store.state.term}`
        : '';
    },
  },
  watch: {
    isChecked(value) {
      if (!value) {
        this.$store.commit('SET_SELECTED_RESULTS', []);
      } else if (this.properties.length) {
        this.properties.forEach(prop => {
          this.onChange(prop);
        });
      }
    },
  },
  methods: {
    src(prop) {
      if (this.config.display === 'pdf') {
        const source = '_source';
        const subjectTitle = this.data[source].subject.title.replace(/\s/g, '_');
        return `/img_auth.php/thumb/${subjectTitle}/page1-300px-${subjectTitle}.jpg`;
      }

      return this.config.display === 'image'
        ? `${this.articlePath}/${prop}`.replace(' ', '_')
        : false;
    },
    href(prop) {
      const source = '_source';
      const { title, namespacename } = this.data[source].subject;
      if (this.label === '$title' && this.config.display !== 'pdflink') {
        const page = title.replace(/\?/gim, '%3F');
        const ns = namespacename
          ? `${namespacename}:`
          : '';

        const urlString = this.configTitle && this.configTitle.urlstring
          ? this.getUrlString
          : '';

        const hasIndex = /index\.php/.test(window.location.href)
          ? '/index.php'
          : '';

        return `${this.articlePath}${hasIndex}/${ns}${page}${urlString}`;
      }

      if (this.config.display === 'pdflink') {
        const snippet = this.$store.state.term
          ? `&snippet=${this.$store.state.term}`
          : '';
        return `${this.articlePath}/Pdf_viewer?pdf=${title.replaceAll(' ', '_')}${snippet}`;
      }

      if (this.config.display === 'link') {
        const regex = new RegExp('http');
        return regex.test(prop)
          ? prop.replace(/\s/gim, '_')
          : `${this.articlePath}/${prop.replace(/\s/gim, '_')}`;
      }

      return false;
    },
    labelForComponent(prop) {
      const label = this.config.label || prop;
      return this.config.display === 'pill' || this.config.display === 'checkbox'
        ? label
        : false;
    },
    valueForComponent(prop) {
      return this.config.display === 'checkbox'
        ? prop
        : false;
    },
    dataForComponent(prop) {
      if (this.config.display === 'template') {
        const source = '_source';
        const { title, namespacename } = this.data[source].subject;
        const ns = namespacename
          ? `${namespacename}:`
          : '';
        const outData = {
          key: this.label,
          value: prop,
          template: this.config.template,
          page: `${ns}${title}`,
        };
        // eslint-disable-next-line no-undef
        const calendarSettings = mw.config.values.WikiSearchFront.config.settings.calendar;
        const dateKey = calendarSettings && calendarSettings.key ? `P:${calendarSettings.key}` : 'P:29';
        if (
          this.data[source][dateKey]
            || this.data[source][dateKey].dat_raw
            || this.data[source][dateKey].dat_raw[0]
        ) {
          const [, year, month, day] = this.data[source][dateKey].dat_raw[0].split('/');
          outData.date = `${year}-${month}-${day}`;
        }
        return outData;
      }
      return this.config.display === 'pill'
       || this.config.display === 'template'
        ? { key: this.label, value: prop }
        : false;
    },
    highlightProperty(prop) {
      const { term } = this.$store.state;
      const regex = new RegExp(term, 'gmi');
      if (!term || this.label === '$snippet') {
        return prop;
      }

      return prop.replace(regex, `<b class="wikisearch-term-highlight">${term}</b>`);
    },
    sanitize(prop) {
      return sanitize(prop);
    },
    formatDates(dates) {
      return dates.map((date) => {
        const [, year, month, day] = date.split('/');
        // eslint-disable-next-line no-undef
        const monthName = mw.config.values.wgMonthNames[month];
        return `${day} ${monthName}, ${year}`;
      });
    },
    onClick(e) {
      if (this.config.display === 'pill') {
        const selection = [];
        let found = false;
        const updatedSelection = this.$store.state.selected;
        updatedSelection.forEach(el => {
          if (el.key === e.key && el.value === e.value) {
            found = true;
          } else {
            selection.push(el);
          }
        });
        if (!found) {
          selection.push(e);
        }
        this.$store.commit('SET_SELECTED', selection);
      }
    },
    onChange(e) {
      if (this.config.display === 'checkbox') {
        let { selectedResults } = this.$store.state;
        if (selectedResults.includes(e)) {
          selectedResults = selectedResults.filter(x => x !== e);
        } else {
          selectedResults.push(e);
        }
        this.$store.commit('SET_SELECTED_RESULTS', selectedResults);
      }
    },
  },
};
</script>

<style>
.wikisearch-result--layout-table .wikisearch-result__header-item,
.wikisearch-result--layout-table .wikisearch-result-property {
    background-color: var(--ws-white);
    padding: 1em 1.5em;
    overflow-wrap: break-word;
}

.wikisearch-result--layout-table .wikisearch-result__header-item {
    font-weight: bold;
    justify-content: center;
    flex-direction: column;
    display: flex;
}

.wikisearch-result-property .wikisearch-pill {
  padding: 0 .5em;
}

.wikisearch-result-property .wikisearch-pill:after {
  content: '';
}

.wikisearch-result-property__value---title {
  font-weight: bold;
  color: var(--ws-color);
}

.wikisearch-result-property__value---title .wikisearch-term-highlight {
  font-weight: normal;
}

.wikisearch-result--layout-table .wikisearch-checkbox__label {
  display: none;
}

@media (max-width: 500px) {

  .wikisearch-result--layout-table .wikisearch-result-property {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: .5em 1em;
  }

  .wikisearch-result--layout-table .wikisearch-result-property:before {
    content: attr(data-header);
    font-weight: bold;
    overflow-wrap: anywhere;
    align-self: center;
  }

  .wikisearch-result-property__wrapper {
    align-self: center;
  }

}

</style>
