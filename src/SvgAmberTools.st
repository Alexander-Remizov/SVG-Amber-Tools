Smalltalk createPackage: 'SvgAmberTools'!
Widget subclass: #SVGWidget
	instanceVariableNames: 'setAttribute'
	package: 'SvgAmberTools'!

!SVGWidget methodsFor: 'as yet unclassified'!

renderOn: html

html h1: 'например'.

html svg id:'svg'; version:''; xmlns:''; xmlnsEv:''; xmlnsXlink:''; height: '200'; width: '300'; with: [
	html rect height: '100'; width: '150'; style:'fill:#1a1a1a;fill-rule:evenodd;stroke:#ff0000;stroke-width:5;'
].
self setAttribute.
"html button class: 'btn btn-default'; at: 'type' put: 'button';	
	onClick: [self setAttribute.];  with: '!!!!!!'"
!

setAttribute
<var testTest=document.getElementsByTagName('svg')[0].setAttribute('baseProfile', 'full')>
! !

Object subclass: #SvgAmberTools
	instanceVariableNames: 'widget'
	package: 'SvgAmberTools'!

!SvgAmberTools methodsFor: 'as yet unclassified'!

onOpen
	
	widget := SVGWidget new.
	

	widget renderOn: (HTMLCanvas onJQuery: 'body' asJQuery)
! !

!HTMLCanvas methodsFor: '*SvgAmberTools'!

circle
	^ self tag: 'circle'
!

circle: anObject
	^ self circle with: anObject
!

ellipse
	^ self tag: 'ellipse'
!

ellipse: anObject
	^ self ellipse with: anObject
!

g
	^ self tag: 'g'
!

g: anObject
	^ self g with: anObject
!

image
	^ self tag: 'image'
!

image: anObject
	^ self image with: anObject
!

line
	^ self tag: 'line'
!

line: anObject
	^ self line with: anObject
!

path
	^ self tag: 'path'
!

path: anObject
	^ self path with: anObject
!

polygon 
^ self tag: 'polygon'
!

polygon: anObject
	^ self polygon with: anObject
!

polyline 
^ self tag: 'polyline'
!

polyline: anObject
	^ self polyline with: anObject
!

rect 
^ self tag: 'rect'
!

rect: anObject
	^ self rect with: anObject
!

svg
	^ self tag: 'svg'
!

svg: anObject
	^ self svg with: anObject
!

text
	^ self tag: 'text'
!

text: anObject
	^ self text with: anObject
! !

!TagBrush methodsFor: '*SvgAmberTools'!

baseProfile: aString
|var|
"
---EN---
to use the default value, enter an empty string ''
---RU---
чтобы использовать значение по умолчанию, укажите пустую строку ''
"
var:= aString.
(var='') ifTrue: [var:='full'].
	self at: ('baseProfile' asSymbol) put: var
!

version: aString
|var|
"
---EN---
to use the default value, enter an empty string ''
---RU---
чтобы использовать значение по умолчанию, укажите пустую строку ''
"
var:= aString.
(var='') ifTrue: [var:='1.1'].
	self at: 'version' put: var
!

xmlns: aString
|var|
"
---EN---
to use the default value, enter an empty string ''
---RU---
чтобы использовать значение по умолчанию, укажите пустую строку ''
"
var:= aString.
(var='') ifTrue: [var:='http://www.w3.org/2000/svg'].
	self at: 'xmlns' put: var
!

xmlnsEv: aString
|var|
"
---EN---
to use the default value, enter an empty string ''
---RU---
чтобы использовать значение по умолчанию, укажите пустую строку ''
"
var:= aString.
(var='') ifTrue: [var:='http://www.w3.org/2001/xml-events'].
	self at: 'xmlns:ev' put: var
!

xmlnsXlink: aString
|var|
"
---EN---
to use the default value, enter an empty string ''
---RU---
чтобы использовать значение по умолчанию, укажите пустую строку ''
"
var:= aString.
(var='') ifTrue: [var:='http://www.w3.org/1999/xlink'].
	self at: 'xmlns:xlink' put: var
! !

