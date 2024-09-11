// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('c3kit.apron.time');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.format');
goog.require('cljs_time.coerce');
goog.require('cljs_time.core');
/**
 * Our atomic unit
 */
c3kit.apron.time.milliseconds = (function c3kit$apron$time$milliseconds(n){
return n;
});
/**
 * Converts seconds to milliseconds
 */
c3kit.apron.time.seconds = (function c3kit$apron$time$seconds(n){
var G__16953 = (n * (1000));
return Math.round(G__16953);
});
/**
 * Converts minutes to milliseconds
 */
c3kit.apron.time.minutes = (function c3kit$apron$time$minutes(n){
var G__16954 = (n * (60000));
return Math.round(G__16954);
});
/**
 * Converts hours to milliseconds
 */
c3kit.apron.time.hours = (function c3kit$apron$time$hours(n){
var G__16955 = (n * (3600000));
return Math.round(G__16955);
});
/**
 * Converts days to milliseconds
 */
c3kit.apron.time.days = (function c3kit$apron$time$days(n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$days,((cljs.core.float_QMARK_(n))?Math.round(n):n)], null);
});
/**
 * Converts a number into a format that the Calendar object understands to be an amount of months
 */
c3kit.apron.time.months = (function c3kit$apron$time$months(n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$months,((cljs.core.float_QMARK_(n))?Math.round(n):n)], null);
});
/**
 * Converts a number into a format that the Calendar object understands to be an amount of years
 */
c3kit.apron.time.years = (function c3kit$apron$time$years(n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$years,((cljs.core.float_QMARK_(n))?Math.round(n):n)], null);
});
/**
 * Converts milliseconds to seconds
 */
c3kit.apron.time.millis__GT_seconds = (function c3kit$apron$time$millis__GT_seconds(millis){
return cljs.core.long$((millis / (1000)));
});
/**
 * Returns a java.util.Date or js/Date object that represents the current date and time in UTC
 */
c3kit.apron.time.now = (function c3kit$apron$time$now(){
return (new Date());
});
/**
 * The offset (milliseconds) between the local timezone and UTC. (AZ -> -7hrs)
 */
c3kit.apron.time.utc_offset = (function c3kit$apron$time$utc_offset(var_args){
var G__16957 = arguments.length;
switch (G__16957) {
case 0:
return c3kit.apron.time.utc_offset.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.apron.time.utc_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.time.utc_offset.cljs$core$IFn$_invoke$arity$0 = (function (){
return c3kit.apron.time.utc_offset.cljs$core$IFn$_invoke$arity$1(c3kit.apron.time.now());
}));

(c3kit.apron.time.utc_offset.cljs$core$IFn$_invoke$arity$1 = (function (date){
return ((-1) * c3kit.apron.time.minutes(date.getTimezoneOffset()));
}));

(c3kit.apron.time.utc_offset.cljs$lang$maxFixedArity = 1);

/**
 * Create Date relative to epoch, adjusted for timezone offset
 *   (from-epoch 0)
 */
c3kit.apron.time.from_epoch = (function c3kit$apron$time$from_epoch(millis_since_epoch){
return (new Date(millis_since_epoch));
});
c3kit.apron.time.epoch = c3kit.apron.time.from_epoch((0));
c3kit.apron.time.instant_QMARK_ = (function c3kit$apron$time$instant_QMARK_(thing){
return (thing instanceof Date);
});
c3kit.apron.time.millis_since_epoch = (function c3kit$apron$time$millis_since_epoch(date){
return date.getTime();
});
c3kit.apron.time.seconds_since_epoch = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(c3kit.apron.time.millis__GT_seconds,c3kit.apron.time.millis_since_epoch);
/**
 * Milliseconds that separate the two times.  Negative if b is after a.
 */
c3kit.apron.time.millis_between = (function c3kit$apron$time$millis_between(a,b){
return (c3kit.apron.time.millis_since_epoch(a) - c3kit.apron.time.millis_since_epoch(b));
});
/**
 * Returns a new date representing time in UTC timezone, assuming given date is in local timezone.
 */
c3kit.apron.time.__GT_utc = (function c3kit$apron$time$__GT_utc(date){
return c3kit.apron.time.from_epoch((c3kit.apron.time.millis_since_epoch(date) - c3kit.apron.time.utc_offset.cljs$core$IFn$_invoke$arity$1(date)));
});
/**
 * Returns a new date representing time in the timezone, assuming given date is in UTC timezone.
 */
c3kit.apron.time.__GT_local = (function c3kit$apron$time$__GT_local(date){
return c3kit.apron.time.from_epoch((c3kit.apron.time.millis_since_epoch(date) + c3kit.apron.time.utc_offset.cljs$core$IFn$_invoke$arity$1(date)));
});
/**
 * Create a Date assuming parameters are local timezone.
 *   e.g. in AZ: (local 2020 1 1 0 0 0) -> 2020-01-01T07:00:00.000-00:00
 */
c3kit.apron.time.local = (function c3kit$apron$time$local(var_args){
var G__16960 = arguments.length;
switch (G__16960) {
case 3:
return c3kit.apron.time.local.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return c3kit.apron.time.local.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return c3kit.apron.time.local.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.time.local.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return c3kit.apron.time.local.cljs$core$IFn$_invoke$arity$6(year,month,day,(0),(0),(0));
}));

(c3kit.apron.time.local.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return c3kit.apron.time.local.cljs$core$IFn$_invoke$arity$6(year,month,day,hour,minute,(0));
}));

