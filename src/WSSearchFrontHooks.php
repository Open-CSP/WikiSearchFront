<?php
class WSSearchFrontHooks {


  public static function onWSSearchOnLoadFrontend( string &$result, \WSSearch\SearchEngineConfig $config, Parser $parser, array $parameters ) {


if(!$parameters[0]){

  $parser->getOutput()->addModules( 'ext.WSSearchFront.config' );


}else{

 $jsconfig = [
              "resultIDs" => $config->getResultPropertyIDs(),
              "facetSettings" => json_decode('{'. $parameters[0] . '}')
            ];

  $parser->getOutput()->addJsConfigVars("WSSearchFront", $jsconfig );
  $parser->getOutput()->addModules( 'ext.WSSearchFront.module' );



}
    $result =  "<div id='app'></div>";


  }
}
