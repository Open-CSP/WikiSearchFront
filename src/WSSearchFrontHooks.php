<?php


class WSSearchFrontHooks {

  private static function getPropertyType($property_name){
    $property_field_mapper = new \WSSearch\SMW\PropertyFieldMapper( $property_name );
    $property_id = $property_field_mapper->getPropertyID();
    $property_type = $property_field_mapper->getPropertyType();
    return ['key'=> $property_id, 'type' => $property_type];
  }


  public static function onWSSearchOnLoadFrontend( string &$result, \WSSearch\SearchEngineConfig $config, Parser $parser, array $parameters ) {


    $searchconfig = [
      "settings"      => [],
      "facetSettings" => [],
      "hitSettings"   => [],
    ];

    foreach ($parameters as $key => $input_parameter) {
      
      if($input_parameter){
        //if the paramter does not start with @ or ?  create the settings config
        if($input_parameter[0] != '@' && $input_parameter[0] != '?'){

          $parameter_options = explode('=', $input_parameter);
          $output_parameter = trim($parameter_options[1]);

          if($parameter_options[0] == 'size'){
            $output_parameter = intval($parameter_options[1]);
          }

          if($parameter_options[0] == 'size options'){
            $size_options = explode(",", $parameter_options[1]);
            $output_parameter = $size_options;
          }

          if($parameter_options[0] == 'sort options'){
            $sort_options = explode(",", $parameter_options[1]);
            $sort_options_values = [];

            foreach ($sort_options as $i => $sort_option) {

              $sort_option_label = explode(":", $sort_option);

              if(sizeof($sort_option_label) > 1){
                $sort_options_values[trim($sort_option_label[0])] =  ["label" => trim($sort_option_label[1]) ];
              }else{
                $sort_options_values[trim($sort_option)] = [];
              }

            }
            $output_parameter = $sort_options_values;
          }

          if($parameter_options[0] == 'title'){

            $output_parameter = [];
            $property_options = explode('#', $input_parameter);

            foreach ($property_options as $i => $property_option) {
              $property_option = explode('=', $property_option);
              if($i == 0){
                $property_name = trim($property_option[1]);
                $output_parameter['name'] = $property_name;
                $property_type = WSSearchFrontHooks::getPropertyType( str_replace(' ', '_', $property_name) );
                $output_parameter['key'] = $property_type['key'];
                $output_parameter['type'] = $property_type['type'];
              }else{
                $output_parameter[$property_option[0]] = trim($property_option[1]);
              }

            }
          }

          $searchconfig["settings"][$parameter_options[0]] = $output_parameter;
        }

        if($input_parameter[0] == '@'){

          $facet_options = explode('#', $input_parameter);
          $property_name = "";

          foreach ($facet_options as $i => $facet_option) {

            if($i == 0){
              $property_name = trim(substr($facet_option, 1));
              $searchconfig["facetSettings"][$property_name] = [];
            }else{
              $facet_value = explode('=', $facet_option);
              $searchconfig["facetSettings"][$property_name][$facet_value[0]] = trim($facet_value[1]);
            }

          }
        }

        if($input_parameter[0] == '?'){
          $result_options = explode('#', $input_parameter);
          $property_name = "";
          foreach (  $result_options as $i => $result_option) {

            if($i == 0){
              $property_name = trim(substr($result_option, 1));
              $searchconfig["hitSettings"][$property_name] = [];
              $property_type = WSSearchFrontHooks::getPropertyType(str_replace(' ', '_', $property_name));
              $searchconfig["hitSettings"][$property_name]['key'] = $property_type['key'];
              $searchconfig["hitSettings"][$property_name]['type'] = $property_type['type'];
            }else{
              $result_value = explode('=', $result_option);
              $searchconfig["hitSettings"][$property_name][$result_value[0]] = trim($result_value[1]);
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
