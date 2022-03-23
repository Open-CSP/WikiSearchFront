<template>
  <label
    class="wikisearch-pill"
    :class="classes"
    :for="forKey"
    tabindex="0"
    @keyup.enter="$emit('click', data)"
    @click.prevent.stop="$emit('click', data)"
  >
    <bdi>
      {{ title }}
    </bdi>
  </label>
</template>

<script>
import { strip } from '../utilities/stringUtils';

export default {
  name: 'WikisearchPill',
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    label: {
      type: String,
      default: '',
    },
  },
  computed: {
    /**
     * @returns {String} classes
     */
    classes() {
      const stripped = `wikisearch-pill--${strip(this.data.key)}`;
      return `${stripped} ${stripped}__${strip(this.data.value)}`;
    },
    /**
     * @returns {String} for attribute for label matching checkbox id
     */
    forKey() {
      return `${strip(this.data.key)}--${strip(this.data.value)}`;
    },
    /**
     * @returns {String} title for pill
     */
    title() {
      return this.label ? this.label : this.data.value;
    },
  },
};
</script>

<style>
.wikisearch-pill {
  transition: var(--transition-short);
  background-color: var(--ws-white);
  padding: 0 1.5em 0 0.5em;
  display: inline-block;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 0.92857143em;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  box-sizing: border-box;
  width: auto;
  max-width: 100%;
  height: 1.57142857em;
  margin: 0 4px 4px 0;
  border: var(--border-1);
  border-radius: 1.57142857em;
  line-height: 1.42857143em;
  vertical-align: middle;
}

.wikisearch-pill:hover {
  background-color: var(--ws-color-lightest);
  border-color: var(--ws-color-lighter);
}

.wikisearch-pill:after {
  content: "×";
  position: absolute;
  color: var(--ws-black);
  right: 4px;
  font-size: 1.4em;
}
</style>
