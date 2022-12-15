<template>
  <div
    class="wikisearch-search wikisearch--has-button"
    aria-disabled="false"
    role="search"
  >
    <div class="wikisearch-search__wrapper">
      <div
        :ref="'syntax'"
        class="wikisearch-syntax"
        v-html="highlightedTerm"
      />
      <wikisearch-input
        v-model="term"
        :pending="$store.state.loading"
        :clearable="true"
        :start-icon="'search'"
        :placeholder="$i18n('search')"
        @input="onInput"
        @enter="search"
        @scroll="syncScroll"
        @clear="clearTerm"
      />
    </div>
    <wikisearch-button
      :label="$i18n('search')"
      :type="'progressive'"
      @click="search"
    />
    <wikisearch-tooltip v-if="hasInfo">
      <template #slot>
        <div
          v-html="highlightedInfo"
        />
      </template>
      <template #button>
        <wikisearch-button
          :icon="'info'"
          :type="'icon'"
        />
      </template>
    </wikisearch-tooltip>
  </div>
</template>

<script>
import WikisearchInput from './Input.vue';
import WikisearchButton from './Button.vue';
import WikisearchTooltip from './Tooltip.vue';
import { sanitize } from '../utilities/stringUtils';

export default {
  name: 'SearchInput',
  components: {
    WikisearchInput,
    WikisearchButton,
    WikisearchTooltip,
  },
  data() {
    return {
      typedTerm: '',
      userHasTyped: false,
      infoIsActive: false,
    };
  },
  computed: {
    hasInfo() {
      // eslint-disable-next-line no-undef
      return mw.config.values.WikiSearchFront.config.settings.info;
    },
    highlightedInfo() {
      // eslint-disable-next-line no-undef
      return this.highlight(mw.message('wikisearchfront-info').text());
    },
    highlightedTerm() {
      return this.highlight(sanitize(this.term));
    },
    /**
     * v-model user typed term
     */
    term: {
      set(value) {
        this.typedTerm = value;
        this.userHasTyped = true;
      },
      get() {
        return this.typedTerm || this.userHasTyped
          ? this.typedTerm
          : this.$store.state.term;
      },
    },
  },
  methods: {
    syncScroll(el) {
      this.$refs.syntax.scrollLeft = el.scrollLeft;
    },
    highlight(term) {
      const baseClass = 'wikisearch-syntax__item';
      return term
        .replace(/(["'])(?:(?=(\\?))\2.)*?\1|~\d/g,
          `<span class="${baseClass} ${baseClass}--qoute">$&</span>`)
        .replace(/\s(-\w+)/g,
          ` <span class="${baseClass} ${baseClass}--minus">$1</span>`)
        .replace(/\*/gm, `<span class="${baseClass} ${baseClass}--star">*</span>`)
        .replace(/OR/gm, `<span class="${baseClass} ${baseClass}--or">OR</span>`)
        .replace(/AND/gm, `<span class="${baseClass} ${baseClass}--and">AND</span>`);
    },
    onInput() {
      if ( // eslint-disable-next-line no-undef
        mw.config.values.WikiSearchFront.config.settings.searchOnInput
      ) {
        this.$store.commit('SET_TERM', this.typedTerm);
      }
    },
    /**
     * @event click|key.enter search for user input
     */
    search() {
      this.$store.commit('SET_TERM', this.typedTerm);
    },
    /**
     * @event click clear user typed input
     */
    clearTerm() {
      this.typedTerm = '';
      this.$store.commit('SET_TERM', '');
    },
  },
};
</script>

<style>
.wikisearch-search {
  grid-area: search;
  display: flex;
  vertical-align: middle;
  box-sizing: border-box;
  width: 100%;
}

.wikisearch-search .wikisearch-button--icon {
  border-radius: 2px;
  margin-left:1em ;
}
.wikisearch-search__wrapper {
  position: relative;
  width: 100%;
}

.wikisearch-syntax {
    width: calc(100% - 4.2em + 1px);
    position: absolute;
    pointer-events: none;
    padding: 0.4em 0;
    left: 2.2em;
    z-index: -1;
    color: transparent;
    white-space: break-spaces;
    box-sizing: border-box;
    overflow: hidden;
    white-space: pre;
    line-height: 1.42857143em;
    line-break: anywhere;
    border: 1px solid transparent;
    font-size: inherit;
    font-family: inherit;
    text-overflow: clip;
}

.wikisearch-syntax__item {
   border-radius: 3px;
}

.wikisearch-syntax__item--or,
.wikisearch-syntax__item--and {
   background: rgb(171, 219, 111);
   box-shadow: 0 0 0 1px rgb(171, 219, 111);
}

.wikisearch-syntax__item--minus {
   background: rgb(255, 135, 135);
   box-shadow: 0 0 0 1px  rgb(255, 135, 135);
}

.wikisearch-syntax__item--qoute {
   background: rgb(145, 185, 250);
   box-shadow: 0 0 0 1px  rgb(145, 185, 250);
}

.wikisearch-syntax__item--star {
    background: rgb(255, 222, 178);
    box-shadow: 0 0 0 1px  rgb(255, 222, 178);
}

</style>
