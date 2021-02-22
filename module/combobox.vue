<template>
            <div
          :class="'wssearch--filter wssearch--filter__' + name.toLowerCase()"
        >
          <span class="wssearch--filter-header" v-if="buckets.length" >
            <label>{{name.replace("_", " ")}}</label>
          </span>
          <div
            class="wssearch--selected-filters__combobox"
          >
            <label
              class="wssearch--selected-filter"
              v-for="(activefilter, index) in pils"
              :key="index"
              v-bind:for="activefilter.key.toLowerCase().replace(' ', '_') + '--' + activefilter.value.toLowerCase().replace(' ', '_')"
            >
              <bdi>{{activefilter.value ?  activefilter.value : activefilter.name }}</bdi>
            </label>
        </div>
          <input
            type="search"
            :placeholder="name.replace('_', ' ')"
            class="wssearch--filter-options-search"
            @input="searchaggs(event, name)"
            />
          <div
           class="wssearch--filter-options wssearch--filter-options__combobox"
          >
            <component :is="aggcomponent"
              v-for="(agg, i) in buckets"
              v-bind:agg="agg"
              v-bind:key="i+agg.key+name"
              v-bind:index="i"
              v-bind:name="name"
              :selected="selected"  
              @change="filter"           
            ></component>
          </div>

      </div>
</template>

<script>
var Vue = require( 'vue' );

  module.exports = {
    props:{
      name:String,
      selected:Array,
      buckets:Array,
      aggcomponent:Object
    },
    data(){
      return {
        hoi:'hoi'
      }
    },
    methods:{
    searchaggs:function(e, name){
      var re = new RegExp( e.target.value, 'ig' );
      var bucks = this.buckets;
      bucks.forEach(function(agg, key){
        if(!agg.key.match(re)){
          Vue.set(agg, 'show', 'no')
        }else{
          Vue.set(agg, 'show', 'yes')
        }
      })
    },
    filter(event){
            this.$emit( 'change', event );
      }
    },
    computed:{
      pils(){
          var root = this;
         var pilss =  this.selected.filter(function(el){
              if(el.key == root.name){
                  return el;
              }      
              })
              console.log(pilss)
          return  pilss;
    }
    }
  }
</script>