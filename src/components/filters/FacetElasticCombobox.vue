<template>
  <facet-combobox
    :pending="pending"
    :buckets="buckets"
    :no-count="facetSettings[name].count === 'false'"
    :name="name"
    :label="label"
    @input="ask"
    @search="search"
  />
</template>

<script>
// import Vue from 'vue';
import { getSelection } from '../../store';
import FacetCombobox from './FacetCombobox.vue';
import prepareQuery from '../../utilities/elastic';

export default {
  name: 'FacetElasticCombobox',
  components: {
    'facet-combobox': FacetCombobox,
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
  },
  data() {
    return {
      pending: false,
      buckets: [{ doc_count: 1, key: '', show: 'no' }],
      // eslint-disable-next-line no-undef
      facetSettings: mw.config.values.WikiSearchFront.config.facetSettings,
    };
  },
  mounted() {
    const { selected } = this.$store.state;
    selected.forEach((el) => {
      if (
        el.key
        && el.key === this.name
        && el.type !== 'query'
      ) {
        this.ask(el.value);
      }
    });
  },
  methods: {
    /**
     * process results from ask api query
     *
     * @param {Object} data result data from aks api query
     * @sets vue-data buckets
     */
    apiResult(data) {
      this.pending = false;
      this.buckets = data.result.length
        ? data.result
        : [{ doc_count: 1, key: '', show: 'no' }];
    },
    /**
     * @event emited from facet-combobox
     * @param {String} term user typed search term
     */
    search(term) {
      if (
        this.facetSettings[this.name]
        && this.facetSettings[this.name].search
      ) {
        const selection = this.$store.state.selected;
        const newSelection = selection.filter(selected => selected.key !== this.name);
        if (term) {
          this.buckets.push({
            key: term,
            doc_count: 1,
            type: 'query',
            show: 'no',
          });
          newSelection.push({ key: this.name, value: term, type: 'query' });
        }
        this.$store.commit('SET_SELECTED', newSelection);
      }
    },
    /**
     * @event emited from facet-combobox
     * @param {String} term user typed search term
     * @param {Boolan} initial initiated on load or on user input
     */
    ask(term) {
      this.pending = true;
      const params = {
        action: 'query',
        meta: 'WikiSearchCombobox',
        // eslint-disable-next-line no-undef
        pageid: mw.config.values.wgArticleId,
        filter: JSON.stringify(getSelection(this.$store.state)),
        search_term: prepareQuery(this.$store.state.term),
        property: this.name,
        term: prepareQuery(term),
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
  },
};
</script>
