<template>
    <div
      v-if="buckets.length"
      :class="'wssearch--filter wssearch--filter__' + name.toLowerCase()"
    >
      <span 
        class="wssearch--filter-header" 
         
      >
        <label>
          {{filtername}}
        </label>
      </span>
      <div
        class="wssearch--selected-filters__combobox"
      >
        <component 
          :is="pilcomponent"
           v-for="(activefilter, index) in pils"
          :key="index"
          :activefilter="activefilter"
        ></component>  
    </div>
      <input
        type="search"
        :placeholder="filtername"
        class="wssearch--filter-options-search"
        @input="searchaggs(event)"
      />
      <div
        class="wssearch--filter-options wssearch--filter-options__combobox"
      >
        <component 
          :is="aggcomponent"
          v-for="(agg, i) in buckets"
          :agg="agg"
          :key="i+agg.key+name"
          :index="i"
          :name="name"
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
    aggcomponent:Object,
    pilcomponent:Object
  },
  methods:{
    searchaggs:function(e){
      var re = new RegExp( e.target.value, 'ig' );
      var bucks = this.buckets;
      bucks.forEach(function(agg){
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
    filtername(){
      return this.name.replace('_', ' ');
    },
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

<style >
 .wssearch--filter-options-search{
       padding: .4em .6em;
 }
   .wssearch--selected-filters__combobox:not(:empty) {
    border: var(--border-1);
    border-bottom: none;
    padding: .2em .2em 0;
    background: var(--tint-1);
    border-radius: .2em .2em 0 0;
    margin-bottom: -1px;
}

.wssearch--filter-options__combobox {
    border: var(--border-1);
    border-top: none;
    position: absolute;
    width: calc(100% - 2px);
    transition: z-index 0s ease .3s, opacity .1s ease .3s;
    z-index: -1;
    opacity: 0;
}

.wssearch--filter-options-search:focus + .wssearch--filter-options__combobox {
    z-index: 1;
    opacity: 1;
}

.wssearch--filter-options__combobox .wssearch--checkbox{
    background-color: #f8f9fa;
    color: #202122;
    padding-left: 0.85714286em;
    padding-right: 0.85714286em;
    cursor: pointer;
    align-items: center;
    padding-top: 0.42857143em;
    padding-bottom: 0.42857143em;
    display: flex;
}
.wssearch--filter-options__combobox .wssearch--checkbox-title {
    width: 100%;
    padding: 0 .5em;
}

.wssearch--filter-options__combobox .wssearch--checkbox:hover{
    background-color: var(--tint-1);
}
.wssearch--filter-options__combobox .wssearch--checkbox-selected{
    background-color: #eaf3ff;
    color: #36c;
}
.wssearch--filter-options__combobox .wssearch--checkbox.wssearch--checkbox-selected:hover{
    background-color: #f8f9fa;
}

.wssearch--filter-options__combobox .wssearch--checkbox:not(:last-child){
    border-bottom: 1px solid #eaecf0;
}
.wssearch--filter-options__combobox  .wssearch--checkbox-count {
    color: #757575;
}
.wssearch--filter-options__combobox .wssearch--checkbox-count:after {
    content: "";
}

.wssearch--filter-options__combobox .wssearch--checkbox-count:before {
    content: "";
}
</style>