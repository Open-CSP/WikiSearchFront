<template>
  <div class="wikisearch-daterange">
    <div class="wikisearch-filter__label">
      <label>{{ labelName }}</label>
    </div>
    {{ $i18n("wikisearchfront-date-range-from") }}
    <wikisearch-date-input
      :name="'from'"
      @change="updateRange"
    />
    {{ $i18n("wikisearchfront-date-range-to") }}
    <wikisearch-date-input
      :name="'to'"
      @change="updateRange"
    />
    <facet-checbox
      v-if="showCheckbox"
      :agg="agg"
      :index="0"
      :name="name"
    />
  </div>
</template>

<script>
const { useSearchStore } = require('../../store/index.js');
const FacetCheckbox = require('./FacetCheckbox.vue');
const WikisearchDateInput = require('../DateInput.vue');
const { createDate } = require('../../utilities/dateUtils.js');

export default {
  name: 'FacetDateRange',
  components: {
    'facet-checbox': FacetCheckbox,
    WikisearchDateInput,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      from: 0,
      to: 0,
    };
  },
  setup() {
    return { store: useSearchStore() };
  },
  computed: {
    /**
     * @returns {String} label for filter header
     */
    labelName() {
      return this.label || this.name.replace('_', ' ');
    },
    /**
     * @returns {Boolean}
     */
    showCheckbox() {
      if (this.store.rangeFrom && this.store.rangeTo) {
        return true;
      }
      return false;
    },
    /**
     * @returns {Object} data for checkbox
     */
    agg() {
      return {
        key: 'customrange',
        from: this.store.rangeFrom,
        to: this.store.rangeTo,
        doc_count: 1,
      };
    },
  },
  mounted() {
    // this.dateInputs();
  },
  methods: {
    updateRange(value, element) {
      this[element] = value.format('YYYY-MM-DD');

      if (!this.from || !this.to) {
        return;
      }

      const rangeVal = createDate(this[element]) + 1;
      if (element === 'from') {
        this.store.setRangeFrom(rangeVal);
      } else {
        this.store.setRangeTo(rangeVal);
      }

      if (this.store.rangeTo > 0) {
        const realdatesUpdated = {
          customrange: {
            from: this.from,
            to: this.to,
          },
        };

        const selectedUpdated = [...this.store.selected];

        this.store.setRealDates(realdatesUpdated);
        selectedUpdated.forEach((sel, i) => {
          if (sel && sel.value === 'customrange') {
            const te = element === 'from' ? 'gte' : 'lte';
            selectedUpdated[i] = { ...sel, range: { ...sel.range, [te]: Number(`${rangeVal}.0000000`) } };
            this.store.setSelected(selectedUpdated);
          }
        });
      }
    },
    /**
     * create mw.widgets.DateInputWidgets
     */
    dateInputs() {
      const that = this;
      const date = {};
      const dateInput = {};
      const dateInputs = ['from', 'to'];

      dateInputs.forEach((element) => {
        // eslint-disable-next-line no-undef
        dateInput[element] = new mw.widgets.DateInputWidget();

        if (that.store.realDates.customrange) {
          dateInput[element].setValue(that.store.realDates.customrange[element]);
        }

        dateInput[element].on('change', () => {
          date[element] = dateInput[element].getValue();
          dateInput.to.mustBeAfter = date.from;
          dateInput.from.mustBeBefore = date.to;

          const rangeVal = createDate(date[element]) + 1;
          if (element === 'from') {
            that.store.setRangeFrom(rangeVal);
          } else {
            that.store.setRangeTo(rangeVal);
          }

          if (that.store.rangeTo > 0) {
            const realdatesUpdated = {
              customrange: {
                from: date.from,
                to: date.to,
              },
            };

            const selectedUpdated = [...that.store.selected];

            that.store.setRealDates(realdatesUpdated);
            selectedUpdated.forEach((sel, i) => {
              if (sel && sel.value === 'customrange') {
                const te = element === 'from' ? 'gte' : 'lte';
                selectedUpdated[i] = { ...sel, range: { ...sel.range, [te]: Number(`${rangeVal}.0000000`) } };
                that.store.setSelected(selectedUpdated);
              }
            });
          }
        });

        document
          .querySelector(`#dateinput${element}`)
          .appendChild(dateInput[element].$element[0]);
      });
    },
  },
};
</script>

<style>
.wikisearch-daterange .wikisearch-checkbox__count,
.wikisearch-daterange .wikisearch-checkbox__label{
  display: none;
}

</style>
