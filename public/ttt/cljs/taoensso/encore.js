// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIoPool');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('taoensso.truss');
goog.require('goog.object');
goog.scope(function(){
taoensso.encore.goog$module$goog$object = goog.module.get('goog.object');
});
goog.require('goog.array');
goog.scope(function(){
taoensso.encore.goog$module$goog$array = goog.module.get('goog.array');
});
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(85),(0)], null);
/**
 * Throws runtime `ExceptionInfo` to indicate an unexpected argument.
 *   Takes optional kvs for merging into exception's data map.
 * 
 *  (let [mode :unexpected]
 *    (case mode
 *      :read  (do <...>)
 *      :write (do <...>)
 *      (unexpected-arg! mode
 *        :context  `my-function
 *        :param    'mode
 *        :expected #{:read :write}))) =>
 * 
 *  Unexpected argument: :unexpected
 *  {:arg {:value :unexpected, :type clojure.lang.Keyword},
 *   :context 'taoensso.encore/my-function
 *   :param 'mode
 *   :expected #{:read :write}}
 */
taoensso.encore.unexpected_arg_BANG_ = (function taoensso$encore$unexpected_arg_BANG_(var_args){
var G__16997 = arguments.length;
switch (G__16997) {
case 1:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 9:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,null);
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (arg,opts){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$msg);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ["Unexpected argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)].join('');
}
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,arg,cljs.core.cst$kw$type,cljs.core.type(arg)], null)], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$msg)));
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (arg,k1,v1){
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1]));
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (arg,k1,v1,k2,v2){
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2]));
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$7 = (function (arg,k1,v1,k2,v2,k3,v3){
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2,k3,v3]));
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (arg,k1,v1,k2,v2,k3,v3,k4,v4){
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2,k3,v3,k4,v4]));
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$lang$maxFixedArity = 9);

/**
 * Same as `core/some?` (added in Clojure v1.6).
 */
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});
var ret__5781__auto___17010 = (function (){
/**
 * Like `or`, but returns the first non-nil form (may be falsey).
 */
taoensso.encore.or_some = (function taoensso$encore$or_some(var_args){
var G__17009 = arguments.length;
switch (G__17009) {
case 2:
return taoensso.encore.or_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.or_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___17012 = arguments.length;
var i__5727__auto___17013 = (0);
while(true){
if((i__5727__auto___17013 < len__5726__auto___17012)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17013]));

var G__17014 = (i__5727__auto___17013 + (1));
i__5727__auto___17013 = G__17014;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.or_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.or_some.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
}));

(taoensso.encore.or_some.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
}));

(taoensso.encore.or_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$x____17003____auto____,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_identical_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x____17003____auto____,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_or_DASH_some,null,(1),null)),next))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x____17003____auto____,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

/** @this {Function} */
(taoensso.encore.or_some.cljs$lang$applyTo = (function (seq17005){
var G__17006 = cljs.core.first(seq17005);
var seq17005__$1 = cljs.core.next(seq17005);
var G__17007 = cljs.core.first(seq17005__$1);
var seq17005__$2 = cljs.core.next(seq17005__$1);
var G__17008 = cljs.core.first(seq17005__$2);
var seq17005__$3 = cljs.core.next(seq17005__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17006,G__17007,G__17008,seq17005__$3);
}));

(taoensso.encore.or_some.cljs$lang$maxFixedArity = (3));

return null;
})()
;
(taoensso.encore.or_some.cljs$lang$macro = true);

/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args> <attrs>]
 *   with support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var G__17016 = arguments.length;
switch (G__17016) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3(sym,args,null);
}));

(taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__17017 = ((((typeof cljs.core.first(args) === 'string') && (cljs.core.next(args))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17017,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17017,(1),null);
var vec__17020 = ((((cljs.core.map_QMARK_(cljs.core.first(args__$1))) && (cljs.core.next(args__$1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.next(args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17020,(0),null);
var args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17020,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$doc,_QMARK_docstring):attrs);
var attrs__$2 = (function (){var b2__1576__auto__ = cljs.core.meta(sym);
if(cljs.core.truth_(b2__1576__auto__)){
var m = b2__1576__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,attrs__$1);
} else {
return attrs__$1;
}
})();
var attrs__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(sym,attrs__$3),args__$2,attrs__$3], null);
}));

(taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3);

taoensso.encore.core_merge = cljs.core.merge;
taoensso.encore.core_update_in = cljs.core.update_in;

taoensso.encore.quote_arglists = (function taoensso$encore$quote_arglists(m){
var b2__1576__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$arglists);
if(cljs.core.truth_(b2__1576__auto__)){
var x = b2__1576__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$arglists,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))));
} else {
return m;
}
});
taoensso.encore.get_truss_data = taoensso.truss.get_data;
/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var G__17025 = arguments.length;
switch (G__17025) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2(null,s);
}));

(taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if((((s == null)) || ((s === "")))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$default,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var readers__$1 = ((cljs.core.keyword_identical_QMARK_(readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic))?(function (){var G__17026 = cljs.core.symbol;
var G__17027 = cljs.core.deref(cljs.reader._STAR_tag_table_STAR_);
return (taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2(G__17026,G__17027) : taoensso.encore.map_keys.call(null,G__17026,G__17027));
})():readers);
var default$__$1 = ((cljs.core.keyword_identical_QMARK_(default$,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic))?cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$readers,readers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default,default$__$1], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(opts__$1,s);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/read-edn] Unexpected arg type (expected string or nil)",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,s,cljs.core.cst$kw$type,cljs.core.type(s)], null)], null));
}
}
}));

(taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2);

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var G__17030 = arguments.length;
switch (G__17030) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2(null,x);
}));

(taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR__orig_val__17031 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__orig_val__17032 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__temp_val__17033 = null;
var _STAR_print_length_STAR__temp_val__17034 = null;
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__17033);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__17034);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__17032);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__17031);
}}));

(taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2);


/**
 * Same as `core/ex-message` (added in Clojure v1.10).
 */
taoensso.encore.ex_message = (function taoensso$encore$ex_message(ex){
if((ex instanceof Error)){
return ex.message;
} else {
return null;
}
});
/**
 * Same as `core/ex-cause` (added in Clojure v1.10).
 */
taoensso.encore.ex_cause = (function taoensso$encore$ex_cause(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.cause;
} else {
return null;
}
});
/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__1576__auto__ = (function (){var and__5000__auto__ = x;
if(cljs.core.truth_(and__5000__auto__)){
var or__5002__auto__ = cljs.core.ex_data(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(b2__1576__auto__)){
var data_map = b2__1576__auto__;
var base_map = (function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$err_DASH_type,cljs.core.type(err),cljs.core.cst$kw$err_DASH_msg,err.message,cljs.core.cst$kw$err_DASH_cause,err.cause], null);
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(base_map,data_map);
} else {
return null;
}
});


/**
 * Given an error (e.g. Throwable) and matching criteria.
 *   Returns the error if it matches all criteria, otherwise returns nil.
 * 
 *   `kind` may be:
 *  - A predicate function, (fn match? [x]) -> bool
 *  - A class (e.g. `ArithmeticException`, `AssertionError`, etc.)
 *  - `:all`     => any    platform error (Throwable or js/Error, etc.)
 *  - `:common`  => common platform error (Exception or js/Error)
 *  - `:ex-info` => a `ExceptionInfo` as created by `ex-info`
 *  - A set of `kind`s as above, at least one of which must match
 * 
 *   `pattern` may be:
 *  - A string or Regex against which `ex-message` must match
 *  - A map             against which `ex-data`    must match using `submap?`
 *  - A set of `pattern`s as above, at least one of which must match
 * 
 *   When an error with (nested) causes doesn't match, a match will be attempted
 *   against its (nested) causes.
 * 
 *   Low-level util, see also `throws`, `throws?`.
 */
taoensso.encore.matching_error = (function taoensso$encore$matching_error(var_args){
var G__17040 = arguments.length;
switch (G__17040) {
case 1:
return taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$1 = (function (err){
return err;
}));

(taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$2 = (function (kind,err){
var b2__1576__auto__ = ((cljs.core.fn_QMARK_(kind))?(kind.cljs$core$IFn$_invoke$arity$1 ? kind.cljs$core$IFn$_invoke$arity$1(err) : kind.call(null,err)):((cljs.core.set_QMARK_(kind))?(function (){var G__17041 = (function (p1__17037_SHARP_){
return taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$2(p1__17037_SHARP_,err);
});
var G__17042 = kind;
return (taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2(G__17041,G__17042) : taoensso.encore.rsome.call(null,G__17041,G__17042));
})():(function (){var G__17043 = kind;
var G__17043__$1 = (((G__17043 instanceof cljs.core.Keyword))?G__17043.fqn:null);
switch (G__17043__$1) {
case "all":
case "any":
return taoensso.encore.some_QMARK_(err);

break;
case "common":
case "default":
return (err instanceof Error);

break;
case "ex-info":
return (err instanceof cljs.core.ExceptionInfo);

break;
default:
return (err instanceof kind);

}
})()));
if(cljs.core.truth_(b2__1576__auto__)){
var match_QMARK_ = b2__1576__auto__;
return err;
} else {
return null;
}
}));

(taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$3 = (function (kind,pattern,err){
var b2__1576__auto__ = (function (){var and__5000__auto__ = taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$2(kind,err);
if(cljs.core.truth_(and__5000__auto__)){
if((pattern == null)){
return true;
} else {
if(cljs.core.set_QMARK_(pattern)){
var G__17044 = (function (p1__17038_SHARP_){
return taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$3(kind,p1__17038_SHARP_,err);
});
var G__17045 = pattern;
return (taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2(G__17044,G__17045) : taoensso.encore.rsome.call(null,G__17044,G__17045));
} else {
if(typeof pattern === 'string'){
var G__17046 = taoensso.encore.ex_message(err);
var G__17047 = pattern;
return (taoensso.encore.str_contains_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.str_contains_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17046,G__17047) : taoensso.encore.str_contains_QMARK_.call(null,G__17046,G__17047));
} else {
if(cljs.core.truth_((taoensso.encore.re_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.re_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(pattern) : taoensso.encore.re_pattern_QMARK_.call(null,pattern)))){
return cljs.core.re_find(pattern,taoensso.encore.ex_message(err));
} else {
if(cljs.core.map_QMARK_(pattern)){
var b2__1576__auto__ = cljs.core.ex_data(err);
if(cljs.core.truth_(b2__1576__auto__)){
var data = b2__1576__auto__;
return (taoensso.encore.submap_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.submap_QMARK_.cljs$core$IFn$_invoke$arity$2(data,pattern) : taoensso.encore.submap_QMARK_.call(null,data,pattern));
} else {
return null;
}
} else {
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(pattern,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$context,cljs.core.cst$sym$taoensso$encore_SLASH_matching_DASH_error,cljs.core.cst$kw$expected,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [null,"null",cljs.core.cst$sym$set,"null",cljs.core.cst$sym$map,"null",cljs.core.cst$sym$re_DASH_pattern,"null",cljs.core.cst$sym$string,"null"], null), null)], null));
}
}
}
}
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(b2__1576__auto__)){
var match_QMARK_ = b2__1576__auto__;
return err;
} else {
var b2__1576__auto____$1 = taoensso.encore.ex_cause(err);
if(cljs.core.truth_(b2__1576__auto____$1)){
var cause = b2__1576__auto____$1;
return taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$3(kind,pattern,cause);
} else {
return null;
}
}
}));

(taoensso.encore.matching_error.cljs$lang$maxFixedArity = 3);

var get_default_error_fn_17064 = (function (base_data){
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$3(base_data,cljs.core.cst$kw$error_SLASH_msg,"Error thrown during reduction");
var base_data__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(base_data,cljs.core.cst$kw$error_SLASH_msg);
return (function taoensso$encore$default_error_fn(data,cause){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(msg,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(base_data__$1,data),cause);
});
});
/**
 * Returns wrapper around given reducing function `rf` so that if `rf`
 *  throws, (error-fn <thrown-error> <contextual-data>) will be called.
 * 
 *  The default `error-fn` will rethrow the original error, wrapped in
 *  extra contextual information to aid debugging.
 * 
 *  See also `catching-xform`.
 */
taoensso.encore.catching_rf = (function taoensso$encore$catching_rf(var_args){
var G__17051 = arguments.length;
switch (G__17051) {
case 1:
return taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$1 = (function (rf){
return taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$2(get_default_error_fn_17064(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rf,rf], null)),rf);
}));

(taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$2 = (function (error_fn,rf){
var error_fn__$1 = ((cljs.core.map_QMARK_(error_fn))?get_default_error_fn_17064(error_fn):error_fn);
return (function() {
var taoensso$encore$catching_rf = null;
var taoensso$encore$catching_rf__0 = (function (){
try{return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
}catch (e17052){var t = e17052;
var G__17053 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rf,rf,cljs.core.cst$kw$call,cljs.core.list(cljs.core.cst$sym$rf)], null);
var G__17054 = t;
return (error_fn__$1.cljs$core$IFn$_invoke$arity$2 ? error_fn__$1.cljs$core$IFn$_invoke$arity$2(G__17053,G__17054) : error_fn__$1.call(null,G__17053,G__17054));
}});
var taoensso$encore$catching_rf__1 = (function (acc){
try{return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
}catch (e17055){var t = e17055;
var G__17056 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rf,rf,cljs.core.cst$kw$call,cljs.core.list(cljs.core.cst$sym$rf,cljs.core.cst$sym$acc),cljs.core.cst$kw$args,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$acc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,acc,cljs.core.cst$kw$type,cljs.core.type(acc)], null)], null)], null);
var G__17057 = t;
return (error_fn__$1.cljs$core$IFn$_invoke$arity$2 ? error_fn__$1.cljs$core$IFn$_invoke$arity$2(G__17056,G__17057) : error_fn__$1.call(null,G__17056,G__17057));
}});
var taoensso$encore$catching_rf__2 = (function (acc,in$){
try{return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
}catch (e17058){var t = e17058;
var G__17059 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rf,rf,cljs.core.cst$kw$call,cljs.core.list(cljs.core.cst$sym$rf,cljs.core.cst$sym$acc,cljs.core.cst$sym$in),cljs.core.cst$kw$args,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$acc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,acc,cljs.core.cst$kw$type,cljs.core.type(acc)], null),cljs.core.cst$kw$in,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,in$,cljs.core.cst$kw$type,cljs.core.type(in$)], null)], null)], null);
var G__17060 = t;
return (error_fn__$1.cljs$core$IFn$_invoke$arity$2 ? error_fn__$1.cljs$core$IFn$_invoke$arity$2(G__17059,G__17060) : error_fn__$1.call(null,G__17059,G__17060));
}});
var taoensso$encore$catching_rf__3 = (function (acc,k,v){
try{return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
}catch (e17061){var t = e17061;
var G__17062 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rf,rf,cljs.core.cst$kw$call,cljs.core.list(cljs.core.cst$sym$rf,cljs.core.cst$sym$acc,cljs.core.cst$sym$k,cljs.core.cst$sym$v),cljs.core.cst$kw$args,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$acc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,acc,cljs.core.cst$kw$type,cljs.core.type(acc)], null),cljs.core.cst$kw$k,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,k,cljs.core.cst$kw$type,cljs.core.type(k)], null),cljs.core.cst$kw$v,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,v,cljs.core.cst$kw$type,cljs.core.type(v)], null)], null)], null);
var G__17063 = t;
return (error_fn__$1.cljs$core$IFn$_invoke$arity$2 ? error_fn__$1.cljs$core$IFn$_invoke$arity$2(G__17062,G__17063) : error_fn__$1.call(null,G__17062,G__17063));
}});
taoensso$encore$catching_rf = function(acc,k,v){
switch(arguments.length){
case 0:
return taoensso$encore$catching_rf__0.call(this);
case 1:
return taoensso$encore$catching_rf__1.call(this,acc);
case 2:
return taoensso$encore$catching_rf__2.call(this,acc,k);
case 3:
return taoensso$encore$catching_rf__3.call(this,acc,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$catching_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$catching_rf__0;
taoensso$encore$catching_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$catching_rf__1;
taoensso$encore$catching_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$catching_rf__2;
taoensso$encore$catching_rf.cljs$core$IFn$_invoke$arity$3 = taoensso$encore$catching_rf__3;
return taoensso$encore$catching_rf;
})()
}));

(taoensso.encore.catching_rf.cljs$lang$maxFixedArity = 2);

/**
 * Like `catching-rf`, but applies to a transducer (`xform`).
 * 
 *   Makes debugging transductions much easier by greatly improving
 *   the information provided in any errors thrown by `xform` or the
 *   reducing fn:
 * 
 *  (transduce
 *    (catching-xform (comp (filter even?) (map inc))) ; Modified xform
 *    <reducing-fn>
 *    <...>)
 */
taoensso.encore.catching_xform = (function taoensso$encore$catching_xform(var_args){
var G__17067 = arguments.length;
switch (G__17067) {
case 2:
return taoensso.encore.catching_xform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return taoensso.encore.catching_xform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.catching_xform.cljs$core$IFn$_invoke$arity$2 = (function (error_fn,xform){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (rf){
return taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$2(error_fn,rf);
}),xform);
}));

(taoensso.encore.catching_xform.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.catching_rf,xform);
}));

(taoensso.encore.catching_xform.cljs$lang$maxFixedArity = 2);

/**
 * Given a {:before ?(fn []) :after ?(fn [])} map, returns cross-platform
 *   test fixtures for use by both `clojure.test` and `cljs.test`:
 * 
 *  (let [f (test-fixtures {:before (fn [] (test-setup))})]
 *    (clojure.test/use-fixtures :once f)
 *       (cljs.test/use-fixtures :once f))
 */
taoensso.encore.test_fixtures = (function taoensso$encore$test_fixtures(fixtures_map){
var e_17071 = (function (){try{if(cljs.core.map_QMARK_(fixtures_map)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17070){if((e17070 instanceof Error)){
var e_17071 = e17070;
return e_17071;
} else {
throw e17070;

}
}})();
if((e_17071 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,cljs.core.cst$sym$taoensso$encore,1174,3,"/Users/AlexRoot-Roatch/current-projects/tic-tac-toe/out/taoensso/encore.cljc",cljs.core.cst$sym$map_QMARK_,null,cljs.core.cst$sym$fixtures_DASH_map,fixtures_map,e_17071,null);
}

return fixtures_map;
});
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string'));
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return ((x === true) || (x === false));
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.nameable_QMARK_ = (function taoensso$encore$nameable_QMARK_(x){
return ((taoensso.encore.named_QMARK_(x)) || (typeof x === 'string'));
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.transient_QMARK_ = (function taoensso$encore$transient_QMARK_(x){
return (x instanceof cljs.core.ITransientCollection);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.can_meta_QMARK_ = (function taoensso$encore$can_meta_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWithMeta$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.inst_QMARK_ = (function taoensso$encore$inst_QMARK_(x){
return (x instanceof Date);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return ((taoensso.encore.ident_QMARK_(x)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__5000__auto__ = taoensso.encore.ident_QMARK_(x);
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__5000__auto____$1)){
return true;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__5000__auto__ = (x instanceof cljs.core.Symbol);
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__5000__auto____$1)){
return true;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__5000__auto__ = (x instanceof cljs.core.Keyword);
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__5000__auto____$1)){
return true;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return ((typeof x === 'string') && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")))));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return ((typeof x === 'string') && ((!(clojure.string.blank_QMARK_(x)))));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return (!(clojure.string.blank_QMARK_(x)));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(2))));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(3))));
});
/**
 * Returns true iff given a number (of standard type) that is:
 *   finite (excl. NaN and infinities).
 */
taoensso.encore.finite_num_QMARK_ = (function taoensso$encore$finite_num_QMARK_(x){
return Number.isFinite(x);
});
/**
 * Returns true iff given a number (of standard type) that is:
 *   a fixed-precision integer.
 */
taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
var and__5000__auto__ = taoensso.encore.finite_num_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
return (parseFloat(x) === parseInt(x,(10)));
} else {
return and__5000__auto__;
}
});
/**
 * Returns true iff given a number (of standard type) that is:
 *   a fixed-precision floating-point (incl. NaN and infinities).
 */
taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return ((typeof x === 'number') && ((!((parseFloat(x) === parseInt(x,(10)))))));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return (!((x < (0))));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return (x === (0));
});

taoensso.encore.nzero_num_QMARK_ = (function taoensso$encore$nzero_num_QMARK_(x){
return (!((x === (0))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (x > (0));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (x < (0));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
var and__5000__auto__ = taoensso.encore.int_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
return (!((x < (0))));
} else {
return and__5000__auto__;
}
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
var and__5000__auto__ = taoensso.encore.int_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
return (x > (0));
} else {
return and__5000__auto__;
}
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
var and__5000__auto__ = taoensso.encore.int_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
return (x < (0));
} else {
return and__5000__auto__;
}
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
var and__5000__auto__ = taoensso.encore.float_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
return (!((x < (0))));
} else {
return and__5000__auto__;
}
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
var and__5000__auto__ = taoensso.encore.float_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
return (x > (0));
} else {
return and__5000__auto__;
}
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
var and__5000__auto__ = taoensso.encore.float_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
return (x < (0));
} else {
return and__5000__auto__;
}
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
var and__5000__auto__ = taoensso.encore.int_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
return (!((x < (0))));
} else {
return and__5000__auto__;
}
});
/**
 * Returns true iff given number in unsigned unit proportion interval ∈ℝ[0,1].
 */
taoensso.encore.pnum_QMARK_ = (function taoensso$encore$pnum_QMARK_(x){
var and__5000__auto__ = typeof x === 'number';
if(and__5000__auto__){
var n = x;
return (((n >= 0.0)) && ((n <= 1.0)));
} else {
return and__5000__auto__;
}
});
/**
 * Returns true iff given number in signed unit proportion interval ∈ℝ[-1,1].
 */
taoensso.encore.rnum_QMARK_ = (function taoensso$encore$rnum_QMARK_(x){
var and__5000__auto__ = typeof x === 'number';
if(and__5000__auto__){
var n = x;
return (((n >= -1.0)) && ((n <= 1.0)));
} else {
return and__5000__auto__;
}
});
/**
 * Is `clojure.core.async` present (not necessarily loaded)?
 */
taoensso.encore.have_core_async_QMARK_ = true;
/**
 * Returns true iff given a `clojure.core.async` channel.
 */
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_(x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_(x)){
var n = cljs.core.name(x);
var b2__1576__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(b2__1576__auto__)){
var ns = b2__1576__auto__;
return [ns,"/",n].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank_trim = (function taoensso$encore$as__QMARK_nblank_trim(x){
if(typeof x === 'string'){
var s = clojure.string.trim(x);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return null;
} else {
return s;
}
} else {
return null;
}
});


taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$(x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var b2__1576__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__1576__auto__)){
var n = b2__1576__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__1576__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__1576__auto__)){
var n = b2__1576__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__1576__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__1576__auto__)){
var n = b2__1576__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__1576__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__1576__auto__)){
var n = b2__1576__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__1576__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__1576__auto__)){
var n = b2__1576__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pnum = (function taoensso$encore$as__QMARK_pnum(x){
var b2__1576__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__1576__auto__)){
var f = b2__1576__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_rnum = (function taoensso$encore$as__QMARK_rnum(x){
var b2__1576__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__1576__auto__)){
var f = b2__1576__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < -1.0)){
return -0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if(((x === true) || (x === false))){
return x;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"false")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"FALSE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")))))))){
return false;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"true")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"TRUE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"1")))))))){
return true;
} else {
return null;
}
}
}
}
});

var regex_17087 = /^[^\s@]+@[^\s@]+\.\S*[^\.]$/;
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(var_args){
var G__17084 = arguments.length;
switch (G__17084) {
case 1:
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_s){
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2((320),_QMARK_s);
}));

(taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2 = (function (max_len,_QMARK_s){
var b2__1576__auto__ = (function (){var and__5000__auto__ = _QMARK_s;
if(cljs.core.truth_(and__5000__auto__)){
return clojure.string.trim(_QMARK_s);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(b2__1576__auto__)){
var s = b2__1576__auto__;
if((cljs.core.count(s) <= max_len)){
return cljs.core.re_find(regex_17087,s);
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_email.cljs$lang$maxFixedArity = 2);


taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(var_args){
var G__17086 = arguments.length;
switch (G__17086) {
case 1:
return taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_s){
var b2__1576__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1(_QMARK_s);
if(cljs.core.truth_(b2__1576__auto__)){
var email = b2__1576__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2 = (function (max_len,_QMARK_s){
var b2__1576__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2(max_len,_QMARK_s);
if(cljs.core.truth_(b2__1576__auto__)){
var email = b2__1576__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_nemail.cljs$lang$maxFixedArity = 2);


taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e17090){var _ = e17090;
return false;
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
return null;
}
});
/**
 * Lightweight `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var G__17092 = arguments.length;
switch (G__17092) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(taoensso.encore.some_QMARK_,x,null);
}));

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(pred,x,null);
}));

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,data){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["[encore/is!] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," failed against arg: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))].join(''),(function (){var G__17093 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pred,pred,cljs.core.cst$kw$arg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,x,cljs.core.cst$kw$type,cljs.core.type(x)], null)], null);
var G__17094 = cljs.core.cst$kw$data;
var G__17095 = data;
return (taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(G__17093,G__17094,G__17095) : taoensso.encore.assoc_some.call(null,G__17093,G__17094,G__17095));
})());
}
}));

(taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3);

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(kind,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["[encore/as-",cljs.core.name(kind),"] failed against arg: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pred_DASH_kind,kind,cljs.core.cst$kw$arg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,x,cljs.core.cst$kw$type,cljs.core.type(x)], null)], null));
});
var _as_throw_17147 = taoensso.encore._as_throw;
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_nzero(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17097 = cljs.core.cst$kw$nzero;
var G__17098 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17097,G__17098) : _as_throw_17147.call(null,G__17097,G__17098));
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_nblank(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17099 = cljs.core.cst$kw$nblank;
var G__17100 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17099,G__17100) : _as_throw_17147.call(null,G__17099,G__17100));
}
});

taoensso.encore.as_nblank_trim = (function taoensso$encore$as_nblank_trim(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_nblank_trim(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17101 = cljs.core.cst$kw$nblank_DASH_trim;
var G__17102 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17101,G__17102) : _as_throw_17147.call(null,G__17101,G__17102));
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_nempty_str(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17103 = cljs.core.cst$kw$nempty_DASH_str;
var G__17104 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17103,G__17104) : _as_throw_17147.call(null,G__17103,G__17104));
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_kw(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17105 = cljs.core.cst$kw$kw;
var G__17106 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17105,G__17106) : _as_throw_17147.call(null,G__17105,G__17106));
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_name(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17107 = cljs.core.cst$kw$name;
var G__17108 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17107,G__17108) : _as_throw_17147.call(null,G__17107,G__17108));
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_qname(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17109 = cljs.core.cst$kw$qname;
var G__17110 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17109,G__17110) : _as_throw_17147.call(null,G__17109,G__17110));
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(var_args){
var G__17112 = arguments.length;
switch (G__17112) {
case 1:
return taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$1 = (function (x){
var or__5002__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17113 = cljs.core.cst$kw$email;
var G__17114 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17113,G__17114) : _as_throw_17147.call(null,G__17113,G__17114));
}
}));

(taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
var or__5002__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2(n,x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17115 = cljs.core.cst$kw$email;
var G__17116 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17115,G__17116) : _as_throw_17147.call(null,G__17115,G__17116));
}
}));

(taoensso.encore.as_email.cljs$lang$maxFixedArity = 2);


taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(var_args){
var G__17118 = arguments.length;
switch (G__17118) {
case 1:
return taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$1 = (function (x){
var or__5002__auto__ = taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17119 = cljs.core.cst$kw$nemail;
var G__17120 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17119,G__17120) : _as_throw_17147.call(null,G__17119,G__17120));
}
}));

(taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
var or__5002__auto__ = taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2(n,x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17121 = cljs.core.cst$kw$nemail;
var G__17122 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17121,G__17122) : _as_throw_17147.call(null,G__17121,G__17122));
}
}));

(taoensso.encore.as_nemail.cljs$lang$maxFixedArity = 2);


taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_udt(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17123 = cljs.core.cst$kw$udt;
var G__17124 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17123,G__17124) : _as_throw_17147.call(null,G__17123,G__17124));
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17125 = cljs.core.cst$kw$int;
var G__17126 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17125,G__17126) : _as_throw_17147.call(null,G__17125,G__17126));
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_nat_int(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17127 = cljs.core.cst$kw$nat_DASH_int;
var G__17128 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17127,G__17128) : _as_throw_17147.call(null,G__17127,G__17128));
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_pos_int(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17129 = cljs.core.cst$kw$pos_DASH_int;
var G__17130 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17129,G__17130) : _as_throw_17147.call(null,G__17129,G__17130));
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17131 = cljs.core.cst$kw$float;
var G__17132 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17131,G__17132) : _as_throw_17147.call(null,G__17131,G__17132));
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_nat_float(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17133 = cljs.core.cst$kw$nat_DASH_float;
var G__17134 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17133,G__17134) : _as_throw_17147.call(null,G__17133,G__17134));
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_pos_float(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17135 = cljs.core.cst$kw$pos_DASH_float;
var G__17136 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17135,G__17136) : _as_throw_17147.call(null,G__17135,G__17136));
}
});

taoensso.encore.as_pnum = (function taoensso$encore$as_pnum(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_pnum(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17137 = cljs.core.cst$kw$pnum;
var G__17138 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17137,G__17138) : _as_throw_17147.call(null,G__17137,G__17138));
}
});

taoensso.encore.as_rnum = (function taoensso$encore$as_rnum(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_rnum(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__17139 = cljs.core.cst$kw$rnum;
var G__17140 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17139,G__17140) : _as_throw_17147.call(null,G__17139,G__17140));
}
});

taoensso.encore.as_pnum_BANG_ = (function taoensso$encore$as_pnum_BANG_(x){
if(cljs.core.truth_(taoensso.encore.pnum_QMARK_(x))){
return x;
} else {
var G__17141 = cljs.core.cst$kw$pnum_BANG_;
var G__17142 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17141,G__17142) : _as_throw_17147.call(null,G__17141,G__17142));
}
});

taoensso.encore.as_rnum_BANG_ = (function taoensso$encore$as_rnum_BANG_(x){
if(cljs.core.truth_(taoensso.encore.rnum_QMARK_(x))){
return x;
} else {
var G__17143 = cljs.core.cst$kw$rnum_BANG_;
var G__17144 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17143,G__17144) : _as_throw_17147.call(null,G__17143,G__17144));
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool(x);
if((_QMARK_b == null)){
var G__17145 = cljs.core.cst$kw$bool;
var G__17146 = x;
return (_as_throw_17147.cljs$core$IFn$_invoke$arity$2 ? _as_throw_17147.cljs$core$IFn$_invoke$arity$2(G__17145,G__17146) : _as_throw_17147.call(null,G__17145,G__17146));
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var G__17156 = arguments.length;
switch (G__17156) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2(ks,false);
}));

(taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq(ks)){
var parts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,acc,taoensso.encore.explode_keyword(in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq(parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",parts));
} else {
var ppop = cljs.core.pop(parts);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(ppop))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ppop):null),cljs.core.peek(parts));
}
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2);

taoensso.encore.convey_reduced = (function taoensso$encore$convey_reduced(x){
if(cljs.core.reduced_QMARK_(x)){
return cljs.core.reduced(x);
} else {
return x;
}
});
/**
 * Public version of `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.reduced(result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__17158){
var vec__17159 = p__17158;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17159,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17159,(1),null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(var_args){
var G__17163 = arguments.length;
switch (G__17163) {
case 3:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3 = (function (rf,init,end){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(end));
}));

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4 = (function (rf,init,start,end){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end));
}));

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$5 = (function (rf,init,start,end,step){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,end,step));
}));

(taoensso.encore.reduce_n.cljs$lang$maxFixedArity = 5);

/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 *  As `reduce-kv` against vector coll, but works on any seqable coll type.
 */
taoensso.encore.reduce_indexed = (function taoensso$encore$reduce_indexed(rf,init,coll){
var c = (taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.counter.call(null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var G__17165 = acc;
var G__17166 = (c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));
var G__17167 = in$;
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__17165,G__17166,G__17167) : rf.call(null,G__17165,G__17166,G__17167));
}),init,coll);
});
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var G__17168 = acc;
var G__17169 = k;
var G__17170 = taoensso.encore.goog$module$goog$object.get.call(null,o,k,null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17168,G__17169,G__17170) : f.call(null,G__17168,G__17169,G__17170));
}),init,cljs.core.js_keys(o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17172_SHARP_,p2__17171_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__17171_SHARP_) : proc.call(null,p2__17171_SHARP_));
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv((function (p1__17175_SHARP_,p2__17173_SHARP_,p3__17174_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__17173_SHARP_,p3__17174_SHARP_) : proc.call(null,p2__17173_SHARP_,p3__17174_SHARP_));
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs((function (p1__17178_SHARP_,p2__17176_SHARP_,p3__17177_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__17176_SHARP_,p3__17177_SHARP_) : proc.call(null,p2__17176_SHARP_,p3__17177_SHARP_));
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj((function (p1__17181_SHARP_,p2__17179_SHARP_,p3__17180_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__17179_SHARP_,p3__17180_SHARP_) : proc.call(null,p2__17179_SHARP_,p3__17180_SHARP_));
}),null,obj);

