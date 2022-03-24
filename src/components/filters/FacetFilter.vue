<template>
  <div
    :class="`wikisearch-filter wikisearch-filter--${strip(name)}`"
    role="group"
    :aria-labelledby="`filter__label--${strip(name)}`"
  >
    <span
      v-if="strippedBuckets.length"
      class="wikisearch-filter__label"
    >
      <label
        :id="`filter__label--${strip(name)}`"
      >
        {{ cleanName }}
      </label>
    </span>
    <div class="wikisearch-filter__options">
      <facet-checkbox
        v-for="(agg, i) in bucketsToShow"
        v-show="i < collapsed || open"
        :key="i + agg.key + name"
        :agg="agg"
        :index="i"
        :name="name"
      />
      <wikisearch-button
        v-if="strippedBuckets.length > collapsed"
        class="wikisearch-filter__button"
        :icon="open ? 'up' : 'down'"
        :label="$i18n(`wikisearchfront-${lessOrMore}`)"
        @click="open = !open"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import FacetCheckbox from './FacetCheckbox.vue';
import WikisearchButton from '../Button.vue';
import { strip } from '../../utilities/stringUtils';

export default {
  name: 'FacetFilter',
  components: {
    FacetCheckbox,
    WikisearchButton,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    buckets: {
      type: [Array, Object],
      default() {
        return {};
      },
    },
    translation: {
      type: String,
      default: '',
    },
    query: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      open: false,
      // eslint-disable-next-line no-undef
      config: mw.config.values.WikiSearchFront.config,
      translations: '',
      strippedBuckets: '',
      bucketsToShow: '',
      fired: false,
    };
  },
  computed: {
    /**
     * @returns {Number} number of uncollapsed items
     */
    collapsed() {
      return this.config.settings.facets
        ? parseInt(this.config.settings.facets, 10)
        : 5;
    },
    /**
     * @returns {Array} bucktes for watch
     */
    propChange() {
      return this.buckets;
    },
    /**
     * @returns {String} title for filter group header
     */
    cleanName() {
      return this.label || this.name.replace(/_/g, ' ');
    },
    /**
     * @returns {String} less or more
     */
    lessOrMore() {
      return this.open ? 'less' : 'more';
    },
  },
  /**
   * watch for changes in buckets
   */
  watch: {
    propChange() {
      this.organize();
    },
  },
  mounted() {
    /**
     * do translations
     */
    if (this.translation) {
      const params = {
        action: 'ask',
        query: `${this.query}|limit=500|?${this.translation}`,
        format: 'json',
        formatversion: 2,
      };
      this.$store.dispatch('doApiCall', {
        actions:
          {
            params,
            component: this,
          },
      });
    } else {
      this.organize();
    }
  },
  methods: {
    /**
     * @param {Object} data query result from ask api
     */
    apiResult(data) {
      if (data.query) {
        this.translations = data.query.results;
        this.organize();
      }
    },
    /**
     * organize buckets
     */
    organize() {
      let organizedBuckets = [];
      const { selected } = this.$store.state;

      // check if buckets are an array, if not create array from the object
      organizedBuckets = Array.isArray(this.buckets)
        ? this.buckets
        : Object.entries(this.buckets).map((entrie) => {
          const out = entrie[1];
          [out.key] = entrie;
          return out;
        });

      // remove buckets with 0 doc count
      organizedBuckets = organizedBuckets
        ? organizedBuckets.filter((el) => el.doc_count > 0)
        : [];

      if (selected.length > 0 && !this.fired) {
        if (this.translation) {
          organizedBuckets.forEach((element, i) => {
            const transKey = this.translations[element.key];
            if (
              transKey
            && transKey.printouts[this.translation]
            ) {
              if (transKey.printouts[this.translation][0].fulltext) {
                organizedBuckets[i].name = transKey.printouts[this.translation][0].fulltext;
              } else {
                [organizedBuckets[i].name] = transKey.printouts[this.translation];
              }
            }
          });
        }

        selected.forEach((element, i) => {
          if (this.translation) {
            const transValue = this.translations[element.value];
            if (
              transValue
              && transValue.printouts[this.translation]
            ) {
              if (
                transValue.printouts[this.translation][0].fulltext
              ) {
                selected[i].name = transValue.printouts[this.translation][0].fulltext;
              } else {
                [selected[i].name] = transValue.printouts[this.translation];
              }
              Vue.set(this.$store.state.selected, i, selected[i]);
            }
          }
          const value = this.config.facetSettings[selected[i].key]
            ? this.config.facetSettings[selected[i].key] : false;
          if (value) {
            const { valueLabel } = this.config.facetSettings[selected[i].key];
            selected[i].name = valueLabel;
          }
          Vue.set(this.$store.state.selected, i, selected[i]);
        });
        this.fired = true;
      } else {
        this.fired = true;
      }

      if (this.type === 'date') {
        this.strippedBuckets = organizedBuckets.reverse();
      } else if (
        this.config.facetSettings[this.name]
        && this.config.facetSettings[this.name].sort
        === 'alphabetically'
      ) {
        this.strippedBuckets = organizedBuckets.sort((a, b) => {
          const textA = a.key.toUpperCase();
          const textB = b.key.toUpperCase();
          // eslint-disable-next-line no-nested-ternary
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
      } else if (
        this.config.facetSettings[this.name]
        && this.config.facetSettings[this.name].sort
        === 'alphanumeric'
      ) {
        const reA = /[^a-zA-Z]/g;
        const reN = /[^0-9]/g;
        this.strippedBuckets = organizedBuckets.sort((a, b) => {
          const textA = a.key.toUpperCase();
          const textB = b.key.toUpperCase();
          const aA = textA.split(' ')[0].replace(reA, '');
          const bA = textB.split(' ')[0].replace(reA, '');
          if (aA === bA) {
            const aN = parseInt(textA.replace(reN, ''), 10);
            const bN = parseInt(textB.replace(reN, ''), 10);
            // eslint-disable-next-line no-nested-ternary
            return aN === bN ? 0 : aN > bN ? 1 : -1;
          }
          return aA > bA ? 1 : -1;
        });
      } else {
        this.strippedBuckets = organizedBuckets;
      }

      const { value } = this.config.facetSettings[this.name];
      if (value) {
        const { valueLabel } = this.config.facetSettings[this.name];
        const bucket = {
          key: value,
          doc_count: 0,
          show: 'yes',
        };
        if (valueLabel) {
          bucket.name = valueLabel;
        }
        this.strippedBuckets = [bucket];
      }
      this.bucketsToShow = this.strippedBuckets;
    },
    strip(string) {
      return strip(string);
    },
  },
};
</script>

<style >
.wikisearch-button.wikisearch-filter__button {
  flex-direction: row-reverse;
  justify-content: center;
  padding-top: .1em;
  padding-bottom: .1em;
  padding-block: .1em;
}

.wikisearch-button.wikisearch-filter__button .wikisearch-button__label {
  padding: 0 1em 0 0 ;
}
</style>
