<template>
    <div  class="wssearch--pager">
        <span
          v-for="(pager, index) in pagers"
          :key="index"
          @click="next"
          v-bind:class="activepage(pager)"
        >
          <b v-if="activepage(pager)">
            {{pager}}
          </b>
          <span v-else>
            {{pager}}
          </span>
        </span>
      </div>
</template>

<script>
  module.exports = {
    props:{
      total:Number,
      from:Number,
      size:Number
    },
    data(){
      return {
        hoi:'hoi'
      }
    },
    methods:{
        activepage(pager){
       if(pager == (this.from / this.size) + 1){
        return 'active';
       }
      },
      next(event){
        this.$emit( 'click', event );
      }
    },
    computed:{
      pagers(){
      if(this.total >= this.size){
        if(this.from == 0){
          var pages = [];
        }else{
          var pages = ['<'];
        }
        var i;
        var step = Math.ceil(this.total / this.size);
        for (i = 0; i < step; i++) {
          pages.push(i + 1)
        }
        if(this.from + this.size >=  this.total - this.size){
        }else{
          pages.push('>');
        }
        return pages;
      }
    }
    }
  }
</script>

<style>
.wssearch--pager {
  justify-self: end;
}
.wssearch--pager span {
  cursor: pointer;
  padding: 7px 4px;
}
.wssearch--pager span:hover {
  background: lightgray;
}
</style>