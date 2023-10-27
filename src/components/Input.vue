<template>
  <div
    class="wikisearch-input"
    :class="classes"
  >
    <input
      :ref="'input'"
      :value="computedValue"
      type="text"
      :class="{
        'wikisearch-input__input': true,
        'wikisearch-element--pending': pending,
      }"
      tabindex="0"
      v-bind="$attrs"
      aria-disabled="false"
      @input="onInput"
      @keydown.down.prevent.stop="$emit( 'down' )"
      @keydown.up.prevent.stop="$emit( 'up' )"
      @keyup.enter="$emit( 'enter' )"
      @scroll="$emit( 'scroll' , $refs.input )"
      @focus="$emit( 'focus' )"
      @blur="$emit( 'blur' )"
      @click="$emit( 'click' )"
      :readonly="this.$parent.$options.name === 'WikisearchDateInput'"
    >
    <wikisearch-icon
      v-if="startIcon"
      class="wikisearch-input__start-icon"
      :icon="startIcon"
    />
    <span
      @click="onEndIconClick"
    >
      <wikisearch-icon
        v-if="isClearable || endIcon"
        class="wikisearch-input__end-icon"
        :tabindex="isClearable ? '-1' : ''"
        :role="isClearable ? 'button' : ''"
        :icon="endIcon || 'clear'"
      />
    </span>
  </div>
</template>

<script>
import WikisearchIcon from './Icon.vue';

export default {
  name: 'WikisearchInput',
  components: {
    WikisearchIcon,
  },
  props: {
    id: {
      type: [String, Number],
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    startIcon: {
      type: String,
      default: undefined,
    },
    endIcon: {
      type: String,
      default: undefined,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    pending: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      newValue: this.value,
    };
  },
  computed: {
    isClearable() {
      return this.clearable && this.computedValue;
    },
    classes() {
      return {
        'wikisearch-input--has-start-icon': !!this.startIcon,
        'wikisearch-input--has-end-icon': !!this.endIcon || this.clearable,
        'wikisearch-input--clearable': this.clearable,
      };
    },
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.newValue = value;
        this.$emit('input', value, this.id);
      },
    },
  },
  watch: {
    value(value) {
      this.newValue = value;
    },
  },
  methods: {
    onInput(e) {
      this.computedValue = e.target.value;
    },
    onEndIconClick() {
      if (this.clearable) {
        this.computedValue = '';
        this.$emit('clear', '', this.id);
      }
    },
  },
};
</script>

<style>
.wikisearch-input {
  position: relative;
  width: 100%;
}
.wikisearch-input__input {
  box-sizing: border-box;
  cursor: text;
  box-shadow: inset 0 0 0 1px transparent;
  transition: border-color 250ms, box-shadow 250ms;
  background-color: transparent;
  color: var(--ws-black);
  margin: 0;
  border: 1px solid var(--ws-border-color);
  border-radius: 2px;
  padding-top: .4em;
  padding-right: .6em;
  padding-bottom: .4em;
  padding-left: .6em;
  font-size: inherit;
  font-family: inherit;
  line-height: 1.42857143em;
  width: 100%;
}

.wikisearch-input--clearable .wikisearch-input__input,
.wikisearch-input--has-end-icon .wikisearch-input__input {
    padding-right: 2em;
}

.wikisearch-input--has-start-icon .wikisearch-input__input {
    padding-left: 2.2em;
}

.wikisearch--has-button .wikisearch-input__input {
  border-radius: 2px 0 0 2px;
  border-right: none;
}

.wikisearch-input__input:hover {
  border-color: var(--ws-border-color-darker);
}
.wikisearch-input__input:focus {
  outline: 0;
  border-color: var(--ws-color);
  box-shadow: inset 0 0 0 1px var(--ws-color);
}

.wikisearch-icon.wikisearch-icon--clear {
  cursor: pointer;
  max-height: 2.28571429em;
  margin-right: 0.71428571em;
  opacity: 0.87;
  position: absolute;
  top: 0;
  left: unset;
  right: 0;
  min-width: 12px;
  width: 0.85714286em;
  min-height: 12px;
  height: 100%;
}
.wikisearch-icon--clear:focus {
  border: none;
  outline: none;
}
</style>
