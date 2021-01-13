<template>
  <ul v-if="isFolder">
    <b @click="toggle" >
      <div>
        <i>{{ isOpen ? '-' : '+' }}</i>
      </div>
    </b>
    <dragitem
      :itemgroup="passed"
      :name="name"
      v-show="isOpen"
      v-for="(dragitem, index) in dragitems"
      :key="dragitem.printouts.Id[0]"
      :id="dragitem.printouts.Id[0]"
      :index="index"
      :dragitem="dragitem"
      >
    </dragitem>
  </ul>
</template>

<script>

module.exports = {
  components: {
    'dragitem': require( './dragitem.vue' )
},
  props:{
    passed:Object,
    dragitems:Object,
    name:String
    },
    computed: {
      isFolder: function() {
          return this.dragitems.length ;
      }
    },
    data: function() {
      return {
        isOpen: true
      };
    },
    methods: {
      toggle: function() {
          if (this.isFolder) {
          this.isOpen = !this.isOpen;
        }
      }
    }
};
</script>
