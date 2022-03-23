import i18n from 'vue-banana-i18n';
import Vue from 'vue';
import mw from '../../src/mock';
import baseStore from '../../src/store';

const messages = {
  en: {
    hello_world: 'Hello world',
    search_results: 'Found $1 {{PLURAL:$1|result|results}}',
    profile_change_message: '$1 changed {{GENDER:$2|his|her}} profile picture',
  },
  ml: {
    hello_world: 'എല്ലാവർക്കും നമസ്കാരം',
    search_results: '{{PLURAL:$1|$1 ഫലം|$1 ഫലങ്ങൾ|1=ഒരു ഫലം}} കണ്ടെത്തി',
    profile_change_message: '$1 {{GENDER:$2|അവന്റെ|അവളുടെ}} പ്രൊഫൈൽ പടം മാറ്റി',
  },
};
const baseState = {
  loading: false,
  selected: [],
  sortOrder: 'desc',
  sortOrderType: 'score',
  hits: '',
  aggs: '',
  size: 10,
  total: 0,
  from: 0,
  rangeFrom: 0,
  rangeTo: 0,
  term: '',
  loaded: false,
  dates: [],
  realDates: {},
};

Vue.use(i18n, {
  locale: 'es',
  messages,
});

describe('MUTATIONS', () => {
  window.mw = mw;
  const store = baseStore;

  beforeEach(() => {
    store.replaceState(baseState);
  });

  it('sets the selected facets in the data', () => {
    const selectedFacets = ['Search term', 'teststring'];
    store.commit('SET_SELECTED', selectedFacets);
    expect(store.state.selected.join()).toMatch(
      selectedFacets.join(),
    );
  });

  it('sets the search term in the data', () => {
    const searchTerm = 'Search term';
    store.commit('SET_TERM', searchTerm);
    expect(store.state.term).toMatch(
      searchTerm,
    );
  });

  it('sets the page of the search results in the data', () => {
    const from = 2;
    store.commit('SET_FROM', from);
    expect(store.state.from).toBe(
      from,
    );
  });

  it('set the starting boolean in the data', () => {
    const start = true;
    store.commit('START', start);
    expect(store.state.loaded).toBe(
      start,
    );
  });

  it('sets the minimum range point in the data', () => {
    const rangeFrom = 100;
    store.commit('SET_RANGE_from', rangeFrom);
    expect(store.state.rangeFrom).toBe(
      rangeFrom,
    );
  });

  it('sets the maximum range point in the data', () => {
    const rangeTo = 200;
    store.commit('SET_RANGE_to', rangeTo);
    expect(store.state.rangeTo).toBe(
      rangeTo,
    );
  });

  it('sets the real dates in the data', () => {
    const realDates = { from: '2020-04-05', to: '2021-04-05' };
    store.commit('SET_REAL_DATES', realDates);
    expect(store.state.realDates).toBe(
      realDates,
    );
  });
});
