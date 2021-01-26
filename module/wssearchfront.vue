<template>
<div id="app">
  <div class="wssearch" >
    <div class="wssearch--search">
      <input type="text" placeholder="search" @change="search" class="form-control" v-bind:value="term" />
    </div>
    <div class="wssearch--selected">
      <label class="wssearch--selectedfilters" v-for="activefilter in selected" v-bind:for="activefilter.key.toLowerCase().replace(' ', '_') + '--' + activefilter.value.toLowerCase().replace(' ', '_')">{{activefilter.value ?  activefilter.value : activefilter.name }}</label>
      <button v-if="selected.length" @click="clearfilters">Clear all</button>
    </div>
    <div v-if="aggs" class="wssearch--filters">{{sort}}
        <div v-for="(name, index) in Object.keys(aggs).sort()" v-bind:key="index" v-bind:class="'wssearch--filter wssearch--filter__' + name.toLowerCase()">
          <h2 v-if="aggs[name].buckets.length" >{{name.replace("_", " ")}}</h2>
          <ul>
            <agg v-for="(agg, i) in aggs[name].buckets" v-bind:agg="agg"  v-bind:key="i" v-bind:index="i" v-bind:name="name"></agg>
            <li class="wssearch--filter-showmore" v-if="aggs[name].buckets.length > 5" @click="more(name)">
              <span class="wssearch--filter-less" v-if="open.includes(name)" ></span>
              <span class="wssearch--filter-more" v-else ></span>
            <li>
          </ul>
      </div>
    </div>
    <div class="wssearch--total">
      Found <b>{{total}}</b> results
    </div>
    <div v-bind:class="mainloading">
      <div class="wssearch--hits">
        <hit v-for="(hit, i) in hits" v-bind:hit="hit" v-bind:key="i"></hit>
      </div>
      <div  class="wssearch--pager">
        <span v-for="pager in pagers" @click="next" v-bind:class="activepage(pager)">
          <b v-if="activepage(pager)">
            {{pager}}
          </b>
          <span v-else>
            {{pager}}
          </span>
        </span>
      </div>
    </div>
    </div>
  </div>

</template>

<script>
module.exports = {
  components: {
  'agg': require( './agg.vue' )

},
  mounted(){
   this.api()
  },
  data:function(){
    return {
    total: 0,
    hits: "",
    aggs: "",
    size:10,
    from: 0,
    selected: [],
    open: [],
    monthnames: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep", "Oct","Nov","Dec"],
    rangeFrom: 0,
    rangeTo: 80,
    dropdown: [],
    term: "" ,
    loading: false ,
    dates:[{"key":"Last+Week","from":2459229,"to":2459236},{"key":"Last+month","from":2459205,"to":2459236},{"key":"Last+Quarter","from":2459144,"to":2459236},{"key":"2021","from":2459209,"to":2459574},{"key":"2020","from":2458844,"to":2459209},{"key":"2019","from":2458479,"to":2458844},{"key":"2018","from":2458114,"to":2458479},{"key":"2017","from":2457749,"to":2458114},{"key":"2016","from":2457384,"to":2457749},{"key":"2015","from":2457019,"to":2457384},{"key":"2014","from":2456654,"to":2457019},{"key":"2013","from":2456289,"to":2456654},{"key":"2012","from":2455924,"to":2456289},{"key":"2011","from":2455559,"to":2455924},{"key":"2010","from":2455194,"to":2455559},{"key":"2009","from":2454829,"to":2455194},{"key":"2008","from":2454464,"to":2454829},{"key":"2007","from":2454099,"to":2454464},{"key":"2006","from":2453734,"to":2454099},{"key":"2005","from":2453369,"to":2453734},{"key":"2004","from":2453004,"to":2453369},{"key":"2003","from":2452639,"to":2453004},{"key":"2002","from":2452274,"to":2452639},{"key":"2001","from":2451909,"to":2452274}],
    filterIDs:[],
    hitIDs:[]
    }
  },
  methods:{
    api:function(from, term){
  console.log('hhh');
      var root = this;
      root.loading = true;
      root.from = from;
      root.term = term


      history.pushState({page: 1}, "title 1", this.urlstring() );

      var params = {
        action: 'query',
        meta: 'WSSearch',
        format: 'json',
        filter: JSON.stringify(root.selected),
        term:root.term,
        from:root.from,
        limit:root.size,
        pageid:mw.config.values.wgArticleId,
        dates:JSON.stringify(root.dates)
      },
      api = new mw.Api();

      api.post(  params ).done( function ( data ) {

        console.log( data );
        root.total = data.result.total;
        root.hits = data.result.hits;
        root.aggs = data.result.aggs;
        root.loading = false;

      })
    },
    urlstring:function(){

      var url = "?";

      if(this.from > 0){
        url += "&offset="+ this.from;
      }

      if(this.term){
        url += "&term="+ this.term;
      }

     if(this.selected.length){
       url += "&filters=";
       var filtersarray = [];
      this.selected.forEach(function(item, i){
        if(item.range){
          filtersarray.push("range_"+item.value+"_"+item.key+"-"+item.range["P:29.datField"].gte+"_"+item.range["P:29.datField"].lte);
        }else{
          filtersarray.push(""+item.key+"-"+item.value+"");
        }
      });
      url += filtersarray.join("~");
    }
      return encodeURI(url);
    },
    clearfilters:function(e){
      this.selected = [];
      this.api(0, this.term);
    },
    more:function(prop){
      var index = this.open.indexOf(prop);
      if (index > -1) {
        this.open.splice(index, 1);
      }else{
        this.open.push(prop);
      }
    },
    search:function(e){
      this.api(0, e.target.value);
    },
    activepage:function(pager){
      if(pager == (this.from / this.size) + 1){
        return 'active';
      }
    },
    next:function(e){
      var root = this;
      root.loading = true;
      if(e.target.innerText.trim() == '<'){
        this.from = this.from - this.size;
      }else if(e.target.innerText.trim() == '>'){
        this.from = this.from + this.size;
      }else{
        this.from = Math.ceil(this.size * (e.target.innerText - 1));
      }
      this.api(this.from, root.term);
    }
  },
  computed:{
    mainloading:function(){
      if(this.loading){
        return 'wssearch--main wssearch--main__loading';
      }else{
        return 'wssearch--main';
      }

    },
    sort:function(){
      this.aggs.Date.buckets = this.aggs.Date.buckets.filter(function(el){
        if(el.doc_count > 0){
          return el;
        }
      }).reverse();
    },
    pagers:function(e){
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
};
</script>
