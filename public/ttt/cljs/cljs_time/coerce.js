// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

var cljs_time$coerce$ICoerce$to_date_time$dyn_16935 = (function (obj){
var x__5350__auto__ = (((obj == null))?null:obj);
var m__5351__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__5351__auto__.call(null,obj));
} else {
var m__5349__auto__ = (cljs_time.coerce.to_date_time["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__5349__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
return cljs_time$coerce$ICoerce$to_date_time$dyn_16935(obj);
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__16936 = millis;
if((G__16936 == null)){
return null;
} else {
return goog.date.UtcDateTime.fromTimestamp.call(null,G__16936);
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__5480__auto__ = (function cljs_time$coerce$from_string_$_iter__16937(s__16938){
return (new cljs.core.LazySeq(null,(function (){
var s__16938__$1 = s__16938;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16938__$1);
if(temp__5804__auto__){
var s__16938__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16938__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16938__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16940 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16939 = (0);
while(true){
if((i__16939 < size__5479__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5478__auto__,i__16939);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e16941){if((e16941 instanceof Error)){
var _ = e16941;
return null;
} else {
throw e16941;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__16940,d);

var G__16943 = (i__16939 + (1));
i__16939 = G__16943;
continue;
} else {
var G__16944 = (i__16939 + (1));
i__16939 = G__16944;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16940),cljs_time$coerce$from_string_$_iter__16937(cljs.core.chunk_rest(s__16938__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16940),null);
}
} else {
var f = cljs.core.first(s__16938__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e16942){if((e16942 instanceof Error)){
var _ = e16942;
return null;
} else {
throw e16942;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__16937(cljs.core.rest(s__16938__$2)));
} else {
var G__16945 = cljs.core.rest(s__16938__$2);
s__16938__$1 = G__16945;
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
return iter__5480__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__16946 = date;
var G__16946__$1 = (((G__16946 == null))?null:G__16946.getTime());
if((G__16946__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__16946__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__16947 = obj;
var G__16947__$1 = (((G__16947 == null))?null:cljs_time.coerce.to_date_time(G__16947));
if((G__16947__$1 == null)){
return null;
} else {
return G__16947__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__5000__auto__ = millis;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__5000__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__16948 = obj;
var G__16948__$1 = (((G__16948 == null))?null:cljs_time.coerce.to_date_time(G__16948));
var G__16948__$2 = (((G__16948__$1 == null))?null:G__16948__$1.getTime());
if((G__16948__$2 == null)){
return null;
} else {
return (new Date(G__16948__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__16949 = obj;
var G__16949__$1 = (((G__16949 == null))?null:cljs_time.coerce.to_date_time(G__16949));
if((G__16949__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(cljs.core.cst$kw$date_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__16949__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5802__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5802__auto__)){
var dt = temp__5802__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5802__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5802__auto__)){
var dt = temp__5802__auto__;
var G__16950 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__16950.setHours(dt.getHours());

G__16950.setMinutes(dt.getMinutes());

G__16950.setSeconds(dt.getSeconds());

G__16950.setMilliseconds(dt.getMilliseconds());

return G__16950;
} else {
return null;
}
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));

(Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
}));

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
}));

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
}));

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
}));

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long(long$);
}));

(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string(string);
}));
