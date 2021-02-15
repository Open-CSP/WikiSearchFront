1<?php
class WSSearchFrontHooks {


  public static function onWSSearchOnLoadFrontend( string &$result, \WSSearch\SearchEngineConfig $config, Parser $parser, array $parameters ) {


if(!$parameters[0]){

  $parser->getOutput()->addModules( 'ext.WSSearchFront.config' );


}else{

$settings = [];

foreach ($parameters as $key => $value) {
    $split = explode('=', $value);
    $k = $split[0];
    $v = $split[1];

    if($k == 'size'){
      $settings['size'] = $v;
    }
    if($k[0] == '?'){
       $settings[$v][] = substr($k, 1);
    }
}

 $jsconfig = [
              "resultIDs" => $config->getResultPropertyIDs(),
              "facetSettings" => $settings
            ];

  $parser->getOutput()->addJsConfigVars("WSSearchFront", $jsconfig );
  $parser->getOutput()->addModules( 'ext.WSSearchFront.module' );



}
    $result =  "<div id='app'></div>";


  }
}
