<template>
<div>hoi
  <div v-for="(setting, key) in config" :key="key">
    {{key}}
    <input type="text" :value="setting" v-model="config[key]"/>
  </div>
  <span @click="save">Save</span>
</div>
</template>

<script>
module.exports = {
  data:function(){
    return {config:{
      condition:'Class=Page',
      facets:['Version', 'Title'],
      outputs:['Title'],
      size:10,
      combobox:['Version', 'Title'],
      datepicker:'Modification date',
      dateranges:'Modification date',
      stars:'Rating'

    }

  }
},
methods:{
  save(){
 var root = this;

 var backconfig = "";

 backconfig += this.config.condition;

  this.config.facets.forEach(function(el){
    backconfig += '|' + el;
  })

  this.config.outputs.forEach(function(el){
    backconfig += '|?' + el;
  })

  console.log(backconfig);


    var params = {
   action: 'query',
   prop: 'revisions',
   titles: mw.config.values.wgTitle,
   rvprop: 'content',
   rvslots: 'main',
   formatversion: '2',
   format: 'json'
 },
 api = new mw.Api();

api.get( params ).done( function ( data ) {
 var pages = data.query.pages;
   console.log( pages[0].revisions[0].slots.main.content);
   var text = pages[0].revisions[0].slots.main.content;

   var newtext = text.replace(/{{#searchEngineConfig[^}]+/gm, '{{#searchEngineConfig:'+backconfig);

  root.replaceconfig(newtext);

 });

  //  '{{#loadSearchEngine:}}'

    console.log(this.config)
  },
  replaceconfig(text){



  delete  this.config.condition;
  delete  this.config.facets;
  delete  this.config.outputs;

  var str = JSON.stringify(this.config);

  var conf = str.substring(1, str.length-1);

      var newtext = text.replace(/{{#loadSearchEngine[^}]+/gm,'{{#loadSearchEngine:'+conf );
      console.log(newtext);
    this.saveToWiki(newtext);
  },
  saveToWiki(wikitext){

          var params = {
                action: 'edit',
                title: mw.config.values.wgTitle,
                text: wikitext,
                format: 'json'
              },
              api = new mw.Api();

              api.postWithToken( 'csrf', params ).done( function ( data ) {
                console.log( data );
                     mw.notify($('<span>Saved</span>'));
                     window.location.reload();
              } );

      }
}
  }
  </script>
