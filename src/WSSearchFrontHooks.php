<?php

use SMW\DIProperty;
use SMW\ApplicationFactory;


class WSSearchFrontHooks {

  private static function getzType($key, $store){
    $IDProperty = new DIProperty( $key );
    $ID = $store->getObjectIds()->getSMWPropertyID($IDProperty);
    $Type = $IDProperty->findPropertyValueType();

    if($Type == "_txt"){
      $ftype = "txtField";
    }else if($Type == "_num"){
      $ftype = "numField";
    }else{
      $ftype = "wpgField";
    }
    return ['key'=> $ID, 'type' => $ftype];
  }

  public static function onWSSearchOnLoadFrontend( string &$result, \WSSearch\SearchEngineConfig $config, Parser $parser, array $parameters ) {

    if($parameters[0]){

      $settings = [];
      // temp code to get property type
      $store = ApplicationFactory::getInstance()->getStore();

$template = "";



      foreach ($parameters as $key => $value) {
          $split = explode('=', $value);
          $k = $split[0];
          $v = $split[1];

          if($k == 'size'){
            $settings['size'] = intval($v);
          }
          if($k == 'template'){
            $split = explode('#', $v);
            $n = $split[0];
            $t = $split[1];
            $templateresults = WSSearchFrontHooks::getzType($n, $store);
            $template = ['template' => $t, 'name' => $n, 'key' => $templateresults['key'], 'type' => $templateresults['type']];
          }
          if($k == 'title'){
            $titleresults = WSSearchFrontHooks::getzType($v, $store);
            $settings['title'] = ['name' => $v, 'key' => $titleresults['key'], 'type' => $titleresults['type']];
          }
          if($k[0] == '?'){
            $settings[$v][] = substr($k, 1);
          }
      }




      $result_properties = $config->getResultPropertyIDs();
      $result_properties_array = [];

      foreach ( $result_properties as $key => $value ) {

        $results = WSSearchFrontHooks::getzType($key, $store);

        $result_properties_array[$results['key']] = ['type' => $results['type'], 'name' => $key];
      }

      $result_properties = json_encode( $result_properties_array );





      $jsconfig = [
          "resultIDs" => $result_properties_array,
          "facetSettings" => $settings,
          "template" => $template
      ];

      $parser->getOutput()->addJsConfigVars("WSSearchFront", $jsconfig );
      $parser->getOutput()->addModules( 'ext.WSSearchFront.module' );

    }
    $result =  "<div id='app'></div>";
    return true;
  }


}
