goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33369,res){
var map__33370 = p__33369;
var map__33370__$1 = cljs.core.__destructure_map(map__33370);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33370__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33370__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33371 = res;
var G__33371__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33371,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33371);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33371__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33371__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33375 = arguments.length;
switch (G__33375) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33377,msg,handlers,timeout_after_ms){
var map__33378 = p__33377;
var map__33378__$1 = cljs.core.__destructure_map(map__33378);
var runtime = map__33378__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33378__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33568 = arguments.length;
var i__4830__auto___33570 = (0);
while(true){
if((i__4830__auto___33570 < len__4829__auto___33568)){
args__4835__auto__.push((arguments[i__4830__auto___33570]));

var G__33572 = (i__4830__auto___33570 + (1));
i__4830__auto___33570 = G__33572;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33392,ev,args){
var map__33393 = p__33392;
var map__33393__$1 = cljs.core.__destructure_map(map__33393);
var runtime = map__33393__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33393__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33394 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33397 = null;
var count__33398 = (0);
var i__33399 = (0);
while(true){
if((i__33399 < count__33398)){
var ext = chunk__33397.cljs$core$IIndexed$_nth$arity$2(null,i__33399);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33574 = seq__33394;
var G__33575 = chunk__33397;
var G__33576 = count__33398;
var G__33577 = (i__33399 + (1));
seq__33394 = G__33574;
chunk__33397 = G__33575;
count__33398 = G__33576;
i__33399 = G__33577;
continue;
} else {
var G__33579 = seq__33394;
var G__33580 = chunk__33397;
var G__33581 = count__33398;
var G__33583 = (i__33399 + (1));
seq__33394 = G__33579;
chunk__33397 = G__33580;
count__33398 = G__33581;
i__33399 = G__33583;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33394);
if(temp__5753__auto__){
var seq__33394__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33394__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__33394__$1);
var G__33585 = cljs.core.chunk_rest(seq__33394__$1);
var G__33586 = c__4649__auto__;
var G__33587 = cljs.core.count(c__4649__auto__);
var G__33588 = (0);
seq__33394 = G__33585;
chunk__33397 = G__33586;
count__33398 = G__33587;
i__33399 = G__33588;
continue;
} else {
var ext = cljs.core.first(seq__33394__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33590 = cljs.core.next(seq__33394__$1);
var G__33591 = null;
var G__33592 = (0);
var G__33593 = (0);
seq__33394 = G__33590;
chunk__33397 = G__33591;
count__33398 = G__33592;
i__33399 = G__33593;
continue;
} else {
var G__33594 = cljs.core.next(seq__33394__$1);
var G__33595 = null;
var G__33596 = (0);
var G__33597 = (0);
seq__33394 = G__33594;
chunk__33397 = G__33595;
count__33398 = G__33596;
i__33399 = G__33597;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33383){
var G__33385 = cljs.core.first(seq33383);
var seq33383__$1 = cljs.core.next(seq33383);
var G__33386 = cljs.core.first(seq33383__$1);
var seq33383__$2 = cljs.core.next(seq33383__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33385,G__33386,seq33383__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33429,p__33430){
var map__33437 = p__33429;
var map__33437__$1 = cljs.core.__destructure_map(map__33437);
var runtime = map__33437__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33437__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33438 = p__33430;
var map__33438__$1 = cljs.core.__destructure_map(map__33438);
var msg = map__33438__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33438__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33439 = cljs.core.deref(state_ref);
var map__33439__$1 = cljs.core.__destructure_map(map__33439);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33446){
var map__33447 = p__33446;
var map__33447__$1 = cljs.core.__destructure_map(map__33447);
var runtime = map__33447__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33447__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33451,msg){
var map__33452 = p__33451;
var map__33452__$1 = cljs.core.__destructure_map(map__33452);
var runtime = map__33452__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33452__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33458,key,p__33459){
var map__33460 = p__33458;
var map__33460__$1 = cljs.core.__destructure_map(map__33460);
var state = map__33460__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33460__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33461 = p__33459;
var map__33461__$1 = cljs.core.__destructure_map(map__33461);
var spec = map__33461__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33461__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33479,key,spec){
var map__33480 = p__33479;
var map__33480__$1 = cljs.core.__destructure_map(map__33480);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33480__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33486_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33486_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33487_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33487_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33488_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33488_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33489_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33489_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33490_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33490_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33507,key){
var map__33508 = p__33507;
var map__33508__$1 = cljs.core.__destructure_map(map__33508);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33508__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33517,msg){
var map__33519 = p__33517;
var map__33519__$1 = cljs.core.__destructure_map(map__33519);
var runtime = map__33519__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33519__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33527,p__33528){
var map__33529 = p__33527;
var map__33529__$1 = cljs.core.__destructure_map(map__33529);
var runtime = map__33529__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33529__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33530 = p__33528;
var map__33530__$1 = cljs.core.__destructure_map(map__33530);
var msg = map__33530__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33530__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33530__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33538 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33541 = null;
var count__33542 = (0);
var i__33543 = (0);
while(true){
if((i__33543 < count__33542)){
var map__33553 = chunk__33541.cljs$core$IIndexed$_nth$arity$2(null,i__33543);
var map__33553__$1 = cljs.core.__destructure_map(map__33553);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33553__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33631 = seq__33538;
var G__33632 = chunk__33541;
var G__33633 = count__33542;
var G__33634 = (i__33543 + (1));
seq__33538 = G__33631;
chunk__33541 = G__33632;
count__33542 = G__33633;
i__33543 = G__33634;
continue;
} else {
var G__33635 = seq__33538;
var G__33636 = chunk__33541;
var G__33637 = count__33542;
var G__33638 = (i__33543 + (1));
seq__33538 = G__33635;
chunk__33541 = G__33636;
count__33542 = G__33637;
i__33543 = G__33638;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33538);
if(temp__5753__auto__){
var seq__33538__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33538__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__33538__$1);
var G__33639 = cljs.core.chunk_rest(seq__33538__$1);
var G__33640 = c__4649__auto__;
var G__33641 = cljs.core.count(c__4649__auto__);
var G__33642 = (0);
seq__33538 = G__33639;
chunk__33541 = G__33640;
count__33542 = G__33641;
i__33543 = G__33642;
continue;
} else {
var map__33557 = cljs.core.first(seq__33538__$1);
var map__33557__$1 = cljs.core.__destructure_map(map__33557);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33557__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33643 = cljs.core.next(seq__33538__$1);
var G__33644 = null;
var G__33645 = (0);
var G__33646 = (0);
seq__33538 = G__33643;
chunk__33541 = G__33644;
count__33542 = G__33645;
i__33543 = G__33646;
continue;
} else {
var G__33647 = cljs.core.next(seq__33538__$1);
var G__33648 = null;
var G__33649 = (0);
var G__33650 = (0);
seq__33538 = G__33647;
chunk__33541 = G__33648;
count__33542 = G__33649;
i__33543 = G__33650;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
