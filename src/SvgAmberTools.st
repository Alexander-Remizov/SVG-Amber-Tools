Smalltalk createPackage: 'SvgAmberTools'!
Widget subclass: #SVGWidget
	instanceVariableNames: 'setAttribute'
	package: 'SvgAmberTools'!

!SVGWidget methodsFor: 'rendering'!

renderOn: html
|svg circle rect process|

html h1: 'например'.
html br.
html button class: ''; at: 'type' put: 'button';	
		onClick: [ svg  at: 'height' put:  400; at: 'width' put:  300
			];  with:'test'.
html br.

svg := html svg
	height: 600;
	width: 500;
	baseProfile: 'full';
	viewBox:'0 0 500 600';
	preserveAspectRatio:'none'; 
	with: [ 
		rect:= html rect
		x:'4'; y:'4'; width:492; height:592;
		fill: 'yellow';
			strokeWidth: 4;
			stroke: 'green'
	
	
		"circle := html circle
			fill: 'yellow';
			strokeWidth: 4;
			stroke: 'green';
			r: 40;
			cy: 250;
			cx: 250"
	] .
	"[circle r: 250 atRandom] valueWithInterval: 1000."
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

accumulate
	^ (self at: 'accumulate') asString
!

accumulate: aValue
	self at: 'accumulate' put: aValue asString.
!

additive
	^ (self at: 'additive') asString
!

additive: aValue
	self at: 'additive' put: aValue asString.
!

alignmentBaseline
	^ (self at: 'alignment-baseline') asString
!

alignmentBaseline: aValue
	self at: 'alignment-baseline' put: aValue asString.
!

at: aString put: aValue
	<self['@element'].setAttributeNS(null, aString, aValue); return aValue>
!

attributeName
	^ (self at: 'attributeName') asString
!

attributeName: aValue
	self at: 'attributeName' put: aValue asString.
!

attributeType
	^ (self at: 'attributeType') asString
!

attributeType: aValue
	self at: 'attributeType' put: aValue asString.
!

baseProfile
	^ (self at: 'baseProfile') asString
!

baseProfile: aValue
	self at: 'baseProfile' put: aValue asString.
!

baselineShift
	^ (self at: 'baseline-shift') asString
!

baselineShift: aValue
	self at: 'baseline-shift' put: aValue asString.
!

begin
	^ (self at: 'begin') asString
!

begin: aValue
	self at: 'begin' put: aValue asString.
!

by
	^ (self at: 'by') asString
!

by: aValue
	self at: 'by' put: aValue asString.
!

calcMode
	^ (self at: 'calcMode') asString
!

calcMode: aValue
	self at: 'calcMode' put: aValue asString.
!

clipPathUnits
	^ (self at: 'clipPathUnits') asString
!

clipPathUnits: aValue
	self at: 'clipPathUnits' put: aValue asString.
!

cx
	^ (self at: 'cx') asString
!

cx: aValue
	self at: 'cx' put: aValue asString.
!

cy
	^ (self at: 'cy') asString
!

cy: aValue
	self at: 'cy' put: aValue asString.
!

d
	^ (self at: 'd') asString
!

d: aValue
	self at: 'd' put: aValue asString.
!

dominantBaseline
	^ (self at: 'dominant-baseline') asString
!

dominantBaseline: aValue
	self at: 'dominant-baseline' put: aValue asString.
!

dur
	^ (self at: 'dur') asString
!

dur: aValue
	self at: 'dur' put: aValue asString.
!

dx
	^ (self at: 'dx') asString
!

dx: aValue
	self at: 'dx' put: aValue asString.
!

dy
	^ (self at: 'dy') asString
!

dy: aValue
	self at: 'dy' put: aValue asString.
!

end
	^ (self at: 'end') asString
!

end: aValue
	self at: 'end' put: aValue asString.
!

fill
	^ (self at: 'fill') asString
!

fill: aValue
	self at: 'fill' put: aValue asString.
!

from
	^ (self at: 'from') asString
!

from: aValue
	self at: 'from' put: aValue asString.
!

height
	^ (self at: 'height') asString
!

height: aValue
	self at: 'height' put: aValue asString.
!

