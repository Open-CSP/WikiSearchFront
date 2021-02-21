<template>
  <div class="wssearch--hit" >
    <span
      class="wssearch--hit__namespace"
      v-if="hit._source.subject.namespacename"
    >
      {{hit._source.subject.namespacename}}
    </span>
    <span
      class="wssearch--hit__pagetitle"
    >
      {{hit._source.subject.title}}
    </span>
    <span
      class="wssearch--hit__date"
    >
      {{date.day}} {{$i18n( date.month )}}, {{date.year}}
    </span>
    <template
      v-for="(key, hitID) in $parent.hitIDs"
      
    >
      <span
        :key="key"
        class="wssearch--hit__link"
        v-if="Object.keys($parent.hitIDs)[0] == key"
      >
        <a
          v-bind:href="href"
        >
          {{hit._source["P:" + key ][hitID][0]}}
        </a>
      </span>
      <span
        :key="key"
        v-bind:class="'wssearch--hit__property' + key"
        v-else
      >
        {{hit._source["P:" + key ][hitID][0]}}
      </span>
    </template>
    <img
      v-if="img"
      class="wssearch--hit__img"
      v-bind:src="img"
    />
    <span
      class="wssearch--hit__body"
      v-html="exerpt"
    >
    </span>
  </div>
</template>

<script>
  module.exports = {
    props:{
      hit:Object
    },
    computed:{
      img:function(){
        if(this.hit._source.file_path){
          if(this.hit._source.attachment && this.hit._source.attachment.content_type == "application/pdf"){
            return '/img_auth.php/thumb/'+ this.hit._source.subject.title +'/page1-600px-'+ this.hit._source.subject.title +'.jpg';
          }else{
            return this.hit._source.file_path;
          }
        }
      },
      date:function(){
        var unsplit = this.hit._source["P:29"].dat_raw[0];
        var rawz = unsplit.split("/");
        var ndate = this.$parent.monthnames[rawz[2] - 1] + ' ' + rawz[3] + ', ' + rawz[1];
        return {
          month:this.$parent.monthnames[rawz[2] - 1],
          day:rawz[3],
          year:rawz[1]
        };
      },
      exerpt:function(){
        if(this.hit.highlight){
          if(this.hit.highlight['text_raw']){
            return this.hit.highlight['text_raw'][0];
          }else if(this.hit.highlight['attachment.content']){
            return this.hit.highlight['attachment.content'][0];
          }
        }
      },
      href:function(){
        if(this.hit._source.subject.namespacename){
          return "/" + this.hit._source.subject.namespacename + ":" + this.hit._source.subject.title;
        }else{
          return "/" + this.hit._source.subject.title;
        }
      }
    },
    data(){
      return {
        hoi:'hoi'
      }
    },
    methods:{

    }
  }
</script>
