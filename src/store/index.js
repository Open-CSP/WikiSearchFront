import { defineStore } from 'pinia';
import { createDate } from '../utilities/dateUtils';
import prepareQuery from '../utilities/elastic';

/* eslint-disable no-undef */
const mediaWikiValues = mw.config.values;
const { moment } = window;
/* eslint-enable no-undef */

// ---------------------------------------------------------------------------
// Pure helper functions (no store dependency)
// ---------------------------------------------------------------------------

/**
 * Build a URL reflecting the current search state for history.replaceState.
 *
 * @param {Object} state - Store state snapshot
 * @returns {URL}
 */
function createUrlString( state ) {
	const url = new URL( window.location.href );
	const { searchParams } = url;

	if ( state.from > 0 ) {
		searchParams.set( 'offset', state.from );
	} else {
		searchParams.delete( 'offset' );
	}

	if ( state.term ) {
		searchParams.set( 'term', state.term );
	} else {
		searchParams.delete( 'term' );
	}

	if ( mediaWikiValues.WikiSearchFront.config.settings[ 'sort options' ] ) {
		if ( state.sortOrder && state.sortOrderType !== 'score' ) {
			searchParams.set( 'order', state.sortOrder );
		} else {
			searchParams.delete( 'order' );
		}
		if ( state.sortOrderType && state.sortOrderType !== 'score' ) {
			searchParams.set( 'ordertype', state.sortOrderType );
		} else {
			searchParams.delete( 'ordertype' );
		}
	}

	if ( !state.selected.length ) {
		searchParams.delete( 'filters' );
	} else {
		const filtersUrl = state.selected.map( ( item ) => {
			let out;
			if ( item.range ) {
				if ( state.realDates[ item.value ] ) {
					out = `range_${ item.value }_${ item.key }^^${ state.realDates[ item.value ].from }_${ state.realDates[ item.value ].to }`;
				} else {
					out = `range_${ item.value }_${ item.key }^^${ item.range.gte }_${ item.range.lte }`;
				}
			} else if ( item.type && item.type === 'query' ) {
				out = `query_${ item.key }^^${ item.value }`;
			} else {
				out = `${ item.key }^^${ item.value }`;
			}
			return out;
		} ).join( '~~' );
		searchParams.set( 'filters', filtersUrl );
	}

	return url;
}

/**
 * Restore state from URL query parameters on first load.
 *
 * @param {Object} state        Current store state
 * @param {Object} facetSettings
 * @returns {Object} Partial state overrides
 */
function getStateFromUrl( state, facetSettings ) {
	const output = {};
	const urlParams = new URLSearchParams( window.location.search );
	const term = urlParams.get( 'term' );
	const offset = urlParams.get( 'offset' );
	const filters = urlParams.get( 'filters' );
	const orderType = urlParams.get( 'ordertype' );
	const order = urlParams.get( 'order' );

	if ( term ) { output.term = term; }
	if ( order ) { output.sortOrder = order; }
	if ( orderType ) { output.sortOrderType = orderType; }
	if ( offset ) { output.from = parseInt( offset, 10 ); }

	if ( filters ) {
		const urlFiltersOutput = [];
		const filterOptions = {
			range: ( _, values, secondKey, lastKey ) => {
				const [ from, to ] = values.split( '_' );
				let gte = from;
				let lte = to;

				if ( secondKey === 'customrange' ) {
					output.realDates = state.realDates;
					output.realDates.customrange = { from, to };
				}

				const calPropName = mediaWikiValues.WikiSearchFront.config.settings.calendar
					? mediaWikiValues.WikiSearchFront.config.settings.calendar.name
					: 'Modification date';

				if (
					secondKey === 'customrange' ||
					secondKey === 'date' ||
					lastKey === 'Modification date' ||
					lastKey === calPropName ||
					facetSettings[ lastKey ].type === 'date'
				) {
					output.rangeFrom = createDate( from );
					output.rangeTo = createDate( to );
					gte = output.rangeFrom;
					lte = output.rangeTo;
				}

				urlFiltersOutput.push( { key: lastKey, value: secondKey, range: { gte, lte } } );
			},
			query: ( _, values, secondKey ) => {
				urlFiltersOutput.push( { value: values, key: secondKey, type: 'query' } );
			},
			default: ( keys, values ) => {
				urlFiltersOutput.push( { value: values, key: keys } );
			},
		};

		filters.split( '~~' ).forEach( ( filter ) => {
			const [ keys, values ] = filter.split( '^^' );
			const [ firstKey, secondKey, lastKey ] = keys.split( '_' );
			( filterOptions[ firstKey ] || filterOptions.default )( keys, values, secondKey, lastKey );
		} );

		output.selected = urlFiltersOutput;
	}
	return output;
}

