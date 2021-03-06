define("helios/Helios-Exceptions", ["amber/boot", "amber_core/Kernel-Exceptions"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Helios-Exceptions');
smalltalk.packages["Helios-Exceptions"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLError', globals.Error, [], 'Helios-Exceptions');
globals.HLError.comment="I am the abstract superclass of all Helios-specific errors.";


smalltalk.addClass('HLChangeForbidden', globals.HLError, [], 'Helios-Exceptions');
globals.HLChangeForbidden.comment="I get signaled when a (often user) requested change is forbidden. A confirmation message can then be displayed to the user.\x0a\x0aSee `HLModel >> withChangesDo:`.";


smalltalk.addClass('HLListItemNotFound', globals.HLError, [], 'Helios-Exceptions');
globals.HLListItemNotFound.comment="I get signaled by a `HLListWidget` when a non-existing item in the list is activated.";

});
