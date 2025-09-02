<template>
  <div id="app">
    <div
      class="wikisearch"
      :class="[selectedClass, themeClass]"
    >
      <search-input />
      <pills-selected
        v-if="showElement"
      />
      <sort-order
        v-if="settings['sort options'] && showElement"
        :settings="settings"
      />
      <div
        class="wikisearch-filters"
        :class="{ 'wikisearch-filters__hiden' : openFilters }"
      >
        <wikisearch-button
          class="wssearch-button--hide-filters"
          :icon="'close'"
          :type="'icon'"
          @click="openFilters = !openFilters"
        />
        <wikisearch-calendar-tools
          v-if="settings.layout === 'calendar'"
          :outertime="$store.state.calendarDate"
        />
        <div
          v-if="state.aggs"
          class="wikisearch-filters__wrapper"
        >
          <component
            :is="filterObject.component"
            v-for="(filterObject, name) in filters"
            :key="name"
            :translation="facetSettings[name].translation"
            :query="facetSettings[name].query"
            :query-text="facetSettings[name].text"
            :query-data="facetSettings[name].data"
            :type="facetSettings[name].type"
            :settings="facetSettings[name]"
            :buckets="filterObject.buckets || []"
            :label="facetSettings[name].label"
            :name="name"
          />
        </div>
      </div>
      <div class="wikisearch-total">
        <b
          v-if="state.total > 0"
          class="wikisearch-total__nr"
        >
          {{ state.total }}
        </b>
        {{ $i18n('wikisearchfront-total', state.total) }}
      </div>
      <div class="wikisearch-action">
        <wikisearch-checkbox
          v-if="settings.action"
          class="wikisearch-action__checkbox"
          @change="selectAll"
        />
        <wikisearch-button
          v-if="settings.action"
          class="wikisearch-action__button"
          :label="settings.action.label"
          :type="state.selectedResults.length ? 'progressive' : ''"
          @click="doAction"
        />
      </div>
      <div
        class="wikisearch-results"
      >
        <component :is="resultDisplay" />
        <wikisearch-pagers
          v-if="showElement"
          :size="state.size"
          :from="state.from"
          :total="state.total"
          :settings="settings"
        />
      </div>
      <wikisearch-button
        class="wssearch-button--show-filters"
        :icon="'settings'"
        :label="'Filters'"
        :type="'progressive'"
        @click="openFilters = !openFilters"
      />
    </div>
  </div>
</template>

<script>
import { store } from './store';
import { strip } from './utilities/stringUtils';

import SearchInput from './components/SearchInput.vue';
import PillsSelected from './components/PillsSelected.vue';
import SortOrder from './components/SortOrder.vue';
import WikisearchButton from './components/Button.vue';
import WikisearchCheckbox from './components/Checkbox.vue';
import WikisearchPagers from './components/Pagers.vue';

import WikisearchResults from './components/results/Results.vue';
import WikisearchResultsCalendar from './components/results/ResultsCalendar.vue';
import WikisearchResultsTemplate from './components/results/ResultsTemplate.vue';
import WikisearchResultsCalendarYear from './components/results/ResultsCalendarYear.vue';

import WikisearchCalendarTools from './components/CalendarTools.vue';

import FacetDateRange from './components/filters/FacetDateRange.vue';
import FacetRangeSlider from './components/filters/FacetRangeSlider.vue';
import FacetCombobox from './components/filters/FacetCombobox.vue';
import FacetAskCombobox from './components/filters/FacetAskCombobox.vue';
import FacetElasticCombobox from './components/filters/FacetElasticCombobox.vue';
import FacetFilter from './components/filters/FacetFilter.vue';
import FacetSwitch from './components/filters/FacetSwitch.vue';
import FacetSearch from './components/filters/FacetSearch.vue';
import FacetSorted from './components/filters/FacetSorted.vue';

