<template>
    <div class="wssearch--selected">
      <componenet
        :is="pilcomponent"
        v-for="(activefilter, index) in selected"
        :key="index"
        :activefilter="activefilter"
      >
      </componenet>
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
    data(){
      return {
        hoi:'hoi'
      }
    },
    methods:{
        clearfilters(event){
            this.$emit( 'click', event );
        }
    }
  }
</script>

<style>
   .wssearch--selected-clear{
     cursor: pointer;
     color: #36c;
     border-color: transparent;
    border-style: solid;
    border-width: 1px;
    padding: 6px 6px;
   }
   .wssearch--selected-filter:hover {
     background: #efefef;
     color:#36c;
   }

   .wssearch--selected-filter:after {
     content: "×";
     position: absolute;
     color: #767676;
     right: 4px;
   }
</style>
