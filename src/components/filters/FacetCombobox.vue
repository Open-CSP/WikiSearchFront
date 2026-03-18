<template>
  <div
    v-if="buckets.length"
    :class="
      `wikisearch-filter
       wikisearch-combobox
       wikisearch-filter--${strip(name)}`
    "
  >
    <span class="wikisearch-filter__label">
      <label>
        {{ filterName }}
      </label>
    </span>
    <div class="wikisearch-combobox__selected">
      <wikisearch-pill
        v-for="(activefilter, index) in pils"
        :key="index"
        :data="activefilter"
        :label="activefilter.name"
        @click="deselect"
      />
    </div>
    <div
      class="wikisearch-combobox__wrapper"
    >
      <wikisearch-input
        :pending="pending"
        :value="term"
        :clearable="true"
        :placeholder="filterName"
        role="combobox"
        aria-autocomplete="list"
        :aria-owns="strip(name) + '-list-box'"
        aria-haspopup="listbox"
        :aria-expanded="focused ? 'true' : 'false'"
        @down="focused = true;$refs.listBox.onDown()"
        @up="$refs.listBox.onUp()"
        @enter="onEnter"
        @input="searchAggs"
        @focus="focused = true"
        @blur="focused = false"
        @click="focused = true"
      />
      <wikisearch-list-box
        v-show="focused"
        :id="strip(name) + '-list-box'"
        ref="listBox"
        :items="sortedBuckets.map((e, i) => {return {
          id: i,
          label: e.name || e.key,
          doc_count: e.doc_count,
          data: e.key,
          show: e.show,
          icon: e.icon,
        }})"
        :selected="selection"
        @select="updateSelected"
      >
        <template #menuItem="{item}">
          <wikisearch-icon
            v-if="item.icon"
            class="wikisearch-combobox__option-icon"
            :icon="item.icon"
          />
          <span
            v-if="item.icon"
          >
            {{ $i18n('search') }}
            <b>{{ item.label }}</b>
          </span>
          <span
            v-else
          >
            {{ item.label }}
          </span>
          <span
            v-if="!noCount && !item.icon"
            class="wikisearch-combobox__doc-count"
          >
            {{ item.doc_count }}
          </span>
        </template>
      </wikisearch-list-box>
    </div>
  </div>
</template>

<script>
const { useSearchStore } = require('../../store/index.js');
const WikisearchPill = require('../Pill.vue');
const WikisearchInput = require('../Input.vue');
const WikisearchListBox = require('../ListBox.vue');
const WikisearchIcon = require('../Icon.vue');
const { strip } = require('../../utilities/stringUtils.js');

module.exports = {
  name: 'FacetComboBox',
  components: {
    WikisearchPill,
    WikisearchInput,
    WikisearchListBox,
    WikisearchIcon,
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
    buckets: {
      type: [Array, Object],
      default() {
        return {};
      },
    },
    pending: {
      type: Boolean,
      default: false,
    },
    noCount: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      focused: false,
      updatedBuckets: this.buckets,
      term: '',
      // eslint-disable-next-line no-undef
      facetSettings: mw.config.values.WikiSearchFront.config.facetSettings,
    };
  },
  setup() {
    return { store: useSearchStore() };
  },
  computed: {
    /**
     * @returns {String} label for filter group header
     */
    filterName() {
      return this.label || this.name.replace('_', ' ');
    },
    /**
     * @returns {Array} sorted buckets
     */
    sortedBuckets() {
      let unsorted = this.buckets;

      if (this.term) {
        const regex = new RegExp(this.term.replace('*', '.*'), 'ig');
        unsorted = this.buckets.filter(agg => (
          agg.name
            ? agg.name.match(regex)
            : agg.key.match(regex)
        ));
      }

      let sorted = '';
      if (
        this.facetSettings[this.name]
        && this.facetSettings[this.name].sort
        === 'alphabetically'
      ) {
        sorted = unsorted.sort((a, b) => {
          const textA = a.key.toUpperCase();
          const textB = b.key.toUpperCase();
          // eslint-disable-next-line no-nested-ternary
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
      } else {
        sorted = unsorted;
      }

      if (this.term && this.facetSettings[this.name].search) {
        sorted.unshift({
          doc_count: 'z',
          key: this.term,
          icon: 'search',
        });
      }

      if (this.facetSettings[this.name].order === 'reverse') {
        sorted.reverse();
      }

      return sorted;
    },
    /**
     * @returns {Array} slection for this filter group
     */
    pils() {
      return this.store.selected.filter((el) => el.key === this.name);
    },
    selection() {
      return this.pils.map(e => ({ data: e.value }));
    },
  },
  methods: {
    onEnter() {
      const isSearch = this.sortedBuckets[this.$refs.listBox.active].icon;

      if (this.focused && !isSearch) {
        this.$refs.listBox.setActiveAsSelected();
      }

      if (isSearch) {
        this.search();
      }
    },
    strip(string) {
      return strip(string);
    },
    /**
     * @param {String} term user typed search term
     */
    search() {
      if (
        this.facetSettings[this.name]
        && this.facetSettings[this.name].search
      ) {
        const newSelection = this.store.selected.filter(selected => selected.key !== this.name);
        if (this.term) {
          newSelection.push({ key: this.name, value: this.term, type: 'query' });
        }
        this.store.setSelected(newSelection);
      }
    },
    updateSelected(item) {
      if (item.icon) {
        this.search();
        return;
      }

      this.focused = false;
      this.term = '';
      const selection = [];
      let found = false;
      this.store.selected.forEach(el => {
        if (el.key === this.name && el.value === item.data) {
          found = true;
        } else {
          selection.push(el);
        }
      });
      if (!found) {
        selection.push({ key: this.name, value: item.data, name: item.label });
      }
      this.store.setSelected(selection);
    },
    deselect(item) {
      const updatedSelection = this.store.selected.filter(ob => ob !== item);
      this.store.setSelected(updatedSelection);
    },
    /**
     * @emits input to parent
     * @param {Event} e
     */
    searchAggs(e) {
      this.focused = true;
      this.term = e;
      this.$emit('input', this.term);
    },
    clearInput() {
      this.term = '';
    },
  },
};
</script>

<style >
.wikisearch-combobox__doc-count {
  color: lightgray;
  padding-left: 1em;
}

.wikisearch-combobox__option-icon {
  position: relative;
  margin-right: 1em;
}

.wikisearch-combobox__selected:not(:empty) {
  border: var(--border-1);
  border-bottom: none;
  padding: 0.2em 0.2em 0;
  background: var(--tint-1);
  border-radius: 0.2em 0.2em 0 0;
  margin-bottom: -1px;
}

.wikisearch-combobox__wrapper {
  position: relative;
}
</style>
