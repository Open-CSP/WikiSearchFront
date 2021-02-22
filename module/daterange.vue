<template>
      <div class="wssearch--daterange">
        {{ $i18n( 'date-range-from' ) }}
         <div id="dateinputfrom">
         </div>
         {{ $i18n( 'date-range-to' ) }}
         <div id="dateinputto">
         </div>
         <component :is="aggcomponent"
           :agg="agg"
           :index="'0'"
           :name="'Date'"
           @change="filter"
         ></component>
     </div>
</template>

<script>
var Vue = require( 'vue' );

  module.exports = {
    mounted(){
           this.dateinputs();
    },
    props:{
      agg:Object,
      aggcomponent:Object
    },
    data(){
      return {
        rangeFrom:false,
        rangeTo:false,

      }
    },
    methods:{
         dateinputs:function(){
            var root = this.$root.$children[0];
            var date = {};
            var dateInput = {};

            var dateinputs = ['from', 'to'];

            dateinputs.forEach(element => {

                dateInput[element] = new mw.widgets.DateInputWidget();

                if(root.realDates["customrange"]){
                    dateInput[element].setValue(root.realDates["customrange"][element]);
                }

                dateInput[element].on( 'change', function () {

                    date[element] = dateInput[element].getValue();
                        dateInput['to'].mustBeAfter = date['from'];
                        dateInput['from'].mustBeBefore = date['to'];

                    

                         root['range'+element.charAt(0).toUpperCase() + element.slice(1)] = root.createdates(date[element]) + 1; 


               


                    if(root.rangeTo > 0){
                            var kw = Object.keys(root.selected);

                            Vue.set(root.realDates, "customrange", {"from": date['from'], "to":  date['to']})

                            kw.forEach(function(el, i){
                            if(root.selected[i].value == "customrange"){
                                if(element = 'from'){
                                    var te = 'gte';
                                }else{
                                    var te = 'lte';
                                }
                                root.selected[i].range["P:29.datField"][te] = Number(root['range'+element.charAt(0).toUpperCase() + element.slice(1)]+'.0000000');
                                }
                                root.api(0, root.term);
                            })

                    }
                } );
                $( '#dateinput'+element ).append( dateInput[element].$element );
            });
    },
    filter(event){
            this.$emit( 'change', event );
      },
     createdates:function(date){

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
     },
    computed:{
   
    }
  }
</script>

<style>
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
