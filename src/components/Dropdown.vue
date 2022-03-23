<template>
  <div
    class="wikisearch-dropdown"
    :class="classes"
  >
    <label
      class="wikisearch-dropdown__select"
      tabindex="0"
      aria-disabled="false"
      @focus="focused = true"
      @blur="focused = false"
      @click="focused = true"
      @keydown.down.prevent.stop="$refs.listBox.onDown()"
    >
      <span
        v-if="selected.length"
        class="wikisearch-dropdown__selected"
      >
        {{ selected[0].label }}
      </span>
      <span
        v-else
        class="wikisearch-dropdown__placeholder"
      >
        {{ placeholder }}
      </span>
      <svg
        class="wikisearch-dropdown__arrow"
        fill="none"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M6 10L12 3.94231L11 3L6 7.98077L1 3L5.2958e-07 3.94231L6 10Z"
        />
      </svg>
    </label>
    <wikisearch-list-box
      v-if="focused"
      ref="listBox"
      :items="items"
      :selected="selected"
      @select="setSelected"
    />
  </div>
</template>

<script>
import WikisearchListBox from './ListBox.vue';

export default {
  name: 'WikisearchDropdown',
  components: {
    WikisearchListBox,
  },
  props: {
    value: {
      type: Object,
      default() {
        return null;
      },
    },
    placeholder: {
      type: String,
      default: null,
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      focused: false,
      selected: [this.value],
      newValue: this.value,
    };
  },
  computed: {
    classes() {
      return { 'wikisearch-dropdown--has-selection': !!this.selected.length };
    },
  },
  watch: {
    value(value) {
      this.selected = [value];
    },
  },
  methods: {
    setSelected(item) {
      this.selected = [item];
      this.$emit('select', item);
      this.focused = false;
    },
  },
};
</script>

<style>
.wikisearch-dropdown {
  width: 100%;
  position: relative;
  min-width: 20ch;
}

.wikisearch-dropdown__select {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-width: 1px;
    border-color: var(--ws-border-color);
    border-radius: 2px;
    border-style: solid;
    box-sizing: border-box;
    padding-left: 0.313em 0.75em;
    padding-inline: 0.75em;
    padding-block: 0.313em;
    cursor: pointer;
    background-color: var(--tint-1);
    transition-duration: 250ms;
    transition-timing-function: ease;
    transition-property: border-color,box-shadow;
}

.wikisearch-dropdown__select:focus,
.wikisearch-dropdown__select:active {
  border-color: var(--ws-color);
  box-shadow: inset 0 0 0 1px var(--ws-color),
              inset 0 0 0 2px var(--ws-white);
  outline: 1px solid transparent;
}

.wikisearch-dropdown__arrow {
    height: 0.75em;
    margin-inline-start: 0.75em;
}

.wikisearch--has-button .wikisearch-dropdown__select{
    border-right: 0;
    border-radius: 2px 0 0 2px;
}
</style>
