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
import { useSearchStore, getSelection } from '../../store/index';
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
  setup() {
    return { store: useSearchStore() };
  },
  mounted() {
    this.store.selected.forEach((el) => {
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
        const newSelection = this.store.selected.filter(selected => selected.key !== this.name);
        if (term) {
          this.buckets.push({
            key: term,
            doc_count: 1,
            type: 'query',
            show: 'no',
          });
          newSelection.push({ key: this.name, value: term, type: 'query' });
        }
        this.store.setSelected(newSelection);
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
        filter: JSON.stringify(getSelection(this.store)),
        search_term: prepareQuery(this.store.term),
        property: this.name,
        term: prepareQuery(term),
        format: 'json',
        formatversion: 2,
      };
      this.store.doApiCall({ params, component: this });
    },
  },
};
</script>