(c3kit.apron.time.local.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return (new Date(year,(month - (1)),day,hour,minute,second));
}));

(c3kit.apron.time.local.cljs$lang$maxFixedArity = 6);

/**
 * Create a Date assuming parameters are UTC timezone.
 *   e.g. (utc 2020 1 1 0 0 0) -> 2020-01-01T00:00:00.000-00:00
 */
c3kit.apron.time.utc = (function c3kit$apron$time$utc(var_args){
var G__16963 = arguments.length;
switch (G__16963) {
case 3:
return c3kit.apron.time.utc.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return c3kit.apron.time.utc.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return c3kit.apron.time.utc.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.time.utc.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return c3kit.apron.time.utc.cljs$core$IFn$_invoke$arity$6(year,month,day,(0),(0),(0));
}));

(c3kit.apron.time.utc.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return c3kit.apron.time.utc.cljs$core$IFn$_invoke$arity$6(year,month,day,hour,minute,(0));
}));

(c3kit.apron.time.utc.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return c3kit.apron.time.__GT_local(c3kit.apron.time.local.cljs$core$IFn$_invoke$arity$6(year,month,day,hour,minute,second));
}));

(c3kit.apron.time.utc.cljs$lang$maxFixedArity = 6);

/**
 * Expects two Dates as arguments. The function returns true if the
 *   first date comes before the second date and returns false otherwise.
 */
c3kit.apron.time.before_QMARK_ = (function c3kit$apron$time$before_QMARK_(first,second){
return (first.getTime() < second.getTime());
});
/**
 * Expects two Date as arguments. The function returns true if the
 *   first date comes after the second date and returns false otherwise.
 */
c3kit.apron.time.after_QMARK_ = (function c3kit$apron$time$after_QMARK_(first,second){
return (first.getTime() > second.getTime());
});
/**
 * Expects the three Dates as arguments. The first date is the date
 *   being evaluated; the second date is the start date; the last date is the
 *   end date. The function returns true if the first date is between the start
 *   and end dates.
 */
c3kit.apron.time.between_QMARK_ = (function c3kit$apron$time$between_QMARK_(date,start,end){
return ((c3kit.apron.time.after_QMARK_(date,start)) && (c3kit.apron.time.before_QMARK_(date,end)));
});
c3kit.apron.time.leap_year_QMARK_ = (function c3kit$apron$time$leap_year_QMARK_(year){
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(year,(4)))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(year,(100)))))))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(year,(400)))));
});
c3kit.apron.time.days_in_month = (function c3kit$apron$time$days_in_month(year,month){
var G__16965 = month;
switch (G__16965) {
case (0):
return (31);

break;
case (1):
if(c3kit.apron.time.leap_year_QMARK_(year)){
return (29);
} else {
return (28);
}

break;
case (2):
return (31);

break;
case (3):
return (30);

break;
case (4):
return (31);

break;
case (5):
return (30);

break;
case (6):
return (31);

break;
case (7):
return (31);

break;
case (8):
return (30);

break;
case (9):
return (31);

break;
case (10):
return (30);

break;
case (11):
return (31);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16965)].join('')));

}
});
/**
 * Returns the Date's year (local timezone).
 */
