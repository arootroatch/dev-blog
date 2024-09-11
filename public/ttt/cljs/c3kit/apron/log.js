// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('c3kit.apron.log');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.apron.corec');
goog.require('clojure.string');
goog.require('taoensso.timbre');
c3kit.apron.log.captured_logs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * Arity overrides for timbre/-log!
 */
c3kit.apron.log.capture_log_BANG_ = (function c3kit$apron$log$capture_log_BANG_(var_args){
var G__18460 = arguments.length;
switch (G__18460) {
case 9:
return c3kit.apron.log.capture_log_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return c3kit.apron.log.capture_log_BANG_.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return c3kit.apron.log.capture_log_BANG_.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case 12:
return c3kit.apron.log.capture_log_BANG_.cljs$core$IFn$_invoke$arity$12((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.log.capture_log_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(c3kit.apron.log.captured_logs,cljs.core.conj,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data], null));

return null;
}));

(c3kit.apron.log.capture_log_BANG_.cljs$core$IFn$_invoke$arity$10 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(c3kit.apron.log.captured_logs,cljs.core.conj,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id], null));

return null;
}));

(c3kit.apron.log.capture_log_BANG_.cljs$core$IFn$_invoke$arity$11 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(c3kit.apron.log.captured_logs,cljs.core.conj,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_], null));

return null;
}));

(c3kit.apron.log.capture_log_BANG_.cljs$core$IFn$_invoke$arity$12 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,_QMARK_column,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(c3kit.apron.log.captured_logs,cljs.core.conj,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,_QMARK_column,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_], null));

return null;
}));

(c3kit.apron.log.capture_log_BANG_.cljs$lang$maxFixedArity = 12);

c3kit.apron.log.test_levels = (function c3kit$apron$log$test_levels(msg){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$report,"c3kit.apron.log",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(27),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$fatal,"c3kit.apron.log",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(28),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"c3kit.apron.log",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(29),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.apron.log",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(30),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"c3kit.apron.log",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(31),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.apron.log",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(32),null);

return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"c3kit.apron.log",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(33),null);
});
c3kit.apron.log.level = (function c3kit$apron$log$level(){
return cljs.core.cst$kw$min_DASH_level.cljs$core$IFn$_invoke$arity$1(taoensso.timbre._STAR_config_STAR_);
});
c3kit.apron.log.set_level_BANG_ = (function c3kit$apron$log$set_level_BANG_(new_level){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c3kit.apron.log.level(),new_level)){
return null;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$report,"c3kit.apron.log",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Setting log level: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_level)].join('')], null);
}),null)),null,(34),null);

return taoensso.timbre.set_min_level_BANG_(new_level);
}
});
c3kit.apron.log.off_BANG_ = (function c3kit$apron$log$off_BANG_(){
return c3kit.apron.log.set_level_BANG_(cljs.core.cst$kw$report);
});
c3kit.apron.log.fatal_BANG_ = (function c3kit$apron$log$fatal_BANG_(){
return c3kit.apron.log.set_level_BANG_(cljs.core.cst$kw$fatal);
});
c3kit.apron.log.error_BANG_ = (function c3kit$apron$log$error_BANG_(){
return c3kit.apron.log.set_level_BANG_(cljs.core.cst$kw$error);
});
c3kit.apron.log.warn_BANG_ = (function c3kit$apron$log$warn_BANG_(){
return c3kit.apron.log.set_level_BANG_(cljs.core.cst$kw$warn);
});
c3kit.apron.log.info_BANG_ = (function c3kit$apron$log$info_BANG_(){
return c3kit.apron.log.set_level_BANG_(cljs.core.cst$kw$info);
});
c3kit.apron.log.debug_BANG_ = (function c3kit$apron$log$debug_BANG_(){
return c3kit.apron.log.set_level_BANG_(cljs.core.cst$kw$debug);
});
c3kit.apron.log.all_BANG_ = (function c3kit$apron$log$all_BANG_(){
return c3kit.apron.log.set_level_BANG_(cljs.core.cst$kw$trace);
});
c3kit.apron.log.parse_captured_logs = (function c3kit$apron$log$parse_captured_logs(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18463_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$level,cljs.core.cst$kw$message],[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__18463_SHARP_,(1)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.deref(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__18463_SHARP_,(8))))]);
}),cljs.core.deref(c3kit.apron.log.captured_logs));
});
c3kit.apron.log.captured_logs_str = (function c3kit$apron$log$captured_logs_str(){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18464_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.deref(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__18464_SHARP_,(8))));
}),cljs.core.deref(c3kit.apron.log.captured_logs)));
});
c3kit.apron.log.table_spec = (function c3kit$apron$log$table_spec(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18467 = arguments.length;
var i__5727__auto___18468 = (0);
while(true){
if((i__5727__auto___18468 < len__5726__auto___18467)){
args__5732__auto__.push((arguments[i__5727__auto___18468]));

var G__18469 = (i__5727__auto___18468 + (1));
i__5727__auto___18468 = G__18469;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return c3kit.apron.log.table_spec.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(c3kit.apron.log.table_spec.cljs$core$IFn$_invoke$arity$variadic = (function (cols){
var width = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cols)) + cljs.core.count(cols));
var format_str = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18465_SHARP_){
return ["%-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__18465_SHARP_)),"s"].join('');
}),cols));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cols,cols,cljs.core.cst$kw$format,format_str,cljs.core.cst$kw$width,width,cljs.core.cst$kw$title_DASH_fn,(function (title){
var pad = ((width - title.length()) / (2));
return [clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.take.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(" "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"\n"].join('');
}),cljs.core.cst$kw$header,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.apron.corec.formats,format_str),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cols))),"\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.take.cljs$core$IFn$_invoke$arity$2(width,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("-"))),"\n"].join('')], null);
}));

(c3kit.apron.log.table_spec.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.apron.log.table_spec.cljs$lang$applyTo = (function (seq18466){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18466));
}));

/**
 * For ANSI color codes: https://en.wikipedia.org/wiki/ANSI_escape_code
 */
c3kit.apron.log.color_pr = (function c3kit$apron$log$color_pr(message,color){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\u001B[0m"].join('')], 0));
});