keySplines
	^ (self at: 'keySplines') asString
!

keySplines: aValue
	self at: 'keySplines' put: aValue asString.
!

keyTimes
	^ (self at: 'keyTimes') asString
!

keyTimes: aValue
	self at: 'keyTimes' put: aValue asString.
!

lengthAdjust
	^ (self at: 'lengthAdjust') asString
!

lengthAdjust: aValue
	self at: 'lengthAdjust' put: aValue asString.
!

max
	^ (self at: 'max') asString
!

max: aValue
	self at: 'max' put: aValue asString.
!

min
	^ (self at: 'min') asString
!

min: aValue
	self at: 'min' put: aValue asString.
!

points
	^ (self at: 'points') asString
!

points: aValue
	self at: 'points' put: aValue asString.
!

preserveAspectRatio
	^ (self at: 'preserveAspectRatio') asString
!

preserveAspectRatio: aValue
	self at: 'preserveAspectRatio' put: aValue asString.
!

r
	^ (self at: 'r') asString
!

r: aValue
	self at: 'r' put: aValue asString.
!

repeatCount
	^ (self at: 'repeatCount') asString
!

repeatCount: aValue
	self at: 'repeatCount' put: aValue asString.
!

repeatDur
	^ (self at: 'repeatDur') asString
!

repeatDur: aValue
	self at: 'repeatDur' put: aValue asString.
!

restart
	^ (self at: 'restart') asString
!

restart: aValue
	self at: 'restart' put: aValue asString.
!

rotate
	^ (self at: 'rotate') asString
!

rotate: aValue
	self at: 'rotate' put: aValue asString.
!

rx
	^ (self at: 'rx') asString
!

rx: aValue
	self at: 'rx' put: aValue asString.
!

ry
	^ (self at: 'ry') asString
!

ry: aValue
	self at: 'ry' put: aValue asString.
!

stroke
	^ (self at: 'stroke') asString
!

stroke: aValue
	self at: 'stroke' put: aValue asString.
!

strokeWidth
	^ (self at: 'stroke-width') asString
!

strokeWidth: aValue
	self at: 'stroke-width' put: aValue asString.
!

target
	^ (self at: 'target') asString
!

target: aValue
	self at: 'target' put: aValue asString.
!

textLength
	^ (self at: 'textLength') asString
!

textLength: aValue
	self at: 'textLength' put: aValue asString.
!

to
	^ (self at: 'to') asString
!

to: aValue
	self at: 'to' put: aValue asString.
!

values
	^ (self at: 'values') asString
!

values: aValue
	self at: 'values' put: aValue asString.
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

viewBox
	^ (self at: 'viewBox') asString
!

viewBox: aValue
	self at: 'viewBox' put: aValue asString.
!

width
	^ (self at: 'width') asString
!

width: aValue
	self at: 'width' put: aValue asString.
!

x
	^ (self at: 'x') asString
!

x1
	^ (self at: 'x1') asString
!

x1: aValue
	self at: 'x1' put: aValue asString.
!

x2
	^ (self at: 'x2') asString
!

x2: aValue
	self at: 'x2' put: aValue asString.
!

x: aValue
	self at: 'x' put: aValue asString.
!

xlinkActuate
	^ (self at: 'xlink:actuate') asString
!

xlinkActuate: aValue
	self at: 'xlink:actuate' put: aValue asString.
!

xlinkHref
	^ (self at: 'xlink:href') asString
!

xlinkHref: aValue
	self at: 'xlink:href' put: aValue asString.
!

xlinkShow
	^ (self at: 'xlink:show') asString
!

xlinkShow: aValue
	self at: 'xlink:show' put: aValue asString.
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
!

y
	^ (self at: 'y') asString
!

y1
	^ (self at: 'y1') asString
!

y1: aValue
	self at: 'y1' put: aValue asString.
!

y: aValue
	self at: 'y' put: aValue asString.
! !

!SvgTagBrush methodsFor: 'private'!

createElementFor: aString
	<return document.createElementNS('http://www.w3.org/2000/svg', String(aString))>
! !

!HTMLCanvas methodsFor: '*SvgAmberTools'!

altGlyph
	^ self svgTag: 'altGlyph'
!

