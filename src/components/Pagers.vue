<template>
  <div class="wikisearch-pager">
    <wikisearch-dropdown
      v-if="settings['size options']"
      class="wikisearch-pager__dropdown"
      :items="options"
      :value="size == 999
        ? { label: $i18n('wikisearchfront-all'), data: 999 }
        : { label: size + $i18n('wikisearchfront-page'), data: size }"
      @select="changeSize"
    />
    <div v-if="total > size">
      <span
        class="wikisearch-pager__item  wikisearch-pager__item--back"
        :class="showBack"
        @click="back"
      >
        <wikisearch-icon
          class="wikisearch-pager__item--back-icon"
          :icon="'back'"
        />
      </span>
      <span
        class="wikisearch-pager__item"
        :class="activePage(1)"
        @click="move"
      >
        <span> 1 </span>
      </span>
      <span
        v-show="from / size > 2 && total / size > 5"
        class="wikisearch-pager__item  wikisearch--dots"
        :class="showBack"
      >
        ...
      </span>
      <span
        v-for="(pager, index) in pagers"
        :key="index"
        class="wikisearch-pager__item"
        :class="activePage(pager)"
        @click="move"
      >
        <span>
          {{ pager }}
        </span>
      </span>
      <span
        v-show="from / size < last - 3 && total / size > 5"
        class="wikisearch-pager__item  wikisearch--dots"
      >
        ...
      </span>
      <span
        class="wikisearch-pager__item"
        :class="activePage(last)"
        @click="move"
      >
        <span>
          {{ last }}
        </span>
      </span>

      <span
        class="wikisearch-pager__item  wikisearch-pager__item--forward"
        :class="showForward"
        @click="next"
      >
        <wikisearch-icon
          class="wikisearch-pager__item--forward-icon"
          :icon="'next'"
        />
      </span>
    </div>
  </div>
</template>

<script>
import WikisearchDropdown from './Dropdown.vue';
import WikisearchIcon from './Icon.vue';

export default {
  name: 'WikisearchPagers',
  components: {
    WikisearchDropdown,
    WikisearchIcon,
  },
  props: {
    total: {
      type: Number,
      default: 0,
    },
    from: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 0,
    },
    settings: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    /**
     * Options for size dropdown
     * @returns {Object[]} options
     * @returns {String} options[].label
     * @returns {Number} options[].data
     */
    options() {
      const options = this.settings['size options']
        .map((option) => ({ label: option + this.$i18n('wikisearchfront-page'), data: option }));
      options.push({ label: this.$i18n('wikisearchfront-all'), data: 999 });
      return options;
    },
    /**
     * @returns {Number} last pager number
     */
    last() {
      return Math.ceil(this.total / this.size);
    },
    /**
     * @returns {String} class for hiding back button
     */
    showBack() {
      return this.from < 1 ? 'wikisearch-pager__item--hide' : '';
    },
    /**
     * @returns {String} class for hiding forward button
     */
    showForward() {
      return this.from + this.size >= this.total ? 'wikisearch-pager__item--hide' : '';
    },
    /**
     * @returns {Array|Boolean} pagers or false
     */
    pagers() {
      if (this.total >= this.size) {
        const pages = [];
        let i;
        const step = Math.ceil(this.total / this.size);

        if (step > 5) {
          if (this.from / this.size < 3) {
            for (i = 1; i < 4; i += 1) {
              pages.push(i + 1);
            }
          } else if (this.from / this.size > this.last - 4) {
            for (i = this.last - 4; i < this.last; i += 1) {
              pages.push(i);
            }
          } else {
            pages.push(this.from / this.size);
            pages.push(this.from / this.size + 1);
            pages.push(this.from / this.size + 2);
          }
          return pages;
        }
        for (i = 0; i < step; i += 1) {
          if (i + 1 > 1 && i + 1 < this.last) {
            pages.push(i + 1);
          }
        }
        return pages;
      }
      return false;
    },
  },
  methods: {
    /**
     * Set pager size
     * @param {Object} item
     * @param {String} item.label
     * @param {Number} item.data
     */
    changeSize(item) {
      this.$store.commit('SET_SIZE', parseInt(item.data, 10));
    },
    /**
     * @param {Number} pager number
     * @returns {String|Boolean} active class or false
     */
    activePage(pager) {
      if (pager === this.from / this.size + 1) {
        return 'active';
      }
      return false;
    },
    /**
     * @event click back button
     */
    back() {
      const from = this.from - this.size;
      this.$store.commit('SET_FROM', from);
    },
    /**
     * @event click pager
     * @param {Event} e the click event
     */
    move(e) {
      const from = Math.ceil(this.size * (e.target.innerText - 1));
      this.$store.commit('SET_FROM', from);
    },
    /**
     * @event click forward button
     */
    next() {
      const from = this.from + this.size;
      this.$store.commit('SET_FROM', from);
    },
  },
};
</script>

<style>
.wikisearch-pager {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5em;
}

.wikisearch-pager__dropdown {
  max-width: fit-content;
}

.wikisearch-pager__item  {
  transition: var(--transition-short);
  cursor: pointer;
  width: 2em;
  display: inline-flex;
  justify-content: center;
  border-radius: 2px;
  position: relative;
  color: var(--ws-black);
}
.wikisearch-pager__item:hover {
  background-color: var(--ws-color-lighter);
  color: var(--ws-white);
}
.wikisearch-pager__item.active {
  font-weight: bold;
  color: var(--ws-white);
  background-color: var(--ws-color);
}

.wikisearch-pager__item--back-icon,
.wikisearch-pager__item--forward-icon {
  cursor: pointer;
  left: unset;
}

.wikisearch-pager__item--back:hover,
.wikisearch-pager__item--forward:hover {
  background-color: var(--ws-color-lighter);
}

.wikisearch-pager__item--back:after,
.wikisearch-pager__item--forward:after {
  content: 'z';
  color: transparent;
}

.wikisearch-pager__item--hide,
.wikisearch-pager__item--hide .wikisearch-pager__item--forward-icon,
.wikisearch-pager__item--hide .wikisearch-pager__item--back-icon {
  background-image: none;
  pointer-events: none;
  color: var(--ws-white);
}
.wikisearch--dots {
  pointer-events: none;
}
</style>