/**
 * Create date ranges for date-type facets.
 *
 * @param {Date}   today
 * @param {Object} facetSettings
 * @returns {{ facet: Array, real: Object }}
 */
function createDateRanges( today, facetSettings ) {
	const to = moment().format( 'YYYY-MM-DD' );
	const realDateRanges = {
		'Last Week': { from: moment().subtract( 7, 'days' ).format( 'YYYY-MM-DD' ), to },
		'Last Month': { from: moment().subtract( 1, 'months' ).format( 'YYYY-MM-DD' ), to },
		'Last Quarter': { from: moment().subtract( 1, 'quarter' ).format( 'YYYY-MM-DD' ), to },
	};

	let max = 5;
	Object.keys( facetSettings ).forEach( ( key ) => {
		if ( facetSettings[ key ].display === 'date' ) {
			max = facetSettings[ key ].max;
		}
	} );

	for ( let i = 0; i < max; i += 1 ) {
		const key = today.getFullYear() - i;
		realDateRanges[ key ] = { from: `${ key }-01-01`, to: `${ key + 1 }-01-01` };
	}

	const dateRanges = Object.entries( realDateRanges ).map( ( [ key, value ] ) => ( {
		key: key.toString(),
		from: createDate( value.from ),
		to: createDate( value.to ),
	} ) );

	const facetRanges = [];
	Object.keys( facetSettings ).forEach( ( key ) => {
		if ( facetSettings[ key ].display === 'date' ) {
			facetRanges.push( { type: 'range', ranges: dateRanges, property: key } );
		}
	} );

	return { facet: facetRanges, real: realDateRanges };
}

/**
 * Extend ranges with slider/range-type facets.
 *
 * @param {Object} facetSettings
 * @param {{ facet: Array, real: Object }} ranges
 * @param {Date}   today
 * @returns {[ Array, Object ]}
 */
function createMoreRanges( facetSettings, ranges, today ) {
	const rangeProp = [];
	const { facet, real } = ranges;

	Object.keys( facetSettings ).forEach( ( key ) => {
		const setting = facetSettings[ key ];
		if ( setting.display === 'range' ) {
			setting.name = key;
			rangeProp.push( setting );
		}
	} );

	rangeProp.forEach( ( prop ) => {
		const max = parseInt( prop.max, 10 );
		const step = parseInt( prop.step, 10 );
		const moreRanges = [];

		if ( prop.type === 'date' ) {
			for ( let x = 0; x < max; x += 1 ) {
				const key = today.getFullYear() - x;
				real[ key ] = { from: `${ key }-01-01`, to: `${ key + 1 }-01-01` };
				moreRanges.push( {
					key: key.toString(),
					from: createDate( `${ key }-01-01` ),
					to: createDate( `${ key + 1 }-01-01` ),
				} );
			}
		} else {
			for ( let i = 1; i < max + 1; i += step ) {
				moreRanges.push( { from: i, to: max + 1, key: i + step - 1 } );
			}
		}

		facet.push( { type: 'range', ranges: moreRanges, property: prop.name } );
	} );

	return [ facet, real ];
}

/**
 * Build the active filters array to send to the WikiSearch API.
 * Exported so FacetElasticCombobox can compute its own query.
 *
 * @param {Object} state - Store state (or Pinia store proxy)
 * @returns {Array}
 */
export function getSelection( state ) {
	const grouped = {};
	const selected = [];

	state.selected.forEach( ( element ) => {
		const settings = mediaWikiValues.WikiSearchFront.config.facetSettings[ element.key ];
		const out = { ...element };

		if ( settings?.not ) {
			out.negate = true;
		}

		const value = element?.type === 'query'
			? prepareQuery( out.value )
			: out.value;

		if ( settings && settings.logic && settings.logic === 'or' ) {
			if ( !grouped[ element.key ] ) {
				grouped[ element.key ] = [ value ];
			} else {
				grouped[ element.key ].push( value );
			}
		} else if ( out.value !== 'unset' ) {
			selected.push( { ...out, value } );
		}
	} );

	Object.keys( grouped ).forEach( ( key ) => {
		selected.push( { key, value: grouped[ key ] } );
	} );

	const switchValues = Object.entries( mediaWikiValues.WikiSearchFront.config.facetSettings )
		.filter( ( [ key, filter ] ) =>
			filter.display === 'switch' &&
			( state.switched[ key ] !== 'unset' || filter[ filter.default ] !== 'unset' )
		)
		.map( ( [ key, filter ] ) => {
			const out = { key, value: state.switched[ key ] || filter[ filter.default ] };
			if ( filter.not ) {
				out.negate = true;
			}
			return out;
		} );

	return [ ...selected, ...switchValues ];
}

