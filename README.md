
# WSSearchFront

a vue.js frontend for WSSearch

Build version! for 1.31 and 135

example
```
{{#WSSearchFrontend:
|size=4
|clear=term
|title=Version
    #label=Label for table
|layout=table
|@Version
    #display=combobox
|@Modification date
	#display=datepicker
|@Rating
	#display=range
	#max=5
	#step=1
|?Version
|?Class
    #label=Page type
    #display=pill
|?Users
    #display=link
|?Image
    #display=image
    #label=Page image
|?Rating
    #display=template
    #template=Special rating
}}
```



**settings :**

size=`<number>`          //amount of results per page
title=`<property>`   //property to use as link title , optional setting `#label=`

layout=table   //show results in table layout
clear=term  //remove search term when clearing filters

template=<property>#<template>  // optional template, passes {{{Page|}}} and {{{Value|}}}

**settings for result output:**

    ?<property>
    `#display=<option>`  // optional, options: image, link, pill or template
     #label=<text>     //optional

   for template add `#template=<template>`  template, passes {{{Page|}}} and {{{Value|}}} to the template


**optional settings for facets:**

    @<property>
    `#display=<option>`  // options: datepicker, combobox or range

   for range add `#max=<number>`  and `#step=<number>`
