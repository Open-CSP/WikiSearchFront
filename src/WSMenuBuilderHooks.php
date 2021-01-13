<?php
class WSMenuBuilderHooks {
   // Register any render callbacks with the parser
   public static function onParserFirstCallInit( Parser $parser ) {

      // Create a function hook associating the "example" magic word with renderExample()
      $parser->setFunctionHook( 'wsmenubuilder', [ self::class, 'buildMenu' ] );
   }

   // Render the output of {{#example:}}.
   public static function buildMenu( Parser $parser, $param1 = '', $param2 = '', $param3 = '' ) {

      // The input parameters are wikitext with templates expanded.
      // The output should be wikitext too.
      $output = "<div id='app' ></div><div id='vuedata' data-menus='$param1'></div>";

      $parser->getOutput()->addModules( 'ext.WSMenuBuilder.module' );

       return [ $output, 'noparse' => true, 'isHTML' => true ];
   }

}
