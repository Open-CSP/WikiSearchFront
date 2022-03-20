<template>
  <label
    class="wikisearch-checkbox"
    :class="'wikisearch-checkbox--' + id"
    aria-disabled="false"
  >
    <span
      class="wikisearch-checkbox__wrapper"
      aria-disabled="false"
    >
      <input
        :id="id"
        class="wikisearch-checkbox__input"
        type="checkbox"
        :value="value"
        aria-disabled="false"
        tabindex="0"
        :checked="checked"
        @change="$emit('change', value)"
      >
      <span
        class="wikisearch-checkbox__icon"
        aria-disabled="false"
      />
    </span>
    <span>
      <span class="wikisearch-checkbox__label">
        <slot name="slot">
          {{ label }}
        </slot>
      </span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'WikisearchCheckbox',
  props: {
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Object, Number, Array],
      default: undefined,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isChecked: this.checked,
    };
  },
};
</script>

<style>
.wikisearch-checkbox {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.5em;
  align-items: center;
  --check-icon: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E%3Ctitle%3Echeck%3C/title%3E%3Cg fill=%22%23fff%22%3E%3Cpath d=%22M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z%22/%3E%3C/g%3E%3C/svg%3E");
}

label.wikisearch-checkbox {
  margin: 0;
}

input.wikisearch-checkbox__input {
  margin: 3px 3px 3px 4px;
}

.wikisearch-checkbox__input:checked + .wikisearch-checkbox__icon {
  background-color: var(--ws-color);
  border-color: var(--ws-color);
  background-size: 1em 1em;
}
.wikisearch-checkbox__input:hover + .wikisearch-checkbox__icon {
  border-color: var(--ws-color-lighter);
}
.wikisearch-checkbox__input:focus + .wikisearch-checkbox__icon {
  border-color: var(--ws-color);
  box-shadow: inset 0 0 0 1px var(--ws-color);
  outline: 1px solid transparent;
}

.wikisearch-checkbox__input:checked:hover
  + .wikisearch-checkbox__icon {
  background-color: var(--ws-color-lighter);
  border-color: var(--ws-color-lighter);
}

.wikisearch-checkbox__input:checked:focus
  + .wikisearch-checkbox__icon {
  background-color: var(--ws-color);
  border-color: var(--ws-color);
  box-shadow: inset 0 0 0 1px var(--ws-color), inset 0 0 0 2px var(--ws-white);
}

.wikisearch-checkbox__icon {
  cursor: pointer;
  transition: var(--transition-short);
  background-color: var(--ws-white);
  background-size: 0 0;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  width: 1.42857143em;
  height: 1.42857143em;
  border-color: var(--ws-border-color-darker);
  border-style: solid;
  border-radius: 2px;
  border-width: 1px;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: linear-gradient(transparent, transparent), var(--check-icon);
}

.wikisearch-checkbox__wrapper {
  position: relative;
}
</style>