c3kit.apron.time.year = (function c3kit$apron$time$year(datetime){
return datetime.getFullYear();
});
/**
 * Returns the Date's month (local timezone).
 */
c3kit.apron.time.month = (function c3kit$apron$time$month(datetime){
return (datetime.getMonth() + (1));
});
/**
 * Returns the Date's day (local timezone).
 */
c3kit.apron.time.day = (function c3kit$apron$time$day(datetime){
return datetime.getDate();
});
/**
 * Returns the Date's hour (24-hour clock) (local timezone).
 */
c3kit.apron.time.hour = (function c3kit$apron$time$hour(datetime){
return datetime.getHours();
});
/**
 * Returns the Date's minute.
 */
c3kit.apron.time.minute = (function c3kit$apron$time$minute(datetime){
return datetime.getMinutes();
});
/**
 * Returns the Date's second.
 */
c3kit.apron.time.sec = (function c3kit$apron$time$sec(datetime){
return datetime.getSeconds();
});
if((typeof c3kit !== 'undefined') && (typeof c3kit.apron !== 'undefined') && (typeof c3kit.apron.time !== 'undefined') && (typeof c3kit.apron.time._js_mod_time_by_units !== 'undefined')){
} else {
c3kit.apron.time._js_mod_time_by_units = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__16967 = cljs.core.get_global_hierarchy;
return (fexpr__16967.cljs$core$IFn$_invoke$arity$0 ? fexpr__16967.cljs$core$IFn$_invoke$arity$0() : fexpr__16967.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("c3kit.apron.time","-js-mod-time-by-units"),(function (time,unit,n,direction){
return unit;
}),cljs.core.cst$kw$default,hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
c3kit.apron.time._js_mod_time_by_units.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$days,(function (time,unit,n,direction){
return time.setDate((function (){var G__16968 = time.getDate();
var G__16969 = n;
return (direction.cljs$core$IFn$_invoke$arity$2 ? direction.cljs$core$IFn$_invoke$arity$2(G__16968,G__16969) : direction.call(null,G__16968,G__16969));
})());
}));
c3kit.apron.time._js_mod_time_by_units.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$months,(function (time,unit,n,direction){
var date = time.getUTCDate();
time.setUTCDate((1));

time.setUTCMonth((function (){var G__16970 = time.getUTCMonth();
var G__16971 = n;
return (direction.cljs$core$IFn$_invoke$arity$2 ? direction.cljs$core$IFn$_invoke$arity$2(G__16970,G__16971) : direction.call(null,G__16970,G__16971));
})());

var month = time.getUTCMonth();
var max_date = c3kit.apron.time.days_in_month(time.getUTCFullYear(),month);
return time.setUTCDate((function (){var x__5090__auto__ = date;
var y__5091__auto__ = max_date;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());
}));
c3kit.apron.time._js_mod_time_by_units.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$years,(function (time,unit,n,direction){
return time.setFullYear((function (){var G__16972 = time.getFullYear();
var G__16973 = n;
return (direction.cljs$core$IFn$_invoke$arity$2 ? direction.cljs$core$IFn$_invoke$arity$2(G__16972,G__16973) : direction.call(null,G__16972,G__16973));
})());
}));
/**
 * Modifies the value of a Date object. Expects the first argument to be
 *   a Date, the second argument to be a vector representing the amount of time to be changed,
 *   and the last argument to be either a + or - (indicating which direction to modify time).
 */
c3kit.apron.time.mod_time_by_units = (function c3kit$apron$time$mod_time_by_units(time,p__16974,direction){
var vec__16975 = p__16974;
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16975,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16975,(1),null);
var new_date = (new Date(time.getTime()));
(c3kit.apron.time._js_mod_time_by_units.cljs$core$IFn$_invoke$arity$4 ? c3kit.apron.time._js_mod_time_by_units.cljs$core$IFn$_invoke$arity$4(new_date,unit,n,direction) : c3kit.apron.time._js_mod_time_by_units.call(null,new_date,unit,n,direction));

return new_date;
});
/**
 * Modifies the value of a Date. Expects the first argument to be
 *   a Date object, the second argument to be an amount of milliseconds, and
 *   the last argument to be either a + or - (indicating which direction to
 *   modify time).
 */
