<template>
       <div
          :class="'wssearch--filter wssearch--filter__' + name.toLowerCase()"
        >
          <span class="wssearch--filter-header" v-if="buckets.length" >
            <label>{{name.replace("_", " ")}}</label>
          </span>
          <div
           class="wssearch--filter-options"
          >
            <component :is="aggcomponent"
              v-for="(agg, i) in buckets"
              v-bind:agg="agg"
              v-bind:key="i+agg.key+name"
              v-bind:index="i"
              v-bind:name="name"
              @change="filter"
              :selected="$parent.selected"
            ></component>
            <label
              class="wssearch--filter-showmore"
              v-if="buckets.length > 5"
              @click="more"
            >
              <span class="wssearch--filter-less" v-if="open.includes(name)" >{{ $i18n( 'wssearch-less' ) }}</span>
              <span class="wssearch--filter-more" v-else >{{ $i18n( 'wssearch-more' ) }}</span>
            <label>
          </div>

      </div>
</template>

<script>
  module.exports = {
    props:{
      name:String,
      selected:Array,
      buckets:Array,
      open:Array,
      aggcomponent:Object
    },
    data(){
      return {
        hoi:'hoi'
      }
    },
    methods:{
      more(event){
        this.$emit( 'click', event );
      },
      filter(event){
          console.log('gaga')
            this.$emit( 'change', event );
      }
    },
    computed:{
   
    }
  }
</script>

<style >
  .wssearch--filter-showmore {
      display: block;
      width: 100%;
      height: 1em;
  }
</style>
