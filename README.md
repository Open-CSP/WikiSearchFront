
# WSSearchFront

a vue.js frontend for WSSearch

Build version! for 1.31 and 135

example
```
{{#WSSearchFrontend:
|size=10
|clear=term
|title=Version
    #label=Label for table
    #highlight=true
|layout=table
|@Version
    #display=combobox
|@Modification date
  	#display=datepicker
    #label=Date
|@Rating
  	#display=range
	  #max=5
  	#step=1
|?Version
|?Class
    #label=Page type
    #display=pill
    #highlight=true
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

size=`<number>`      //amount of results per page
title=`<property>`   //property to use as link title , optional setting `#label=`, `#highlight=true`

layout=table   //show results in table layout
clear=term     //remove search term when clearing filters


**settings for result output:**

    ?<property>
    `#display=<option>`  // optional, options: image, link, pill or template
    `#label=<text>`      //optional
    `#highlight=true`    //optional

   for display template add `#template=<template>`  template, passes {{{Page|}}} and {{{Value|}}} to the template


**optional settings for facets:**

    @<property>
    `#display=<option>`  // optional, options: datepicker, combobox or range
    `#label=<text>`      //optional

   for display range add `#max=<number>`  and `#step=<number>`