export default {
  store,
  name: 'App',
  components: {
    // ui
    SearchInput,
    PillsSelected,
    SortOrder,
    WikisearchPagers,
    WikisearchButton,
    WikisearchCheckbox,
    WikisearchResults,
    WikisearchResultsTemplate,
    WikisearchResultsCalendar,
    WikisearchResultsCalendarYear,
    WikisearchCalendarTools,
    // filters
    FacetCombobox,
    FacetFilter,
    FacetSwitch,
    FacetAskCombobox,
    FacetElasticCombobox,
    FacetSearch,
    FacetSorted,
    FacetDateRange,
    FacetRangeSlider,
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      config: mw.config.values.WikiSearchFront.config,
      openFilters: false,
    };
  },
  computed: {
    facetSettings() { return this.config.facetSettings; },
    hitSettings() { return this.config.hitSettings; },
    settings() { return this.config.settings; },
    state() { return this.$store.state; },
    themeClass() {
      return this.settings.theme ? `wikisearch--theme-${this.settings.theme}` : '';
    },
    selectedClass() {
      return this.state.selected.map(el => `wss-selected--${this.strip(el.key)}--${this.strip(el.value)}`)
        .join(' ');
    },
    showElement() {
      return this.settings.layout !== 'calendar';
    },
    resultDisplay() {
      const component = {
        calendar: this.settings.calendar && this.settings.calendar.display === 'year'
          ? WikisearchResultsCalendarYear
          : WikisearchResultsCalendar,
        template: WikisearchResultsTemplate,
        default: WikisearchResults,
      };

      return component[this.settings.layout] || component.default;
    },
    filters() {
      const components = {
        combobox: FacetCombobox,
        sorted: FacetSorted,
        search: FacetSearch,
        switch: FacetSwitch,
        datepicker: FacetDateRange,
        'ask combobox': FacetAskCombobox,
        'elastic combobox': FacetElasticCombobox,
        slider: FacetRangeSlider,
        default: FacetFilter,
      };

      return Object.fromEntries(
        Object.keys(this.facetSettings).map(key => [
          key,
          {
            ...this.state.aggs[key] && this.state.aggs[key][key]
              ? this.state.aggs[key][key]
              : {},
            component: components[this.facetSettings[key].display]
              || components.default,
          },
        ]),
      );
    },
  },
  mounted() {
    this.$store.commit('START', true);
  },
  methods: {
    strip(string) {
      return strip(string);
    },
    doAction() {
      if (this.state.selectedResults.length) {
        if (this.settings.action.type === 'page') {
          const params = `?props=${this.state.selectedResults.join(',')}`;
          window.location = `${window.location.origin}/${this.settings.action.name}${params}`;
        } else {
          window[this.settings.action.name](this.state.selectedResults);
        }
      }
    },
    selectAll() {
      this.$store.commit('SET_SELECT_ALL_RESULTS', !this.state.selectAllResults);
    },
  },
};
</script>

<style>
.wikisearch {
  /* vars */
  --ws-color-darker: hsl(220, 54%, 36%);
  --ws-color: hsl(220, 60%, 50%);
  --ws-color-lighter: hsl(220, 90%, 61%);
  --ws-color-lightest: hsl(214, 100%, 96%);
  --ws-white: hsl(0, 0%, 100%);
  --tint-1: hsl(210, 17%, 98%);
  --tint-2: hsl(220, 17%, 93%);
  --gray-1: hsl(0, 0%, 89%);
  --gray-2: hsl(213, 9%, 80%);
  --ws-border-color: hsl(212, 9%, 66%);
  --ws-border-color-darker: hsl(213, 5%, 47%);
  --ws-text-color-muted: hsl(207, 5%, 35%);
  --ws-black-lighter: hsl(210, 3%, 13%);
  --ws-black: hsl(0, 0%, 0%);
  --border-1: 1px solid var(--ws-border-color);
  --star-size: 1.5em;
  --transition-short: color 100ms, background-color 100ms, border-color 100ms, box-shadow 100ms;
  /* grid */
  display: grid;
  grid-template-columns: minmax(20ch, 30ch) auto minmax(auto, 40ch);
  grid-template-rows:
    auto
    minmax(2em, auto)
    auto
    1fr;
  grid-template-areas:
    "search search search"
    "selected selected order"
    "filters action total"
    "filters results results";
  grid-gap: 0.5em 2em;
  /* styles */
  padding: 1em;
  font-size: 0.875em;
  line-height: 1.6;
  font-family: sans-serif;
}

