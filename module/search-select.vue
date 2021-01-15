<template>
    <div>
      <input
      type="text"
      @input="search"
      v-model="selected"
      class="form-control"
      />
      <ul v-show="results.length == undefined" class="icon-list">
        <li
        v-for="result in results"
        @click="select"
        :data-value="namespace ? result.printouts['Page ID'][0] : result.fulltext"
        v-html="highlight(result.fulltext)"
        >
        </li>
      </ul>
    </div>
</template>

<script>
module.exports = {
  data: function () {
      return {
          results: ""
      };
  },
  props:{
    namespace:String,
    selected: String
  },
  methods:{
    highlight(text){
      if(this.namespace){
        text =  text.split(":")[1];
      }
      var regex = new RegExp( this.selected , 'gmi' );
      return text.replace(regex , '<b>'+this.selected+'</b>');
    },
    select(e){
      this.selected = e.target.dataset.value;
      if(this.namespace){
         this.$store.commit('title', this.selected);
       }else{
         this.$store.commit('title', this.selected);
       }
       this.$store.commit('href', this.selected);
       this.results = "";
    },
    search(e){
      console.log(this.namespace);
      var component =  this;
      var query = this.namespace ? `[[Class::Page]][[Namespace::${this.namespace}]][[Title::~*${e.target.value}*]]|?Title|?Page ID` : `[[~*${e.target.value}*]]|limit=20`;
      var params = {
         action: 'ask',
         query: query,
         format: 'json',
         formatversion: '2'
        },
        api = new mw.Api();

        api.post( params ).done( function ( data ) {
          component.results = data.query.results;
          console.log(component.results);
       });
    }
   }
};
</script>
