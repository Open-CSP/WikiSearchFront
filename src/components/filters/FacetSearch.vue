<template>
  <div
    aria-disabled="false"
    class="wikisearch-filter"
    :class="`wikisearch-filter--${strip(name)}`"
  >
    <div class="wikisearch-filter__label">
      <label>{{ labelName }}</label>
    </div>
    <div class="wikisearch-filter__wrapper">
      <wikisearch-input
        :id="setID"
        v-model="termTyped"
        :clearable="true"
        :start-icon="'search'"
        :placeholder="$i18n('search')"
        @enter="search"
        @clear="clearTerm"
      />
    </div>
  </div>
</template>

<script>
import { strip } from '../../utilities/stringUtils';
import WikisearchInput from '../Input.vue';

export default {
  name: 'FacetSearch',
  components: {
    WikisearchInput,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      termClear: '',
      userHasTyped: false,
    };
  },
  computed: {
    /**
     * @returns {String} title for facet group header
     */
    labelName() {
      return this.label ? this.label : this.name;
    },
    /**
     * @returns {String} id
     */
    setID() {
      return `${this.strip(this.name)}--${this.strip(this.termTyped)}`;
    },
    /**
     * v-model user typed search term
     */
    termTyped: {
      set(value) {
        this.termClear = value;
        this.userHasTyped = true;
      },
      get() {
        if (this.termClear || this.userHasTyped) {
          return this.termClear;
        }
        const valueFromSelection = this.$store.state.selected.filter(el => el.key === this.name);
        return valueFromSelection.length ? valueFromSelection[0].value : '';
      },
    },
  },
  methods: {
    strip(string) {
      return strip(string);
    },
    /**
     * @returns {Array} selections from this filter group
     */
    filterSelected() {
      const { selected } = this.$store.state;
      return selected.filter(el => el.key !== this.name);
    },
    /**
     * @event keyup.enter search for user typed term
     */
    search() {
      const newSelected = this.filterSelected();
      if (this.termTyped) {
        newSelected.push({ key: this.name, value: this.termTyped, type: 'query' });
      }
      this.$store.commit('SET_SELECTED', newSelected);
    },
    /**
     * clear user typed serach term
     */
    clearTerm() {
      const newSelected = this.filterSelected();
      this.termTyped = '';
      this.$store.commit('SET_SELECTED', newSelected);
    },
  },
};
</script>
