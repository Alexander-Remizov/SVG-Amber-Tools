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
var svg,circle,rect,process;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$7,$8,$6;
_st(html)._h1_("например");
_st(html)._br();
$ctx1.sendIdx["br"]=1;
$1=_st(html)._button();
_st($1)._class_("");
_st($1)._at_put_("type","button");
$ctx1.sendIdx["at:put:"]=1;
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
$2=svg;
_st($2)._at_put_("height",(400));
$ctx2.sendIdx["at:put:"]=2;
$3=_st($2)._at_put_("width",(300));
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$4=_st($1)._with_("test");
$ctx1.sendIdx["with:"]=1;
_st(html)._br();
$5=_st(html)._svg();
_st($5)._height_((600));
$ctx1.sendIdx["height:"]=1;
_st($5)._width_((500));
$ctx1.sendIdx["width:"]=1;
_st($5)._baseProfile_("full");
_st($5)._viewBox_("0 0 500 600");
_st($5)._preserveAspectRatio_("none");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$7=_st(html)._rect();
_st($7)._x_("4");
_st($7)._y_("4");
_st($7)._width_((492));
_st($7)._height_((592));
_st($7)._fill_("yellow");
_st($7)._strokeWidth_((4));
$8=_st($7)._stroke_("green");
rect=$8;
return rect;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
svg=$6;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,svg:svg,circle:circle,rect:rect,process:process},globals.SVGWidget)})},
args: ["html"],
source: "renderOn: html\x0a|svg circle rect process|\x0a\x0ahtml h1: 'например'.\x0ahtml br.\x0ahtml button class: ''; at: 'type' put: 'button';\x09\x0a\x09\x09onClick: [ svg  at: 'height' put:  400; at: 'width' put:  300\x0a\x09\x09\x09];  with:'test'.\x0ahtml br.\x0a\x0asvg := html svg\x0a\x09height: 600;\x0a\x09width: 500;\x0a\x09baseProfile: 'full';\x0a\x09viewBox:'0 0 500 600';\x0a\x09preserveAspectRatio:'none'; \x0a\x09with: [ \x0a\x09\x09rect:= html rect\x0a\x09\x09x:'4'; y:'4'; width:492; height:592;\x0a\x09\x09fill: 'yellow';\x0a\x09\x09\x09strokeWidth: 4;\x0a\x09\x09\x09stroke: 'green'\x0a\x09\x0a\x09\x0a\x09\x09\x22circle := html circle\x0a\x09\x09\x09fill: 'yellow';\x0a\x09\x09\x09strokeWidth: 4;\x0a\x09\x09\x09stroke: 'green';\x0a\x09\x09\x09r: 40;\x0a\x09\x09\x09cy: 250;\x0a\x09\x09\x09cx: 250\x22\x0a\x09] .\x0a\x09\x22[circle r: 250 atRandom] valueWithInterval: 1000.\x22",
messageSends: ["h1:", "br", "class:", "button", "at:put:", "onClick:", "with:", "height:", "svg", "width:", "baseProfile:", "viewBox:", "preserveAspectRatio:", "x:", "rect", "y:", "fill:", "strokeWidth:", "stroke:"],
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
selector: "accumulate",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("accumulate"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"accumulate",{},globals.SvgTagBrush)})},
args: [],
source: "accumulate\x0a\x09^ (self at: 'accumulate') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "accumulate:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("accumulate",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"accumulate:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "accumulate: aValue\x0a\x09self at: 'accumulate' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "additive",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("additive"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"additive",{},globals.SvgTagBrush)})},
args: [],
source: "additive\x0a\x09^ (self at: 'additive') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "additive:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("additive",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"additive:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "additive: aValue\x0a\x09self at: 'additive' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "alignmentBaseline",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("alignment-baseline"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"alignmentBaseline",{},globals.SvgTagBrush)})},
args: [],
source: "alignmentBaseline\x0a\x09^ (self at: 'alignment-baseline') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "alignmentBaseline:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("alignment-baseline",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"alignmentBaseline:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "alignmentBaseline: aValue\x0a\x09self at: 'alignment-baseline' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

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
selector: "attributeName",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("attributeName"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"attributeName",{},globals.SvgTagBrush)})},
args: [],
source: "attributeName\x0a\x09^ (self at: 'attributeName') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "attributeName:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("attributeName",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"attributeName:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "attributeName: aValue\x0a\x09self at: 'attributeName' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "attributeType",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("attributeType"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"attributeType",{},globals.SvgTagBrush)})},
args: [],
source: "attributeType\x0a\x09^ (self at: 'attributeType') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "attributeType:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("attributeType",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"attributeType:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "attributeType: aValue\x0a\x09self at: 'attributeType' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "baseProfile",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("baseProfile"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"baseProfile",{},globals.SvgTagBrush)})},
args: [],
source: "baseProfile\x0a\x09^ (self at: 'baseProfile') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "baseProfile:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("baseProfile",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"baseProfile:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "baseProfile: aValue\x0a\x09self at: 'baseProfile' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "baselineShift",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("baseline-shift"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"baselineShift",{},globals.SvgTagBrush)})},
args: [],
source: "baselineShift\x0a\x09^ (self at: 'baseline-shift') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "baselineShift:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("baseline-shift",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"baselineShift:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "baselineShift: aValue\x0a\x09self at: 'baseline-shift' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "begin",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("begin"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"begin",{},globals.SvgTagBrush)})},
args: [],
source: "begin\x0a\x09^ (self at: 'begin') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "begin:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("begin",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"begin:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "begin: aValue\x0a\x09self at: 'begin' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "by",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("by"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"by",{},globals.SvgTagBrush)})},
args: [],
source: "by\x0a\x09^ (self at: 'by') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "by:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("by",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"by:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "by: aValue\x0a\x09self at: 'by' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "calcMode",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("calcMode"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"calcMode",{},globals.SvgTagBrush)})},
args: [],
source: "calcMode\x0a\x09^ (self at: 'calcMode') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "calcMode:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("calcMode",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"calcMode:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "calcMode: aValue\x0a\x09self at: 'calcMode' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "clipPathUnits",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("clipPathUnits"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"clipPathUnits",{},globals.SvgTagBrush)})},
args: [],
source: "clipPathUnits\x0a\x09^ (self at: 'clipPathUnits') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "clipPathUnits:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("clipPathUnits",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"clipPathUnits:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "clipPathUnits: aValue\x0a\x09self at: 'clipPathUnits' put: aValue asString.",
messageSends: ["at:put:", "asString"],
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
$1=_st(self._at_("cx"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"cx",{},globals.SvgTagBrush)})},
args: [],
source: "cx\x0a\x09^ (self at: 'cx') asString",
messageSends: ["asString", "at:"],
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
$1=_st(self._at_("cy"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"cy",{},globals.SvgTagBrush)})},
args: [],
source: "cy\x0a\x09^ (self at: 'cy') asString",
messageSends: ["asString", "at:"],
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
selector: "d",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("d"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"d",{},globals.SvgTagBrush)})},
args: [],
source: "d\x0a\x09^ (self at: 'd') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "d:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("d",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"d:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "d: aValue\x0a\x09self at: 'd' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dominantBaseline",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("dominant-baseline"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"dominantBaseline",{},globals.SvgTagBrush)})},
args: [],
source: "dominantBaseline\x0a\x09^ (self at: 'dominant-baseline') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dominantBaseline:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("dominant-baseline",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"dominantBaseline:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "dominantBaseline: aValue\x0a\x09self at: 'dominant-baseline' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dur",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("dur"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"dur",{},globals.SvgTagBrush)})},
args: [],
source: "dur\x0a\x09^ (self at: 'dur') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dur:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("dur",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"dur:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "dur: aValue\x0a\x09self at: 'dur' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dx",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("dx"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"dx",{},globals.SvgTagBrush)})},
args: [],
source: "dx\x0a\x09^ (self at: 'dx') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dx:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("dx",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"dx:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "dx: aValue\x0a\x09self at: 'dx' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dy",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("dy"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"dy",{},globals.SvgTagBrush)})},
args: [],
source: "dy\x0a\x09^ (self at: 'dy') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dy:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("dy",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"dy:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "dy: aValue\x0a\x09self at: 'dy' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "end",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("end"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"end",{},globals.SvgTagBrush)})},
args: [],
source: "end\x0a\x09^ (self at: 'end') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "end:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("end",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"end:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "end: aValue\x0a\x09self at: 'end' put: aValue asString.",
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
selector: "from",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("from"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"from",{},globals.SvgTagBrush)})},
args: [],
source: "from\x0a\x09^ (self at: 'from') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "from:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("from",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"from:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "from: aValue\x0a\x09self at: 'from' put: aValue asString.",
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
$1=_st(self._at_("height"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},globals.SvgTagBrush)})},
args: [],
source: "height\x0a\x09^ (self at: 'height') asString",
messageSends: ["asString", "at:"],
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
selector: "keySplines",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("keySplines"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"keySplines",{},globals.SvgTagBrush)})},
args: [],
source: "keySplines\x0a\x09^ (self at: 'keySplines') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "keySplines:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("keySplines",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"keySplines:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "keySplines: aValue\x0a\x09self at: 'keySplines' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "keyTimes",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("keyTimes"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyTimes",{},globals.SvgTagBrush)})},
args: [],
source: "keyTimes\x0a\x09^ (self at: 'keyTimes') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "keyTimes:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("keyTimes",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"keyTimes:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "keyTimes: aValue\x0a\x09self at: 'keyTimes' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "lengthAdjust",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("lengthAdjust"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"lengthAdjust",{},globals.SvgTagBrush)})},
args: [],
source: "lengthAdjust\x0a\x09^ (self at: 'lengthAdjust') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "lengthAdjust:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("lengthAdjust",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"lengthAdjust:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "lengthAdjust: aValue\x0a\x09self at: 'lengthAdjust' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "max",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("max"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"max",{},globals.SvgTagBrush)})},
args: [],
source: "max\x0a\x09^ (self at: 'max') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "max:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("max",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"max:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "max: aValue\x0a\x09self at: 'max' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "min",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("min"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"min",{},globals.SvgTagBrush)})},
args: [],
source: "min\x0a\x09^ (self at: 'min') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "min:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("min",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"min:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "min: aValue\x0a\x09self at: 'min' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "points",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("points"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"points",{},globals.SvgTagBrush)})},
args: [],
source: "points\x0a\x09^ (self at: 'points') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "points:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("points",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"points:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "points: aValue\x0a\x09self at: 'points' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "preserveAspectRatio",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("preserveAspectRatio"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"preserveAspectRatio",{},globals.SvgTagBrush)})},
args: [],
source: "preserveAspectRatio\x0a\x09^ (self at: 'preserveAspectRatio') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "preserveAspectRatio:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("preserveAspectRatio",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"preserveAspectRatio:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "preserveAspectRatio: aValue\x0a\x09self at: 'preserveAspectRatio' put: aValue asString.",
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
selector: "repeatCount",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("repeatCount"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"repeatCount",{},globals.SvgTagBrush)})},
args: [],
source: "repeatCount\x0a\x09^ (self at: 'repeatCount') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatCount:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("repeatCount",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"repeatCount:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "repeatCount: aValue\x0a\x09self at: 'repeatCount' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatDur",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("repeatDur"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"repeatDur",{},globals.SvgTagBrush)})},
args: [],
source: "repeatDur\x0a\x09^ (self at: 'repeatDur') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatDur:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("repeatDur",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"repeatDur:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "repeatDur: aValue\x0a\x09self at: 'repeatDur' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "restart",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("restart"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"restart",{},globals.SvgTagBrush)})},
args: [],
source: "restart\x0a\x09^ (self at: 'restart') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "restart:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("restart",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"restart:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "restart: aValue\x0a\x09self at: 'restart' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "rotate",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("rotate"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotate",{},globals.SvgTagBrush)})},
args: [],
source: "rotate\x0a\x09^ (self at: 'rotate') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "rotate:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("rotate",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"rotate:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "rotate: aValue\x0a\x09self at: 'rotate' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "rx",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("rx"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"rx",{},globals.SvgTagBrush)})},
args: [],
source: "rx\x0a\x09^ (self at: 'rx') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "rx:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("rx",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"rx:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "rx: aValue\x0a\x09self at: 'rx' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "ry",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("ry"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ry",{},globals.SvgTagBrush)})},
args: [],
source: "ry\x0a\x09^ (self at: 'ry') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "ry:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("ry",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"ry:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "ry: aValue\x0a\x09self at: 'ry' put: aValue asString.",
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
$1=_st(self._at_("stroke-width"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"strokeWidth",{},globals.SvgTagBrush)})},
args: [],
source: "strokeWidth\x0a\x09^ (self at: 'stroke-width') asString",
messageSends: ["asString", "at:"],
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
selector: "target",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("target"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"target",{},globals.SvgTagBrush)})},
args: [],
source: "target\x0a\x09^ (self at: 'target') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "target:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("target",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"target:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "target: aValue\x0a\x09self at: 'target' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "textLength",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("textLength"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"textLength",{},globals.SvgTagBrush)})},
args: [],
source: "textLength\x0a\x09^ (self at: 'textLength') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "textLength:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("textLength",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"textLength:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "textLength: aValue\x0a\x09self at: 'textLength' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "to",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("to"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"to",{},globals.SvgTagBrush)})},
args: [],
source: "to\x0a\x09^ (self at: 'to') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "to:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("to",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"to:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "to: aValue\x0a\x09self at: 'to' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "values",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("values"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"values",{},globals.SvgTagBrush)})},
args: [],
source: "values\x0a\x09^ (self at: 'values') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "values:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("values",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"values:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "values: aValue\x0a\x09self at: 'values' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "version:",
protocol: 'attributes',
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
return self}, function($ctx1) {$ctx1.fill(self,"version:",{aString:aString,var_:var_},globals.SvgTagBrush)})},
args: ["aString"],
source: "version: aString\x0a|var|\x0a\x22\x0a---EN---\x0ato use the default value, enter an empty string ''\x0a---RU---\x0aчтобы использовать значение по умолчанию, укажите пустую строку ''\x0a\x22\x0avar:= aString.\x0a(var='') ifTrue: [var:='1.1'].\x0a\x09self at: 'version' put: var",
messageSends: ["ifTrue:", "=", "at:put:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "viewBox",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("viewBox"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"viewBox",{},globals.SvgTagBrush)})},
args: [],
source: "viewBox\x0a\x09^ (self at: 'viewBox') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "viewBox:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("viewBox",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"viewBox:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "viewBox: aValue\x0a\x09self at: 'viewBox' put: aValue asString.",
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
$1=_st(self._at_("width"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},globals.SvgTagBrush)})},
args: [],
source: "width\x0a\x09^ (self at: 'width') asString",
messageSends: ["asString", "at:"],
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
selector: "x",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("x"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"x",{},globals.SvgTagBrush)})},
args: [],
source: "x\x0a\x09^ (self at: 'x') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "x1",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("x1"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"x1",{},globals.SvgTagBrush)})},
args: [],
source: "x1\x0a\x09^ (self at: 'x1') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "x1:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("x1",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"x1:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "x1: aValue\x0a\x09self at: 'x1' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "x2",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("x2"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"x2",{},globals.SvgTagBrush)})},
args: [],
source: "x2\x0a\x09^ (self at: 'x2') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "x2:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("x2",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"x2:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "x2: aValue\x0a\x09self at: 'x2' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "x:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("x",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"x:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "x: aValue\x0a\x09self at: 'x' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "xlinkActuate",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("xlink:actuate"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"xlinkActuate",{},globals.SvgTagBrush)})},
args: [],
source: "xlinkActuate\x0a\x09^ (self at: 'xlink:actuate') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "xlinkActuate:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("xlink:actuate",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"xlinkActuate:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "xlinkActuate: aValue\x0a\x09self at: 'xlink:actuate' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "xlinkHref",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("xlink:href"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"xlinkHref",{},globals.SvgTagBrush)})},
args: [],
source: "xlinkHref\x0a\x09^ (self at: 'xlink:href') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "xlinkHref:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("xlink:href",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"xlinkHref:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "xlinkHref: aValue\x0a\x09self at: 'xlink:href' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "xlinkShow",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("xlink:show"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"xlinkShow",{},globals.SvgTagBrush)})},
args: [],
source: "xlinkShow\x0a\x09^ (self at: 'xlink:show') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "xlinkShow:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("xlink:show",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"xlinkShow:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "xlinkShow: aValue\x0a\x09self at: 'xlink:show' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "xmlns:",
protocol: 'attributes',
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
return self}, function($ctx1) {$ctx1.fill(self,"xmlns:",{aString:aString,var_:var_},globals.SvgTagBrush)})},
args: ["aString"],
source: "xmlns: aString\x0a|var|\x0a\x22\x0a---EN---\x0ato use the default value, enter an empty string ''\x0a---RU---\x0aчтобы использовать значение по умолчанию, укажите пустую строку ''\x0a\x22\x0avar:= aString.\x0a(var='') ifTrue: [var:='http://www.w3.org/2000/svg'].\x0a\x09self at: 'xmlns' put: var",
messageSends: ["ifTrue:", "=", "at:put:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "xmlnsEv:",
protocol: 'attributes',
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
return self}, function($ctx1) {$ctx1.fill(self,"xmlnsEv:",{aString:aString,var_:var_},globals.SvgTagBrush)})},
args: ["aString"],
source: "xmlnsEv: aString\x0a|var|\x0a\x22\x0a---EN---\x0ato use the default value, enter an empty string ''\x0a---RU---\x0aчтобы использовать значение по умолчанию, укажите пустую строку ''\x0a\x22\x0avar:= aString.\x0a(var='') ifTrue: [var:='http://www.w3.org/2001/xml-events'].\x0a\x09self at: 'xmlns:ev' put: var",
messageSends: ["ifTrue:", "=", "at:put:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "xmlnsXlink:",
protocol: 'attributes',
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
return self}, function($ctx1) {$ctx1.fill(self,"xmlnsXlink:",{aString:aString,var_:var_},globals.SvgTagBrush)})},
args: ["aString"],
source: "xmlnsXlink: aString\x0a|var|\x0a\x22\x0a---EN---\x0ato use the default value, enter an empty string ''\x0a---RU---\x0aчтобы использовать значение по умолчанию, укажите пустую строку ''\x0a\x22\x0avar:= aString.\x0a(var='') ifTrue: [var:='http://www.w3.org/1999/xlink'].\x0a\x09self at: 'xmlns:xlink' put: var",
messageSends: ["ifTrue:", "=", "at:put:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "y",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("y"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"y",{},globals.SvgTagBrush)})},
args: [],
source: "y\x0a\x09^ (self at: 'y') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "y1",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._at_("y1"))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"y1",{},globals.SvgTagBrush)})},
args: [],
source: "y1\x0a\x09^ (self at: 'y1') asString",
messageSends: ["asString", "at:"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "y1:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("y1",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"y1:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "y1: aValue\x0a\x09self at: 'y1' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "y:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("y",_st(aValue)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"y:",{aValue:aValue},globals.SvgTagBrush)})},
args: ["aValue"],
source: "y: aValue\x0a\x09self at: 'y' put: aValue asString.",
messageSends: ["at:put:", "asString"],
referencedClasses: []
}),
globals.SvgTagBrush);


