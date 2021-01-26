<?php
class WSSearchFrontHooks {


  public static function onWSSearchOnLoadFrontend( string &$result, \WSSearch\SearchEngineConfig $config, Parser $parser, array $parameters ) {

    $parser->getOutput()->addModules( 'ext.WSSearchFront.module' );


    $result = "<div id='app'></div>";


  }
}
