<template>
    <li @click="selecticon">
      <i :class="icon"  ></i>
      {{name}}
    </li>
</template>

<script>
module.exports = {
  props:{
    result:String
  },
  data: function () {
      return {
          a: 23,
          b: 19
      };
  },
  computed:{
    name(){
     return this.result.replace('fa-', '')
    },
    icon(){
     return 'fa '+this.result
    }
  },
  methods:{
   selecticon(e){
         this.$store.commit('icon', this.result);
        app.ifsearch = false;

   }
  }
};
</script>
