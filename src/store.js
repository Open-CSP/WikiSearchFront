import Vue from 'vue';
import Vuex from 'vuex';
import { createDate } from './utilities/dateUtils';
import prepareQuery from './utilities/elastic';

Vue.use(Vuex);

const { moment } = window;

// eslint-disable-next-line no-undef
const mediaWikiValues = mw.config.values;

/**
 * create url parameter string from state
 *
 * @param {Object} state vuex state object
 * @returns {String}     url string
 */
function createUrlString(state) {
  const url = new URL(window.location.href);
  const { searchParams } = url;

  if (state.from > 0) {
    searchParams.set('offset', state.from);
  } else {
    searchParams.delete('offset');
  }

  if (state.term) {
    searchParams.set('term', state.term);
  } else {
    searchParams.delete('term');
  }

  if (mediaWikiValues.WikiSearchFront.config.settings['sort options']) {
    if (state.sortOrder && state.sortOrderType !== 'score') {
      searchParams.set('order', state.sortOrder);
    } else {
      searchParams.delete('order');
    }

    if (state.sortOrderType && state.sortOrderType !== 'score') {
      searchParams.set('ordertype', state.sortOrderType);
    } else {
      searchParams.delete('ordertype');
    }
  }

  if (!state.selected.length) {
    searchParams.delete('filters');
  } else {
    const filtersUrl = state.selected.map((item) => {
      let out;
      if (item.range) {
        if (state.realDates[item.value]) {
          out = `range_${item.value}_${item.key}^^${state.realDates[item.value].from}_${state.realDates[item.value].to}`;
        } else {
          out = `range_${item.value}_${item.key}^^${item.range.gte}_${item.range.lte}`;
        }
      } else if (item.type && item.type === 'query') {
        out = `query_${item.key}^^${item.value}`;
      } else {
        out = `${item.key}^^${item.value}`;
      }
      return out;
    }).join('~~');

    searchParams.set('filters', filtersUrl);
  }

  return url;
}

/**
 * get state from url parameters
 *
 * @param {Object} state         vuex state object
 * @param {Object} facetSettings settings retrieved from config
 * @returns {Object}             states to set on vuex store
 */
function getStateFromUrl(state, facetSettings) {
  const output = {};
  const urlParams = new URLSearchParams(window.location.search);
  const term = urlParams.get('term');
  const offset = urlParams.get('offset');
  const filters = urlParams.get('filters');
  const orderType = urlParams.get('ordertype');
  const order = urlParams.get('order');

  if (term) {
    output.term = term;
  }

  if (order) {
    output.sortOrder = order;
  }

  if (orderType) {
    output.sortOrderType = orderType;
  }

  if (offset) {
    output.from = parseInt(offset, 10);
  }

  if (filters) {
    const urlFiltersOutput = [];

    const filterOptions = {
      range: (_, values, secondKey, lastKey) => {
        const [from, to] = values.split('_');
        let gte = from;
        let lte = to;

        if (secondKey === 'customrange') {
          output.realDates = state.realDates;
          output.realDates.customrange = { from, to };
        }

        const calPropName = mediaWikiValues.WikiSearchFront.config.settings.calendar
          ? mediaWikiValues.WikiSearchFront.config.settings.calendar.name
          : 'Modification date';

        if (
          secondKey === 'customrange'
          || secondKey === 'date'
          || lastKey === 'Modification date'
          || lastKey === calPropName
          || facetSettings[lastKey].type === 'date'
        ) {
          output.rangeFrom = createDate(from);
          output.rangeTo = createDate(to);
          gte = output.rangeFrom;
          lte = output.rangeTo;
        }

        urlFiltersOutput.push({
          key: lastKey,
          value: secondKey,
          range: {
            gte,
            lte,
          },
        });
      },
      query: (_, values, secondKey) => {
        urlFiltersOutput.push({
          value: values,
          key: secondKey,
          type: 'query',
        });
      },
      default: (keys, values) => {
        urlFiltersOutput.push({
          value: values,
          key: keys,
        });
      },
    };

    filters.split('~~').forEach((filter) => {
      const [keys, values] = filter.split('^^');
      const [firstKey, secondKey, lastKey] = keys.split('_');

      (filterOptions[firstKey] || filterOptions.default)(keys, values, secondKey, lastKey);
    });
    output.selected = urlFiltersOutput;
  }
  return output;
}

