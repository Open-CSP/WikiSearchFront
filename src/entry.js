/**
 * Build entry point for WikiSearchFront.
 *
 * Exports the root App component and createPinia so that module/init.js
 * (loaded as a ResourceLoader packageFile) can bootstrap the Vue 3 app.
 * Pinia is bundled here because MediaWiki does not provide it via ResourceLoader.
 * Vue itself is externalised (see vue.config.js) and comes from MW's 'vue' module.
 */
export { default as App } from './App.vue';
// Re-export createPinia so it is included in the bundle
export { createPinia } from 'pinia';
