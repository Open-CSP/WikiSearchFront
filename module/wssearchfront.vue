<template>
<div id="app">
  <div class="wssearch" >
    <search-input
      @change="search"
      :term="term"
    >
    </search-input>
    <selected-pils
      :selected="selected"
       @click="clearfilters"
    >
    </selected-pils>
    <div v-if="aggs" class="wssearch--filters">{{sort}}
      <div class="wssearch--daterange">
        {{ $i18n( 'date-range-from' ) }}
         <div id="dateinput1">
         </div>
         {{ $i18n( 'date-range-to' ) }}
         <div id="dateinput2">
         </div>
         <agg
           v-show="rangeFrom && rangeTo"
           v-bind:agg="{key:'customrange',from: rangeFrom , to: rangeTo ,doc_count:1 }"
           v-bind:key="'0'"
           v-bind:index="'0'"
           v-bind:name="'Date'"

         ></agg>
     </div>
        <div
          v-for="(name, index) in Object.keys(aggs).sort()"

          v-bind:key="index"
          v-bind:class="'wssearch--filter wssearch--filter__' + name.toLowerCase()"
        >
          <span class="wssearch--filter-header" v-if="aggs[name].buckets.length" >
            <label>{{name.replace("_", " ")}}</label>
          </span>
          <div
            v-if="facetconfig.includes(name)"
            class="wssearch--selected-filters__combobox"
          >
            <label
              v-if="activefilter.key == name && facetconfig.includes(name)"
              class="wssearch--selected-filter"
              v-for="activefilter in selected"
              v-bind:for="activefilter.key.toLowerCase().replace(' ', '_') + '--' + activefilter.value.toLowerCase().replace(' ', '_')"
            >
              <bdi>{{activefilter.value ?  activefilter.value : activefilter.name }}</bdi>
            </label>
        </div>
          <input
            v-if="facetconfig.includes(name)"
            type="search"
            :placeholder="name.replace('_', ' ')"
            class="wssearch--filter-options-search"
            @input="searchaggs(event, name)"
            />
          <div
           :class="facetconfig.includes(name) ? 'wssearch--filter-options wssearch--filter-options__combobox' : 'wssearch--filter-options'"
          >
            <agg
              v-for="(agg, i) in aggs[name].buckets"
              v-bind:agg="agg"
              v-bind:key="i"
              v-bind:index="i"
              v-bind:name="name"
            ></agg>
            <label
              class="wssearch--filter-showmore"
              v-if="aggs[name].buckets.length > 5"
              @click="more(name)"
            >
              <span class="wssearch--filter-less" v-if="open.includes(name)" >{{ $i18n( 'wssearch-less' ) }}</span>
              <span class="wssearch--filter-more" v-else >{{ $i18n( 'wssearch-more' ) }}</span>
            <label>
          </div>

      </div>
    </div>
    <div
      class="wssearch--total"
      v-html="$i18n('wssearch-total', total, from).parse()">
    </div>
    <div v-bind:class="mainloading">
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
  'agg': require( './agg.vue' ),
  'hit': require( './hit.vue' ),
  'pager': require( './pager.vue' )

},
  mounted(){
  this.createranges();
   this.urlparams();
   this.dateinputs();
  },
  data:function(){
    return {
    total: 0,
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
    hitIDs:"",//mw.config.values.WSSearchFront.resultIDs
    facetconfig:mw.config.values.WSSearchFront.facetSettings.combobox,//mw.config.values.WSSearchFront.facetSettings.split(",")
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
        root.hits = JSON.parse(data.result.hits);
        console.log(root.hits);
        root.aggs = data.result.aggs;
        root.loading = false;

      })
    },
    dateinputs:function(){
      var root = this;
      var date1 = "";
      var date2 = "";


  mw.loader.using('mediawiki.widgets.DateInputWidget').then(function(data){


      // Date input widget showcase
      var dateInputStart = new mw.widgets.DateInputWidget();


      if(root.realDates["customrange"]){
        dateInputStart.setValue(root.realDates["customrange"].from);
      }


      dateInputStart.on( 'change', function () {


        console.log(root.selected)
        // The value will always be a valid date or empty string, malformed input is ignored
         date1 = dateInputStart.getValue();
         console.log(dateInputEnd)
         dateInputEnd.mustBeAfter = date1 ;

        root.rangeFrom = root.createdates(date1) + 1;

        if(root.rangeTo > 0){
          var kw = Object.keys(root.selected);

          Vue.set(root.realDates, "customrange", {"from": date1, "to":  date2})


          kw.forEach(function(el, i){
            if(root.selected[i].value == "customrange"){
              root.selected[i].range["P:29.datField"].gte = Number(root.rangeFrom+'.0000000');


            }
              root.api(0, root.term);
           // console.log(root.selected[i].value)
          })
      //    .click();


    //    root.dates.push(  {"key":"Custom+range","from":root.rangeFrom,"to":root.rangeTo});
    //     root.selected.push(  { "value" : "customrange" , "key": 'Date',  "range": { "P:29.datField": { "gte": Number(root.rangeFrom+'.0000000'), "lte": Number(root.rangeTo+'.0000000')}}});
//  root.api(0, root.term);
     }
      } );
      // Date input widget showcase
      var dateInputEnd = new mw.widgets.DateInputWidget();
      if(root.realDates["customrange"]){
        dateInputEnd.setValue(root.realDates["customrange"].to);
      }
      dateInputEnd.on( 'change', function () {
    //    console.log(root.selected)

  //
        // The value will always be a valid date or empty string, malformed input is ignored
         date2 = dateInputEnd.getValue();
         dateInputStart.mustBeBefore = date2 ;

        root.rangeTo = root.createdates(date2) + 2;

        if(root.rangeFrom > 0){
          var kw = Object.keys(root.selected);
          Vue.set(root.realDates, "customrange", {"from": date1, "to":  date2})

          kw.forEach(function(el, i){
            if(root.selected[i].value == "customrange"){


              root.selected[i].range["P:29.datField"].lte = Number(root.rangeTo+'.0000000');




            }
              root.api(0, root.term);
           // console.log(root.selected[i].value)
          })
      //   $("#date--customrange").click();

      //    root.dates.push(  {"key":"Custom+range","from":root.rangeFrom,"to":root.rangeTo});

          //  root.selected.push(  { "value" : "customrange" , "key": 'Date',  "range": { "P:29.datField": { "gte": Number(root.rangeFrom+'.0000000'), "lte": Number(root.rangeTo+'.0000000')}}});
      //   root.api(0, root.term);

     }
      } );

$( '#dateinput1' ).append( dateInputStart.$element );
$( '#dateinput2' ).append( dateInputEnd.$element );

});
    },
    createranges:function(){
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
    createdates:function(date){

      // new Date("dateString") is browser-dependent and discouraged, so we'll write
      // a simple parse function for U.S. date format (which does no error checking)
      function parseDate(str) {
          return new Date(str);
      }

      function datediff(first, second) {
          // Take the difference between the dates and divide by milliseconds per day.
          // Round to nearest whole number to deal with DST.
          return Math.round((second-first)/(1000*60*60*24));
      }

      // 2451544 = 2000- 1- 1
      var timestamp = 2451544;

      return datediff(parseDate('2000-01-01'), parseDate(date)) + timestamp;



    },
    urlparams:function(){
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
    urlstring:function(){

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
          console.log(root.realDates)
        //  if(item.value == "customrange"){
//filtersarray.push("range_"+item.value+"_"+item.key+"."+item.from+"_"+item.to);
//}else{
          filtersarray.push("range_"+item.value+"_"+item.key+"."+root.realDates[item.value].from+"_"+root.realDates[item.value].to);
//}
        }else{
          filtersarray.push(""+item.key+"."+item.value+"");
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
    searchaggs:function(e, name){
      var re = new RegExp( e.target.value, 'ig' );
      var bucks = this.aggs[name].buckets;
      bucks.forEach(function(agg, key){
        console.log(agg)
        if(!agg.key.match(re)){
          Vue.set(agg, 'show', 'no')
        }else{
          Vue.set(agg, 'show', 'yes')
        }
      })
    //  console.log(e.target.value, aggs)

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
    }
  }
};
</script>

<style>
.wssearch--search{
    position: relative;
    vertical-align: middle;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    max-width: 50em;
  }
.wssearch--search-input, .wssearch--filter-options-search{
    cursor: text;
    padding-right: 28px;
    box-shadow: inset 0 0 0 1px transparent;
    -webkit-transition: border-color 250ms, box-shadow 250ms;
    -moz-transition: border-color 250ms, box-shadow 250ms;
    transition: border-color 250ms, box-shadow 250ms;
    padding-left: 2.42857143em;
    background-color: #fff;
    color: #000;
    margin: 0;
    border: 1px solid #a2a9b1;
    border-radius: 2px;
    padding: 5px 8px;
    font-size: inherit;
    font-family: inherit;
    line-height: 1.42857143em;
    width:100%;
  }
  .wssearch--search-icon{
    cursor: text;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    min-width: 20px;
    width: 1.42857143em;
    min-height: 20px;
    height: 100%;
    background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E%3Ctitle%3Esearch%3C/title%3E%3Cpath d=%22M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 017.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z%22/%3E%3C/svg%3E');
  }
    .wssearch--search-clear{
      cursor: pointer;
      max-height: 2.28571429em;
     margin-right: 0.71428571em;
     opacity: 0.87;
     background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    min-width: 12px;
    width: 0.85714286em;
    min-height: 12px;
    height: 100%;

   }
   .wssearch--filter {
    position: relative;
}
   .wssearch--selected-filter {
     background:white;
     padding: 0 1em 0 .5em;
     display: inline-block;
     max-width: 100%;
     text-overflow: ellipsis;
     overflow: hidden;
     font-size: 0.92857143em;
     cursor: pointer;
     position: relative;
     white-space: nowrap;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      width: auto;
      max-width: 100%;
      height: 1.57142857em;
      margin: 0 4px 4px 0;
      border: 1px solid #a2a9b1;
      border-radius: 1.57142857em;
      line-height: 1.42857143em;
      vertical-align: middle;
   }
   .wssearch--selected-clear{
     cursor: pointer;
     color: #36c;
     border-color: transparent;
    border-style: solid;
    border-width: 1px;
    padding: 6px 6px;
   }
   .wssearch--selected-filter:hover {
     background: #efefef;
     color:#36c;
   }

   .wssearch--selected-filter:after {
     content: "×";
     position: absolute;
     color: #767676;
     right: 4px;
   }
   .wssearch--selected-filters__combobox:not(:empty) {
    border: 1px solid #a2a9b1;
    border-bottom: none;
    padding: .2em .2em 0;
    background: #f0f0f0;
    border-radius: .2em .2em 0 0;
    margin-bottom: -1px;
}
/*
.wssearch--daterange {
    border: 1px solid #a2a9b1;
    border-radius: .2em;
    padding: .2em .5em;
    background: #f0f0f0;
}
*/
.wssearch--daterange .wssearch--checkbox-count, .wssearch--daterange .wssearch--checkbox-title{
  display:none;
}
.wssearch--daterange .wssearch--checkbox{
  display: block;
}
.wssearch--daterange .wssearch--checkbox-input {
    position: relative;
    display: block;
}
.wssearch--daterange .wssearch--checkbox-input-icon {
    width: 100%;
}


</style>
