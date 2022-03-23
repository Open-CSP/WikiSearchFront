<template>
  <div class="wikisearch-dialog__wrapper">
    <div class="wikisearch-dialog">
      <div
        class="wikisearch-dialog__tools"
        :class="pending ? 'wikisearch-element--pending' : ''"
      >
        <wikisearch-button
          :label="'Cancel'"
          @click="$emit('close')"
        />
        <div class="wikisearch-dialog__label">
          {{ date.format('dd, D MMM YYYY') }}
        </div>
        <wikisearch-button
          :label="'Create'"
          :type="'progressive'"
          @click="writeToWiki"
        />
      </div>
      <div class="wikisearch-dialog__body">
        <div class="wikisearch-dialog__field-label">
          Page name
        </div>
        <wikisearch-input
          :placeholder="'Page name'"
          @input="setPageName"
        />
        <div class="wikisearch-dialog__description">
          {{ description }}
        </div>
        <div
          v-for="(param, key) in templateData.params"
          :key="'param-' + key"
          class="wikisearch-dialog__field"
        >
          <div class="wikisearch-dialog__field-label">
            {{ param.label ? param.label.en : key }}
          </div>
          <wikisearch-input
            :id="key"
            :placeholder="key"
            @input="updateValues"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WikisearchInput from './Input.vue';
import WikisearchButton from './Button.vue';

export default {
  name: 'WikisearchCalendarDialog',
  components: {
    WikisearchInput,
    WikisearchButton,
  },
  props: {
    icon: {
      type: String,
      default: '',
    },
    date: {
      type: Object,
      default() {
        return {};
      },
    },
    type: {
      type: String,
      default: 'neutral',
    },
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      config: mw.config.values.WikiSearchFront.config.settings.calendar,
      templateData: {},
      values: {},
      pageName: '',
      pending: false,
    };
  },
  computed: {
    description() {
      return this.templateData.description ? this.templateData.description.en : '';
    },
  },
  mounted() {
    this.getTemplateData();
  },
  methods: {
    updateValues(value, key) {
      this.values[key] = value;
    },
    setPageName(value) {
      this.pageName = this.config.prefix
        ? this.config.prefix + value
        : value;
    },
    writeToWiki() {
      this.pending = true;
      const vars = Object.entries(this.values)
        .map(([key, value]) => `|${key}=${value}`)
        .join('\n');
      const wikitext = `{{${this.config.template}
      ${vars}
      |${this.config.name}=${this.date.format('YYYY-MM-DD')}
      }}`;
      const params = {
        action: 'edit',
        title: this.pageName,
        text: wikitext,
        format: 'json',
      };
      if (this.config.slot) {
        params.slot = this.config.slot;
        params.action = 'editslot';
      }
      // eslint-disable-next-line no-undef
      const api = new mw.Api();
      const that = this;
      api.postWithToken('csrf', params).done(() => {
        that.$emit('close');
        that.pending = false;
        that.$store.commit('SET_SELECTED', that.$store.state.selected);
      });
    },
    apiResult(data) {
      if (data.pages) {
        this.templateData = data.pages[Object.keys(data.pages)[0]];
      }
    },
    getTemplateData() {
      const params = {
        action: 'templatedata',
        titles: `Template:${this.config.template}`,
        format: 'json',
        formatversion: 2,
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
  .wikisearch-dialog__wrapper {
    position: absolute;
    background-color: hsl(0deg 0% 100% / 65%);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .wikisearch-dialog__tools .wikisearch-button {
    border-radius: 0;
    margin: -1px;
}
.wikisearch-dialog {
    background-color: var(--ws-white);
    margin: 0 auto;
    border-radius: 2px;
    border: 1px solid var(--ws-border-color);
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 25%);
}

.wikisearch-dialog__body {
  padding: 1.5em;
}
  @media(min-width:500px) {
    .wikisearch-dialog {
      max-width: 500px;
      margin-top: 5em;
    }
  }
 .wikisearch-dialog__tools{
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 1px solid var(--ws-border-color);
 }

 .wikisearch-dialog__label {
    font-weight: bold;
}

.wikisearch-dialog__field {
    padding: 0 2em;
}

.wikisearch-dialog__field-label {
    padding: 0.5em 0;
    font-weight: bold;
}

.wikisearch-dialog__description {
    margin: 2em 2em 1em;
}

</style>
