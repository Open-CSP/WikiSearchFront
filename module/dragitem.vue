<template>
  <li
    class="dragitem"
    :id="dragitem.id"
    ref="dragitem.id"
    draggable="true"
    @drop.stop.prevent="dropItem"
    @dragstart.stop="dragStart"
    @dragend="dragEnd"
    @dragover.prevent.stop="dragOver"
    @dragleave.stop="dragOut"
    @click.stop="selected"
  >
   <span
    @dragover.prevent=""
    :class="isselected"
   >
    <i :class="fa"></i>
    {{ pagetitle }}
   </span>
   <component :is="itemgroup"
    :passed="itemgroup"
    :name="name"
    :dragitems="dragitem.dragchildren"
   >
   </component>
 </li>
</template>

<script>
  module.exports = {
    props:{
      itemgroup:Object,
      dragitem:Object,
      name:String
    },
    data: function() {
      return {
        isDragOver: false,
        timeOut: ""
      }
    },
    computed: {
      isselected(){
        if(this.$store.getters.selected == this){
          return 'selected'
        }
      },
      fa(){
        if(this.dragitem.printouts.Icon){
          return 'fa '+this.dragitem.printouts.Icon[0];
        }
      },
      pagetitle(){
        if(this.dragitem.printouts.Type[0] == "page"){
          var nwt = [];
           // for (var [i, el] of Object.entries({})) {
           //   if(el.printouts['Page ID'][0] == this.dragitem.printouts.Href[0] && el.printouts['Title'][0]){
           //   nwt.push(el.printouts['Title'][0].fulltext);
           //   }
           // }
          if(nwt && nwt[0]){
            return nwt[0];
          }else{
            if(this.dragitem.printouts.Text[0]){
              return  this.dragitem.printouts.Text[0]
            }else{
              return 'Page';
            }
          }
        }else{
          if(this.dragitem.printouts.Text[0]){
            console.log(this.dragitem.printouts.Text[0])
            return  this.dragitem.printouts.Text[0]
          }else{
            return 'Page';
          }
        }
      }
    },
    methods: {
      selected(e){
        if(this.name != "Menu items"){
          this.$store.commit('select', this);
        }
      },
      dragStart(e) {
        this.$store.commit('info', "saved");
        this.$store.commit('drag', this);
        e.dataTransfer.dropEffect = 'move'
        e.dataTransfer.effectAllowed = 'move';
        e.target.classList.add('dragmode');
        setTimeout(function(){
          e.target.style.display = "none";
        },90)
      },
      dragEnd(e) {
        e.target.classList.remove('dragmode');
        e.target.style.display = "";
        this.$store.commit('drag', "");
    //    this.timeOut = setTimeout(function(){
          $('#clonetainer').append($('#clone'))
          $('#clonetainer').append($('#clone-group'))
    //  }, 1000);

      },
      dropItem(e){
        if(this.name != "Menu items"){
          $('#clonetainer').append($('#clone'))
          $('#clonetainer').append($('#clone-group'))
          var tosel = ""
          var tname = ~~(Date.now() / 1000);
          e.dataTransfer.dropEffect = 'move'
          e.dataTransfer.effectAllowed = 'move'

          var copu = this.$store.getters.dragging.dragitem;

          if(this.isDragOver == 'side'){
            this.$store.commit('parent', this.dragitem.printouts.Id[0]);
          }else{
            if(this.dragitem.printouts.Parent && this.dragitem.printouts.Parent[0]){
              this.$store.commit('parent', this.dragitem.printouts.Parent[0]);
            }else{
              this.$store.commit('parent', '')
            }
          }

          if(this.$store.getters.dragging.name == "Menu items"){
            this.$store.commit('dragid', 'zzz'+tname);
            var clonex = this.copy(this.$store.getters.dragging.dragitem);
            this.$store.getters.dragging.$parent.dragitems.splice(this.$store.getters.dragging.$attrs.index, 1, clonex);
          }else{
            this.$store.getters.dragging.$parent.dragitems.splice(this.$store.getters.dragging.$attrs.index, 1);
          }

          if(this.isDragOver == 'side'){
            var elm = this.$el;
            this.dragitem.dragchildren.splice(0,0, this.$store.getters.dragging.dragitem)

            this.$nextTick(function(){
              elm.querySelectorAll('ul')[0].querySelectorAll('li')[0].click();
            });
          }else{
            this.$parent.dragitems.splice(this.$attrs.index + 1, 0,  copu);
            var elm = $(this.$el);
            console.log(this.$el);
            this.$nextTick(function(){
              console.log( elm.next()[0] );
              elm.next().click()
            });
          }
          this.$store.commit('drag', "");
          this.isDragOver = false;
        }
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
      dragOver(e){
        clearTimeout(this.timeOut);

        if(this.name != "Menu items"){
          var viewportOffset = e.target.getBoundingClientRect();
          if((e.clientX - viewportOffset.left) > 40 ){
           if( this.isDragOver != "side"){
              this.isDragOver = "side";
              if(e.target.closest('li').querySelector('ul')){
                $('#clonetainer').append($('#clone-group'))
                $(e.target.closest('li').querySelector('ul')).prepend($('#clone'))
              }else{
                $('#clonetainer').append($('#clone'))
                $(e.target.closest('li')).append($('#clone-group'))
              }
             }
          }else{
            if(!this.isDragOver || this.isDragOver == "side"){
              $('#clonetainer').append($('#clone-group'))
              $(e.target.closest('li')).after($('#clone'))
            }
            this.isDragOver = true;
          }
        }
      },
      dragOut(e){

        e.target.classList.remove('dragmode');
        e.target.style.display = "";
    //    this.timeOut = setTimeout(function(){
          $('#clonetainer').append($('#clone'))
          $('#clonetainer').append($('#clone-group'))
  //    }, 1000);

        this.isDragOver = false;

      }
    }
  };
</script>
