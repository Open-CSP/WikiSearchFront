<template>
     <label
        class="wssearch--selected-filter"
        :for="forkey"
      >
        <bdi>{{title }}</bdi>
      </label>
</template>

<script>
  module.exports = {
    props:{
      forkey:String,
      title:String
    },
    data(){
      return {
        hoi:'hoi'
      }
    }
  }
</script>
