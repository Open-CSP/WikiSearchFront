<template>
  <div class="wikisearch-selected">
    <wikisearch-pill
      v-for="(activefilter, index) in selected"
      :key="index"
      :data="activefilter"
      :label="activefilter.name"
      @click="deselect"
    />
    <span
      v-if="selected.length"
      class="wikisearch-selected__clear"
      tabindex="-1"
      aria-label="Clear"
      role="button"
      @click="clearFilters"
    >
      {{ $i18n("wikisearchfront-clear-all-filters") }}
    </span>
  </div>
</template>

<script>
const { useSearchStore } = require('../store/index.js');
const WikisearchPill = require('./Pill.vue');

module.exports = {
  name: 'PillsSelected',
  components: {
    WikisearchPill,
  },
  setup() {
    return { store: useSearchStore() };
  },
  computed: {
    selected() {
      const { selected, valueLabelMap } = this.store;
      selected.forEach( ( item, i ) => {
        if ( valueLabelMap[ item.key ] ) {
          selected[ i ].name = valueLabelMap[ item.key ][ item.value ];
        }
      } );
      return this.store.selected;
    },
  },
  methods: {
    deselect( item ) {
      const updatedSelection = this.selected.filter( ( ob ) => ob !== item );
      this.store.setSelected( updatedSelection );
    },
    clearFilters() {
      // eslint-disable-next-line no-undef
      if ( mw.config.values.WikiSearchFront.config.settings.clear ) {
        this.store.clearAll();
      } else {
        this.store.setSelected( [] );
      }
    },
  },
};
</script>

<style>
.wikisearch-selected {
  grid-area: selected;
}
.wikisearch-selected__clear {
  white-space: nowrap;
  cursor: pointer;
  color: var(--ws-color);
  border: 1px solid transparent;
  padding: 6px 6px;
}
</style>
