<template>
  <svg
    class="wikisearch-icon"
    :class="'wikisearch-icon--' + icon"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    v-bind="$attrs"
  >
    <title>
      {{ icon }}
    </title>
    <path
      fill="currentColor"
      :d="path"
    />
  </svg>
</template>

<script>
export default {
  name: 'WikisearchIcon',
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    path() {
      // eslint-disable max-len
      const icons = {
        close: 'M4.34 2.93 2.93 4.35l5.658 5.652L2.93 15.66l1.41 1.41 5.658-5.658 5.662 5.658 1.41-1.41L11.41 10l5.66-5.66-1.41-1.41L10 8.59 4.34 2.93z',
        clear: 'M10 0a10 10 0 1010 10A10 10 0 0010 0zm5.66 14.24l-1.41 1.41L10 11.41l-4.24 4.25-1.42-1.42L8.59 10 4.34 5.76l1.42-1.42L10 8.59l4.24-4.24 1.41 1.41L11.41 10z',
        search: 'M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 017.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z',
        next: 'M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z',
        back: 'M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z',
        down: 'M10.085 2.943L6.05 6.803l-3.947-3.86L1.05 3.996l5 5 5-5z',
        up: 'M10.035 9.026L6 5.168 2.053 9.026 1 7.974l5-5 5 5z',
        info: 'M9.5 16A6.61 6.61 0 013 9.5 6.61 6.61 0 019.5 3 6.61 6.61 0 0116 9.5 6.63 6.63 0 019.5 16zm0-14A7.5 7.5 0 1017 9.5 7.5 7.5 0 009.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z',
        settings: 'M3 4h3v2H3zm9 0h9v2h-9zM8 3h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-5 8h9v2H3zm15 0h3v2h-3zm-4-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM3 18h6v2H3zm12 0h6v2h-6zm-4-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z',
      };
      return icons[this.icon];
    },
    viewBox() {
      const icons = {
        up: '0 0 12 12',
        down: '0 0 12 12',
        settings: '0 0 24 24',
        default: '0 0 20 20',
      };
      return icons[this.icon] || icons.default;
    },
  },
};
</script>

<style>
.wikisearch-icon {
  left: 0.5em;
  cursor: text;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  min-width: 20px;
  width: 1.42857143em;
  min-height: 20px;
  height: 100%;
  align-items: center;
  display: inline-flex;
  opacity: 0.87;
  justify-content: center;
  vertical-align: middle;
}
</style>
