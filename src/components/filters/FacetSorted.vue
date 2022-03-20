<template>
  <div>
    <div
      v-for="(typer, i) in outputBuckets"
      :key="i"
      :class="'wikisearch-filter'"
    >
      <span
        v-if="typer.buckets.length"
        class="wikisearch-filter__label"
      >
        <label>
          {{ i }}
        </label>
      </span>
      <div class="wikisearch-filter__options">
        <template
          v-if="typer.buckets.length > collapsed && !open.includes(i)"
        >
          <facet-checkbox
            v-for="(agg, j) in typer.buckets.slice(0, collapsed)"
            :key="j + agg.key + name"
            :agg="agg"
            :index="j"
            :name="name"
          />
          <facet-checkbox
            v-for="(agg, k) in typer.buckets.slice(
              collapsed,
              typer.buckets.length
            )"
            :key="k + agg.key + name"
            :agg="agg"
            :index="k"
            :name="name"
            style="display: none"
          />
        </template>
        <template v-else>
          <facet-checkbox
            v-for="(agg, l) in typer.buckets"
            :key="l + agg.key + name"
            :agg="agg"
            :index="l"
            :name="name"
          />
        </template>
        <wikisearch-button
          v-if="typer.buckets.length > collapsed"
          class="wikisearch-filter__button"
          :icon="open.includes(i) ? 'up' : 'down'"
          :label="$i18n(open.includes(i) ? 'wikisearchfront-less' : 'wikisearchfront-more')"
          @click="lessOrMore(i)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FacetCheckbox from './FacetCheckbox.vue';
import WikisearchButton from '../Button.vue';

export default {
  name: 'FacetSorted',
  components: {
    FacetCheckbox,
    WikisearchButton,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    buckets: {
      type: [Array, Object],
      default() {
        return {};
      },
    },
    queryData: {
      type: String,
      default: '',
    },
    query: {
      type: String,
      default: '',
    },
    queryText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      open: [],
      // eslint-disable-next-line no-undef
      facetSize: mw.config.values.WikiSearchFront.config.settings.facets,
      translations: '',
    };
  },
  computed: {
    /**
     * @returns {Number} number of facets to show uncollapsed
     */
    collapsed() {
      return this.facetSize ? parseInt(this.facetSize, 10) : 5;
    },
    /**
     * @returns {Array} sorted buckets
     */
    outputBuckets() {
      const out = {};
      const newTranslations = this.translations;
      this.buckets.forEach((element) => {
        if (newTranslations[element.key]) {
          if (!out[newTranslations[element.key]]) {
            out[newTranslations[element.key]] = { buckets: [element] };
          } else {
            out[newTranslations[element.key]].buckets.push(element);
          }
        }
      });

      const sorted = Object.keys(out)
        .sort()
        .reduce(
          (acc, key) => ({
            ...acc,
            [key]: out[key],
          }),
          {},
        );

      return sorted;
    },
  },
  mounted() {
    const params = {
      action: 'ask',
      query: `${this.query}|limit=500|?${this.queryData}|?${this.queryText}`,
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
  },
  methods: {
    /**
     * @param {Object} data result data from ask api query
     */
    apiResult(data) {
      const stripQueryData = this.queryData.split('.');
      const strip = stripQueryData[stripQueryData.length - 1];
      const newTranslations = {};
      let sr = '';
      let rs = '';
      if (data.query) {
        Object.entries(data.query.results).forEach((element) => {
          const queryResult = element[1];
          if (
            queryResult.printouts
            && queryResult.printouts[this.queryText]
            && queryResult.printouts[strip]
          ) {
            if (
              queryResult.printouts[this.queryText][0]
              && queryResult.printouts[this.queryText][0].fulltext
            ) {
              sr = queryResult.printouts[this.queryText][0].fulltext;
            } else {
              [sr] = queryResult.printouts[this.queryText];
            }

            if (queryResult.printouts[strip][0] && queryResult.printouts[strip][0].fulltext) {
              rs = queryResult.printouts[strip][0].fulltext;
            } else {
              [rs] = queryResult.printouts[strip];
            }
            newTranslations[sr] = rs;
          }
          this.translations = newTranslations;
        });
      }
    },
    /**
     * @param {String} ob filter group key
     */
    lessOrMore(ob) {
      const index = this.open.indexOf(ob);
      if (index > -1) {
        this.open.splice(index, 1);
      } else {
        this.open.push(ob);
      }
    },
  },
};
</script>
