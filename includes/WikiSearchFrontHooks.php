<?php

namespace WikiSearchFront;

use WikiSearchFront\WikiSearchParams;

/**
 * Class for the Frontend of WikiSearch
 */
class WikiSearchFrontHooks {

	/**
	 * @param string $result
	 * @param \WikiSearch\SearchEngineConfig $config
	 * @param Parser $parser
	 * @param array $parameters
	 *
	 * @return bool
	 */
	public static function onWikiSearchOnLoadFrontend(
		string &$result,
		\WikiSearch\SearchEngineConfig $config,
		\Parser $parser,
		array $parameters
	) {
		$searchConfig = [
			"settings"      => (Object)[],
			"facetSettings" => (Object)[],
			"hitSettings"   => (Object)[],
		];

		$params = new WikiSearchParams();

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

		$parser->getOutput()->addJsConfigVars( "WikiSearchFront",
											   array(
												   "config" => $searchConfig
											   ) );
		$parser->getOutput()->addModules( ['ext.WikiSearchFront.module'] );

		$result = "<div id='app'></div>";

		return true;
	}


}