c3kit.apron.time.mod_time = (function c3kit$apron$time$mod_time(time,bit,direction){
if(typeof bit === 'number'){
return (new Date((function (){var G__16978 = time.getTime();
var G__16979 = cljs.core.long$(bit);
return (direction.cljs$core$IFn$_invoke$arity$2 ? direction.cljs$core$IFn$_invoke$arity$2(G__16978,G__16979) : direction.call(null,G__16978,G__16979));
})()));
} else {
if(cljs.core.vector_QMARK_(bit)){
return c3kit.apron.time.mod_time_by_units(time,bit,direction);
} else {
return null;
}
}
});
/**
 * Rewinds the time on a Date object. Expects a Date object as the first
 *   argument and a number of milliseconds to rewind time by.
 */
c3kit.apron.time.before = (function c3kit$apron$time$before(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16984 = arguments.length;
var i__5727__auto___16985 = (0);
while(true){
if((i__5727__auto___16985 < len__5726__auto___16984)){
args__5732__auto__.push((arguments[i__5727__auto___16985]));

var G__16986 = (i__5727__auto___16985 + (1));
i__5727__auto___16985 = G__16986;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return c3kit.apron.time.before.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(c3kit.apron.time.before.cljs$core$IFn$_invoke$arity$variadic = (function (time,bits){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16980_SHARP_,p2__16981_SHARP_){
return c3kit.apron.time.mod_time(p1__16980_SHARP_,p2__16981_SHARP_,cljs.core._);
}),time,bits);
}));

(c3kit.apron.time.before.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.time.before.cljs$lang$applyTo = (function (seq16982){
var G__16983 = cljs.core.first(seq16982);
var seq16982__$1 = cljs.core.next(seq16982);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16983,seq16982__$1);
}));

/**
 * Fast-forwards the time on a Date object. Expects a Date object as the first
 *   argument and a number of milliseconds to fast-forward time by.
 */
c3kit.apron.time.after = (function c3kit$apron$time$after(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16991 = arguments.length;
var i__5727__auto___16992 = (0);
while(true){
if((i__5727__auto___16992 < len__5726__auto___16991)){
args__5732__auto__.push((arguments[i__5727__auto___16992]));

var G__16993 = (i__5727__auto___16992 + (1));
i__5727__auto___16992 = G__16993;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return c3kit.apron.time.after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(c3kit.apron.time.after.cljs$core$IFn$_invoke$arity$variadic = (function (time,bits){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16987_SHARP_,p2__16988_SHARP_){
return c3kit.apron.time.mod_time(p1__16987_SHARP_,p2__16988_SHARP_,cljs.core._PLUS_);
}),time,bits);
}));

(c3kit.apron.time.after.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.time.after.cljs$lang$applyTo = (function (seq16989){
var G__16990 = cljs.core.first(seq16989);
var seq16989__$1 = cljs.core.next(seq16989);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16990,seq16989__$1);
}));

c3kit.apron.time.earlier_QMARK_ = c3kit.apron.time.before_QMARK_;
c3kit.apron.time.later_QMARK_ = c3kit.apron.time.after_QMARK_;
c3kit.apron.time.earlier = c3kit.apron.time.before;
c3kit.apron.time.later = c3kit.apron.time.after;
/**
 * Returns a Date some time (n) before now.
 */
c3kit.apron.time.ago = (function c3kit$apron$time$ago(n){
return c3kit.apron.time.before.cljs$core$IFn$_invoke$arity$variadic(c3kit.apron.time.now(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0));
});
/**
 * Returns a Date some time (n) after now.
 */
