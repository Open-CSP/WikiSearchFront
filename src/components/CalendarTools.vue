<template>
  <div class="wikisearch-calendar-tools">
    <div class="wikisearch-calendar-tools__month">
      <wikisearch-dropdown
        v-if="view === 'month'"
        :items="monthItems"
        :value="monthValue"
        @select="onMonthSelect"
      />
      <wikisearch-dropdown
        v-if="view === 'year'"
        :items="yearItems"
        :value="yearValue"
        @select="onYearSelect"
      />
      <wikisearch-button
        :icon="'back'"
        :type="'icon'"
        @click="changeDate(-1)"
      />
      <wikisearch-button
        :icon="'next'"
        :type="'icon'"
        @click="changeDate(1)"
      />
    </div>
    <wikisearch-dropdown
      v-if="view === 'month'"
      :items="yearItems"
      :value="yearValue"
      @select="onYearSelect"
    />
  </div>
</template>

<script>
import WikisearchButton from './Button.vue';
import WikisearchDropdown from './Dropdown.vue';

export default {
  name: 'WikisearchCalendarTools',
  components: {
    WikisearchButton,
    WikisearchDropdown,
  },
  props: {
    outertime: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      date: this.outertime,
      change: 0,
      // eslint-disable-next-line no-undef
      config: mw.config.values.WikiSearchFront.config,
    };
  },
  computed: {
    view() {
      return !this.config.settings.calendar
        || (
          this.config.settings.calendar
          && this.config.settings.calendar.display !== 'year'
        )
        ? 'month'
        : 'year';
    },
    time() {
      console.log(this.change);
      return this.$store.state.calendarDate || this.date;
    },
    yearValue() {
      const year = parseInt(this.time.format('YYYY'), 10);
      return { label: year, data: year };
    },
    monthValue() {
      return { label: this.time.format('MMMM'), data: this.time.format('M') - 1 };
    },
    yearItems() {
      const year = parseInt(this.date.format('Y'), 10) + 2;
      return [...Array(10)].map((_, i) => ({
        data: year - i,
        label: year - i,
      }));
    },
    monthItems() {
      return window.moment.months().map((month, index) => ({ label: month, data: index }));
    },
    computedPropertyKey() {
      const calendarSettings = this.config.settings.calendar;
      return calendarSettings && calendarSettings.name ? calendarSettings.name : 'Modification date';
    },
  },
  watch: {
    time(value) {
      this.commitRange(value);
      this.$emit('change', value);
    },
  },
  mounted() {
    console.log('mounted', this.date);
    this.commitRange(this.date);
  },
  methods: {
    onMonthSelect(e) {
      this.date = this.time.set('month', e.data);
      this.$store.commit('SET_CALENDAR_DATE', this.date);
      this.change += 1;
    },
    onYearSelect(e) {
      this.date = this.time.set('year', e.data);
      this.$store.commit('SET_CALENDAR_DATE', this.date);
      this.change += 1;
    },
    changeDate(number) {
      this.date = this.view === 'year'
        ? this.time.add(number, 'years')
        : this.time.add(number, 'months');
      this.$store.commit('SET_CALENDAR_DATE', this.date);
      this.change += 1;
    },

    commitRange(date) {
      const startDay = this.view === 'year'
        ? date.clone().startOf('year')
        : date.clone().startOf('month').startOf('week');
      const endDay = this.view === 'year'
        ? date.clone().endOf('year')
        : date.clone().endOf('month').endOf('week');
      const ob = {
        key: this.computedPropertyKey,
        value: 'Calendar',
        range: {
          gte: this.julian(startDay),
          lte: this.julian(endDay),
        },
      };
      const { realDates } = this.$store.state;
      realDates.Calendar = {
        from: startDay.format('YYYY-MM-DD'),
        to: endDay.format('YYYY-MM-DD'),
      };
      this.$store.commit('SET_REAL_DATES', realDates);
      console.log(ob);
      const selected = this.$store.state.selected.filter(e => e.key !== this.computedPropertyKey && e.value !== 'Calendar');
      selected.push(ob);
      this.$store.commit('SET_SELECTED', selected);
      console.log(selected);
    },
    julian(date) {
      return parseInt(date / 86400000 + 2440587.5, 10);
    },
  },
};
</script>

<style>
.wikisearch-calendar-tools__month {
    display: flex;
}

.wikisearch-calendar-tools .wikisearch-dropdown__select:not(:focus) {
   background-color: transparent;
}

.wikisearch-calendar-tools .wikisearch-dropdown__select:not(:focus, :hover) {
   border-color: transparent;
}

.wikisearch-calendar-tools .wikisearch-dropdown__select span {
  transition: transform .1s ease-out;
  transform: scale(1);
  transform-origin: left;
}

.wikisearch-calendar-tools .wikisearch-dropdown__select:not(:focus) span {
    transform: scale(1.5);
}

</style>
