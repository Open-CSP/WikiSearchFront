# WSMenuBuilder

a parser function that renders a menubuilder with vue.js , only for 1.35 >

## Usage:

put the files in /Extensions/WSMenuBuilder

add this to LocalSettings.php

```
wfLoadExtension( 'WSMenuBuilder' );
```
in the wiki page:
```
{{#wsmenubuilder:<menu pages>|<namespace restriction>}}
```
examples

```
{{#wsmenubuilder:Main menu,User menu}}

{{#wsmenubuilder:Wiki:Main menu}}

{{#wsmenubuilder:space4000menu|4000}}

```

### Template
The menu builder creates menu pages with Semantic MediaWiki subobjects using this template
```
<noinclude>{{Managed
|Version=1.0
|Version notes=1.0 - First managed version
|Short description=
}}

This is the "Menu" template. It should be called in the following format:

<pre>
{{Menu
|id=
|type=
|text=
|href=
|parent=
|icon=
|order=
|level=
}}
</pre>
</noinclude><includeonly>{{#if:{{{id|}}}|{{#subobject:Menu-{{{id|}}}
|Type={{{type|}}}
|Id={{{id|}}}
|Text={{{text|}}}
|Href={{{href|}}}
|Parent={{{parent|}}}
|Icon={{{icon|}}}
|Order={{{order|}}}
|Level={{{level|}}}
|Subobject of={{FULLPAGENAME}}
|Temp={{PAGEID:{{{href|}}} }}
}} }}
{{#loop:hoi|0|{{{level|}}}|*}}{{#ifeq:{{{type|}}}|template| {{ {{{href|}}} }}|<div>{{#ifeq:{{{type|}}}|dropdown|<i class="fa {{{icon|}}}"></i>&nbsp;{{{text|}}} {{fa|chevron-down}} |{{#widget:link|class={{#ifeq:{{{type|}}}|external|external }}|text={{#if:{{{icon|}}}|<i class="fa {{{icon|}}}"></i>}}{{#ifeq:{{{type|}}}|page|{{#vardefine:@ispageid|{{#iferror:{{#expr:{{{href|}}} + 1}}| |yes}} }}{{#if:{{#var:@ispageid}}| {{#vardefine:@ask|{{#ask:[[Page ID::{{{href|}}}]]|?Title|link=none|format=array}} }} {{#vardefine:@title|{{#explode:{{#var:@ask}}|<PROP>|1}} }}{{#if:{{#var:@title}}|<span>{{#var:@title}}</span>|{{{text|}}} }}| {{{text|}}} }}|{{{text|}}} }}|href={{#ifeq:{{{type|}}}|external|{{{href|}}}|{{#if:{{#var:@title}}|{{fullurl:{{#explode:{{#var:@ask}}|<PROP>|0}} }}|{{fullurl:{{{href|}}}  }} }} }}|type=a|{{#ifeq:{{{type|}}}|external|target=blank }} }} }}</div>}}<!-- {{#if:{{#var:counter}}||{{#vardefine:counter|0}}}}
{{#vardefineecho:counter|{{#expr:{{#var:counter}} + 1}} }} --></includeonly>
```
to following properties need to be set
```
Property:Href |type=text
Property:Icon |type=text
Property:Id |type=text
Property:Level |type=text
Property:Order |type=number
Property:Subobject of |type=page
Property:Text |type=text
Property:Type |type=text

```
