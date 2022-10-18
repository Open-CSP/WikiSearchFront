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
import FacetCheckbox from './FacetCheckbox.vue';
import WikisearchDateInput from '../DateInput.vue';
import { createDate } from '../../utilities/dateUtils';

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
      if (this.$store.getters.rangeFrom && this.$store.getters.rangeTo) {
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
        from: this.$store.getters.rangeFrom,
        to: this.$store.getters.rangeTo,
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

      this.$store.commit(
        `SET_RANGE_${element}`,
        createDate(this[element]) + 1,
      );

      let realdatesUpdated = this.$store.state.realDates;
      if (this.$store.state.rangeTo > 0) {
        realdatesUpdated = {
          customrange: {
            from: this.from,
            to: this.to,
          },
        };

        const selectedUpdated = this.$store.state.selected;

        this.$store.commit('SET_REAL_DATES', realdatesUpdated);
        Object.keys(this.$store.state.selected).forEach((_, i) => {
          if (this.$store.state.selected && this.$store.state.selected[i] && this.$store.state.selected[i].value === 'customrange') {
            let te = '';
            if (element === 'from') {
              te = 'gte';
            } else {
              te = 'lte';
            }

            selectedUpdated[i].range[te] = Number(`${this.$store.state[`range${element.charAt(0).toUpperCase()}${element.slice(1)}`]}.0000000`);
            this.$store.commit('SET_SELECTED', selectedUpdated);
          }
        });
      }
    },
    /**
     * create mw.widgets.DateInputWidgets
     */
    dateInputs() {
      const { state } = this.$store;
      const that = this;
      const date = {};
      const dateInput = {};
      const dateInputs = ['from', 'to'];

      dateInputs.forEach((element) => {
        // eslint-disable-next-line no-undef
        dateInput[element] = new mw.widgets.DateInputWidget();

        if (state.realDates.customrange) {
          dateInput[element].setValue(state.realDates.customrange[element]);
        }

        dateInput[element].on('change', () => {
          date[element] = dateInput[element].getValue();
          dateInput.to.mustBeAfter = date.from;
          dateInput.from.mustBeBefore = date.to;

          that.$store.commit(
            `SET_RANGE_${element}`,
            createDate(date[element]) + 1,
          );

          let realdatesUpdated = state.realDates;
          if (state.rangeTo > 0) {
            realdatesUpdated = {
              customrange: {
                from: date.from,
                to: date.to,
              },
            };

            const selectedUpdated = state.selected;

            that.$store.commit('SET_REAL_DATES', realdatesUpdated);
            Object.keys(state.selected).forEach((_, i) => {
              if (state.selected && state.selected[i] && state.selected[i].value === 'customrange') {
                let te = '';
                if (element === 'from') {
                  te = 'gte';
                } else {
                  te = 'lte';
                }

                selectedUpdated[i].range[te] = Number(`${state[`range${element.charAt(0).toUpperCase()}${element.slice(1)}`]}.0000000`);
                that.$store.commit('SET_SELECTED', selectedUpdated);
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