altGlyph: anObject
	^ self altGlyph with: anObject
!

altGlyphDef
	^ self svgTag: 'altGlyphDef'
!

altGlyphDef: anObject
	^ self altGlyphDef with: anObject
!

altGlyphItem
	^ self svgTag: 'altGlyphItem'
!

altGlyphItem: anObject
	^ self altGlyphItem with: anObject
!

animate
	^ self svgTag: 'animate'
!

animate: anObject
	^ self animate with: anObject
!

animateColor
	^ self svgTag: 'animateColor'
!

animateColor: anObject
	^ self animateColor with: anObject
!

animateMotion
	^ self svgTag: 'animateMotion'
!

animateMotion: anObject
	^ self animateMotion with: anObject
!

animateTransform
	^ self svgTag: 'animateTransform'
!

animateTransform: anObject
	^ self animateTransform with: anObject
!

circle
	^ self svgTag: 'circle'
!

circle: anObject
	^ self circle with: anObject
!

clipPath
	^ self svgTag: 'clipPath'
!

clipPath: anObject
	^ self clipPath with: anObject
!

colorProfile
	^ self svgTag: 'color-profile'
!

colorProfile: anObject
	^ self colorProfile with: anObject
!

cursor
	^ self svgTag: 'cursor'
!

cursor: anObject
	^ self cursor with: anObject
!

defs
	^ self svgTag: 'defs'
!

defs: anObject
	^ self defs with: anObject
!

ellipse
	^ self svgTag: 'ellipse'
!

ellipse: anObject
	^ self ellipse with: anObject
!

feBlend
	^ self svgTag: 'feBlend'
!

feBlend: anObject
	^ self feBlend with: anObject
!

feColorMatrix
	^ self svgTag: 'feColorMatrix'
!

feColorMatrix: anObject
	^ self feColorMatrix with: anObject
!

feComponentTransfer
	^ self svgTag: 'feComponentTransfer'
!

feComponentTransfer: anObject
	^ self feComponentTransfer with: anObject
!

feComposite
	^ self svgTag: 'feComposite'
!

feComposite: anObject
	^ self feComposite with: anObject
!

feConvolveMatrix
	^ self svgTag: 'feConvolveMatrix'
!

feConvolveMatrix: anObject
	^ self feConvolveMatrix with: anObject
!

feDiffuseLighting
	^ self svgTag: 'feDiffuseLighting'
!

feDiffuseLighting: anObject
	^ self feDiffuseLighting with: anObject
!

feDisplacementMap
	^ self svgTag: 'feDisplacementMap'
!

feDisplacementMap: anObject
	^ self feDisplacementMap with: anObject
!

feDistantLight
	^ self svgTag: 'feDistantLight'
!

feDistantLight: anObject
	^ self feDistantLight with: anObject
!

feFlood
	^ self svgTag: 'feFlood'
!

feFlood: anObject
	^ self feFlood with: anObject
!

feFuncA
	^ self svgTag: 'feFuncA'
!

feFuncA: anObject
	^ self feFuncA with: anObject
!

feFuncB
	^ self svgTag: 'feFuncB'
!

feFuncB: anObject
	^ self feFuncB with: anObject
!

feFuncG
	^ self svgTag: 'feFuncG'
!

feFuncG: anObject
	^ self feFuncG with: anObject
!

feFuncR
	^ self svgTag: 'feFuncR'
!

feFuncR: anObject
	^ self feFuncR with: anObject
!

feGaussianBlur
	^ self svgTag: 'feGaussianBlur'
!

feGaussianBlur: anObject
	^ self feGaussianBlur with: anObject
!

feImage
	^ self svgTag: 'feImage'
!

feImage: anObject
	^ self feImage with: anObject
!

feMerge
	^ self svgTag: 'feMerge'
!

feMerge: anObject
	^ self feMerge with: anObject
!

feMergeNode
	^ self svgTag: 'feMergeNode'
!

feMergeNode: anObject
	^ self feMergeNode with: anObject
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

mpath
	^ self svgTag: 'mpath'
!

mpath: anObject
	^ self mpath with: anObject
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

set
	^ self svgTag: 'set'
!

set: anObject
	^ self set with: anObject
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

