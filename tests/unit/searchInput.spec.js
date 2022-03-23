import { shallowMount, createLocalVue } from '@vue/test-utils';

import i18n from 'vue-banana-i18n';
import Vue from 'vue';
import Vuex from 'vuex';
import SearchInput from '../../src/components/SearchInput.vue';

// eslint-disable-next-line no-unused-vars
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

Vue.use(i18n, {
  locale: 'es',
  messages,
});

const localVue = createLocalVue();
localVue.use(Vuex);

// initialization
describe('SearchInput.vue --- initialization', () => {
  window.mw = mw;
  let store;

  beforeEach(() => {
    store = baseStore;
  });

  it('outputs the search bar into the DOM', () => {
    const wrapper = shallowMount(SearchInput, { store, localVue });
    const parentDiv = wrapper.find('div.wikisearch--search');

    expect(parentDiv.exists()).toBe(true);
    expect(parentDiv.find('input.wikisearch--search-input').exists()).toBe(true);
    expect(parentDiv.find('span.wikisearch--search-button').exists()).toBe(true);
  });

  it('initializes the search bar empty', () => {
    const wrapper = shallowMount(SearchInput, { store, localVue });
    expect(wrapper.text()).toMatch('search');
  });

  // adds icon

  // displays button correctly
});

// search behaviour
describe('SearchInput.vue --- behaviour', () => {
  window.mw = mw;
  let store;

  const searchTerm = 'Search term';

  beforeEach(() => {
    store = baseStore;
  });

  it('returns the search query within the search bar', () => {
    store.commit('SET_TERM', searchTerm);
    const wrapper = shallowMount(SearchInput, { store, localVue });
    const inputField = wrapper.find('input.wikisearch--search-input').element.value;

    expect(inputField).toEqual(searchTerm);
  });

  it('deletes the search query when asked', () => {
    store.commit('SET_TERM', searchTerm);
    const wrapper = shallowMount(SearchInput, { store, localVue });
    const inputField = wrapper.find('span.wikisearch--search-clear').trigger('click');

    expect(inputField).toMatchObject({});
  });
});