/**
 * Parse the valueLabels setting into a lookup map.
 *
 * @param {Object} facetSettings
 * @returns {Object} { facetKey: { originalValue: displayLabel } }
 */
function getValueLabelMap( facetSettings ) {
	const valueLabelMap = {};
	Object.keys( facetSettings ).forEach( ( key ) => {
		if ( facetSettings[ key ].valueLabels ) {
			const entries = facetSettings[ key ].valueLabels.split( '~~' ).map( ( item ) => {
				const [ value, label ] = item.split( '^^' );
				return { value, label };
			} );
			const map = {};
			entries.forEach( ( item ) => { map[ item.value ] = item.label; } );
			valueLabelMap[ key ] = map;
		}
	} );
	return valueLabelMap;
}

/**
 * Apply pre-configured initial selections from the wikitext parameter.
 *
 * @param {Object} state - Pinia store state
 */
function setInitialSelection( state ) {
	if ( mediaWikiValues.WikiSearchFront.config.settings.selected ) {
		state.selected = mediaWikiValues.WikiSearchFront.config.settings.selected
			.split( ';' )
			.map( ( item ) => {
				const [ key, value ] = item.split( ':' );
				return { key, value };
			} );
	}
}

// ---------------------------------------------------------------------------
// Pinia store (replaces Vuex store)
// ---------------------------------------------------------------------------

