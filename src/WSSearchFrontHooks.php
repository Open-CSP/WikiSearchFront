1<?php

use SMW\DIProperty;
use SMW\ApplicationFactory;


class WSSearchFrontHooks {


  public static function onWSSearchOnLoadFrontend( string &$result, \WSSearch\SearchEngineConfig $config, Parser $parser, array $parameters ) {


if(!$parameters[0]){

 

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


$store = ApplicationFactory::getInstance()->getStore();


$result_properties = $config->getResultPropertyIDs();
 $result_properties_array = [];
foreach ( $result_properties as $key => $value ) {

  $IDProperty = new DIProperty( $key );
  $ID = $store->getObjectIds()->getSMWPropertyID($IDProperty);
  $Type = $IDProperty->findPropertyValueType();

  if($Type == "_txt"){
    $ftype = "txtField";
  }else{
    $ftype = "wpgField";
  }

    $result_properties_array[$ID] = $ftype;
}
 $result_properties = json_encode( $result_properties_array );


 $jsconfig = [
              "resultIDs" => $result_properties_array,
              "facetSettings" => $settings
            ];

  $parser->getOutput()->addJsConfigVars("WSSearchFront", $jsconfig );
  $parser->getOutput()->addModules( 'ext.WSSearchFront.module' );



}
    $result =  "<div id='app'></div>";


  }
}
