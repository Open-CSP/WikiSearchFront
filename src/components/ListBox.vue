<template>
  <ul
    class="wikisearch-list-box"
    role="listbox"
  >
    <li
      v-for="(item, index) in filteredItems"
      :id="item.id"
      :key="'listbox' + item.id + item.label"
      class="wikisearch-list-box__item"
      :class="itemClasses( item, index )"
      role="option"
      :aria-selected="selected.includes(item)"
      @click="onItemClick( item )"
      @mousedown.prevent="onItemMousedown"
      @mouseenter="active = index"
    >
      <slot
        name="menuItem"
        :item="item"
      >
        {{ item.label }}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'WikisearchListBox',
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
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
      active: 0,
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => item.show !== 'no');
    },
  },
  methods: {
    onDown() {
      this.active = this.filteredItems.length - 1 <= this.active
        ? 0
        : this.active + 1;
    },
    onUp() {
      this.active = this.active === 0
        ? this.filteredItems.length - 1
        : this.active - 1;
    },
    setActiveAsSelected() {
      this.$emit('select', this.filteredItems[this.active]);
    },
    itemClasses(item, index) {
      console.log(item.label, item.doc_count);
      return {
        'wikisearch-list-box__item--selected': !!this.selected.filter(e => e.data === item.data).length,
        'wikisearch-list-box__item--active': this.active === index,
      };
    },
    onItemClick(item) {
      this.$emit('select', item);
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
ul.wikisearch-list-box {
    position: absolute;
    min-width: 100%;
    max-width: min(200%, 95vw);
    width: max-content;
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

.wikisearch-list-box__item {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: .5em .75em;
    padding-block: .5em;
    padding-inline: .75em;
    transition: var(--transition-short);
    transition-timing-function: ease;
}

.wikisearch-list-box__item--active {
    background-color: var(--tint-2);
}

.wikisearch-list-box__item--selected {
    background-color: var(--ws-color-lightest);
}

.wikisearch-list-box__item--active.wikisearch-list-box__item--selected {
   color: var(--ws-color);
   background-color: var(--ws-color-lightest);
}
</style>