/**
 * create date ranges for date facets
 *
 * @param {Date} today
 * @returns {Object} ranges
 */
function createDateRanges(today, facetSettings) {
  // today
  const to = moment().format('YYYY-MM-DD');
  // human readable dates
  const realDateRanges = {
    'Last Week': { from: moment().subtract(7, 'days').format('YYYY-MM-DD'), to },
    'Last Month': { from: moment().subtract(1, 'months').format('YYYY-MM-DD'), to },
    'Last Quarter': { from: moment().subtract(1, 'quarter').format('YYYY-MM-DD'), to },
  };

  let max = 5;
  Object.keys(facetSettings).forEach((key) => {
    if (facetSettings[key].display === 'date') {
      max = facetSettings[key].max;
    }
  });
  // 5 years or max setting
  for (let i = 0; i < max; i += 1) {
    const key = today.getFullYear() - i;
    realDateRanges[key] = { from: `${key}-01-01`, to: `${key + 1}-01-01` };
  }
  // convert to julian dates
  const dateRanges = Object.entries(realDateRanges).map(([key, value]) => ({
    key: key.toString(),
    from: createDate(value.from),
    to: createDate(value.to),
  }));

  const facetRanges = [];
  Object.keys(facetSettings).forEach((key) => {
    if (facetSettings[key].display === 'date') {
      facetRanges.push(
        {
          type: 'range',
          ranges: dateRanges,
          property: key,
        },
      );
    }
  });

  return { facet: facetRanges, real: realDateRanges };
}

/**
 * create ranges for range facets
 *
 * @param {Object} facetSettings settings retrieved from config
 * @param {Object} ranges        range objects
 * @param {Date} today           date today
 */
function createMoreRanges(facetSettings, ranges, today) {
  const rangeProp = [];
  const { facet, real } = ranges;

  Object.keys(facetSettings).forEach((key) => {
    const newSetting = facetSettings[key];
    if (newSetting.display === 'range') {
      newSetting.name = key;
      rangeProp.push(newSetting);
    }
  });

  if (rangeProp.length > 0) {
    rangeProp.forEach((prop) => {
      const max = parseInt(prop.max, 10);
      const step = parseInt(prop.step, 10);
      const moreRanges = [];

      if (prop.type === 'date') {
        for (let x = 0; x < max; x += 1) {
          const key = today.getFullYear() - x;
          real[key] = {
            from: `${key}-01-01`,
            to: `${key + 1}-01-01`,
          };
          moreRanges.push({
            key: key.toString(),
            from: createDate(`${key}-01-01`),
            to: createDate(`${key + 1}-01-01`),
          });
        }
      } else {
        for (let i = 1; i < max + 1; i += step) {
          moreRanges.push({ from: i, to: max + 1, key: i + step - 1 });
        }
      }

      facet.push({
        type: 'range',
        ranges: moreRanges,
        property: prop.name,
      });
    });
  }
  return [facet, real];
}

/**
 * gets selected filters for sending to api
 *
 * @param {Object} state vuex state object
 * @returns {Array}      active filters array for api query
 */
