<template>
  <wikisearch-checkbox
    :id="createID"
    :value="val"
    :checked="checked"
    @change="updateSelection"
  >
    <template #slot>
      <span>
        <span class="wikisearch-checkbox__label">
          {{ title }}
        </span>
        <span
          v-if="agg.doc_count > 0"
          class="wikisearch-checkbox__count"
          title="count"
        >
          {{ agg.doc_count }}
        </span>
      </span>
    </template>
  </wikisearch-checkbox>
</template>

<script>
import Vue from 'vue';
import WikisearchCheckbox from '../Checkbox.vue';
import { strip } from '../../utilities/stringUtils';

export default {
  name: 'FacetCheckbox',
  components: {
    WikisearchCheckbox,
  },
  props: {
    agg: {
      type: Object,
      default() {
        return {};
      },
    },
    name: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    checked() {
      let found = false;
      const updatedSelection = this.$store.state.selected;
      updatedSelection.forEach(el => {
        if (el.key === this.val.key && el.value === this.val.value) {
          found = true;
        }
      });
      if (found) {
        return true;
      }
      return false;
    },
    /**
     * v-model the selection of all checkboxes
     */
    modelSelected: {
      set(val) {
        this.$store.commit('SET_SELECTED', val);
      },
      get() {
        return this.$store.state.selected;
      },
    },
    /**
     * @returns {String} classes for all current slected facets
     */
    labelClass() {
      let selectedClass = '';
      const { selected } = this.$store.state;
      let keyValue = this.agg.key_as_string ? this.agg.key_as_string : this.agg.key;

      const matches = selected.filter(el => el.value === this.agg.key
      || (this.agg.key_as_string
      && el.value === this.agg.key_as_string));

      if (matches.length) {
        selectedClass = ' wikisearch--checkbox-selected';
      }
      if (!keyValue) {
        keyValue = '_';
      }
      return (
        `wikisearch--checkbox__${strip(this.name)}--${strip(keyValue)}${selectedClass}`
      );
    },
    /**
     * @returns {String} title for checkbox label
     */
    title() {
      let title = '';
      if (this.agg.name) {
        title = this.agg.name;
      } else {
        title = this.agg.key_as_string
          // eslint-disable-next-line no-undef
          ? mw.message(`wikisearchfront-${this.agg.key_as_string}`).text()
          : this.agg.key;
      }
      return title;
    },
    /**
     * @returns {String} id for checkbox
     */
    createID() {
      let keyValue = this.agg.key_as_string ? this.agg.key_as_string : this.agg.key;
      if (!keyValue) {
        keyValue = '_';
      }
      return (
        `${strip(this.name)}--${strip(keyValue)}`
      );
    },
    /**
     * @returns {Boolean} show checbox
     */
    show() {
      return this.agg.show !== 'no' && this.agg.doc_count > 0;
    },
    /**
     * @returns {Object} value for checkbox
     */
    val() {
      let out = '';
      const keyValue = this.agg.key_as_string ? this.agg.key_as_string : this.agg.key;
      if (this.agg.to) {
        console.log('hhh', this.agg);
        out = {
          value: this.agg.key,
          key: this.name,
          range: {
            gte: Number(`${this.agg.from}.0000000`),
            lte: Number(`${this.agg.to}.0000000`),
          },
        };
        if (this.agg.name) {
          out.name = this.agg.name;
        }
      } else {
        out = { value: keyValue, key: this.name };
        if (this.agg.name) {
          out.name = this.agg.name;
        }
        if (this.agg.key_as_string) {
          // eslint-disable-next-line no-undef
          out.name = mw.message(`wikisearchfront-${this.agg.key_as_string}`).text();
        }
        if (this.agg.type) {
          out.type = this.agg.type;
        }
      }
      return out;
    },
  },
  mounted() {
    const { selected } = this.$store.state;
    if (selected.length > 0 && this.agg.key_as_string) {
      selected.forEach((element, i) => {
        if (element.key === this.name) {
          // eslint-disable-next-line no-undef
          selected[i].name = mw
            .message(`wikisearchfront-${this.agg.key_as_string}`)
            .text();
          Vue.set(this.$store.state.selected, i, selected[i]);
        }
      });
    }
  },
  methods: {
    updateSelection(item) {
      const selection = [];
      let found = false;
      const updatedSelection = this.$store.state.selected;
      updatedSelection.forEach(el => {
        if (el.key === item.key && el.value === item.value) {
          found = true;
        } else {
          selection.push(el);
        }
      });
      if (!found) {
        selection.push(item);
      }
      this.$store.commit('SET_SELECTED', selection);
    },
  },
};
</script>

<style>

.wikisearch-checkbox__count {
  margin-left: 0.5em;
  white-space: nowrap;
}

.wikisearch-checkbox__count:after {
  content: ")";
}

.wikisearch-checkbox__count:before {
  content: "(";
}

</style>