return null;
});
var rf_17200 = (function (pred){
return (function (_acc,in$){
var b2__1576__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(b2__1576__auto__)){
var p = b2__1576__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
});
});
taoensso.encore.rsome = (function taoensso$encore$rsome(var_args){
var G__17183 = arguments.length;
switch (G__17183) {
case 2:
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf_17200(pred),null,coll);
}));

(taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$3 = (function (xform,pred,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf_17200(pred)),null,coll);
}));

(taoensso.encore.rsome.cljs$lang$maxFixedArity = 3);


var rf_17202 = (function (pred){
return (function (_acc,k,v){
var b2__1576__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(b2__1576__auto__)){
var p = b2__1576__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
});
});
var tf_17203 = (function (pred){
return (function (_acc,p__17184){
var vec__17185 = p__17184;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17185,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17185,(1),null);
var b2__1576__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(b2__1576__auto__)){
var p = b2__1576__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
});
});
taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv(rf_17202(pred),null,coll);
});

var rf_17204 = (function (pred){
return (function (_acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return cljs.core.reduced(in$);
} else {
return null;
}
});
});
taoensso.encore.rfirst = (function taoensso$encore$rfirst(var_args){
var G__17189 = arguments.length;
switch (G__17189) {
case 2:
return taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf_17204(pred),null,coll);
}));

(taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$3 = (function (xform,pred,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf_17204(pred)),null,coll);
}));

(taoensso.encore.rfirst.cljs$lang$maxFixedArity = 3);


var rf_17206 = (function (pred){
return (function (_acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
});
});
var tf_17207 = (function (pred){
return (function (_acc,p__17190){
var vec__17191 = p__17190;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17191,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17191,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
});
});
taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv(rf_17206(pred),null,coll);
});

var rf_17208 = (function (pred){
return (function (_acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(false);
}
});
});
taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(var_args){
var G__17195 = arguments.length;
switch (G__17195) {
case 2:
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf_17208(pred),true,coll);
}));

(taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (xform,pred,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf_17208(pred)),true,coll);
}));

(taoensso.encore.revery_QMARK_.cljs$lang$maxFixedArity = 3);


var rf_17210 = (function (pred){
return (function (_acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return true;
} else {
return cljs.core.reduced(false);
}
});
});
var tf_17211 = (function (pred){
return (function (_acc,p__17196){
var vec__17197 = p__17196;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17197,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17197,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return true;
} else {
return cljs.core.reduced(false);
}
});
});
taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv(rf_17210(pred),true,coll);
});
/**
 * Reduces given sequential xs and ys as pairs (e.g. key-val pairs).
 *   Calls (rf acc x y) for each sequential pair.
 * 
 *   Useful, among other things, as a more flexible version of `zipmap`.
 */
taoensso.encore.reduce_zip = (function taoensso$encore$reduce_zip(rf,init,xs,ys){
if(((cljs.core.vector_QMARK_(xs)) && (cljs.core.vector_QMARK_(ys)))){
var n = (function (){var x__5090__auto__ = cljs.core.count(xs);
var y__5091__auto__ = cljs.core.count(ys);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,idx){
var G__17214 = acc;
var G__17215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(xs,idx);
var G__17216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ys,idx);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__17214,G__17215,G__17216) : rf.call(null,G__17214,G__17215,G__17216));
}),init,n);
} else {
var acc = init;
var xs__$1 = cljs.core.seq(xs);
var ys__$1 = cljs.core.seq(ys);
while(true){
if(((xs__$1) && (ys__$1))){
var result = (function (){var G__17217 = acc;
var G__17218 = cljs.core.first(xs__$1);
var G__17219 = cljs.core.first(ys__$1);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__17217,G__17218,G__17219) : rf.call(null,G__17217,G__17218,G__17219));
})();
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.deref(result);
} else {
var G__17220 = result;
var G__17221 = cljs.core.next(xs__$1);
var G__17222 = cljs.core.next(ys__$1);
acc = G__17220;
xs__$1 = G__17221;
ys__$1 = G__17222;
continue;
}
} else {
return acc;
}
break;
}
}
});

/**
* @constructor
*/
taoensso.encore.Tup2 = (function (x,y){
this.x = x;
this.y = y;
});

(taoensso.encore.Tup2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x,cljs.core.cst$sym$y], null);
}));

(taoensso.encore.Tup2.cljs$lang$type = true);

(taoensso.encore.Tup2.cljs$lang$ctorStr = "taoensso.encore/Tup2");

(taoensso.encore.Tup2.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/Tup2");
}));

/**
 * Positional factory function for taoensso.encore/Tup2.
 */
taoensso.encore.__GT_Tup2 = (function taoensso$encore$__GT_Tup2(x,y){
return (new taoensso.encore.Tup2(x,y));
});



/**
* @constructor
*/
taoensso.encore.Tup3 = (function (x,y,z){
this.x = x;
this.y = y;
this.z = z;
});

(taoensso.encore.Tup3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x,cljs.core.cst$sym$y,cljs.core.cst$sym$z], null);
}));

(taoensso.encore.Tup3.cljs$lang$type = true);

(taoensso.encore.Tup3.cljs$lang$ctorStr = "taoensso.encore/Tup3");

(taoensso.encore.Tup3.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/Tup3");
}));

/**
 * Positional factory function for taoensso.encore/Tup3.
 */
taoensso.encore.__GT_Tup3 = (function taoensso$encore$__GT_Tup3(x,y,z){
return (new taoensso.encore.Tup3(x,y,z));
});

/**
 * Like `reduce` but supports separate simultaneous accumulators
 *   as a micro-optimisation when reducing a large collection multiple
 *   times.
 */
taoensso.encore.reduce_multi = (function taoensso$encore$reduce_multi(var_args){
var G__17224 = arguments.length;
switch (G__17224) {
case 3:
return taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$3 = (function (rf,init,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,coll);
}));

(taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$5 = (function (rf1,init1,rf2,init2,coll){
var tuple = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tuple,in$){
var x = tuple.x;
var y = tuple.y;
var rx_QMARK_ = cljs.core.reduced_QMARK_(x);
var ry_QMARK_ = cljs.core.reduced_QMARK_(y);
if(((rx_QMARK_) && (ry_QMARK_))){
return cljs.core.reduced(tuple);
} else {
var x__$1 = ((rx_QMARK_)?x:(rf1.cljs$core$IFn$_invoke$arity$2 ? rf1.cljs$core$IFn$_invoke$arity$2(x,in$) : rf1.call(null,x,in$)));
var y__$1 = ((ry_QMARK_)?y:(rf2.cljs$core$IFn$_invoke$arity$2 ? rf2.cljs$core$IFn$_invoke$arity$2(y,in$) : rf2.call(null,y,in$)));
return (new taoensso.encore.Tup2(x__$1,y__$1));
}
}),(new taoensso.encore.Tup2(init1,init2)),coll);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.unreduced(tuple.x),cljs.core.unreduced(tuple.y)], null);
}));

(taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$7 = (function (rf1,init1,rf2,init2,rf3,init3,coll){
var tuple = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tuple,in$){
var x = tuple.x;
var y = tuple.y;
var z = tuple.z;
var rx_QMARK_ = cljs.core.reduced_QMARK_(x);
var ry_QMARK_ = cljs.core.reduced_QMARK_(y);
var rz_QMARK_ = cljs.core.reduced_QMARK_(z);
if(((rx_QMARK_) && (((ry_QMARK_) && (rz_QMARK_))))){
return cljs.core.reduced(tuple);
} else {
var x__$1 = ((rx_QMARK_)?x:(rf1.cljs$core$IFn$_invoke$arity$2 ? rf1.cljs$core$IFn$_invoke$arity$2(x,in$) : rf1.call(null,x,in$)));
var y__$1 = ((ry_QMARK_)?y:(rf2.cljs$core$IFn$_invoke$arity$2 ? rf2.cljs$core$IFn$_invoke$arity$2(y,in$) : rf2.call(null,y,in$)));
var z__$1 = ((rz_QMARK_)?z:(rf3.cljs$core$IFn$_invoke$arity$2 ? rf3.cljs$core$IFn$_invoke$arity$2(z,in$) : rf3.call(null,z,in$)));
return (new taoensso.encore.Tup3(x__$1,y__$1,z__$1));
}
}),(new taoensso.encore.Tup3(init1,init2,init3)),coll);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.unreduced(tuple.x),cljs.core.unreduced(tuple.y),cljs.core.unreduced(tuple.z)], null);
}));

(taoensso.encore.reduce_multi.cljs$lang$maxFixedArity = 7);

/**
 * Reduces sequence of elements interleaved from given `colls`.
 *   (reduce-interleave-all conj [] [[:a :b] [1 2 3]]) => [:a 1 :b 2 3]
 */
taoensso.encore.reduce_interleave_all = (function taoensso$encore$reduce_interleave_all(rf,init,colls){
if(cljs.core.empty_QMARK_(colls)){
return init;
} else {
var acc = init;
var colls__$1 = colls;
while(true){
var tuple = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (acc,colls__$1){
return (function (tuple,in$){
if(cljs.core.empty_QMARK_(in$)){
return tuple;
} else {
var vec__17226 = in$;
var seq__17227 = cljs.core.seq(vec__17226);
var first__17228 = cljs.core.first(seq__17227);
var seq__17227__$1 = cljs.core.next(seq__17227);
var in1 = first__17228;
var next_in = seq__17227__$1;
var acc__$1 = tuple.x;
var ncs = tuple.y;
var res = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc__$1,in1) : rf.call(null,acc__$1,in1));
if(cljs.core.reduced_QMARK_(res)){
return cljs.core.reduced((new taoensso.encore.Tup2(cljs.core.deref(res),null)));
} else {
return (new taoensso.encore.Tup2(res,((next_in)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = ncs;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),next_in):ncs)));
}
}
});})(acc,colls__$1))
,(new taoensso.encore.Tup2(acc,null)),colls__$1);
var acc__$1 = tuple.x;
var next_colls = tuple.y;
if(cljs.core.truth_(next_colls)){
var G__17229 = acc__$1;
var G__17230 = next_colls;
acc = G__17229;
colls__$1 = G__17230;
continue;
} else {
return acc__$1;
}
break;
}
}
});
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var G__17232 = arguments.length;
switch (G__17232) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((function (){var G__17233 = (x - y);
return Math.abs(G__17233);
})() < 0.001);
}));

(taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return ((function (){var G__17234 = (x - y);
return Math.abs(G__17234);
})() < signf);
}));

(taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3);

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.clamp_int = (function taoensso$encore$clamp_int(nmin,nmax,n){
var nmin__$1 = cljs.core.long$(nmin);
var nmax__$1 = cljs.core.long$(nmax);
var n__$1 = cljs.core.long$(n);
if((n__$1 < nmin__$1)){
return nmin__$1;
} else {
if((n__$1 > nmax__$1)){
return nmax__$1;
} else {
return n__$1;
}
}
});
taoensso.encore.clamp_float = (function taoensso$encore$clamp_float(nmin,nmax,n){
var nmin__$1 = nmin;
var nmax__$1 = nmax;
var n__$1 = n;
if((n__$1 < nmin__$1)){
return nmin__$1;
} else {
if((n__$1 > nmax__$1)){
return nmax__$1;
} else {
return n__$1;
}
}
});
taoensso.encore.pnum_complement = (function taoensso$encore$pnum_complement(pnum){
return (1.0 - pnum);
});
taoensso.encore.as_pnum_complement = (function taoensso$encore$as_pnum_complement(x){
return (1.0 - taoensso.encore.as_pnum(x));
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var G__17248 = arguments.length;
switch (G__17248) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$round,null,n);
}));

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (kind,n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(kind,null,n);
}));

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (kind,precision,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(precision)?Math.pow(10.0,precision):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__17249 = kind;
var G__17249__$1 = (((G__17249 instanceof cljs.core.Keyword))?G__17249.fqn:null);
switch (G__17249__$1) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$(n_STAR_);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/round*] Unexpected round kind (expected \u2208 #{:round :floor :ceil :trunc})",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$kind,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,kind,cljs.core.cst$kw$type,cljs.core.type(kind)], null)], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$(rounded);
}
}));

(taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3);

taoensso.encore.round0 = (function taoensso$encore$round0(n){
var G__17252 = n;
return Math.round(G__17252);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return ((function (){var G__17253 = (n * 10.0);
return Math.round(G__17253);
})() / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return ((function (){var G__17254 = (n * 100.0);
return Math.round(G__17254);
})() / 100.0);
});

taoensso.encore.roundn = (function taoensso$encore$roundn(precision,n){
var p = (function (){var G__17255 = 10.0;
var G__17256 = cljs.core.long$(precision);
return Math.pow(G__17255,G__17256);
})();
return ((function (){var G__17257 = (n * p);
return Math.round(G__17257);
})() / p);
});

taoensso.encore.perc = (function taoensso$encore$perc(n,divisor){
var G__17258 = ((n / divisor) * 100.0);
return Math.round(G__17258);
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var G__17260 = arguments.length;
switch (G__17260) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2(n_attempt,null);
}));

(taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__17261){
var map__17262 = p__17261;
var map__17262__$1 = cljs.core.__destructure_map(map__17262);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17262__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17262__$1,cljs.core.cst$kw$max);
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17262__$1,cljs.core.cst$kw$factor,(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$((((b + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(b)) * 0.5) * factor));
var t__$1 = cljs.core.long$((cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$((cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
}));

(taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2);

/**
 * Returns true with given probability ∈ ℝ[0,1].
 */
taoensso.encore.chance = (function taoensso$encore$chance(prob){
return (Math.random() < prob);
});
taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_window = (((typeof window !== 'undefined'))?window:null);
taoensso.encore.js__QMARK_process = (((typeof process !== 'undefined'))?process:null);
taoensso.encore.js__QMARK_crypto = (function (){var or__5002__auto__ = (((typeof crypto !== 'undefined'))?crypto:null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if((typeof window !== 'undefined')){
return taoensso.encore.goog$module$goog$object.get.call(null,window,"crypto");
} else {
return null;
}
}
})();
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
});
/**
 * Like `force` for vars.
 */
taoensso.encore.force_var = (function taoensso$encore$force_var(x){
if(cljs.core.var_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta(x,(function (){var G__17264 = cljs.core.meta(x);
var G__17265 = m;
return (taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2(G__17264,G__17265) : taoensso.encore.merge.call(null,G__17264,G__17265));
})());
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta(x))){
return cljs.core.with_meta(x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var G__17271 = arguments.length;
switch (G__17271) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___17273 = arguments.length;
var i__5727__auto___17274 = (0);
while(true){
if((i__5727__auto___17274 < len__5726__auto___17273)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17274]));

var G__17275 = (i__5727__auto___17274 + (1));
i__5727__auto___17274 = G__17275;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((taoensso.encore.some_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)));
}));

(taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__5000__auto__ = taoensso.encore.some_QMARK_(x);
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(and__5000__auto____$1){
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2((function (p1__17266_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__17266_SHARP_,x);
}),more);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}));

/** @this {Function} */
(taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq17268){
var G__17269 = cljs.core.first(seq17268);
var seq17268__$1 = cljs.core.next(seq17268);
var G__17270 = cljs.core.first(seq17268__$1);
var seq17268__$2 = cljs.core.next(seq17268__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17269,G__17270,seq17268__$2);
}));

(taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2));

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var G__17281 = arguments.length;
switch (G__17281) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___17283 = arguments.length;
var i__5727__auto___17284 = (0);
while(true){
if((i__5727__auto___17284 < len__5726__auto___17283)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17284]));

var G__17285 = (i__5727__auto___17284 + (1));
i__5727__auto___17284 = G__17285;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2(taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
}));

/** @this {Function} */
(taoensso.encore.nnil.cljs$lang$applyTo = (function (seq17277){
var G__17278 = cljs.core.first(seq17277);
var seq17277__$1 = cljs.core.next(seq17277);
var G__17279 = cljs.core.first(seq17277__$1);
var seq17277__$2 = cljs.core.next(seq17277__$1);
var G__17280 = cljs.core.first(seq17277__$2);
var seq17277__$3 = cljs.core.next(seq17277__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17278,G__17279,G__17280,seq17277__$3);
}));

(taoensso.encore.nnil.cljs$lang$maxFixedArity = (3));

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__17286 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),/-/,(2));
var s_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17286,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17286,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$version,(function (){var b2__1576__auto__ = cljs.core.re_seq(/\d+/,s_version);
if(cljs.core.truth_(b2__1576__auto__)){
var s = b2__1576__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),cljs.core.cst$kw$qualifier,(function (){var b2__1576__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__1576__auto__)){
var s = b2__1576__auto__;
return clojure.string.lower_case(s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__17290 = taoensso.encore.encore_version;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17290,(0),null);
var yc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17290,(1),null);
var zc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17290,(2),null);
var vec__17293 = ((cljs.core.vector_QMARK_(min_version))?min_version:cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version(min_version)));
var xm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17293,(0),null);
var ym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17293,(1),null);
var zm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17293,(2),null);
var vec__17296 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__17289_SHARP_){
var or__5002__auto__ = p1__17289_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17296,(0),null);
var ym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17296,(1),null);
var zm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17296,(2),null);
if((((xc > xm__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xc,xm__$1)) && ((((yc > ym__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yc,ym__$1)) && ((zc >= zm__$1)))))))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see `https://www.taoensso.com/dependency-conflicts` for solutions.",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),cljs.core.cst$kw$your_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
/**
 * Returns a `MapEntry` with given key and value.
 */
taoensso.encore.map_entry = (function taoensso$encore$map_entry(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
/**
 * Returns true iff given a `PersistentQueue`.
 */
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a new `PersistentQueue`.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var G__17300 = arguments.length;
switch (G__17300) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0(),coll);
}));

(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(taoensso.encore.queue.cljs$lang$maxFixedArity = 1);

/**
 * Returns a new `PersistentQueue` given items.
 */
taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17303 = arguments.length;
var i__5727__auto___17304 = (0);
while(true){
if((i__5727__auto___17304 < len__5726__auto___17303)){
args__5732__auto__.push((arguments[i__5727__auto___17304]));

var G__17305 = (i__5727__auto___17304 + (1));
i__5727__auto___17304 = G__17305;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1(items);
}));

(taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq17302){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17302));
}));

taoensso.encore.ensure_vec = (function taoensso$encore$ensure_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
return cljs.core.vec(x);
}
});
taoensso.encore.ensure_set = (function taoensso$encore$ensure_set(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
return cljs.core.set(x);
}
});
/**
 * Like `assoc` for JS objects.
 */
taoensso.encore.oset = (function taoensso$encore$oset(o,k,v){
var G__17306 = (((o == null))?({}):o);
var G__17307 = cljs.core.name(k);
var G__17308 = v;
return taoensso.encore.goog$module$goog$object.set.call(null,G__17306,G__17307,G__17308);
});
var sentinel_17319 = ({});
/**
 * Experimental. Like `assoc-in` for JS objects.
 */
taoensso.encore.oset_in = (function taoensso$encore$oset_in(o,ks,v){
var o__$1 = (((o == null))?({}):o);
var b2__1576__auto__ = cljs.core.seq(ks);
if(b2__1576__auto__){
var ks__$1 = b2__1576__auto__;
var o_next = o__$1;
var ks_next = ks__$1;
while(true){
var k1 = cljs.core.name(cljs.core.first(ks_next));
var o_next__$1 = (function (){var o_next_STAR_ = taoensso.encore.goog$module$goog$object.get.call(null,o_next,k1,sentinel_17319);
if((o_next_STAR_ === sentinel_17319)){
var new_obj = ({});
taoensso.encore.goog$module$goog$object.set.call(null,o_next,k1,new_obj);

return new_obj;
} else {
return o_next_STAR_;
}
})();
var b2__1576__auto____$1 = cljs.core.next(ks_next);
if(b2__1576__auto____$1){
var ks_next__$1 = b2__1576__auto____$1;
var G__17320 = o_next__$1;
var G__17321 = ks_next__$1;
o_next = G__17320;
ks_next = G__17321;
continue;
} else {
taoensso.encore.goog$module$goog$object.set.call(null,o_next__$1,k1,v);

return o__$1;
}
break;
}
} else {
return o__$1;
}
});
/**
 * Like `get` for JS objects.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var G__17323 = arguments.length;
switch (G__17323) {
case 1:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$1 = (function (k){
var G__17324 = taoensso.encore.js__QMARK_window;
var G__17325 = cljs.core.name(k);
return taoensso.encore.goog$module$goog$object.get.call(null,G__17324,G__17325);
}));

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
var G__17326 = o;
var G__17327 = cljs.core.name(k);
var G__17328 = null;
return taoensso.encore.goog$module$goog$object.get.call(null,G__17326,G__17327,G__17328);
}));

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
var G__17329 = o;
var G__17330 = cljs.core.name(k);
var G__17331 = not_found;
return taoensso.encore.goog$module$goog$object.get.call(null,G__17329,G__17330,G__17331);
}));

(taoensso.encore.oget.cljs$lang$maxFixedArity = 3);

var sentinel_17340 = ({});
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = (function taoensso$encore$oget_in(var_args){
var G__17336 = arguments.length;
switch (G__17336) {
case 1:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(taoensso.encore.js__QMARK_window,ks,null);
}));

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = (function (o,ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(o,ks,null);
}));

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
var o__$2 = (function (){var G__17337 = o__$1;
var G__17338 = cljs.core.name(cljs.core.first(ks__$1));
var G__17339 = sentinel_17340;
return taoensso.encore.goog$module$goog$object.get.call(null,G__17337,G__17338,G__17339);
})();
if((o__$2 === sentinel_17340)){
return not_found;
} else {
var G__17342 = o__$2;
var G__17343 = cljs.core.next(ks__$1);
o__$1 = G__17342;
ks__$1 = G__17343;
continue;
}
} else {
return o__$1;
}
break;
}
}));

(taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3);

/**
 * Like `get` but returns val for first key that exists in map.
 *   Useful for key aliases or fallbacks. See also `get*`.
 */
taoensso.encore.get1 = (function taoensso$encore$get1(var_args){
var G__17345 = arguments.length;
switch (G__17345) {
case 2:
return taoensso.encore.get1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get1.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.get1.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.get1.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get1.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
}));

(taoensso.encore.get1.cljs$core$IFn$_invoke$arity$3 = (function (m,k,not_found){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,not_found);
}));

(taoensso.encore.get1.cljs$core$IFn$_invoke$arity$4 = (function (m,k1,k2,not_found){
var b2__1576__auto__ = (function (){var and__5000__auto__ = m;
if(cljs.core.truth_(and__5000__auto__)){
var or__5002__auto__ = cljs.core.find(m,k1);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.find(m,k2);
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(b2__1576__auto__)){
var e = b2__1576__auto__;
return cljs.core.val(e);
} else {
return not_found;
}
}));

(taoensso.encore.get1.cljs$core$IFn$_invoke$arity$5 = (function (m,k1,k2,k3,not_found){
var b2__1576__auto__ = (function (){var and__5000__auto__ = m;
if(cljs.core.truth_(and__5000__auto__)){
var or__5002__auto__ = cljs.core.find(m,k1);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.find(m,k2);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.find(m,k3);
}
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(b2__1576__auto__)){
var e = b2__1576__auto__;
return cljs.core.val(e);
} else {
return not_found;
}
}));

(taoensso.encore.get1.cljs$lang$maxFixedArity = 5);

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var G__17356 = arguments.length;
switch (G__17356) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___17363 = arguments.length;
var i__5727__auto___17364 = (0);
while(true){
if((i__5727__auto___17364 < len__5726__auto___17363)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17364]));

var G__17365 = (i__5727__auto___17364 + (1));
i__5727__auto___17364 = G__17365;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_some,taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2(coll,x),more);
}));

/** @this {Function} */
(taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq17353){
var G__17354 = cljs.core.first(seq17353);
var seq17353__$1 = cljs.core.next(seq17353);
var G__17355 = cljs.core.first(seq17353__$1);
var seq17353__$2 = cljs.core.next(seq17353__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17354,G__17355,seq17353__$2);
}));

(taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2));


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var G__17361 = arguments.length;
switch (G__17361) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___17367 = arguments.length;
var i__5727__auto___17368 = (0);
while(true){
if((i__5727__auto___17368 < len__5726__auto___17367)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17368]));

var G__17369 = (i__5727__auto___17368 + (1));
i__5727__auto___17368 = G__17369;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_when,taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x),more);
}));

/** @this {Function} */
(taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq17358){
var G__17359 = cljs.core.first(seq17358);
var seq17358__$1 = cljs.core.next(seq17358);
var G__17360 = cljs.core.first(seq17358__$1);
var seq17358__$2 = cljs.core.next(seq17358__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17359,G__17360,seq17358__$2);
}));

(taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2));

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var G__17375 = arguments.length;
switch (G__17375) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___17395 = arguments.length;
var i__5727__auto___17396 = (0);
while(true){
if((i__5727__auto___17396 < len__5726__auto___17395)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17396]));

var G__17397 = (i__5727__auto___17396 + (1));
i__5727__auto___17396 = G__17397;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq17371){
var G__17372 = cljs.core.first(seq17371);
var seq17371__$1 = cljs.core.next(seq17371);
var G__17373 = cljs.core.first(seq17371__$1);
var seq17371__$2 = cljs.core.next(seq17371__$1);
var G__17374 = cljs.core.first(seq17371__$2);
var seq17371__$3 = cljs.core.next(seq17371__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17372,G__17373,G__17374,seq17371__$3);
}));

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3));


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var G__17381 = arguments.length;
switch (G__17381) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___17399 = arguments.length;
var i__5727__auto___17400 = (0);
while(true){
if((i__5727__auto___17400 < len__5726__auto___17399)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17400]));

var G__17401 = (i__5727__auto___17400 + (1));
i__5727__auto___17400 = G__17401;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
}));

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if(cljs.core.truth_(v__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
} else {
return m__$1;
}
}),taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq17377){
var G__17378 = cljs.core.first(seq17377);
var seq17377__$1 = cljs.core.next(seq17377);
var G__17379 = cljs.core.first(seq17377__$1);
var seq17377__$2 = cljs.core.next(seq17377__$1);
var G__17380 = cljs.core.first(seq17377__$2);
var seq17377__$3 = cljs.core.next(seq17377__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17378,G__17379,G__17380,seq17377__$3);
}));

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3));


/**
 * Assocs each kv if its value is not nil, otherwise dissocs it.
 */
taoensso.encore.dis_assoc_some = (function taoensso$encore$dis_assoc_some(var_args){
var G__17387 = arguments.length;
switch (G__17387) {
case 3:
return taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___17403 = arguments.length;
var i__5727__auto___17404 = (0);
while(true){
if((i__5727__auto___17404 < len__5726__auto___17403)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17404]));

var G__17405 = (i__5727__auto___17404 + (1));
i__5727__auto___17404 = G__17405;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}
}),taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.dis_assoc_some.cljs$lang$applyTo = (function (seq17383){
var G__17384 = cljs.core.first(seq17383);
var seq17383__$1 = cljs.core.next(seq17383);
var G__17385 = cljs.core.first(seq17383__$1);
var seq17383__$2 = cljs.core.next(seq17383__$1);
var G__17386 = cljs.core.first(seq17383__$2);
var seq17383__$3 = cljs.core.next(seq17383__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17384,G__17385,G__17386,seq17383__$3);
}));

(taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((v == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.dis_assoc_some.cljs$lang$maxFixedArity = (3));


/**
 * Assocs each kv iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
var G__17393 = arguments.length;
switch (G__17393) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___17407 = arguments.length;
var i__5727__auto___17408 = (0);
while(true){
if((i__5727__auto___17408 < len__5726__auto___17407)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17408]));

var G__17409 = (i__5727__auto___17408 + (1));
i__5727__auto___17408 = G__17409;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_(m,k)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq17389){
var G__17390 = cljs.core.first(seq17389);
var seq17389__$1 = cljs.core.next(seq17389);
var G__17391 = cljs.core.first(seq17389__$1);
var seq17389__$2 = cljs.core.next(seq17389__$1);
var G__17392 = cljs.core.first(seq17389__$2);
var seq17389__$3 = cljs.core.next(seq17389__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17390,G__17391,G__17392,seq17389__$3);
}));

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k,v){
if(cljs.core.contains_QMARK_(m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3));

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var G__17411 = arguments.length;
switch (G__17411) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count(v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,vlen);
}
}));

(taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$(cljs.core.count(v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,end__$1);
}
}));

(taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3);

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var G__17414 = arguments.length;
switch (G__17414) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count(v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,vlen);
}
}
}));

(taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$(cljs.core.count(v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,end__$1);
}
}
}
}));

(taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3);

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count(v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop(v):null),cljs.core.peek(v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count(v);
if((c > (0))){
var vec__17416 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17416,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(xs,f){
if(cljs.core.vector_QMARK_(xs)){
var vec__17419 = taoensso.encore.vsplit_last(xs);
var vn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17419,(0),null);
var vl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17419,(1),null);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(vn,vl) : f.call(null,vn,vl));
} else {
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__17425 = xs__$1;
var seq__17426 = cljs.core.seq(vec__17425);
var first__17427 = cljs.core.first(seq__17426);
var seq__17426__$1 = cljs.core.next(seq__17426);
var x1 = first__17427;
var xn = seq__17426__$1;
if(xn){
var G__17428 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(butlast,x1);
var G__17429 = xn;
butlast = G__17428;
xs__$1 = G__17429;
continue;
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(butlast,x1) : f.call(null,butlast,x1));
}
break;
}
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_(coll)){
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3(coll,(0),n);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return ((cljs.core.set_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(taoensso.encore.ensure_set(x)))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17432 = arguments.length;
var i__5727__auto___17433 = (0);
while(true){
if((i__5727__auto___17433 < len__5726__auto___17432)){
args__5732__auto__.push((arguments[i__5727__auto___17433]));

var G__17434 = (i__5727__auto___17433 + (1));
i__5727__auto___17433 = G__17434;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,taoensso.encore.fsplit_last(args,(function (xs,lx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,(taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1(lx) : taoensso.encore.seq_kvs.call(null,lx)));
})));
}));

(taoensso.encore.mapply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.mapply.cljs$lang$applyTo = (function (seq17430){
var G__17431 = cljs.core.first(seq17430);
var seq17430__$1 = cljs.core.next(seq17430);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17431,seq17430__$1);
}));

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var G__17439 = arguments.length;
switch (G__17439) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___17441 = arguments.length;
var i__5727__auto___17442 = (0);
while(true){
if((i__5727__auto___17442 < len__5726__auto___17441)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17442]));

var G__17443 = (i__5727__auto___17442 + (1));
i__5727__auto___17442 = G__17443;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from);
}));

(taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$(to),cljs.core.cons(from,more)));
}));

/** @this {Function} */
(taoensso.encore.into_all.cljs$lang$applyTo = (function (seq17436){
var G__17437 = cljs.core.first(seq17436);
var seq17436__$1 = cljs.core.next(seq17436);
var G__17438 = cljs.core.first(seq17436__$1);
var seq17436__$2 = cljs.core.next(seq17436__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17437,G__17438,seq17436__$2);
}));

(taoensso.encore.into_all.cljs$lang$maxFixedArity = (2));

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((((n > (10))) && (taoensso.encore.editable_QMARK_(coll)))){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),cljs.core.transient$(coll),n));
} else {
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),coll,n);
}
});
/**
 * Like `core/into` but assumes `to!` is a transient, and doesn't call
 *   `persist!` when done. Useful as a performance optimization in some cases.
 */
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var G__17445 = arguments.length;
switch (G__17445) {
case 1:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (to_BANG_){
return to_BANG_;
}));

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to_BANG_,from){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to_BANG_,from);
}));

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to_BANG_,xform,from){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,to_BANG_,from);
}));

(taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Returns a stateful transducer like (core/distinct) that supports an optional
 *   key function. Retains only items with distinct (keyfn <item>).
 */
taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var G__17448 = arguments.length;
switch (G__17448) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$0();
}));

(taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_(cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY));
return (function() {
var G__17450 = null;
var G__17450__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__17450__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__17450__2 = (function (acc,in$){
var k = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null,in$));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen_),k)){
return acc;
} else {
seen_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen_.cljs$core$IDeref$_deref$arity$1(null),k));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
}
});
G__17450 = function(acc,in$){
switch(arguments.length){
case 0:
return G__17450__0.call(this);
case 1:
return G__17450__1.call(this,acc);
case 2:
return G__17450__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17450.cljs$core$IFn$_invoke$arity$0 = G__17450__0;
G__17450.cljs$core$IFn$_invoke$arity$1 = G__17450__1;
G__17450.cljs$core$IFn$_invoke$arity$2 = G__17450__2;
return G__17450;
})()
});
}));

(taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1);

var p_BANG__17460 = cljs.core.persistent_BANG_;
var t_17461 = cljs.core.transient$;
taoensso.encore.invert_map = (function taoensso$encore$invert_map(m){
var G__17451 = cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),(function (){var G__17452 = cljs.core.PersistentArrayMap.EMPTY;
return (t_17461.cljs$core$IFn$_invoke$arity$1 ? t_17461.cljs$core$IFn$_invoke$arity$1(G__17452) : t_17461.call(null,G__17452));
})(),m);
return (p_BANG__17460.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17460.cljs$core$IFn$_invoke$arity$1(G__17451) : p_BANG__17460.call(null,G__17451));
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
var G__17453 = cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),(function (){var G__17454 = cljs.core.PersistentArrayMap.EMPTY;
return (t_17461.cljs$core$IFn$_invoke$arity$1 ? t_17461.cljs$core$IFn$_invoke$arity$1(G__17454) : t_17461.call(null,G__17454));
})(),m);
return (p_BANG__17460.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17460.cljs$core$IFn$_invoke$arity$1(G__17453) : p_BANG__17460.call(null,G__17453));
});

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__17455 = cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),(t_17461.cljs$core$IFn$_invoke$arity$1 ? t_17461.cljs$core$IFn$_invoke$arity$1(m) : t_17461.call(null,m)),m);
return (p_BANG__17460.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17460.cljs$core$IFn$_invoke$arity$1(G__17455) : p_BANG__17460.call(null,G__17455));
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__17456 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),(t_17461.cljs$core$IFn$_invoke$arity$1 ? t_17461.cljs$core$IFn$_invoke$arity$1(m) : t_17461.call(null,m)),m);
return (p_BANG__17460.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17460.cljs$core$IFn$_invoke$arity$1(G__17456) : p_BANG__17460.call(null,G__17456));
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__17457 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),(t_17461.cljs$core$IFn$_invoke$arity$1 ? t_17461.cljs$core$IFn$_invoke$arity$1(m) : t_17461.call(null,m)),m);
return (p_BANG__17460.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17460.cljs$core$IFn$_invoke$arity$1(G__17457) : p_BANG__17460.call(null,G__17457));
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__17458 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),(t_17461.cljs$core$IFn$_invoke$arity$1 ? t_17461.cljs$core$IFn$_invoke$arity$1(m) : t_17461.call(null,m)),m);
return (p_BANG__17460.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17460.cljs$core$IFn$_invoke$arity$1(G__17458) : p_BANG__17460.call(null,G__17458));
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__17459 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),(t_17461.cljs$core$IFn$_invoke$arity$1 ? t_17461.cljs$core$IFn$_invoke$arity$1(m) : t_17461.call(null,m)),m);
return (p_BANG__17460.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17460.cljs$core$IFn$_invoke$arity$1(G__17459) : p_BANG__17460.call(null,G__17459));
}
});
/**
 * Returns a map like the one given, replacing keys using
 *   given {<old-new> <new-key>} replacements. O(min(n_replacements, n_m)).
 */
taoensso.encore.rename_keys = (function taoensso$encore$rename_keys(replacements,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.empty_QMARK_(m)){
return m;
} else {
if(cljs.core.empty_QMARK_(replacements)){
return m;
} else {
if((cljs.core.count(m) > cljs.core.count(replacements))){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,old_k,new_k){
var b2__1576__auto__ = cljs.core.find(m,old_k);
if(cljs.core.truth_(b2__1576__auto__)){
var e = b2__1576__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,old_k),new_k,cljs.core.val(e));
} else {
return acc;
}
}),cljs.core.transient$(m),replacements));
} else {
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,old_k,v){
var b2__1576__auto__ = cljs.core.find(replacements,old_k);
if(cljs.core.truth_(b2__1576__auto__)){
var e = b2__1576__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,old_k),cljs.core.val(e),v);
} else {
return acc;
}
}),cljs.core.transient$(m),m));
}
}
}
}
});
/**
 * Returns {(f x) x} map for xs in `coll`.
 */
taoensso.encore.keys_by = (function taoensso$encore$keys_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),x);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),taoensso.encore.ensure_set(ks));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.ensure_set(ks));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.ensure_set(ks));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2((function (p1__17462_SHARP_){
return taoensso.encore.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__17462_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but:.
 *  - Empty ks will return (f m), not act like [nil] ks.
 *  - Adds support for `not-found`.
 *  - Adds support for special return vals: `:update/dissoc`, `:update/abort`.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var G__17464 = arguments.length;
switch (G__17464) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,f);
}));

(taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
if(cljs.core.empty_QMARK_(ks)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
} else {
var old = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,not_found);
var new$ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old) : f.call(null,old));
var G__17465 = new$;
var G__17465__$1 = (((G__17465 instanceof cljs.core.Keyword))?G__17465.fqn:null);
switch (G__17465__$1) {
case "update/abort":
case "swap/abort":
return m;

break;
case "update/dissoc":
case "swap/dissoc":
return taoensso.encore.fsplit_last(ks,(function (ks__$1,lk){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks__$1,null,(function (v){
if(cljs.core.truth_(v)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,lk);
} else {
return cljs.core.cst$kw$update_SLASH_abort;
}
}));
}));

break;
default:
return cljs.core.assoc_in(m,ks,new$);

}
}
}));

(taoensso.encore.update_in.cljs$lang$maxFixedArity = 4);

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var G__17469 = arguments.length;
switch (G__17469) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(coll,ks),k);
}));

(taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.empty_QMARK_(ks)){
return false;
} else {
return taoensso.encore.fsplit_last(ks,(function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3(coll,ks__$1,lk);
}));
}
}));

(taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3);

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var G__17476 = arguments.length;
switch (G__17476) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___17478 = arguments.length;
var i__5727__auto___17479 = (0);
while(true){
if((i__5727__auto___17479 < len__5726__auto___17478)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17479]));

var G__17480 = (i__5727__auto___17479 + (1));
i__5727__auto___17479 = G__17480;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
if(cljs.core.truth_(m__$1)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k);
} else {
return cljs.core.cst$kw$update_SLASH_abort;
}
}));
}));

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
if(cljs.core.truth_(m__$1)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k),more);
} else {
return cljs.core.cst$kw$update_SLASH_abort;
}
}));
}));

/** @this {Function} */
(taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq17472){
var G__17473 = cljs.core.first(seq17472);
var seq17472__$1 = cljs.core.next(seq17472);
var G__17474 = cljs.core.first(seq17472__$1);
var seq17472__$2 = cljs.core.next(seq17472__$1);
var G__17475 = cljs.core.first(seq17472__$2);
var seq17472__$3 = cljs.core.next(seq17472__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17473,G__17474,G__17475,seq17472__$3);
}));

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
if(cljs.core.empty_QMARK_(m)){
return m;
} else {
return taoensso.encore.fsplit_last(ks,(function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m,ks__$1,lk);
}));
}
}));

(taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3));

taoensso.encore.node_paths = (function taoensso$encore$node_paths(var_args){
var G__17482 = arguments.length;
switch (G__17482) {
case 1:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$1 = (function (m){
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(cljs.core.associative_QMARK_,m,null);
}));

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$2 = (function (node_pred,m){
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(node_pred,m,null);
}));

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3 = (function (node_pred,m,basis){
var basis__$1 = (function (){var or__5002__auto__ = basis;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((node_pred.cljs$core$IFn$_invoke$arity$1 ? node_pred.cljs$core$IFn$_invoke$arity$1(v) : node_pred.call(null,v)))){
var paths_from_basis = taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(node_pred,v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(basis__$1,k));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,in$){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,in$);
}),acc,paths_from_basis);
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(basis__$1,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),m));
}));

(taoensso.encore.node_paths.cljs$lang$maxFixedArity = 3);

/**
 * Like `interleave` but includes all items (i.e. stops when the longest
 *   rather than shortest coll has been consumed).
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var G__17488 = arguments.length;
switch (G__17488) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___17490 = arguments.length;
var i__5727__auto___17491 = (0);
while(true){
if((i__5727__auto___17491 < len__5726__auto___17490)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17491]));

var G__17492 = (i__5727__auto___17491 + (1));
i__5727__auto___17491 = G__17492;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if(((s1) && (s2))){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.encore.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
}));

/** @this {Function} */
(taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq17485){
var G__17486 = cljs.core.first(seq17485);
var seq17485__$1 = cljs.core.next(seq17485);
var G__17487 = cljs.core.first(seq17485__$1);
var seq17485__$2 = cljs.core.next(seq17485__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17486,G__17487,seq17485__$2);
}));

(taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2));

/**
 * Like `interleave`, but:
 *  - Returns a vector rather than lazy seq (=> greedy).
 *  - Includes all items (i.e. stops when the longest rather than
 *    shortest coll has been consumed).
 * 
 *   Single-arity version takes a coll of colls.
 */
taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(var_args){
var G__17498 = arguments.length;
switch (G__17498) {
case 1:
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___17500 = arguments.length;
var i__5727__auto___17501 = (0);
while(true){
if((i__5727__auto___17501 < len__5726__auto___17500)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17501]));

var G__17502 = (i__5727__auto___17501 + (1));
i__5727__auto___17501 = G__17502;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$1 = (function (colls){
if(cljs.core.empty_QMARK_(colls)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.persistent_BANG_(taoensso.encore.reduce_interleave_all(cljs.core.conj_BANG_,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),colls));
}
}));

(taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
var v = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
while(true){
if(((s1) && (s2))){
var G__17503 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(s1)),cljs.core.first(s2));
var G__17504 = cljs.core.next(s1);
var G__17505 = cljs.core.next(s2);
v = G__17503;
s1 = G__17504;
s2 = G__17505;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_(v);
}
}
}
break;
}
}));

(taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$3 = (function (c1,c2,c3){
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
}));

(taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,c3,colls){
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null),colls));
}));

/** @this {Function} */
(taoensso.encore.vinterleave_all.cljs$lang$applyTo = (function (seq17494){
var G__17495 = cljs.core.first(seq17494);
var seq17494__$1 = cljs.core.next(seq17494);
var G__17496 = cljs.core.first(seq17494__$1);
var seq17494__$2 = cljs.core.next(seq17494__$1);
var G__17497 = cljs.core.first(seq17494__$2);
var seq17494__$3 = cljs.core.next(seq17494__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17495,G__17496,G__17497,seq17494__$3);
}));

(taoensso.encore.vinterleave_all.cljs$lang$maxFixedArity = (3));

/**
 * Private, don't use. Low-level merge function, flexible and optimized.
 */
taoensso.encore._merge_with = (function taoensso$encore$_merge_with(var_args){
var G__17507 = arguments.length;
switch (G__17507) {
case 3:
return taoensso.encore._merge_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore._merge_with.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore._merge_with.cljs$core$IFn$_invoke$arity$3 = (function (nest_QMARK_,f,maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(taoensso.encore._merge_with,nest_QMARK_,f),null,maps);
}));

(taoensso.encore._merge_with.cljs$core$IFn$_invoke$arity$4 = (function (nest_QMARK_,f,m1,m2){
var n2 = cljs.core.count(m2);
if((n2 === (0))){
var or__5002__auto__ = m1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return m2;
}
} else {
var b2__1576__auto__ = cljs.core.find(m2,cljs.core.cst$kw$merge_SLASH_replace_QMARK_);
if(cljs.core.truth_(b2__1576__auto__)){
var e = b2__1576__auto__;
var m2__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m2,cljs.core.cst$kw$merge_SLASH_replace_QMARK_);
if(cljs.core.truth_(cljs.core.val(e))){
return m2__$1;
} else {
return taoensso.encore._merge_with.cljs$core$IFn$_invoke$arity$4(nest_QMARK_,f,m1,m2__$1);
}
} else {
var n1 = cljs.core.count(m1);
if((n1 >= n2)){
return cljs.core.reduce_kv((function (acc1,k2,v2){
if(cljs.core.truth_((function (){var G__17508 = v2;
var G__17508__$1 = (((G__17508 instanceof cljs.core.Keyword))?G__17508.fqn:null);
switch (G__17508__$1) {
case "merge/dissoc":
case "swap/dissoc":
return true;

break;
default:
return false;

}
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc1,k2);
} else {
var v1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m1,k2,cljs.core.cst$kw$taoensso$encore_SLASH_nx);
if(cljs.core.truth_((function (){var and__5000__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return ((cljs.core.map_QMARK_(v1)) && (cljs.core.map_QMARK_(v2)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc1,k2,taoensso.encore._merge_with.cljs$core$IFn$_invoke$arity$4(true,f,v1,v2));
} else {
if(cljs.core.keyword_identical_QMARK_(v1,cljs.core.cst$kw$taoensso$encore_SLASH_nx)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc1,k2,v2);
} else {
var v3 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v1,v2) : f.call(null,v1,v2));
if(cljs.core.truth_((function (){var G__17509 = v3;
var G__17509__$1 = (((G__17509 instanceof cljs.core.Keyword))?G__17509.fqn:null);
switch (G__17509__$1) {
case "merge/dissoc":
case "swap/dissoc":
return true;

break;
default:
return false;

}
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc1,k2);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc1,k2,v3);
}
}
}
}
}),m1,m2);
} else {
return cljs.core.reduce_kv((function (acc2,k1,v1){
var v2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m2,k1,cljs.core.cst$kw$taoensso$encore_SLASH_nx);
if(cljs.core.truth_((function (){var G__17510 = v2;
var G__17510__$1 = (((G__17510 instanceof cljs.core.Keyword))?G__17510.fqn:null);
switch (G__17510__$1) {
case "merge/dissoc":
case "swap/dissoc":
return true;

break;
default:
return false;

}
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc2,k1);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return ((cljs.core.map_QMARK_(v1)) && (cljs.core.map_QMARK_(v2)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc2,k1,taoensso.encore._merge_with.cljs$core$IFn$_invoke$arity$4(true,f,v1,v2));
} else {
if(cljs.core.keyword_identical_QMARK_(v2,cljs.core.cst$kw$taoensso$encore_SLASH_nx)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc2,k1,v1);
} else {
var v3 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v1,v2) : f.call(null,v1,v2));
if(cljs.core.truth_((function (){var G__17511 = v3;
var G__17511__$1 = (((G__17511 instanceof cljs.core.Keyword))?G__17511.fqn:null);
switch (G__17511__$1) {
case "merge/dissoc":
case "swap/dissoc":
return true;

break;
default:
return false;

}
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc2,k1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc2,k1,v3);
}
}
}
}
}),m2,m1);
}
}
}
}));

(taoensso.encore._merge_with.cljs$lang$maxFixedArity = 4);

var _merge_with_17529 = taoensso.encore._merge_with;
/**
 * Like `core/merge` but faster, supports `:merge/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17530 = arguments.length;
var i__5727__auto___17531 = (0);
while(true){
if((i__5727__auto___17531 < len__5726__auto___17530)){
args__5732__auto__.push((arguments[i__5727__auto___17531]));

var G__17532 = (i__5727__auto___17531 + (1));
i__5727__auto___17531 = G__17532;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var G__17518 = false;
var G__17519 = (function (x,y){
return y;
});
var G__17520 = maps;
return (_merge_with_17529.cljs$core$IFn$_invoke$arity$3 ? _merge_with_17529.cljs$core$IFn$_invoke$arity$3(G__17518,G__17519,G__17520) : _merge_with_17529.call(null,G__17518,G__17519,G__17520));
}));

(taoensso.encore.merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.merge.cljs$lang$applyTo = (function (seq17517){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17517));
}));


/**
 * Like `core/merge-with` but faster, supports `:merge/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17533 = arguments.length;
var i__5727__auto___17534 = (0);
while(true){
if((i__5727__auto___17534 < len__5726__auto___17533)){
args__5732__auto__.push((arguments[i__5727__auto___17534]));

var G__17535 = (i__5727__auto___17534 + (1));
i__5727__auto___17534 = G__17535;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return (_merge_with_17529.cljs$core$IFn$_invoke$arity$3 ? _merge_with_17529.cljs$core$IFn$_invoke$arity$3(false,f,maps) : _merge_with_17529.call(null,false,f,maps));
}));

(taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq17521){
var G__17522 = cljs.core.first(seq17521);
var seq17521__$1 = cljs.core.next(seq17521);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17522,seq17521__$1);
}));


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17536 = arguments.length;
var i__5727__auto___17537 = (0);
while(true){
if((i__5727__auto___17537 < len__5726__auto___17536)){
args__5732__auto__.push((arguments[i__5727__auto___17537]));

var G__17538 = (i__5727__auto___17537 + (1));
i__5727__auto___17537 = G__17538;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var G__17524 = true;
var G__17525 = (function (x,y){
return y;
});
var G__17526 = maps;
return (_merge_with_17529.cljs$core$IFn$_invoke$arity$3 ? _merge_with_17529.cljs$core$IFn$_invoke$arity$3(G__17524,G__17525,G__17526) : _merge_with_17529.call(null,G__17524,G__17525,G__17526));
}));

(taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq17523){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17523));
}));


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17539 = arguments.length;
var i__5727__auto___17540 = (0);
while(true){
if((i__5727__auto___17540 < len__5726__auto___17539)){
args__5732__auto__.push((arguments[i__5727__auto___17540]));

var G__17541 = (i__5727__auto___17540 + (1));
i__5727__auto___17540 = G__17541;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return (_merge_with_17529.cljs$core$IFn$_invoke$arity$3 ? _merge_with_17529.cljs$core$IFn$_invoke$arity$3(true,f,maps) : _merge_with_17529.call(null,true,f,maps));
}));

(taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq17527){
var G__17528 = cljs.core.first(seq17527);
var seq17527__$1 = cljs.core.next(seq17527);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17528,seq17527__$1);
}));

/**
 * Like `core/merge` but faster.
 *   Doesn't support zero arity, single arity case takes a collection of maps.
 */
taoensso.encore.fast_merge = (function taoensso$encore$fast_merge(var_args){
var G__17543 = arguments.length;
switch (G__17543) {
case 1:
return taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$1 = (function (maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.fast_merge,null,maps);
}));

(taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
var n2 = cljs.core.count(m2);
if((n2 === (0))){
var or__5002__auto__ = m1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return m2;
}
} else {
var n1 = cljs.core.count(m1);
if((n1 >= n2)){
return cljs.core.reduce_kv(cljs.core.assoc,m1,m2);
} else {
return cljs.core.reduce_kv((function (m,k,v){
if(cljs.core.contains_QMARK_(m,k)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}),m2,m1);
}
}
}));

(taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$3 = (function (m1,m2,m3){
return taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$2(taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$2(m1,m2),m3);
}));

(taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$4 = (function (m1,m2,m3,m4){
return taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$2(taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$2(taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$2(m1,m2),m3),m4);
}));

(taoensso.encore.fast_merge.cljs$lang$maxFixedArity = 4);


/**
* @constructor
*/
taoensso.encore.Pred = (function (pred_fn){
this.pred_fn = pred_fn;
});

(taoensso.encore.Pred.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pred_DASH_fn], null);
}));

(taoensso.encore.Pred.cljs$lang$type = true);

(taoensso.encore.Pred.cljs$lang$ctorStr = "taoensso.encore/Pred");

(taoensso.encore.Pred.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/Pred");
}));

/**
 * Positional factory function for taoensso.encore/Pred.
 */
taoensso.encore.__GT_Pred = (function taoensso$encore$__GT_Pred(pred_fn){
return (new taoensso.encore.Pred(pred_fn));
});

/**
 * Experimental, subject to change without notice!
 *   Wraps given predicate fn to return `Pred` for use with `submap?`, etc.
 *   Arity of predicate fn depends on context in which it'll be used.
 *   See also `pred-fn`.
 */
taoensso.encore.pred = (function taoensso$encore$pred(pred_fn){
return (new taoensso.encore.Pred(pred_fn));
});
/**
 * Experimental, subject to change without notice!
 *   Returns unwrapped predicate fn when given `Pred`, otherwise returns nil.
 *   See also `pred`.
 */
taoensso.encore.pred_fn = (function taoensso$encore$pred_fn(pred){
if((pred instanceof taoensso.encore.Pred)){
return pred.pred_fn;
} else {
return null;
}
});
/**
 * Returns true iff `sub` is a (possibly nested) submap of `m`,
 *   i.e. iff every (nested) value in `sub` has the same (nested) value in `m`.
 *   Uses stack recursion so supports only limited nesting.
 */
