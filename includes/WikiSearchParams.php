<?php

namespace WikiSearchFront;

/**
 * Helper class to identify parser options
 */
class WikiSearchParams {

	/**
	 * @param string $property_name
	 *
	 * @return array
	 */
	private function getPropertyType( string $property_name ): array {
		try {
			$property_field_mapper = new \WikiSearch\SMW\PropertyFieldMapper( $property_name );
			$property_id = $property_field_mapper->getPropertyID();
			$property_type = $property_field_mapper->getPropertyType();
		} catch ( \BadMethodCallException $e ) {
			return [];
		}

		return [
			'key' => $property_id,
			'type' => $property_type
		];
	}

	/**
	 * @param string $value
	 *
	 * @return array
	 */
	private function getSizeOptions( string $value ) {
		return explode(
			",",
			$value
		);
	}

	/**
	 * @param string $value
	 *
	 * @return array
	 */
	private function getSortOptions( string $value ) {
		$sort_options = explode(
			",",
			$value
		);
		$sort_options_values = [];

		foreach ( $sort_options as $sort_option ) {
			$sort_option_label = explode(
				":",
				$sort_option
			);

			if ( isset( $sort_option_label[ 1 ] ) ) {
				$key = trim( $sort_option_label[ 0 ] );
				$val = trim( $sort_option_label[ 1 ] );
				$sort_options_values[ $key ] = [
					'label' => $val
				];
			} else {
				$sort_option = trim( $sort_option );
				$sort_options_values[ $sort_option ] = [];
			}
		}

		return $sort_options_values;
	}

	/**
	 * @param string $input_parameter
	 *
	 * @return false|array
	 */
	private function getTitleOptions( string $input_parameter ) {
		$output_parameter = [];
		$property_options = explode(
			'#',
			$input_parameter
		);

		foreach ( $property_options as $i => $property_option ) {
			$property_option = explode(
				'=',
				$property_option
			);

			$key = $property_option[ 0 ] ?? '';
			$val = trim( $property_option[ 1 ] ?? '' );
			if ( $i === 0 ) {
				$output_parameter[ 'name' ] = $val;
				$property_type = $this->getPropertyType(
					str_replace(
						' ',
						'_',
						$val
					)
				);
				$output_parameter[ 'key' ] = $property_type[ 'key' ];
				$output_parameter[ 'type' ] = $property_type[ 'type' ];
			} elseif ( $key === 'color' ) {
				$property_type = $this->getPropertyType(
					str_replace(
						' ',
						'_',
						$val
					)
				);
				$output_parameter[ 'color' ] = [
					'name' => $val,
					'key' => $property_type[ 'key' ],
					'type' => $property_type[ 'type' ]
				];
			} else {
				$output_parameter[ $key ] = $val;
			}
		}

		return $output_parameter;
	}

	/**
	 * @param string $input_parameter
	 *
	 * @return false|array
	 */
	private function getActionOptions( string $input_parameter ) {
		$output_parameter = [];
		$property_options = explode(
			'#',
			$input_parameter
		);

		foreach ( $property_options as $i => $property_option ) {
			$property_option = explode(
				'=',
				$property_option
			);

			$key = $property_option[ 0 ];
			$val = trim( $property_option[ 1 ] ?? '' );
			if ( $i === 0 ) {
				$output_parameter[ 'name' ] = $val;
			} else {
				$output_parameter[ $key ] = $val;
			}
		}

		return $output_parameter;
	}

	/**
	 * @param string $input_parameter
	 * @param array &$searchConfig
	 */
	public function getParameterOutput( string $input_parameter, array &$searchConfig ) {
		$parameter_options = explode(
			'=',
			$input_parameter,
			2
		);

		$key = $parameter_options[ 0 ] ?? '';
		$value = $parameter_options[ 1 ] ?? '';

		switch ( $key ) {
			case "size":
				$output_parameter = intval( $value );
				break;
			case "size options":
				$output_parameter = self::getSizeOptions( $value );
				if ( $output_parameter === false ) {
					$output_parameter = $value;
				}
				break;
			case "sort options":
				$output_parameter = self::getSortOptions( $value );
				if ( $output_parameter === false ) {
					$output_parameter = $value;
				}
				break;
			case "title":
				$output_parameter = self::getTitleOptions( $input_parameter );
				if ( $output_parameter === false ) {
					$output_parameter = $value;
				}
				break;
			case "calendar":
				$output_parameter = self::getTitleOptions( $input_parameter );
				if ( $output_parameter === false ) {
					$output_parameter = $value;
				}
				break;
			case "action":
				$output_parameter = self::getActionOptions( $input_parameter );
				if ( $output_parameter === false ) {
					$output_parameter = $value;
				}
				break;
			default:
				$output_parameter = $value;
		}
		$searchConfig[ "settings" ]->$key = $output_parameter;
	}

	/**
	 * @param string $input_parameter
	 * @param array &$searchConfig
	 */
	public function getFacetSettings( string $input_parameter, array &$searchConfig ) {
		$facet_options = explode(
			'#',
			$input_parameter
		);

		$property_name = "";

		foreach ( $facet_options as $i => $facet_option ) {
			if ( $i === 0 ) {
				$property_name = trim(
					ltrim(
						$facet_option,
						'@'
					)
				);
				$searchConfig[ "facetSettings" ]->$property_name = [];
			} else {
				$facet_value = explode(
					'=',
					$facet_option
				);
				$searchConfig[ "facetSettings" ]->$property_name[ $facet_value[ 0 ] ] = trim( $facet_value[ 1 ] );
			}
		}
	}

	/**
	 * @param string $input_parameter
	 * @param array &$searchConfig
	 */
	public function getHitSettings( string $input_parameter, array &$searchConfig ) {
		$result_options = explode(
			'#',
			$input_parameter
		);

		$property_name = "";
		foreach ( $result_options as $i => $result_option ) {
			if ( $i === 0 ) {
				$property_name = trim(
					ltrim(
						$result_option,
						'?'
					)
				);
				$searchConfig[ "hitSettings" ]->$property_name = [];

				$property_type = $this->getPropertyType(
					str_replace(
						' ',
						'_',
						$property_name
					)
				);
				$searchConfig[ "hitSettings" ]->$property_name[ 'key' ] = $property_type[ 'key' ];
				$searchConfig[ "hitSettings" ]->$property_name[ 'type' ] = $property_type[ 'type' ];
			} else {
				$result_value = explode(
					'=',
					$result_option
				);

				if ( !isset( $result_value[ 1 ] ) ) {
					return;
				}

				$searchConfig[ "hitSettings" ]->$property_name[ $result_value[ 0 ] ] = trim( $result_value[ 1 ] );
			}
		}
	}

}
