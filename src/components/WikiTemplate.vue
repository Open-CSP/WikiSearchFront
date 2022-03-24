<template>
  <span
    class="wikisearch-wiki-template"
    :class="loading ? 'wikisearch-wiki-template--loading wikisearch-element--pending' : ''"
    v-html="result"
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
  },
  data() {
    return {
      result: '',
      loading: false,
      value: this.data.value,
    };
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
    apiResult(data) {
      if (data.parse) {
        this.result = data.parse.text['*'];
        this.loading = false;
      }
    },
    parseTemplate() {
      this.loading = true;
      const params = {
        action: 'parse',
        text: `{{${this.data.template}
                 |Page=${this.data.page}
                 |Value=${this.data.value}
                 }}`,
        format: 'json',
        wrapoutputclass: 'wikisearch-wiki-template__output',
        disablelimitreport: true,
      };
      this.$store.dispatch('doApiCall', {
        actions:
            {
              params,
              component: this,
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
