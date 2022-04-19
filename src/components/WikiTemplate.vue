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
  data() {
    return {
      value: this.data.value,
    };
  },
  computed: {
    renderedTemplate() {
      return this.$store.state.renderedTemplates[this.index] || '';
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
      this.$store.dispatch('bundleApiCalls', {
        actions:
            {
              index: this.index,
              text: `{{${this.data.template}
                 |Page=${this.data.page}
                 ${this.data.date ? `|$date=${this.data.date}` : ''}
                 |Value=${this.data.value}
                 }}`,
            },
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
