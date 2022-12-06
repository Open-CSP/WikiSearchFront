/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable import/no-mutable-exports */
/**
 * This file is mock data and wont be in production build
 */
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';
window.moment = moment;
moment.updateLocale('en', {
  week : {
      dow :1  // 0 to 6 sunday to saturday
  }
});

let mw = {};

if (process.env.NODE_ENV === 'production') {
  mw = window.mw;
} else {
  mw = {
    config: {
      values: {
        wgScriptPath: '',
        wgMonthNames: [
          "",
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        WikiSearchFront: {
          config: {
            settings: {
              action: {
                name: 'teststst',
                label: 'do action',
                type: 'page'
              },
              size: 10,
              'size options': ['10', ' 20', ' 50'],
              'sort options': {
                Title: { label: 'sort title' },
              },
              info: true,
              title: {
                name: 'Title',
                key: 633,
                type: 'mlt_recField',
                highlight: true,
              },
              // selected: 'Favo:Admin;Tag:ICT',
              searchOnInput: true,
              'search on empty queries': false,
              layout: 'table',
              // template: 'parse test'
              // layout: 'calendar',
              // calendar: {
              //   name: 'Modification date',
              //   key: 29,
              //   type: 'dateField',
              //   weekend: 'false',
              //   display: 'year',
              //   template: 'test',
              //   slot: 'prop-slot',
              //   prefix: 'event:',
              //   color: {
              //     name: 'Title',
              //     key: 631,
              //     type: 'txtField',
              //   }
              // },
              // theme: 'dark',
            },
            facetSettings: {
              title: {
                display: 'search',
              },
              Namespacenr: {
                display: 'ask combobox',
                query: '[[Class::+]]',
                data: 'Namespacenr',
                text: 'Title',
                search: 'true',
              },
              Favo: {
                label: 'my favos',
                value: 'admin',
                valueLabel: 'my favos'
              },
              Version: {
                display: 'elastic combobox',
                count: 'false'
              },
              'Modification date': {
                display: 'date',
                label: 'Updated',
                type: 'date',
              },
              'Modification date': {
                display: 'datepicker',
              },
              Tag: [],
            },
            hitSettings: {
              // '-Modification date': {},
              // '-page': {
              //   label: ' ',
              //   display: 'checkbox',
              // },

              // Date: {
              //   key: 718,
              //   type: 'datField',
              // },
              // '-snippet': {},
              // Title: {
              //   key: 633,
              //   type: 'mlt_recField',
              //   display: 'pill',
              //   label: 'pills tags',
              // },
              Class: {
                key: 631,
                type: 'txtField',
                display: 'template',
                template: 'test',
              },
              Version: {
                key: 635,
                type: 'wpgField',
                display: 'checkbox',
                label: ' '
              },
              // '$title': {
              //   display: 'link',
              // },
            },
          },
        },
      },
    },
  };

  class Api {
    postWithToken() {
      const res = new Promise((resolve) => setTimeout(() => {resolve({})},1000));
      res.done = res.then;
      return res;
    }
    post() {
      const res = new Promise((resolve) => setTimeout(() => {resolve({
        parse: {
          text: {
            '*': 'template <b>output</b>'
          }
        },
        pages: {
          "602": {
            "title": "Template:Layout Card",
            "params": {
              "Image": {
                "type": "wiki-file-name",
                "label": null,
                "required": false,
                "suggested": false,
                "description": null,
                "example": null,
                "deprecated": false,
                "aliases": [

                ],
                "autovalue": null,
                "default": null
              },
              "Headline": {
                "type": "string",
                "label": null,
                "required": false,
                "suggested": false,
                "description": null,
                "example": null,
                "deprecated": false,
                "aliases": [

                ],
                "autovalue": null,
                "default": null
              },
              "Content": {
                "type": "content",
                "label": null,
                "required": false,
                "suggested": false,
                "description": null,
                "example": null,
                "deprecated": false,
                "aliases": [

                ],
                "autovalue": null,
                "default": null
              },
              "Headline link": {
                "type": "url",
                "label": {
                  "en": "Headline link (fully qualified URL)"
                },
                "required": false,
                "suggested": false,
                "description": null,
                "example": null,
                "deprecated": false,
                "aliases": [

                ],
                "autovalue": null,
                "default": null
              },
              "Button text": {
                "type": "string",
                "label": null,
                "required": false,
                "suggested": false,
                "description": null,
                "example": null,
                "deprecated": false,
                "aliases": [

                ],
                "autovalue": null,
                "default": null
              },
              "Button link": {
                "type": "url",
                "label": {
                  "en": "Button link (fully qualified URL)"
                },
                "required": false,
                "suggested": false,
                "description": null,
                "example": null,
                "deprecated": false,
                "aliases": [

                ],
                "autovalue": null,
                "default": null
              }
            },
            "description": {
              "en": "A Layout Card is a way to call attention to content. Place a Layout Card only inside a Layout Cell."
            },
            "format": null,
            "sets": [

            ],
            "maps": {

            }
          }
        },
        query: {
            "printrequests": [
                {
                    "label": "",
                    "key": "",
                    "redi": "",
                    "typeid": "_wpg",
                    "mode": 2,
                    "format": false
                },
                {
                    "label": "Namespacenr",
                    "key": "Namespacenr",
                    "redi": "",
                    "typeid": "_wpg",
                    "mode": 1,
                    "format": ""
                },
                {
                    "label": "Title",
                    "key": "Title",
                    "redi": "",
                    "typeid": "_txt",
                    "mode": 1,
                    "format": ""
                }
            ],
            "results": {
                "APEN:Home": {
                    "printouts": {
                        "Namespacenr": [
                            {
                                "fulltext": "50044",
                                "fullurl": "//pids35.wikibase.nl/50044",
                                "namespace": 0,
                                "exists": "",
                                "displaytitle": ""
                            }
                        ],
                        "Title": [
                            "Apen hub en apen hebben hele lange armen dus deze hub heeft een lange naam"
                        ]
                    },
                    "fulltext": "APEN:Home",
                    "fullurl": "//pids35.wikibase.nl/APEN:Home",
                    "namespace": 50044,
                    "exists": "1",
                    "displaytitle": "Apen hub en apen hebben hele lange armen dus deze hub heeft een lange naam"
                },
                "PARKIET:Home": {
                    "printouts": {
                        "Namespacenr": [
                            {
                                "fulltext": "50074",
                                "fullurl": "//pids35.wikibase.nl/50074",
                                "namespace": 0,
                                "exists": "",
                                "displaytitle": ""
                            }
                        ],
                        "Title": [
                            "Parkiet"
                        ]
                    },
                    "fulltext": "PARKIET:Home",
                    "fullurl": "//pids35.wikibase.nl/PARKIET:Home",
                    "namespace": 50074,
                    "exists": "1",
                    "displaytitle": "Parkiet"
                },
                "EEEE:Home": {
                    "printouts": {
                        "Namespacenr": [
                            {
                                "fulltext": "50020",
                                "fullurl": "//pids35.wikibase.nl/50020",
                                "namespace": 0,
                                "exists": "",
                                "displaytitle": ""
                            }
                        ],
                        "Title": [
                            "Testing image"
                        ]
                    },
                    "fulltext": "EEEE:Home",
                    "fullurl": "//pids35.wikibase.nl/EEEE:Home",
                    "namespace": 50020,
                    "exists": "1",
                    "displaytitle": "Testing image"
                },
                "WITNEUSH:Home": {
                    "printouts": {
                        "Namespacenr": [
                            {
                                "fulltext": "50050",
                                "fullurl": "//pids35.wikibase.nl/50050",
                                "namespace": 0,
                                "exists": "",
                                "displaytitle": ""
                            }
                        ],
                        "Title": [
                            "Witte neushoorn"
                        ]
                    },
                    "fulltext": "WITNEUSH:Home",
                    "fullurl": "//pids35.wikibase.nl/WITNEUSH:Home",
                    "namespace": 50050,
                    "exists": "1",
                    "displaytitle": "Witte neushoorn"
                },
                "OTTER:Home": {
                    "printouts": {
                        "Namespacenr": [
                            {
                                "fulltext": "50012",
                                "fullurl": "//pids35.wikibase.nl/50012",
                                "namespace": 0,
                                "exists": "",
                                "displaytitle": ""
                            }
                        ],
                        "Title": [
                            "De Otter Hub"
                        ]
                    },
                    "fulltext": "OTTER:Home",
                    "fullurl": "//pids35.wikibase.nl/OTTER:Home",
                    "namespace": 50012,
                    "exists": "1",
                    "displaytitle": "De Otter Hub"
                },
                "RATTEN:Home": {
                    "printouts": {
                        "Namespacenr": [
                            {
                                "fulltext": "50040",
                                "fullurl": "//pids35.wikibase.nl/50040",
                                "namespace": 0,
                                "exists": "",
                                "displaytitle": ""
                            }
                        ],
                        "Title": [
                            "Ratten hub"
                        ]
                    },
                    "fulltext": "RATTEN:Home",
                    "fullurl": "//pids35.wikibase.nl/RATTEN:Home",
                    "namespace": 50040,
                    "exists": "1",
                    "displaytitle": "Ratten hub"
                },
                "KATTEN:Home": {
                    "printouts": {
                        "Namespacenr": [
                            {
                                "fulltext": "50038",
                                "fullurl": "//pids35.wikibase.nl/50038",
                                "namespace": 0,
                                "exists": "",
                                "displaytitle": ""
                            }
                        ],
                        "Title": [
                            "Katten hub"
                        ]
                    },
                    "fulltext": "KATTEN:Home",
                    "fullurl": "//pids35.wikibase.nl/KATTEN:Home",
                    "namespace": 50038,
                    "exists": "1",
                    "displaytitle": "Katten hub"
                },
                "SPECHT:Home": {
                    "printouts": {
                        "Namespacenr": [
                            {
                                "fulltext": "50080",
                                "fullurl": "//pids35.wikibase.nl/50080",
                                "namespace": 0,
                                "exists": "",
                                "displaytitle": ""
                            }
                        ],
                        "Title": [
                            "Specht Hub"
                        ]
                    },
                    "fulltext": "SPECHT:Home",
                    "fullurl": "//pids35.wikibase.nl/SPECHT:Home",
                    "namespace": 50080,
                    "exists": "1",
                    "displaytitle": "Specht Hub"
                },
                "STEENBOK:Home": {
                    "printouts": {
                        "Namespacenr": [
                            {
                                "fulltext": "50036",
                                "fullurl": "//pids35.wikibase.nl/50036",
                                "namespace": 0,
                                "exists": "",
                                "displaytitle": ""
                            }
                        ],
                        "Title": [
                            "Steenbok"
                        ]
                    },
                    "fulltext": "STEENBOK:Home",
                    "fullurl": "//pids35.wikibase.nl/STEENBOK:Home",
                    "namespace": 50036,
                    "exists": "1",
                    "displaytitle": "Steenbok"
                }
            },
            "serializer": "SMW\\Serializers\\QueryResultSerializer",
            "version": 2,
            "meta": {
                "hash": "8bfd38801fd01e6d6fc1698fe0d068f0",
                "count": 9,
                "offset": 0,
                "source": "",
                "time": "0.012250"
            }
        },
        "resultz": [
          {
              "key": "Themapagina",
              "doc_count": 2523
          },
          {
              "key": "Gremiumpagina",
              "doc_count": 110
          },
          {
              "key": "Vrije tekst gremiumpagina",
              "doc_count": 16
          },
          {
              "key": "Verwijderde pagina",
              "doc_count": 9
          },
          {
              "key": "Themapagina tab",
              "doc_count": 6
          },
          {
              "key": "Bestand bij gremiumpagina",
              "doc_count": 1
          },
          {
              "key": "Redactiegroep pagina",
              "doc_count": 1
          }
      ],
      result: {
          hits:
              '[{"_index":"smw-data-wiki-v1","_type":"data","_id":"1092","_score":10,"_source":{"subject":{"title":"Are You Embarrassed By Your ICT Skills? Here\'s What To Do","subobject":"","namespace":0,"interwiki":"","sortkey":"Are You Embarrassed By Your ICT Skills? Here\'s What To Do","serialization":"Are_You_Embarrassed_By_Your_ICT_Skills?_Here\'s_What_To_Do#0##","sha1":"37352bfc343302b09af6960e14a67d6e6ac733e0","rev_id":1106,"namespacename":""},"P:631":{"txtField":["Page"]},"P:748":{"wpgField":["ICT"],"wpgID":[1041]},"P:635":{"wpgField":["1"],"wpgID":[640]},"P:702":{"wpgField":["Are You Embarrassed By Your ICT Skills? Here\'s What To Do# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1407]},"P:29":{"datField":[2459320.9450926],"dat_raw":["1\\/2021\\/4\\/16\\/10\\/40\\/56\\/0"]},"P:749":{"numField":[49]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"1152","_score":10,"_source":{"subject":{"title":"5 Problems Everyone Has With ICT \\u2013 How To Solved Them","subobject":"","namespace":0,"interwiki":"","sortkey":"5 Problems Everyone Has With ICT \\u2013 How To Solved Them","serialization":"5_Problems_Everyone_Has_With_ICT_\\u2013_How_To_Solved_Them#0##","sha1":"d5c7240c04f90135baf5359a49fdb138e758901c","rev_id":1167,"namespacename":""},"P:631":{"txtField":["Page"]},"P:734":{"wpgField":["ICT"],"wpgID":[1041]},"P:635":{"wpgField":["1", "2"],"wpgID":[640]},"P:702":{"wpgField":["5 Problems Everyone Has With ICT \\u2013 How To Solved Them# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1404]},"P:29":{"datField":[2459320.945162],"dat_raw":["1\\/2021\\/4\\/16\\/10\\/41\\/2\\/0"]},"P:749":{"numField":[109]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"710","_score":10,"_source":{"subject":{"title":"Homedata","subobject":"","namespace":0,"interwiki":"","sortkey":"Homedata","serialization":"Homedata#0##","sha1":"5c4c0528776db35953c942aa714385831b0652e7","rev_id":747,"namespacename":""},"P:631":{"txtField":["homedata"]},"P:711":{"wpgField":["Robis"],"wpgID":[712]},"P:702":{"wpgField":["Homedata# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1408]},"P:29":{"datField":[2459320.0308912],"dat_raw":["1\\/2021\\/4\\/15\\/12\\/44\\/29\\/0"]},"P:718":{"datField":[2456010.5],"dat_raw":["1\\/2012\\/3\\/24"]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"1352","_score":10,"_source":{"subject":{"title":"Food","subobject":"","namespace":0,"interwiki":"","sortkey":"Food","serialization":"Food#0##","sha1":"47cb6da1d7ef7c27f0e3a8df63e95200ecfc3bb1","rev_id":1431,"namespacename":""},"P:631":{"txtField":["Service"]},"P:1343":{"wpgField":["Http:\\/\\/localhost\\/wiki1.35\\/images\\/3\\/39\\/File 1.jpg"],"wpgID":[1344]},"P:633":{"wpgField":["Food#Eten en drinken;nl","Food#Food & drinks;en","Food#Esta e cola;es"],"wpgID":[1391,1392,1393]},"P:29":{"datField":[2459393.9369097],"dat_raw":["1\\/2021\\/6\\/28\\/10\\/29\\/9\\/0"]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"862","_score":10,"_source":{"subject":{"title":"Essential TEST Smartphone Apps","subobject":"","namespace":0,"interwiki":"","sortkey":"Essential TEST Smartphone Apps","serialization":"Essential_TEST_Smartphone_Apps#0##","sha1":"5a9710e615fb736cc0d073e629ecb3fd9358ac78","rev_id":879,"namespacename":""},"P:631":{"txtField":["Page"]},"P:748":{"wpgField":["Test"],"wpgID":[559]},"P:635":{"wpgField":["1"],"wpgID":[640]},"P:702":{"wpgField":["Essential TEST Smartphone Apps# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1434]},"P:29":{"datField":[2459320.9428125],"dat_raw":["1\\/2021\\/4\\/16\\/10\\/37\\/39\\/0"]},"P:749":{"numField":[119]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"871","_score":10,"_source":{"subject":{"title":"TEST Is Essential For Your Success. Read This To Find Out Why","subobject":"","namespace":0,"interwiki":"","sortkey":"TEST Is Essential For Your Success. Read This To Find Out Why","serialization":"TEST_Is_Essential_For_Your_Success._Read_This_To_Find_Out_Why#0##","sha1":"a642515d75971dad83cea7a46864f4c78d317d1e","rev_id":888,"namespacename":""},"P:631":{"txtField":["Page"]},"P:748":{"wpgField":["Test"],"wpgID":[559]},"P:635":{"wpgField":["1"],"wpgID":[640]},"P:702":{"wpgField":["TEST Is Essential For Your Success. Read This To Find Out Why# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1609]},"P:29":{"datField":[2459320.9428125],"dat_raw":["1\\/2021\\/4\\/16\\/10\\/37\\/39\\/0"]},"P:749":{"numField":[128]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"1061","_score":10,"_source":{"subject":{"title":"I Don\'t Want To Spend This Much Time On ICT. How About You?","subobject":"","namespace":0,"interwiki":"","sortkey":"I Don\'t Want To Spend This Much Time On ICT. How About You?","serialization":"I_Don\'t_Want_To_Spend_This_Much_Time_On_ICT._How_About_You?#0##","sha1":"a6682e9dd3d5f512f0ec4c2a5b36e7193615ea80","rev_id":1076,"namespacename":""},"P:631":{"txtField":["Page"]},"P:748":{"wpgField":["ICT"],"wpgID":[1041]},"P:635":{"wpgField":["1"],"wpgID":[640]},"P:702":{"wpgField":["I Don\'t Want To Spend This Much Time On ICT. How About You?# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1616]},"P:29":{"datField":[2459320.9450579],"dat_raw":["1\\/2021\\/4\\/16\\/10\\/40\\/53\\/0"]},"P:749":{"numField":[18]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"1111","_score":10,"_source":{"subject":{"title":"Short Story: The Truth About ICT","subobject":"","namespace":0,"interwiki":"","sortkey":"Short Story: The Truth About ICT","serialization":"Short_Story:_The_Truth_About_ICT#0##","sha1":"619a5e41b5902afb90fbaacafecadbebf14e8fba","rev_id":1126,"namespacename":""},"P:631":{"txtField":["Page"]},"P:748":{"wpgField":["ICT"],"wpgID":[1041]},"P:635":{"wpgField":["1"],"wpgID":[640]},"P:702":{"wpgField":["Short Story: The Truth About ICT# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1618]},"P:29":{"datField":[2459320.9451157],"dat_raw":["1\\/2021\\/4\\/16\\/10\\/40\\/58\\/0"]},"P:749":{"numField":[68]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"932","_score":10,"_source":{"subject":{"title":"Need More Time? Read These Tips To Eliminate TEST","subobject":"","namespace":0,"interwiki":"","sortkey":"Need More Time? Read These Tips To Eliminate TEST","serialization":"Need_More_Time?_Read_These_Tips_To_Eliminate_TEST#0##","sha1":"6a4a1106d9b779c99b15dc8c4c0d36e7fad0edd8","rev_id":950,"namespacename":""},"P:631":{"txtField":["Page"]},"P:748":{"wpgField":["Test"],"wpgID":[559]},"P:635":{"wpgField":["1"],"wpgID":[640]},"P:702":{"wpgField":["Need More Time? Read These Tips To Eliminate TEST# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1622]},"P:29":{"datField":[2459320.9428588],"dat_raw":["1\\/2021\\/4\\/16\\/10\\/37\\/43\\/0"]},"P:749":{"numField":[190]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"859","_score":10,"_source":{"subject":{"title":"Turn Your TEST Into A High Performing Machine","subobject":"","namespace":0,"interwiki":"","sortkey":"Turn Your TEST Into A High Performing Machine","serialization":"Turn_Your_TEST_Into_A_High_Performing_Machine#0##","sha1":"1566e4d1ac8719357f18046bf89a0b1600026c0c","rev_id":876,"namespacename":""},"P:631":{"txtField":["Page"]},"P:748":{"wpgField":["Test"],"wpgID":[559]},"P:635":{"wpgField":["1"],"wpgID":[640]},"P:702":{"wpgField":["Turn Your TEST Into A High Performing Machine# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1624]},"P:29":{"datField":[2459320.9428125],"dat_raw":["1\\/2021\\/4\\/16\\/10\\/37\\/39\\/0"]},"P:749":{"numField":[116]}}}]',
          total: 606,
          aggs: {
            'Average rating': {
              meta: [],
              doc_count: 59,
              'Average rating': {
                buckets: {
                  1: {
                    from: 1, to: 6, doc_count: 28, key: '1',
                  },
                  2: {
                    from: 2, to: 6, doc_count: 27, key: '2',
                  },
                  3: {
                    from: 3, to: 6, doc_count: 27, key: '3',
                  },
                  4: {
                    from: 4, to: 6, doc_count: 25, key: '4',
                  },
                  5: {
                    from: 5, to: 6, doc_count: 13, key: '5',
                  },
                },
              },
            },
            'Modification date': {
              meta: [],
              doc_count: 606,
              'Modification date': {
                buckets: {
                  2017: { from: 2457754, to: 2458119, doc_count: 0 },
                  2018: { from: 2458119, to: 2458484, doc_count: 0 },
                  2019: { from: 2458484, to: 2458849, doc_count: 0 },
                  2020: { from: 2458849, to: 2459215, doc_count: 0 },
                  2021: { from: 2459215, to: 2459580, doc_count: 606 },
                  'Last Quarter': {
                    from: 2459301,
                    to: 2459423,
                    doc_count: 605,
                  },
                  'Last Month': { from: 2459393, to: 2459423, doc_count: 4 },
                  'Last Week': { from: 2459416, to: 2459423, doc_count: 0 },
                },
              },
            },
            Version: {
              meta: [],
              doc_count: 606,
              Version: {
                doc_count_error_upper_bound: 0,
                sum_other_doc_count: 0,
                buckets: [
                  { key: '1', doc_count: 591 },
                  { key: 'Essential TEST Smartphone Apps', doc_count: 2 },
                  { key: '4', doc_count: 2 },
                  { key: '1.2', doc_count: 1 },
                  { key: '2', doc_count: 1 },
                  { key: '5', doc_count: 1 },
                ],
              },
            },
            Title: {
              meta: [],
              doc_count: 606,
              Title: {
                doc_count_error_upper_bound: 0,
                sum_other_doc_count: 0,
                buckets: [],
              },
            },
            Class: {
              meta: [],
              doc_count: 606,
              Class: {
                doc_count_error_upper_bound: 0,
                sum_other_doc_count: 0,
                buckets: [
                  { key: 'Page', doc_count: 599 },
                  { key: 'Service', doc_count: 3 },
                  { key: 'homedata', doc_count: 2 },
                  { key: 'Food', doc_count: 1 },
                  { key: 'trans', doc_count: 1 },
                ],
              },
            },
            Tag: {
              meta: [],
              doc_count: 606,
              Tag: {
                doc_count_error_upper_bound: 0,
                sum_other_doc_count: 0,
                buckets: [
                  { key: 'ICT', doc_count: 2 },
                  { key: 'Test', doc_count: 1 },
                ],
              },
            },
            Link: {
              meta: [],
              doc_count: 606,
              Link: {
                doc_count_error_upper_bound: 0,
                sum_other_doc_count: 0,
                buckets: [
                  { key: 'Homedata', doc_count: 1 },
                  { key: 'Trans', doc_count: 1 },
                ],
              },
            },
          },
        },
      })},1000));
      res.done = res.then;
      return res;
    }
  }

  class Message {
    constructor(msg) {
      this.msg = msg;
      this.messages = {
        jan: 'jan', feb: 'feb', mar: 'mar', apr: 'apr', may: 'may', jun: 'jun', jul: 'jul', aug: 'aug', sep: 'sep', oct: 'oct', nov: 'nov', dec: 'dec',
      };
    }

    text() {
      if (this.msg in this.messages) {
        return this.messages[this.msg];
      }
      return 'MSGNOTFOUND';
    }
  }

  mw.message = function mwMessage(msg) { return new Message(msg); };
  mw.Api = Api;
}

window.mw = mw;

export default mw;
