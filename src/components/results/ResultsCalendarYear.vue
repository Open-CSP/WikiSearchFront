<template>
  <div
    class="wikisearch-result-calendar"
  >
    <div class="wikisearch-result-calendar__year">
      <div
        v-for="index in 12"
        :key="'month-' + index"
        class="wikisearch-result-calendar__month"
      >
        <div
          class="wikisearch-result-calendar__month-header"
        >
          {{ months[index] }}
        </div>
        <div class="wikisearch-result-calendar__month-results">
          <div
            v-for="hit in getHit(index)"
            :key="'cal-hit-' + hit['_id']"
            class="wikisearch-result-calendar__result"
            :class="resultClass(hit)"
          >
            <wikisearch-result-property
              v-for="(hitConfig, label) in computedHitSettings"
              :key="'hit-' + label"
              :label="label"
              :config="hitConfig"
              :data="hit"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { strip } from '../../utilities/stringUtils';
import WikisearchResultProperty from '../ResultProperty.vue';

export default {
  name: 'WikisearchResultsCalendarYear',
  components: {
    WikisearchResultProperty,
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      config: mw.config.values.WikiSearchFront.config,
      // eslint-disable-next-line no-undef
      months: mw.config.values.wgMonthNames,
      selectedCheckboxes: [],
      date: window.moment(),
      today: window.moment(),
      dialog: '',
    };
  },
  computed: {
    /**
     * @returns {Object} moment date object
     */
    time() {
      // this console log is a hack, maybe use a watcher instead?
      console.log(this.$store.state.selected);
      return this.$store.state.calendarDate || this.date;
    },
    /**
     * @returns {Object} settings for how and what result properties to show
     */
    computedHitSettings() {
      // check if we have $ prefixed properties otherwise load the title link first
      const isCustom = Object.keys(this.config.hitSettings).filter(e => e.charAt(0) === '$');
      if (!isCustom.length) {
        const start = {
          $title: {
            display: 'link',
            label: 'Page',
          },
        };
        return { ...start, ...this.config.hitSettings };
      }
      return this.config.hitSettings;
    },
    /**
     * @returns {String} key for the date property, falls back to Modification Date P:29
     */
    computedPropertyKey() {
      const calendarSettings = this.config.settings.calendar;
      return calendarSettings && calendarSettings.key ? `P:${calendarSettings.key}` : 'P:29';
    },
  },
  methods: {
    /**
     * Create class based on color setting property
     * @param {Object} hit result object
     * @returns {String} css class
     */
    resultClass(hit) {
      const source = '_source';
      const colorSettings = this.config.settings.calendar.color;
      if (
        colorSettings
         && colorSettings.key
         && colorSettings.type
         && hit[source][`P:${colorSettings.key}`]
      ) {
        const prop = hit[source][`P:${colorSettings.key}`][colorSettings.type][0];
        return `wikisearch-result-calendar__result--${strip(prop)}`;
      }
      return '';
    },
    /**
     * Add leading zero if needed
     * @param {String|Number} number
     * @returns {String|Number}
     */
    addZero(number) {
      return number.toString().length === 1
        ? `0${number}`
        : number;
    },
    /**
     * Get hits for a specific date
     * @param {String} date format YYYY-MM-DD
     * @returns {Array} of matched hits for date
     */
    getHit(index) {
      const source = '_source';
      const input = this.$store.state.hits || [];
      const output = input.filter(hit => {
        if (
          !hit[source][this.computedPropertyKey]
            || !hit[source][this.computedPropertyKey].dat_raw
            || !hit[source][this.computedPropertyKey].dat_raw[0]
        ) {
          return false;
        }
        const [, year, month] = hit[source][this.computedPropertyKey].dat_raw[0].split('/');
        return index === parseInt(month, 10) && year === this.time.format('YYYY')
          ? hit
          : false;
      });
      if (output[0]) {
        return output;
      }
      return [];
    },
  },
};
</script>

<style>
.wikisearch-result-calendar {
    background-color: var(--gray-1);
    padding: 1px;
    grid-gap: 1px;
    border-radius: 2px;
    display: grid;
    grid-auto-rows: max-content;
}

.wikisearch-result-calendar__year {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat( 4, minmax(1px, 1fr) );
    overflow: hidden;
}
.wikisearch-result-calendar__month-header {
  font-weight: bold;
  padding: 1em 1.5em;
}
.wikisearch-result-calendar__month {
    background-color: var(--ws-white);
    overflow-wrap: break-word;
}

.wikisearch-result-calendar__result {
    border-bottom: 1px solid var(--gray-1);
    padding: 0.4em 0.8em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: var(--ws-color-lightest);
}

.wikisearch-result-calendar .wikisearch-result-property__value---title *{
  display: inline;
}

.wikisearch-result-calendar .wikisearch-result-property:not(:nth-child(1)) {
    display: block;
}

@media (max-width: 500px) {
  .wikisearch-result-calendar__year {
    display: block;
  }
}
</style>
