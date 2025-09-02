<template>
  <a
    class="wikisearch-button"
    :class="classes"
    type="button"
    tabindex="0"
    aria-disabled="false"
    rel="nofollow"
    @click="$emit('click')"
  >
    <wikisearch-icon
      v-if="icon"
      class="wikisearch-button__icon"
      :icon="icon"
    />
    <span
      v-if="label"
      class="wikisearch-button__label"
    >
      {{ label }}
    </span>
  </a>
</template>

<script>
import WikisearchIcon from './Icon.vue';

export default {
  name: 'WikisearchButton',
  components: {
    WikisearchIcon,
  },
  props: {
    icon: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'neutral',
    },
  },
  computed: {
    /**
     * @returns {Object} classes to enable
     */
    classes() {
      const classes = {
        'wikisearch-button--has-icon': !!this.icon,
      };
      classes[`wikisearch-button--${this.type}`] = true;
      return classes;
    },
  },
};
</script>

<style>
.wikisearch-button {
    display: flex;
    padding: .313em .75em;
    padding-inline: 0.75em;
    padding-block: 0.313em;
    font-weight: 700;
    font-size: 1em;
    cursor: pointer;
    border-width: 1px;
    border-style: solid;
    border-radius: 2px;
    transition: var(--transition-short);
    transition-timing-function: ease;
    white-space: nowrap;
    position: relative;
}

/* --neutral and --icon */
.wikisearch-button--neutral {
    color: var(--ws-black-lighter);
    background-color: var(--tint-1);
    border-color: var(--ws-border-color);
}

.wikisearch-button--neutral:hover {
    background-color: var(--ws-white);
}

.wikisearch-button--icon:focus,
.wikisearch-button--neutral:focus {
    color: var(--ws-black-lighter);
    background-color: var(--tint-1);
    border-color: var(--ws-color);
    box-shadow: inset 0 0 0 1px var(--ws-color);
}

.wikisearch-button--icon:active,
.wikisearch-button--neutral:active {
    color: var(--ws-black);
    background-color: var(--gray-2);
    border-color: var(--ws-border-color-darker);
    box-shadow: none;
}

/* --progressive */
.wikisearch-button--progressive {
    color: white;
    background-color: var(--ws-color);
    border-color: var(--ws-color);
}

.wikisearch-button--progressive:hover {
    background-color: var(--ws-color-lighter);
    border-color: var(--ws-color-lighter);
}

.wikisearch-button--progressive:focus {
    background-color: var(--ws-color);
    border-color: var(--ws-color);
    box-shadow: inset 0 0 0 1px var(--ws-color), inset 0 0 0 2px var(--ws-white);
}

.wikisearch-button--progressive:active {
    background-color: var(--ws-color-darker);
    border-color: var(--ws-color-darker);
    box-shadow: none;
}

.wikisearch-button--icon {
    border-color: transparent;
}

.wikisearch-button--icon:hover {
    color: var(--ws-black-lighter);
    background-color: var(--tint-1);
    border-color: var(--ws-border-color);
}

.wikisearch-button--icon .wikisearch-icon.wikisearch-button__icon{
    background-size: 24px;
}

.wikisearch-icon.wikisearch-button__icon {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    background-size: 16px;
    position: unset;
}

.wikisearch-button--has-icon .wikisearch-button__label {
    padding-inline-start: .5em;
}

.wikisearch--has-button .wikisearch-button{
    border-radius: 0 2px 2px 0;
}
</style>
