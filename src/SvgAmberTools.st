Smalltalk createPackage: 'SvgAmberTools'!
Widget subclass: #SVGWidget
	instanceVariableNames: 'setAttribute'
	package: 'SvgAmberTools'!

!SVGWidget methodsFor: 'rendering'!

renderOn: html
|svg circle process|
html h1: 'например'.
html br style: ''.

svg := html svg
	height: 500;
	width: 500;
	with: [ 
		circle := html circle
			fill: 'yellow';
			strokeWidth: 4;
			stroke: 'green';
			r: 40;
			cy: 250;
			cx: 250].
	[circle r: 250 atRandom] valueWithInterval: 1000.
! !

Object subclass: #SvgAmberTools
	instanceVariableNames: 'widget'
	package: 'SvgAmberTools'!

!SvgAmberTools methodsFor: 'as yet unclassified'!

onOpen
	
	widget := SVGWidget new.
	

	widget renderOn: (HTMLCanvas onJQuery: 'body' asJQuery)
! !

TagBrush subclass: #SvgTagBrush
	instanceVariableNames: ''
	package: 'SvgAmberTools'!

!SvgTagBrush methodsFor: 'attributes'!

at: aString put: aValue
	<self['@element'].setAttributeNS(null, aString, aValue); return aValue>
!

cx
	^ (self at: 'cx') asNumber
!

cx: aValue
	self at: 'cx' put: aValue asString.
!

cy
	^ (self at: 'cy') asNumber
!

cy: aValue
	self at: 'cy' put: aValue asString.
!

fill
	^ (self at: 'fill') asString
!

fill: aValue
	self at: 'fill' put: aValue asString.
!

height
	^ (self at: 'height') asNumber
!

height: aValue
	self at: 'height' put: aValue asString.
!

r
	^ (self at: 'r') asString
!

r: aValue
	self at: 'r' put: aValue asString.
!

stroke
	^ (self at: 'stroke') asString
!

stroke: aValue
	self at: 'stroke' put: aValue asString.
!

strokeWidth
	^ (self at: 'stroke-width') asNumber
!

strokeWidth: aValue
	self at: 'stroke-width' put: aValue asString.
!

width
	^ (self at: 'width') asNumber
!

width: aValue
	self at: 'width' put: aValue asString.
! !

!SvgTagBrush methodsFor: 'private'!

createElementFor: aString
	<return document.createElementNS('http://www.w3.org/2000/svg', String(aString))>
! !

!HTMLCanvas methodsFor: '*SvgAmberTools'!

circle
	^ self svgTag: 'circle'
!

circle: anObject
	^ self circle with: anObject
!

ellipse
	^ self svgTag: 'ellipse'
!

ellipse: anObject
	^ self ellipse with: anObject
!

g
	^ self svgTag: 'g'
!

g: anObject
	^ self g with: anObject
!

image
	^ self svgTag: 'image'
!

image: anObject
	^ self image with: anObject
!

line
	^ self svgTag: 'line'
!

line: anObject
	^ self line with: anObject
!

newSvgTag: aString
	^ SvgTagBrush fromString: aString canvas: self
!

path
	^ self svgTag: 'path'
!

path: anObject
	^ self path with: anObject
!

polygon 
	^ self svgTag: 'polygon'
!

polygon: anObject
	^ self polygon with: anObject
!

polyline 
	^ self svgTag: 'polyline'
!

polyline: anObject
	^ self polyline with: anObject
!

rect 
	^ self svgTag: 'rect'
!

rect: anObject
	^ self rect with: anObject
!

svg
	^ self svgTag: 'svg'
!

svg: anObject
	^ self svg with: anObject
!

svgTag: aString
	^ root addBrush: (self newSvgTag: aString)
!

text
	^ self svgTag: 'text'
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

