<template>
  <span
    class="wikisearch-wiki-template"
    :class="!renderedTemplate
      ? 'wikisearch-wiki-template--loading wikisearch-element--pending'
      : ''"
    v-html="renderedTemplate"
  />
</template>

<script>
const { useSearchStore } = require('../store/index.js');

export default {
  name: 'WikisearchWikiTemplate',
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: String,
      default: '',
    },
  },
  setup() {
    return { store: useSearchStore() };
  },
  data() {
    return {
      value: this.data.value,
    };
  },
  computed: {
    renderedTemplate() {
      return this.store.renderedTemplates[this.index] || '';
    },
  },
  watch: {
    value() {
      this.parseTemplate();
    },
  },
  mounted() {
    this.parseTemplate();
  },
  methods: {
    parseTemplate() {
      this.store.bundleApiCalls({
        index: this.index,
        text: `{{${this.data.template}
                 |Page=${this.data.page}
                 ${this.data.date ? `|$date=${this.data.date}` : ''}
                 |Value=${this.data.value}
                 }}`,
      });
    },
  },
};
</script>

<style>
.wikisearch-wiki-template--loading {
  border-radius: .5em;
  height: 1em;
  max-width: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: 8em;
}
</style>
