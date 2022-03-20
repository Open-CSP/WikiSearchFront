<template>
  <div class="wikisearch-order wikisearch--has-button">
    <span class="wikisearch-order__label">
      {{ $i18n("wikisearchfront-order") }}
    </span>
    <wikisearch-dropdown
      :items="items"
      :placeholder="'Select an item'"
      :value="sortOrderType == 'score'
        ? {label: $i18n('wikisearchfront-score'), data: 'score' }
        : {label: sortOrderType, data: sortOrderType}"
      @select="setSort"
    />
    <wikisearch-button
      :icon="sortOrder === 'desc' ? 'down' : 'up'"
      @click="setOrder"
    />
  </div>
</template>

<script>
import WikisearchDropdown from './Dropdown.vue';
import WikisearchButton from './Button.vue';

export default {
  name: 'SortOrder',
  components: {
    WikisearchDropdown,
    WikisearchButton,
  },
  props: {
    settings: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      options: this.settings['sort options'],
    };
  },
  computed: {
    items() {
      const items = Object.entries(this.options)
        .map(([key, order]) => ({ label: order.label || key, data: key }));
      items.unshift({ label: this.$i18n('wikisearchfront-score'), data: 'score' });
      return items;
    },
    /**
     * @returns {String} sort order type title
     */
    sortOrderType() {
      const option = this.$store.state.sortOrderType;
      const type = this.options[option];
      return type && type.label ? type.label : option;
    },
    /**
     * @returns {String} active order
     */
    sortOrder() {
      return this.$store.state.sortOrder;
    },
  },
  methods: {
    setSort(item) {
      this.$store.commit('SET_ORDERTYPE', item.data);
    },
    /**
     * @event click change order
     * @returns {String} order
     */
    setOrder() {
      return this.sortOrder === 'desc'
        ? this.$store.commit('SET_ORDER', 'asc')
        : this.$store.commit('SET_ORDER', 'desc');
    },
  },
};
</script>

<style>
.wikisearch-order {
  display: flex;
  align-self: flex-start
}
.wikisearch-order__label {
  white-space: nowrap;
  align-self: center;
  padding: 0.4em;
  color: var(--ws-text-color-muted);
}
</style>
