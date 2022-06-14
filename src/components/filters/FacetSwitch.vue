<template>
  <div
    :class="`wikisearch-filter wikisearch-filter--${strip(name)}`"
    role="group"
    :aria-labelledby="`filter__label--${strip(name)}`"
  >
    <span
      class="wikisearch-filter__label"
    >
      <label
        :id="`filter__label--${strip(name)}`"
      >
        {{ cleanName }}
      </label>
    </span>
    <div class="wikisearch-filter__options">
      <label class="wikisearchfront-switch">
        <input
          ref="checkbox"
          type="checkbox"
          class="wikisearchfront-switch__checkbox"
          :checked="isChecked"
          @change="updateSwitched"
        >
        <span class="wikisearchfront-switch__slider" />
      </label>
    </div>
  </div>
</template>

<script>
import { strip } from '../../utilities/stringUtils';

export default {
  name: 'FacetSwitch',
  props: {
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    settings: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    /**
     * @returns {String} title for checkbox label
     */
    cleanName() {
      return this.label || this.name.replace(/_/g, ' ');
    },
    isChecked() {
      if (this.$store.state.switched[this.name] === this.settings.true) {
        return true;
      }

      if (this.$store.state.switched[this.name] === this.settings.false) {
        return false;
      }

      return this.settings.default === 'true';
    },
  },
  methods: {
    strip(string) {
      return strip(string);
    },
    updateSwitched() {
      const { switched } = this.$store.state;

      switched[this.name] = this.$refs.checkbox.checked
        ? this.settings.true
        : this.settings.false;

      this.$store.commit('SET_SWITCHED', switched);
    },
  },
};
</script>

<style>
.wikisearchfront-switch {
  position: relative;
  display: inline-block;
  width: 3em;
}

.wikisearchfront-switch__checkbox {
  opacity: 0;
  width: 0;
  height: 0;
}

.wikisearchfront-switch__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--gray-1);
  transition: .4s;
  border-radius: 34px;
}

.wikisearchfront-switch__slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  top: 1px;
  left: 1px;
  background-color: var(--ws-white);
  transition: .4s;
  border-radius: 50%;
}

.wikisearchfront-switch:hover .wikisearchfront-switch__checkbox:not(:checked) +
.wikisearchfront-switch__slider:before {
  background-color: var(--ws-color);
}

.wikisearchfront-switch__checkbox:checked + .wikisearchfront-switch__slider {
  background-color: var(--ws-color-lighter);
}

.wikisearchfront-switch__checkbox:focus + .wikisearchfront-switch__slider {
  box-shadow: 0 0 1px var(--ws-color-lighter);
}

.wikisearchfront-switch__checkbox:checked + .wikisearchfront-switch__slider:before {
  transform: translateX(1.4em);
}

</style>
