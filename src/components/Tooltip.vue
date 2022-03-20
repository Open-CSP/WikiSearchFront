<template>
  <div class="wikisearch-tooltip">
    <slot name="button" />
    <div
      class="wikisearch-tooltip__popup"
      tabindex="0"
    >
      <span
        class="wikisearch-tooltip__pivot"
      />
      <slot name="slot" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WikisearchTooltip',
  data() {
    return {
      focused: false,
    };
  },
};
</script>

<style>
.wikisearch-tooltip {
    position: relative;
}

.wikisearch-tooltip__popup {
    display: none;
    background-color: var(--ws-white);
    border: 1px solid var(--ws-border-color);
    border-radius: 2px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    filter: drop-shadow(0 2px 1px rgba(0, 0, 0, 0.3));
    position: absolute;
    z-index: 1;
    top: 2.6em;
    width: 30em;
    max-width: max-content;
    padding: 0.5em 1em;
    right: 0;
}

.wikisearch-tooltip .wikisearch-button,
.wikisearch-button:focus + .wikisearch-tooltip__popup,
.wikisearch-tooltip__popup:focus,
.wikisearch-tooltip__popup:hover {
    display: block;
}

.wikisearch-tooltip__pivot:before,
.wikisearch-tooltip__pivot:after {
    border-top: 0;
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
}
.wikisearch-tooltip__pivot {
  float: right;
}

.wikisearch-tooltip__pivot:before {
    top: calc(-1.5em + 1px);
    right: .7em;
    border-bottom-color:var(--ws-border-color);
    border-width: 10px;
}

.wikisearch-tooltip__pivot:after {
    top: calc(-1.5em + 3px);
    right: calc(.7em + 1px) ;
    border-bottom-color: var(--ws-white);
    border-width: 9px;
}
</style>
