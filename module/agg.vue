<template>
    <label
      v-show="show"
      v-bind:class="labelclass"
      aria-disabled="false"
    >
      <span
        class="wssearch--checkbox-input"
        aria-disabled="false"
      >
        <input
          class="wssearch--checkbox-input-checkbox"
          type="checkbox"
          v-bind:id="createid"
          @change="filter"
          v-model="$parent.selected"
          v-bind:value="val"
          aria-disabled="false"
          tabindex="0"
        >
        <span
          class="wssearch--checkbox-input-icon"
          aria-disabled="false"
        >
        </span>
      </span>
      <span class="wssearch--checkbox-title" >{{title}}</span>
      <span class="wssearch--checkbox-count" title="count">{{agg.doc_count}}</span>
    </label>
</template>

<script>
  module.exports = {
    props:{
      agg:Object,
      name:String,
      index:Number
    },
    computed:{
      labelclass:function(){
              return "wssearch--checkbox wssearch--checkbox__" + this.name.toLowerCase() +"--"+ this.agg.key.toLowerCase().replace(" ", "_")
      },
      title:function(){
        if(this.agg.name){
          return this.agg.name;
        }else{
          return this.agg.key;
        }
      },
      createid:function(){
        return this.name.toLowerCase().replace(" ", "_") +"--"+ this.agg.key.toLowerCase().replace(" ", "_")
      },
      show:function(){
        if(this.agg.show == 'no'){

        }else{
        if(this.index < 5 || this.$parent.open.includes(this.name) ){
          if(this.agg.doc_count > 0){
            return true;
          }
        }
      }
      },
      val:function(){
        if(this.name == 'Date' ){
          return  { "value" : this.agg.key , "key": this.name,  "range": { "P:29.datField": { "gte": Number(this.agg.from+'.0000000'), "lte": Number(this.agg.to+'.0000000')}}};
        }else{
          return {value:this.agg.key, key:this.name};
        }
      }
    },
    data(){
      return {
        selected:false
      }
    },
    methods:{
      filter:function(e){
        this.$parent.api(0, this.$parent.term);
      }
    }
  };
</script>

<style>
:root{
  --star-size:1.5em;
}
 .wssearch--checkbox{
   display:table;
 }
  .wssearch--checkbox-count:after {
      content: ")";
  }

  .wssearch--checkbox-count:before {
      content: "(";
  }

  .wssearch--checkbox-input-checkbox:checked + .wssearch--checkbox-input-icon{
      background-color: #36c;
      border-color: #36c;
      background-size: 1em 1em;
  }
  .wssearch--checkbox-input-icon{
    cursor: pointer;
    -webkit-transition: background-color 100ms, border-color 100ms, box-shadow 100ms;
    -moz-transition: background-color 100ms, border-color 100ms, box-shadow 100ms;
    transition: background-color 100ms, border-color 100ms, box-shadow 100ms;
    background-color: #fff;
    background-size: 0 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    width: 1.42857143em;
    height: 1.42857143em;
    border-color: #72777d;
    border-style: solid;
    border-radius: 2px;
    border-width: 1px;
    background-position: center center;
    background-repeat: no-repeat;
}

.wssearch--checkbox-input{
  position: relative;
}

.wssearch--checkbox-input-icon{
 background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E%3Ctitle%3Echeck%3C/title%3E%3Cg fill=%22%23fff%22%3E%3Cpath d=%22M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z%22/%3E%3C/g%3E%3C/svg%3E);
}


.wssearch--filter-options__combobox {
    border: 1px solid #a2a9b0;
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
  background-color: #eaecf0;
}
.wssearch--filter-options__combobox .wssearch--checkbox-selected{
 background-color: #eaf3ff;
}
.wssearch--filter-options__combobox .wssearch--checkbox.wssearch--checkbox-selected:hover{
 background-color: rgba(41,98,204,0.1);
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


/*start ccs*/

.wssearch--filter__version .wssearch--checkbox-title {
    display: none;
}
.wssearch--filter__version .wssearch--checkbox-input-icon {
    border: none;
    background-position-x: left;
    background-repeat: repeat-x;
    background-size: var(--star-size) var(--star-size);
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' version='1.0'%3E%3Cpath d='M46.296 51.906l-14.38-9.431-14.413 9.38 4.526-16.591-13.375-10.81 17.177-.822 6.148-16.06 6.09 16.082 17.174.884L41.83 35.299l4.467 16.607z' transform='matrix(.98686 0 0 1.03704 .471 1.16)' fill='%23fff' stroke='%237f7f7f' stroke-width='2'/%3E%3C/svg%3E");
}
.wssearch--filter__version .wssearch--checkbox-input-checkbox:checked + .wssearch--checkbox-input-icon{
  background-size: var(--star-size) var(--star-size);
  background-color:white;
  background-image: url(data:image/svg+xml;charset=utf8,%3Csvg width='300px' height='275px' viewBox='0 0 300 275' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3Cpolygon fill='%23fdff00' stroke='%23605a00' stroke-width='15' points='150,25 179,111 269,111 197,165 223,251 150,200 77,251 103,165 31,111 121,111' /%3E%3C/svg%3E);
}
#version--1, #version--1 + .wssearch--checkbox-input-icon {
  width: calc(var(--star-size) * 1);
}
#version--2, #version--2 + .wssearch--checkbox-input-icon {
  width: calc(var(--star-size) * 2);
}
#version--3, #version--3 + .wssearch--checkbox-input-icon {
  width: calc(var(--star-size) * 3);
}
#version--4, #version--4 + .wssearch--checkbox-input-icon {
  width: calc(var(--star-size) * 4);
}
#version--5, #version--5 + .wssearch--checkbox-input-icon {
  width: calc(var(--star-size) * 5);
}

</style>
