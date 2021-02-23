<template>
     <label
        class="wssearch--selected-filter"
        :for="forkey"
      >
            <bdi>
                {{title }}
            </bdi>
      </label>
</template>

<script>
  module.exports = {
    props:{
         activefilter:Object
    },
    computed:{
        forkey(){
          return  this.activefilter.key.toLowerCase().replace(' ', '_') + '--' + this.activefilter.value.toLowerCase().replace(' ', '_');
        },
        title(){
           return this.activefilter.value ?  this.activefilter.value : this.activefilter.name;
        }
    }
  }
</script>

<style>

 .wssearch--selected-filter {
        background:white;
        padding: 0 1em 0 .5em;
        display: inline-block;
        max-width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 0.92857143em;
        cursor: pointer;
        position: relative;
        white-space: nowrap;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: auto;
        max-width: 100%;
        height: 1.57142857em;
        margin: 0 4px 4px 0;
        border: var(--border-1);
        border-radius: 1.57142857em;
        line-height: 1.42857143em;
        vertical-align: middle;
   }

    .wssearch--selected-filter:hover {
        background: #efefef;
        color:var(--base-color);
   }

   .wssearch--selected-filter:after {
        content: "×";
        position: absolute;
        color: #767676;
        right: 4px;
   }
</style>
