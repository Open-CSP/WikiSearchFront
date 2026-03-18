<template>
  <div class="wikisearch-order wikisearch--has-button">
    <span class="wikisearch-order__label">
      {{ $i18n("wikisearchfront-order") }}
    </span>
    <wikisearch-dropdown
      :items="items"
      :placeholder="'Select an item'"
      :value="sortOrderType === 'score'
        ? { label: $i18n('wikisearchfront-score'), data: 'score' }
        : { label: sortOrderType, data: sortOrderType }"
      @select="setSort"
    />
    <wikisearch-button
      :icon="sortOrder === 'desc' ? 'down' : 'up'"
      :disabled="sortOrderType === 'score'"
      @click="setOrder"
    />
  </div>
</template>

<script>
import { useSearchStore } from '../store/index';
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
  setup() {
    return { store: useSearchStore() };
  },
  data() {
    return {
      options: this.settings[ 'sort options' ],
    };
  },
  computed: {
    items() {
      const items = Object.entries( this.options )
        .map( ( [ key, order ] ) => ( { label: order.label || key, data: key } ) );
      items.unshift( { label: this.$i18n( 'wikisearchfront-score' ), data: 'score' } );
      return items;
    },
    sortOrderType() {
      const option = this.store.sortOrderType;
      const type = this.options[ option ];
      return type && type.label ? type.label : option;
    },
    sortOrder() {
      return this.store.sortOrder;
    },
  },
  methods: {
    setSort( item ) {
      this.store.setOrderType( item.data );
    },
    setOrder() {
      return this.sortOrder === 'desc'
        ? this.store.setOrder( 'asc' )
        : this.store.setOrder( 'desc' );
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
