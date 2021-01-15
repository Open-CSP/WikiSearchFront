<template>
  <div>
    <div
    @dragover.prevent.stop="dragover"
    @dragleave.stop="dragend"
    @drop.stop.prevent="dropit"
    class="tree-top-item">
    {{namespace ? "Hub Menu Tree" : name}}
  </div>
  <itemgroup
  :passed="comp"
  :dragitems="dragitems"
  :name="name" >
</itemgroup>
<slot></slot>
</div>
</template>

<script>
  var compt =  require( './itemgroup.vue' );
  module.exports = {
    components: {
      'itemgroup': compt
    },
    props:{
      dragitems:Object,
      name:String,
      namespace:String
    },
    computed:{
      comp(){
        //  console.log(this);
        return compt;
      },
      menuname(){
        //  if(!namespace){
        return this.name;
        //}
      }
    },
    data: function() {
        return {
          hoi: false,
        }
    },
    methods:{
      dragover(e){
          if(this.name != "Menu items"){
            $(e.target.closest('.menu-tree').querySelector('ul')).prepend($('#clone'))
          }
      },
      dropit(e){
          if(this.$store.getters.dragging.name == "Menu items"){
            var tname = ~~(Date.now() / 1000);
            this.$store.commit('dragid', 'zzwz'+tname);
            var clonex = this.copy(this.$store.getters.dragging.dragitem);
            this.dragitems.unshift(clonex);
          }else{
            console.log(this.$store.getters.dragging);
            this.$store.commit('parent', '');
            this.$store.getters.dragging.$parent.dragitems.splice(this.$store.getters.dragging.$attrs.index, 1);
            this.dragitems.unshift(this.$store.getters.dragging.dragitem);
          }

          var elm = this.$el;
          this.$nextTick(function(){
            elm.closest('.menu-tree').querySelectorAll('ul')[0].querySelectorAll('li:not(#clone)')[0].click();
          });
      },
      copy(o) {
          if (o === null) return null;

          var output, v, key;
          output = Array.isArray(o) ? [] : {};
          for (key in o) {
            v = o[key];
            output[key] = (typeof v === "object") ? this.copy(v) : v;
          }
          return output;
      },
      dragend(e){
          e.target.classList.remove('dragmode');
          e.target.style.display = "";
          //  this.$store.commit('drag', "");
          $('#clonetainer').append($('#clone'))
          $('#clonetainer').append($('#clone-group'))
      }
    }
  };
</script>
