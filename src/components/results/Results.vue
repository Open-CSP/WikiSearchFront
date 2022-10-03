<template>
  <div
    class="wikisearch-result"
    :class="config.settings.layout
      ? 'wikisearch-result--layout-' + config.settings.layout
      : ''"
  >
    <div
      v-if="config.settings.layout === 'table'"
      class="wikisearch-result__header"
    >
      <span
        v-for="(hitConfig, label) in computedHitSettings"
        :key="'result-header-item--' + label"
        class="wikisearch-result__header-item"
      >
        {{ hitConfig.label || label.replace(/^\$/, '') }}
      </span>
    </div>
    <component
      :is="config.settings.title.wrap ? 'a': 'div'"
      v-for="(hit, index) in $store.state.hits"
      :key="'result-item--' + index"
      class="wikisearch-result__item"
      :href="config.settings.title.wrap ? getHref(hit) : false"
    >
      <wikisearch-result-property
        v-for="(hitConfig, label) in computedHitSettings"
        :key="hit['_id'] + label"
        :label="label"
        :config="hitConfig"
        :data="hit"
      />
    </component>
  </div>
</template>

<script>
import WikisearchResultProperty from '../ResultProperty.vue';

export default {
  name: 'WikisearchResults',
  components: {
    WikisearchResultProperty,
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      config: mw.config.values.WikiSearchFront.config,
    };
  },
  computed: {
    /**
     * @returns {Object} settings for how and what result properties to show
     */
    computedHitSettings() {
      // check if we have $ prefixed properties otherwise load the defaults
      const isCustom = Object.keys(this.config.hitSettings).filter(e => e.charAt(0) === '$');
      if (!isCustom.length) {
        const start = {
          $title: {
            display: 'link',
            label: 'Page',
          },
          $snippet: {},
        };
        const end = {
          $page: {
            label: 'Page title',
          },
          '$Modification date': {},
        };
        return { ...start, ...this.config.hitSettings, ...end };
      }
      return this.config.hitSettings;
    },
    getHref(hit) {
      const titleSettings = this.config.settings.title;
      const source = '_source';

      return hit[source][`P:${titleSettings.key}`][titleSettings.type][0]
        || hit[source].subject.title;
    },
  },
};
</script>

<style>
.wikisearch-result {
  display: grid;
  grid-gap: 1.5em;
  grid-auto-rows: max-content;
}

.wikisearch-result.wikisearch-result--layout-table {
  background-color: var(--gray-1);
  padding: 1px;
  grid-gap: 1px;
  border-radius: 2px;
}

.wikisearch-result__header {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

.wikisearch-result__item {
  display: grid;
  grid-gap: 0;
  grid-auto-rows: max-content;
}

.wikisearch-result--layout-table .wikisearch-result__item {
  grid-gap: 1.5em;
}

.wikisearch-result--layout-table .wikisearch-result__header,
.wikisearch-result--layout-table .wikisearch-result__item {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat( auto-fit, minmax(1px, 1fr) );
    overflow: hidden;
}

.wikisearch-result--layout-table .wikisearch-result__item:last-of-type {
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
}

@media (max-width: 500px) {

  .wikisearch-result--layout-table .wikisearch-result__header {
    display: none;
  }

  .wikisearch-result--layout-table .wikisearch-result__item {
    grid-gap: 0;
  }

  .wikisearch-result--layout-table .wikisearch-result__item {
    grid-template-columns: 1fr;
  }
}
</style>
