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
          v-model="$root.$children[0].selected"
          v-bind:value="val"
          aria-disabled="false"
          tabindex="0"
          @change="filter"
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
        if(this.index < 5 || this.$root.$children[0].open.includes(this.name) ){
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
      filter(value){
            this.$emit( 'change', this.value );

      }
    }
  };
</script>

<style>

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
      background-color:var(--base-color);
      border-color:var(--base-color);
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
 background-image: linear-gradient(transparent,transparent),var(--check-icon);
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
    background-image: var(--star-icon-open);
}
.wssearch--filter__version .wssearch--checkbox-input-checkbox:checked + .wssearch--checkbox-input-icon{
  background-size: var(--star-size) var(--star-size);
  background-color:white;
  background-image: var(--star-icon-filled)
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
