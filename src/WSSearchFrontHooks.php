<?php

namespace WSSearchFront;

use WSSearchFront\WSSearchParams;

/**
 * Class for the Frontend of WSSearch
 */
class WSSearchFrontHooks {

	/**
	 * @param string $result
	 * @param \WSSearch\SearchEngineConfig $config
	 * @param Parser $parser
	 * @param array $parameters
	 *
	 * @return bool
	 */
	public static function onWSSearchOnLoadFrontend(
		string &$result,
		\WSSearch\SearchEngineConfig $config,
		\Parser $parser,
		array $parameters
	) {
		$searchConfig = [
			"settings"      => [],
			"facetSettings" => [],
			"hitSettings"   => [],
		];

		$params = new WSSearchParams();

		foreach ( $parameters as $input_parameter ) {
			//if we have a parameter
			if ( $input_parameter && ! empty( $input_parameter ) ) {
				$firstChar = substr(
					$input_parameter,
					0,
					1
				);

				// Switch based on first character or default
				switch ( $firstChar ) {
					case "@" :
						$params->getFacetSettings(
							$input_parameter,
							$searchConfig
						);
						break;
					case "?":
						$params->getHitSettings(
							$input_parameter,
							$searchConfig
						);
						break;
					default:
						$params->getParameterOutput(
							$input_parameter,
							$searchConfig
						);
				}
			}
		}


		// The JavaScript front-end variables are wanted as empty objects instead of empty arrays.
		if( empty( $searchConfig['facetSettings'] ) ) {
			$searchConfig['facetSettings'] = new \StdClass();
		}
		if( empty( $searchConfig['hitSettings'] ) ) {
			$searchConfig['hitSettings'] = new \StdClass();
		}
		if( empty( $searchConfig['settings'] ) ) {
			$searchConfig['settings'] = new \StdClass();
		}

		$parser->getOutput()->addJsConfigVars( "WSSearchFront",
			(object) array(
				"config" => $searchConfig
			) );
		$parser->getOutput()->addModules( 'ext.WSSearchFront.module' );

		$result = "<div id='app'></div>";

		return true;
	}


}
