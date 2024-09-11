// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('taoensso.truss.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
taoensso.truss.impl.rsome = (function taoensso$truss$impl$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var temp__5804__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(temp__5804__auto__)){
var p = temp__5804__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});
taoensso.truss.impl.revery_QMARK_ = (function taoensso$truss$impl$revery_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(null);
}
}),true,coll);
});
taoensso.truss.impl.revery = (function taoensso$truss$impl$revery(pred,coll){
if(cljs.core.truth_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(null);
}
}),true,coll))){
return coll;
} else {
return null;
}
});
taoensso.truss.impl.ensure_set = (function taoensso$truss$impl$ensure_set(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
return cljs.core.set(x);
}
});
var ensure_set_15977 = taoensso.truss.impl.ensure_set;
taoensso.truss.impl.ks_EQ_ = (function taoensso$truss$impl$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),(ensure_set_15977.cljs$core$IFn$_invoke$arity$1 ? ensure_set_15977.cljs$core$IFn$_invoke$arity$1(ks) : ensure_set_15977.call(null,ks)));
});

taoensso.truss.impl.ks_LT__EQ_ = (function taoensso$truss$impl$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),(ensure_set_15977.cljs$core$IFn$_invoke$arity$1 ? ensure_set_15977.cljs$core$IFn$_invoke$arity$1(ks) : ensure_set_15977.call(null,ks)));
});

taoensso.truss.impl.ks_GT__EQ_ = (function taoensso$truss$impl$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),(ensure_set_15977.cljs$core$IFn$_invoke$arity$1 ? ensure_set_15977.cljs$core$IFn$_invoke$arity$1(ks) : ensure_set_15977.call(null,ks)));
});

taoensso.truss.impl.ks_nnil_QMARK_ = (function taoensso$truss$impl$ks_nnil_QMARK_(ks,m){
return taoensso.truss.impl.revery_QMARK_((function (p1__15976_SHARP_){
return (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__15976_SHARP_) == null)));
}),ks);
});
taoensso.truss.impl.default_error_fn = (function taoensso$truss$impl$default_error_fn(data_){
var data = cljs.core.deref(data_);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$msg__.cljs$core$IFn$_invoke$arity$1(data)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data,cljs.core.cst$kw$msg__));
});
taoensso.truss.impl._STAR_data_STAR_ = null;
taoensso.truss.impl._STAR_error_fn_STAR_ = taoensso.truss.impl.default_error_fn;
taoensso.truss.impl.safe_pred_forms = (function (){var names = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 25, [cljs.core.cst$sym$fn_QMARK_,"null",cljs.core.cst$sym$vector_QMARK_,"null",cljs.core.cst$sym$boolean,"null",cljs.core.cst$sym$some_QMARK_,"null",cljs.core.cst$sym$sequential_QMARK_,"null",cljs.core.cst$sym$float_QMARK_,"null",cljs.core.cst$sym$set_QMARK_,"null",cljs.core.cst$sym$reversible_QMARK_,"null",cljs.core.cst$sym$identity,"null",cljs.core.cst$sym$string_QMARK_,"null",cljs.core.cst$sym$associative_QMARK_,"null",cljs.core.cst$sym$keyword_QMARK_,"null",cljs.core.cst$sym$counted_QMARK_,"null",cljs.core.cst$sym$sorted_QMARK_,"null",cljs.core.cst$sym$nil_QMARK_,"null",cljs.core.cst$sym$not,"null",cljs.core.cst$sym$true_QMARK_,"null",cljs.core.cst$sym$integer_QMARK_,"null",cljs.core.cst$sym$delay_QMARK_,"null",cljs.core.cst$sym$ifn_QMARK_,"null",cljs.core.cst$sym$false_QMARK_,"null",cljs.core.cst$sym$list_QMARK_,"null",cljs.core.cst$sym$number_QMARK_,"null",cljs.core.cst$sym$symbol_QMARK_,"null",cljs.core.cst$sym$coll_QMARK_,"null"], null), null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15978_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.core",p1__15978_SHARP_);
}),names)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15979_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",p1__15979_SHARP_);
}),names));
})();
taoensso.truss.impl.safe_pred = (function taoensso$truss$impl$safe_pred(pred){
return (function (x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e15980){if((e15980 instanceof Error)){
var _ = e15980;
return null;
} else {
throw e15980;

}
}});
});
taoensso.truss.impl.error_message = (function taoensso$truss$impl$error_message(x){
if((x instanceof Error)){
return x.message;
} else {
return null;
}
});

/**
* @constructor
*/
taoensso.truss.impl.WrappedError = (function (val){
this.val = val;
});

(taoensso.truss.impl.WrappedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val], null);
}));

(taoensso.truss.impl.WrappedError.cljs$lang$type = true);

(taoensso.truss.impl.WrappedError.cljs$lang$ctorStr = "taoensso.truss.impl/WrappedError");

(taoensso.truss.impl.WrappedError.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.truss.impl/WrappedError");
}));

/**
 * Positional factory function for taoensso.truss.impl/WrappedError.
 */