function getSelection(state) {
  const selection = {};
  const selected = [];
  state.selected.forEach((element) => {
    const settings = mediaWikiValues.WikiSearchFront.config.facetSettings[element.key];

    const out = element;
    if (settings?.not) {
      out.negate = true;
    }

    const value = element?.type === 'query'
      ? prepareQuery(out.value)
      : out.value;

    if (
      settings
      && settings.logic
      && settings.logic === 'or'
    ) {
      if (!selection[element.key]) {
        selection[element.key] = [value];
      } else {
        selection[element.key].push(value);
      }
    } else if (out.value !== 'unset') {
      selected.push({ ...out, value });
    }
  });

  Object.keys(selection).forEach((key) => {
    selected.push({ key, value: selection[key] });
  });

  const switchValues = Object.entries(mediaWikiValues.WikiSearchFront.config.facetSettings)
    .filter(([key, filter]) => filter.display === 'switch' && (state.switched[key] !== 'unset' || filter[filter.default] !== 'unset'))
    .map(([key, filter]) => {
      const out = { key, value: state.switched[key] || filter[filter.default] };
      if (filter.not) {
        out.negate = true;
      }
      return out;
    });

  return [...selected, ...switchValues];
}

function setInitialSelection(state) {
  if (mediaWikiValues.WikiSearchFront.config.settings.selected) {
    state.selected = mediaWikiValues.WikiSearchFront.config.settings.selected.split(';').map(item => {
      const [key, value] = item.split(':');
      return { key, value };
    });
  }
}

/**
 * vuex plugin that runs on all store mutations
 *
 * @param {Object} store vuex store object
 */
const updateStore = (store) => {
  store.subscribe((mutation, state) => {
    if (
      mutation.type === 'START'
      || mutation.type === 'SET_TERM'
      || mutation.type === 'CLEAR_ALL'
      || mutation.type === 'SET_FROM'
      || mutation.type === 'SET_ORDERTYPE'
      || mutation.type === 'SET_ORDER'
      || mutation.type === 'SET_SIZE'
      || mutation.type === 'SET_SELECTED'
      || mutation.type === 'SET_SWITCHED'
    ) {
      // reset page offset when mutation in not page change
      if (mutation.type !== 'SET_FROM' && mutation.type !== 'START') {
        store.commit('RESET_FROM');
      }

      if (mutation.type === 'START') {
        setInitialSelection(state);
      }

      store.commit('SET_LOADING');

      // update url parameters
      window.history.replaceState('', '', createUrlString(state));

      const selected = getSelection(state);

      // create parameters object for api
      const params = {
        action: 'query',
        meta: 'WikiSearch',
        format: 'json',
        filter: JSON.stringify(selected),
        term: prepareQuery(state.term),
        from: state.from,
        limit: state.size,
        pageid: mediaWikiValues.wgArticleId,
        aggregations: JSON.stringify(state.dates),
      };

      // when sort options are configured add them to the parameters
      if (
        mediaWikiValues.WikiSearchFront.config.settings['sort options']
        && state.sortOrderType !== 'score'
      ) {
        params.sortings = JSON.stringify([
          {
            type: 'property',
            property: state.sortOrderType,
            order: state.sortOrder,
          },
        ]);
      } else if (mediaWikiValues.WikiSearchFront.config.settings.sort) {
        params.sortings = JSON.stringify([
          {
            type: 'property',
            property: mediaWikiValues.WikiSearchFront.config.settings.sort,
            order: mediaWikiValues.WikiSearchFront.config.settings.order || 'asc',
          },
        ]);
      }
      // do WikiSearch api call
      store.dispatch('doApiCall', {
        actions:
          {
            params,
          },
      });
    }
  });
};