smalltalk.addMethod(
smalltalk.method({
selector: "altGlyph",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("altGlyph");
return $1;
}, function($ctx1) {$ctx1.fill(self,"altGlyph",{},globals.HTMLCanvas)})},
args: [],
source: "altGlyph\x0a\x09^ self svgTag: 'altGlyph'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "altGlyph:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._altGlyph())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"altGlyph:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "altGlyph: anObject\x0a\x09^ self altGlyph with: anObject",
messageSends: ["with:", "altGlyph"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "altGlyphDef",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("altGlyphDef");
return $1;
}, function($ctx1) {$ctx1.fill(self,"altGlyphDef",{},globals.HTMLCanvas)})},
args: [],
source: "altGlyphDef\x0a\x09^ self svgTag: 'altGlyphDef'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "altGlyphDef:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._altGlyphDef())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"altGlyphDef:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "altGlyphDef: anObject\x0a\x09^ self altGlyphDef with: anObject",
messageSends: ["with:", "altGlyphDef"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "altGlyphItem",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("altGlyphItem");
return $1;
}, function($ctx1) {$ctx1.fill(self,"altGlyphItem",{},globals.HTMLCanvas)})},
args: [],
source: "altGlyphItem\x0a\x09^ self svgTag: 'altGlyphItem'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "altGlyphItem:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._altGlyphItem())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"altGlyphItem:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "altGlyphItem: anObject\x0a\x09^ self altGlyphItem with: anObject",
messageSends: ["with:", "altGlyphItem"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "animate",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("animate");
return $1;
}, function($ctx1) {$ctx1.fill(self,"animate",{},globals.HTMLCanvas)})},
args: [],
source: "animate\x0a\x09^ self svgTag: 'animate'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "animate:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._animate())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"animate:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "animate: anObject\x0a\x09^ self animate with: anObject",
messageSends: ["with:", "animate"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "animateColor",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("animateColor");
return $1;
}, function($ctx1) {$ctx1.fill(self,"animateColor",{},globals.HTMLCanvas)})},
args: [],
source: "animateColor\x0a\x09^ self svgTag: 'animateColor'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "animateColor:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._animateColor())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"animateColor:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "animateColor: anObject\x0a\x09^ self animateColor with: anObject",
messageSends: ["with:", "animateColor"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "animateMotion",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("animateMotion");
return $1;
}, function($ctx1) {$ctx1.fill(self,"animateMotion",{},globals.HTMLCanvas)})},
args: [],
source: "animateMotion\x0a\x09^ self svgTag: 'animateMotion'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "animateMotion:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._animateMotion())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"animateMotion:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "animateMotion: anObject\x0a\x09^ self animateMotion with: anObject",
messageSends: ["with:", "animateMotion"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "animateTransform",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("animateTransform");
return $1;
}, function($ctx1) {$ctx1.fill(self,"animateTransform",{},globals.HTMLCanvas)})},
args: [],
source: "animateTransform\x0a\x09^ self svgTag: 'animateTransform'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "animateTransform:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._animateTransform())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"animateTransform:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "animateTransform: anObject\x0a\x09^ self animateTransform with: anObject",
messageSends: ["with:", "animateTransform"],
referencedClasses: []
}),
globals.HTMLCanvas);

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
selector: "clipPath",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("clipPath");
return $1;
}, function($ctx1) {$ctx1.fill(self,"clipPath",{},globals.HTMLCanvas)})},
args: [],
source: "clipPath\x0a\x09^ self svgTag: 'clipPath'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "clipPath:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._clipPath())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"clipPath:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "clipPath: anObject\x0a\x09^ self clipPath with: anObject",
messageSends: ["with:", "clipPath"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "colorProfile",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("color-profile");
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorProfile",{},globals.HTMLCanvas)})},
args: [],
source: "colorProfile\x0a\x09^ self svgTag: 'color-profile'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "colorProfile:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorProfile())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorProfile:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "colorProfile: anObject\x0a\x09^ self colorProfile with: anObject",
messageSends: ["with:", "colorProfile"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "cursor",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("cursor");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cursor",{},globals.HTMLCanvas)})},
args: [],
source: "cursor\x0a\x09^ self svgTag: 'cursor'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "cursor:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._cursor())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"cursor:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "cursor: anObject\x0a\x09^ self cursor with: anObject",
messageSends: ["with:", "cursor"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "defs",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("defs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"defs",{},globals.HTMLCanvas)})},
args: [],
source: "defs\x0a\x09^ self svgTag: 'defs'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "defs:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._defs())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defs:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "defs: anObject\x0a\x09^ self defs with: anObject",
messageSends: ["with:", "defs"],
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
selector: "feBlend",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("feBlend");
return $1;
}, function($ctx1) {$ctx1.fill(self,"feBlend",{},globals.HTMLCanvas)})},
args: [],
source: "feBlend\x0a\x09^ self svgTag: 'feBlend'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feBlend:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._feBlend())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"feBlend:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "feBlend: anObject\x0a\x09^ self feBlend with: anObject",
messageSends: ["with:", "feBlend"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feColorMatrix",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("feColorMatrix");
return $1;
}, function($ctx1) {$ctx1.fill(self,"feColorMatrix",{},globals.HTMLCanvas)})},
args: [],
source: "feColorMatrix\x0a\x09^ self svgTag: 'feColorMatrix'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feColorMatrix:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._feColorMatrix())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"feColorMatrix:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "feColorMatrix: anObject\x0a\x09^ self feColorMatrix with: anObject",
messageSends: ["with:", "feColorMatrix"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feComponentTransfer",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("feComponentTransfer");
return $1;
}, function($ctx1) {$ctx1.fill(self,"feComponentTransfer",{},globals.HTMLCanvas)})},
args: [],
source: "feComponentTransfer\x0a\x09^ self svgTag: 'feComponentTransfer'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feComponentTransfer:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._feComponentTransfer())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"feComponentTransfer:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "feComponentTransfer: anObject\x0a\x09^ self feComponentTransfer with: anObject",
messageSends: ["with:", "feComponentTransfer"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feComposite",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("feComposite");
return $1;
}, function($ctx1) {$ctx1.fill(self,"feComposite",{},globals.HTMLCanvas)})},
args: [],
source: "feComposite\x0a\x09^ self svgTag: 'feComposite'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feComposite:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._feComposite())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"feComposite:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "feComposite: anObject\x0a\x09^ self feComposite with: anObject",
messageSends: ["with:", "feComposite"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feConvolveMatrix",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("feConvolveMatrix");
return $1;
}, function($ctx1) {$ctx1.fill(self,"feConvolveMatrix",{},globals.HTMLCanvas)})},
args: [],
source: "feConvolveMatrix\x0a\x09^ self svgTag: 'feConvolveMatrix'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feConvolveMatrix:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._feConvolveMatrix())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"feConvolveMatrix:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "feConvolveMatrix: anObject\x0a\x09^ self feConvolveMatrix with: anObject",
messageSends: ["with:", "feConvolveMatrix"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feDiffuseLighting",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("feDiffuseLighting");
return $1;
}, function($ctx1) {$ctx1.fill(self,"feDiffuseLighting",{},globals.HTMLCanvas)})},
args: [],
source: "feDiffuseLighting\x0a\x09^ self svgTag: 'feDiffuseLighting'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feDiffuseLighting:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._feDiffuseLighting())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"feDiffuseLighting:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "feDiffuseLighting: anObject\x0a\x09^ self feDiffuseLighting with: anObject",
messageSends: ["with:", "feDiffuseLighting"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feDisplacementMap",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("feDisplacementMap");
return $1;
}, function($ctx1) {$ctx1.fill(self,"feDisplacementMap",{},globals.HTMLCanvas)})},
args: [],
source: "feDisplacementMap\x0a\x09^ self svgTag: 'feDisplacementMap'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feDisplacementMap:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._feDisplacementMap())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"feDisplacementMap:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "feDisplacementMap: anObject\x0a\x09^ self feDisplacementMap with: anObject",
messageSends: ["with:", "feDisplacementMap"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feDistantLight",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("feDistantLight");
return $1;
}, function($ctx1) {$ctx1.fill(self,"feDistantLight",{},globals.HTMLCanvas)})},
args: [],
source: "feDistantLight\x0a\x09^ self svgTag: 'feDistantLight'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feDistantLight:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._feDistantLight())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"feDistantLight:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "feDistantLight: anObject\x0a\x09^ self feDistantLight with: anObject",
messageSends: ["with:", "feDistantLight"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feFlood",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("feFlood");
return $1;
}, function($ctx1) {$ctx1.fill(self,"feFlood",{},globals.HTMLCanvas)})},
args: [],
source: "feFlood\x0a\x09^ self svgTag: 'feFlood'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feFlood:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._feFlood())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"feFlood:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "feFlood: anObject\x0a\x09^ self feFlood with: anObject",
messageSends: ["with:", "feFlood"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feFuncA",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("feFuncA");
return $1;
}, function($ctx1) {$ctx1.fill(self,"feFuncA",{},globals.HTMLCanvas)})},
args: [],
source: "feFuncA\x0a\x09^ self svgTag: 'feFuncA'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feFuncA:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._feFuncA())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"feFuncA:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "feFuncA: anObject\x0a\x09^ self feFuncA with: anObject",
messageSends: ["with:", "feFuncA"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feFuncB",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("feFuncB");
return $1;
}, function($ctx1) {$ctx1.fill(self,"feFuncB",{},globals.HTMLCanvas)})},
args: [],
source: "feFuncB\x0a\x09^ self svgTag: 'feFuncB'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feFuncB:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._feFuncB())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"feFuncB:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "feFuncB: anObject\x0a\x09^ self feFuncB with: anObject",
messageSends: ["with:", "feFuncB"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feFuncG",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("feFuncG");
return $1;
}, function($ctx1) {$ctx1.fill(self,"feFuncG",{},globals.HTMLCanvas)})},
args: [],
source: "feFuncG\x0a\x09^ self svgTag: 'feFuncG'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feFuncG:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._feFuncG())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"feFuncG:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "feFuncG: anObject\x0a\x09^ self feFuncG with: anObject",
messageSends: ["with:", "feFuncG"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feFuncR",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("feFuncR");
return $1;
}, function($ctx1) {$ctx1.fill(self,"feFuncR",{},globals.HTMLCanvas)})},
args: [],
source: "feFuncR\x0a\x09^ self svgTag: 'feFuncR'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feFuncR:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._feFuncR())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"feFuncR:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "feFuncR: anObject\x0a\x09^ self feFuncR with: anObject",
messageSends: ["with:", "feFuncR"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feGaussianBlur",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("feGaussianBlur");
return $1;
}, function($ctx1) {$ctx1.fill(self,"feGaussianBlur",{},globals.HTMLCanvas)})},
args: [],
source: "feGaussianBlur\x0a\x09^ self svgTag: 'feGaussianBlur'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feGaussianBlur:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._feGaussianBlur())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"feGaussianBlur:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "feGaussianBlur: anObject\x0a\x09^ self feGaussianBlur with: anObject",
messageSends: ["with:", "feGaussianBlur"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feImage",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("feImage");
return $1;
}, function($ctx1) {$ctx1.fill(self,"feImage",{},globals.HTMLCanvas)})},
args: [],
source: "feImage\x0a\x09^ self svgTag: 'feImage'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feImage:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._feImage())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"feImage:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "feImage: anObject\x0a\x09^ self feImage with: anObject",
messageSends: ["with:", "feImage"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feMerge",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("feMerge");
return $1;
}, function($ctx1) {$ctx1.fill(self,"feMerge",{},globals.HTMLCanvas)})},
args: [],
source: "feMerge\x0a\x09^ self svgTag: 'feMerge'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feMerge:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._feMerge())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"feMerge:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "feMerge: anObject\x0a\x09^ self feMerge with: anObject",
messageSends: ["with:", "feMerge"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feMergeNode",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("feMergeNode");
return $1;
}, function($ctx1) {$ctx1.fill(self,"feMergeNode",{},globals.HTMLCanvas)})},
args: [],
source: "feMergeNode\x0a\x09^ self svgTag: 'feMergeNode'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "feMergeNode:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._feMergeNode())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"feMergeNode:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "feMergeNode: anObject\x0a\x09^ self feMergeNode with: anObject",
messageSends: ["with:", "feMergeNode"],
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
selector: "mpath",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("mpath");
return $1;
}, function($ctx1) {$ctx1.fill(self,"mpath",{},globals.HTMLCanvas)})},
args: [],
source: "mpath\x0a\x09^ self svgTag: 'mpath'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "mpath:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._mpath())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"mpath:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "mpath: anObject\x0a\x09^ self mpath with: anObject",
messageSends: ["with:", "mpath"],
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
selector: "set",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._svgTag_("set");
return $1;
}, function($ctx1) {$ctx1.fill(self,"set",{},globals.HTMLCanvas)})},
args: [],
source: "set\x0a\x09^ self svgTag: 'set'",
messageSends: ["svgTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "set:",
protocol: '*SvgAmberTools',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._set())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"set:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "set: anObject\x0a\x09^ self set with: anObject",
messageSends: ["with:", "set"],
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

});
