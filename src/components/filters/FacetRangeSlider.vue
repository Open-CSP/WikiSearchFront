<template>
  <div
    :class="
      `wikisearch-filter
       wikisearch-slider
       wikisearch-slider__${strip(name)}
       wikisearch-slider__${strip(name)}--${realVal}`
    "
    :style="`--slider-val:${realVal};--slider-val2:${realVal2}`"
  >
    <span class="wikisearch-filter__label">
      <label>
        {{ name.replace(/_/g, ' ') }}
      </label>
    </span>
    <transition name="slide">
      <div
        v-show="isSelected"
        class="wikisearch-filter-values"
      >
        <span class="wikisearch-filter-value1">{{ slideVal }}</span>
        <span class="wikisearch-filter-value2">{{ slideVal2 }}</span>
      </div>
    </transition>
    <div
      class="wikisearch-slider-input"
      :class="sliderActiveClass"
    >
      <input
        v-model="modalVal"
        type="range"
        :max="max"
      >
      <input
        v-model="modalVal2"
        type="range"
        :max="max"
      >
      <span class="wikisearch-slider-input-icon" />
    </div>
    <facet-checbox
      :name="name"
      :agg="agg"
      :index="0"
    />
  </div>
</template>

<script>
import FacetCheckbox from './FacetCheckbox.vue';
import { strip } from '../../utilities/stringUtils';

export default {
  name: 'FacetRangeSlider',
  components: {
    'facet-checbox': FacetCheckbox,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      slideVal: 0,
      slideVal2: 0,
      // eslint-disable-next-line no-undef
      facetSettings: mw.config.values.WikiSearchFront.config.facetSettings,
    };
  },
  computed: {
    /**
     * @returns {String} active class
     */
    sliderActiveClass() {
      return this.isSelected ? '' : 'wikisearch-slider__inactive';
    },
    /**
     * @returns {Number} 0 = false
     */
    isSelected() {
      const { selected } = this.$store.state;
      return selected.filter((el) => el.value === this.name).length;
    },
    /**
     * @returns {Number} max for input slider
     */
    max() {
      return this.facetSettings[this.name].max;
    },
    /**
     * v-model slider value
     */
    modalVal2: {
      set(val) {
        this.slideVal2 = val;
        const { selected } = this.$store.state;
        Object.keys(selected).forEach((_, i) => {
          if (selected && selected[i] && selected[i].value === this.name) {
            selected[i].range = { gte: this.slideVal, lte: this.slideVal2 };

            this.$store.commit('SET_SELECTED', selected);
          }
        });
      },
      get() {
        return this.slideVal2;
      },
    },
    /**
     * v-model slider value
     */
    modalVal: {
      set(val) {
        this.slideVal = val;
        const { selected } = this.$store.state;
        Object.keys(selected).forEach((_, i) => {
          if (selected && selected[i] && selected[i].value === this.name) {
            selected[i].range = { gte: this.slideVal, lte: this.slideVal2 };

            this.$store.commit('SET_SELECTED', selected);
          }
        });
      },
      get() {
        return this.slideVal;
      },
    },
    /**
     * @returns {Number} slider value to procentage
     */
    realVal() {
      return (100 / this.max) * this.slideVal;
    },
    /**
     * @returns {Number} slider value to procentage
     */
    realVal2() {
      return (100 / this.max) * this.slideVal2;
    },
    /**
     * @returns {Object} data for facet-checbox
     */
    agg() {
      return {
        key: this.name, from: this.slideVal, to: this.slideVal2, doc_count: 1,
      };
    },
  },
  mounted() {
    // set default value for second slider to half of the max value
    this.slideVal2 = Math.round(this.max / 2);
  },
  methods: {
    strip(string) {
      return strip(string);
    },
  },
};
</script>

<style >
.wikisearch-filter-values{
  text-align: center;
}

.wikisearch-slider-input{
  position: relative;
}
.wikisearch-slider-input-icon {
    height: 1em;
    background: linear-gradient(
    90deg,
     var(--tint-2) calc(var(--slider-val) * 1%),
     var(--ws-color) calc(var(--slider-val) * 1%),
     var(--ws-color) calc(var(--slider-val2) * 1%),
    var(--tint-2) calc(var(--slider-val2) * 1%)
    );
    width: calc(100% - 1.5em);
    top: 1px;
    pointer-events: none;
    position: absolute;
    overflow: hidden;
    left: 1.5em;
    border: 2px solid var(--ws-border-color);
    border-radius: 13px;
}
.wikisearch-slider-input input {
    width: calc(100% - 1.5em);
    top: 0;
    pointer-events: none;
    position: absolute;
    left: 1.5em;
}

.wikisearch-slider-input input::-webkit-slider-thumb {
    pointer-events: all;
    position: relative;
    z-index: 1;
    outline: 0;
    transform: scale(1.2);
}

.wikisearch-slider-input input::-moz-range-thumb {
    pointer-events: all;
    position: relative;
    z-index: 10;
    -moz-appearance: none;
    width: 9px;
     transform: scale(1.2);
}
.wikisearch-slider__inactive {
  filter: grayscale(1);
}
.wikisearch-slider .wikisearch--checkbox-title,
.wikisearch-slider .wikisearch--checkbox-count{
  display: none;
}
.wikisearch-filter-values{
  position: relative;
  height: 1.5em;
  margin-left: 1.5em;
  width: calc(100% - 1.5em);
}
.wikisearch-filter-value1{
  position: absolute;
  left: calc(var(--slider-val) * 1%);
}
.wikisearch-filter-value2{
  position: absolute;
  left: calc(var(--slider-val2) * 1%);
}

.slide-enter-active {
   transition-duration: 0.3s;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   transition-duration: 0.3s;
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>
