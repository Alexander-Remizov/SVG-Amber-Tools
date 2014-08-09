define("amber-svgambertools/SvgAmberTools", ["amber/boot", "amber_core/Web", "amber_core/Kernel-Objects"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('SvgAmberTools');
smalltalk.packages["SvgAmberTools"].transport = {"type":"amd","amdNamespace":"amber-svgambertools"};

smalltalk.addClass('SVGWidget', globals.Widget, ['setAttribute'], 'SvgAmberTools');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var svg,circle,process;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
_st(html)._h1_("например");
_st(_st(html)._br())._style_("");
$1=_st(html)._svg();
_st($1)._height_((500));
_st($1)._width_((500));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._circle();
_st($3)._fill_("yellow");
_st($3)._strokeWidth_((4));
_st($3)._stroke_("green");
_st($3)._r_((40));
$ctx2.sendIdx["r:"]=1;
_st($3)._cy_((250));
$4=_st($3)._cx_((250));
circle=$4;
return circle;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
svg=$2;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(circle)._r_((250)._atRandom());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}))._valueWithInterval_((1000));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,svg:svg,circle:circle,process:process},globals.SVGWidget)})},
args: ["html"],
source: "renderOn: html\x0a|svg circle process|\x0ahtml h1: 'например'.\x0ahtml br style: ''.\x0a\x0asvg := html svg\x0a\x09height: 500;\x0a\x09width: 500;\x0a\x09with: [ \x0a\x09\x09circle := html circle\x0a\x09\x09\x09fill: 'yellow';\x0a\x09\x09\x09strokeWidth: 4;\x0a\x09\x09\x09stroke: 'green';\x0a\x09\x09\x09r: 40;\x0a\x09\x09\x09cy: 250;\x0a\x09\x09\x09cx: 250].\x0a\x09[circle r: 250 atRandom] valueWithInterval: 1000.",
messageSends: ["h1:", "style:", "br", "height:", "svg", "width:", "with:", "fill:", "circle", "strokeWidth:", "stroke:", "r:", "cy:", "cx:", "valueWithInterval:", "atRandom"],
referencedClasses: []
}),
globals.SVGWidget);



smalltalk.addClass('SvgAmberTools', globals.Object, ['widget'], 'SvgAmberTools');
smalltalk.addMethod(
smalltalk.method({
selector: "onOpen",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
function $SVGWidget(){return globals.SVGWidget||(typeof SVGWidget=="undefined"?nil:SVGWidget)}
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self["@widget"]=_st($SVGWidget())._new();
_st(self["@widget"])._renderOn_(_st($HTMLCanvas())._onJQuery_("body"._asJQuery()));
return self}, function($ctx1) {$ctx1.fill(self,"onOpen",{},globals.SvgAmberTools)})},
args: [],
source: "onOpen\x0a\x09\x0a\x09widget := SVGWidget new.\x0a\x09\x0a\x0a\x09widget renderOn: (HTMLCanvas onJQuery: 'body' asJQuery)",
messageSends: ["new", "renderOn:", "onJQuery:", "asJQuery"],
referencedClasses: ["SVGWidget", "HTMLCanvas"]
}),
globals.SvgAmberTools);



