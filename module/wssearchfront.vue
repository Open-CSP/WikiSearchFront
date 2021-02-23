<template>
<div id="app">
  <div class="wssearch" >
    <search-input
      @change="search"
      :term="term"
      @click="api(0, '')"
    >
    </search-input>
    <selected-pils
      :selected="selected"
       @click="clearfilters"
       :pilcomponent="pilcomponent"
    >
    </selected-pils>
    <div 
      v-if="aggs" 
      class="wssearch--filters"
    >{{sort}}
      <daterange
           v-bind:agg="{key:'customrange',from: rangeFrom , to: rangeTo ,doc_count:1 }"
           @change="api(0, term)"
           :aggcomponent="aggcomponent"
     >
     </daterange>
        <component 
          v-for="(name, index) in Object.keys(aggs).sort()"
          :is="facetconfig.includes(name) ? comboboxcomponent : filtercomponent"
          v-bind:key="index"
          :selected="selected"
          :open="open"
          :buckets="aggs[name].buckets"
          :name="name"
          @change="api(0, term)"
          @click="more(name)"
          :aggcomponent="aggcomponent"
          :pilcomponent="pilcomponent"
        >
      </component>
    </div>
    <div
      class="wssearch--total"
      v-html="$i18n('wssearch-total', total, from).parse()">
    </div>
    <div 
      class="wssearch--main" 
      :class="mainloading"
    >
      <div class="wssearch--hits">
        <hit
          v-for="(hit, i) in hits"
          v-bind:hit="hit"
          v-bind:key="i"
        >
        </hit>
      </div>
      <pager
          @click="next"
          :size="size"
          :from="from"
          :total="total"
        >
      </pager>
    </div>
    </div>
  </div>
</template>

<script>
var Vue = require( 'vue' );

module.exports = {
  components: {
    'search-input': require( './searchinput.vue' ),
    'selected-pils': require( './selectedpils.vue' ),
    'daterange': require( './daterange.vue' ),
    'hit': require( './hit.vue' ),
    'pager': require( './pager.vue' )
  },
  mounted(){
     this.createranges();
     this.urlparams();
  },
  data(){
    return {
      total: 0,
      aggcomponent: require( './agg.vue' ),
      pilcomponent: require( './pil.vue' ),
      comboboxcomponent: require( './combobox.vue' ),
      filtercomponent: require( './filter.vue' ),
      hits: "",
      aggs: "",
      size:mw.config.values.WSSearchFront.facetSettings.size,
      from: 0,
      selected: [],
      open: [],
      monthnames: ["jan","feb","mar","apr","may","jun","jul","aug","sep", "oct","nov","dec"],
      rangeFrom: 0,
      rangeTo: 0,
      dropdown: [],
      term: "" ,
      loading: false ,
      dates:[],
      realDates:{},
      hitIDs:mw.config.values.WSSearchFront.resultIDs,
      facetconfig:mw.config.values.WSSearchFront.facetSettings.combobox
    }
  },
  methods:{
    api(from, term){
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
            root.total = data.result.total;
            root.hits = JSON.parse(data.result.hits);
            console.log(root.hits);
            root.aggs = data.result.aggs;
            root.loading = false;
          })
    },
    createranges(){
          var root = this;
          var today = new Date();
          var lastweek = new Date();
          lastweek.setDate( lastweek.getDate() - 7 );
          var lastmonth = new Date();
          lastmonth.setMonth( lastmonth.getMonth() - 1 );
          var lastquarter = new Date();
          lastquarter.setMonth( lastquarter.getMonth() - 4 );

          function realdate(date){
            return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
          }

          var realtoday = realdate(today);

          var date_ranges = [];
          var real_date_ranges = {};

          real_date_ranges["Last Week"] = {"from": realdate(lastweek), "to":  realtoday};
          real_date_ranges["Last Month"] = {"from": realdate(lastmonth), "to": realtoday };
          real_date_ranges["Last Quarter"] = {"from": realdate(lastquarter), "to": realtoday };

          for (var i=0; i < 5; i++) {
            var key = today.getFullYear() - i;
            real_date_ranges[key] = {"from": key + '-1-1' , "to": (key + 1) + '-1-1' };
          };

          Object.entries(real_date_ranges).forEach(function([key, value]){
            console.log(value.from)
            date_ranges.push({
              "key":key.toString(),
              "from":root.createdates(value.from),
              "to" :root.createdates(value.to)
            });
          })

          this.realDates = real_date_ranges;
          this.dates =  date_ranges;

    },
    createdates(date){

          function parseDate(str) {
              return new Date(str);
          }

          function datediff(first, second) {
              return Math.round((second-first)/(1000*60*60*24));
          }

          // 2451544 = 2000- 1- 1
          var timestamp = 2451544;
          return datediff(parseDate('2000-01-01'), parseDate(date)) + timestamp;
    },
    urlparams(){
          var root = this;
          var queryString = window.location.search;
          var urlParams = new URLSearchParams(queryString);
          var term = urlParams.get('term');
          var offset = urlParams.get('offset');
          var filters = urlParams.get('filters');
          if(term){
            this.term = term;
          }
          if(offset){
            this.from = offset;
          }
          if(filters){
            var urlfiltersout = [];
            var activefilters =  filters.split("~");
            activefilters.forEach(function(value) {
              var filteritem = value.split(".");
                var rangeitem = filteritem[0].split("_");
              if(rangeitem[0] == "range"){
                var ranges = filteritem[1].split("_");
              if(rangeitem[1] == "customrange"){
                Vue.set(root.realDates, "customrange", {"from": ranges[0], "to":  ranges[1]})

                root.rangeFrom = root.createdates(ranges[0]);
                root.rangeTo = root.createdates(ranges[1]);
              }
                urlfiltersout.push({key:rangeitem[2], value:rangeitem[1], range: {"P:29.datField" : {gte: root.rangeFrom, lte:root.rangeTo } } });
              }else{
                urlfiltersout.push({value:filteritem[1], key: filteritem[0] });
            }
          });
            this.selected = urlfiltersout;
          }
          this.api(this.from, this.term);
    },
    urlstring(){

          var url = "?";
          var root = this;
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
                filtersarray.push("range_"+item.value+"_"+item.key+"."+root.realDates[item.value].from+"_"+root.realDates[item.value].to);
              }else{
                filtersarray.push(""+item.key+"."+item.value+"");
              }
            });
            url += filtersarray.join("~");
          }
          return encodeURI(url);
    },
    clearfilters(){
          this.selected = [];
          this.api(0, this.term);
    },
    more(prop){
          var index = this.open.indexOf(prop);
          if (index > -1) {
            this.open.splice(index, 1);
          }else{
            this.open.push(prop);
          }
    },
    search(e){
           this.api(0, e.target.value);
    },
    next(e){
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
            return 'wssearch--main__loading';
          }
          return false;
    },
    sort:function(){
          this.aggs.Date.buckets = this.aggs.Date.buckets.filter(function(el){
            if(el.doc_count > 0){
              return el;
            }
          }).reverse();
    }
  }
};
</script>

<style>
.wssearch--filters {
  grid-area: filters;
}
  .wssearch--filter {
    position: relative;
  }
  .wssearch--total {
    grid-area: total;
}
</style>
