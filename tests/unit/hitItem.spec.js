/* eslint-disable no-underscore-dangle */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import i18n from 'vue-banana-i18n';
import Vue from 'vue';
import Vuex from 'vuex';

import HitItem from '../../src/components/HitItem.vue';
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

const hit = {
  _index: 'smw-data-wiki-v1',
  _type: 'data',
  _id: '1092',
  _score: 10,
  _source: {
    subject: {
      title: "Are You Embarrassed By Your ICT Skills? Here's What To Do", subobject: '', namespace: 0, interwiki: '', sortkey: "Are You Embarrassed By Your ICT Skills? Here's What To Do", serialization: "Are_You_Embarrassed_By_Your_ICT_Skills?_Here's_What_To_Do#0##", sha1: '37352bfc343302b09af6960e14a67d6e6ac733e0', rev_id: 1106, namespacename: '',
    },
    'P:631': { txtField: ['Page'] },
    'P:748': { wpgField: ['ICT'], wpgID: [1041] },
    'P:635': { wpgField: ['1'], wpgID: [640] },
    'P:702': { wpgField: ["Are You Embarrassed By Your ICT Skills? Here's What To Do# ERRb78a3223503896721cca1303f776159b"], wpgID: [1407] },
    'P:29': { datField: [2459320.9450926], dat_raw: ['1/2021/4/16/10/40/56/0'] },
    'P:749': { numField: [49] },
  },
};

Vue.use(i18n, {
  locale: 'es',
  messages,
});

const localVue = createLocalVue();
localVue.use(Vuex);

// hit initialization
describe('HitItem.vue --- initialization', () => {
  window.mw = mw;
  let store;

  beforeEach(() => {
    store = baseStore;
  });

  it('Outputs the hit page title', () => {
    const wrapper = shallowMount(HitItem, {
      store, localVue, propsData: { hit },
    });

    const pageTitle = wrapper.find('.wikisearch--hit__pagetitle').text();

    expect(pageTitle).toMatch(hit._source.subject.title);
  });

  it('Outputs the hit date', () => {
    const wrapper = shallowMount(HitItem, {
      store, localVue, propsData: { hit },
    });

    const pageDate = wrapper.find('.wikisearch--hit__date').text();

    expect(pageDate).toBe('16 apr, 2021');
  });

  it('Outputs the hit page body', () => {
    const wrapper = shallowMount(HitItem, {
      store, localVue, propsData: { hit },
    });

    const pageBody = wrapper.find('.wikisearch--hit__body').text();

    expect(pageBody).toBe(''); // empty for now
  });

  it('Outputs the hit link with correct page and text', () => {
    const wrapper = shallowMount(HitItem, {
      store, localVue, propsData: { hit },
    });

    const pageLink = wrapper.find('.wikisearch--hit__link a');
    const link = decodeURIComponent(pageLink.element.pathname);
    const text = pageLink.text();

    expect(link).toMatch(hit._source.subject.title);
    expect(text).toBe(hit._source.subject.title);
  });
});

// hit behaviour
describe('HitItem.vue --- initialization', () => {
  window.mw = mw;
  let store;

  beforeEach(() => {
    store = baseStore;
  });

  it('Heads to the hit URL when clicked', async () => {
    const wrapper = shallowMount(HitItem, {
      store, localVue, propsData: { hit },
    });

    const pageLink = wrapper.find('.wikisearch--hit__link a');
    const pathName = pageLink.element;
    const hrefValue = `${window.location.href}${encodeURIComponent(hit._source.subject.title)}`;

    expect(pathName.href).toBe(hrefValue);
  });
});