taoensso.encore.submap_QMARK_ = (function taoensso$encore$submap_QMARK_(m,sub){
return cljs.core.reduce_kv((function (_,k,v){
if(cljs.core.map_QMARK_(v)){
var sub_STAR_ = v;
var m_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var b2__1576__auto__ = (function (){var and__5000__auto__ = cljs.core.map_QMARK_(m_STAR_);
if(and__5000__auto__){
return (taoensso.encore.submap_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.submap_QMARK_.cljs$core$IFn$_invoke$arity$2(m_STAR_,sub_STAR_) : taoensso.encore.submap_QMARK_.call(null,m_STAR_,sub_STAR_));
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(b2__1576__auto__)){
var match_QMARK_ = b2__1576__auto__;
return true;
} else {
return cljs.core.reduced(false);
}
} else {
var sval = v;
var mval = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.cst$kw$taoensso$encore_SLASH_nx);
var b2__1576__auto__ = (function (){var b2__1576__auto__ = taoensso.encore.pred_fn(sval);
if(cljs.core.truth_(b2__1576__auto__)){
var pf = b2__1576__auto__;
return (pf.cljs$core$IFn$_invoke$arity$1 ? pf.cljs$core$IFn$_invoke$arity$1(mval) : pf.call(null,mval));
} else {
var G__17545 = sval;
var G__17545__$1 = (((G__17545 instanceof cljs.core.Keyword))?G__17545.fqn:null);
switch (G__17545__$1) {
case "submap/nx":
return cljs.core.keyword_identical_QMARK_(mval,cljs.core.cst$kw$taoensso$encore_SLASH_nx);

break;
case "submap/ex":
return (!(cljs.core.keyword_identical_QMARK_(mval,cljs.core.cst$kw$taoensso$encore_SLASH_nx)));

break;
case "submap/some":
return taoensso.encore.some_QMARK_(mval);

break;
default:
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sval,mval);

}
}
})();
if(cljs.core.truth_(b2__1576__auto__)){
var match_QMARK_ = b2__1576__auto__;
return true;
} else {
return cljs.core.reduced(false);
}
}
}),true,sub);
});
/**
 * Like `select-keys` but supports nested key spec:
 * 
 *  (select-nested-keys
 *    {:a :A :b :B :c {:c1 :C1 :c2 :C2} :d :D} ; `src-map`
 *    [:a {:c [:c1], :d [:d1 :d2]}]) ; `key-spec`
 * 
 *    => {:a :A, :c {:c1 :C1}, :d :D}
 * 
 *   Note that as with the `{:d [:d1 :d2]}` spec in the example above,
 *   if spec expects a nested map but the actual value is not a map,
 *   the actual value will be included in output as-is.
 * 
 *   Has the same behaviour as `select-keys` when `key-spec` is a
 *   simple vector of keys.
 */
taoensso.encore.select_nested_keys = (function taoensso$encore$select_nested_keys(src_map,key_spec){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$encore$select_nested_keys_$_rf(acc,spec_in){
if(cljs.core.map_QMARK_(spec_in)){
return cljs.core.reduce_kv((function (acc__$1,k,nested_spec_in){
if(cljs.core.contains_QMARK_(src_map,k)){
var src_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(src_map,k);
if(cljs.core.map_QMARK_(src_val)){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,k,(taoensso.encore.select_nested_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.select_nested_keys.cljs$core$IFn$_invoke$arity$2(src_val,nested_spec_in) : taoensso.encore.select_nested_keys.call(null,src_val,nested_spec_in)));
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,k,src_val);
}
} else {
return acc__$1;
}
}),acc,spec_in);
} else {
var k = spec_in;
if(cljs.core.contains_QMARK_(src_map,k)){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(src_map,k));
} else {
return acc;
}
}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),key_spec));
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.LightAtom = (function (state){
this.state = state;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 98304;
});
(taoensso.encore.LightAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
}));

(taoensso.encore.LightAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new$){
var self__ = this;
var ___$1 = this;
(self__.state = new$);

return new$;
}));

(taoensso.encore.LightAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (t,swap_fn){
var self__ = this;
var t__$1 = this;
return (t__$1.cljs$core$IFn$_invoke$arity$1 ? t__$1.cljs$core$IFn$_invoke$arity$1(swap_fn) : t__$1.call(null,swap_fn));
}));

(taoensso.encore.LightAtom.prototype.call = (function() {
var G__17551 = null;
var G__17551__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.state;
});
var G__17551__2 = (function (self__,swap_fn){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var new$ = (swap_fn.cljs$core$IFn$_invoke$arity$1 ? swap_fn.cljs$core$IFn$_invoke$arity$1(self__.state) : swap_fn.call(null,self__.state));
(self__.state = new$);

return new$;
});
var G__17551__3 = (function (self__,k,swap_fn){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var old_map = self__.state;
var new_val = (function (){var G__17548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_map,k);
return (swap_fn.cljs$core$IFn$_invoke$arity$1 ? swap_fn.cljs$core$IFn$_invoke$arity$1(G__17548) : swap_fn.call(null,G__17548));
})();
var new_map = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_map,k,new_val);
(self__.state = new_map);

return new_val;
});
G__17551 = function(self__,k,swap_fn){
switch(arguments.length){
case 1:
return G__17551__1.call(this,self__);
case 2:
return G__17551__2.call(this,self__,k);
case 3:
return G__17551__3.call(this,self__,k,swap_fn);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__17551.cljs$core$IFn$_invoke$arity$1 = G__17551__1;
G__17551.cljs$core$IFn$_invoke$arity$2 = G__17551__2;
G__17551.cljs$core$IFn$_invoke$arity$3 = G__17551__3;
return G__17551;
})()
);

(taoensso.encore.LightAtom.prototype.apply = (function (self__,args17547){
var self__ = this;
var self____$1 = this;
var args__5217__auto__ = cljs.core.aclone(args17547);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__5217__auto__.length > (20)))?(function (){var G__17549 = args__5217__auto__.slice((0),(20));
G__17549.push(args__5217__auto__.slice((20)));

return G__17549;
})():args__5217__auto__)));
}));

(taoensso.encore.LightAtom.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return self__.state;
}));

(taoensso.encore.LightAtom.prototype.cljs$core$IFn$_invoke$arity$1 = (function (swap_fn){
var self__ = this;
var _ = this;
var new$ = (swap_fn.cljs$core$IFn$_invoke$arity$1 ? swap_fn.cljs$core$IFn$_invoke$arity$1(self__.state) : swap_fn.call(null,self__.state));
(self__.state = new$);

return new$;
}));

(taoensso.encore.LightAtom.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,swap_fn){
var self__ = this;
var _ = this;
var old_map = self__.state;
var new_val = (function (){var G__17550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_map,k);
return (swap_fn.cljs$core$IFn$_invoke$arity$1 ? swap_fn.cljs$core$IFn$_invoke$arity$1(G__17550) : swap_fn.call(null,G__17550));
})();
var new_map = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_map,k,new_val);
(self__.state = new_map);

return new_val;
}));

(taoensso.encore.LightAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
}));

(taoensso.encore.LightAtom.cljs$lang$type = true);

(taoensso.encore.LightAtom.cljs$lang$ctorStr = "taoensso.encore/LightAtom");

(taoensso.encore.LightAtom.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/LightAtom");
}));

/**
 * Positional factory function for taoensso.encore/LightAtom.
 */
taoensso.encore.__GT_LightAtom = (function taoensso$encore$__GT_LightAtom(state){
return (new taoensso.encore.LightAtom(state));
});

/**
 * Private, don't use. Micro-optimized lightweight `atom`.
 *   Up to 30% faster than standard atoms, with the same atomicity guarantees.
 */
taoensso.encore.latom = (function taoensso$encore$latom(init_state){
return (new taoensso.encore.LightAtom(init_state));
});
/**
 * Impln. for 0-key resets
 */
taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,m1){
while(true){
var m0 = cljs.core.deref(atom_);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,m0,m1,m1) : return$.call(null,m0,m0,m1,m1));
} else {
continue;
}
break;
}
});
/**
 * Impln. for 1-key resets
 */
taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
var G__17552 = m0;
var G__17553 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__17554 = m1;
var G__17555 = v1;
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(G__17552,G__17553,G__17554,G__17555) : return$.call(null,G__17552,G__17553,G__17554,G__17555));
} else {
continue;
}
break;
}
});
/**
 * Impln. for n-key resets
 */
taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__1576__auto__ = cljs.core.seq(ks);
if(b2__1576__auto__){
var ks_seq = b2__1576__auto__;
if(cljs.core.next(ks_seq)){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc_in(m0,ks,v1);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
var G__17556 = m0;
var G__17557 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__17558 = m1;
var G__17559 = v1;
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(G__17556,G__17557,G__17558,G__17559) : return$.call(null,G__17556,G__17557,G__17558,G__17559));
} else {
continue;
}
break;
}
} else {
return taoensso.encore._reset_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_(return$,atom_,v1);
}
});
var return_17564 = (function (m0,v0,m1,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics, returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var G__17561 = arguments.length;
switch (G__17561) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_17564,atom_,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_17564,atom_,ks,null,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_17564,atom_,ks,not_found,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4);


/**
 * Like `reset-in!` but optimized for single-key case.
 */
taoensso.encore.reset_val_BANG_ = (function taoensso$encore$reset_val_BANG_(var_args){
var G__17563 = arguments.length;
switch (G__17563) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_(return_17564,atom_,k,null,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_(return_17564,atom_,k,not_found,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4);

var sentinel_17571 = ({});
var return_17572 = (function (m0,v0,m1,v1){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v0,v1);
});
/**
 * Like `reset-in!` but returns true iff the atom's value changed.
 */
taoensso.encore.reset_in_BANG__QMARK_ = (function taoensso$encore$reset_in_BANG__QMARK_(var_args){
var G__17570 = arguments.length;
switch (G__17570) {
case 2:
return taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_17572,atom_,val);
}));

(taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_17572,atom_,ks,sentinel_17571,val);
}));

(taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_17572,atom_,ks,not_found,val);
}));

(taoensso.encore.reset_in_BANG__QMARK_.cljs$lang$maxFixedArity = 4);


/**
 * Like `reset-in!?` but optimized for single-key case.
 */
taoensso.encore.reset_val_BANG__QMARK_ = (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,sentinel_17571,new_val);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v0,new_val);
});
/**
 * Atomically swaps value of `atom_` to `val` and returns
 *   true iff the atom's value changed. See also `reset-in!?`.
 */
taoensso.encore.reset_BANG__QMARK_ = (function taoensso$encore$reset_BANG__QMARK_(atom_,val){
while(true){
var old = cljs.core.deref(atom_);
if(cljs.core.compare_and_set_BANG_(atom_,old,val)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,val);
} else {
continue;
}
break;
}
});

/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
});

(taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$newv,cljs.core.cst$sym$returnv], null);
}));

(taoensso.encore.Swapped.cljs$lang$type = true);

(taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped");

(taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/Swapped");
}));

/**
 * Positional factory function for taoensso.encore/Swapped.
 */
taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.return_swapped = (function taoensso$encore$return_swapped(sw,m0,m1){
var rv = sw.returnv;
var G__17574 = rv;
var G__17574__$1 = (((G__17574 instanceof cljs.core.Keyword))?G__17574.fqn:null);
switch (G__17574__$1) {
case "swap/changed?":
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m1,m0);

break;
case "swap/new":
return m1;

break;
case "swap/old":
return m0;

break;
default:
return rv;

}
});
/**
 * Impln. for 0-key swaps
 */
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var m0 = cljs.core.deref(atom_);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m0) : f.call(null,m0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var m1 = ((sw_QMARK_)?s1.newv:s1);
if(cljs.core.keyword_identical_QMARK_(m1,cljs.core.cst$kw$swap_SLASH_abort)){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m1);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,m0,m0,m0) : return$.call(null,m0,m0,m0,m0));
}
} else {
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m1);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,m0,m1,m1) : return$.call(null,m0,m0,m1,m1));
}
} else {
continue;
}
}
break;
}
});
/**
 * Impln. for 1-key swaps
 */
taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.keyword_identical_QMARK_(f,cljs.core.cst$kw$swap_SLASH_dissoc)){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
var G__17576 = m0;
var G__17577 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__17578 = m1;
var G__17579 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(G__17576,G__17577,G__17578,G__17579) : return$.call(null,G__17576,G__17577,G__17578,G__17579));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if(cljs.core.keyword_identical_QMARK_(v1,cljs.core.cst$kw$swap_SLASH_abort)){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m0);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,v0,m0,v0) : return$.call(null,m0,v0,m0,v0));
}
} else {
var m1 = ((cljs.core.keyword_identical_QMARK_(v1,cljs.core.cst$kw$swap_SLASH_dissoc))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1));
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m1);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,v0,m1,v1) : return$.call(null,m0,v0,m1,v1));
}
} else {
continue;
}
}
break;
}
}
});
/**
 * Impln. for n-key swaps
 */
taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__1576__auto__ = cljs.core.seq(ks);
if(b2__1576__auto__){
var ks_seq = b2__1576__auto__;
if(cljs.core.next(ks_seq)){
if(cljs.core.keyword_identical_QMARK_(f,cljs.core.cst$kw$swap_SLASH_dissoc)){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2(m0,ks);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
var G__17580 = m0;
var G__17581 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__17582 = m1;
var G__17583 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(G__17580,G__17581,G__17582,G__17583) : return$.call(null,G__17580,G__17581,G__17582,G__17583));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if(cljs.core.keyword_identical_QMARK_(v1,cljs.core.cst$kw$swap_SLASH_abort)){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m0);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,v0,m0,v0) : return$.call(null,m0,v0,m0,v0));
}
} else {
var m1 = ((cljs.core.keyword_identical_QMARK_(v1,cljs.core.cst$kw$swap_SLASH_dissoc))?taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2(m0,ks):cljs.core.assoc_in(m0,ks,v1));
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m1);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,v0,m1,v1) : return$.call(null,m0,v0,m1,v1));
}
} else {
continue;
}
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_(return$,atom_,f);
}
});
var return_17588 = (function (m0,v0,m1,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var G__17585 = arguments.length;
switch (G__17585) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_17588,atom_,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_17588,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_17588,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4);


/**
 * Like `swap-in!` but optimized for single-key case.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(var_args){
var G__17587 = arguments.length;
switch (G__17587) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_17588,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_17588,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var G__17592 = arguments.length;
switch (G__17592) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3(atom_,k,null);
}));

(taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found,(function (v0){
return taoensso.encore.swapped(cljs.core.cst$kw$swap_SLASH_dissoc,v0);
}));
}));

(taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Returns current system insant as milliseconds since Unix epoch.
 */
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return Date.now();
});
/**
 * Returns current system instant as `js/Date`.
 */
taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
/**
 * Returns current system instant as `js/Date`.
 */
taoensso.encore.now_inst = (function taoensso$encore$now_inst(){
return (new Date());
});
/**
 * Returns current value of best-resolution time source as nanoseconds.
 */
taoensso.encore.now_nano = (function (){var b2__1576__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_window,"performance");
if(cljs.core.truth_(b2__1576__auto__)){
var perf = b2__1576__auto__;
var b2__1576__auto____$1 = (function (){var or__5002__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"now");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"mozNow");
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"webkitNow");
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"msNow");
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"oNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__1576__auto____$1)){
var pf = b2__1576__auto____$1;
return (function (){
var G__17594 = (1000000.0 * pf.call(perf));
return Math.floor(G__17594);
});
} else {
return (function (){
return (1000000.0 * Date.now());
});
}
} else {
return (function (){
return (1000000.0 * Date.now());
});
}
})();
/**
 * Like `core/memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = taoensso.encore.latom(cljs.core.PersistentArrayMap.EMPTY);
return (function() { 
var G__17596__delegate = function (args){
return cljs.core.deref((function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cache_.cljs$core$IFn$_invoke$arity$0 ? cache_.cljs$core$IFn$_invoke$arity$0() : cache_.call(null)),args);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__17595 = (function taoensso$encore$memoize_last_$_swap_fn(cache){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([args,(new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null))]);
}
});
return (cache_.cljs$core$IFn$_invoke$arity$1 ? cache_.cljs$core$IFn$_invoke$arity$1(G__17595) : cache_.call(null,G__17595));
})(),args);
}
})());
};
var G__17596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17597__i = 0, G__17597__a = new Array(arguments.length -  0);
while (G__17597__i < G__17597__a.length) {G__17597__a[G__17597__i] = arguments[G__17597__i + 0]; ++G__17597__i;}
  args = new cljs.core.IndexedSeq(G__17597__a,0,null);
} 
return G__17596__delegate.call(this,args);};
G__17596.cljs$lang$maxFixedArity = 0;
G__17596.cljs$lang$applyTo = (function (arglist__17598){
var args = cljs.core.seq(arglist__17598);
return G__17596__delegate(args);
});
G__17596.cljs$core$IFn$_invoke$arity$variadic = G__17596__delegate;
return G__17596;
})()
;
});
/**
 * For Clj: fastest possible memoize. Non-racey, 0-7 arity only.
 *   For Cljs: same as `core/memoize`.
 */
taoensso.encore.fmemoize = (function taoensso$encore$fmemoize(f){
return cljs.core.memoize(f);
});
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(rate){
return (Math.random() <= rate);
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
});

(taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$delay,cljs.core.with_meta(cljs.core.cst$sym$udt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
}));

(taoensso.encore.SimpleCacheEntry.cljs$lang$type = true);

(taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry");

(taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/SimpleCacheEntry");
}));

/**
 * Positional factory function for taoensso.encore/SimpleCacheEntry.
 */
taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
});

(taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$delay,cljs.core.with_meta(cljs.core.cst$sym$udt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$tick_DASH_lru,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$tick_DASH_lfu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
}));

(taoensso.encore.TickedCacheEntry.cljs$lang$type = true);

(taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry");

(taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/TickedCacheEntry");
}));

/**
 * Positional factory function for taoensso.encore/TickedCacheEntry.
 */
taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Returns a cached version of given referentially transparent function `f`.
 * 
 *   Like `core/memoize` but:
 *  - Often faster, depending on options.
 *  - Prevents race conditions on writes.
 *  - Supports cache invalidation by prepending args with:
 *    - `:cache/del`   ; Delete cached item for subsequent args, returns nil.
 *    - `:cache/fresh` ; Renew  cached item for subsequent args, returns new val.
 * 
 *  - Supports options:
 *    - `ttl-ms` ; Expire cached items after <this> many msecs.
 *    - `size`   ; Restrict cache size to <this> many items at the next garbage
 *               ; collection (GC).
 * 
 *    - `gc-every` ; Run garbage collection (GC) approximately once every
 *                 ; <this> many calls to cached fn. If unspecified, GC rate
 *                 ; will be determined automatically based on `size`.
 * 
 *   See also `defn-cached`, `fmemoize`, `memoize-last`.
 */
taoensso.encore.cache = (function taoensso$encore$cache(var_args){
var G__17602 = arguments.length;
switch (G__17602) {
case 1:
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = ({});
return (function() { 
var taoensso$encore$cached__delegate = function (xs){
var x1 = cljs.core.first(xs);
var G__17605 = x1;
var G__17605__$1 = (((G__17605 instanceof cljs.core.Keyword))?G__17605.fqn:null);
switch (G__17605__$1) {
case "cache/del":
case "mem/del":
var xn = cljs.core.next(xs);
var x2 = cljs.core.first(xn);
if(cljs.core.keyword_identical_QMARK_(x2,cljs.core.cst$kw$mem_SLASH_all)){
cljs.core.vreset_BANG_(cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cache_.cljs$core$IDeref$_deref$arity$1(null),xn));
}

return null;

break;
case "cache/fresh":
case "mem/fresh":
var xn = cljs.core.next(xs);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xn);
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache_.cljs$core$IDeref$_deref$arity$1(null),xn,v));

return v;

break;
default:
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache_.cljs$core$IDeref$_deref$arity$1(null),xs,v__$1));

return v__$1;
} else {
return v;
}

}
};
var taoensso$encore$cached = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__17645__i = 0, G__17645__a = new Array(arguments.length -  0);
while (G__17645__i < G__17645__a.length) {G__17645__a[G__17645__i] = arguments[G__17645__i + 0]; ++G__17645__i;}
  xs = new cljs.core.IndexedSeq(G__17645__a,0,null);
} 
return taoensso$encore$cached__delegate.call(this,xs);};
taoensso$encore$cached.cljs$lang$maxFixedArity = 0;
taoensso$encore$cached.cljs$lang$applyTo = (function (arglist__17646){
var xs = cljs.core.seq(arglist__17646);
return taoensso$encore$cached__delegate(xs);
});
taoensso$encore$cached.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$cached__delegate;
return taoensso$encore$cached;
})()
;
}));

(taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2 = (function (p__17606,f){
var map__17607 = p__17606;
var map__17607__$1 = cljs.core.__destructure_map(map__17607);
var opts = map__17607__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17607__$1,cljs.core.cst$kw$size);
var ttl_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17607__$1,cljs.core.cst$kw$ttl_DASH_ms);
var gc_every = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17607__$1,cljs.core.cst$kw$gc_DASH_every);
var e_17647 = (function (){try{if((function (){var fexpr__17609 = (function (x){
return taoensso.truss.impl.ks_LT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$gc_DASH_every,null,cljs.core.cst$kw$size,null,cljs.core.cst$kw$ttl_DASH_ms,null], null), null),x);
});
return fexpr__17609(opts);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17608){if((e17608 instanceof Error)){
var e_17647 = e17608;
return e_17647;
} else {
throw e17608;

}
}})();
if((e_17647 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,cljs.core.cst$sym$taoensso$encore,3290,4,"/Users/AlexRoot-Roatch/current-projects/tic-tac-toe/out/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ks_LT__EQ_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$gc_DASH_every,"null",cljs.core.cst$kw$size,"null",cljs.core.cst$kw$ttl_DASH_ms,"null"], null), null)], null),null,cljs.core.cst$sym$opts,opts,e_17647,null);
}

if(cljs.core.truth_((function (){var fexpr__17612 = (function (x){
var or__5002__auto__ = (function (){var fexpr__17613 = taoensso.truss.impl.safe_pred(cljs.core.nil_QMARK_);
return (fexpr__17613.cljs$core$IFn$_invoke$arity$1 ? fexpr__17613.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17613.call(null,x));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var fexpr__17614 = taoensso.truss.impl.safe_pred(taoensso.encore.pos_num_QMARK_);
return (fexpr__17614.cljs$core$IFn$_invoke$arity$1 ? fexpr__17614.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17614.call(null,x));
}
});
return fexpr__17612(size);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,cljs.core.cst$sym$taoensso$encore,3291,4,"/Users/AlexRoot-Roatch/current-projects/tic-tac-toe/out/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$or,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$pos_DASH_num_QMARK_], null),null,cljs.core.cst$sym$size,size,null,null);
}

if(cljs.core.truth_((function (){var fexpr__17617 = (function (x){
var or__5002__auto__ = (function (){var fexpr__17618 = taoensso.truss.impl.safe_pred(cljs.core.nil_QMARK_);
return (fexpr__17618.cljs$core$IFn$_invoke$arity$1 ? fexpr__17618.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17618.call(null,x));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var fexpr__17619 = taoensso.truss.impl.safe_pred(taoensso.encore.pos_num_QMARK_);
return (fexpr__17619.cljs$core$IFn$_invoke$arity$1 ? fexpr__17619.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17619.call(null,x));
}
});
return fexpr__17617(ttl_ms);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,cljs.core.cst$sym$taoensso$encore,3291,4,"/Users/AlexRoot-Roatch/current-projects/tic-tac-toe/out/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$or,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$pos_DASH_num_QMARK_], null),null,cljs.core.cst$sym$ttl_DASH_ms,ttl_ms,null,null);
}

if(cljs.core.truth_((function (){var fexpr__17622 = (function (x){
var or__5002__auto__ = (function (){var fexpr__17623 = taoensso.truss.impl.safe_pred(cljs.core.nil_QMARK_);
return (fexpr__17623.cljs$core$IFn$_invoke$arity$1 ? fexpr__17623.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17623.call(null,x));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var fexpr__17624 = taoensso.truss.impl.safe_pred(taoensso.encore.pos_num_QMARK_);
return (fexpr__17624.cljs$core$IFn$_invoke$arity$1 ? fexpr__17624.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17624.call(null,x));
}
});
return fexpr__17622(gc_every);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,cljs.core.cst$sym$taoensso$encore,3291,4,"/Users/AlexRoot-Roatch/current-projects/tic-tac-toe/out/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$or,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$pos_DASH_num_QMARK_], null),null,cljs.core.cst$sym$gc_DASH_every,gc_every,null,null);
}


if(cljs.core.truth_(size)){
var gc_now_QMARK_ = taoensso.encore.gc_now_QMARK_;
var ticker = (taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.counter.call(null));
var cache_ = taoensso.encore.latom(null);
var latch_ = taoensso.encore.latom(null);
var ttl_ms__$1 = cljs.core.long$((function (){var or__5002__auto__ = ttl_ms;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})());
var ttl_QMARK_ = (!((ttl_ms__$1 === (0))));
var size__$1 = cljs.core.long$(size);
var gc_every__$1 = cljs.core.long$((function (){var or__5002__auto__ = gc_every;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return taoensso.encore.clamp_int((1000),(16000),size__$1);
}
})());
return (function() { 
var taoensso$encore$cached__delegate = function (args){
var a1 = cljs.core.first(args);
var G__17625 = a1;
var G__17625__$1 = (((G__17625 instanceof cljs.core.Keyword))?G__17625.fqn:null);
switch (G__17625__$1) {
case "cache/del":
case "mem/del":
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__17626 = a2;
var G__17626__$1 = (((G__17626 instanceof cljs.core.Keyword))?G__17626.fqn:null);
switch (G__17626__$1) {
case "cache/all":
case "mem/all":
return true;

break;
default:
return false;

}
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
var G__17627_17650 = (function (p1__17599_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17599_SHARP_,argn);
});
(cache_.cljs$core$IFn$_invoke$arity$1 ? cache_.cljs$core$IFn$_invoke$arity$1(G__17627_17650) : cache_.call(null,G__17627_17650));
}

return null;

break;
default:
var tick = (ticker.cljs$core$IFn$_invoke$arity$0 ? ticker.cljs$core$IFn$_invoke$arity$0() : ticker.call(null));
var instant = ((ttl_QMARK_)?taoensso.encore.now_udt():(0));
if((((cljs.core.rem(tick,gc_every__$1) === (0))) && ((cljs.core.count((cache_.cljs$core$IFn$_invoke$arity$0 ? cache_.cljs$core$IFn$_invoke$arity$0() : cache_.call(null))) >= (1.1 * size__$1))))){
var latch_17651 = null;
if(cljs.core.compare_and_set_BANG_(latch_,null,latch_17651)){
if(ttl_QMARK_){
var G__17628_17652 = (function taoensso$encore$cached_$_swap_fn(m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$((function (){var or__5002__auto__ = m;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});
(cache_.cljs$core$IFn$_invoke$arity$1 ? cache_.cljs$core$IFn$_invoke$arity$1(G__17628_17652) : cache_.call(null,G__17628_17652));
} else {
}

var snapshot_17653 = (cache_.cljs$core$IFn$_invoke$arity$0 ? cache_.cljs$core$IFn$_invoke$arity$0() : cache_.call(null));
var n_to_gc_17654 = (cljs.core.count(snapshot_17653) - size__$1);
if((n_to_gc_17654 >= (0.1 * size__$1))){
var ks_to_gc_17655 = (function (){var G__17629 = n_to_gc_17654;
var G__17630 = (function (k){
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(snapshot_17653,k);
return (e.tick_lru + e.tick_lfu);
});
var G__17631 = cljs.core.keys(snapshot_17653);
return (taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(G__17629,G__17630,G__17631) : taoensso.encore.top.call(null,G__17629,G__17630,G__17631));
})();
var G__17632_17656 = (function taoensso$encore$cached_$_swap_fn(m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),cljs.core.transient$((function (){var or__5002__auto__ = m;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_17655));
});
(cache_.cljs$core$IFn$_invoke$arity$1 ? cache_.cljs$core$IFn$_invoke$arity$1(G__17632_17656) : cache_.call(null,G__17632_17656));
} else {
}

} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__17633 = a1;
var G__17633__$1 = (((G__17633 instanceof cljs.core.Keyword))?G__17633.fqn:null);
switch (G__17633__$1) {
case "cache/fresh":
case "mem/fresh":
return true;

break;
default:
return false;

}
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var _ = null;
var e = (function (){var G__17634 = args__$1;
var G__17635 = (function taoensso$encore$cached_$_swap_fn(_QMARK_e){
if(cljs.core.truth_((function (){var or__5002__auto__ = (_QMARK_e == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}),null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
});
return (cache_.cljs$core$IFn$_invoke$arity$2 ? cache_.cljs$core$IFn$_invoke$arity$2(G__17634,G__17635) : cache_.call(null,G__17634,G__17635));
})();
return cljs.core.deref(e.delay);

}
};
var taoensso$encore$cached = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17658__i = 0, G__17658__a = new Array(arguments.length -  0);
while (G__17658__i < G__17658__a.length) {G__17658__a[G__17658__i] = arguments[G__17658__i + 0]; ++G__17658__i;}
  args = new cljs.core.IndexedSeq(G__17658__a,0,null);
} 
return taoensso$encore$cached__delegate.call(this,args);};
taoensso$encore$cached.cljs$lang$maxFixedArity = 0;
taoensso$encore$cached.cljs$lang$applyTo = (function (arglist__17659){
var args = cljs.core.seq(arglist__17659);
return taoensso$encore$cached__delegate(args);
});
taoensso$encore$cached.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$cached__delegate;
return taoensso$encore$cached;
})()
;
} else {
if(cljs.core.truth_(ttl_ms)){
var gc_now_QMARK_ = taoensso.encore.gc_now_QMARK_;
var cache_ = taoensso.encore.latom(null);
var latch_ = taoensso.encore.latom(null);
var ttl_ms__$1 = cljs.core.long$(ttl_ms);
var gc_rate = (function (){var gce = (function (){var or__5002__auto__ = gc_every;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 8000.0;
}
})();
return (1.0 / cljs.core.long$(gce));
})();
return (function() { 
var taoensso$encore$cached__delegate = function (args){
var a1 = cljs.core.first(args);
var G__17636 = a1;
var G__17636__$1 = (((G__17636 instanceof cljs.core.Keyword))?G__17636.fqn:null);
switch (G__17636__$1) {
case "cache/del":
case "mem/del":
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__17637 = a2;
var G__17637__$1 = (((G__17637 instanceof cljs.core.Keyword))?G__17637.fqn:null);
switch (G__17637__$1) {
case "cache/all":
case "mem/all":
return true;

break;
default:
return false;

}
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
var G__17638_17662 = (function (p1__17600_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17600_SHARP_,argn);
});
(cache_.cljs$core$IFn$_invoke$arity$1 ? cache_.cljs$core$IFn$_invoke$arity$1(G__17638_17662) : cache_.call(null,G__17638_17662));
}

return null;

break;
default:
var instant = taoensso.encore.now_udt();
if(cljs.core.truth_((gc_now_QMARK_.cljs$core$IFn$_invoke$arity$1 ? gc_now_QMARK_.cljs$core$IFn$_invoke$arity$1(gc_rate) : gc_now_QMARK_.call(null,gc_rate)))){
var latch_17663 = null;
if(cljs.core.compare_and_set_BANG_(latch_,null,latch_17663)){
var G__17639_17664 = (function taoensso$encore$cached_$_swap_fn(m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$((function (){var or__5002__auto__ = m;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});
(cache_.cljs$core$IFn$_invoke$arity$1 ? cache_.cljs$core$IFn$_invoke$arity$1(G__17639_17664) : cache_.call(null,G__17639_17664));

} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__17640 = a1;
var G__17640__$1 = (((G__17640 instanceof cljs.core.Keyword))?G__17640.fqn:null);
switch (G__17640__$1) {
case "cache/fresh":
case "mem/fresh":
return true;

break;
default:
return false;

}
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var _ = null;
var e = (function (){var G__17641 = args__$1;
var G__17642 = (function taoensso$encore$cached_$_swap_fn(_QMARK_e){
if(cljs.core.truth_((function (){var or__5002__auto__ = (_QMARK_e == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}),null)),instant));
} else {
return _QMARK_e;
}
});
return (cache_.cljs$core$IFn$_invoke$arity$2 ? cache_.cljs$core$IFn$_invoke$arity$2(G__17641,G__17642) : cache_.call(null,G__17641,G__17642));
})();
return cljs.core.deref(e.delay);

}
};
var taoensso$encore$cached = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17666__i = 0, G__17666__a = new Array(arguments.length -  0);
while (G__17666__i < G__17666__a.length) {G__17666__a[G__17666__i] = arguments[G__17666__i + 0]; ++G__17666__i;}
  args = new cljs.core.IndexedSeq(G__17666__a,0,null);
} 
return taoensso$encore$cached__delegate.call(this,args);};
taoensso$encore$cached.cljs$lang$maxFixedArity = 0;
taoensso$encore$cached.cljs$lang$applyTo = (function (arglist__17667){
var args = cljs.core.seq(arglist__17667);
return taoensso$encore$cached__delegate(args);
});
taoensso$encore$cached.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$cached__delegate;
return taoensso$encore$cached;
})()
;
} else {
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1(f);
}
}
}));

(taoensso.encore.cache.cljs$lang$maxFixedArity = 2);

/**
 * Alternative way to call `cache`, provided mostly for back compatibility.
 *   See `cache` docstring for details.
 */
taoensso.encore.memoize = (function taoensso$encore$memoize(var_args){
var G__17669 = arguments.length;
switch (G__17669) {
case 1:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1(f);
}));

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ttl_DASH_ms,ttl_ms], null),f);
}));

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$3 = (function (size,ttl_ms,f){
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$size,size,cljs.core.cst$kw$ttl_DASH_ms,ttl_ms], null),f);
}));

