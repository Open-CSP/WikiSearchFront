<?php
class WSSearchFrontHooks {


  public static function onWSSearchOnLoadFrontend( string &$result, \WSSearch\SearchEngineConfig $config, Parser $parser, array $parameters ) {





 $jsconfig = [
              "resultIDs" => $config->getResultPropertyIDs(),
              "facetSettings" => implode(',', $parameters)
            ];

  $parser->getOutput()->addJsConfigVars("WSSearchFront", $jsconfig );
  $parser->getOutput()->addModules( 'ext.WSSearchFront.module' );

    $result =  "<div id='app'></div>";


  }
}
