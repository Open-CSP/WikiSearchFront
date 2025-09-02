<template>
  <div
    class="wikisearch-wiki-template"
    :class="loading ? 'wikisearch-wiki-template--loading wikisearch-element--pending' : ''"
    v-html="result"
  />
</template>

<script>
import prepareQuery from '../../utilities/elastic';

export default {
  name: 'WikisearchResultsTemplate',
  data() {
    return {
      // eslint-disable-next-line no-undef
      config: mw.config.values.WikiSearchFront.config,
      // eslint-disable-next-line no-undef
      configTitle: mw.config.values.WikiSearchFront.config.settings.title,
      result: '',
      loading: false,
    };
  },
  computed: {
    hits() {
      return this.$store.state.hits;
    },
    parse() {
      let wikitext = '';
      if (Array.isArray(this.$store.state.hits)) {
        this.$store.state.hits.forEach(data => {
          wikitext += `{{${this.config.settings.template}`;
          Object.entries(this.computedHitSettings).forEach(([key, value]) => {
            const text = key.charAt(0) === '$'
              ? this.getUnderscorePropertiesFromData(data, key)
              : this.getPropertiesFromData(data, value.key, value.type, key);

            wikitext += text
              ? `|${text}`
              : '';
          });
          wikitext += `|$term=${prepareQuery(this.$store.state.term)}`;
          wikitext += '}}';
        });
      }
      return wikitext;
    },
    computedHitSettings() {
      // check if we have $ prefixed properties otherwise load the defaults
      const isCustom = Object.keys(this.config.hitSettings).filter(e => e.charAt(0) === '$');
      if (!isCustom.length) {
        const start = {
          $title: {
            display: 'link',
            label: 'Page',
          },
          $snippet: {},
        };
        const end = {
          $page: {
            label: 'Page title',
          },
          '$Modification date': {},
        };
        return { ...start, ...this.config.hitSettings, ...end };
      }
      return this.config.hitSettings;
    },
  },
  watch: {
    hits() {
      console.log('hits changed, render template');
      this.parseTemplate();
    },
  },
  mounted() {
    this.parseTemplate();
  },
  methods: {
    getPropertiesFromData(data, configKey, configType, label) {
      const source = '_source';
      const key = `P:${configKey}`;

      let props = configKey
        && data[source]
        && data[source][key]
        && data[source][key][configType]
        ? data[source][key].dat_raw || data[source][key][configType]
        : false;

      if (props && configType === 'datField') {
        props = this.formatDates(props);
      }

      props = Array.isArray(props)
        ? props.join(',')
        : props;

      return props
        ? `${label}=${props}`
        : '';
    },
    getUnderscorePropertiesFromData(data, label) {
      const source = '_source';
      const prop = label.substring(1);

      const options = {
        'Modification date': data[source]['P:29'] ? this.formatDates(data[source]['P:29'].dat_raw) : '',
        page: [data[source].subject.title],
        image: [data[source].file_path],
        namespacename: [data[source].subject.namespacename],
        snippet: this.sanitizeSnippet(this.getSnippets(data)),
        title: [this.getTitle(data)],
      };

      const value = Array.isArray(options[prop])
        ? options[prop].join(',')
        : options[prop] || '';

      return value
        ? `${label}=${value}`
        : '';
    },
    getTitle(data) {
      const { configTitle } = this;
      const source = '_source';
      const key = configTitle ? `P:${configTitle.key}` : '';
      return configTitle
        && configTitle.key
        && data[source][key]
        && data[source][key][configTitle.type]
        ? data[source][key][configTitle.type][0]
        : data[source].subject.title;
    },
    sanitize(string) {
      const preTag = /{@@_HIGHLIGHT_@@/g;
      const postTag = /@@_HIGHLIGHT_@@}/g;
      return string
        .replace(preTag, '</nowiki><b class="wikisearch-term-highlight"><nowiki>')
        .replace(postTag, '</nowiki></b><nowiki>');
    },
    sanitizeSnippet(data) {
      if (!data) {
        return '';
      }
      return Array.isArray(data)
        ? data.map(e => `<nowiki>${this.sanitize(e)}</nowiki>`)
        : `<nowiki>${this.sanitize(data)}</nowiki>`;
    },
    getSnippets(data) {
      return data.highlight
        ? Object.values(data.highlight).flat()
        : [];
    },
    formatDates(dates) {
      return dates.map((date) => {
        const [, year, month, day] = date.split('/');
        // eslint-disable-next-line no-undef
        const monthName = mw.config.values.wgMonthNames[month];
        return `${day} ${monthName}, ${year}`;
      });
    },
    apiResult(data) {
      if (data.parse) {
        this.result = data.parse.text['*'];
        this.loading = false;
      }
    },
    parseTemplate() {
      this.loading = true;
      const params = {
        action: 'parse',
        text: this.parse,
        format: 'json',
        wrapoutputclass: 'wikisearch-wiki-template__output',
        disablelimitreport: true,
        disabletoc: true,
      };
      this.$store.dispatch('doApiCall', {
        actions:
            {
              params,
              component: this,
            },
      });
    },
  },
};
</script>

<style>
.wikisearch-wiki-template--loading {
  border-radius: .5em;
  height: 1em;
  max-width: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: 8em;
}
</style>