(taoensso.encore.memoize.cljs$lang$maxFixedArity = 3);


/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
});

(taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
}));

(taoensso.encore.LimitSpec.cljs$lang$type = true);

(taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec");

(taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/LimitSpec");
}));

/**
 * Positional factory function for taoensso.encore/LimitSpec.
 */
taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
});

(taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$udt0,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
}));

(taoensso.encore.LimitEntry.cljs$lang$type = true);

(taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry");

(taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/LimitEntry");
}));

/**
 * Positional factory function for taoensso.encore/LimitEntry.
 */
taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_lid,worst_ms){
this.m = m;
this.worst_lid = worst_lid;
this.worst_ms = worst_ms;
});

(taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m,cljs.core.cst$sym$worst_DASH_lid,cljs.core.with_meta(cljs.core.cst$sym$worst_DASH_ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
}));

(taoensso.encore.LimitHits.cljs$lang$type = true);

(taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits");

(taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/LimitHits");
}));

/**
 * Positional factory function for taoensso.encore/LimitHits.
 */
taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_lid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_lid,worst_ms));
});

var limit_spec_17681 = (function (n,ms){
var e_17682 = (function (){try{if(taoensso.encore.pos_int_QMARK_(n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17671){if((e17671 instanceof Error)){
var e_17682 = e17671;
return e_17682;
} else {
throw e17671;

}
}})();
if((e_17682 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,cljs.core.cst$sym$taoensso$encore,3505,29,"/Users/AlexRoot-Roatch/current-projects/tic-tac-toe/out/taoensso/encore.cljc",cljs.core.cst$sym$pos_DASH_int_QMARK_,null,cljs.core.cst$sym$n,n,e_17682,null);
}

var e_17683 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17672){if((e17672 instanceof Error)){
var e_17683 = e17672;
return e_17683;
} else {
throw e17672;

}
}})();
if((e_17683 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,cljs.core.cst$sym$taoensso$encore,3505,29,"/Users/AlexRoot-Roatch/current-projects/tic-tac-toe/out/taoensso/encore.cljc",cljs.core.cst$sym$pos_DASH_int_QMARK_,null,cljs.core.cst$sym$ms,ms,e_17683,null);
}


return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_spec = (function taoensso$encore$coerce_limit_spec(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (acc,lid,p__17673){
var vec__17674 = p__17673;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17674,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17674,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,lid,limit_spec_17681(n,ms));
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_(x)){
var i = (taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.counter.call(null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__17677){
var vec__17678 = p__17677;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17678,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17678,(1),null);
var _QMARK_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17678,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var or__5002__auto__ = _QMARK_id;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (i.cljs$core$IFn$_invoke$arity$0 ? i.cljs$core$IFn$_invoke$arity$0() : i.call(null));
}
})(),limit_spec_17681(n,ms));
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$context,cljs.core.cst$sym$taoensso$encore_SLASH_rate_DASH_limiter,cljs.core.cst$kw$param,cljs.core.cst$sym$rate_DASH_limiter_DASH_spec,cljs.core.cst$kw$expected,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$map,"null",cljs.core.cst$sym$vector,"null"], null), null)], null));
}
}
});
/**
 * Private, don't use.
 *   Like `rate-limiter` but returns [<state_> <rate-limiter>].
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(var_args){
var G__17686 = arguments.length;
switch (G__17686) {
case 1:
return taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$2(null,spec);
}));

(taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (opts,spec){
if(cljs.core.empty_QMARK_(spec)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly(null)], null);
} else {
var latch_ = taoensso.encore.latom(null);
var reqs_ = taoensso.encore.latom(null);
var spec__$1 = taoensso.encore.coerce_limit_spec(spec);
var map__17687 = opts;
var map__17687__$1 = cljs.core.__destructure_map(map__17687);
var gc_every = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17687__$1,cljs.core.cst$kw$gc_DASH_every,16000.0);
var gc_now_QMARK_ = taoensso.encore.gc_now_QMARK_;
var gc_rate = (function (){var gce = cljs.core.long$(gc_every);
return (1.0 / gce);
})();
var f1 = (function (rid,peek_QMARK_){
var instant = taoensso.encore.now_udt();
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not(peek_QMARK_);
if(and__5000__auto__){
return (gc_now_QMARK_.cljs$core$IFn$_invoke$arity$1 ? gc_now_QMARK_.cljs$core$IFn$_invoke$arity$1(gc_rate) : gc_now_QMARK_.call(null,gc_rate));
} else {
return and__5000__auto__;
}
})())){
var latch_17693 = null;
if(cljs.core.compare_and_set_BANG_(latch_,null,latch_17693)){
var G__17688_17694 = (function taoensso$encore$swap_fn(reqs){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv((function (acc__$1,lid,e){
var b2__1576__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec__$1,lid);
if(cljs.core.truth_(b2__1576__auto__)){
var s = b2__1576__auto__;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,lid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,lid);
}
}),entries,entries);
if(cljs.core.empty_QMARK_(new_entries)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,rid__$1,new_entries);
}
}),cljs.core.transient$((function (){var or__5002__auto__ = reqs;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
});
(reqs_.cljs$core$IFn$_invoke$arity$1 ? reqs_.cljs$core$IFn$_invoke$arity$1(G__17688_17694) : reqs_.call(null,G__17688_17694));

} else {
}
} else {
}

while(true){
var reqs = (reqs_.cljs$core$IFn$_invoke$arity$0 ? reqs_.cljs$core$IFn$_invoke$arity$0() : reqs_.call(null));
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reqs,rid);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv(((function (reqs,entries,instant,latch_,reqs_,spec__$1,map__17687,map__17687__$1,gc_every,gc_now_QMARK_,gc_rate){
return (function (acc,lid,e){
var b2__1576__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec__$1,lid);
if(cljs.core.truth_(b2__1576__auto__)){
var s = b2__1576__auto__;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.createAsIfByAssoc([lid,tdelta]),lid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,lid,tdelta),lid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,lid,tdelta),acc.worst_lid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,spec__$1,map__17687,map__17687__$1,gc_every,gc_now_QMARK_,gc_rate))
,null,entries));
if(cljs.core.truth_((function (){var or__5002__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__1576__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__1576__auto__)){
var h = b2__1576__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_lid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__1576__auto__ = (latch_.cljs$core$IFn$_invoke$arity$0 ? latch_.cljs$core$IFn$_invoke$arity$0() : latch_.call(null));
if(cljs.core.truth_(b2__1576__auto__)){
var l = b2__1576__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv(((function (b2__1576__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,spec__$1,map__17687,map__17687__$1,gc_every,gc_now_QMARK_,gc_rate){
return (function (acc,lid,s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,lid,(function (){var b2__1576__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,lid);
if(cljs.core.truth_(b2__1576__auto____$1)){
var e = b2__1576__auto____$1;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__1576__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,spec__$1,map__17687,map__17687__$1,gc_every,gc_now_QMARK_,gc_rate))
,entries,spec__$1);
if(cljs.core.compare_and_set_BANG_(reqs_,reqs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reqs,rid,new_entries))){
return null;
} else {
continue;
}
}
}
break;
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,(function() {
var taoensso$encore$rate_limiter = null;
var taoensso$encore$rate_limiter__0 = (function (){
return f1(null,false);
});
var taoensso$encore$rate_limiter__1 = (function (req_id){
return f1(req_id,false);
});
var taoensso$encore$rate_limiter__2 = (function (cmd,req_id){
var G__17689 = cmd;
var G__17689__$1 = (((G__17689 instanceof cljs.core.Keyword))?G__17689.fqn:null);
switch (G__17689__$1) {
case "rl/reset":
case "limiter/reset":
if(cljs.core.truth_((function (){var G__17690 = req_id;
var G__17690__$1 = (((G__17690 instanceof cljs.core.Keyword))?G__17690.fqn:null);
switch (G__17690__$1) {
case "rl/all":
case "limiter/all":
return true;

break;
default:
return false;

}
})())){
cljs.core.reset_BANG_(reqs_,null);
} else {
var G__17691_17697 = (function (p1__17684_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17684_SHARP_,req_id);
});
(reqs_.cljs$core$IFn$_invoke$arity$1 ? reqs_.cljs$core$IFn$_invoke$arity$1(G__17691_17697) : reqs_.call(null,G__17691_17697));
}

return null;

break;
case "rl/peek":
case "limiter/peek":
return f1(req_id,true);

break;
default:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(cmd,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$context,cljs.core.cst$sym$taoensso$encore_SLASH_rate_DASH_limiter,cljs.core.cst$kw$param,cljs.core.cst$sym$rate_DASH_limiter_DASH_command,cljs.core.cst$kw$expected,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rl_SLASH_reset,null,cljs.core.cst$kw$rl_SLASH_peek,null], null), null),cljs.core.cst$kw$req_DASH_id,req_id], null));

}
});
taoensso$encore$rate_limiter = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$rate_limiter__0.call(this);
case 1:
return taoensso$encore$rate_limiter__1.call(this,cmd);
case 2:
return taoensso$encore$rate_limiter__2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$rate_limiter.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$rate_limiter__0;
taoensso$encore$rate_limiter.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$rate_limiter__1;
taoensso$encore$rate_limiter.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$rate_limiter__2;
return taoensso$encore$rate_limiter;
})()
], null);
}
}));

(taoensso.encore.rate_limiter_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Takes a map spec of form {<limit-id> [<n-max-reqs> <msecs-window>]},
 *   and returns a basic stateful (fn rate-limiter [req-id] [command req-id]).
 * 
 *   Call fn with a single request id (e.g. username) by which to count/limit.
 *   Will return:
 *  - nil when all limits pass for that id, or
 *  - [<worst-limit-id> <worst-backoff-msecs> {<limit-id> <backoff-msecs>}]
 *    when any limits fail for that id.
 * 
 *   Or call fn with an additional command argument:
 *  `:rl/peek`  <req-id> - Check limits w/o incrementing count.
 *  `:rl/reset` <req-id> - Reset all limits for given req-id.
 * 
 *   Example:
 * 
 *  (defonce my-rate-limiter
 *    (rate-limiter
 *      {"1  per sec" [1   1000]
 *       "10 per min" [10 60000]}))
 * 
 *  (defn send-message! [username msg-content]
 *    (if-let [fail (my-rate-limiter username)]
 *      (throw (ex-info "Sorry, rate limited!" {:fail fail}))
 *      <send message>))
 */
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(var_args){
var G__17699 = arguments.length;
switch (G__17699) {
case 1:
return taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$1 = (function (spec){
var vec__17700 = taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$2(null,spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17700,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17700,(1),null);
return f;
}));

(taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$2 = (function (opts,spec){
var vec__17703 = taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$2(opts,spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17703,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17703,(1),null);
return f;
}));

(taoensso.encore.rate_limiter.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.Counter = (function (c){
this.c = c;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.Counter.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.c;
}));

(taoensso.encore.Counter.prototype.call = (function() {
var G__17711 = null;
var G__17711__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var o = self__.c;
(self__.c = (self__.c + (1)));

return o;
});
var G__17711__2 = (function (self__,add){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var o = self__.c;
(self__.c = (self__.c + add));

return o;
});
var G__17711__3 = (function (self__,action,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17708 = action;
var G__17708__$1 = (((G__17708 instanceof cljs.core.Keyword))?G__17708.fqn:null);
switch (G__17708__$1) {
case "add":
(self__.c = (self__.c + n));

return null;

break;
case "set":
(self__.c = n);

return null;

break;
case "set=":
case "set-get":
(self__.c = n);

return n;

break;
case "=set":
case "get-set":
var o = self__.c;
(self__.c = n);

return o;

break;
case "=+":
case "get-add":
var o = self__.c;
(self__.c = (self__.c + n));

return o;

break;
case "+=":
case "add-get":
(self__.c = (self__.c + n));

return self__.c;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17708__$1)].join('')));

}
});
G__17711 = function(self__,action,n){
switch(arguments.length){
case 1:
return G__17711__1.call(this,self__);
case 2:
return G__17711__2.call(this,self__,action);
case 3:
return G__17711__3.call(this,self__,action,n);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__17711.cljs$core$IFn$_invoke$arity$1 = G__17711__1;
G__17711.cljs$core$IFn$_invoke$arity$2 = G__17711__2;
G__17711.cljs$core$IFn$_invoke$arity$3 = G__17711__3;
return G__17711;
})()
);

(taoensso.encore.Counter.prototype.apply = (function (self__,args17707){
var self__ = this;
var self____$1 = this;
var args__5217__auto__ = cljs.core.aclone(args17707);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__5217__auto__.length > (20)))?(function (){var G__17709 = args__5217__auto__.slice((0),(20));
G__17709.push(args__5217__auto__.slice((20)));

return G__17709;
})():args__5217__auto__)));
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var o = self__.c;
(self__.c = (self__.c + (1)));

return o;
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$1 = (function (add){
var self__ = this;
var _ = this;
var o = self__.c;
(self__.c = (self__.c + add));

return o;
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$2 = (function (action,n){
var self__ = this;
var _ = this;
var G__17710 = action;
var G__17710__$1 = (((G__17710 instanceof cljs.core.Keyword))?G__17710.fqn:null);
switch (G__17710__$1) {
case "add":
(self__.c = (self__.c + n));

return null;

break;
case "set":
(self__.c = n);

return null;

break;
case "set=":
case "set-get":
(self__.c = n);

return n;

break;
case "=set":
case "get-set":
var o = self__.c;
(self__.c = n);

return o;

break;
case "=+":
case "get-add":
var o = self__.c;
(self__.c = (self__.c + n));

return o;

break;
case "+=":
case "add-get":
(self__.c = (self__.c + n));

return self__.c;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17710__$1)].join('')));

}
}));

(taoensso.encore.Counter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$c,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
}));

(taoensso.encore.Counter.cljs$lang$type = true);

(taoensso.encore.Counter.cljs$lang$ctorStr = "taoensso.encore/Counter");

(taoensso.encore.Counter.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/Counter");
}));

/**
 * Positional factory function for taoensso.encore/Counter.
 */
taoensso.encore.__GT_Counter = (function taoensso$encore$__GT_Counter(c){
return (new taoensso.encore.Counter(c));
});

/**
 * Returns a fast atomic Counter with `init` initial int value:
 *  - (<counter>    ) -> add 1, return old val
 *  - (<counter> <n>) -> add n, return old val
 * 
 *  Experimental 3-arity version takes an `action`:
 *    :add, :set, :set-get, :get-set, :get-add, :add-get
 */
taoensso.encore.counter = (function taoensso$encore$counter(var_args){
var G__17715 = arguments.length;
switch (G__17715) {
case 0:
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1((0));
}));

(taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new taoensso.encore.Counter(cljs.core.long$(init)));
}));

(taoensso.encore.counter.cljs$lang$maxFixedArity = 1);

taoensso.encore.rc_deref = (function taoensso$encore$rc_deref(msecs,ts_,n_skip_,gc_fn){
var t1 = taoensso.encore.now_udt();
var n_skip0 = (n_skip_.cljs$core$IFn$_invoke$arity$0 ? n_skip_.cljs$core$IFn$_invoke$arity$0() : n_skip_.call(null));
var ts = (ts_.cljs$core$IFn$_invoke$arity$0 ? ts_.cljs$core$IFn$_invoke$arity$0() : ts_.call(null));
var n_total = cljs.core.count(ts);
var n_window = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (n,t0){
if(((t1 - t0) <= msecs)){
return (n + (1));
} else {
return n;
}
}),(0),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ts,n_skip0));
var n_skip1 = (n_total - n_window);
if((n_skip0 < n_skip1)){
if(cljs.core.compare_and_set_BANG_(n_skip_,n_skip0,n_skip1)){
if((n_skip1 > (10000))){
(gc_fn.cljs$core$IFn$_invoke$arity$1 ? gc_fn.cljs$core$IFn$_invoke$arity$1(n_skip1) : gc_fn.call(null,n_skip1));
} else {
}
} else {
}
} else {
}

return n_window;
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.RollingCounter = (function (msecs,ts_,n_skip_){
this.msecs = msecs;
this.ts_ = ts_;
this.n_skip_ = n_skip_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.RollingCounter.prototype.call = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var t1_17726 = taoensso.encore.now_udt();
var G__17722_17727 = (function (p1__17719_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__17719_SHARP_,t1_17726);
});
(self__.ts_.cljs$core$IFn$_invoke$arity$1 ? self__.ts_.cljs$core$IFn$_invoke$arity$1(G__17722_17727) : self__.ts_.call(null,G__17722_17727));

return this$;
}));

(taoensso.encore.RollingCounter.prototype.apply = (function (self__,args17721){
var self__ = this;
var self____$1 = this;
var args__5217__auto__ = cljs.core.aclone(args17721);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__5217__auto__.length > (20)))?(function (){var G__17723 = args__5217__auto__.slice((0),(20));
G__17723.push(args__5217__auto__.slice((20)));

return G__17723;
})():args__5217__auto__)));
}));

(taoensso.encore.RollingCounter.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var t1_17728 = taoensso.encore.now_udt();
var G__17724_17729 = (function (p1__17719_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__17719_SHARP_,t1_17728);
});
(self__.ts_.cljs$core$IFn$_invoke$arity$1 ? self__.ts_.cljs$core$IFn$_invoke$arity$1(G__17724_17729) : self__.ts_.call(null,G__17724_17729));

return this$;
}));

(taoensso.encore.RollingCounter.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.rc_deref(self__.msecs,self__.ts_,self__.n_skip_,(function taoensso$encore$gc(n_skip1){
var G__17725_17730 = (function (p1__17720_SHARP_){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(p1__17720_SHARP_,n_skip1);
});
(self__.ts_.cljs$core$IFn$_invoke$arity$1 ? self__.ts_.cljs$core$IFn$_invoke$arity$1(G__17725_17730) : self__.ts_.call(null,G__17725_17730));

return cljs.core.reset_BANG_(self__.n_skip_,(0));
}));
}));

(taoensso.encore.RollingCounter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$msecs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.cst$sym$ts__,cljs.core.cst$sym$n_DASH_skip__], null);
}));

(taoensso.encore.RollingCounter.cljs$lang$type = true);

(taoensso.encore.RollingCounter.cljs$lang$ctorStr = "taoensso.encore/RollingCounter");

(taoensso.encore.RollingCounter.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/RollingCounter");
}));

/**
 * Positional factory function for taoensso.encore/RollingCounter.
 */
taoensso.encore.__GT_RollingCounter = (function taoensso$encore$__GT_RollingCounter(msecs,ts_,n_skip_){
return (new taoensso.encore.RollingCounter(msecs,ts_,n_skip_));
});

/**
 * Experimental. Returns a RollingCounter that you can:
 *  - Invoke to increment count in last `msecs` window and return RollingCounter.
 *  - Deref  to return    count in last `msecs` window.
 */
taoensso.encore.rolling_counter = (function taoensso$encore$rolling_counter(msecs){
return (new taoensso.encore.RollingCounter(cljs.core.long$((function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(msecs)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17731){if((e17731 instanceof Error)){
var e = e17731;
return e;
} else {
throw e17731;

}
}})();
if((e == null)){
return msecs;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,cljs.core.cst$sym$taoensso$encore,3801,11,"/Users/AlexRoot-Roatch/current-projects/tic-tac-toe/out/taoensso/encore.cljc",cljs.core.cst$sym$pos_DASH_int_QMARK_,null,cljs.core.cst$sym$msecs,msecs,e,null);
}
})()),taoensso.encore.latom(cljs.core.PersistentVector.EMPTY),taoensso.encore.latom((0))));
});
/**
 * Returns a stateful fn of 2 arities:
 *  (fn [ ]) => Returns current sub/vector in O(1).
 *  (fn [x]) => Adds `x` to right of sub/vector, maintaining length <= `nmax`.
 *              Returns current sub/vector.
 * 
 *   Useful for maintaining limited-length histories, etc.
 *   See also `rolling-list` (Clj only).
 */
taoensso.encore.rolling_vector = (function taoensso$encore$rolling_vector(var_args){
var G__17733 = arguments.length;
switch (G__17733) {
case 1:
return taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$1 = (function (nmax){
return taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$2(nmax,null);
}));

(taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$2 = (function (nmax,p__17734){
var map__17735 = p__17734;
var map__17735__$1 = cljs.core.__destructure_map(map__17735);
var gc_every = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17735__$1,cljs.core.cst$kw$gc_DASH_every,16000.0);
var init_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17735__$1,cljs.core.cst$kw$init_DASH_val);
var nmax__$1 = cljs.core.long$(nmax);
var acc_ = taoensso.encore.latom(cljs.core.vec(init_val));
var gc_every__$1 = (cljs.core.truth_(gc_every)?cljs.core.long$(gc_every):null);
var ticker = (cljs.core.truth_(gc_every__$1)?taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0():null);
var latch_ = (cljs.core.truth_(gc_every__$1)?taoensso.encore.latom(null):null);
return (function() {
var taoensso$encore$rolling_vec_fn = null;
var taoensso$encore$rolling_vec_fn__0 = (function (){
return (acc_.cljs$core$IFn$_invoke$arity$0 ? acc_.cljs$core$IFn$_invoke$arity$0() : acc_.call(null));
});
var taoensso$encore$rolling_vec_fn__1 = (function (x){
if(cljs.core.truth_(gc_every__$1)){
var tick_17739 = (ticker.cljs$core$IFn$_invoke$arity$0 ? ticker.cljs$core$IFn$_invoke$arity$0() : ticker.call(null));
var b2__1576__auto___17740 = (cljs.core.rem(tick_17739,gc_every__$1) === (0));
if(b2__1576__auto___17740){
var gc_now_QMARK__17741 = b2__1576__auto___17740;
var G__17736_17742 = (function taoensso$encore$rolling_vec_fn_$_swap_fn(sv){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,sv);
});
(acc_.cljs$core$IFn$_invoke$arity$1 ? acc_.cljs$core$IFn$_invoke$arity$1(G__17736_17742) : acc_.call(null,G__17736_17742));
} else {
}
} else {
}

var G__17737 = (function taoensso$encore$rolling_vec_fn_$_swap_fn(acc){
var new$ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
if((cljs.core.count(new$) > nmax__$1)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(new$,(1));
} else {
return new$;
}
});
return (acc_.cljs$core$IFn$_invoke$arity$1 ? acc_.cljs$core$IFn$_invoke$arity$1(G__17737) : acc_.call(null,G__17737));
});
taoensso$encore$rolling_vec_fn = function(x){
switch(arguments.length){
case 0:
return taoensso$encore$rolling_vec_fn__0.call(this);
case 1:
return taoensso$encore$rolling_vec_fn__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$rolling_vec_fn.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$rolling_vec_fn__0;
taoensso$encore$rolling_vec_fn.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$rolling_vec_fn__1;
return taoensso$encore$rolling_vec_fn;
})()
}));

(taoensso.encore.rolling_vector.cljs$lang$maxFixedArity = 2);

/**
 * Single system newline
 */
taoensso.encore.newline = "\n";
/**
 * Double system newline
 */
taoensso.encore.newlines = ["\n","\n"].join('');
/**
 * Prints given argument as string, and flushes output stream.
 */
taoensso.encore.print1 = (function taoensso$encore$print1(x){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)], 0));
});
/**
 * Like `core/println` but won't interleave content from different threads.
 */
taoensso.encore.println_atomic = (function taoensso$encore$println_atomic(x){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
});
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * Returns a new stateful string builder:
 *  - `java.lang.StringBuilder`  for Clj
 *  - `goog.string.StringBuffer` for Cljs
 * 
 *   See also `sb-append`.
 */
taoensso.encore.str_builder = (function taoensso$encore$str_builder(var_args){
var G__17744 = arguments.length;
switch (G__17744) {
case 0:
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new goog.string.StringBuffer());
}));

(taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1 = (function (init_str){
return (new goog.string.StringBuffer(init_str));
}));

(taoensso.encore.str_builder.cljs$lang$maxFixedArity = 1);

/**
 * Appends given string to given string builder. See also `str-builder.`
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var G__17750 = arguments.length;
switch (G__17750) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___17752 = arguments.length;
var i__5727__auto___17753 = (0);
while(true){
if((i__5727__auto___17753 < len__5726__auto___17752)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17753]));

var G__17754 = (i__5727__auto___17753 + (1));
i__5727__auto___17753 = G__17754;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
}));

(taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(str_builder,s),more);
}));

/** @this {Function} */
(taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq17747){
var G__17748 = cljs.core.first(seq17747);
var seq17747__$1 = cljs.core.next(seq17747);
var G__17749 = cljs.core.first(seq17747__$1);
var seq17747__$2 = cljs.core.next(seq17747__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17748,G__17749,seq17747__$2);
}));

(taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2));

/**
 * String builder reducing fn.
 */
taoensso.encore.str_rf = (function taoensso$encore$str_rf(var_args){
var G__17756 = arguments.length;
switch (G__17756) {
case 0:
return taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
}));

(taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$1 = (function (acc){
if(cljs.core.truth_(taoensso.encore.str_builder_QMARK_(acc))){
return acc;
} else {
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc));
}
}));

(taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$2 = (function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(taoensso.encore.str_builder_QMARK_(acc))?acc:taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$));
}));

(taoensso.encore.str_rf.cljs$lang$maxFixedArity = 2);

/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform` support.
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var G__17759 = arguments.length;
switch (G__17759) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(null,null,coll);
}));

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(separator,null,coll);
}));

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__5000__auto__ = separator;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(separator,"");
} else {
return and__5000__auto__;
}
})())){
var sep_xform = cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator);
var str_rf_STAR_ = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,coll));
}
}
}));

(taoensso.encore.str_join.cljs$lang$maxFixedArity = 3);

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
/**
 * Returns (first/last) ?index of substring if it exists within given string.
 */
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var G__17762 = arguments.length;
switch (G__17762) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,(0),false);
}));

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,start_idx,false);
}));

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,(-1))){
return result;
} else {
return null;
}
}));

(taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4);

/**
 * Returns ?substring from given string.
 * 
 *   Like `subs` but:
 *  - Provides consistent clj/s behaviour.
 *  - Never throws (snaps to valid indexes).
 *  - Indexes may be -ive (=> indexed from end of string).
 * 
 *   Returns nil when requested substring would be empty.
 */
taoensso.encore.get_substr_by_idx = (function taoensso$encore$get_substr_by_idx(var_args){
var G__17765 = arguments.length;
switch (G__17765) {
case 2:
return taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$2 = (function (s,start_idx){
return taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$3(s,start_idx,null);
}));

(taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$3 = (function (s,start_idx,end_idx){
if(cljs.core.truth_(s)){
var s__$1 = s;
var full_len = s__$1.length;
var start_idx__$1 = (((start_idx == null))?(0):start_idx);
var end_idx__$1 = (((end_idx == null))?full_len:end_idx);
if((((start_idx__$1 === (0))) && ((end_idx__$1 >= full_len)))){
return s__$1;
} else {
var start_idx__$2 = (((start_idx__$1 < (0)))?(full_len + start_idx__$1):start_idx__$1);
var start_idx__$3 = (function (){var x__5087__auto__ = (0);
var y__5088__auto__ = start_idx__$2;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var end_idx__$2 = (((end_idx__$1 < (0)))?(full_len + end_idx__$1):end_idx__$1);
var end_idx__$3 = (function (){var x__5090__auto__ = full_len;
var y__5091__auto__ = end_idx__$2;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
if((start_idx__$3 >= end_idx__$3)){
return null;
} else {
return s__$1.substring(start_idx__$3,end_idx__$3);
}
}
} else {
return null;
}
}));

(taoensso.encore.get_substr_by_idx.cljs$lang$maxFixedArity = 3);

/**
 * Returns ?substring from given string.
 *   Like `get-substr-by-idx`, but takes a substring-length 3rd argument.
 */
taoensso.encore.get_substr_by_len = (function taoensso$encore$get_substr_by_len(var_args){
var G__17768 = arguments.length;
switch (G__17768) {
case 2:
return taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$2 = (function (s,start_idx){
return taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$3(s,start_idx,null);
}));

(taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$3 = (function (s,start_idx,sub_len){
if(cljs.core.truth_(s)){
var s__$1 = s;
var full_len = s__$1.length;
var sub_len__$1 = (((sub_len == null))?full_len:sub_len);
if((sub_len__$1 > (0))){
var start_idx__$1 = (((start_idx == null))?(0):start_idx);
if((((start_idx__$1 === (0))) && ((sub_len__$1 >= full_len)))){
return s__$1;
} else {
var start_idx__$2 = (((start_idx__$1 < (0)))?(full_len + start_idx__$1):start_idx__$1);
var start_idx__$3 = (function (){var x__5087__auto__ = (0);
var y__5088__auto__ = start_idx__$2;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var end_idx = (start_idx__$3 + sub_len__$1);
var end_idx__$1 = (function (){var x__5090__auto__ = full_len;
var y__5091__auto__ = end_idx;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
if((start_idx__$3 >= end_idx__$1)){
return null;
} else {
return s__$1.substring(start_idx__$3,end_idx__$1);
}
}
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.get_substr_by_len.cljs$lang$maxFixedArity = 3);

/**
 * Returns true iff given strings are equal, ignoring case.
 */
taoensso.encore.case_insensitive_str_EQ_ = (function taoensso$encore$case_insensitive_str_EQ_(s1,s2){
var or__5002__auto__ = (s1 === s2);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var l1 = s1.length;
var l2 = s2.length;
var and__5000__auto__ = (l1 === l2);
if(and__5000__auto__){
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4((function (acc,idx){
var c1 = s1.charAt(idx).toLowerCase();
var c2 = s2.charAt(idx).toLowerCase();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c1,c2)){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,(0),l1);
} else {
return and__5000__auto__;
}
}
});
/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for <http://dev.clojure.org/jira/browse/CLJS-794>,
 *               <http://dev.clojure.org/jira/browse/CLJS-911>.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = ["g",(cljs.core.truth_(match.ignoreCase)?"i":null),(cljs.core.truth_(match.multiline)?"m":null)].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:(function() { 
var G__17771__delegate = function (args){
var G__17770 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__17770) : replacement.call(null,G__17770));
};
var G__17771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17772__i = 0, G__17772__a = new Array(arguments.length -  0);
while (G__17772__i < G__17772__a.length) {G__17772__a[G__17772__i] = arguments[G__17772__i + 0]; ++G__17772__i;}
  args = new cljs.core.IndexedSeq(G__17772__a,0,null);
} 
return G__17771__delegate.call(this,args);};
G__17771.cljs$lang$maxFixedArity = 0;
G__17771.cljs$lang$applyTo = (function (arglist__17773){
var args = cljs.core.seq(arglist__17773);
return G__17771__delegate(args);
});
G__17771.cljs$core$IFn$_invoke$arity$variadic = G__17771__delegate;
return G__17771;
})()
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw ["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');
}
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if((x == null)){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(var_args){
var G__17775 = arguments.length;
switch (G__17775) {
case 2:
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (fmt,args){
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$3(taoensso.encore.nil__GT_str,fmt,args);
}));

(taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (xform,fmt,args){
if((fmt == null)){
return "";
} else {
var args__$1 = (cljs.core.truth_(xform)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(xform,args):args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args__$1);
}
}));

(taoensso.encore.format_STAR_.cljs$lang$maxFixedArity = 3);


/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17779 = arguments.length;
var i__5727__auto___17780 = (0);
while(true){
if((i__5727__auto___17780 < len__5726__auto___17779)){
args__5732__auto__.push((arguments[i__5727__auto___17780]));

var G__17781 = (i__5727__auto___17780 + (1));
i__5727__auto___17780 = G__17781;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2(fmt,args);
}));

(taoensso.encore.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.format.cljs$lang$applyTo = (function (seq17776){
var G__17777 = cljs.core.first(seq17776);
var seq17776__$1 = cljs.core.next(seq17776);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17777,seq17776__$1);
}));

/**
 * Like `string/join` but skips nils and duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_(sep)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.str_rf,"",coll));
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_(false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_(true);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var in$__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$);
var in_empty_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_(in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_(in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref(acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref(acc_empty_QMARK__);
cljs.core.vreset_BANG_(acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_(acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
} else {
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,sep);

return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
}
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),coll));
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17783 = arguments.length;
var i__5727__auto___17784 = (0);
while(true){
if((i__5727__auto___17784 < len__5726__auto___17783)){
args__5732__auto__.push((arguments[i__5727__auto___17784]));

var G__17785 = (i__5727__auto___17784 + (1));
i__5727__auto___17784 = G__17785;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once("/",parts);
}));

(taoensso.encore.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.path.cljs$lang$applyTo = (function (seq17782){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17782));
}));

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_(s)){
return (0);
} else {
return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
}
});
/**
 * For Clj: returns a random `java.util.UUID`.
 *   For Cljs: returns a random UUID string.
 * 
 *   Uses strong randomness when possible.
 *   See also `uuid-str`, `nanoid`, `rand-id-fn`.
 */
taoensso.encore.uuid = (function taoensso$encore$uuid(){
var b2__1576__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_crypto,"randomUUID");
if(cljs.core.truth_(b2__1576__auto__)){
var f = b2__1576__auto__;
return f.call(taoensso.encore.js__QMARK_crypto);
} else {
var quad_hex = (function (){
var unpadded_hex = cljs.core.rand_int((65536)).toString((16));
var G__17786 = ((unpadded_hex).length);
switch (G__17786) {
case (1):
return ["000",unpadded_hex].join('');

break;
case (2):
return ["00",unpadded_hex].join('');

break;
case (3):
return ["0",unpadded_hex].join('');

break;
default:
return unpadded_hex;

}
});
var ver_trip_hex = ((16384) | ((4095) & cljs.core.rand_int((65536)))).toString((16));
var res_trip_hex = ((32768) | ((16383) & cljs.core.rand_int((65536)))).toString((16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex()),"-",ver_trip_hex,"-",res_trip_hex,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex())].join('');
}
});
/**
 * Returns a random UUID string of given length (max 36).
 *   Uses strong randomness when possible. See also `uuid`, `nanoid`, `rand-id-fn`.
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var G__17789 = arguments.length;
switch (G__17789) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_len){
return taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$3(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0(),(0),max_len);
}));

(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.uuid();
}));

(taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1);

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17792 = arguments.length;
var i__5727__auto___17793 = (0);
while(true){
if((i__5727__auto___17793 < len__5726__auto___17792)){
args__5732__auto__.push((arguments[i__5727__auto___17793]));

var G__17794 = (i__5727__auto___17793 + (1));
i__5727__auto___17793 = G__17794;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_(in$)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$));
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs));
}));

(taoensso.encore.into_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.into_str.cljs$lang$applyTo = (function (seq17791){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17791));
}));

/**
 * Constant-time string equality checker.
 *   Useful to prevent timing attacks, etc.
 */
taoensso.encore.const_str_EQ_ = (function taoensso$encore$const_str_EQ_(s1,s2){
if(cljs.core.truth_((function (){var and__5000__auto__ = s1;
if(cljs.core.truth_(and__5000__auto__)){
return s2;
} else {
return and__5000__auto__;
}
})())){
var vx = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","1"], null);
var v1 = cljs.core.vec(s1);
var v2 = cljs.core.vec(s2);
var n1 = cljs.core.count(v1);
var n2 = cljs.core.count(v2);
var nmax = (function (){var x__5087__auto__ = n1;
var y__5088__auto__ = n2;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var nmin = (function (){var x__5090__auto__ = n1;
var y__5091__auto__ = n2;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,idx){
if((idx >= nmin)){
var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(vx,(0)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vx,(1)));
if(and__5000__auto__){
return acc;
} else {
return and__5000__auto__;
}
} else {
var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(v1,idx),cljs.core.get.cljs$core$IFn$_invoke$arity$2(v2,idx));
if(and__5000__auto__){
return acc;
} else {
return and__5000__auto__;
}
}
}),true,nmax);
} else {
return null;
}
});
/**
 * Give any nameable type (string, keyword, symbol), returns the same
 *   type with at most `n-full` (default 1) unabbreviated namespace parts.
 * 
 *   Example:
 *  (abbreviate-ns 0  :foo.bar/baz)   => :f.b/baz
 *  (abbreviate-ns 1  'foo.bar/baz)   => 'f.bar/baz
 *  (abbreviate-ns 2 "foo.bar/baz") => "foo.bar/baz"
 */
taoensso.encore.abbreviate_ns = (function taoensso$encore$abbreviate_ns(var_args){
var G__17796 = arguments.length;
switch (G__17796) {
case 1:
return taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$2((1),x);
}));

(taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$2 = (function (n_full,x){
var n_full__$1 = cljs.core.long$((function (){var e = (function (){try{if(taoensso.encore.nat_int_QMARK_(n_full)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17800){if((e17800 instanceof Error)){
var e = e17800;
return e;
} else {
throw e17800;

}
}})();
if((e == null)){
return n_full;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,cljs.core.cst$sym$taoensso$encore,4348,23,"/Users/AlexRoot-Roatch/current-projects/tic-tac-toe/out/taoensso/encore.cljc",cljs.core.cst$sym$nat_DASH_int_QMARK_,null,cljs.core.cst$sym$n_DASH_full,n_full,e,null);
}
})());
var vec__17797 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(x),/\//);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17797,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17797,(1),null);
if(cljs.core.truth_(p2)){
var name_part = p2;
var ns_parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1,/\./);
var n_to_abbr = (cljs.core.count(ns_parts) - n_full__$1);
var sb = taoensso.encore.reduce_indexed((function (sb,idx,in$){
if((idx === (0))){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,".");
}

if((idx < n_to_abbr)){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,in$.substring((0),(1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,in$);
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),ns_parts);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"/");

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,name_part);

var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
if((x instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
} else {
if((x instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(s);
} else {
return s;
}
}
} else {
return x;
}
}));

(taoensso.encore.abbreviate_ns.cljs$lang$maxFixedArity = 2);

/**
 * Is `taoensso.telemere` present (not necessarily loaded)?
 */
taoensso.encore.have_telemere_QMARK_ = false;
/**
 * Returns a random byte array of given size. Uses strong randomness when possible.
 */
taoensso.encore.secure_rand_bytes = (function taoensso$encore$secure_rand_bytes(size){
var ba = (new Uint8Array(size));
var b2__1576__auto___17807 = taoensso.encore.js__QMARK_crypto;
if(cljs.core.truth_(b2__1576__auto___17807)){
var crypto_17808 = b2__1576__auto___17807;
crypto_17808.getRandomValues(ba);
} else {
var n__5593__auto___17809 = size;
var i_17810 = (0);
while(true){
if((i_17810 < n__5593__auto___17809)){
(ba[i_17810] = (function (){var G__17806 = ((256) * Math.random());
return Math.floor(G__17806);
})());

var G__17811 = (i_17810 + (1));
i_17810 = G__17811;
continue;
} else {
}
break;
}
}

return ba;
});
/**
 * Returns a (fn rand-id []) that returns random id strings.
 *   Uses strong randomness when possible.
 * 
 *   Options include:
 *  `:chars`         - ∈ #{<string> :nanoid :alphanumeric :no-look-alikes ...}
 *  `:len`           - Length of id strings to generate
 *  `:rand-bytes-fn` - Optional (fn [size]) to return random byte array of given size
 * 
 *   See also `uuid-str`, `nano-id`.
 */
taoensso.encore.rand_id_fn = (function taoensso$encore$rand_id_fn(p__17812){
var map__17813 = p__17812;
var map__17813__$1 = cljs.core.__destructure_map(map__17813);
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17813__$1,cljs.core.cst$kw$chars,cljs.core.cst$kw$nanoid);
var len = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17813__$1,cljs.core.cst$kw$len,(21));
var rand_bytes_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17813__$1,cljs.core.cst$kw$rand_DASH_bytes_DASH_fn,taoensso.encore.secure_rand_bytes);
var chars__$1 = (function (){var G__17814 = chars;
var G__17814__$1 = (((G__17814 instanceof cljs.core.Keyword))?G__17814.fqn:null);
switch (G__17814__$1) {
case "alphanumeric":
return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

break;
case "nanoid":
return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";

break;
case "nanoid-readable":
return "346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz";

break;
case "numbers":
return "0123456789";

break;
case "alpha-lowercase":
return "abcdefghijklmnopqrstuvwxyz";

break;
case "alpha-uppercase":
return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

break;
case "hex-lowercase":
return "0123456789abcdef";

break;
case "hex-uppercase":
return "0123456789ABCDEF";

break;
default:
var e = (function (){try{if(typeof chars === 'string'){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17815){if((e17815 instanceof Error)){
var e = e17815;
return e;
} else {
throw e17815;

}
}})();
if((e == null)){
return chars;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,cljs.core.cst$sym$taoensso$encore,4565,11,"/Users/AlexRoot-Roatch/current-projects/tic-tac-toe/out/taoensso/encore.cljc",cljs.core.cst$sym$string_QMARK_,null,cljs.core.cst$sym$chars,chars,e,null);
}

}
})();
var nchars = cljs.core.count(chars__$1);
var max_char_idx = (nchars - (1));
var chars__$2 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(chars__$1);
var mask = ((-1) & (((2) << ((function (){var G__17816 = ((function (){var G__17817 = (nchars - (1));
return Math.log(G__17817);
})() / Math.log((2)));
return Math.floor(G__17816);
})() | (0))) - (1)));
var exp_bytes = ((mask * len) / nchars);
var stepn = ((function (){var x__5087__auto__ = (2);
var y__5088__auto__ = (function (){var G__17818 = (0.2 * exp_bytes);
return Math.ceil(G__17818);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})() | (0));
var step1 = (((((cljs.core.mod((256),nchars) | (0)) === (0)))?len:(function (){var G__17819 = (1.2 * exp_bytes);
return Math.ceil(G__17819);
})()) | (0));
return (function taoensso$encore$rand_id_fn_$_rand_id(){
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
var idx = (0);
var max_idx = (step1 - (1));
var rand_bytes = (rand_bytes_fn.cljs$core$IFn$_invoke$arity$1 ? rand_bytes_fn.cljs$core$IFn$_invoke$arity$1(step1) : rand_bytes_fn.call(null,step1));
while(true){
var possible_ch_idx_17821 = ((rand_bytes[idx]) & mask);
if((possible_ch_idx_17821 <= max_char_idx)){
sb.append((chars__$2[possible_ch_idx_17821]));
} else {
}

if((sb.length() === len)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if((idx === max_idx)){
var G__17822 = (0);
var G__17823 = (stepn - (1));
var G__17824 = (rand_bytes_fn.cljs$core$IFn$_invoke$arity$1 ? rand_bytes_fn.cljs$core$IFn$_invoke$arity$1(stepn) : rand_bytes_fn.call(null,stepn));
idx = G__17822;
max_idx = G__17823;
rand_bytes = G__17824;
continue;
} else {
var G__17825 = (idx + (1));
var G__17826 = max_idx;
var G__17827 = rand_bytes;
idx = G__17825;
max_idx = G__17826;
rand_bytes = G__17827;
continue;
}
}
break;
}
});
});
var chars_17830 = (function (){var s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
return cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(s);
})();
/**
 * Returns a random "Nano ID" of given length, Ref. <https://github.com/ai/nanoid>.
 *  Uses strong randomness when possible. See also `uuid-str`, `rand-id-fn`.
 */
taoensso.encore.nanoid = (function taoensso$encore$nanoid(var_args){
var G__17829 = arguments.length;
switch (G__17829) {
case 0:
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1((21));
}));

(taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1 = (function (len){
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
var ba = taoensso.encore.secure_rand_bytes(len);
var max_idx = (len - (1));
var idx_17832 = (0);
while(true){
sb.append((chars_17830[((ba[idx_17832]) & (63))]));

if((idx_17832 < max_idx)){
var G__17833 = (idx_17832 + (1));
idx_17832 = G__17833;
continue;
} else {
}
break;
}

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
}));

(taoensso.encore.nanoid.cljs$lang$maxFixedArity = 1);

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare(y,x);
});
/**
 * Like `core/sort` but:
 *  - Returns a vector.
 *  - `comparator` can be `:asc`, `:desc`, or an arbitrary comparator.
 *  - An optional `keyfn` may be provided, as in `core/sort-by`.
 */
taoensso.encore.sortv = (function taoensso$encore$sortv(var_args){
var G__17835 = arguments.length;
switch (G__17835) {
case 1:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3(null,cljs.core.cst$kw$asc,coll);
}));

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$2 = (function (comparator,coll){
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3(null,comparator,coll);
}));

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_keyfn,comparator,coll){
if(cljs.core.seq(coll)){
var comparator__$1 = (function (){var G__17836 = comparator;
var G__17836__$1 = (((G__17836 instanceof cljs.core.Keyword))?G__17836.fqn:null);
switch (G__17836__$1) {
case "asc":
return cljs.core.compare;

break;
case "dsc":
case "desc":
return (function (x,y){
return cljs.core.compare(y,x);
});

break;
default:
return comparator;

}
})();
var comparator__$2 = (function (){var b2__1576__auto__ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_keyfn,cljs.core.identity))?_QMARK_keyfn:null);
if(cljs.core.truth_(b2__1576__auto__)){
var kfn = b2__1576__auto__;
return (function (x,y){
var G__17837 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(x) : kfn.call(null,x));
var G__17838 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(y) : kfn.call(null,y));
return (comparator__$1.cljs$core$IFn$_invoke$arity$2 ? comparator__$1.cljs$core$IFn$_invoke$arity$2(G__17837,G__17838) : comparator__$1.call(null,G__17837,G__17838));
});
} else {
return comparator__$1;
}
})();
var a = cljs.core.to_array(coll);
var G__17839_17843 = a;
var G__17840_17844 = cljs.core.fn__GT_comparator(comparator__$2);
taoensso.encore.goog$module$goog$array.stableSort.call(null,G__17839_17843,G__17840_17844);

return cljs.core.with_meta(cljs.core.vec(a),cljs.core.meta(coll));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(taoensso.encore.sortv.cljs$lang$maxFixedArity = 3);

var sentinel_17850 = ({});
var nil__GT_sentinel_17851 = (function (x){
if((x == null)){
return sentinel_17850;
} else {
return x;
}
});
var sentinel__GT_nil_17852 = (function (x){
if((x === sentinel_17850)){
return null;
} else {
return x;
}
});
/**
 * Reduces the top `n` items from `coll` of N items.
 *  Clj impln is O(N.logn) vs O(N.logN) for (take n (sort-by ...)).
 */
taoensso.encore.reduce_top = (function taoensso$encore$reduce_top(var_args){
var G__17849 = arguments.length;
switch (G__17849) {
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = (function (n,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,cljs.core.identity,cljs.core.compare,rf,init,coll);
}));

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cljs.core.compare,rf,init,coll);
}));

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count(coll);
var n__$1 = cljs.core.long$((function (){var x__5090__auto__ = coll_size;
var y__5091__auto__ = cljs.core.long$(n);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());
if((n__$1 > (0))){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.take.cljs$core$IFn$_invoke$arity$1(n__$1),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf),init,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cmp,coll));
} else {
return init;
}
}));

(taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6);

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
var G__17855 = arguments.length;
switch (G__17855) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,cljs.core.identity,cljs.core.compare,coll);
}));

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,keyfn,cljs.core.compare,coll);
}));

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if(taoensso.encore.editable_QMARK_(to)){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$(to),coll));
} else {
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj,to,coll);
}
}));

(taoensso.encore.top_into.cljs$lang$maxFixedArity = 5);

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var G__17858 = arguments.length;
switch (G__17858) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
}));

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
}));

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
}));

(taoensso.encore.top.cljs$lang$maxFixedArity = 4);

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$(secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot(cljs.core.long$(ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var G__17878 = arguments.length;
switch (G__17878) {
case 1:
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___17882 = arguments.length;
var i__5727__auto___17883 = (0);
while(true){
if((i__5727__auto___17883 < len__5726__auto___17882)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17883]));

var G__17884 = (i__5727__auto___17883 + (1));
i__5727__auto___17883 = G__17884;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((4) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((4)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5752__auto__);

}
});

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1 = (function (p__17879){
var map__17880 = p__17879;
var map__17880__$1 = cljs.core.__destructure_map(map__17880);
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17880__$1,cljs.core.cst$kw$ms);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17880__$1,cljs.core.cst$kw$weeks);
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17880__$1,cljs.core.cst$kw$msecs);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17880__$1,cljs.core.cst$kw$months);
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17880__$1,cljs.core.cst$kw$secs);
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17880__$1,cljs.core.cst$kw$mins);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17880__$1,cljs.core.cst$kw$days);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17880__$1,cljs.core.cst$kw$hours);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17880__$1,cljs.core.cst$kw$years);
return taoensso.encore.round0((((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
}));

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$2 = (function (k1,v1){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1]));
}));

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$4 = (function (k1,v1,k2,v2){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2]));
}));

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (k1,v1,k2,v2,more){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(taoensso.encore.reduce_kvs(cljs.core.assoc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2]),more));
}));

/** @this {Function} */
(taoensso.encore.ms.cljs$lang$applyTo = (function (seq17873){
var G__17874 = cljs.core.first(seq17873);
var seq17873__$1 = cljs.core.next(seq17873);
var G__17875 = cljs.core.first(seq17873__$1);
var seq17873__$2 = cljs.core.next(seq17873__$1);
var G__17876 = cljs.core.first(seq17873__$2);
var seq17873__$3 = cljs.core.next(seq17873__$2);
var G__17877 = cljs.core.first(seq17873__$3);
var seq17873__$4 = cljs.core.next(seq17873__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17874,G__17875,G__17876,G__17877,seq17873__$4);
}));

(taoensso.encore.ms.cljs$lang$maxFixedArity = (4));

/**
 * Returns ~number of seconds in period defined by given args.
 */
taoensso.encore.secs = (function taoensso$encore$secs(var_args){
var G__17891 = arguments.length;
switch (G__17891) {
case 1:
return taoensso.encore.secs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.secs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.encore.secs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___17893 = arguments.length;
var i__5727__auto___17894 = (0);
while(true){
if((i__5727__auto___17894 < len__5726__auto___17893)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17894]));

var G__17895 = (i__5727__auto___17894 + (1));
i__5727__auto___17894 = G__17895;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((4) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((4)),(0),null)):null);
return taoensso.encore.secs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5752__auto__);

}
});

(taoensso.encore.secs.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return taoensso.encore.ms__GT_secs(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(opts));
}));

(taoensso.encore.secs.cljs$core$IFn$_invoke$arity$2 = (function (k1,v1){
return taoensso.encore.ms__GT_secs(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1])));
}));

(taoensso.encore.secs.cljs$core$IFn$_invoke$arity$4 = (function (k1,v1,k2,v2){
return taoensso.encore.ms__GT_secs(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2])));
}));

(taoensso.encore.secs.cljs$core$IFn$_invoke$arity$variadic = (function (k1,v1,k2,v2,more){
return taoensso.encore.ms__GT_secs(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(taoensso.encore.reduce_kvs(cljs.core.assoc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2]),more)));
}));

/** @this {Function} */
(taoensso.encore.secs.cljs$lang$applyTo = (function (seq17886){
var G__17887 = cljs.core.first(seq17886);
var seq17886__$1 = cljs.core.next(seq17886);
var G__17888 = cljs.core.first(seq17886__$1);
var seq17886__$2 = cljs.core.next(seq17886__$1);
var G__17889 = cljs.core.first(seq17886__$2);
var seq17886__$3 = cljs.core.next(seq17886__$2);
var G__17890 = cljs.core.first(seq17886__$3);
var seq17886__$4 = cljs.core.next(seq17886__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17887,G__17888,G__17889,G__17890,seq17886__$4);
}));

(taoensso.encore.secs.cljs$lang$maxFixedArity = (4));

taoensso.encore.console_log = (((typeof console !== 'undefined'))?(function() { 
var G__17911__delegate = function (xs){
var b2__1576__auto__ = console.log;
if(cljs.core.truth_(b2__1576__auto__)){
var f = b2__1576__auto__;
return f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));
} else {
return null;
}
};
var G__17911 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__17912__i = 0, G__17912__a = new Array(arguments.length -  0);
while (G__17912__i < G__17912__a.length) {G__17912__a[G__17912__i] = arguments[G__17912__i + 0]; ++G__17912__i;}
  xs = new cljs.core.IndexedSeq(G__17912__a,0,null);
} 
return G__17911__delegate.call(this,xs);};
G__17911.cljs$lang$maxFixedArity = 0;
G__17911.cljs$lang$applyTo = (function (arglist__17913){
var xs = cljs.core.seq(arglist__17913);
return G__17911__delegate(xs);
});
G__17911.cljs$core$IFn$_invoke$arity$variadic = G__17911__delegate;
return G__17911;
})()
:(function() { 
var G__17914__delegate = function (xs){
return null;
};
var G__17914 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__17915__i = 0, G__17915__a = new Array(arguments.length -  0);
while (G__17915__i < G__17915__a.length) {G__17915__a[G__17915__i] = arguments[G__17915__i + 0]; ++G__17915__i;}
  xs = new cljs.core.IndexedSeq(G__17915__a,0,null);
} 
return G__17914__delegate.call(this,xs);};
G__17914.cljs$lang$maxFixedArity = 0;
G__17914.cljs$lang$applyTo = (function (arglist__17916){
var xs = cljs.core.seq(arglist__17916);
return G__17914__delegate(xs);
});
G__17914.cljs$core$IFn$_invoke$arity$variadic = G__17914__delegate;
return G__17914;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17917 = arguments.length;
var i__5727__auto___17918 = (0);
while(true){
if((i__5727__auto___17918 < len__5726__auto___17917)){
args__5732__auto__.push((arguments[i__5727__auto___17918]));

var G__17919 = (i__5727__auto___17918 + (1));
i__5727__auto___17918 = G__17919;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__17904 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__17904) : taoensso.encore.console_log.call(null,G__17904));
}));

(taoensso.encore.logp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.logp.cljs$lang$applyTo = (function (seq17903){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17903));
}));


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17920 = arguments.length;
var i__5727__auto___17921 = (0);
while(true){
if((i__5727__auto___17921 < len__5726__auto___17920)){
args__5732__auto__.push((arguments[i__5727__auto___17921]));

var G__17922 = (i__5727__auto___17921 + (1));
i__5727__auto___17921 = G__17922;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs));
}));

(taoensso.encore.sayp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.sayp.cljs$lang$applyTo = (function (seq17905){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17905));
}));


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17923 = arguments.length;
var i__5727__auto___17924 = (0);
while(true){
if((i__5727__auto___17924 < len__5726__auto___17923)){
args__5732__auto__.push((arguments[i__5727__auto___17924]));

var G__17925 = (i__5727__auto___17924 + (1));
i__5727__auto___17924 = G__17925;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__17908 = taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2(fmt,xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__17908) : taoensso.encore.console_log.call(null,G__17908));
}));

(taoensso.encore.logf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.logf.cljs$lang$applyTo = (function (seq17906){
var G__17907 = cljs.core.first(seq17906);
var seq17906__$1 = cljs.core.next(seq17906);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17907,seq17906__$1);
}));


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17926 = arguments.length;
var i__5727__auto___17927 = (0);
while(true){
if((i__5727__auto___17927 < len__5726__auto___17926)){
args__5732__auto__.push((arguments[i__5727__auto___17927]));

var G__17928 = (i__5727__auto___17927 + (1));
i__5727__auto___17927 = G__17928;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2(fmt,xs));
}));

(taoensso.encore.sayf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.sayf.cljs$lang$applyTo = (function (seq17909){
var G__17910 = cljs.core.first(seq17909);
var seq17909__$1 = cljs.core.next(seq17909);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17910,seq17909__$1);
}));

/**
 * Returns current window location as
 *   {:keys [href protocol hostname host pathname search hash]}.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__1576__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_window,"location");
if(cljs.core.truth_(b2__1576__auto__)){
var loc = b2__1576__auto__;
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$href,loc.href,cljs.core.cst$kw$protocol,loc.protocol,cljs.core.cst$kw$hostname,loc.hostname,cljs.core.cst$kw$host,loc.host,cljs.core.cst$kw$pathname,loc.pathname,cljs.core.cst$kw$search,loc.search,cljs.core.cst$kw$hash,loc.hash], null);
} else {
return null;
}
});
taoensso.encore.default_xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

taoensso.encore.js_form_data_QMARK_ = (((typeof FormData !== 'undefined'))?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = (((typeof File !== 'undefined'))?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq(params)){
return goog.Uri.QueryData.createFromMap(cljs.core.clj__GT_js(params)).toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1(params);
var uri_with_query = ((clojure.string.blank_QMARK_(qstr))?uri:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = (function (uri,params){
if(cljs.core.truth_((taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1(params) : taoensso.encore.js_form_data_QMARK_.call(null,params)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_17954 = (function (){try{if(cljs.core.map_QMARK_(params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17929){if((e17929 instanceof Error)){
var e_17954 = e17929;
return e_17954;
} else {
throw e17929;

}
}})();
if((e_17954 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,cljs.core.cst$sym$taoensso$encore,5770,22,"/Users/AlexRoot-Roatch/current-projects/tic-tac-toe/out/taoensso/encore.cljc",cljs.core.cst$sym$map_QMARK_,null,cljs.core.cst$sym$params,params,e_17954,null);
}

if(cljs.core.truth_((function (){var and__5000__auto__ = (typeof FormData !== 'undefined');
if(and__5000__auto__){
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js_file_QMARK_,cljs.core.vals(params));
} else {
return and__5000__auto__;
}
})())){
var form_data = (new FormData());
var seq__17930_17955 = cljs.core.seq(params);
var chunk__17931_17956 = null;
var count__17932_17957 = (0);
var i__17933_17958 = (0);
while(true){
if((i__17933_17958 < count__17932_17957)){
var vec__17940_17959 = chunk__17931_17956.cljs$core$IIndexed$_nth$arity$2(null,i__17933_17958);
var k_17960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17940_17959,(0),null);
var v_17961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17940_17959,(1),null);
form_data.append(cljs.core.name(k_17960),v_17961);


var G__17962 = seq__17930_17955;
var G__17963 = chunk__17931_17956;
var G__17964 = count__17932_17957;
var G__17965 = (i__17933_17958 + (1));
seq__17930_17955 = G__17962;
chunk__17931_17956 = G__17963;
count__17932_17957 = G__17964;
i__17933_17958 = G__17965;
continue;
} else {
var temp__5804__auto___17966 = cljs.core.seq(seq__17930_17955);
if(temp__5804__auto___17966){
var seq__17930_17967__$1 = temp__5804__auto___17966;
if(cljs.core.chunked_seq_QMARK_(seq__17930_17967__$1)){
var c__5525__auto___17968 = cljs.core.chunk_first(seq__17930_17967__$1);
var G__17969 = cljs.core.chunk_rest(seq__17930_17967__$1);
var G__17970 = c__5525__auto___17968;
var G__17971 = cljs.core.count(c__5525__auto___17968);
var G__17972 = (0);
seq__17930_17955 = G__17969;
chunk__17931_17956 = G__17970;
count__17932_17957 = G__17971;
i__17933_17958 = G__17972;
continue;
} else {
var vec__17943_17973 = cljs.core.first(seq__17930_17967__$1);
var k_17974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17943_17973,(0),null);
var v_17975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17943_17973,(1),null);
form_data.append(cljs.core.name(k_17974),v_17975);


var G__17976 = cljs.core.next(seq__17930_17967__$1);
var G__17977 = null;
var G__17978 = (0);
var G__17979 = (0);
seq__17930_17955 = G__17976;
chunk__17931_17956 = G__17977;
count__17932_17957 = G__17978;
i__17933_17958 = G__17979;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode.cljs$core$IFn$_invoke$arity$1(params)], null);
}
}
});
return (function (uri,method,params){
if(cljs.core.truth_((function (){var fexpr__17949 = (function (x){
var or__5002__auto__ = (function (){var fexpr__17950 = taoensso.truss.impl.safe_pred(cljs.core.nil_QMARK_);
return (fexpr__17950.cljs$core$IFn$_invoke$arity$1 ? fexpr__17950.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17950.call(null,x));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var fexpr__17951 = taoensso.truss.impl.safe_pred(cljs.core.map_QMARK_);
return (fexpr__17951.cljs$core$IFn$_invoke$arity$1 ? fexpr__17951.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17951.call(null,x));
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var fexpr__17952 = taoensso.truss.impl.safe_pred(taoensso.encore.js_form_data_QMARK_);
return (fexpr__17952.cljs$core$IFn$_invoke$arity$1 ? fexpr__17952.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17952.call(null,x));
}
}
});
return fexpr__17949(params);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,cljs.core.cst$sym$taoensso$encore,5782,12,"/Users/AlexRoot-Roatch/current-projects/tic-tac-toe/out/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$or,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$js_DASH_form_DASH_data_QMARK_], null),null,cljs.core.cst$sym$params,params,null,null);
}

var G__17953 = method;
var G__17953__$1 = (((G__17953 instanceof cljs.core.Keyword))?G__17953.fqn:null);
switch (G__17953__$1) {
case "get":
return url_encode.cljs$core$IFn$_invoke$arity$2(uri,params);

break;
case "post":
return adaptive_encode(uri,params);

break;
case "put":
return adaptive_encode(uri,params);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17953__$1)].join('')));

}
});
})();
/**
 * Queues a lightweight Ajax call with Google Closure's `goog.net.XhrIo` and
 *   returns nil, or the resulting `goog.net.XhrIo` instance if one was
 *   immediately available from the XHR pool:
 * 
 *     (ajax-call
 *       "http://localhost:8080/my-post-route" ; Endpoint URL
 * 
 *       {:method     :post ; ∈ #{:get :post :put}
 *        :resp-type  :text ; ∈ #{:auto :edn :json :xml :text}
 * 
 *        :params     {:username "Rich Hickey" :type "Awesome"} ; Request params
 *        :headers    {"Content-Type" "text/plain"} ; Request headers
 * 
 *        :timeout-ms 7000
 *        :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 * 
 *        :xhr-pool       my-xhr-pool ; Optional `goog.net.XhrIoPool` instance or delay
 *        :xhr-cb-fn      (fn [xhr])  ; Optional fn to call with `XhrIo` from pool when available
 *        :xhr-timeout-ms 2500        ; Optional max msecs to wait on pool for `XhrIo`
 *       }
 * 
 *       (fn ajax-callback-fn [resp-map]
 *         (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *           ;; ?status ; ∈ #{nil 200 404 ...}, non-nil iff server responded
 *           ;; ?error  ; ∈ #{nil <http-error-status-code> <exception> :timeout
 *                            :abort :http-error :exception :xhr-pool-depleted}
 *           (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_call = (function taoensso$encore$ajax_call(url,p__17982,callback_fn){
var map__17983 = p__17982;
var map__17983__$1 = cljs.core.__destructure_map(map__17983);
var opts = map__17983__$1;
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17983__$1,cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$auto);
var xhr_pool = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17983__$1,cljs.core.cst$kw$xhr_DASH_pool,taoensso.encore.default_xhr_pool_);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17983__$1,cljs.core.cst$kw$timeout_DASH_ms,(10000));
var xhr_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17983__$1,cljs.core.cst$kw$xhr_DASH_timeout_DASH_ms,(2500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17983__$1,cljs.core.cst$kw$method,cljs.core.cst$kw$get);
var xhr_cb_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17983__$1,cljs.core.cst$kw$xhr_DASH_cb_DASH_fn);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17983__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17983__$1,cljs.core.cst$kw$headers);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17983__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
if(cljs.core.truth_((function (){var fexpr__17986 = (function (x){
var or__5002__auto__ = (function (){var fexpr__17987 = taoensso.truss.impl.safe_pred(cljs.core.nil_QMARK_);
return (fexpr__17987.cljs$core$IFn$_invoke$arity$1 ? fexpr__17987.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17987.call(null,x));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var fexpr__17988 = taoensso.truss.impl.safe_pred(taoensso.encore.nat_int_QMARK_);
return (fexpr__17988.cljs$core$IFn$_invoke$arity$1 ? fexpr__17988.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17988.call(null,x));
}
});
return fexpr__17986(timeout_ms);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,cljs.core.cst$sym$taoensso$encore,5831,6,"/Users/AlexRoot-Roatch/current-projects/tic-tac-toe/out/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$or,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$nat_DASH_int_QMARK_], null),null,cljs.core.cst$sym$timeout_DASH_ms,timeout_ms,null,null);
}

var xhr_pool__$1 = cljs.core.force(xhr_pool);
var with_xhr = (function (xhr){
try{var timeout_ms__$1 = (function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$timeout);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__17994 = method;
var G__17994__$1 = (((G__17994 instanceof cljs.core.Keyword))?G__17994.fqn:null);
switch (G__17994__$1) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(method,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$context,cljs.core.cst$sym$taoensso$encore_SLASH_ajax_DASH_call,cljs.core.cst$kw$param,cljs.core.cst$sym$method,cljs.core.cst$kw$expected,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null)], null));

}
})();
var vec__17991 = (taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3(url,method,params) : taoensso.encore.coerce_xhr_params.call(null,url,method,params));
var xhr_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17991,(0),null);
var xhr__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17991,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys((function (p1__17981_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__17981_SHARP_));
}),headers);
var headers__$2 = taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with",cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js(headers__$2);
})();
var _QMARK_progress_listener = (function (){var b2__1576__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$progress_DASH_fn);
if(cljs.core.truth_(b2__1576__auto__)){
var pf = b2__1576__auto__;
xhr.setProgressEventsEnabled(true);

return goog.events.listen(xhr,goog.net.EventType.PROGRESS,(function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__5000__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total,(0));
} else {
return and__5000__auto__;
}
})())?(loaded / total):null);
var G__17995 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$length_DASH_computable_QMARK_,length_computable_QMARK_,cljs.core.cst$kw$_QMARK_ratio,_QMARK_ratio,cljs.core.cst$kw$loaded,loaded,cljs.core.cst$kw$total,total,cljs.core.cst$kw$ev,ev], null);
return (pf.cljs$core$IFn$_invoke$arity$1 ? pf.cljs$core$IFn$_invoke$arity$1(G__17995) : pf.call(null,G__17995));
}));
} else {
return null;
}
})();
var G__17996_18007 = xhr;
goog.events.listenOnce(G__17996_18007,goog.net.EventType.READY,(function (_){
return xhr_pool__$1.releaseObject(xhr);
}));

goog.events.listenOnce(G__17996_18007,goog.net.EventType.COMPLETE,(function taoensso$encore$ajax_call_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__17997 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,cljs.core.cst$kw$auto))?resp_type:(((_QMARK_content_type == null))?cljs.core.cst$kw$text:(function (){var cts = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type));
var match_QMARK_ = (function (s){
return taoensso.encore.str_contains_QMARK_(cts,s);
});
if(cljs.core.truth_(match_QMARK_("/edn"))){
return cljs.core.cst$kw$edn;
} else {
if(cljs.core.truth_(match_QMARK_("/json"))){
return cljs.core.cst$kw$json;
} else {
if(cljs.core.truth_(match_QMARK_("/xml"))){
return cljs.core.cst$kw$xml;
} else {
return cljs.core.cst$kw$text;
}
}
}
})()));
try{var G__18001 = resp_type__$1;
var G__18001__$1 = (((G__18001 instanceof cljs.core.Keyword))?G__18001.fqn:null);
switch (G__18001__$1) {
case "edn":
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(resp_type__$1,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$context,cljs.core.cst$sym$taoensso$encore_SLASH_ajax_DASH_call,cljs.core.cst$kw$param,cljs.core.cst$sym$resp_DASH_type,cljs.core.cst$kw$expected,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$edn,null,cljs.core.cst$kw$json,null,cljs.core.cst$kw$xml,null,cljs.core.cst$kw$auto,null,cljs.core.cst$kw$text,null], null), null)], null));

}
}catch (e18000){var _e = e18000;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ajax_SLASH_bad_DASH_response_DASH_type,resp_type__$1,cljs.core.cst$kw$ajax_SLASH_resp_DASH_as_DASH_text,xhr.getResponseText()], null);
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17997,(0),null);
var _QMARK_content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17997,(1),null);
var _QMARK_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17997,(2),null);
if(cljs.core.truth_(_QMARK_progress_listener)){
goog.events.unlistenByKey(_QMARK_progress_listener);
} else {
}

var G__18002 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$raw_DASH_resp,resp,cljs.core.cst$kw$xhr,xhr,cljs.core.cst$kw$success_QMARK_,success_QMARK_,cljs.core.cst$kw$_QMARK_status,_QMARK_status,cljs.core.cst$kw$_QMARK_content_DASH_type,_QMARK_content_type,cljs.core.cst$kw$_QMARK_content,_QMARK_content,cljs.core.cst$kw$_QMARK_error,(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,cljs.core.cst$kw$exception,goog.net.ErrorCode.HTTP_ERROR,cljs.core.cst$kw$http_DASH_error,goog.net.ErrorCode.ABORT,cljs.core.cst$kw$abort,goog.net.ErrorCode.TIMEOUT,cljs.core.cst$kw$timeout]),xhr.getLastErrorCode(),cljs.core.cst$kw$unknown)))], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__18002) : callback_fn.call(null,G__18002));
}));


xhr.setTimeoutInterval((function (){var or__5002__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_url,xhr_method,xhr__QMARK_data,xhr_headers);

var b2__1576__auto___18009 = xhr_cb_fn;
if(cljs.core.truth_(b2__1576__auto___18009)){
var cb_18010 = b2__1576__auto___18009;
try{(cb_18010.cljs$core$IFn$_invoke$arity$1 ? cb_18010.cljs$core$IFn$_invoke$arity$1(xhr) : cb_18010.call(null,xhr));
}catch (e18003){var __18011 = e18003;
}} else {
}

return xhr;
}catch (e17989){var e = e17989;
xhr_pool__$1.releaseObject(xhr);

var G__17990_18012 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,e], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__17990_18012) : callback_fn.call(null,G__17990_18012));

return null;
}});
var b2__1576__auto__ = xhr_pool__$1.getObject();
if(cljs.core.truth_(b2__1576__auto__)){
var xhr = b2__1576__auto__;
return with_xhr(xhr);
} else {
if((((xhr_timeout_ms == null)) || ((xhr_timeout_ms === (0))))){
var G__18004_18013 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,cljs.core.cst$kw$xhr_DASH_pool_DASH_depleted], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__18004_18013) : callback_fn.call(null,G__18004_18013));

return null;
} else {
var done_QMARK__ = taoensso.encore.latom(false);
setTimeout((function taoensso$encore$ajax_call_$_xhr_timeout(){
if(cljs.core.compare_and_set_BANG_(done_QMARK__,false,true)){
var G__18005 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,cljs.core.cst$kw$xhr_DASH_pool_DASH_timeout], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__18005) : callback_fn.call(null,G__18005));
} else {
return null;
}
}),xhr_timeout_ms);

xhr_pool__$1.getObject((function taoensso$encore$ajax_call_$_xhr_cb(xhr){
if(cljs.core.compare_and_set_BANG_(done_QMARK__,false,true)){
return with_xhr(xhr);
} else {
return xhr_pool__$1.releaseObject(xhr);
}
}));

return null;
}
}
});
/**
 * Based on <https://goo.gl/fBqy6e>.
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),s),"*","%2A");
} else {
return null;
}
});
/**
 * Stolen from <http://goo.gl/99NSR1>.
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18020 = arguments.length;
var i__5727__auto___18021 = (0);
while(true){
if((i__5727__auto___18021 < len__5726__auto___18020)){
args__5732__auto__.push((arguments[i__5727__auto___18021]));

var G__18022 = (i__5727__auto___18021 + (1));
i__5727__auto___18021 = G__18022;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__18016){
var vec__18017 = p__18016;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18017,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
} else {
return null;
}
}));

(taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq18014){
var G__18015 = cljs.core.first(seq18014);
var seq18014__$1 = cljs.core.next(seq18014);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18015,seq18014__$1);
}));

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [taoensso.encore.url_encode(taoensso.encore.as_qname(k)),"=",taoensso.encore.url_encode((function (){var or__5002__auto__ = taoensso.encore.as__QMARK_qname(v);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
})())].join('');
});
var join = (function (strs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",strs);
});
if(cljs.core.empty_QMARK_(m)){
return "";
} else {
return join((function (){var iter__5480__auto__ = (function taoensso$encore$format_query_string_$_iter__18023(s__18024){
return (new cljs.core.LazySeq(null,(function (){
var s__18024__$1 = s__18024;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18024__$1);
if(temp__5804__auto__){
var s__18024__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18024__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18024__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18026 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18025 = (0);
while(true){
if((i__18025 < size__5479__auto__)){
var vec__18027 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5478__auto__,i__18025);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18027,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18027,(1),null);
if(taoensso.encore.some_QMARK_(v)){
cljs.core.chunk_append(b__18026,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__5002__auto__ = cljs.core.seq(v);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__18033 = (i__18025 + (1));
i__18025 = G__18033;
continue;
} else {
var G__18034 = (i__18025 + (1));
i__18025 = G__18034;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18026),taoensso$encore$format_query_string_$_iter__18023(cljs.core.chunk_rest(s__18024__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18026),null);
}
} else {
var vec__18030 = cljs.core.first(s__18024__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18030,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18030,(1),null);
if(taoensso.encore.some_QMARK_(v)){
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__5002__auto__ = cljs.core.seq(v);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__18023(cljs.core.rest(s__18024__$2)));
} else {
var G__18035 = cljs.core.rest(s__18024__$2);
s__18024__$1 = G__18035;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var b2__1576__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(b2__1576__auto__)){
var cur = b2__1576__auto__;
if(cljs.core.vector_QMARK_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18045 = arguments.length;
var i__5727__auto___18046 = (0);
while(true){
if((i__5727__auto___18046 < len__5726__auto___18045)){
args__5732__auto__.push((arguments[i__5727__auto___18046]));

var G__18047 = (i__5727__auto___18046 + (1));
i__5727__auto___18046 = G__18047;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__18038){
var vec__18039 = p__18038;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18039,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18039,(1),null);
if(((clojure.string.blank_QMARK_(s)) || (cljs.core.not(taoensso.encore.str_contains_QMARK_(s,"="))))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_(s,"?"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,param){
var b2__1576__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(b2__1576__auto__)){
var vec__18042 = b2__1576__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18042,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18042,(1),null);
return taoensso.encore.assoc_conj(m,taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)),taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys(cljs.core.keyword,m);
} else {
return m;
}
}
}));

(taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq18036){
var G__18037 = cljs.core.first(seq18036);
var seq18036__$1 = cljs.core.next(seq18036);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18037,seq18036__$1);
}));

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__18048 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18048,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18048,(1),null);
var qmap = taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys(cljs.core.keyword,taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.map_keys(cljs.core.keyword,m)], 0));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var b2__1576__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__1576__auto__)){
var qstr = b2__1576__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),"?",qstr].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_((function() { 
var G__18054__delegate = function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["[encore/stubfn] Attempted to call uninitialized stub fn (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),")"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stub,name,cljs.core.cst$kw$args,args], null));
};
var G__18054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18055__i = 0, G__18055__a = new Array(arguments.length -  0);
while (G__18055__i < G__18055__a.length) {G__18055__a[G__18055__i] = arguments[G__18055__i + 0]; ++G__18055__i;}
  args = new cljs.core.IndexedSeq(G__18055__a,0,null);
} 
return G__18054__delegate.call(this,args);};
G__18054.cljs$lang$maxFixedArity = 0;
G__18054.cljs$lang$applyTo = (function (arglist__18056){
var args = cljs.core.seq(arglist__18056);
return G__18054__delegate(args);
});
G__18054.cljs$core$IFn$_invoke$arity$variadic = G__18054__delegate;
return G__18054;
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(x){
var pred = cljs.core.fn_QMARK_;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/stubfn] Unexpected unstub type (expected symbol)",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$unstub,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,x,cljs.core.cst$kw$type,cljs.core.type(x)], null)], null));
}
});
var always_18071 = (function taoensso$encore$always(_in){
return true;
});
var never_18072 = (function taoensso$encore$never(_in){
return false;
});
var name_QMARK__18073 = (function (x){
return ((typeof x === 'string') || (taoensso.encore.named_QMARK_(x)));
});
var qname_18074 = (function (x){
if(taoensso.encore.named_QMARK_(x)){
var n = cljs.core.name(x);
var b2__1576__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(b2__1576__auto__)){
var ns = b2__1576__auto__;
return [ns,"/",n].join('');
} else {
return n;
}
} else {
return x;
}
});
var qname_BANG__18075 = (function (x){
if(typeof x === 'string'){
return x;
} else {
if((x == null)){
return "";
} else {
var or__5002__auto__ = qname_18074(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$context,cljs.core.cst$sym$taoensso$encore_SLASH_name_DASH_filter,cljs.core.cst$kw$param,cljs.core.cst$sym$filter_DASH_input_DASH_arg,cljs.core.cst$kw$expected,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,"null",cljs.core.cst$sym$symbol,"null",cljs.core.cst$sym$string,"null",cljs.core.cst$sym$keyword,"null"], null), null)], null));
}
}
}
});
var wild_str__GT__QMARK_re_pattern_18076 = (function (s){
if(cljs.core.truth_(taoensso.encore.str_contains_QMARK_(s,"*"))){
return cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join(''),".","\\."),"*","(.*)"));
} else {
return null;
}
});
var compile__GT_match_fn_18077 = (function taoensso$encore$compile__GT_match_fn(spec,cache_QMARK_){
while(true){
if(cljs.core.truth_((function (){var fexpr__18059 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["*",null,cljs.core.cst$kw$any,null], null), null);
return (fexpr__18059.cljs$core$IFn$_invoke$arity$1 ? fexpr__18059.cljs$core$IFn$_invoke$arity$1(spec) : fexpr__18059.call(null,spec));
})())){
return always_18071;
} else {
if(cljs.core.truth_((function (){var fexpr__18060 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$none]);
return (fexpr__18060.cljs$core$IFn$_invoke$arity$1 ? fexpr__18060.cljs$core$IFn$_invoke$arity$1(spec) : fexpr__18060.call(null,spec));
})())){
return never_18072;
} else {
if(taoensso.encore.re_pattern_QMARK_(spec)){
return ((function (spec,cache_QMARK_,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in$){
return cljs.core.re_find(spec,qname_BANG__18075(in$));
});
;})(spec,cache_QMARK_,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076))
} else {
if(name_QMARK__18073(spec)){
var spec__$1 = qname_18074(spec);
var b2__1576__auto__ = wild_str__GT__QMARK_re_pattern_18076(spec__$1);
if(cljs.core.truth_(b2__1576__auto__)){
var re_pattern = b2__1576__auto__;
var G__18078 = re_pattern;
var G__18079 = cache_QMARK_;
spec = G__18078;
cache_QMARK_ = G__18079;
continue;
} else {
return ((function (spec,cache_QMARK_,b2__1576__auto__,spec__$1,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in$){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(spec__$1,qname_BANG__18075(in$));
});
;})(spec,cache_QMARK_,b2__1576__auto__,spec__$1,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076))
}
} else {
if(((cljs.core.vector_QMARK_(spec)) || (cljs.core.set_QMARK_(spec)))){
if(cljs.core.truth_((function (){var fexpr__18061 = cljs.core.set(spec);
return (fexpr__18061.cljs$core$IFn$_invoke$arity$1 ? fexpr__18061.cljs$core$IFn$_invoke$arity$1("*") : fexpr__18061.call(null,"*"));
})())){
return always_18071;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(spec),(1))){
var G__18080 = cljs.core.first(spec);
var G__18081 = cache_QMARK_;
spec = G__18080;
cache_QMARK_ = G__18081;
continue;
} else {
var vec__18062 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (spec,cache_QMARK_,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076){
return (function (p__18065,spec__$1){
var vec__18066 = p__18065;
var fixed_strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18066,(0),null);
var re_patterns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18066,(1),null);
var spec__$2 = qname_18074(spec__$1);
var b2__1576__auto__ = ((taoensso.encore.re_pattern_QMARK_(spec__$2))?spec__$2:wild_str__GT__QMARK_re_pattern_18076(spec__$2));
if(cljs.core.truth_(b2__1576__auto__)){
var re_pattern = b2__1576__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fixed_strs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(re_patterns,re_pattern)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fixed_strs,spec__$2),re_patterns], null);
}
});})(spec,cache_QMARK_,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),spec);
var fixed_strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18062,(0),null);
var re_patterns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18062,(1),null);
var fx_match = cljs.core.not_empty(fixed_strs);
var re_match = (function (){var b2__1576__auto__ = cljs.core.not_empty(re_patterns);
if(cljs.core.truth_(b2__1576__auto__)){
var re_patterns__$1 = b2__1576__auto__;
var f = ((function (spec,cache_QMARK_,re_patterns__$1,b2__1576__auto__,vec__18062,fixed_strs,re_patterns,fx_match,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in_str){
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2(((function (spec,cache_QMARK_,re_patterns__$1,b2__1576__auto__,vec__18062,fixed_strs,re_patterns,fx_match,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076){
return (function (p1__18058_SHARP_){
return cljs.core.re_find(p1__18058_SHARP_,in_str);
});})(spec,cache_QMARK_,re_patterns__$1,b2__1576__auto__,vec__18062,fixed_strs,re_patterns,fx_match,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076))
,re_patterns__$1);
});})(spec,cache_QMARK_,re_patterns__$1,b2__1576__auto__,vec__18062,fixed_strs,re_patterns,fx_match,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076))
;
if(cljs.core.truth_(cache_QMARK_)){
return taoensso.encore.fmemoize(f);
} else {
return f;
}
} else {
return null;
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = fx_match;
if(cljs.core.truth_(and__5000__auto__)){
return re_match;
} else {
return and__5000__auto__;
}
})())){
return ((function (spec,cache_QMARK_,vec__18062,fixed_strs,re_patterns,fx_match,re_match,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in$){
var in_str = qname_BANG__18075(in$);
var or__5002__auto__ = (fx_match.cljs$core$IFn$_invoke$arity$1 ? fx_match.cljs$core$IFn$_invoke$arity$1(in_str) : fx_match.call(null,in_str));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (re_match.cljs$core$IFn$_invoke$arity$1 ? re_match.cljs$core$IFn$_invoke$arity$1(in_str) : re_match.call(null,in_str));
}
});
;})(spec,cache_QMARK_,vec__18062,fixed_strs,re_patterns,fx_match,re_match,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076))
} else {
if(cljs.core.truth_(fx_match)){
return ((function (spec,cache_QMARK_,vec__18062,fixed_strs,re_patterns,fx_match,re_match,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076){
return (function (in$){
var G__18069 = qname_BANG__18075(in$);
return (fx_match.cljs$core$IFn$_invoke$arity$1 ? fx_match.cljs$core$IFn$_invoke$arity$1(G__18069) : fx_match.call(null,G__18069));
});
;})(spec,cache_QMARK_,vec__18062,fixed_strs,re_patterns,fx_match,re_match,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076))
} else {
if(cljs.core.truth_(re_match)){
return ((function (spec,cache_QMARK_,vec__18062,fixed_strs,re_patterns,fx_match,re_match,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076){
return (function (in$){
var G__18070 = qname_BANG__18075(in$);
return (re_match.cljs$core$IFn$_invoke$arity$1 ? re_match.cljs$core$IFn$_invoke$arity$1(G__18070) : re_match.call(null,G__18070));
});
;})(spec,cache_QMARK_,vec__18062,fixed_strs,re_patterns,fx_match,re_match,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076))
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/cond!] No matching clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
}
}
}
} else {
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$context,cljs.core.cst$sym$taoensso$encore_SLASH_name_DASH_filter,cljs.core.cst$kw$param,cljs.core.cst$sym$filter_DASH_spec,cljs.core.cst$kw$expected,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$sym$set,"null",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$allow,cljs.core.cst$sym$_LT_spec_GT_,cljs.core.cst$kw$deny,cljs.core.cst$sym$_LT_spec_GT_], null),"null",cljs.core.cst$sym$string,"null",cljs.core.cst$sym$keyword,"null",cljs.core.cst$sym$regex,"null"], null), null)], null));
}
}
}
}
}
break;
}
});
/**
 * Given filter `spec`, returns a compiled (fn conform? [name]) that takes
 *  any nameable type (string, keyword, symbol).
 * 
 *  Spec may be:
 *    - A regex pattern. Will conform on match.
 *    - A str/kw/sym, in which "*"s act as wildcards. Will conform on match.
 * 
 *    - A vector or set of regex patterns or strs/kws/syms.
 *      Will conform on ANY match.
 *      If you need literal "*"s, use #"\*" regex instead.
 * 
 *    - {:allow <spec> :deny <spec>} with specs as above.
 *      Will conform iff `allow` spec matches AND `deny` spec does NOT.
 * 
 *  Resulting conform fn is useful as allowlist and/or denylist.
 *  Example inputs: namespace strings, class names, ids, etc.
 * 
 *  Spec examples:
 *    #{}, "*", "foo.bar", "foo.bar.*", #{"foo" "bar.*"},
 *    {:allow #{"foo" "bar.*"} :deny #{"foo.*.bar.*"}},
 *    #"(foo1|foo2)\.bar".
 */
taoensso.encore.name_filter = (function taoensso$encore$name_filter(spec){
while(true){
if(cljs.core.map_QMARK_(spec)){
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.cst$kw$cache_QMARK_);
var allow_spec = (function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.cst$kw$allow);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.cst$kw$whitelist);
}
})();
var deny_spec = (function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.cst$kw$deny);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.cst$kw$blacklist);
}
})();
var allow = (function (){var b2__1576__auto__ = allow_spec;
if(cljs.core.truth_(b2__1576__auto__)){
var as = b2__1576__auto__;
return compile__GT_match_fn_18077(as,cache_QMARK_);
} else {
return null;
}
})();
var deny = (function (){var b2__1576__auto__ = deny_spec;
if(cljs.core.truth_(b2__1576__auto__)){
var ds = b2__1576__auto__;
return compile__GT_match_fn_18077(ds,cache_QMARK_);
} else {
return null;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deny,always_18071)){
return never_18072;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow,never_18072)){
return never_18072;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = allow;
if(cljs.core.truth_(and__5000__auto__)){
return deny;
} else {
return and__5000__auto__;
}
})())){
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076,compile__GT_match_fn_18077){
return (function taoensso$encore$name_filter_$_conform_QMARK_(in$){
if((allow.cljs$core$IFn$_invoke$arity$1 ? allow.cljs$core$IFn$_invoke$arity$1(in$) : allow.call(null,in$))){
if((deny.cljs$core$IFn$_invoke$arity$1 ? deny.cljs$core$IFn$_invoke$arity$1(in$) : deny.call(null,in$))){
return false;
} else {
return true;
}
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076,compile__GT_match_fn_18077))
} else {
if(cljs.core.truth_(allow)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow,always_18071)){
return always_18071;
} else {
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076,compile__GT_match_fn_18077){
return (function taoensso$encore$name_filter_$_conform_QMARK_(in$){
if((allow.cljs$core$IFn$_invoke$arity$1 ? allow.cljs$core$IFn$_invoke$arity$1(in$) : allow.call(null,in$))){
return true;
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076,compile__GT_match_fn_18077))
}
} else {
if(cljs.core.truth_(deny)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deny,never_18072)){
return always_18071;
} else {
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076,compile__GT_match_fn_18077){
return (function taoensso$encore$name_filter_$_conform_QMARK_(in$){
if((deny.cljs$core$IFn$_invoke$arity$1 ? deny.cljs$core$IFn$_invoke$arity$1(in$) : deny.call(null,in$))){
return false;
} else {
return true;
}
});
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_18071,never_18072,name_QMARK__18073,qname_18074,qname_BANG__18075,wild_str__GT__QMARK_re_pattern_18076,compile__GT_match_fn_18077))
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/name-filter] `allow-spec` and `deny-spec` cannot both be nil",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$allow_DASH_spec,allow_spec,cljs.core.cst$kw$deny_DASH_spec,deny_spec], null));
}
}
}
}
}
} else {
var G__18082 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$allow,spec,cljs.core.cst$kw$deny,null], null);
spec = G__18082;
continue;
}
break;
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

var taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_18083 = (function (_,msecs,f){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__5351__auto__.call(null,_,msecs,f));
} else {
var m__5349__auto__ = (taoensso.encore._schedule_timeout["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__5349__auto__.call(null,_,msecs,f));
} else {
throw cljs.core.missing_protocol("ITimeoutImpl.-schedule-timeout",_);
}
}
});
taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
return taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_18083(_,msecs,f);
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
});
(taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return setTimeout(f,msecs);
}));

(taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true);

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl");

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/DefaultTimeoutImpl");
}));

/**
 * Positional factory function for taoensso.encore/DefaultTimeoutImpl.
 */
taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore.default_timeout_impl_ !== 'undefined')){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

var taoensso$encore$ITimeoutFuture$tf_state$dyn_18084 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (taoensso.encore.tf_state["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-state",_);
}
}
});
/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_state$dyn_18084(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_poll$dyn_18085 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (taoensso.encore.tf_poll["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-poll",_);
}
}
});
/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_poll$dyn_18085(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_18086 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (taoensso.encore.tf_done_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-done?",_);
}
}
});
/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_18086(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_18087 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (taoensso.encore.tf_pending_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-pending?",_);
}
}
});
/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_18087(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_18088 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancelled?",_);
}
}
});
/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_18088(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_18089 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (taoensso.encore.tf_cancel_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancel!",_);
}
}
});
/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_18089(_);
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,self__.f,cljs.core.cst$kw$udt,self__.udt], null);
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.result__);
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (!(cljs.core.keyword_identical_QMARK_(cljs.core.deref(self__.result__),cljs.core.cst$kw$timeout_SLASH_pending)));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.keyword_identical_QMARK_(cljs.core.deref(self__.result__),cljs.core.cst$kw$timeout_SLASH_pending);
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.keyword_identical_QMARK_(cljs.core.deref(self__.result__),cljs.core.cst$kw$timeout_SLASH_cancelled);
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_(self__.result__,cljs.core.cst$kw$timeout_SLASH_pending,cljs.core.cst$kw$timeout_SLASH_cancelled);
}));

(taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(null);
}));

(taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(null);
}));

(taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$result____,cljs.core.cst$sym$udt], null);
}));

(taoensso.encore.TimeoutFuture.cljs$lang$type = true);

(taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture");

(taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/TimeoutFuture");
}));

/**
 * Positional factory function for taoensso.encore/TimeoutFuture.
 */
taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var G__18091 = arguments.length;
switch (G__18091) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3(taoensso.encore.default_timeout_impl_,msecs,f);
}));

(taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$(msecs);
var udt = (taoensso.encore.now_udt() + msecs__$1);
var result__ = taoensso.encore.latom(cljs.core.cst$kw$timeout_SLASH_pending);
var cas_f = (function (){
var result_ = (new cljs.core.Delay((function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),null));
if(cljs.core.compare_and_set_BANG_(result__,cljs.core.cst$kw$timeout_SLASH_pending,result_)){
return cljs.core.deref(result_);
} else {
return null;
}
});
var impl_18093 = cljs.core.force(impl_);
taoensso.encore._schedule_timeout(impl_18093,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
}));

(taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3);

/**
 * Prefer `latom`.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref(atom_);
var v1 = (function (){var G__18100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18100) : f.call(null,G__18100));
})();
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
return v1;
} else {
continue;
}
break;
}
});

taoensso.encore.regular_num_QMARK_ = taoensso.encore.finite_num_QMARK_;

taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.memoize_STAR_ = taoensso.encore.memoize;

taoensso.encore.memoize_ = taoensso.encore.memoize;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.idx_fn = taoensso.encore.counter;

taoensso.encore.vec_STAR_ = taoensso.encore.ensure_vec;

taoensso.encore.set_STAR_ = taoensso.encore.ensure_set;

taoensso.encore.have_transducers_QMARK_ = true;

taoensso.encore.pval_QMARK_ = taoensso.encore.pnum_QMARK_;

taoensso.encore.as__QMARK_pval = taoensso.encore.as__QMARK_pnum;

taoensso.encore.as_pval = taoensso.encore.as_pnum;

/**
 * Prefer `get-substr-by-idx`.
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var G__18102 = arguments.length;
switch (G__18102) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
}));

(taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
}));

(taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3);


/**
 * Prefer `get-substr-by-len`.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var G__18104 = arguments.length;
switch (G__18104) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start));
}));

(taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start,length));
}));

(taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3);


taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

var nolist_QMARK__18223 = (function (p1__18094_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]),p1__18094_SHARP_);
});
taoensso.encore.compile_ns_filter = (function taoensso$encore$compile_ns_filter(var_args){
var G__18106 = arguments.length;
switch (G__18106) {
case 1:
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$1 = (function (ns_pattern){
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2(ns_pattern,null);
}));

(taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2 = (function (whitelist,blacklist){
if(((nolist_QMARK__18223(whitelist)) && (nolist_QMARK__18223(blacklist)))){
return (function (_){
return true;
});
} else {
return taoensso.encore.name_filter(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$allow,whitelist,cljs.core.cst$kw$deny,blacklist], null));
}
}));

(taoensso.encore.compile_ns_filter.cljs$lang$maxFixedArity = 2);


taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18225 = arguments.length;
var i__5727__auto___18226 = (0);
while(true){
if((i__5727__auto___18226 < len__5726__auto___18225)){
args__5732__auto__.push((arguments[i__5727__auto___18226]));

var G__18227 = (i__5727__auto___18226 + (1));
i__5727__auto___18226 = G__18227;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__18109){
var vec__18110 = p__18109;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18110,(0),null);
var nplaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18110,(1),null);
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((function (){var or__5002__auto__ = type;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.cst$kw$round;
}
})(),nplaces,n);
}));

(taoensso.encore.round.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.round.cljs$lang$applyTo = (function (seq18107){
var G__18108 = cljs.core.first(seq18107);
var seq18107__$1 = cljs.core.next(seq18107);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18108,seq18107__$1);
}));


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var G__18114 = arguments.length;
switch (G__18114) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}));

(taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3(signf,x,y);
}));

(taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3);


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18229 = arguments.length;
var i__5727__auto___18230 = (0);
while(true){
if((i__5727__auto___18230 < len__5726__auto___18229)){
args__5732__auto__.push((arguments[i__5727__auto___18230]));

var G__18231 = (i__5727__auto___18230 + (1));
i__5727__auto___18230 = G__18231;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once(sep,coll);
}));

(taoensso.encore.join_once.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.join_once.cljs$lang$applyTo = (function (seq18115){
var G__18116 = cljs.core.first(seq18115);
var seq18115__$1 = cljs.core.next(seq18115);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18116,seq18115__$1);
}));


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ensure_set(x),null);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_(ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_(ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_(ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_(ks,m);
});

taoensso.encore.logging_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$debug);

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18232 = arguments.length;
var i__5727__auto___18233 = (0);
while(true){
if((i__5727__auto___18233 < len__5726__auto___18232)){
args__5732__auto__.push((arguments[i__5727__auto___18233]));

var G__18234 = (i__5727__auto___18233 + (1));
i__5727__auto___18233 = G__18234;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__18119){
var vec__18120 = p__18119;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18120,(0),null);
return setTimeout(nullary_f,taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = nattempt;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})()));
}));

(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq18117){
var G__18118 = cljs.core.first(seq18117);
var seq18117__$1 = cljs.core.next(seq18117);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18118,seq18117__$1);
}));


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined')){
} else {
taoensso.encore._STAR_log_level_STAR_ = cljs.core.cst$kw$debug;
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$trace,(1),cljs.core.cst$kw$debug,(2),cljs.core.cst$kw$info,(3),cljs.core.cst$kw$warn,(4),cljs.core.cst$kw$error,(5),cljs.core.cst$kw$fatal,(6),cljs.core.cst$kw$report,(7)], null);
return (function (level){
return ((__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(level) : __GT_n.call(null,level)) >= (__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(taoensso.encore._STAR_log_level_STAR_) : __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_)));
});
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18235 = arguments.length;
var i__5727__auto___18236 = (0);
while(true){
if((i__5727__auto___18236 < len__5726__auto___18235)){
args__5732__auto__.push((arguments[i__5727__auto___18236]));

var G__18237 = (i__5727__auto___18236 + (1));
i__5727__auto___18236 = G__18237;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__18125 = cljs.core.cst$kw$trace;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18125) : taoensso.encore.log_QMARK_.call(null,G__18125));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.tracef.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.tracef.cljs$lang$applyTo = (function (seq18123){
var G__18124 = cljs.core.first(seq18123);
var seq18123__$1 = cljs.core.next(seq18123);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18124,seq18123__$1);
}));


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18238 = arguments.length;
var i__5727__auto___18239 = (0);
while(true){
if((i__5727__auto___18239 < len__5726__auto___18238)){
args__5732__auto__.push((arguments[i__5727__auto___18239]));

var G__18240 = (i__5727__auto___18239 + (1));
i__5727__auto___18239 = G__18240;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__18128 = cljs.core.cst$kw$debug;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18128) : taoensso.encore.log_QMARK_.call(null,G__18128));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.debugf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.debugf.cljs$lang$applyTo = (function (seq18126){
var G__18127 = cljs.core.first(seq18126);
var seq18126__$1 = cljs.core.next(seq18126);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18127,seq18126__$1);
}));


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18241 = arguments.length;
var i__5727__auto___18242 = (0);
while(true){
if((i__5727__auto___18242 < len__5726__auto___18241)){
args__5732__auto__.push((arguments[i__5727__auto___18242]));

var G__18243 = (i__5727__auto___18242 + (1));
i__5727__auto___18242 = G__18243;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__18131 = cljs.core.cst$kw$info;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18131) : taoensso.encore.log_QMARK_.call(null,G__18131));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.infof.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.infof.cljs$lang$applyTo = (function (seq18129){
var G__18130 = cljs.core.first(seq18129);
var seq18129__$1 = cljs.core.next(seq18129);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18130,seq18129__$1);
}));


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18244 = arguments.length;
var i__5727__auto___18245 = (0);
while(true){
if((i__5727__auto___18245 < len__5726__auto___18244)){
args__5732__auto__.push((arguments[i__5727__auto___18245]));

var G__18246 = (i__5727__auto___18245 + (1));
i__5727__auto___18245 = G__18246;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__18134 = cljs.core.cst$kw$warn;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18134) : taoensso.encore.log_QMARK_.call(null,G__18134));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["WARN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.warnf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.warnf.cljs$lang$applyTo = (function (seq18132){
var G__18133 = cljs.core.first(seq18132);
var seq18132__$1 = cljs.core.next(seq18132);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18133,seq18132__$1);
}));


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18247 = arguments.length;
var i__5727__auto___18248 = (0);
while(true){
if((i__5727__auto___18248 < len__5726__auto___18247)){
args__5732__auto__.push((arguments[i__5727__auto___18248]));

var G__18249 = (i__5727__auto___18248 + (1));
i__5727__auto___18248 = G__18249;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__18137 = cljs.core.cst$kw$error;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18137) : taoensso.encore.log_QMARK_.call(null,G__18137));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.errorf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.errorf.cljs$lang$applyTo = (function (seq18135){
var G__18136 = cljs.core.first(seq18135);
var seq18135__$1 = cljs.core.next(seq18135);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18136,seq18135__$1);
}));


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18250 = arguments.length;
var i__5727__auto___18251 = (0);
while(true){
if((i__5727__auto___18251 < len__5726__auto___18250)){
args__5732__auto__.push((arguments[i__5727__auto___18251]));

var G__18252 = (i__5727__auto___18251 + (1));
i__5727__auto___18251 = G__18252;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__18140 = cljs.core.cst$kw$fatal;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18140) : taoensso.encore.log_QMARK_.call(null,G__18140));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["FATAL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq18138){
var G__18139 = cljs.core.first(seq18138);
var seq18138__$1 = cljs.core.next(seq18138);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18139,seq18138__$1);
}));


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18253 = arguments.length;
var i__5727__auto___18254 = (0);
while(true){
if((i__5727__auto___18254 < len__5726__auto___18253)){
args__5732__auto__.push((arguments[i__5727__auto___18254]));

var G__18255 = (i__5727__auto___18254 + (1));
i__5727__auto___18254 = G__18255;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__18143 = cljs.core.cst$kw$report;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18143) : taoensso.encore.log_QMARK_.call(null,G__18143));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.reportf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.reportf.cljs$lang$applyTo = (function (seq18141){
var G__18142 = cljs.core.first(seq18141);
var seq18141__$1 = cljs.core.next(seq18141);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18142,seq18141__$1);
}));


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18256 = arguments.length;
var i__5727__auto___18257 = (0);
while(true){
if((i__5727__auto___18257 < len__5726__auto___18256)){
args__5732__auto__.push((arguments[i__5727__auto___18257]));

var G__18258 = (i__5727__auto___18257 + (1));
i__5727__auto___18257 = G__18258;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__18146){
var vec__18147 = p__18146;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18147,(0),null);
var comparator = (function (){var or__5002__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__18096_SHARP_,p2__18097_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__18096_SHARP_,p2__18097_SHARP_) : comparator.call(null,p1__18096_SHARP_,p2__18097_SHARP_)) > (0))){
return p2__18097_SHARP_;
} else {
return p1__18096_SHARP_;
}
}),coll);
}));

(taoensso.encore.greatest.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.greatest.cljs$lang$applyTo = (function (seq18144){
var G__18145 = cljs.core.first(seq18144);
var seq18144__$1 = cljs.core.next(seq18144);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18145,seq18144__$1);
}));


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18259 = arguments.length;
var i__5727__auto___18260 = (0);
while(true){
if((i__5727__auto___18260 < len__5726__auto___18259)){
args__5732__auto__.push((arguments[i__5727__auto___18260]));

var G__18261 = (i__5727__auto___18260 + (1));
i__5727__auto___18260 = G__18261;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__18152){
var vec__18153 = p__18152;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18153,(0),null);
var comparator = (function (){var or__5002__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__18098_SHARP_,p2__18099_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__18098_SHARP_,p2__18099_SHARP_) : comparator.call(null,p1__18098_SHARP_,p2__18099_SHARP_)) < (0))){
return p2__18099_SHARP_;
} else {
return p1__18098_SHARP_;
}
}),coll);
}));

(taoensso.encore.least.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.least.cljs$lang$applyTo = (function (seq18150){
var G__18151 = cljs.core.first(seq18150);
var seq18150__$1 = cljs.core.next(seq18150);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18151,seq18150__$1);
}));


/**
 * Ref. <http://goo.gl/0GzRuz>
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__5002__auto__ = x;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Prefer `xdistinct`.
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__18160 = (function (p__18161,seen__$1){
while(true){
var vec__18162 = p__18161;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18162,(0),null);
var xs__$1 = vec__18162;
var b2__1576__auto__ = cljs.core.seq(xs__$1);
if(b2__1576__auto__){
var s = b2__1576__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null,v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__18262 = cljs.core.rest(s);
var G__18263 = seen__$1;
p__18161 = G__18262;
seen__$1 = G__18263;
continue;
} else {
return cljs.core.cons(v,taoensso$encore$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
});
return fexpr__18160(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Prefer `xdistinct`.
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var G__18166 = arguments.length;
switch (G__18166) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,coll);
}));

(taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__18167,in$){
var vec__18168 = p__18167;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18168,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18168,(1),null);
var in_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null,in$));
if(cljs.core.contains_QMARK_(seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tr,(0)));
}));

(taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2);


taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){

if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?(function (k,_){
return k;
}):((cljs.core.keyword_identical_QMARK_(kf,cljs.core.cst$kw$keywordize))?(function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
}):kf));
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18265 = arguments.length;
var i__5727__auto___18266 = (0);
while(true){
if((i__5727__auto___18266 < len__5726__auto___18265)){
args__5732__auto__.push((arguments[i__5727__auto___18266]));

var G__18267 = (i__5727__auto___18266 + (1));
i__5727__auto___18266 = G__18267;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__18173){
var vec__18174 = p__18173;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18174,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18174,(1),null);

if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?(function (k,_){
return k;
}):((cljs.core.keyword_identical_QMARK_(kf,cljs.core.cst$kw$keywordize))?(function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
}):kf));
return cljs.core.persistent_BANG_(taoensso.encore.reduce_kvs((function (m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),kvs));
}
}));

(taoensso.encore.as_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.as_map.cljs$lang$applyTo = (function (seq18171){
var G__18172 = cljs.core.first(seq18171);
var seq18171__$1 = cljs.core.next(seq18171);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18172,seq18171__$1);
}));


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys(cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv(cljs.core.complement(pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),n)));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18268 = arguments.length;
var i__5727__auto___18269 = (0);
while(true){
if((i__5727__auto___18269 < len__5726__auto___18268)){
args__5732__auto__.push((arguments[i__5727__auto___18269]));

var G__18270 = (i__5727__auto___18269 + (1));
i__5727__auto___18269 = G__18270;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref(taoensso.encore._swap_val_BANG_(cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null));
}
})));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
}));

(taoensso.encore.memoized.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.memoized.cljs$lang$applyTo = (function (seq18177){
var G__18178 = cljs.core.first(seq18177);
var seq18177__$1 = cljs.core.next(seq18177);
var G__18179 = cljs.core.first(seq18177__$1);
var seq18177__$2 = cljs.core.next(seq18177__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18178,G__18179,seq18177__$2);
}));


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__5090__auto__ = signed_idx;
var y__5091__auto__ = max_idx;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
} else {
var x__5087__auto__ = (0);
var y__5088__auto__ = (signed_idx + max_idx);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18271 = arguments.length;
var i__5727__auto___18272 = (0);
while(true){
if((i__5727__auto___18272 < len__5726__auto___18271)){
args__5732__auto__.push((arguments[i__5727__auto___18272]));

var G__18273 = (i__5727__auto___18272 + (1));
i__5727__auto___18272 = G__18273;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__18183){
var map__18184 = p__18183;
var map__18184__$1 = cljs.core.__destructure_map(map__18184);
var max_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18184__$1,cljs.core.cst$kw$max_DASH_len);
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18184__$1,cljs.core.cst$kw$end_DASH_idx);
var start_idx__$1 = start_idx;
var xlen = cljs.core.count(x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx(start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$((cljs.core.truth_(max_len)?(function (){var n1__2332__auto__ = (start_idx_STAR_ + max_len);
var n2__2333__auto__ = xlen;
if((n1__2332__auto__ > n2__2333__auto__)){
return n2__2333__auto__;
} else {
return n1__2332__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx(end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
}));

(taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq18180){
var G__18181 = cljs.core.first(seq18180);
var seq18180__$1 = cljs.core.next(seq18180);
var G__18182 = cljs.core.first(seq18180__$1);
var seq18180__$2 = cljs.core.next(seq18180__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18181,G__18182,seq18180__$2);
}));


/**
 * Prefer `get-substr-by-idx` or `get-substr-by-len`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18274 = arguments.length;
var i__5727__auto___18275 = (0);
while(true){
if((i__5727__auto___18275 < len__5726__auto___18274)){
args__5732__auto__.push((arguments[i__5727__auto___18275]));

var G__18276 = (i__5727__auto___18275 + (1));
i__5727__auto___18275 = G__18276;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__18188){
var vec__18189 = p__18188;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18189,(0),null);
var vec__18192 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(s,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18192,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18192,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
}));

(taoensso.encore.substr.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.substr.cljs$lang$applyTo = (function (seq18185){
var G__18186 = cljs.core.first(seq18185);
var seq18185__$1 = cljs.core.next(seq18185);
var G__18187 = cljs.core.first(seq18185__$1);
var seq18185__$2 = cljs.core.next(seq18185__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18186,G__18187,seq18185__$2);
}));



/**
 * Prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18277 = arguments.length;
var i__5727__auto___18278 = (0);
while(true){
if((i__5727__auto___18278 < len__5726__auto___18277)){
args__5732__auto__.push((arguments[i__5727__auto___18278]));

var G__18279 = (i__5727__auto___18278 + (1));
i__5727__auto___18278 = G__18279;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__18198){
var vec__18199 = p__18198;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18199,(0),null);
var vec__18202 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(v,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18202,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18202,(1),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start_idx_STAR_,end_idx_STAR_);
}));

(taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq18195){
var G__18196 = cljs.core.first(seq18195);
var seq18195__$1 = cljs.core.next(seq18195);
var G__18197 = cljs.core.first(seq18195__$1);
var seq18195__$2 = cljs.core.next(seq18195__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18196,G__18197,seq18195__$2);
}));


taoensso.encore.sentinel = ({});

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(taoensso.encore.sentinel_QMARK_(x)){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_(coll)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1));
} else {
return cljs.core.not(cljs.core.next(coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(taoensso.encore.singleton_QMARK_(coll)){
var vec__18207 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18207,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq(ks);
var vs__$1 = cljs.core.seq(vs);
while(true){
if(((ks__$1) && (vs__$1))){
var G__18280 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__18281 = cljs.core.next(ks__$1);
var G__18282 = cljs.core.next(vs__$1);
m = G__18280;
ks__$1 = G__18281;
vs__$1 = G__18282;
continue;
} else {
return cljs.core.persistent_BANG_(m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18283 = arguments.length;
var i__5727__auto___18284 = (0);
while(true){
if((i__5727__auto___18284 < len__5726__auto___18283)){
args__5732__auto__.push((arguments[i__5727__auto___18284]));

var G__18285 = (i__5727__auto___18284 + (1));
i__5727__auto___18284 = G__18285;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__18212 = _QMARK_op;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18212,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18212,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18212,(2),null);
var f = ((cljs.core.keyword_identical_QMARK_(type,cljs.core.cst$kw$reset))?(function (_){
return valf;
}):valf);
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
}));

(taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq18210){
var G__18211 = cljs.core.first(seq18210);
var seq18210__$1 = cljs.core.next(seq18210);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18211,seq18210__$1);
}));


var return_18286 = (function (m0,v0,m1,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Prefer `swap-in!` with `swapped` return value.
 */
taoensso.encore.swap_in_BANG__STAR_ = (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var G__18216 = arguments.length;
switch (G__18216) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_18286,atom_,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_18286,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_18286,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4);


/**
 * Prefer `swap-val!` with `swapped` return value.
 */
taoensso.encore.swap_val_BANG__STAR_ = (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var G__18218 = arguments.length;
switch (G__18218) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_18286,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_18286,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4);


taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

/**
 * Renamed to `name-filter`.
 */
taoensso.encore.compile_str_filter = taoensso.encore.name_filter;

/**
 * Prefer `identical-kw?` macro.
 */
taoensso.encore.kw_identical_QMARK_ = (function taoensso$encore$kw_identical_QMARK_(x,y){
return cljs.core.keyword_identical_QMARK_(x,y);
});

/**
 * Prefer `newline`.
 */
taoensso.encore.system_newline = "\n";

/**
 * Prefer `unexpected-arg!`
 */
taoensso.encore._unexpected_arg_BANG_ = (function taoensso$encore$_unexpected_arg_BANG_(var_args){
var G__18220 = arguments.length;
switch (G__18220) {
case 1:
return taoensso.encore._unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore._unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore._unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,null);
}));

(taoensso.encore._unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (arg,details){
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,details);
}));

(taoensso.encore._unexpected_arg_BANG_.cljs$lang$maxFixedArity = 2);


/**
 * Prefer `matching-error`.
 */
taoensso.encore._matching_error = taoensso.encore.matching_error;

/**
 * Prefer `rate-limiter*`.
 */
taoensso.encore.limiter_STAR_ = taoensso.encore.rate_limiter_STAR_;

/**
 * Prefer `rate-limiter`.
 */
taoensso.encore.limiter = taoensso.encore.rate_limiter;

/**
 * Prefer `ajax-call`.
 */
taoensso.encore.ajax_lite = taoensso.encore.ajax_call;
taoensso.encore.js__QMARK_win = taoensso.encore.js__QMARK_window;