const store = new Vuex.Store({
  state: {
    loading: false,
    selected: [],
    switched: {},
    selectedResults: [],
    ongoingRequest: undefined,
    selectAllResults: false,
    sortOrder: 'desc',
    sortOrderType: 'score',
    hits: '',
    aggs: '',
    size: parseInt(mediaWikiValues.WikiSearchFront.config.settings.size, 10) || 10,
    total: 0,
    from: 0,
    calendarDate: moment(),
    rangeFrom: 0,
    rangeTo: 0,
    term: '',
    loaded: false,
    dates: [],
    realDates: {},
    apiCalls: [],
    renderedTemplates: {},
  },
  mutations: {
    SET_TEMPLATES(state, templates) {
      state.apiCalls = [];
      state.renderedTemplates = templates;
    },
    SET_API_CALLS(state, call) {
      state.apiCalls.push(call);
    },
    CLEAR_ALL(state) {
      state.selected = [];
      state.term = '';
    },
    SET_SELECTED(state, selected) {
      state.selected = selected;
    },
    SET_SWITCHED(state, switched) {
      state.switched = switched;
    },
    SET_SELECTED_RESULTS(state, selected) {
      state.selectedResults = selected;
    },
    SET_SELECT_ALL_RESULTS(state, selected) {
      state.selectAllResults = selected;
    },
    SET_CALENDAR_DATE(state, date) {
      state.calendarDate = date;
    },
    SET_TERM(state, term) {
      state.term = term;
    },
    SET_ORDER(state, order) {
      state.sortOrder = order;
    },
    SET_SIZE(state, size) {
      state.size = size;
    },
    SET_LOADING(state) {
      state.loading = true;
    },
    SET_ORDERTYPE(state, type) {
      state.sortOrderType = type;
    },
    SET_FROM(state, from) {
      state.from = from;
    },
    RESET_FROM(state) {
      state.from = 0;
    },
    START(state, start) {
      const { facetSettings } = mediaWikiValues.WikiSearchFront.config;

      state.loaded = start;

      const today = new Date();

      const ranges = createDateRanges(today, facetSettings);

      const [facetRanges, realRanges] = createMoreRanges(facetSettings, ranges, today);

      state.realDates = realRanges;
      state.dates = facetRanges;

      const statesFromUrl = getStateFromUrl(state, facetSettings);

      Object.entries(statesFromUrl).forEach(([key, value]) => {
        state[key] = value;
      });
    },
    SET_RANGE_from(state, range) {
      state.rangeFrom = range;
    },
    SET_RANGE_to(state, range) {
      state.rangeTo = range;
    },
    SET_REAL_DATES(state, date) {
      state.realDates = date;
    },
    SET_FROM_API(state, data) {
      state.hits = data.hits;
      state.total = data.total;
      state.aggs = data.aggs;
      state.loading = false;
    },
  },
  actions: {
    bundleApiCalls({ commit }, { actions }) {
      commit('SET_API_CALLS', {
        text: actions.text,
        index: actions.index,
      });
      // eslint-disable-next-line prefer-arrow-callback
      clearTimeout(this.ongoingRequest);
      this.ongoingRequest = setTimeout(() => {
        // eslint-disable-next-line no-undef
        const api = new mw.Api();
        const params = {
          action: 'parse',
          text: `<div>${store.state.apiCalls.map((call) => `${call.index}^^%%%^^${call.text}`).join('%%^^^%%')}</div>`,
          format: 'json',
          wrapoutputclass: '',
          disablelimitreport: true,
        };
        api.post(params).done((data) => {
          if (!data.parse) {
            return;
          }
          const result = data.parse.text['*'];
          const templates = Object.fromEntries(
            result.substring(5, result.length - 6)
              .split('%%^^^%%')
              .map(e => e.split('^^%%%^^')),
          );
          commit('SET_TEMPLATES', { ...store.state.renderedTemplates, ...templates });
        });
      }, 100);
    },
    doApiCall({ commit }, { actions }) {
      // eslint-disable-next-line no-undef
      const api = new mw.Api();

      // handle api call
      api.post(actions.params).done((data) => {
        // when call does not come form a component it is the WikiSearch api call
        if (!actions.component) {
          commit('SET_FROM_API', {
            hits: JSON.parse(data.result.hits),
            total: data.result.total?.value ? data.result.total.value : data.result.total,
            aggs: data.result.aggs,
          });
        } else {
          actions.component.apiResult(data);
        }
      });
    },
  },
  getters: {
    rangeFrom(state) {
      return state.rangeFrom;
    },
    rangeTo(state) {
      return state.rangeTo;
    },
  },
  plugins: [updateStore],
});

export { store, getSelection };