smalltalk.addClass('SvgTagBrush', globals.TagBrush, [], 'SvgAmberTools');
smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
protocol: 'attributes',
fn: function (aString,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self['@element'].setAttributeNS(null, aString, aValue); return aValue;
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{aString:aString,aValue:aValue},globals.SvgTagBrush)})},
args: ["aString", "aValue"],
source: "at: aString put: aValue\x0a\x09<self['@element'].setAttributeNS(null, aString, aValue); return aValue>",
messageSends: [],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "createElementFor:",
protocol: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return document.createElementNS('http://www.w3.org/2000/svg', String(aString));
return self}, function($ctx1) {$ctx1.fill(self,"createElementFor:",{aString:aString},globals.SvgTagBrush)})},
args: ["aString"],
source: "createElementFor: aString\x0a\x09<return document.createElementNS('http://www.w3.org/2000/svg', String(aString))>",
messageSends: [],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "cx",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("cx"))._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"cx",{},globals.SvgTagBrush)})},
args: [],
source: "cx\x0a\x09^ (self at: 'cx') asNumber",
messageSends: ["asNumber", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "cx:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("cx",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"cx:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "cx: aValue\x0a\x09self at: 'cx' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "cy",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("cy"))._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"cy",{},globals.SvgTagBrush)})},
args: [],
source: "cy\x0a\x09^ (self at: 'cy') asNumber",
messageSends: ["asNumber", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "cy:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("cy",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"cy:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "cy: aValue\x0a\x09self at: 'cy' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "fill",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("fill"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"fill",{},globals.SvgTagBrush)})},
args: [],
source: "fill\x0a\x09^ (self at: 'fill') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "fill:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("fill",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"fill:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "fill: aValue\x0a\x09self at: 'fill' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("height"))._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},globals.SvgTagBrush)})},
args: [],
source: "height\x0a\x09^ (self at: 'height') asNumber",
messageSends: ["asNumber", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("height",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "height: aValue\x0a\x09self at: 'height' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "r",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("r"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"r",{},globals.SvgTagBrush)})},
args: [],
source: "r\x0a\x09^ (self at: 'r') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "r:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("r",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"r:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "r: aValue\x0a\x09self at: 'r' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "stroke",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("stroke"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"stroke",{},globals.SvgTagBrush)})},
args: [],
source: "stroke\x0a\x09^ (self at: 'stroke') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "stroke:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("stroke",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"stroke:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "stroke: aValue\x0a\x09self at: 'stroke' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "strokeWidth",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("stroke-width"))._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"strokeWidth",{},globals.SvgTagBrush)})},
args: [],
source: "strokeWidth\x0a\x09^ (self at: 'stroke-width') asNumber",
messageSends: ["asNumber", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "strokeWidth:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("stroke-width",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"strokeWidth:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "strokeWidth: aValue\x0a\x09self at: 'stroke-width' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("width"))._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},globals.SvgTagBrush)})},
args: [],
source: "width\x0a\x09^ (self at: 'width') asNumber",
messageSends: ["asNumber", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("width",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "width: aValue\x0a\x09self at: 'width' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);


smalltalk.addMethod(
smalltalk.method({
selector: "circle",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("circle");
return $1;
}, function($ctx1) {$ctx1.fill(self,"circle",{},globals.HTMLCanvas)})},
args: [],
source: "circle\x0a\x09^ self svgTag: 'circle'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "circle:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._circle())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"circle:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "circle: anObject\x0a\x09^ self circle with: anObject",
messageSends: ["with:", "circle"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "ellipse",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("ellipse");
return $1;
}, function($ctx1) {$ctx1.fill(self,"ellipse",{},globals.HTMLCanvas)})},
args: [],
source: "ellipse\x0a\x09^ self svgTag: 'ellipse'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "ellipse:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._ellipse())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ellipse:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "ellipse: anObject\x0a\x09^ self ellipse with: anObject",
messageSends: ["with:", "ellipse"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "g",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("g");
return $1;
}, function($ctx1) {$ctx1.fill(self,"g",{},globals.HTMLCanvas)})},
args: [],
source: "g\x0a\x09^ self svgTag: 'g'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "g:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._g())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"g:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "g: anObject\x0a\x09^ self g with: anObject",
messageSends: ["with:", "g"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "image",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("image");
return $1;
}, function($ctx1) {$ctx1.fill(self,"image",{},globals.HTMLCanvas)})},
args: [],
source: "image\x0a\x09^ self svgTag: 'image'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "image:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._image())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"image:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "image: anObject\x0a\x09^ self image with: anObject",
messageSends: ["with:", "image"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "line",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("line");
return $1;
}, function($ctx1) {$ctx1.fill(self,"line",{},globals.HTMLCanvas)})},
args: [],
source: "line\x0a\x09^ self svgTag: 'line'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "line:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._line())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"line:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "line: anObject\x0a\x09^ self line with: anObject",
messageSends: ["with:", "line"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "newSvgTag:",
protocol: '*SvgAmberTools',
fn: function (aString){
var self=this;
function $SvgTagBrush(){return globals.SvgTagBrush||(typeof SvgTagBrush=="undefined"?nil:SvgTagBrush)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($SvgTagBrush())._fromString_canvas_(aString,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newSvgTag:",{aString:aString},globals.HTMLCanvas)})},
args: ["aString"],
source: "newSvgTag: aString\x0a\x09^ SvgTagBrush fromString: aString canvas: self",
messageSends: ["fromString:canvas:"],
referencedClasses: ["SvgTagBrush"]
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "path",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("path");
return $1;
}, function($ctx1) {$ctx1.fill(self,"path",{},globals.HTMLCanvas)})},
args: [],
source: "path\x0a\x09^ self svgTag: 'path'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "path:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._path())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"path:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "path: anObject\x0a\x09^ self path with: anObject",
messageSends: ["with:", "path"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "polygon",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("polygon");
return $1;
}, function($ctx1) {$ctx1.fill(self,"polygon",{},globals.HTMLCanvas)})},
args: [],
source: "polygon \x0a\x09^ self svgTag: 'polygon'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "polygon:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._polygon())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"polygon:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "polygon: anObject\x0a\x09^ self polygon with: anObject",
messageSends: ["with:", "polygon"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "polyline",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("polyline");
return $1;
}, function($ctx1) {$ctx1.fill(self,"polyline",{},globals.HTMLCanvas)})},
args: [],
source: "polyline \x0a\x09^ self svgTag: 'polyline'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "polyline:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._polyline())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"polyline:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "polyline: anObject\x0a\x09^ self polyline with: anObject",
messageSends: ["with:", "polyline"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "rect",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("rect");
return $1;
}, function($ctx1) {$ctx1.fill(self,"rect",{},globals.HTMLCanvas)})},
args: [],
source: "rect \x0a\x09^ self svgTag: 'rect'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "rect:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._rect())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rect:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "rect: anObject\x0a\x09^ self rect with: anObject",
messageSends: ["with:", "rect"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "svg",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("svg");
return $1;
}, function($ctx1) {$ctx1.fill(self,"svg",{},globals.HTMLCanvas)})},
args: [],
source: "svg\x0a\x09^ self svgTag: 'svg'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "svg:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._svg())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"svg:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "svg: anObject\x0a\x09^ self svg with: anObject",
messageSends: ["with:", "svg"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "svgTag:",
protocol: '*SvgAmberTools',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@root"])._addBrush_(self._newSvgTag_(aString));
return $1;
}, function($ctx1) {$ctx1.fill(self,"svgTag:",{aString:aString},globals.HTMLCanvas)})},
args: ["aString"],
source: "svgTag: aString\x0a\x09^ root addBrush: (self newSvgTag: aString)",
messageSends: ["addBrush:", "newSvgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("text");
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},globals.HTMLCanvas)})},
args: [],
source: "text\x0a\x09^ self svgTag: 'text'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._text())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"text:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "text: anObject\x0a\x09^ self text with: anObject",
messageSends: ["with:", "text"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "baseProfile:",
protocol: '*SvgAmberTools',
fn: function (aString){
var self=this;
var var_;
return smalltalk.withContext(function($ctx1) { 
var $1;
var_=aString;
$1=_st(var_).__eq("");
if(smalltalk.assert($1)){
var_="full";
var_;
};
self._at_put_("baseProfile"._asSymbol(),var_);
return self}, function($ctx1) {$ctx1.fill(self,"baseProfile:",{aString:aString,var_:var_},globals.TagBrush)})},
args: ["aString"],
source: "baseProfile: aString\x0a|var|\x0a\x22\x0a---EN---\x0ato use the default value, enter an empty string ''\x0a---RU---\x0aчтобы использовать значение по умолчанию, укажите пустую строку ''\x0a\x22\x0avar:= aString.\x0a(var='') ifTrue: [var:='full'].\x0a\x09self at: ('baseProfile' asSymbol) put: var",
messageSends: ["ifTrue:", "=", "at:put:", "asSymbol"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "version:",
protocol: '*SvgAmberTools',
fn: function (aString){
var self=this;
var var_;
return smalltalk.withContext(function($ctx1) { 
var $1;
var_=aString;
$1=_st(var_).__eq("");
if(smalltalk.assert($1)){
var_="1.1";
var_;
};
self._at_put_("version",var_);
return self}, function($ctx1) {$ctx1.fill(self,"version:",{aString:aString,var_:var_},globals.TagBrush)})},
args: ["aString"],
source: "version: aString\x0a|var|\x0a\x22\x0a---EN---\x0ato use the default value, enter an empty string ''\x0a---RU---\x0aчтобы использовать значение по умолчанию, укажите пустую строку ''\x0a\x22\x0avar:= aString.\x0a(var='') ifTrue: [var:='1.1'].\x0a\x09self at: 'version' put: var",
messageSends: ["ifTrue:", "=", "at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "xmlns:",
protocol: '*SvgAmberTools',
fn: function (aString){
var self=this;
var var_;
return smalltalk.withContext(function($ctx1) { 
var $1;
var_=aString;
$1=_st(var_).__eq("");
if(smalltalk.assert($1)){
var_="http://www.w3.org/2000/svg";
var_;
};
self._at_put_("xmlns",var_);
return self}, function($ctx1) {$ctx1.fill(self,"xmlns:",{aString:aString,var_:var_},globals.TagBrush)})},
args: ["aString"],
source: "xmlns: aString\x0a|var|\x0a\x22\x0a---EN---\x0ato use the default value, enter an empty string ''\x0a---RU---\x0aчтобы использовать значение по умолчанию, укажите пустую строку ''\x0a\x22\x0avar:= aString.\x0a(var='') ifTrue: [var:='http://www.w3.org/2000/svg'].\x0a\x09self at: 'xmlns' put: var",
messageSends: ["ifTrue:", "=", "at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "xmlnsEv:",
protocol: '*SvgAmberTools',
fn: function (aString){
var self=this;
var var_;
return smalltalk.withContext(function($ctx1) { 
var $1;
var_=aString;
$1=_st(var_).__eq("");
if(smalltalk.assert($1)){
var_="http://www.w3.org/2001/xml-events";
var_;
};
self._at_put_("xmlns:ev",var_);
return self}, function($ctx1) {$ctx1.fill(self,"xmlnsEv:",{aString:aString,var_:var_},globals.TagBrush)})},
args: ["aString"],
source: "xmlnsEv: aString\x0a|var|\x0a\x22\x0a---EN---\x0ato use the default value, enter an empty string ''\x0a---RU---\x0aчтобы использовать значение по умолчанию, укажите пустую строку ''\x0a\x22\x0avar:= aString.\x0a(var='') ifTrue: [var:='http://www.w3.org/2001/xml-events'].\x0a\x09self at: 'xmlns:ev' put: var",
messageSends: ["ifTrue:", "=", "at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "xmlnsXlink:",
protocol: '*SvgAmberTools',
fn: function (aString){
var self=this;
var var_;
return smalltalk.withContext(function($ctx1) { 
var $1;
var_=aString;
$1=_st(var_).__eq("");
if(smalltalk.assert($1)){
var_="http://www.w3.org/1999/xlink";
var_;
};
self._at_put_("xmlns:xlink",var_);
return self}, function($ctx1) {$ctx1.fill(self,"xmlnsXlink:",{aString:aString,var_:var_},globals.TagBrush)})},
args: ["aString"],
source: "xmlnsXlink: aString\x0a|var|\x0a\x22\x0a---EN---\x0ato use the default value, enter an empty string ''\x0a---RU---\x0aчтобы использовать значение по умолчанию, укажите пустую строку ''\x0a\x22\x0avar:= aString.\x0a(var='') ifTrue: [var:='http://www.w3.org/1999/xlink'].\x0a\x09self at: 'xmlns:xlink' put: var",
messageSends: ["ifTrue:", "=", "at:put:"],
referencedClasses: []
}),
globals.TagBrush);

});
