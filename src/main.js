/**
 * This file is for development data and wont be in production build
 */
import Vue from 'vue';
import i18n from 'vue-banana-i18n';
import mw from './mock';
import App from './App.vue';

window.mw = mw;

const messages = {
  en: {
    'wikisearchfront-clear-all-filters': 'Clear all filters',
    'wikisearchfront-total-eq': '{{PLURAL:$1|$1 result|$1 results|0=No results}}',
    'wikisearchfront-total-gte': 'More than {{PLURAL:$1|$1 result|$1 results}}',
    'wikisearchfront-total-lte': 'Less than {{PLURAL:$1|$1 result|$1 results}}',
    'wikisearchfront-date-range-from': 'Date from',
    'wikisearchfront-date-range-to': 'Date to',
    'wikisearchfront-more': 'Show more',
    'wikisearchfront-less': 'Show less',
    'wikisearchfront-order': 'Order by',
    'wikisearchfront-score': 'Relevance',
    'wikisearchfront-true': 'waar',
    'wikisearchfront-false': 'niet waar',
    'wikisearchfront-all': 'All',
    'wikisearchfront-page': ' / page',
    'wikisearchfront-info': `AND : combine two words <br>
                          OR : one or the other <br>
                          -word : exclude <br> 
                          "word" : exact <br>
                          w*rd : wildecard <br>
                          "word other"~5 : words appart`,
  },
  nl: {
    'wikisearchfront-clear-all-filters': 'wis alle filters',
    'wikisearchfront-search-total': '{{PLURAL:$1|$1 resultaat|$1 resultatent|0=Geen resultaten}}',
    'wikisearchfront-date-range-from': 'Datum vanaf',
    'wikisearchfront-date-range-to': 'Datum tot',
    'wikisearchfront-search-order': 'Sorteer op',
    'wikisearchfront-search-score': 'Relevantie',
  },
};

Vue.use(i18n, {
  locale: 'en',
  messages,
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