c3kit.apron.time.from_now = (function c3kit$apron$time$from_now(n){
return c3kit.apron.time.after.cljs$core$IFn$_invoke$arity$variadic(c3kit.apron.time.now(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0));
});
c3kit.apron.time.formatter = (function c3kit$apron$time$formatter(format){
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(format);
});
c3kit.apron.time.date_formats = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ymd,cljs.core.cst$kw$short,cljs.core.cst$kw$long_DASH_no_DASH_tz,cljs.core.cst$kw$rfc822,cljs.core.cst$kw$iso8601,cljs.core.cst$kw$friendly,cljs.core.cst$kw$rfc1123,cljs.core.cst$kw$ref3339,cljs.core.cst$kw$web_DASH_local,cljs.core.cst$kw$webform,cljs.core.cst$kw$http,cljs.core.cst$kw$dense],[c3kit.apron.time.formatter("yyyyMMdd"),c3kit.apron.time.formatter("MMM d, yyyy"),c3kit.apron.time.formatter("EEE, dd MMM yyyy HH:mm:ss"),c3kit.apron.time.formatter("EEE, dd MMM yyyy HH:mm:ss Z"),c3kit.apron.time.formatter("yyyy-MM-dd HH:mm:ssZ"),c3kit.apron.time.formatter("EEE - MMM d, yyyy"),c3kit.apron.time.formatter("EEE, dd MMM yyyy HH:mm:ss ZZZ"),c3kit.apron.time.formatter("yyyy-MM-dd'T'HH:mm:ssZZ"),c3kit.apron.time.formatter("yyyy-MM-dd'T'HH:mm"),c3kit.apron.time.formatter("yyyy-MM-dd"),c3kit.apron.time.formatter("EEE, dd MMM yyyy HH:mm:ss ZZZ"),c3kit.apron.time.formatter("yyyyMMddHHmmss")]);
c3kit.apron.time.__GT_formatter = (function c3kit$apron$time$__GT_formatter(format){
if((format instanceof cljs.core.Keyword)){
return format.cljs$core$IFn$_invoke$arity$1(c3kit.apron.time.date_formats);
} else {
if(typeof format === 'string'){
return c3kit.apron.time.formatter(format);
} else {
if((format instanceof cljs_time.format.Formatter)){
return format;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unhandled date format: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(format)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$format,format], null));

}
}
}
});
/**
 * Parses text into a Java Date object. Expects a keyword, string, or SimpleDateFormat
 *   object as the first object and a string representing the date as the second argument.
 *   The date is assumed to be in UTC.
 */
c3kit.apron.time.parse = (function c3kit$apron$time$parse(format,value){
var formatter = c3kit.apron.time.__GT_formatter(format);
var goog_dt = cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(formatter,value);
return cljs_time.coerce.to_date(goog_dt);
});
/**
 * Returns a string that is populated with a formatted date and time. Expects the
 *   first argument to be the requested format and the second argument to be the date
 *   to be formatted.
 *   The following are options for the first argument:
 *   1. Keyword - :http, :rfc1123, :iso8601, :dense
 *   2. String - must be a valid argument to the SimpleDateFormat Java Object
 *   3. SimpleDateFormat - Java Object
 */
c3kit.apron.time.unparse = (function c3kit$apron$time$unparse(format,value){
if(cljs.core.truth_(value)){
var formatter = c3kit.apron.time.__GT_formatter(format);
var goog_dt = cljs_time.coerce.from_date(value);
return cljs_time.format.unparse(formatter,goog_dt);
} else {
return null;
}
});
c3kit.apron.time.bounds = (function c3kit$apron$time$bounds(start,end){
return (new cljs.core.List(null,start,(new cljs.core.List(null,end,null,(1),null)),(2),null));
});
c3kit.apron.time.bounds_QMARK_ = (function c3kit$apron$time$bounds_QMARK_(thing){
return ((cljs.core.seq_QMARK_(thing)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(thing))) && (((c3kit.apron.time.instant_QMARK_(cljs.core.first(thing))) && (c3kit.apron.time.instant_QMARK_(cljs.core.first(cljs.core.rest(thing)))))))));
});
c3kit.apron.time.start_of = (function c3kit$apron$time$start_of(bounds){
return cljs.core.first(bounds);
});
c3kit.apron.time.end_of = (function c3kit$apron$time$end_of(bounds){
return cljs.core.first(cljs.core.rest(bounds));
});
c3kit.apron.time.during_QMARK_ = (function c3kit$apron$time$during_QMARK_(bounds,instant){
return ((c3kit.apron.time.after_QMARK_(instant,c3kit.apron.time.start_of(bounds))) && (c3kit.apron.time.before_QMARK_(instant,c3kit.apron.time.end_of(bounds))));
});
