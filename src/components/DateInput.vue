<template>
  <div
    class="wikisearch-date-input"
  >
    <wikisearch-input
      :value="time.format('dd, D MMM YYYY')"
      @focus="focused = true"
      @blur="focused = false"
      @click="focused = true;justSelected = false"
    />
    <div
      v-if="focused && !justSelected"
      class="wikisearch-date-input__list-box"
      role="listbox"
      @mousedown.prevent="onItemMousedown"
      @click="focused = true"
    >
      <div class="wikisearch-date-input__tools">
        <wikisearch-button
          :icon="'back'"
          :type="'icon'"
          @click="setMonth(-1)"
        />
        <wikisearch-button
          :icon="'up'"
          :label="time.format('MMMM') + ' ' + time.format('YYYY')"
          @click="changeDisplay"
        />
        <wikisearch-button
          :icon="'next'"
          :type="'icon'"
          @click="setMonth(1)"
        />
      </div>
      <div
        v-if="display === 'years'"
        class="wikisearch-date-input__years"
      >
        <div
          v-for="(year, index) in years"
          :key="'year-' + index"
          class="wikisearch-date-input__year"
          :class="{ 'wikisearch-date-input__year--active' : year === yearValue }"
          @click="time.set('year', year);change += 1; activeDisplay = 1"
        >
          {{ year }}
        </div>
      </div>
      <div
        v-if="display === 'months'"
        class="wikisearch-date-input__months"
      >
        <div
          v-for="(month, index) in months"
          :key="'month-' + index"
          class="wikisearch-date-input__month"
          :class="{ 'wikisearch-date-input__month--active' : month === monthValue }"
          @click="time.set('month', index);change += 1; activeDisplay = 0"
        >
          {{ month }}
        </div>
      </div>
      <div
        v-if="display === 'days'"
        class="wikisearch-date-input__days"
      >
        <div
          class="wikisearch-date-input__days-header"
        >
          <div
            v-for="(day, index) in calendar[0].days"
            :key="'header-' + index"
            class="wikisearch-date-input__days-header-item"
          >
            {{ day.format('dd') }}
          </div>
        </div>
        <div
          v-for="(week, index) in calendar"
          :key="'week-' + index"
          class="wikisearch-date-input__week"
        >
          <div
            v-for="(day, i) in week.days"
            :key="'day-' + index + i"
            class="wikisearch-date-input__day"
            :class="{
              'wikisearch-date-input__day--active' :
                day.format('YYYY-MM-DD') === time.format('YYYY-MM-DD'),
              'wikisearch-date-input__day--other-month' : day.format('M') !== time.format('M'),
              'wikisearch-date-input__day--disabled' : disabledDirection
                ? operators[disabledDirection](day, moment(disabledDate)) : false,
            }"
            @click="date = day;justSelected = true"
          >
            {{ day.format('D') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WikisearchButton from './Button.vue';
import WikisearchInput from './Input.vue';

export default {
  name: 'WikisearchDateInput',
  components: {
    WikisearchButton,
    WikisearchInput,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    value: {
      type: String,
      default: '',
    },
    disabledDirection: {
      type: String,
      default: '',
    },
    disabledDate: {
      type: String,
      default: '',
    },
    selected: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      selectedItems: this.selected,
      moment: window.moment,
      date: window.moment(),
      change: 0,
      activeDisplay: 0,
      displays: ['days', 'months', 'years'],
      operators: {
        before: (a, b) => a.format('YYYYMMDD') > b.format('YYYYMMDD'),
        after: (a, b) => a.format('YYYYMMDD') < b.format('YYYYMMDD'),
      },
      displayYear: '',
      focused: false,
      justSelected: false,
    };
  },
  computed: {
    time() {
      console.log(this.change);
      return this.date;
    },
    display() {
      return this.displays[this.activeDisplay];
    },
    yearValue() {
      return parseInt(this.time.format('YYYY'), 10);
    },
    monthValue() {
      return this.time.format('MMMM');
    },
    years() {
      // 00 20 40 60 80
      const year = parseInt(this.time.format('Y'), 10);
      const start = this.displayYear ? this.displayYear : year - (year % 10);
      return [...Array(20)].map((_, i) => start + i);
    },
    months() {
      return this.moment.months();
    },
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
  },
  watch: {
    time(value) {
      this.$emit('change', value, this.name);
    },
    value(value) {
      this.date = window.moment(value);
    },
  },
  mounted() {
    if (this.value) {
      this.date = window.moment(this.value);
    }
  },
  methods: {
    itemClasses(item) {
      return {
        'wikisearch-list-box__item--selected': !!this.selectedItems.filter(e => e.data === item.data).length,
      };
    },
    changeDisplay() {
      this.activeDisplay = this.activeDisplay === 2 ? 0 : this.activeDisplay + 1;
    },
    setMonth(number) {
      if (this.display !== 'years') {
        this.date = this.time.add(number, 'months');
        this.change += 1;
      } else {
        this.displayYear = this.years[0] + (20 * number);
      }
    },
    onItemMousedown() {
      const mouseupHandler = () => {
        document.documentElement.removeEventListener('mouseup', mouseupHandler);
      };
      document.documentElement.addEventListener('mouseup', mouseupHandler);
    },
  },
};
</script>

<style>
.wikisearch-date-input {
  position: relative;
}

.wikisearch-date-input__list-box{
    position: absolute;
    min-width: 100%;
  /*  max-width: min(200%, 95vw); */
    width: auto;
    background-color: var(--ws-white);
    border-radius: 2px;
    border: 1px solid var(--ws-border-color);
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 25%);
    overflow-y: auto;
    box-sizing: border-box;
    z-index: 1;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.wikisearch-date-input__tools {
    display: grid;
    grid-template-columns: auto 1fr auto;
}

.wikisearch-date-input__years {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.wikisearch-date-input__months {
   column-count: 2;
   gap: 0;
}

.wikisearch-date-input__days-header,
.wikisearch-date-input__week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.wikisearch-date-input__day,
.wikisearch-date-input__month,
.wikisearch-date-input__year {
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--ws-white);
  background-color: var(--ws-white);
  transition: background-color 250ms,color 250ms;
}

.wikisearch-date-input__year {
  padding: .42em 0;
}

.wikisearch-date-input__day:hover,
.wikisearch-date-input__month:hover,
.wikisearch-date-input__year:hover {
  background-color: var(--ws-color);
  border-color: var(--ws-color);
  color: var(--ws-white);
}

.wikisearch-date-input__day--active,
.wikisearch-date-input__month--active,
.wikisearch-date-input__year--active {
  border-color: var(--ws-color);
}

.wikisearch-date-input__day,
.wikisearch-date-input__month,
.wikisearch-date-input__year,
.wikisearch-date-input__days-header-item {
    display: flex;
    justify-content: center;
    border-radius: 2px;
}

.wikisearch-date-input__day--other-month {
   color: var(--gray-2);
}

.wikisearch-date-input__days-header-item {
  font-weight: bold;
  color: var(--ws-text-color-muted);
}

.wikisearch-date-input__day--disabled {
  color: red;
}
</style>
