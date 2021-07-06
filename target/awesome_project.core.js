goog.provide('awesome_project.core');
if((typeof awesome_project !== 'undefined') && (typeof awesome_project.core !== 'undefined') && (typeof awesome_project.core.splash_img !== 'undefined')){
} else {
awesome_project.core.splash_img = require("../assets/shadow-cljs.png");
}
if((typeof awesome_project !== 'undefined') && (typeof awesome_project.core !== 'undefined') && (typeof awesome_project.core.counter !== 'undefined')){
} else {
awesome_project.core.counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
awesome_project.core.root = (function awesome_project$core$root(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,"Hello!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),awesome_project.core.splash_img,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.TouchableOpacity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fn","on-press","fn/on-press",-1763599736),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(awesome_project.core.counter,cljs.core.inc);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(20),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(5),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),"Tap!"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(awesome_project.core.counter))], null)], null);
});
awesome_project.core.start = (function awesome_project$core$start(){
return shadow.react_native.render_root("AwesomeProject",reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [awesome_project.core.root], null)));
});
awesome_project.core.init = (function awesome_project$core$init(){
return awesome_project.core.start();
});

//# sourceMappingURL=awesome_project.core.js.map
