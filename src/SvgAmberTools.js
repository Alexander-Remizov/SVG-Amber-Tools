define("amber-svgambertools/SvgAmberTools", ["amber/boot", "amber_core/Web", "amber_core/Kernel-Objects"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('SvgAmberTools');
smalltalk.packages["SvgAmberTools"].transport = {"type":"amd","amdNamespace":"amber-svgambertools"};

smalltalk.addClass('SVGWidget', globals.Widget, ['setAttribute'], 'SvgAmberTools');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
_st(html)._h1_("например");
$1=_st(html)._svg();
_st($1)._id_("svg");
_st($1)._version_("");
_st($1)._xmlns_("");
_st($1)._xmlnsEv_("");
_st($1)._xmlnsXlink_("");
_st($1)._height_("200");
$ctx1.sendIdx["height:"]=1;
_st($1)._width_("300");
$ctx1.sendIdx["width:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._rect();
_st($3)._height_("100");
_st($3)._width_("150");
$4=_st($3)._style_("fill:#1a1a1a;fill-rule:evenodd;stroke:#ff0000;stroke-width:5;");
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
self._setAttribute();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.SVGWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x0ahtml h1: 'например'.\x0a\x0ahtml svg id:'svg'; version:''; xmlns:''; xmlnsEv:''; xmlnsXlink:''; height: '200'; width: '300'; with: [\x0a\x09html rect height: '100'; width: '150'; style:'fill:#1a1a1a;fill-rule:evenodd;stroke:#ff0000;stroke-width:5;'\x0a].\x0aself setAttribute.\x0a\x22html button class: 'btn btn-default'; at: 'type' put: 'button';\x09\x0a\x09onClick: [self setAttribute.];  with: '!!!'\x22",
messageSends: ["h1:", "id:", "svg", "version:", "xmlns:", "xmlnsEv:", "xmlnsXlink:", "height:", "width:", "with:", "rect", "style:", "setAttribute"],
referencedClasses: []
}),
globals.SVGWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setAttribute",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var testTest=document.getElementsByTagName('svg')[0].setAttribute('baseProfile', 'full');
return self}, function($ctx1) {$ctx1.fill(self,"setAttribute",{},globals.SVGWidget)})},
args: [],
source: "setAttribute\x0a<var testTest=document.getElementsByTagName('svg')[0].setAttribute('baseProfile', 'full')>\x0a\x09",
messageSends: [],
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


smalltalk.addMethod(
smalltalk.method({
selector: "circle",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("circle");
return $1;
}, function($ctx1) {$ctx1.fill(self,"circle",{},globals.HTMLCanvas)})},
args: [],
source: "circle\x0a\x09^ self tag: 'circle'",
messageSends: ["tag:"],
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
$1=self._tag_("ellipse");
return $1;
}, function($ctx1) {$ctx1.fill(self,"ellipse",{},globals.HTMLCanvas)})},
args: [],
source: "ellipse\x0a\x09^ self tag: 'ellipse'",
messageSends: ["tag:"],
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
$1=self._tag_("g");
return $1;
}, function($ctx1) {$ctx1.fill(self,"g",{},globals.HTMLCanvas)})},
args: [],
source: "g\x0a\x09^ self tag: 'g'",
messageSends: ["tag:"],
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
$1=self._tag_("image");
return $1;
}, function($ctx1) {$ctx1.fill(self,"image",{},globals.HTMLCanvas)})},
args: [],
source: "image\x0a\x09^ self tag: 'image'",
messageSends: ["tag:"],
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
$1=self._tag_("line");
return $1;
}, function($ctx1) {$ctx1.fill(self,"line",{},globals.HTMLCanvas)})},
args: [],
source: "line\x0a\x09^ self tag: 'line'",
messageSends: ["tag:"],
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
selector: "path",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("path");
return $1;
}, function($ctx1) {$ctx1.fill(self,"path",{},globals.HTMLCanvas)})},
args: [],
source: "path\x0a\x09^ self tag: 'path'",
messageSends: ["tag:"],
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
$1=self._tag_("polygon");
return $1;
}, function($ctx1) {$ctx1.fill(self,"polygon",{},globals.HTMLCanvas)})},
args: [],
source: "polygon \x0a^ self tag: 'polygon'",
messageSends: ["tag:"],
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
$1=self._tag_("polyline");
return $1;
}, function($ctx1) {$ctx1.fill(self,"polyline",{},globals.HTMLCanvas)})},
args: [],
source: "polyline \x0a^ self tag: 'polyline'",
messageSends: ["tag:"],
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
$1=self._tag_("rect");
return $1;
}, function($ctx1) {$ctx1.fill(self,"rect",{},globals.HTMLCanvas)})},
args: [],
source: "rect \x0a^ self tag: 'rect'",
messageSends: ["tag:"],
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
$1=self._tag_("svg");
return $1;
}, function($ctx1) {$ctx1.fill(self,"svg",{},globals.HTMLCanvas)})},
args: [],
source: "svg\x0a\x09^ self tag: 'svg'",
messageSends: ["tag:"],
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
selector: "text",
protocol: '*SvgAmberTools',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("text");
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},globals.HTMLCanvas)})},
args: [],
source: "text\x0a\x09^ self tag: 'text'",
messageSends: ["tag:"],
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
