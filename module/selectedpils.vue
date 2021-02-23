<template>
    <div class="wssearch--selected">
      <componenet
        :is="pilcomponent"
        v-for="(activefilter, index) in selected"
        :key="index"
        :activefilter="activefilter"
      ></componenet>
      <span
        class="wssearch--selected-clear"
        v-if="selected.length"
        @click="clearfilters"
        tabindex="-1"
        aria-label="Clear"
        role="button"
      >
        {{ $i18n( 'rcfilters-clear-all-filters' ) }}
      </span>
    </div>
</template>

<script>
  module.exports = {
    props:{
        selected:Array,
        pilcomponent:Object
    },
    methods:{
        clearfilters(event){
            this.$emit( 'click', event );
        }
    }
  }
</script>

<style>
   .wssearch--selected {
        grid-area: selected;
    }
   .wssearch--selected-clear{
        cursor: pointer;
        color: var(--base-color);
        border:1px solid transparent;
        padding: 6px 6px;
   }
</style>
