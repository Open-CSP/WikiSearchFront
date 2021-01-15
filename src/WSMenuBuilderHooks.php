<?php
class WSMenuBuilderHooks {
   // Register any render callbacks with the parser
   public static function onParserFirstCallInit( Parser $parser ) {

      // Create a function hook associating the "wsmenubuilder" magic word with buildMenu()
      $parser->setFunctionHook( 'wsmenubuilder', [ self::class, 'buildMenu' ] );
   }

   // Render the output of {{#wsmenubuilder:}}.
   public static function buildMenu( Parser $parser, $menus = '', $space = '' ) {

      // The input parameters are wikitext with templates expanded.
      // The output should be wikitext too.

      //Note that vars that depend on the request context (e.g. the user or the page title) can't be moved to a package module.
      //They can only be exported with OutputPage::addJsConfigVars(). Or like this:
      $output = "<div id='app' ></div><div id='vuedata' data-menus='$menus' data-space='$space'></div>";

      // add vue modules
      $parser->getOutput()->addModules( 'ext.WSMenuBuilder.module' );

       
       return  $output;
   }

}
