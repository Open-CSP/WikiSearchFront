
# WSSearchFront

a vue.js frontend for WSSearch

Build version! for 1.31 and 135

example
```
{{#WSSearchFrontend:
|size=10
|clear=term
|sort options=Title, Version
|title=Version
    #label=Label for table
    #highlight=true
|layout=table
|@Title
    #display=ask combobox
    #query=[[Class::+]]
    #data=Title
    #text=name
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
    #logic=or
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

size=`<number>`      // amount of results per page
title=`<property>`   // property to use as link title , optional setting `#label=`, `#highlight=true`

layout=table                  //optional, show results in table layout
clear=term                    //optional, remove search term when clearing filters
sort options=Title, Version   //optional, shows a dropdown with sort options

**settings for result output:**

    ?<property>
    `#display=<option>`  // optional, options: image, link, pill or template
    `#label=<text>`      // optional
    `#highlight=true`    // optional

   for display template add `#template=<template>`  template, passes {{{Page|}}} and {{{Value|}}} to the template


**optional settings for facets:**

    @<property>
    `#display=<option>`  // optional, options: datepicker, search, combobox, ask combobox or range
    `#label=<text>`      // optional
    `#logic=or`          // optional

   for display range add `#max=<number>`  and `#step=<number>`

   for display ask combobox add
       `#query=<ask>`      // the ask query example [[Class::Page]]
       `#data=<property>`  // property for data
       `#text=<property>`  // optional, property for display
