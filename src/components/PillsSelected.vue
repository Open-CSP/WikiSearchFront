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
import WikisearchPill from './Pill.vue';

export default {
  name: 'PillsSelected',
  components: {
    WikisearchPill,
  },
  computed: {
    /**
     * @returns {Array} selected filters
     */
    selected() {
      const [selected, labelMap] = [this.$store.state.selected, this.$store.state.valueLabelMap];
      console.log(selected);
      selected.forEach((item, i) => {
        if (labelMap[item.key]) {
          selected[i].name = labelMap[item.key][item.value];
        }
      });
      return this.$store.state.selected;
    },
  },
  methods: {
    deselect(item) {
      const updatedSelection = this.selected.filter(ob => ob !== item);
      this.$store.commit('SET_SELECTED', updatedSelection);
    },
    clearFilters() {
      // eslint-disable-next-line no-undef
      if (mw.config.values.WikiSearchFront.config.settings.clear) {
        this.$store.commit('CLEAR_ALL');
      } else {
        this.$store.commit('SET_SELECTED', []);
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
