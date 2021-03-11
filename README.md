# WSSearchFront

a vue.js frontend for WSSearch

Build version! for 1.31 and 135

example
```
{{#WSSearchFrontend:size=10
|template=Title#Wssearch_output_template
|title=Title
|?Modification date=date
|?Average rating#max-5#step-1=range
}}
```



settings for results:

size=<number>          //amount of results per page
title=<property>   //property to use as link title

template=<property>#<template>  // optional template, passes {{{Page|}}} and {{{Value|}}}


optional settings for facets:

?<property>=<option>  // options: date, datepicker, combobox or range
?<property>#max-<number>#step-<number>=range  // range with max and step options
