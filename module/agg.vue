<template>
<li v-show="show" >
            <label v-bind:class="labelclass" >
                <input type="checkbox" v-bind:id="createid" @change="filter" v-model="$parent.selected" v-bind:value="val">
                <span class="wssearch--filter-title" >{{title}}</span>
                <span class="wssearch--filter-count" >{{agg.doc_count}}</span>
             </label>
          </li>
</template>

<script>
module.exports = {
props:{
  agg:Object,
  name:String,
  index:Number
},
computed:{
  labelclass:function(){
    return "wssearch--filter__" + this.name.toLowerCase() +"--"+ this.agg.key.toLowerCase().replace(" ", "_")
  },
  title:function(){
    if(this.agg.name){
      return this.agg.name;
    }else{
      return this.agg.key;
    }
  },
  createid:function(){
    return this.name.toLowerCase().replace(" ", "_") +"--"+ this.agg.key.toLowerCase().replace(" ", "_")
  },
  show:function(){
    if(this.index < 5 || this.$parent.open.includes(this.name)){
      if(this.agg.doc_count > 0){
        return true;
      }
    }
  },
  val:function(){
    if(this.name == 'Date' ){
      return  { "value" : this.agg.key , "key": this.name,  "range": { "P:29.datField": { "gte": Number(this.agg.from+'.0000000'), "lte": Number(this.agg.to+'.0000000')}}};
    }else{
      return {value:this.agg.key, key:this.name};
    }
  }
},
data(){
  return {
    hoi:'hoi'
  }
},
methods:{
  filter:function(e){
    this.$parent.api(0, this.$parent.term);
  }
}
};
</script>
