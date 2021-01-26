var Vue = require( 'vue' ),
    WSSearchFront = require( './wssearchfront.vue' );




// eslint-disable-next-line no-new
new Vue( {
    el: '#app',
    render: function ( h ) {
        return h( WSSearchFront );
    }
} );
