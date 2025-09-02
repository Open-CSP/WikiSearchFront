<template>
  <facet-combobox
    :pending="pending"
    no-count
    :buckets="buckets"
    :name="name"
    :label="label"
    @input="ask"
    @search="search"
  />
</template>

<script>
import Vue from 'vue';
import FacetCombobox from './FacetCombobox.vue';

export default {
  name: 'FacetAskCombobox',
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
    query: {
      type: String,
      default: '',
    },
    queryData: {
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
        this.ask(el.value, 'inital');
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
      const outputLabel = this.queryText;
      const alreadySelected = [];
      const { selected } = this.$store.state;
      const outputBuckets = selected
        .map((el) => {
          let outputSelected = false;
          if (el.key && el.key === this.name) {
            alreadySelected.push(el.value);
            outputSelected = { key: el.value, doc_count: 1 };
            if (el.name) {
              outputSelected.name = el.name;
            }
            if (el.type === 'query') {
              outputSelected.type = 'query';
              outputSelected.show = 'no';
            }
          }
          return outputSelected;
        })
        .filter((x) => x);

      Object.entries(data.query.results).forEach(([key, value]) => {
        let outkey = value.printouts[this.queryData];
        if (outkey) {
          outkey = outkey[0].fulltext || outkey[0];
          const buck = {
            doc_count: 1,
            key: outkey,
            page: key,
          };
          if (outputLabel && value.printouts[outputLabel]) {
            const label = value.printouts[outputLabel];
            buck.name = label[0].fulltext || label[0];
            selected.forEach((el, i) => {
              if (
                el.key
                && el.key === this.name
                && el.value
                && el.value === outkey
              ) {
                selected[i].name = buck.name;
                if (el.type === 'query') {
                  selected[i].type = 'query';
                }
                Vue.set(this.$store.state.selected, i, selected[i]);
                if (outputBuckets[i]) {
                  outputBuckets[i].name = buck.name;
                }
              }
            });
          }
          if (!alreadySelected.includes(outkey)) {
            outputBuckets.push(buck);
          }
        }
      });
      if (outputBuckets.length > 0) {
        console.log(outputBuckets);
        this.buckets = outputBuckets;
      } else {
        this.buckets = [{ doc_count: 1, key: '', show: 'no' }];
      }
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
    ask(term, inital) {
      this.pending = true;
      const outputData = this.queryData;
      const outputLabel = this.queryText;
      const output = outputLabel || inital ? `|?${outputData}|?${outputLabel}` : `|?${outputData}`;
      const input = outputLabel && !inital ? outputLabel : outputData;
      const askQuery = `${this.query}[[${input}::in:${term}]]${output}`;
      console.log(askQuery);
      const params = {
        action: 'ask',
        query: askQuery,
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
