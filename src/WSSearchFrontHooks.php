<?php


class WSSearchFrontHooks {

  private static function getzType($property_name){
    $property_field_mapper = new \WSSearch\SMW\PropertyFieldMapper( $property_name );
    $property_id = $property_field_mapper->getPropertyID();
    $property_type = $property_field_mapper->getPropertyType();
    return ['key'=> $property_id, 'type' => $property_type];
  }


  public static function onWSSearchOnLoadFrontend( string &$result, \WSSearch\SearchEngineConfig $config, Parser $parser, array $parameters ) {


$searchconfig = [
  "settings" => [],
  "facetSettings" => [],
  "hitSettings" => [],
];

foreach ($parameters as $key => $value) {

    if($value){

    if($value[0] != '@' && $value[0] != '?'){

      $split = explode('=', $value);

      $val = trim($split[1]);

      if($split[0] == 'size'){
        $val = intval($split[1]);
      }

      if($split[0] == 'sort options'){
        $val = explode(",", $split[1]);
      }

      if($split[0] == 'title'){

        $val = [];

        $split3 = explode('#', $value);
        foreach ($split3 as $i => $sp) {
            if($i == 0){
              $split3 = explode('=', $sp);
              $prop = trim($split3[1]);
              $val['name'] = $prop;
              $propinfo = WSSearchFrontHooks::getzType(str_replace(' ', '_',$prop));
              $val['key'] = $propinfo['key'];
              $val['type'] = $propinfo['type'];

            }else{
                $split2 = explode('=', $sp);
                $val[$split2[0]] = trim($split2[1]);
            }
      }




    }
      $searchconfig["settings"][$split[0]] = $val;
  }


        if($value[0] == '@'){
          $split = explode('#', $value);
          $prop = "";
          foreach ($split as $i => $sp) {
              if($i == 0){
                  $prop = trim(substr($sp, 1));
                  $searchconfig["facetSettings"][$prop] = [];
              }else{
                  $split2 = explode('=', $sp);
                  $searchconfig["facetSettings"][$prop][$split2[0]] = trim($split2[1]);
              }
          }
        }

        if($value[0] == '?'){
          $split = explode('#', $value);
          $prop = "";
          foreach ($split as $i => $sp) {
              if($i == 0){
                  $prop = trim(substr($sp, 1));
                  $searchconfig["hitSettings"][$prop] = [];
                  $propinfo = WSSearchFrontHooks::getzType(str_replace(' ', '_',$prop));
                  $searchconfig["hitSettings"][$prop]['key'] = $propinfo['key'];
                  $searchconfig["hitSettings"][$prop]['type'] = $propinfo['type'];
              }else{
                  $split2 = explode('=', $sp);
                  $searchconfig["hitSettings"][$prop][$split2[0]] = trim($split2[1]);



              }
          }
        }

      }

}

      $jsconfig = [
          "config" => $searchconfig
      ];

      $parser->getOutput()->addJsConfigVars("WSSearchFront", $jsconfig );
      $parser->getOutput()->addModules( 'ext.WSSearchFront.module' );

      $result =  "<div id='app'></div>";
      return true;

    }

  }
