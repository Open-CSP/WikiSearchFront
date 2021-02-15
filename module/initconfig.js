var Vue = require( 'vue' ),
    WSSearchFrontConfig = require( './wssearchfrontconfig.vue' );




// eslint-disable-next-line no-new
new Vue( {
    el: '#app',
    render: function ( h ) {
        return h( WSSearchFrontConfig );
    }
} );
