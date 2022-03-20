<template>
  <div
    class="wikisearch-result-calendar"
    :class="baseClass"
  >
    <div class="wikisearch-result-calendar__header">
      <div
        v-for="(day, index) in calendar[0].days"
        :key="'header-' + index"
        class="wikisearch-result-calendar__header-item"
        :class="dayClasses(day, 'isHeader')"
      >
        {{ day.format('dd') }}
      </div>
    </div>
    <div
      v-for="(week, index) in calendar"
      :key="'week-' + index"
      class="wikisearch-result-calendar__week"
    >
      <div
        v-for="(day, i) in week.days"
        :key="'day-' + index + i"
        class="wikisearch-result-calendar__day"
        :class="dayClasses(day)"
      >
        <span
          class="wikisearch-result-calendar__day-number"
          :data-header="day.format('dd')"
        >
          {{ day.format('D') }}
        </span>
        <div
          v-for="hit in getHit(day.format('YYYY-MM-DD'))"
          :key="'cal-hit-' + hit['_id']"
          class="wikisearch-result-calendar__result"
          :class="resultClass(hit)"
        >
          <wikisearch-result-property
            v-for="(hitConfig, label) in computedHitSettings"
            :key="day.format('YYYY-MM-DD') + label"
            :label="label"
            :config="hitConfig"
            :data="hit"
          />
        </div>
        <wikisearch-button
          v-if="config.settings.calendar && config.settings.calendar.template"
          class="wikisearch-result-calendar__add-item"
          :icon="'close'"
          :type="'icon'"
          @click="openDialog(day)"
        />
      </div>
    </div>
    <wikisearch-calendar-dialog
      v-if="dialog"
      :date="dialog"
      @close="closeDialog"
    />
  </div>
</template>

<script>
import { strip } from '../utilities/stringUtils';
import WikisearchResultProperty from './ResultProperty.vue';
import WikisearchButton from './Button.vue';
import WikisearchCalendarDialog from './CalendarDialog.vue';

export default {
  name: 'WikisearchResultsCalendar',
  components: {
    WikisearchResultProperty,
    WikisearchButton,
    WikisearchCalendarDialog,
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      config: mw.config.values.WikiSearchFront.config,
      selectedCheckboxes: [],
      date: window.moment(),
      today: window.moment(),
      dialog: '',
    };
  },
  computed: {
    /**
     * @returns {String} classes for layout and weekend
     */
    baseClass() {
      const layout = this.config.settings.layout
        ? `wikisearch-result--layout-${this.config.settings.layout}`
        : '';
      const weekend = this.config.settings.calendar && this.config.settings.calendar.weekend === 'false'
        ? 'wikisearch-result-calendar--no-weekend'
        : '';
      return `${layout} ${weekend}`;
    },
    /**
     * @returns {Object} moment date object
     */
    time() {
      // this console log is a hack, maybe use a watcher instead?
      console.log(this.$store.state.selected);
      return this.$store.state.calendarDate || this.date;
    },
    /**
     * @returns {Array} of weeks with days as moment objects
     */
    calendar() {
      const calendar = [];
      const today = this.time;
      const startDay = today.clone().startOf('month').startOf('week');
      const endDay = today.clone().endOf('month').endOf('week');

      const date = startDay.clone().subtract(1, 'day');

      while (date.isBefore(endDay, 'day')) {
        calendar.push({
          days: Array(7).fill(0).map(() => date.add(1, 'day').clone()),
        });
      }
      return calendar;
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
     * Set dialog
     */
    closeDialog() {
      this.dialog = '';
    },
    /**
     * Set dialog day
     * @param {Object} day moment date object
     */
    openDialog(day) {
      this.dialog = day;
    },
    /**
     * Create classes for day display
     * @param {Object} day moment date object
     * @param {Boolean} isHeader is a header item
     * @returns {Object} classes to enable
     */
    dayClasses(day, isHeader) {
      const dayNumber = parseInt(day.format('d'), 10);
      return {
        'wikisearch-result-calendar__day--weekend': dayNumber === 0 || dayNumber === 6,
        'wikisearch-result-calendar__day--other-month': !isHeader && day.format('M') !== this.time.format('M'),
        'wikisearch-result-calendar__day--today': !isHeader && this.today.format('YYYY-MM-DD') === day.format('YYYY-MM-DD'),
      };
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
    getHit(date) {
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
        const [, year, month, day] = hit[source][this.computedPropertyKey].dat_raw[0].split('/');
        return date === `${year}-${this.addZero(month)}-${this.addZero(day)}`
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

.wikisearch-result-calendar__week,
.wikisearch-result-calendar__header {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat( auto-fit, minmax(1px, 1fr) );
    overflow: hidden;
}
.wikisearch-result-calendar__header {
  font-weight: bold;
}
.wikisearch-result-calendar__header-item,
.wikisearch-result-calendar__day {
    background-color: var(--ws-white);
    overflow-wrap: break-word;
}

.wikisearch-result-calendar__header-item {
    padding: 1em 1.5em;
}

.wikisearch-result-calendar__header-item--weekend,
.wikisearch-result-calendar__day--weekend {
    background-color: var(--tint-1);
}

.wikisearch-result-calendar--no-weekend .wikisearch-result-calendar__header-item--weekend,
.wikisearch-result-calendar--no-weekend .wikisearch-result-calendar__day--weekend {
    display: none;
}

.wikisearch-result-calendar__day--other-month {
    background-color: transparent;
}

.wikisearch-result-calendar__day--today {
    background-color: var(--ws-color-lightest);
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

.wikisearch-result-calendar__day {
  position: relative;
}

.wikisearch-result-calendar__day-number {
    padding: 1em 1.5em;
    display: block;
}

.wikisearch-result-calendar__add-item {
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
}

.wikisearch-result-calendar__day:hover .wikisearch-result-calendar__add-item {
  display: block;
}

.wikisearch-result-calendar__add-item svg {
  transform: rotate(45deg);
}

@media (max-width: 500px) {
  .wikisearch-result-calendar__week {
    display: block;
  }
  .wikisearch-result-calendar__header {
    display: none;
  }

  .wikisearch-result-calendar__day-number:before {
    content: attr(data-header);
    font-weight: bold;
    overflow-wrap: anywhere;
    align-self: center;
  }
}
</style>
