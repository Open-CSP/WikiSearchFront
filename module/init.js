/* global mw */
'use strict';

// vue is provided by MediaWiki's ResourceLoader 'vue' module (Vue 3)
const { createApp } = require( 'vue' );
// App component and createPinia are bundled in the compiled dist
const { App, createPinia } = require( './wikisearchfront.js' );

/**
 * Initialize the WikiSearchFront Vue 3 application.
 * Mounts onto the #app element injected by WikiSearchFrontHooks.
 */
function initWikiSearchFront() {
	const app = createApp( App );

	// Install Pinia for state management (replaces Vuex)
	const pinia = createPinia();
	app.use( pinia );

	// Expose MediaWiki i18n as a global instance property.
	// Options API components can call this.$i18n('message-key').
	app.config.globalProperties.$i18n = function () {
		/* eslint-disable mediawiki/msg-doc */
		return mw.message.apply( mw, arguments );
		/* eslint-enable mediawiki/msg-doc */
	};

	// Custom directive for rendering i18n messages as HTML.
	// Usage: v-i18n-html:messageKey="[...params]"
	//        v-i18n-html="mw.message('key').params([...])"
	//        v-i18n-html:foo or v-i18n-html="'foo'"
	app.directive( 'i18n-html', ( el, binding ) => {
		let message;
		/* eslint-disable mediawiki/msg-doc */
		if ( Array.isArray( binding.value ) ) {
			if ( binding.arg === undefined ) {
				throw new Error(
					'v-i18n-html used with parameter array but without message key'
				);
			}
			message = mw.message( binding.arg ).params( binding.value );
		} else if ( binding.value instanceof mw.Message ) {
			message = binding.value;
		} else {
			message = mw.message( binding.arg || binding.value );
		}
		/* eslint-enable mediawiki/msg-doc */
		el.innerHTML = message.parse();
	} );

	app.mount( '#app' );
}

if ( document.readyState === 'complete' || document.readyState === 'interactive' ) {
	initWikiSearchFront();
} else {
	document.addEventListener( 'DOMContentLoaded', initWikiSearchFront );
}
