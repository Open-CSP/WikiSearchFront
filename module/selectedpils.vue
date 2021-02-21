<template>
    <div class="wssearch--selected">
      <selected-pil
         v-for="(activefilter, index) in selected"
        :key="index"
        :forkey="activefilter.key.toLowerCase().replace(' ', '_') + '--' + activefilter.value.toLowerCase().replace(' ', '_')"
        :title="activefilter.value ?  activefilter.value : activefilter.name "
      >
      </selected-pil>
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
    components: {
        'selected-pil': require( './pil.vue' )
    },
    props:{
      selected:Array
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