taoensso.truss.impl.__GT_WrappedError = (function taoensso$truss$impl$__GT_WrappedError(val){
return (new taoensso.truss.impl.WrappedError(val));
});

taoensso.truss.impl._assertion_error = (function taoensso$truss$impl$_assertion_error(msg){
return (new Error(msg));
});
taoensso.truss.impl._dummy_error = ({});
taoensso.truss.impl._invar_violation_BANG_ = (function taoensso$truss$impl$_invar_violation_BANG_(elidable_QMARK_,ns_sym,_QMARK_line,_QMARK_column,_QMARK_file,pred_form,pred_rsym,arg_form,arg,_QMARK_err,_QMARK_data_fn){
var temp__5804__auto__ = taoensso.truss.impl._STAR_error_fn_STAR_;
if(cljs.core.truth_(temp__5804__auto__)){
var error_fn = temp__5804__auto__;
var G__15983 = (new cljs.core.Delay((function (){
var instant = (new Date());
var undefn_arg_QMARK_ = (arg instanceof taoensso.truss.impl.WrappedError);
var arg_val = ((undefn_arg_QMARK_)?cljs.core.cst$sym$truss_SLASH_undefined_DASH_arg:arg);
var arg_type = ((undefn_arg_QMARK_)?cljs.core.cst$sym$truss_SLASH_undefined_DASH_arg:cljs.core.type(arg));
var _QMARK_err__$1 = (((taoensso.truss.impl._dummy_error === _QMARK_err))?null:(((_QMARK_err instanceof taoensso.truss.impl.WrappedError))?_QMARK_err.val:_QMARK_err
));
var msg_ = (new cljs.core.Delay((function (){
var msg = ["Invariant failed at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym),(cljs.core.truth_(_QMARK_line)?["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_line),(cljs.core.truth_(_QMARK_column)?[",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_column)].join(''):null),"]"].join(''):null),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,pred_form,(new cljs.core.List(null,arg_form,null,(1),null)),(2),null)))].join('');
var temp__5802__auto__ = _QMARK_err__$1;
if(cljs.core.truth_(temp__5802__auto__)){
var err = temp__5802__auto__;
var err_msg = taoensso.truss.impl.error_message(err);
if(undefn_arg_QMARK_){
return [msg,"\r\n\r\nError evaluating arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err_msg)].join('');
} else {
return [msg,"\r\n\r\nError evaluating pred: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err_msg)].join('');
}
} else {
return msg;
}
}),null));
var _QMARK_data = (function (){var dynamic = taoensso.truss.impl._STAR_data_STAR_;
var arg__$1 = (function (){var temp__5804__auto____$1 = _QMARK_data_fn;
if(cljs.core.truth_(temp__5804__auto____$1)){
var data_fn = temp__5804__auto____$1;
try{return (data_fn.cljs$core$IFn$_invoke$arity$0 ? data_fn.cljs$core$IFn$_invoke$arity$0() : data_fn.call(null));
}catch (e15984){if((e15984 instanceof Error)){
var e = e15984;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$truss_SLASH_error,e], null);
} else {
throw e15984;

}
}} else {
return null;
}
})();
if(cljs.core.truth_((function (){var or__5002__auto__ = dynamic;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return arg__$1;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dynamic,dynamic,cljs.core.cst$kw$arg,arg__$1], null);
} else {
return null;
}
})();
var loc = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ns,ns_sym], null);
var loc__$1 = (function (){var temp__5802__auto__ = _QMARK_line;
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(loc,cljs.core.cst$kw$line,v);
} else {
return loc;
}
})();
var loc__$2 = (function (){var temp__5802__auto__ = _QMARK_column;
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(loc__$1,cljs.core.cst$kw$column,v);
} else {
return loc__$1;
}
})();
var loc__$3 = (function (){var temp__5802__auto__ = _QMARK_file;
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(loc__$2,cljs.core.cst$kw$file,v);
} else {
return loc__$2;
}
})();
var output = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$msg__,msg_,cljs.core.cst$kw$dt,instant,cljs.core.cst$kw$pred,(function (){var or__5002__auto__ = pred_rsym;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return pred_form;
}
})(),cljs.core.cst$kw$arg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$form,arg_form,cljs.core.cst$kw$value,arg_val,cljs.core.cst$kw$type,arg_type], null),cljs.core.cst$kw$env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$elidable_QMARK_,elidable_QMARK_,cljs.core.cst$kw$_STAR_assert_STAR_,cljs.core._STAR_assert_STAR_], null),cljs.core.cst$kw$loc,loc__$3], null);
var output__$1 = (function (){var temp__5802__auto__ = _QMARK_data;
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(output,cljs.core.cst$kw$data,v);
} else {
return output;
}
})();
var output__$2 = (function (){var temp__5802__auto__ = _QMARK_err__$1;
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(output__$1,cljs.core.cst$kw$err,v);
} else {
return output__$1;
}
})();
return output__$2;
}),null));
return (error_fn.cljs$core$IFn$_invoke$arity$1 ? error_fn.cljs$core$IFn$_invoke$arity$1(G__15983) : error_fn.call(null,G__15983));
} else {
return null;
}
});
