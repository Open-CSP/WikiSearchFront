var Vue = require( 'vue' ),
    Vuex = require( 'vuex' ),
    MenuBuilder = require( './menubuilder.vue' );

    var store = new Vuex.Store({
      state:{
        selected: "",
        dragging: "",
        info: "",
        clone: "",
        ifsearch: false
        },
      mutations:{
        info(state, value){
          state.info = value;
        },
        ifsearch(state, value){
          state.ifsearch = value;
        },
        select(state, item){
          state.selected = item;
        //  app.search = state.selected.dragitem.printouts.Icon[0]
        },
        clone(state, item){
         state.clone = item;
        },
        drag(state, item){
          state.dragging = item;
        },
         dragid(state, title){
          state.dragging.dragitem.printouts.Id = [title];
        },
        parent(state, item){
          state.dragging.dragitem.printouts.Parent  = [item];
        },
        title(state, title){
          state.selected.dragitem.printouts.Text = [title];
        },
         type(state, title){
          state.selected.dragitem.printouts.Type = [title];
        },
         href(state, title){
          state.selected.dragitem.printouts.Href = [title];
        }
       ,
         icon(state, title){
          state.selected.dragitem.printouts.Icon = [title];
        }
      },
      actions:{

      },
      getters:{
        ifsearch(state){
          return state.ifsearch;
        },
        dragging(state){
          return state.dragging;
        },
        selected(state){
          return state.selected;
        },
        info(state){
          return state.info;
        },
        clonen(state){
          return state.clone;
        }
      }
    })


// eslint-disable-next-line no-new
new Vue( {
    el: '#app',
    store: store,
    render: function ( h ) {
        return h( MenuBuilder );
    }
} );