export const useSearchStore = defineStore( 'wikisearchfront', {
	state: () => ( {
		loading: false,
		selected: [],
		switched: {},
		selectedResults: [],
		ongoingRequest: undefined,
		selectAllResults: false,
		sortOrder: 'asc',
		sortOrderType: 'score',
		hits: '',
		aggs: '',
		size: parseInt( mediaWikiValues.WikiSearchFront.config.settings.size, 10 ) || 10,
		total: { value: 0, relation: 'eq' },
		from: 0,
		calendarDate: moment(),
		rangeFrom: 0,
		rangeTo: 0,
		term: '',
		loaded: false,
		dates: [],
		realDates: {},
		apiCalls: [],
		renderedTemplates: {},
		valueLabelMap: getValueLabelMap( mediaWikiValues.WikiSearchFront.config.facetSettings ),
	} ),

	// ---------------------------------------------------------------------------
	// Actions  (combine Vuex mutations + actions; _private ones start with _)
	// Search-triggering actions call _triggerSearch() after updating state.
	// ---------------------------------------------------------------------------
	actions: {

		// -- State setters that do NOT trigger a new search --

		setCalendarDate( date ) {
			this.calendarDate = date;
		},
		setRangeFrom( range ) {
			this.rangeFrom = range;
		},
		setRangeTo( range ) {
			this.rangeTo = range;
		},
		setRealDates( date ) {
			this.realDates = date;
		},
		setSelectedResults( selected ) {
			this.selectedResults = selected;
		},
		setSelectAllResults( selected ) {
			this.selectAllResults = selected;
		},
		setLoading() {
			this.loading = true;
		},
		setTemplates( templates ) {
			this.apiCalls = [];
			this.renderedTemplates = templates;
		},
		addApiCall( call ) {
			this.apiCalls.push( call );
		},
		/** Called by doApiCall once results arrive. */
		setFromApi( data ) {
			this.hits = data.hits;
			this.total = data.total;
			this.aggs = data.aggs;
			this.loading = false;
		},

		// -- State setters that trigger a new search --

		setTerm( term ) {
			this.term = term;
			this._resetFrom();
			this._triggerSearch();
		},
		setSelected( selected ) {
			this.selected = selected;
			this._resetFrom();
			this._triggerSearch();
		},
		setSwitched( switched ) {
			this.switched = switched;
			this._resetFrom();
			this._triggerSearch();
		},
		clearAll() {
			this.selected = [];
			this.term = '';
			this._resetFrom();
			this._triggerSearch();
		},
		setOrder( order ) {
			this.sortOrder = order;
			this._resetFrom();
			this._triggerSearch();
		},
		setOrderType( type ) {
			this.sortOrderType = type;
			this._resetFrom();
			this._triggerSearch();
		},
		setSize( size ) {
			this.size = size;
			this._resetFrom();
			this._triggerSearch();
		},
		/** Page navigation — resets offset but keeps the same filters. */
		setFrom( from ) {
			this.from = from;
			this._triggerSearch();
		},
		/**
		 * Initialise the store on first mount: set up date ranges, restore URL
		 * state, apply pre-configured selections, then run the first search.
		 *
		 * @param {boolean} start
		 */
		start( start ) {
			const { facetSettings } = mediaWikiValues.WikiSearchFront.config;
			this.loaded = start;

			const today = new Date();
			const ranges = createDateRanges( today, facetSettings );
			const [ facetRanges, realRanges ] = createMoreRanges( facetSettings, ranges, today );
			this.realDates = realRanges;
			this.dates = facetRanges;

			// Restore state from URL query params
			const fromUrl = getStateFromUrl( this, facetSettings );
			Object.entries( fromUrl ).forEach( ( [ key, value ] ) => {
				this[ key ] = value;
			} );

			// Apply wikitext-configured default selections
			setInitialSelection( this );

			this._triggerSearch();
		},

		// -- Internal helpers --

		_resetFrom() {
			this.from = 0;
		},

		/**
		 * Build the search request and fire the WikiSearch API call.
		 * This is the central search trigger, analogous to the old Vuex plugin.
		 */
		_triggerSearch() {
			this.loading = true;
			window.history.replaceState( '', '', createUrlString( this ) );

			const selected = getSelection( this );
			const params = {
				action: 'query',
				meta: 'WikiSearch',
				format: 'json',
				filter: JSON.stringify( selected ),
				term: prepareQuery( this.term ),
				from: this.from,
				limit: this.size,
				pageid: mediaWikiValues.wgArticleId,
				aggregations: JSON.stringify( this.dates ),
			};

			// Fuzziness: append ~ to each word when enabled
			if (
				mediaWikiValues.WikiSearchFront.config.settings.fuzzy === 'true' &&
				params.term.trim().length > 0
			) {
				params.term = params.term.split( ' ' ).join( '~ ' ).trim().concat( '~' );
			}

			// Sorting
			if (
				mediaWikiValues.WikiSearchFront.config.settings[ 'sort options' ] &&
				this.sortOrderType !== 'score'
			) {
				params.sortings = JSON.stringify( [ {
					type: 'property',
					property: this.sortOrderType,
					order: this.sortOrder,
				} ] );
			} else if ( mediaWikiValues.WikiSearchFront.config.settings.sort ) {
				params.sortings = JSON.stringify( [ {
					type: 'property',
					property: mediaWikiValues.WikiSearchFront.config.settings.sort,
					order: mediaWikiValues.WikiSearchFront.config.settings.order || 'asc',
				} ] );
			}

			this.doApiCall( { params } );
		},

		// -- API actions --

		/**
		 * Execute a MediaWiki API call.
		 * When no component is given the response populates the search results.
		 * When a component is given its apiResult() method is called instead
		 * (used by filter components that need custom data, e.g. ask queries).
		 *
		 * @param {Object} params    - MediaWiki API parameters
		 * @param {Object} [component] - Vue component instance with apiResult()
		 */
		doApiCall( { params, component } ) {
			/* eslint-disable no-undef */
			const api = new mw.Api();
			mw.hook( 'wikisearchfrontent-pre-api-call' ).fire( params );
			/* eslint-enable no-undef */

			api.post( params ).done( ( data ) => {
				if ( !component ) {
					this.setFromApi( {
						hits: JSON.parse( data.result.hits ),
						total: {
							value: data.result.total?.value !== null && data.result.total?.value !== undefined
								? data.result.total.value
								: data.result.total,
							relation: data.result.total?.relation
								? data.result.total.relation
								: 'eq',
						},
						aggs: data.result.aggs,
					} );
				} else {
					component.apiResult( data );
				}
			} );
		},

		/**
		 * Batch MediaWiki parse API calls into a single request (debounced).
		 * Used by WikiTemplate components to avoid per-item parse requests.
		 *
		 * @param {string} text  - Wikitext to parse
		 * @param {string} index - Identifier for this template item
		 */
		bundleApiCalls( { text, index } ) {
			this.addApiCall( { text, index } );
			clearTimeout( this.ongoingRequest );
			this.ongoingRequest = setTimeout( () => {
				/* eslint-disable no-undef */
				const api = new mw.Api();
				/* eslint-enable no-undef */
				const batchText = this.apiCalls
					.map( ( call ) => `${ call.index }^^%%%^^${ call.text }` )
					.join( '%%^^^%%' );
				const params = {
					action: 'parse',
					text: `<div>${ batchText }</div>`,
					format: 'json',
					wrapoutputclass: '',
					disablelimitreport: true,
				};
				api.post( params ).done( ( data ) => {
					if ( !data.parse ) {
						return;
					}
					const result = data.parse.text[ '*' ];
					const templates = Object.fromEntries(
						result.substring( 5, result.length - 6 )
							.split( '%%^^^%%' )
							.map( ( e ) => e.split( '^^%%%^^' ) )
					);
					this.setTemplates( { ...this.renderedTemplates, ...templates } );
				} );
			}, 100 );
		},
	},
} );
