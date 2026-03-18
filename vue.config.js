module.exports = {
  productionSourceMap: false,

  // Externalize Vue so it is NOT bundled into the dist.
  // MediaWiki provides Vue 3 via the 'vue' ResourceLoader module.
  // The compiled output is loaded as a ResourceLoader packageFile,
  // where require('vue') is resolved by MediaWiki's module registry.
  configureWebpack: {
    externals: {
      vue: 'vue',
    },
  },
};