.wikisearch--theme-dark {
  --ws-color-darker: hsl(220, 54%, 36%);
  --ws-color: hsl(220, 60%, 50%);
  --ws-color-lighter: hsl(220, 90%, 61%);
  --ws-color-lightest: hsl(212, 18%, 20%);
  --ws-white: hsl(0, 0%, 15%);
  --tint-1: hsl(0, 0%, 22%);
  --tint-2: hsl(0, 0%, 33%);
  --gray-1: hsl(0, 0%, 11%);
  --gray-2: hsl(240, 0%, 49%);
  --ws-border-color: hsl(0, 0%, 52%);
  --ws-border-color-darker: hsl(0, 0%, 55%);
  --ws-text-color-muted: hsl(0, 0%, 83%);
  --ws-black-lighter: hsl(0, 0%, 95%);
  --ws-black: hsl(0, 0%, 100%);
  background-color: var(--ws-white);
  color: var(--ws-black);
}

.wikisearch-filters {
  grid-area: filters;
  display: grid;
  grid-auto-rows: max-content;
  grid-gap: 1.5em;
}

.wikisearch-filter {
  position: relative;
}

.wikisearch-filter__label {
  font-weight: bold;
}

/* hide on desktop */
.wssearch-button--hide-filters,
.wssearch-button--show-filters {
  display: none;
}

.wikisearch-action {
  grid-area: action;
  display: flex;
  align-items: center;
}

.wikisearch-action__button {
    width: fit-content;
}

.wikisearch-total {
  grid-area: total;
  color: var(--ws-text-color-muted);
  justify-self: end;
  margin-right: 1em;
}

.wikisearch-results {
  grid-area: results;
  transition: filter 0.2s ease-in-out;
}

.wikisearch-order {
  grid-area: order;
}

.wikisearch-element--pending {
  background-color: var(--tint-2);
  background-image: linear-gradient(
    135deg,
    var(--ws-white) 25%,
    transparent 25%,
    transparent 50%,
    var(--ws-white) 50%,
    var(--ws-white) 75%,
    transparent 75%
    ,transparent
  );
  background-size: 1.42857143em 1.42857143em;
  animation: wikisearch-input--pending-animation 650ms linear infinite;
}

@keyframes wikisearch-input--pending-animation {
    0% {
        background-position: -1.42857143em 0
    }

    100% {
        background-position: 0 0
    }
}

/* mobile */

@media (max-width: 500px) {
  .wikisearch {
    grid-template-columns: 2fr auto;
    grid-template-areas:
      "search search"
      "selected order"
      "selected total"
      "results results";
      grid-gap: .5em 0;
    }

   .wikisearch-filters {
      grid-area: unset;
      position: fixed;
      background-color: var(--ws-white);
      left: 0;
      right: 0;
      padding: 1em;
      bottom: 0;
      top: 0;
      z-index: 9;
    }
    .wikisearch-filters__wrapper {
      overflow-x: hidden;
      height: calc(100vh - 5em);
      overflow-y: auto;
    }

    .wikisearch-filters.wikisearch-filters__hiden{
      display: none;
    }

    .wssearch-button--hide-filters,
    .wssearch-button--show-filters {
      display: block;
    }

    .wssearch-button--show-filters {
      position: fixed;
      bottom: 2em;
      left: calc(50vw - 47px);
      text-align: center;
    }
}

/* print */

@media print {
  .wikisearch-selected,
  .wikisearch-filters,
  .wikisearch-total,
  .wikisearch-action,
  .wikisearch-search,
  .wikisearch-pager {
      display: none;
  }

  .wikisearch {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-template-areas:
          "results";
      grid-gap: 0;
  }
}

</style>
