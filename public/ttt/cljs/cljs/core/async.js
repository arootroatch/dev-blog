// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13547 = arguments.length;
switch (G__13547) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13548 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13548 = (function (f,blockable,meta13549){
this.f = f;
this.blockable = blockable;
this.meta13549 = meta13549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13550,meta13549__$1){
var self__ = this;
var _13550__$1 = this;
return (new cljs.core.async.t_cljs$core$async13548(self__.f,self__.blockable,meta13549__$1));
}));

(cljs.core.async.t_cljs$core$async13548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13550){
var self__ = this;
var _13550__$1 = this;
return self__.meta13549;
}));

(cljs.core.async.t_cljs$core$async13548.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13548.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13548.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13548.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta13549], null);
}));

(cljs.core.async.t_cljs$core$async13548.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13548");

(cljs.core.async.t_cljs$core$async13548.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13548");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13548.
 */
cljs.core.async.__GT_t_cljs$core$async13548 = (function cljs$core$async$__GT_t_cljs$core$async13548(f__$1,blockable__$1,meta13549){
return (new cljs.core.async.t_cljs$core$async13548(f__$1,blockable__$1,meta13549));
});

}

return (new cljs.core.async.t_cljs$core$async13548(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13554 = arguments.length;
switch (G__13554) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13557 = arguments.length;
switch (G__13557) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13560 = arguments.length;
switch (G__13560) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_13562 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13562) : fn1.call(null,val_13562));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13562) : fn1.call(null,val_13562));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13564 = arguments.length;
switch (G__13564) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___13566 = n;
var x_13567 = (0);
while(true){
if((x_13567 < n__5593__auto___13566)){
(a[x_13567] = x_13567);

var G__13568 = (x_13567 + (1));
x_13567 = G__13568;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13569 = (function (flag,meta13570){
this.flag = flag;
this.meta13570 = meta13570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13571,meta13570__$1){
var self__ = this;
var _13571__$1 = this;
return (new cljs.core.async.t_cljs$core$async13569(self__.flag,meta13570__$1));
}));

(cljs.core.async.t_cljs$core$async13569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13571){
var self__ = this;
var _13571__$1 = this;
return self__.meta13570;
}));

(cljs.core.async.t_cljs$core$async13569.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13569.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13569.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13569.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta13570], null);
}));

(cljs.core.async.t_cljs$core$async13569.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13569");

(cljs.core.async.t_cljs$core$async13569.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13569");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13569.
 */
cljs.core.async.__GT_t_cljs$core$async13569 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13569(flag__$1,meta13570){
return (new cljs.core.async.t_cljs$core$async13569(flag__$1,meta13570));
});

}

return (new cljs.core.async.t_cljs$core$async13569(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13572 = (function (flag,cb,meta13573){
this.flag = flag;
this.cb = cb;
this.meta13573 = meta13573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13574,meta13573__$1){
var self__ = this;
var _13574__$1 = this;
return (new cljs.core.async.t_cljs$core$async13572(self__.flag,self__.cb,meta13573__$1));
}));

(cljs.core.async.t_cljs$core$async13572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13574){
var self__ = this;
var _13574__$1 = this;
return self__.meta13573;
}));

(cljs.core.async.t_cljs$core$async13572.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13572.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta13573], null);
}));

(cljs.core.async.t_cljs$core$async13572.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13572");

(cljs.core.async.t_cljs$core$async13572.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13572");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13572.
 */
cljs.core.async.__GT_t_cljs$core$async13572 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13572(flag__$1,cb__$1,meta13573){
return (new cljs.core.async.t_cljs$core$async13572(flag__$1,cb__$1,meta13573));
});

}

return (new cljs.core.async.t_cljs$core$async13572(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__13575_SHARP_){
var G__13577 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13575_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13577) : fret.call(null,G__13577));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__13576_SHARP_){
var G__13578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13576_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13578) : fret.call(null,G__13578));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13579 = (i + (1));
i = G__13579;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13584 = arguments.length;
var i__5727__auto___13585 = (0);
while(true){
if((i__5727__auto___13585 < len__5726__auto___13584)){
args__5732__auto__.push((arguments[i__5727__auto___13585]));

var G__13586 = (i__5727__auto___13585 + (1));
i__5727__auto___13585 = G__13586;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13582){
var map__13583 = p__13582;
var map__13583__$1 = cljs.core.__destructure_map(map__13583);
var opts = map__13583__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13580){
var G__13581 = cljs.core.first(seq13580);
var seq13580__$1 = cljs.core.next(seq13580);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13581,seq13580__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13588 = arguments.length;
switch (G__13588) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13487__auto___13635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_13612){
var state_val_13613 = (state_13612[(1)]);
if((state_val_13613 === (7))){
var inst_13608 = (state_13612[(2)]);
var state_13612__$1 = state_13612;
var statearr_13614_13636 = state_13612__$1;
(statearr_13614_13636[(2)] = inst_13608);

(statearr_13614_13636[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13613 === (1))){
var state_13612__$1 = state_13612;
var statearr_13615_13637 = state_13612__$1;
(statearr_13615_13637[(2)] = null);

(statearr_13615_13637[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13613 === (4))){
var inst_13591 = (state_13612[(7)]);
var inst_13591__$1 = (state_13612[(2)]);
var inst_13592 = (inst_13591__$1 == null);
var state_13612__$1 = (function (){var statearr_13616 = state_13612;
(statearr_13616[(7)] = inst_13591__$1);

return statearr_13616;
})();
if(cljs.core.truth_(inst_13592)){
var statearr_13617_13638 = state_13612__$1;
(statearr_13617_13638[(1)] = (5));

} else {
var statearr_13618_13639 = state_13612__$1;
(statearr_13618_13639[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13613 === (13))){
var state_13612__$1 = state_13612;
var statearr_13619_13640 = state_13612__$1;
(statearr_13619_13640[(2)] = null);

(statearr_13619_13640[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13613 === (6))){
var inst_13591 = (state_13612[(7)]);
var state_13612__$1 = state_13612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13612__$1,(11),to,inst_13591);
} else {
if((state_val_13613 === (3))){
var inst_13610 = (state_13612[(2)]);
var state_13612__$1 = state_13612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13612__$1,inst_13610);
} else {
if((state_val_13613 === (12))){
var state_13612__$1 = state_13612;
var statearr_13620_13641 = state_13612__$1;
(statearr_13620_13641[(2)] = null);

(statearr_13620_13641[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13613 === (2))){
var state_13612__$1 = state_13612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13612__$1,(4),from);
} else {
if((state_val_13613 === (11))){
var inst_13601 = (state_13612[(2)]);
var state_13612__$1 = state_13612;
if(cljs.core.truth_(inst_13601)){
var statearr_13621_13642 = state_13612__$1;
(statearr_13621_13642[(1)] = (12));

} else {
var statearr_13622_13643 = state_13612__$1;
(statearr_13622_13643[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13613 === (9))){
var state_13612__$1 = state_13612;
var statearr_13623_13644 = state_13612__$1;
(statearr_13623_13644[(2)] = null);

(statearr_13623_13644[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13613 === (5))){
var state_13612__$1 = state_13612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13624_13645 = state_13612__$1;
(statearr_13624_13645[(1)] = (8));

} else {
var statearr_13625_13646 = state_13612__$1;
(statearr_13625_13646[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13613 === (14))){
var inst_13606 = (state_13612[(2)]);
var state_13612__$1 = state_13612;
var statearr_13626_13647 = state_13612__$1;
(statearr_13626_13647[(2)] = inst_13606);

(statearr_13626_13647[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13613 === (10))){
var inst_13598 = (state_13612[(2)]);
var state_13612__$1 = state_13612;
var statearr_13627_13648 = state_13612__$1;
(statearr_13627_13648[(2)] = inst_13598);

(statearr_13627_13648[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13613 === (8))){
var inst_13595 = cljs.core.async.close_BANG_(to);
var state_13612__$1 = state_13612;
var statearr_13628_13649 = state_13612__$1;
(statearr_13628_13649[(2)] = inst_13595);

(statearr_13628_13649[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13413__auto__ = null;
var cljs$core$async$state_machine__13413__auto____0 = (function (){
var statearr_13629 = [null,null,null,null,null,null,null,null];
(statearr_13629[(0)] = cljs$core$async$state_machine__13413__auto__);

(statearr_13629[(1)] = (1));

return statearr_13629;
});
var cljs$core$async$state_machine__13413__auto____1 = (function (state_13612){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_13612);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e13630){var ex__13416__auto__ = e13630;
var statearr_13631_13650 = state_13612;
(statearr_13631_13650[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_13612[(4)]))){
var statearr_13632_13651 = state_13612;
(statearr_13632_13651[(1)] = cljs.core.first((state_13612[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__13652 = state_13612;
state_13612 = G__13652;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$state_machine__13413__auto__ = function(state_13612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13413__auto____1.call(this,state_13612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13413__auto____0;
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13413__auto____1;
return cljs$core$async$state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_13633 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_13633[(6)] = c__13487__auto___13635);

return statearr_13633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__13653){
var vec__13654 = p__13653;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13654,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13654,(1),null);
var job = vec__13654;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13487__auto___13830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_13661){
var state_val_13662 = (state_13661[(1)]);
if((state_val_13662 === (1))){
var state_13661__$1 = state_13661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13661__$1,(2),res,v);
} else {
if((state_val_13662 === (2))){
var inst_13658 = (state_13661[(2)]);
var inst_13659 = cljs.core.async.close_BANG_(res);
var state_13661__$1 = (function (){var statearr_13663 = state_13661;
(statearr_13663[(7)] = inst_13658);

return statearr_13663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13661__$1,inst_13659);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____0 = (function (){
var statearr_13664 = [null,null,null,null,null,null,null,null];
(statearr_13664[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__);

(statearr_13664[(1)] = (1));

return statearr_13664;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____1 = (function (state_13661){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_13661);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e13665){var ex__13416__auto__ = e13665;
var statearr_13666_13831 = state_13661;
(statearr_13666_13831[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_13661[(4)]))){
var statearr_13667_13832 = state_13661;
(statearr_13667_13832[(1)] = cljs.core.first((state_13661[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__13833 = state_13661;
state_13661 = G__13833;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__ = function(state_13661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____1.call(this,state_13661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_13668 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_13668[(6)] = c__13487__auto___13830);

return statearr_13668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__13669){
var vec__13670 = p__13669;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13670,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13670,(1),null);
var job = vec__13670;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___13834 = n;
var __13835 = (0);
while(true){
if((__13835 < n__5593__auto___13834)){
var G__13673_13836 = type;
var G__13673_13837__$1 = (((G__13673_13836 instanceof cljs.core.Keyword))?G__13673_13836.fqn:null);
switch (G__13673_13837__$1) {
case "compute":
var c__13487__auto___13839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13835,c__13487__auto___13839,G__13673_13836,G__13673_13837__$1,n__5593__auto___13834,jobs,results,process__$1,async){
return (function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = ((function (__13835,c__13487__auto___13839,G__13673_13836,G__13673_13837__$1,n__5593__auto___13834,jobs,results,process__$1,async){
return (function (state_13686){
var state_val_13687 = (state_13686[(1)]);
if((state_val_13687 === (1))){
var state_13686__$1 = state_13686;
var statearr_13688_13840 = state_13686__$1;
(statearr_13688_13840[(2)] = null);

(statearr_13688_13840[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13687 === (2))){
var state_13686__$1 = state_13686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13686__$1,(4),jobs);
} else {
if((state_val_13687 === (3))){
var inst_13684 = (state_13686[(2)]);
var state_13686__$1 = state_13686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13686__$1,inst_13684);
} else {
if((state_val_13687 === (4))){
var inst_13676 = (state_13686[(2)]);
var inst_13677 = process__$1(inst_13676);
var state_13686__$1 = state_13686;
if(cljs.core.truth_(inst_13677)){
var statearr_13689_13841 = state_13686__$1;
(statearr_13689_13841[(1)] = (5));

} else {
var statearr_13690_13842 = state_13686__$1;
(statearr_13690_13842[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13687 === (5))){
var state_13686__$1 = state_13686;
var statearr_13691_13843 = state_13686__$1;
(statearr_13691_13843[(2)] = null);

(statearr_13691_13843[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13687 === (6))){
var state_13686__$1 = state_13686;
var statearr_13692_13844 = state_13686__$1;
(statearr_13692_13844[(2)] = null);

(statearr_13692_13844[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13687 === (7))){
var inst_13682 = (state_13686[(2)]);
var state_13686__$1 = state_13686;
var statearr_13693_13845 = state_13686__$1;
(statearr_13693_13845[(2)] = inst_13682);

(statearr_13693_13845[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__13835,c__13487__auto___13839,G__13673_13836,G__13673_13837__$1,n__5593__auto___13834,jobs,results,process__$1,async))
;
return ((function (__13835,switch__13412__auto__,c__13487__auto___13839,G__13673_13836,G__13673_13837__$1,n__5593__auto___13834,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____0 = (function (){
var statearr_13694 = [null,null,null,null,null,null,null];
(statearr_13694[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__);

(statearr_13694[(1)] = (1));

return statearr_13694;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____1 = (function (state_13686){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_13686);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e13695){var ex__13416__auto__ = e13695;
var statearr_13696_13846 = state_13686;
(statearr_13696_13846[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_13686[(4)]))){
var statearr_13697_13847 = state_13686;
(statearr_13697_13847[(1)] = cljs.core.first((state_13686[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__13848 = state_13686;
state_13686 = G__13848;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__ = function(state_13686){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____1.call(this,state_13686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__;
})()
;})(__13835,switch__13412__auto__,c__13487__auto___13839,G__13673_13836,G__13673_13837__$1,n__5593__auto___13834,jobs,results,process__$1,async))
})();
var state__13489__auto__ = (function (){var statearr_13698 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_13698[(6)] = c__13487__auto___13839);

return statearr_13698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
});})(__13835,c__13487__auto___13839,G__13673_13836,G__13673_13837__$1,n__5593__auto___13834,jobs,results,process__$1,async))
);


break;
case "async":
var c__13487__auto___13849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13835,c__13487__auto___13849,G__13673_13836,G__13673_13837__$1,n__5593__auto___13834,jobs,results,process__$1,async){
return (function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = ((function (__13835,c__13487__auto___13849,G__13673_13836,G__13673_13837__$1,n__5593__auto___13834,jobs,results,process__$1,async){
return (function (state_13711){
var state_val_13712 = (state_13711[(1)]);
if((state_val_13712 === (1))){
var state_13711__$1 = state_13711;
var statearr_13713_13850 = state_13711__$1;
(statearr_13713_13850[(2)] = null);

(statearr_13713_13850[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13712 === (2))){
var state_13711__$1 = state_13711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13711__$1,(4),jobs);
} else {
if((state_val_13712 === (3))){
var inst_13709 = (state_13711[(2)]);
var state_13711__$1 = state_13711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13711__$1,inst_13709);
} else {
if((state_val_13712 === (4))){
var inst_13701 = (state_13711[(2)]);
var inst_13702 = async(inst_13701);
var state_13711__$1 = state_13711;
if(cljs.core.truth_(inst_13702)){
var statearr_13714_13851 = state_13711__$1;
(statearr_13714_13851[(1)] = (5));

} else {
var statearr_13715_13852 = state_13711__$1;
(statearr_13715_13852[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13712 === (5))){
var state_13711__$1 = state_13711;
var statearr_13716_13853 = state_13711__$1;
(statearr_13716_13853[(2)] = null);

(statearr_13716_13853[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13712 === (6))){
var state_13711__$1 = state_13711;
var statearr_13717_13854 = state_13711__$1;
(statearr_13717_13854[(2)] = null);

(statearr_13717_13854[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13712 === (7))){
var inst_13707 = (state_13711[(2)]);
var state_13711__$1 = state_13711;
var statearr_13718_13855 = state_13711__$1;
(statearr_13718_13855[(2)] = inst_13707);

(statearr_13718_13855[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__13835,c__13487__auto___13849,G__13673_13836,G__13673_13837__$1,n__5593__auto___13834,jobs,results,process__$1,async))
;
return ((function (__13835,switch__13412__auto__,c__13487__auto___13849,G__13673_13836,G__13673_13837__$1,n__5593__auto___13834,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____0 = (function (){
var statearr_13719 = [null,null,null,null,null,null,null];
(statearr_13719[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__);

(statearr_13719[(1)] = (1));

return statearr_13719;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____1 = (function (state_13711){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_13711);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e13720){var ex__13416__auto__ = e13720;
var statearr_13721_13856 = state_13711;
(statearr_13721_13856[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_13711[(4)]))){
var statearr_13722_13857 = state_13711;
(statearr_13722_13857[(1)] = cljs.core.first((state_13711[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__13858 = state_13711;
state_13711 = G__13858;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__ = function(state_13711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____1.call(this,state_13711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__;
})()
;})(__13835,switch__13412__auto__,c__13487__auto___13849,G__13673_13836,G__13673_13837__$1,n__5593__auto___13834,jobs,results,process__$1,async))
})();
var state__13489__auto__ = (function (){var statearr_13723 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_13723[(6)] = c__13487__auto___13849);

return statearr_13723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
});})(__13835,c__13487__auto___13849,G__13673_13836,G__13673_13837__$1,n__5593__auto___13834,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13673_13837__$1)].join('')));

}

var G__13859 = (__13835 + (1));
__13835 = G__13859;
continue;
} else {
}
break;
}

var c__13487__auto___13860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_13745){
var state_val_13746 = (state_13745[(1)]);
if((state_val_13746 === (7))){
var inst_13741 = (state_13745[(2)]);
var state_13745__$1 = state_13745;
var statearr_13747_13861 = state_13745__$1;
(statearr_13747_13861[(2)] = inst_13741);

(statearr_13747_13861[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13746 === (1))){
var state_13745__$1 = state_13745;
var statearr_13748_13862 = state_13745__$1;
(statearr_13748_13862[(2)] = null);

(statearr_13748_13862[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13746 === (4))){
var inst_13726 = (state_13745[(7)]);
var inst_13726__$1 = (state_13745[(2)]);
var inst_13727 = (inst_13726__$1 == null);
var state_13745__$1 = (function (){var statearr_13749 = state_13745;
(statearr_13749[(7)] = inst_13726__$1);

return statearr_13749;
})();
if(cljs.core.truth_(inst_13727)){
var statearr_13750_13863 = state_13745__$1;
(statearr_13750_13863[(1)] = (5));

} else {
var statearr_13751_13864 = state_13745__$1;
(statearr_13751_13864[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13746 === (6))){
var inst_13726 = (state_13745[(7)]);
var inst_13731 = (state_13745[(8)]);
var inst_13731__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13732 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13733 = [inst_13726,inst_13731__$1];
var inst_13734 = (new cljs.core.PersistentVector(null,2,(5),inst_13732,inst_13733,null));
var state_13745__$1 = (function (){var statearr_13752 = state_13745;
(statearr_13752[(8)] = inst_13731__$1);

return statearr_13752;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13745__$1,(8),jobs,inst_13734);
} else {
if((state_val_13746 === (3))){
var inst_13743 = (state_13745[(2)]);
var state_13745__$1 = state_13745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13745__$1,inst_13743);
} else {
if((state_val_13746 === (2))){
var state_13745__$1 = state_13745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13745__$1,(4),from);
} else {
if((state_val_13746 === (9))){
var inst_13738 = (state_13745[(2)]);
var state_13745__$1 = (function (){var statearr_13753 = state_13745;
(statearr_13753[(9)] = inst_13738);

return statearr_13753;
})();
var statearr_13754_13865 = state_13745__$1;
(statearr_13754_13865[(2)] = null);

(statearr_13754_13865[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13746 === (5))){
var inst_13729 = cljs.core.async.close_BANG_(jobs);
var state_13745__$1 = state_13745;
var statearr_13755_13866 = state_13745__$1;
(statearr_13755_13866[(2)] = inst_13729);

(statearr_13755_13866[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13746 === (8))){
var inst_13731 = (state_13745[(8)]);
var inst_13736 = (state_13745[(2)]);
var state_13745__$1 = (function (){var statearr_13756 = state_13745;
(statearr_13756[(10)] = inst_13736);

return statearr_13756;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13745__$1,(9),results,inst_13731);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____0 = (function (){
var statearr_13757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__);

(statearr_13757[(1)] = (1));

return statearr_13757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____1 = (function (state_13745){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_13745);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e13758){var ex__13416__auto__ = e13758;
var statearr_13759_13867 = state_13745;
(statearr_13759_13867[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_13745[(4)]))){
var statearr_13760_13868 = state_13745;
(statearr_13760_13868[(1)] = cljs.core.first((state_13745[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__13869 = state_13745;
state_13745 = G__13869;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__ = function(state_13745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____1.call(this,state_13745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_13761 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_13761[(6)] = c__13487__auto___13860);

return statearr_13761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));


var c__13487__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_13799){
var state_val_13800 = (state_13799[(1)]);
if((state_val_13800 === (7))){
var inst_13795 = (state_13799[(2)]);
var state_13799__$1 = state_13799;
var statearr_13801_13870 = state_13799__$1;
(statearr_13801_13870[(2)] = inst_13795);

(statearr_13801_13870[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13800 === (20))){
var state_13799__$1 = state_13799;
var statearr_13802_13871 = state_13799__$1;
(statearr_13802_13871[(2)] = null);

(statearr_13802_13871[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13800 === (1))){
var state_13799__$1 = state_13799;
var statearr_13803_13872 = state_13799__$1;
(statearr_13803_13872[(2)] = null);

(statearr_13803_13872[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13800 === (4))){
var inst_13764 = (state_13799[(7)]);
var inst_13764__$1 = (state_13799[(2)]);
var inst_13765 = (inst_13764__$1 == null);
var state_13799__$1 = (function (){var statearr_13804 = state_13799;
(statearr_13804[(7)] = inst_13764__$1);

return statearr_13804;
})();
if(cljs.core.truth_(inst_13765)){
var statearr_13805_13873 = state_13799__$1;
(statearr_13805_13873[(1)] = (5));

} else {
var statearr_13806_13874 = state_13799__$1;
(statearr_13806_13874[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13800 === (15))){
var inst_13777 = (state_13799[(8)]);
var state_13799__$1 = state_13799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13799__$1,(18),to,inst_13777);
} else {
if((state_val_13800 === (21))){
var inst_13790 = (state_13799[(2)]);
var state_13799__$1 = state_13799;
var statearr_13807_13875 = state_13799__$1;
(statearr_13807_13875[(2)] = inst_13790);

(statearr_13807_13875[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13800 === (13))){
var inst_13792 = (state_13799[(2)]);
var state_13799__$1 = (function (){var statearr_13808 = state_13799;
(statearr_13808[(9)] = inst_13792);

return statearr_13808;
})();
var statearr_13809_13876 = state_13799__$1;
(statearr_13809_13876[(2)] = null);

(statearr_13809_13876[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13800 === (6))){
var inst_13764 = (state_13799[(7)]);
var state_13799__$1 = state_13799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13799__$1,(11),inst_13764);
} else {
if((state_val_13800 === (17))){
var inst_13785 = (state_13799[(2)]);
var state_13799__$1 = state_13799;
if(cljs.core.truth_(inst_13785)){
var statearr_13810_13877 = state_13799__$1;
(statearr_13810_13877[(1)] = (19));

} else {
var statearr_13811_13878 = state_13799__$1;
(statearr_13811_13878[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13800 === (3))){
var inst_13797 = (state_13799[(2)]);
var state_13799__$1 = state_13799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13799__$1,inst_13797);
} else {
if((state_val_13800 === (12))){
var inst_13774 = (state_13799[(10)]);
var state_13799__$1 = state_13799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13799__$1,(14),inst_13774);
} else {
if((state_val_13800 === (2))){
var state_13799__$1 = state_13799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13799__$1,(4),results);
} else {
if((state_val_13800 === (19))){
var state_13799__$1 = state_13799;
var statearr_13812_13879 = state_13799__$1;
(statearr_13812_13879[(2)] = null);

(statearr_13812_13879[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13800 === (11))){
var inst_13774 = (state_13799[(2)]);
var state_13799__$1 = (function (){var statearr_13813 = state_13799;
(statearr_13813[(10)] = inst_13774);

return statearr_13813;
})();
var statearr_13814_13880 = state_13799__$1;
(statearr_13814_13880[(2)] = null);

(statearr_13814_13880[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13800 === (9))){
var state_13799__$1 = state_13799;
var statearr_13815_13881 = state_13799__$1;
(statearr_13815_13881[(2)] = null);

(statearr_13815_13881[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13800 === (5))){
var state_13799__$1 = state_13799;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13816_13882 = state_13799__$1;
(statearr_13816_13882[(1)] = (8));

} else {
var statearr_13817_13883 = state_13799__$1;
(statearr_13817_13883[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13800 === (14))){
var inst_13777 = (state_13799[(8)]);
var inst_13779 = (state_13799[(11)]);
var inst_13777__$1 = (state_13799[(2)]);
var inst_13778 = (inst_13777__$1 == null);
var inst_13779__$1 = cljs.core.not(inst_13778);
var state_13799__$1 = (function (){var statearr_13818 = state_13799;
(statearr_13818[(8)] = inst_13777__$1);

(statearr_13818[(11)] = inst_13779__$1);

return statearr_13818;
})();
if(inst_13779__$1){
var statearr_13819_13884 = state_13799__$1;
(statearr_13819_13884[(1)] = (15));

} else {
var statearr_13820_13885 = state_13799__$1;
(statearr_13820_13885[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13800 === (16))){
var inst_13779 = (state_13799[(11)]);
var state_13799__$1 = state_13799;
var statearr_13821_13886 = state_13799__$1;
(statearr_13821_13886[(2)] = inst_13779);

(statearr_13821_13886[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13800 === (10))){
var inst_13771 = (state_13799[(2)]);
var state_13799__$1 = state_13799;
var statearr_13822_13887 = state_13799__$1;
(statearr_13822_13887[(2)] = inst_13771);

(statearr_13822_13887[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13800 === (18))){
var inst_13782 = (state_13799[(2)]);
var state_13799__$1 = state_13799;
var statearr_13823_13888 = state_13799__$1;
(statearr_13823_13888[(2)] = inst_13782);

(statearr_13823_13888[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13800 === (8))){
var inst_13768 = cljs.core.async.close_BANG_(to);
var state_13799__$1 = state_13799;
var statearr_13824_13889 = state_13799__$1;
(statearr_13824_13889[(2)] = inst_13768);

(statearr_13824_13889[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____0 = (function (){
var statearr_13825 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__);

(statearr_13825[(1)] = (1));

return statearr_13825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____1 = (function (state_13799){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_13799);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e13826){var ex__13416__auto__ = e13826;
var statearr_13827_13890 = state_13799;
(statearr_13827_13890[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_13799[(4)]))){
var statearr_13828_13891 = state_13799;
(statearr_13828_13891[(1)] = cljs.core.first((state_13799[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__13892 = state_13799;
state_13799 = G__13892;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__ = function(state_13799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____1.call(this,state_13799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13413__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_13829 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_13829[(6)] = c__13487__auto__);

return statearr_13829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));

return c__13487__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__13894 = arguments.length;
switch (G__13894) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__13897 = arguments.length;
switch (G__13897) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__13900 = arguments.length;
switch (G__13900) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13487__auto___13950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_13926){
var state_val_13927 = (state_13926[(1)]);
if((state_val_13927 === (7))){
var inst_13922 = (state_13926[(2)]);
var state_13926__$1 = state_13926;
var statearr_13928_13951 = state_13926__$1;
(statearr_13928_13951[(2)] = inst_13922);

(statearr_13928_13951[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13927 === (1))){
var state_13926__$1 = state_13926;
var statearr_13929_13952 = state_13926__$1;
(statearr_13929_13952[(2)] = null);

(statearr_13929_13952[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13927 === (4))){
var inst_13903 = (state_13926[(7)]);
var inst_13903__$1 = (state_13926[(2)]);
var inst_13904 = (inst_13903__$1 == null);
var state_13926__$1 = (function (){var statearr_13930 = state_13926;
(statearr_13930[(7)] = inst_13903__$1);

return statearr_13930;
})();
if(cljs.core.truth_(inst_13904)){
var statearr_13931_13953 = state_13926__$1;
(statearr_13931_13953[(1)] = (5));

} else {
var statearr_13932_13954 = state_13926__$1;
(statearr_13932_13954[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13927 === (13))){
var state_13926__$1 = state_13926;
var statearr_13933_13955 = state_13926__$1;
(statearr_13933_13955[(2)] = null);

(statearr_13933_13955[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13927 === (6))){
var inst_13903 = (state_13926[(7)]);
var inst_13909 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13903) : p.call(null,inst_13903));
var state_13926__$1 = state_13926;
if(cljs.core.truth_(inst_13909)){
var statearr_13934_13956 = state_13926__$1;
(statearr_13934_13956[(1)] = (9));

} else {
var statearr_13935_13957 = state_13926__$1;
(statearr_13935_13957[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13927 === (3))){
var inst_13924 = (state_13926[(2)]);
var state_13926__$1 = state_13926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13926__$1,inst_13924);
} else {
if((state_val_13927 === (12))){
var state_13926__$1 = state_13926;
var statearr_13936_13958 = state_13926__$1;
(statearr_13936_13958[(2)] = null);

(statearr_13936_13958[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13927 === (2))){
var state_13926__$1 = state_13926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13926__$1,(4),ch);
} else {
if((state_val_13927 === (11))){
var inst_13903 = (state_13926[(7)]);
var inst_13913 = (state_13926[(2)]);
var state_13926__$1 = state_13926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13926__$1,(8),inst_13913,inst_13903);
} else {
if((state_val_13927 === (9))){
var state_13926__$1 = state_13926;
var statearr_13937_13959 = state_13926__$1;
(statearr_13937_13959[(2)] = tc);

(statearr_13937_13959[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13927 === (5))){
var inst_13906 = cljs.core.async.close_BANG_(tc);
var inst_13907 = cljs.core.async.close_BANG_(fc);
var state_13926__$1 = (function (){var statearr_13938 = state_13926;
(statearr_13938[(8)] = inst_13906);

return statearr_13938;
})();
var statearr_13939_13960 = state_13926__$1;
(statearr_13939_13960[(2)] = inst_13907);

(statearr_13939_13960[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13927 === (14))){
var inst_13920 = (state_13926[(2)]);
var state_13926__$1 = state_13926;
var statearr_13940_13961 = state_13926__$1;
(statearr_13940_13961[(2)] = inst_13920);

(statearr_13940_13961[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13927 === (10))){
var state_13926__$1 = state_13926;
var statearr_13941_13962 = state_13926__$1;
(statearr_13941_13962[(2)] = fc);

(statearr_13941_13962[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13927 === (8))){
var inst_13915 = (state_13926[(2)]);
var state_13926__$1 = state_13926;
if(cljs.core.truth_(inst_13915)){
var statearr_13942_13963 = state_13926__$1;
(statearr_13942_13963[(1)] = (12));

} else {
var statearr_13943_13964 = state_13926__$1;
(statearr_13943_13964[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13413__auto__ = null;
var cljs$core$async$state_machine__13413__auto____0 = (function (){
var statearr_13944 = [null,null,null,null,null,null,null,null,null];
(statearr_13944[(0)] = cljs$core$async$state_machine__13413__auto__);

(statearr_13944[(1)] = (1));

return statearr_13944;
});
var cljs$core$async$state_machine__13413__auto____1 = (function (state_13926){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_13926);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e13945){var ex__13416__auto__ = e13945;
var statearr_13946_13965 = state_13926;
(statearr_13946_13965[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_13926[(4)]))){
var statearr_13947_13966 = state_13926;
(statearr_13947_13966[(1)] = cljs.core.first((state_13926[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__13967 = state_13926;
state_13926 = G__13967;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$state_machine__13413__auto__ = function(state_13926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13413__auto____1.call(this,state_13926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13413__auto____0;
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13413__auto____1;
return cljs$core$async$state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_13948 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_13948[(6)] = c__13487__auto___13950);

return statearr_13948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13487__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_13989){
var state_val_13990 = (state_13989[(1)]);
if((state_val_13990 === (7))){
var inst_13985 = (state_13989[(2)]);
var state_13989__$1 = state_13989;
var statearr_13991_14010 = state_13989__$1;
(statearr_13991_14010[(2)] = inst_13985);

(statearr_13991_14010[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13990 === (1))){
var inst_13968 = init;
var inst_13969 = inst_13968;
var state_13989__$1 = (function (){var statearr_13992 = state_13989;
(statearr_13992[(7)] = inst_13969);

return statearr_13992;
})();
var statearr_13993_14011 = state_13989__$1;
(statearr_13993_14011[(2)] = null);

(statearr_13993_14011[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13990 === (4))){
var inst_13972 = (state_13989[(8)]);
var inst_13972__$1 = (state_13989[(2)]);
var inst_13973 = (inst_13972__$1 == null);
var state_13989__$1 = (function (){var statearr_13994 = state_13989;
(statearr_13994[(8)] = inst_13972__$1);

return statearr_13994;
})();
if(cljs.core.truth_(inst_13973)){
var statearr_13995_14012 = state_13989__$1;
(statearr_13995_14012[(1)] = (5));

} else {
var statearr_13996_14013 = state_13989__$1;
(statearr_13996_14013[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13990 === (6))){
var inst_13969 = (state_13989[(7)]);
var inst_13972 = (state_13989[(8)]);
var inst_13976 = (state_13989[(9)]);
var inst_13976__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_13969,inst_13972) : f.call(null,inst_13969,inst_13972));
var inst_13977 = cljs.core.reduced_QMARK_(inst_13976__$1);
var state_13989__$1 = (function (){var statearr_13997 = state_13989;
(statearr_13997[(9)] = inst_13976__$1);

return statearr_13997;
})();
if(inst_13977){
var statearr_13998_14014 = state_13989__$1;
(statearr_13998_14014[(1)] = (8));

} else {
var statearr_13999_14015 = state_13989__$1;
(statearr_13999_14015[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13990 === (3))){
var inst_13987 = (state_13989[(2)]);
var state_13989__$1 = state_13989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13989__$1,inst_13987);
} else {
if((state_val_13990 === (2))){
var state_13989__$1 = state_13989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13989__$1,(4),ch);
} else {
if((state_val_13990 === (9))){
var inst_13976 = (state_13989[(9)]);
var inst_13969 = inst_13976;
var state_13989__$1 = (function (){var statearr_14000 = state_13989;
(statearr_14000[(7)] = inst_13969);

return statearr_14000;
})();
var statearr_14001_14016 = state_13989__$1;
(statearr_14001_14016[(2)] = null);

(statearr_14001_14016[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13990 === (5))){
var inst_13969 = (state_13989[(7)]);
var state_13989__$1 = state_13989;
var statearr_14002_14017 = state_13989__$1;
(statearr_14002_14017[(2)] = inst_13969);

(statearr_14002_14017[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13990 === (10))){
var inst_13983 = (state_13989[(2)]);
var state_13989__$1 = state_13989;
var statearr_14003_14018 = state_13989__$1;
(statearr_14003_14018[(2)] = inst_13983);

(statearr_14003_14018[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13990 === (8))){
var inst_13976 = (state_13989[(9)]);
var inst_13979 = cljs.core.deref(inst_13976);
var state_13989__$1 = state_13989;
var statearr_14004_14019 = state_13989__$1;
(statearr_14004_14019[(2)] = inst_13979);

(statearr_14004_14019[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13413__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13413__auto____0 = (function (){
var statearr_14005 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14005[(0)] = cljs$core$async$reduce_$_state_machine__13413__auto__);

(statearr_14005[(1)] = (1));

return statearr_14005;
});
var cljs$core$async$reduce_$_state_machine__13413__auto____1 = (function (state_13989){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_13989);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e14006){var ex__13416__auto__ = e14006;
var statearr_14007_14020 = state_13989;
(statearr_14007_14020[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_13989[(4)]))){
var statearr_14008_14021 = state_13989;
(statearr_14008_14021[(1)] = cljs.core.first((state_13989[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__14022 = state_13989;
state_13989 = G__14022;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13413__auto__ = function(state_13989){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13413__auto____1.call(this,state_13989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13413__auto____0;
cljs$core$async$reduce_$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13413__auto____1;
return cljs$core$async$reduce_$_state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_14009 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_14009[(6)] = c__13487__auto__);

return statearr_14009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));

return c__13487__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13487__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_14028){
var state_val_14029 = (state_14028[(1)]);
if((state_val_14029 === (1))){
var inst_14023 = cljs.core.async.reduce(f__$1,init,ch);
var state_14028__$1 = state_14028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14028__$1,(2),inst_14023);
} else {
if((state_val_14029 === (2))){
var inst_14025 = (state_14028[(2)]);
var inst_14026 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14025) : f__$1.call(null,inst_14025));
var state_14028__$1 = state_14028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14028__$1,inst_14026);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13413__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13413__auto____0 = (function (){
var statearr_14030 = [null,null,null,null,null,null,null];
(statearr_14030[(0)] = cljs$core$async$transduce_$_state_machine__13413__auto__);

(statearr_14030[(1)] = (1));

return statearr_14030;
});
var cljs$core$async$transduce_$_state_machine__13413__auto____1 = (function (state_14028){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_14028);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e14031){var ex__13416__auto__ = e14031;
var statearr_14032_14035 = state_14028;
(statearr_14032_14035[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_14028[(4)]))){
var statearr_14033_14036 = state_14028;
(statearr_14033_14036[(1)] = cljs.core.first((state_14028[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__14037 = state_14028;
state_14028 = G__14037;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13413__auto__ = function(state_14028){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13413__auto____1.call(this,state_14028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13413__auto____0;
cljs$core$async$transduce_$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13413__auto____1;
return cljs$core$async$transduce_$_state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_14034 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_14034[(6)] = c__13487__auto__);

return statearr_14034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));

return c__13487__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14039 = arguments.length;
switch (G__14039) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13487__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_14064){
var state_val_14065 = (state_14064[(1)]);
if((state_val_14065 === (7))){
var inst_14046 = (state_14064[(2)]);
var state_14064__$1 = state_14064;
var statearr_14066_14088 = state_14064__$1;
(statearr_14066_14088[(2)] = inst_14046);

(statearr_14066_14088[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14065 === (1))){
var inst_14040 = cljs.core.seq(coll);
var inst_14041 = inst_14040;
var state_14064__$1 = (function (){var statearr_14067 = state_14064;
(statearr_14067[(7)] = inst_14041);

return statearr_14067;
})();
var statearr_14068_14089 = state_14064__$1;
(statearr_14068_14089[(2)] = null);

(statearr_14068_14089[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14065 === (4))){
var inst_14041 = (state_14064[(7)]);
var inst_14044 = cljs.core.first(inst_14041);
var state_14064__$1 = state_14064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14064__$1,(7),ch,inst_14044);
} else {
if((state_val_14065 === (13))){
var inst_14058 = (state_14064[(2)]);
var state_14064__$1 = state_14064;
var statearr_14069_14090 = state_14064__$1;
(statearr_14069_14090[(2)] = inst_14058);

(statearr_14069_14090[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14065 === (6))){
var inst_14049 = (state_14064[(2)]);
var state_14064__$1 = state_14064;
if(cljs.core.truth_(inst_14049)){
var statearr_14070_14091 = state_14064__$1;
(statearr_14070_14091[(1)] = (8));

} else {
var statearr_14071_14092 = state_14064__$1;
(statearr_14071_14092[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14065 === (3))){
var inst_14062 = (state_14064[(2)]);
var state_14064__$1 = state_14064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14064__$1,inst_14062);
} else {
if((state_val_14065 === (12))){
var state_14064__$1 = state_14064;
var statearr_14072_14093 = state_14064__$1;
(statearr_14072_14093[(2)] = null);

(statearr_14072_14093[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14065 === (2))){
var inst_14041 = (state_14064[(7)]);
var state_14064__$1 = state_14064;
if(cljs.core.truth_(inst_14041)){
var statearr_14073_14094 = state_14064__$1;
(statearr_14073_14094[(1)] = (4));

} else {
var statearr_14074_14095 = state_14064__$1;
(statearr_14074_14095[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14065 === (11))){
var inst_14055 = cljs.core.async.close_BANG_(ch);
var state_14064__$1 = state_14064;
var statearr_14075_14096 = state_14064__$1;
(statearr_14075_14096[(2)] = inst_14055);

(statearr_14075_14096[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14065 === (9))){
var state_14064__$1 = state_14064;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14076_14097 = state_14064__$1;
(statearr_14076_14097[(1)] = (11));

} else {
var statearr_14077_14098 = state_14064__$1;
(statearr_14077_14098[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14065 === (5))){
var inst_14041 = (state_14064[(7)]);
var state_14064__$1 = state_14064;
var statearr_14078_14099 = state_14064__$1;
(statearr_14078_14099[(2)] = inst_14041);

(statearr_14078_14099[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14065 === (10))){
var inst_14060 = (state_14064[(2)]);
var state_14064__$1 = state_14064;
var statearr_14079_14100 = state_14064__$1;
(statearr_14079_14100[(2)] = inst_14060);

(statearr_14079_14100[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14065 === (8))){
var inst_14041 = (state_14064[(7)]);
var inst_14051 = cljs.core.next(inst_14041);
var inst_14041__$1 = inst_14051;
var state_14064__$1 = (function (){var statearr_14080 = state_14064;
(statearr_14080[(7)] = inst_14041__$1);

return statearr_14080;
})();
var statearr_14081_14101 = state_14064__$1;
(statearr_14081_14101[(2)] = null);

(statearr_14081_14101[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13413__auto__ = null;
var cljs$core$async$state_machine__13413__auto____0 = (function (){
var statearr_14082 = [null,null,null,null,null,null,null,null];
(statearr_14082[(0)] = cljs$core$async$state_machine__13413__auto__);

(statearr_14082[(1)] = (1));

return statearr_14082;
});
var cljs$core$async$state_machine__13413__auto____1 = (function (state_14064){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_14064);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e14083){var ex__13416__auto__ = e14083;
var statearr_14084_14102 = state_14064;
(statearr_14084_14102[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_14064[(4)]))){
var statearr_14085_14103 = state_14064;
(statearr_14085_14103[(1)] = cljs.core.first((state_14064[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__14104 = state_14064;
state_14064 = G__14104;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$state_machine__13413__auto__ = function(state_14064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13413__auto____1.call(this,state_14064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13413__auto____0;
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13413__auto____1;
return cljs$core$async$state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_14086 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_14086[(6)] = c__13487__auto__);

return statearr_14086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));

return c__13487__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14106 = arguments.length;
switch (G__14106) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_14108 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_14108(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14109 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_14109(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14110 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_14110(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14111 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_14111(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14112 = (function (ch,cs,meta14113){
this.ch = ch;
this.cs = cs;
this.meta14113 = meta14113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14114,meta14113__$1){
var self__ = this;
var _14114__$1 = this;
return (new cljs.core.async.t_cljs$core$async14112(self__.ch,self__.cs,meta14113__$1));
}));

(cljs.core.async.t_cljs$core$async14112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14114){
var self__ = this;
var _14114__$1 = this;
return self__.meta14113;
}));

(cljs.core.async.t_cljs$core$async14112.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14112.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14112.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14112.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14112.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14112.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta14113], null);
}));

(cljs.core.async.t_cljs$core$async14112.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14112");

(cljs.core.async.t_cljs$core$async14112.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14112");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14112.
 */
cljs.core.async.__GT_t_cljs$core$async14112 = (function cljs$core$async$mult_$___GT_t_cljs$core$async14112(ch__$1,cs__$1,meta14113){
return (new cljs.core.async.t_cljs$core$async14112(ch__$1,cs__$1,meta14113));
});

}

return (new cljs.core.async.t_cljs$core$async14112(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13487__auto___14331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_14247){
var state_val_14248 = (state_14247[(1)]);
if((state_val_14248 === (7))){
var inst_14243 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14249_14332 = state_14247__$1;
(statearr_14249_14332[(2)] = inst_14243);

(statearr_14249_14332[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (20))){
var inst_14148 = (state_14247[(7)]);
var inst_14160 = cljs.core.first(inst_14148);
var inst_14161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14160,(0),null);
var inst_14162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14160,(1),null);
var state_14247__$1 = (function (){var statearr_14250 = state_14247;
(statearr_14250[(8)] = inst_14161);

return statearr_14250;
})();
if(cljs.core.truth_(inst_14162)){
var statearr_14251_14333 = state_14247__$1;
(statearr_14251_14333[(1)] = (22));

} else {
var statearr_14252_14334 = state_14247__$1;
(statearr_14252_14334[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (27))){
var inst_14190 = (state_14247[(9)]);
var inst_14192 = (state_14247[(10)]);
var inst_14197 = (state_14247[(11)]);
var inst_14117 = (state_14247[(12)]);
var inst_14197__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14190,inst_14192);
var inst_14198 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14197__$1,inst_14117,done);
var state_14247__$1 = (function (){var statearr_14253 = state_14247;
(statearr_14253[(11)] = inst_14197__$1);

return statearr_14253;
})();
if(cljs.core.truth_(inst_14198)){
var statearr_14254_14335 = state_14247__$1;
(statearr_14254_14335[(1)] = (30));

} else {
var statearr_14255_14336 = state_14247__$1;
(statearr_14255_14336[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (1))){
var state_14247__$1 = state_14247;
var statearr_14256_14337 = state_14247__$1;
(statearr_14256_14337[(2)] = null);

(statearr_14256_14337[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (24))){
var inst_14148 = (state_14247[(7)]);
var inst_14167 = (state_14247[(2)]);
var inst_14168 = cljs.core.next(inst_14148);
var inst_14126 = inst_14168;
var inst_14127 = null;
var inst_14128 = (0);
var inst_14129 = (0);
var state_14247__$1 = (function (){var statearr_14257 = state_14247;
(statearr_14257[(13)] = inst_14167);

(statearr_14257[(14)] = inst_14126);

(statearr_14257[(15)] = inst_14127);

(statearr_14257[(16)] = inst_14128);

(statearr_14257[(17)] = inst_14129);

return statearr_14257;
})();
var statearr_14258_14338 = state_14247__$1;
(statearr_14258_14338[(2)] = null);

(statearr_14258_14338[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (39))){
var state_14247__$1 = state_14247;
var statearr_14262_14339 = state_14247__$1;
(statearr_14262_14339[(2)] = null);

(statearr_14262_14339[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (4))){
var inst_14117 = (state_14247[(12)]);
var inst_14117__$1 = (state_14247[(2)]);
var inst_14118 = (inst_14117__$1 == null);
var state_14247__$1 = (function (){var statearr_14263 = state_14247;
(statearr_14263[(12)] = inst_14117__$1);

return statearr_14263;
})();
if(cljs.core.truth_(inst_14118)){
var statearr_14264_14340 = state_14247__$1;
(statearr_14264_14340[(1)] = (5));

} else {
var statearr_14265_14341 = state_14247__$1;
(statearr_14265_14341[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (15))){
var inst_14129 = (state_14247[(17)]);
var inst_14126 = (state_14247[(14)]);
var inst_14127 = (state_14247[(15)]);
var inst_14128 = (state_14247[(16)]);
var inst_14144 = (state_14247[(2)]);
var inst_14145 = (inst_14129 + (1));
var tmp14259 = inst_14126;
var tmp14260 = inst_14127;
var tmp14261 = inst_14128;
var inst_14126__$1 = tmp14259;
var inst_14127__$1 = tmp14260;
var inst_14128__$1 = tmp14261;
var inst_14129__$1 = inst_14145;
var state_14247__$1 = (function (){var statearr_14266 = state_14247;
(statearr_14266[(18)] = inst_14144);

(statearr_14266[(14)] = inst_14126__$1);

(statearr_14266[(15)] = inst_14127__$1);

(statearr_14266[(16)] = inst_14128__$1);

(statearr_14266[(17)] = inst_14129__$1);

return statearr_14266;
})();
var statearr_14267_14342 = state_14247__$1;
(statearr_14267_14342[(2)] = null);

(statearr_14267_14342[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (21))){
var inst_14171 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14271_14343 = state_14247__$1;
(statearr_14271_14343[(2)] = inst_14171);

(statearr_14271_14343[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (31))){
var inst_14197 = (state_14247[(11)]);
var inst_14201 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14197);
var state_14247__$1 = state_14247;
var statearr_14272_14344 = state_14247__$1;
(statearr_14272_14344[(2)] = inst_14201);

(statearr_14272_14344[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (32))){
var inst_14192 = (state_14247[(10)]);
var inst_14189 = (state_14247[(19)]);
var inst_14190 = (state_14247[(9)]);
var inst_14191 = (state_14247[(20)]);
var inst_14203 = (state_14247[(2)]);
var inst_14204 = (inst_14192 + (1));
var tmp14268 = inst_14190;
var tmp14269 = inst_14191;
var tmp14270 = inst_14189;
var inst_14189__$1 = tmp14270;
var inst_14190__$1 = tmp14268;
var inst_14191__$1 = tmp14269;
var inst_14192__$1 = inst_14204;
var state_14247__$1 = (function (){var statearr_14273 = state_14247;
(statearr_14273[(21)] = inst_14203);

(statearr_14273[(19)] = inst_14189__$1);

(statearr_14273[(9)] = inst_14190__$1);

(statearr_14273[(20)] = inst_14191__$1);

(statearr_14273[(10)] = inst_14192__$1);

return statearr_14273;
})();
var statearr_14274_14345 = state_14247__$1;
(statearr_14274_14345[(2)] = null);

(statearr_14274_14345[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (40))){
var inst_14216 = (state_14247[(22)]);
var inst_14220 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14216);
var state_14247__$1 = state_14247;
var statearr_14275_14346 = state_14247__$1;
(statearr_14275_14346[(2)] = inst_14220);

(statearr_14275_14346[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (33))){
var inst_14207 = (state_14247[(23)]);
var inst_14209 = cljs.core.chunked_seq_QMARK_(inst_14207);
var state_14247__$1 = state_14247;
if(inst_14209){
var statearr_14276_14347 = state_14247__$1;
(statearr_14276_14347[(1)] = (36));

} else {
var statearr_14277_14348 = state_14247__$1;
(statearr_14277_14348[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (13))){
var inst_14138 = (state_14247[(24)]);
var inst_14141 = cljs.core.async.close_BANG_(inst_14138);
var state_14247__$1 = state_14247;
var statearr_14278_14349 = state_14247__$1;
(statearr_14278_14349[(2)] = inst_14141);

(statearr_14278_14349[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (22))){
var inst_14161 = (state_14247[(8)]);
var inst_14164 = cljs.core.async.close_BANG_(inst_14161);
var state_14247__$1 = state_14247;
var statearr_14279_14350 = state_14247__$1;
(statearr_14279_14350[(2)] = inst_14164);

(statearr_14279_14350[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (36))){
var inst_14207 = (state_14247[(23)]);
var inst_14211 = cljs.core.chunk_first(inst_14207);
var inst_14212 = cljs.core.chunk_rest(inst_14207);
var inst_14213 = cljs.core.count(inst_14211);
var inst_14189 = inst_14212;
var inst_14190 = inst_14211;
var inst_14191 = inst_14213;
var inst_14192 = (0);
var state_14247__$1 = (function (){var statearr_14280 = state_14247;
(statearr_14280[(19)] = inst_14189);

(statearr_14280[(9)] = inst_14190);

(statearr_14280[(20)] = inst_14191);

(statearr_14280[(10)] = inst_14192);

return statearr_14280;
})();
var statearr_14281_14351 = state_14247__$1;
(statearr_14281_14351[(2)] = null);

(statearr_14281_14351[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (41))){
var inst_14207 = (state_14247[(23)]);
var inst_14222 = (state_14247[(2)]);
var inst_14223 = cljs.core.next(inst_14207);
var inst_14189 = inst_14223;
var inst_14190 = null;
var inst_14191 = (0);
var inst_14192 = (0);
var state_14247__$1 = (function (){var statearr_14282 = state_14247;
(statearr_14282[(25)] = inst_14222);

(statearr_14282[(19)] = inst_14189);

(statearr_14282[(9)] = inst_14190);

(statearr_14282[(20)] = inst_14191);

(statearr_14282[(10)] = inst_14192);

return statearr_14282;
})();
var statearr_14283_14352 = state_14247__$1;
(statearr_14283_14352[(2)] = null);

(statearr_14283_14352[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (43))){
var state_14247__$1 = state_14247;
var statearr_14284_14353 = state_14247__$1;
(statearr_14284_14353[(2)] = null);

(statearr_14284_14353[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (29))){
var inst_14231 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14285_14354 = state_14247__$1;
(statearr_14285_14354[(2)] = inst_14231);

(statearr_14285_14354[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (44))){
var inst_14240 = (state_14247[(2)]);
var state_14247__$1 = (function (){var statearr_14286 = state_14247;
(statearr_14286[(26)] = inst_14240);

return statearr_14286;
})();
var statearr_14287_14355 = state_14247__$1;
(statearr_14287_14355[(2)] = null);

(statearr_14287_14355[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (6))){
var inst_14181 = (state_14247[(27)]);
var inst_14180 = cljs.core.deref(cs);
var inst_14181__$1 = cljs.core.keys(inst_14180);
var inst_14182 = cljs.core.count(inst_14181__$1);
var inst_14183 = cljs.core.reset_BANG_(dctr,inst_14182);
var inst_14188 = cljs.core.seq(inst_14181__$1);
var inst_14189 = inst_14188;
var inst_14190 = null;
var inst_14191 = (0);
var inst_14192 = (0);
var state_14247__$1 = (function (){var statearr_14288 = state_14247;
(statearr_14288[(27)] = inst_14181__$1);

(statearr_14288[(28)] = inst_14183);

(statearr_14288[(19)] = inst_14189);

(statearr_14288[(9)] = inst_14190);

(statearr_14288[(20)] = inst_14191);

(statearr_14288[(10)] = inst_14192);

return statearr_14288;
})();
var statearr_14289_14356 = state_14247__$1;
(statearr_14289_14356[(2)] = null);

(statearr_14289_14356[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (28))){
var inst_14189 = (state_14247[(19)]);
var inst_14207 = (state_14247[(23)]);
var inst_14207__$1 = cljs.core.seq(inst_14189);
var state_14247__$1 = (function (){var statearr_14290 = state_14247;
(statearr_14290[(23)] = inst_14207__$1);

return statearr_14290;
})();
if(inst_14207__$1){
var statearr_14291_14357 = state_14247__$1;
(statearr_14291_14357[(1)] = (33));

} else {
var statearr_14292_14358 = state_14247__$1;
(statearr_14292_14358[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (25))){
var inst_14192 = (state_14247[(10)]);
var inst_14191 = (state_14247[(20)]);
var inst_14194 = (inst_14192 < inst_14191);
var inst_14195 = inst_14194;
var state_14247__$1 = state_14247;
if(cljs.core.truth_(inst_14195)){
var statearr_14293_14359 = state_14247__$1;
(statearr_14293_14359[(1)] = (27));

} else {
var statearr_14294_14360 = state_14247__$1;
(statearr_14294_14360[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (34))){
var state_14247__$1 = state_14247;
var statearr_14295_14361 = state_14247__$1;
(statearr_14295_14361[(2)] = null);

(statearr_14295_14361[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (17))){
var state_14247__$1 = state_14247;
var statearr_14296_14362 = state_14247__$1;
(statearr_14296_14362[(2)] = null);

(statearr_14296_14362[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (3))){
var inst_14245 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14247__$1,inst_14245);
} else {
if((state_val_14248 === (12))){
var inst_14176 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14297_14363 = state_14247__$1;
(statearr_14297_14363[(2)] = inst_14176);

(statearr_14297_14363[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (2))){
var state_14247__$1 = state_14247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14247__$1,(4),ch);
} else {
if((state_val_14248 === (23))){
var state_14247__$1 = state_14247;
var statearr_14298_14364 = state_14247__$1;
(statearr_14298_14364[(2)] = null);

(statearr_14298_14364[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (35))){
var inst_14229 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14299_14365 = state_14247__$1;
(statearr_14299_14365[(2)] = inst_14229);

(statearr_14299_14365[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (19))){
var inst_14148 = (state_14247[(7)]);
var inst_14152 = cljs.core.chunk_first(inst_14148);
var inst_14153 = cljs.core.chunk_rest(inst_14148);
var inst_14154 = cljs.core.count(inst_14152);
var inst_14126 = inst_14153;
var inst_14127 = inst_14152;
var inst_14128 = inst_14154;
var inst_14129 = (0);
var state_14247__$1 = (function (){var statearr_14300 = state_14247;
(statearr_14300[(14)] = inst_14126);

(statearr_14300[(15)] = inst_14127);

(statearr_14300[(16)] = inst_14128);

(statearr_14300[(17)] = inst_14129);

return statearr_14300;
})();
var statearr_14301_14366 = state_14247__$1;
(statearr_14301_14366[(2)] = null);

(statearr_14301_14366[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (11))){
var inst_14126 = (state_14247[(14)]);
var inst_14148 = (state_14247[(7)]);
var inst_14148__$1 = cljs.core.seq(inst_14126);
var state_14247__$1 = (function (){var statearr_14302 = state_14247;
(statearr_14302[(7)] = inst_14148__$1);

return statearr_14302;
})();
if(inst_14148__$1){
var statearr_14303_14367 = state_14247__$1;
(statearr_14303_14367[(1)] = (16));

} else {
var statearr_14304_14368 = state_14247__$1;
(statearr_14304_14368[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (9))){
var inst_14178 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14305_14369 = state_14247__$1;
(statearr_14305_14369[(2)] = inst_14178);

(statearr_14305_14369[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (5))){
var inst_14124 = cljs.core.deref(cs);
var inst_14125 = cljs.core.seq(inst_14124);
var inst_14126 = inst_14125;
var inst_14127 = null;
var inst_14128 = (0);
var inst_14129 = (0);
var state_14247__$1 = (function (){var statearr_14306 = state_14247;
(statearr_14306[(14)] = inst_14126);

(statearr_14306[(15)] = inst_14127);

(statearr_14306[(16)] = inst_14128);

(statearr_14306[(17)] = inst_14129);

return statearr_14306;
})();
var statearr_14307_14370 = state_14247__$1;
(statearr_14307_14370[(2)] = null);

(statearr_14307_14370[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (14))){
var state_14247__$1 = state_14247;
var statearr_14308_14371 = state_14247__$1;
(statearr_14308_14371[(2)] = null);

(statearr_14308_14371[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (45))){
var inst_14237 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14309_14372 = state_14247__$1;
(statearr_14309_14372[(2)] = inst_14237);

(statearr_14309_14372[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (26))){
var inst_14181 = (state_14247[(27)]);
var inst_14233 = (state_14247[(2)]);
var inst_14234 = cljs.core.seq(inst_14181);
var state_14247__$1 = (function (){var statearr_14310 = state_14247;
(statearr_14310[(29)] = inst_14233);

return statearr_14310;
})();
if(inst_14234){
var statearr_14311_14373 = state_14247__$1;
(statearr_14311_14373[(1)] = (42));

} else {
var statearr_14312_14374 = state_14247__$1;
(statearr_14312_14374[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (16))){
var inst_14148 = (state_14247[(7)]);
var inst_14150 = cljs.core.chunked_seq_QMARK_(inst_14148);
var state_14247__$1 = state_14247;
if(inst_14150){
var statearr_14313_14375 = state_14247__$1;
(statearr_14313_14375[(1)] = (19));

} else {
var statearr_14314_14376 = state_14247__$1;
(statearr_14314_14376[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (38))){
var inst_14226 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14315_14377 = state_14247__$1;
(statearr_14315_14377[(2)] = inst_14226);

(statearr_14315_14377[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (30))){
var state_14247__$1 = state_14247;
var statearr_14316_14378 = state_14247__$1;
(statearr_14316_14378[(2)] = null);

(statearr_14316_14378[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (10))){
var inst_14127 = (state_14247[(15)]);
var inst_14129 = (state_14247[(17)]);
var inst_14137 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14127,inst_14129);
var inst_14138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14137,(0),null);
var inst_14139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14137,(1),null);
var state_14247__$1 = (function (){var statearr_14317 = state_14247;
(statearr_14317[(24)] = inst_14138);

return statearr_14317;
})();
if(cljs.core.truth_(inst_14139)){
var statearr_14318_14379 = state_14247__$1;
(statearr_14318_14379[(1)] = (13));

} else {
var statearr_14319_14380 = state_14247__$1;
(statearr_14319_14380[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (18))){
var inst_14174 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14320_14381 = state_14247__$1;
(statearr_14320_14381[(2)] = inst_14174);

(statearr_14320_14381[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (42))){
var state_14247__$1 = state_14247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14247__$1,(45),dchan);
} else {
if((state_val_14248 === (37))){
var inst_14207 = (state_14247[(23)]);
var inst_14216 = (state_14247[(22)]);
var inst_14117 = (state_14247[(12)]);
var inst_14216__$1 = cljs.core.first(inst_14207);
var inst_14217 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14216__$1,inst_14117,done);
var state_14247__$1 = (function (){var statearr_14321 = state_14247;
(statearr_14321[(22)] = inst_14216__$1);

return statearr_14321;
})();
if(cljs.core.truth_(inst_14217)){
var statearr_14322_14382 = state_14247__$1;
(statearr_14322_14382[(1)] = (39));

} else {
var statearr_14323_14383 = state_14247__$1;
(statearr_14323_14383[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14248 === (8))){
var inst_14129 = (state_14247[(17)]);
var inst_14128 = (state_14247[(16)]);
var inst_14131 = (inst_14129 < inst_14128);
var inst_14132 = inst_14131;
var state_14247__$1 = state_14247;
if(cljs.core.truth_(inst_14132)){
var statearr_14324_14384 = state_14247__$1;
(statearr_14324_14384[(1)] = (10));

} else {
var statearr_14325_14385 = state_14247__$1;
(statearr_14325_14385[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13413__auto__ = null;
var cljs$core$async$mult_$_state_machine__13413__auto____0 = (function (){
var statearr_14326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14326[(0)] = cljs$core$async$mult_$_state_machine__13413__auto__);

(statearr_14326[(1)] = (1));

return statearr_14326;
});
var cljs$core$async$mult_$_state_machine__13413__auto____1 = (function (state_14247){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_14247);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e14327){var ex__13416__auto__ = e14327;
var statearr_14328_14386 = state_14247;
(statearr_14328_14386[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_14247[(4)]))){
var statearr_14329_14387 = state_14247;
(statearr_14329_14387[(1)] = cljs.core.first((state_14247[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__14388 = state_14247;
state_14247 = G__14388;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13413__auto__ = function(state_14247){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13413__auto____1.call(this,state_14247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13413__auto____0;
cljs$core$async$mult_$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13413__auto____1;
return cljs$core$async$mult_$_state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_14330 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_14330[(6)] = c__13487__auto___14331);

return statearr_14330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14390 = arguments.length;
switch (G__14390) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_14392 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_14392(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14393 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_14393(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14394 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14394(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14395 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_14395(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14396 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14396(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14406 = arguments.length;
var i__5727__auto___14407 = (0);
while(true){
if((i__5727__auto___14407 < len__5726__auto___14406)){
args__5732__auto__.push((arguments[i__5727__auto___14407]));

var G__14408 = (i__5727__auto___14407 + (1));
i__5727__auto___14407 = G__14408;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14401){
var map__14402 = p__14401;
var map__14402__$1 = cljs.core.__destructure_map(map__14402);
var opts = map__14402__$1;
var statearr_14403_14409 = state;
(statearr_14403_14409[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_14404_14410 = state;
(statearr_14404_14410[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_14405_14411 = state;
(statearr_14405_14411[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14397){
var G__14398 = cljs.core.first(seq14397);
var seq14397__$1 = cljs.core.next(seq14397);
var G__14399 = cljs.core.first(seq14397__$1);
var seq14397__$2 = cljs.core.next(seq14397__$1);
var G__14400 = cljs.core.first(seq14397__$2);
var seq14397__$3 = cljs.core.next(seq14397__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14398,G__14399,G__14400,seq14397__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14412 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14412 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14413){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14413 = meta14413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14414,meta14413__$1){
var self__ = this;
var _14414__$1 = this;
return (new cljs.core.async.t_cljs$core$async14412(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14413__$1));
}));

(cljs.core.async.t_cljs$core$async14412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14414){
var self__ = this;
var _14414__$1 = this;
return self__.meta14413;
}));

(cljs.core.async.t_cljs$core$async14412.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14412.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14412.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14412.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14412.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14412.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14412.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14412.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta14413], null);
}));

(cljs.core.async.t_cljs$core$async14412.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14412");

(cljs.core.async.t_cljs$core$async14412.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14412");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14412.
 */
cljs.core.async.__GT_t_cljs$core$async14412 = (function cljs$core$async$mix_$___GT_t_cljs$core$async14412(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14413){
return (new cljs.core.async.t_cljs$core$async14412(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14413));
});

}

return (new cljs.core.async.t_cljs$core$async14412(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13487__auto___14527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_14482){
var state_val_14483 = (state_14482[(1)]);
if((state_val_14483 === (7))){
var inst_14442 = (state_14482[(2)]);
var state_14482__$1 = state_14482;
if(cljs.core.truth_(inst_14442)){
var statearr_14484_14528 = state_14482__$1;
(statearr_14484_14528[(1)] = (8));

} else {
var statearr_14485_14529 = state_14482__$1;
(statearr_14485_14529[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (20))){
var inst_14435 = (state_14482[(7)]);
var state_14482__$1 = state_14482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14482__$1,(23),out,inst_14435);
} else {
if((state_val_14483 === (1))){
var inst_14418 = calc_state();
var inst_14419 = cljs.core.__destructure_map(inst_14418);
var inst_14420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14419,cljs.core.cst$kw$solos);
var inst_14421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14419,cljs.core.cst$kw$mutes);
var inst_14422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14419,cljs.core.cst$kw$reads);
var inst_14423 = inst_14418;
var state_14482__$1 = (function (){var statearr_14486 = state_14482;
(statearr_14486[(8)] = inst_14420);

(statearr_14486[(9)] = inst_14421);

(statearr_14486[(10)] = inst_14422);

(statearr_14486[(11)] = inst_14423);

return statearr_14486;
})();
var statearr_14487_14530 = state_14482__$1;
(statearr_14487_14530[(2)] = null);

(statearr_14487_14530[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (24))){
var inst_14426 = (state_14482[(12)]);
var inst_14423 = inst_14426;
var state_14482__$1 = (function (){var statearr_14488 = state_14482;
(statearr_14488[(11)] = inst_14423);

return statearr_14488;
})();
var statearr_14489_14531 = state_14482__$1;
(statearr_14489_14531[(2)] = null);

(statearr_14489_14531[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (4))){
var inst_14435 = (state_14482[(7)]);
var inst_14437 = (state_14482[(13)]);
var inst_14434 = (state_14482[(2)]);
var inst_14435__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14434,(0),null);
var inst_14436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14434,(1),null);
var inst_14437__$1 = (inst_14435__$1 == null);
var state_14482__$1 = (function (){var statearr_14490 = state_14482;
(statearr_14490[(7)] = inst_14435__$1);

(statearr_14490[(14)] = inst_14436);

(statearr_14490[(13)] = inst_14437__$1);

return statearr_14490;
})();
if(cljs.core.truth_(inst_14437__$1)){
var statearr_14491_14532 = state_14482__$1;
(statearr_14491_14532[(1)] = (5));

} else {
var statearr_14492_14533 = state_14482__$1;
(statearr_14492_14533[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (15))){
var inst_14427 = (state_14482[(15)]);
var inst_14456 = (state_14482[(16)]);
var inst_14456__$1 = cljs.core.empty_QMARK_(inst_14427);
var state_14482__$1 = (function (){var statearr_14493 = state_14482;
(statearr_14493[(16)] = inst_14456__$1);

return statearr_14493;
})();
if(inst_14456__$1){
var statearr_14494_14534 = state_14482__$1;
(statearr_14494_14534[(1)] = (17));

} else {
var statearr_14495_14535 = state_14482__$1;
(statearr_14495_14535[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (21))){
var inst_14426 = (state_14482[(12)]);
var inst_14423 = inst_14426;
var state_14482__$1 = (function (){var statearr_14496 = state_14482;
(statearr_14496[(11)] = inst_14423);

return statearr_14496;
})();
var statearr_14497_14536 = state_14482__$1;
(statearr_14497_14536[(2)] = null);

(statearr_14497_14536[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (13))){
var inst_14449 = (state_14482[(2)]);
var inst_14450 = calc_state();
var inst_14423 = inst_14450;
var state_14482__$1 = (function (){var statearr_14498 = state_14482;
(statearr_14498[(17)] = inst_14449);

(statearr_14498[(11)] = inst_14423);

return statearr_14498;
})();
var statearr_14499_14537 = state_14482__$1;
(statearr_14499_14537[(2)] = null);

(statearr_14499_14537[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (22))){
var inst_14476 = (state_14482[(2)]);
var state_14482__$1 = state_14482;
var statearr_14500_14538 = state_14482__$1;
(statearr_14500_14538[(2)] = inst_14476);

(statearr_14500_14538[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (6))){
var inst_14436 = (state_14482[(14)]);
var inst_14440 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14436,change);
var state_14482__$1 = state_14482;
var statearr_14501_14539 = state_14482__$1;
(statearr_14501_14539[(2)] = inst_14440);

(statearr_14501_14539[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (25))){
var state_14482__$1 = state_14482;
var statearr_14502_14540 = state_14482__$1;
(statearr_14502_14540[(2)] = null);

(statearr_14502_14540[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (17))){
var inst_14428 = (state_14482[(18)]);
var inst_14436 = (state_14482[(14)]);
var inst_14458 = (inst_14428.cljs$core$IFn$_invoke$arity$1 ? inst_14428.cljs$core$IFn$_invoke$arity$1(inst_14436) : inst_14428.call(null,inst_14436));
var inst_14459 = cljs.core.not(inst_14458);
var state_14482__$1 = state_14482;
var statearr_14503_14541 = state_14482__$1;
(statearr_14503_14541[(2)] = inst_14459);

(statearr_14503_14541[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (3))){
var inst_14480 = (state_14482[(2)]);
var state_14482__$1 = state_14482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14482__$1,inst_14480);
} else {
if((state_val_14483 === (12))){
var state_14482__$1 = state_14482;
var statearr_14504_14542 = state_14482__$1;
(statearr_14504_14542[(2)] = null);

(statearr_14504_14542[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (2))){
var inst_14423 = (state_14482[(11)]);
var inst_14426 = (state_14482[(12)]);
var inst_14426__$1 = cljs.core.__destructure_map(inst_14423);
var inst_14427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14426__$1,cljs.core.cst$kw$solos);
var inst_14428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14426__$1,cljs.core.cst$kw$mutes);
var inst_14429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14426__$1,cljs.core.cst$kw$reads);
var state_14482__$1 = (function (){var statearr_14505 = state_14482;
(statearr_14505[(12)] = inst_14426__$1);

(statearr_14505[(15)] = inst_14427);

(statearr_14505[(18)] = inst_14428);

return statearr_14505;
})();
return cljs.core.async.ioc_alts_BANG_(state_14482__$1,(4),inst_14429);
} else {
if((state_val_14483 === (23))){
var inst_14467 = (state_14482[(2)]);
var state_14482__$1 = state_14482;
if(cljs.core.truth_(inst_14467)){
var statearr_14506_14543 = state_14482__$1;
(statearr_14506_14543[(1)] = (24));

} else {
var statearr_14507_14544 = state_14482__$1;
(statearr_14507_14544[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (19))){
var inst_14462 = (state_14482[(2)]);
var state_14482__$1 = state_14482;
var statearr_14508_14545 = state_14482__$1;
(statearr_14508_14545[(2)] = inst_14462);

(statearr_14508_14545[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (11))){
var inst_14436 = (state_14482[(14)]);
var inst_14446 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14436);
var state_14482__$1 = state_14482;
var statearr_14509_14546 = state_14482__$1;
(statearr_14509_14546[(2)] = inst_14446);

(statearr_14509_14546[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (9))){
var inst_14427 = (state_14482[(15)]);
var inst_14436 = (state_14482[(14)]);
var inst_14453 = (state_14482[(19)]);
var inst_14453__$1 = (inst_14427.cljs$core$IFn$_invoke$arity$1 ? inst_14427.cljs$core$IFn$_invoke$arity$1(inst_14436) : inst_14427.call(null,inst_14436));
var state_14482__$1 = (function (){var statearr_14510 = state_14482;
(statearr_14510[(19)] = inst_14453__$1);

return statearr_14510;
})();
if(cljs.core.truth_(inst_14453__$1)){
var statearr_14511_14547 = state_14482__$1;
(statearr_14511_14547[(1)] = (14));

} else {
var statearr_14512_14548 = state_14482__$1;
(statearr_14512_14548[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (5))){
var inst_14437 = (state_14482[(13)]);
var state_14482__$1 = state_14482;
var statearr_14513_14549 = state_14482__$1;
(statearr_14513_14549[(2)] = inst_14437);

(statearr_14513_14549[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (14))){
var inst_14453 = (state_14482[(19)]);
var state_14482__$1 = state_14482;
var statearr_14514_14550 = state_14482__$1;
(statearr_14514_14550[(2)] = inst_14453);

(statearr_14514_14550[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (26))){
var inst_14472 = (state_14482[(2)]);
var state_14482__$1 = state_14482;
var statearr_14515_14551 = state_14482__$1;
(statearr_14515_14551[(2)] = inst_14472);

(statearr_14515_14551[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (16))){
var inst_14464 = (state_14482[(2)]);
var state_14482__$1 = state_14482;
if(cljs.core.truth_(inst_14464)){
var statearr_14516_14552 = state_14482__$1;
(statearr_14516_14552[(1)] = (20));

} else {
var statearr_14517_14553 = state_14482__$1;
(statearr_14517_14553[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (10))){
var inst_14478 = (state_14482[(2)]);
var state_14482__$1 = state_14482;
var statearr_14518_14554 = state_14482__$1;
(statearr_14518_14554[(2)] = inst_14478);

(statearr_14518_14554[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (18))){
var inst_14456 = (state_14482[(16)]);
var state_14482__$1 = state_14482;
var statearr_14519_14555 = state_14482__$1;
(statearr_14519_14555[(2)] = inst_14456);

(statearr_14519_14555[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (8))){
var inst_14435 = (state_14482[(7)]);
var inst_14444 = (inst_14435 == null);
var state_14482__$1 = state_14482;
if(cljs.core.truth_(inst_14444)){
var statearr_14520_14556 = state_14482__$1;
(statearr_14520_14556[(1)] = (11));

} else {
var statearr_14521_14557 = state_14482__$1;
(statearr_14521_14557[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13413__auto__ = null;
var cljs$core$async$mix_$_state_machine__13413__auto____0 = (function (){
var statearr_14522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14522[(0)] = cljs$core$async$mix_$_state_machine__13413__auto__);

(statearr_14522[(1)] = (1));

return statearr_14522;
});
var cljs$core$async$mix_$_state_machine__13413__auto____1 = (function (state_14482){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_14482);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e14523){var ex__13416__auto__ = e14523;
var statearr_14524_14558 = state_14482;
(statearr_14524_14558[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_14482[(4)]))){
var statearr_14525_14559 = state_14482;
(statearr_14525_14559[(1)] = cljs.core.first((state_14482[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__14560 = state_14482;
state_14482 = G__14560;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13413__auto__ = function(state_14482){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13413__auto____1.call(this,state_14482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13413__auto____0;
cljs$core$async$mix_$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13413__auto____1;
return cljs$core$async$mix_$_state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_14526 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_14526[(6)] = c__13487__auto___14527);

return statearr_14526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_14563 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_14563(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14564 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_14564(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14565 = (function() {
var G__14566 = null;
var G__14566__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__14566__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__14566 = function(p,v){
switch(arguments.length){
case 1:
return G__14566__1.call(this,p);
case 2:
return G__14566__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14566.cljs$core$IFn$_invoke$arity$1 = G__14566__1;
G__14566.cljs$core$IFn$_invoke$arity$2 = G__14566__2;
return G__14566;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14562 = arguments.length;
switch (G__14562) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14565.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14565.cljs$core$IFn$_invoke$arity$2(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__14570 = arguments.length;
switch (G__14570) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__14568_SHARP_){
if(cljs.core.truth_((p1__14568_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14568_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14568_SHARP_.call(null,topic)))){
return p1__14568_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14568_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14571 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14571 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14572){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14572 = meta14572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14573,meta14572__$1){
var self__ = this;
var _14573__$1 = this;
return (new cljs.core.async.t_cljs$core$async14571(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14572__$1));
}));

(cljs.core.async.t_cljs$core$async14571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14573){
var self__ = this;
var _14573__$1 = this;
return self__.meta14572;
}));

(cljs.core.async.t_cljs$core$async14571.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14571.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14571.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14571.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14571.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async14571.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14571.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta14572], null);
}));

(cljs.core.async.t_cljs$core$async14571.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14571");

(cljs.core.async.t_cljs$core$async14571.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14571");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14571.
 */
cljs.core.async.__GT_t_cljs$core$async14571 = (function cljs$core$async$__GT_t_cljs$core$async14571(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14572){
return (new cljs.core.async.t_cljs$core$async14571(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14572));
});

}

return (new cljs.core.async.t_cljs$core$async14571(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13487__auto___14692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_14645){
var state_val_14646 = (state_14645[(1)]);
if((state_val_14646 === (7))){
var inst_14641 = (state_14645[(2)]);
var state_14645__$1 = state_14645;
var statearr_14647_14693 = state_14645__$1;
(statearr_14647_14693[(2)] = inst_14641);

(statearr_14647_14693[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (20))){
var state_14645__$1 = state_14645;
var statearr_14648_14694 = state_14645__$1;
(statearr_14648_14694[(2)] = null);

(statearr_14648_14694[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (1))){
var state_14645__$1 = state_14645;
var statearr_14649_14695 = state_14645__$1;
(statearr_14649_14695[(2)] = null);

(statearr_14649_14695[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (24))){
var inst_14624 = (state_14645[(7)]);
var inst_14633 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_14624);
var state_14645__$1 = state_14645;
var statearr_14650_14696 = state_14645__$1;
(statearr_14650_14696[(2)] = inst_14633);

(statearr_14650_14696[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (4))){
var inst_14576 = (state_14645[(8)]);
var inst_14576__$1 = (state_14645[(2)]);
var inst_14577 = (inst_14576__$1 == null);
var state_14645__$1 = (function (){var statearr_14651 = state_14645;
(statearr_14651[(8)] = inst_14576__$1);

return statearr_14651;
})();
if(cljs.core.truth_(inst_14577)){
var statearr_14652_14697 = state_14645__$1;
(statearr_14652_14697[(1)] = (5));

} else {
var statearr_14653_14698 = state_14645__$1;
(statearr_14653_14698[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (15))){
var inst_14618 = (state_14645[(2)]);
var state_14645__$1 = state_14645;
var statearr_14654_14699 = state_14645__$1;
(statearr_14654_14699[(2)] = inst_14618);

(statearr_14654_14699[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (21))){
var inst_14638 = (state_14645[(2)]);
var state_14645__$1 = (function (){var statearr_14655 = state_14645;
(statearr_14655[(9)] = inst_14638);

return statearr_14655;
})();
var statearr_14656_14700 = state_14645__$1;
(statearr_14656_14700[(2)] = null);

(statearr_14656_14700[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (13))){
var inst_14600 = (state_14645[(10)]);
var inst_14602 = cljs.core.chunked_seq_QMARK_(inst_14600);
var state_14645__$1 = state_14645;
if(inst_14602){
var statearr_14657_14701 = state_14645__$1;
(statearr_14657_14701[(1)] = (16));

} else {
var statearr_14658_14702 = state_14645__$1;
(statearr_14658_14702[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (22))){
var inst_14630 = (state_14645[(2)]);
var state_14645__$1 = state_14645;
if(cljs.core.truth_(inst_14630)){
var statearr_14659_14703 = state_14645__$1;
(statearr_14659_14703[(1)] = (23));

} else {
var statearr_14660_14704 = state_14645__$1;
(statearr_14660_14704[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (6))){
var inst_14576 = (state_14645[(8)]);
var inst_14624 = (state_14645[(7)]);
var inst_14626 = (state_14645[(11)]);
var inst_14624__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_14576) : topic_fn.call(null,inst_14576));
var inst_14625 = cljs.core.deref(mults);
var inst_14626__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14625,inst_14624__$1);
var state_14645__$1 = (function (){var statearr_14661 = state_14645;
(statearr_14661[(7)] = inst_14624__$1);

(statearr_14661[(11)] = inst_14626__$1);

return statearr_14661;
})();
if(cljs.core.truth_(inst_14626__$1)){
var statearr_14662_14705 = state_14645__$1;
(statearr_14662_14705[(1)] = (19));

} else {
var statearr_14663_14706 = state_14645__$1;
(statearr_14663_14706[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (25))){
var inst_14635 = (state_14645[(2)]);
var state_14645__$1 = state_14645;
var statearr_14664_14707 = state_14645__$1;
(statearr_14664_14707[(2)] = inst_14635);

(statearr_14664_14707[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (17))){
var inst_14600 = (state_14645[(10)]);
var inst_14609 = cljs.core.first(inst_14600);
var inst_14610 = cljs.core.async.muxch_STAR_(inst_14609);
var inst_14611 = cljs.core.async.close_BANG_(inst_14610);
var inst_14612 = cljs.core.next(inst_14600);
var inst_14586 = inst_14612;
var inst_14587 = null;
var inst_14588 = (0);
var inst_14589 = (0);
var state_14645__$1 = (function (){var statearr_14665 = state_14645;
(statearr_14665[(12)] = inst_14611);

(statearr_14665[(13)] = inst_14586);

(statearr_14665[(14)] = inst_14587);

(statearr_14665[(15)] = inst_14588);

(statearr_14665[(16)] = inst_14589);

return statearr_14665;
})();
var statearr_14666_14708 = state_14645__$1;
(statearr_14666_14708[(2)] = null);

(statearr_14666_14708[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (3))){
var inst_14643 = (state_14645[(2)]);
var state_14645__$1 = state_14645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14645__$1,inst_14643);
} else {
if((state_val_14646 === (12))){
var inst_14620 = (state_14645[(2)]);
var state_14645__$1 = state_14645;
var statearr_14667_14709 = state_14645__$1;
(statearr_14667_14709[(2)] = inst_14620);

(statearr_14667_14709[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (2))){
var state_14645__$1 = state_14645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14645__$1,(4),ch);
} else {
if((state_val_14646 === (23))){
var state_14645__$1 = state_14645;
var statearr_14668_14710 = state_14645__$1;
(statearr_14668_14710[(2)] = null);

(statearr_14668_14710[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (19))){
var inst_14626 = (state_14645[(11)]);
var inst_14576 = (state_14645[(8)]);
var inst_14628 = cljs.core.async.muxch_STAR_(inst_14626);
var state_14645__$1 = state_14645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14645__$1,(22),inst_14628,inst_14576);
} else {
if((state_val_14646 === (11))){
var inst_14586 = (state_14645[(13)]);
var inst_14600 = (state_14645[(10)]);
var inst_14600__$1 = cljs.core.seq(inst_14586);
var state_14645__$1 = (function (){var statearr_14669 = state_14645;
(statearr_14669[(10)] = inst_14600__$1);

return statearr_14669;
})();
if(inst_14600__$1){
var statearr_14670_14711 = state_14645__$1;
(statearr_14670_14711[(1)] = (13));

} else {
var statearr_14671_14712 = state_14645__$1;
(statearr_14671_14712[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (9))){
var inst_14622 = (state_14645[(2)]);
var state_14645__$1 = state_14645;
var statearr_14672_14713 = state_14645__$1;
(statearr_14672_14713[(2)] = inst_14622);

(statearr_14672_14713[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (5))){
var inst_14583 = cljs.core.deref(mults);
var inst_14584 = cljs.core.vals(inst_14583);
var inst_14585 = cljs.core.seq(inst_14584);
var inst_14586 = inst_14585;
var inst_14587 = null;
var inst_14588 = (0);
var inst_14589 = (0);
var state_14645__$1 = (function (){var statearr_14673 = state_14645;
(statearr_14673[(13)] = inst_14586);

(statearr_14673[(14)] = inst_14587);

(statearr_14673[(15)] = inst_14588);

(statearr_14673[(16)] = inst_14589);

return statearr_14673;
})();
var statearr_14674_14714 = state_14645__$1;
(statearr_14674_14714[(2)] = null);

(statearr_14674_14714[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (14))){
var state_14645__$1 = state_14645;
var statearr_14678_14715 = state_14645__$1;
(statearr_14678_14715[(2)] = null);

(statearr_14678_14715[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (16))){
var inst_14600 = (state_14645[(10)]);
var inst_14604 = cljs.core.chunk_first(inst_14600);
var inst_14605 = cljs.core.chunk_rest(inst_14600);
var inst_14606 = cljs.core.count(inst_14604);
var inst_14586 = inst_14605;
var inst_14587 = inst_14604;
var inst_14588 = inst_14606;
var inst_14589 = (0);
var state_14645__$1 = (function (){var statearr_14679 = state_14645;
(statearr_14679[(13)] = inst_14586);

(statearr_14679[(14)] = inst_14587);

(statearr_14679[(15)] = inst_14588);

(statearr_14679[(16)] = inst_14589);

return statearr_14679;
})();
var statearr_14680_14716 = state_14645__$1;
(statearr_14680_14716[(2)] = null);

(statearr_14680_14716[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (10))){
var inst_14587 = (state_14645[(14)]);
var inst_14589 = (state_14645[(16)]);
var inst_14586 = (state_14645[(13)]);
var inst_14588 = (state_14645[(15)]);
var inst_14594 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14587,inst_14589);
var inst_14595 = cljs.core.async.muxch_STAR_(inst_14594);
var inst_14596 = cljs.core.async.close_BANG_(inst_14595);
var inst_14597 = (inst_14589 + (1));
var tmp14675 = inst_14588;
var tmp14676 = inst_14587;
var tmp14677 = inst_14586;
var inst_14586__$1 = tmp14677;
var inst_14587__$1 = tmp14676;
var inst_14588__$1 = tmp14675;
var inst_14589__$1 = inst_14597;
var state_14645__$1 = (function (){var statearr_14681 = state_14645;
(statearr_14681[(17)] = inst_14596);

(statearr_14681[(13)] = inst_14586__$1);

(statearr_14681[(14)] = inst_14587__$1);

(statearr_14681[(15)] = inst_14588__$1);

(statearr_14681[(16)] = inst_14589__$1);

return statearr_14681;
})();
var statearr_14682_14717 = state_14645__$1;
(statearr_14682_14717[(2)] = null);

(statearr_14682_14717[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (18))){
var inst_14615 = (state_14645[(2)]);
var state_14645__$1 = state_14645;
var statearr_14683_14718 = state_14645__$1;
(statearr_14683_14718[(2)] = inst_14615);

(statearr_14683_14718[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14646 === (8))){
var inst_14589 = (state_14645[(16)]);
var inst_14588 = (state_14645[(15)]);
var inst_14591 = (inst_14589 < inst_14588);
var inst_14592 = inst_14591;
var state_14645__$1 = state_14645;
if(cljs.core.truth_(inst_14592)){
var statearr_14684_14719 = state_14645__$1;
(statearr_14684_14719[(1)] = (10));

} else {
var statearr_14685_14720 = state_14645__$1;
(statearr_14685_14720[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13413__auto__ = null;
var cljs$core$async$state_machine__13413__auto____0 = (function (){
var statearr_14686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14686[(0)] = cljs$core$async$state_machine__13413__auto__);

(statearr_14686[(1)] = (1));

return statearr_14686;
});
var cljs$core$async$state_machine__13413__auto____1 = (function (state_14645){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_14645);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e14687){var ex__13416__auto__ = e14687;
var statearr_14688_14721 = state_14645;
(statearr_14688_14721[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_14645[(4)]))){
var statearr_14689_14722 = state_14645;
(statearr_14689_14722[(1)] = cljs.core.first((state_14645[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__14723 = state_14645;
state_14645 = G__14723;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$state_machine__13413__auto__ = function(state_14645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13413__auto____1.call(this,state_14645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13413__auto____0;
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13413__auto____1;
return cljs$core$async$state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_14690 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_14690[(6)] = c__13487__auto___14692);

return statearr_14690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__14725 = arguments.length;
switch (G__14725) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__14728 = arguments.length;
switch (G__14728) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__14731 = arguments.length;
switch (G__14731) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13487__auto___14809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_14774){
var state_val_14775 = (state_14774[(1)]);
if((state_val_14775 === (7))){
var state_14774__$1 = state_14774;
var statearr_14776_14810 = state_14774__$1;
(statearr_14776_14810[(2)] = null);

(statearr_14776_14810[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14775 === (1))){
var state_14774__$1 = state_14774;
var statearr_14777_14811 = state_14774__$1;
(statearr_14777_14811[(2)] = null);

(statearr_14777_14811[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14775 === (4))){
var inst_14735 = (state_14774[(7)]);
var inst_14734 = (state_14774[(8)]);
var inst_14737 = (inst_14735 < inst_14734);
var state_14774__$1 = state_14774;
if(cljs.core.truth_(inst_14737)){
var statearr_14778_14812 = state_14774__$1;
(statearr_14778_14812[(1)] = (6));

} else {
var statearr_14779_14813 = state_14774__$1;
(statearr_14779_14813[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14775 === (15))){
var inst_14760 = (state_14774[(9)]);
var inst_14765 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_14760);
var state_14774__$1 = state_14774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14774__$1,(17),out,inst_14765);
} else {
if((state_val_14775 === (13))){
var inst_14760 = (state_14774[(9)]);
var inst_14760__$1 = (state_14774[(2)]);
var inst_14761 = cljs.core.some(cljs.core.nil_QMARK_,inst_14760__$1);
var state_14774__$1 = (function (){var statearr_14780 = state_14774;
(statearr_14780[(9)] = inst_14760__$1);

return statearr_14780;
})();
if(cljs.core.truth_(inst_14761)){
var statearr_14781_14814 = state_14774__$1;
(statearr_14781_14814[(1)] = (14));

} else {
var statearr_14782_14815 = state_14774__$1;
(statearr_14782_14815[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14775 === (6))){
var state_14774__$1 = state_14774;
var statearr_14783_14816 = state_14774__$1;
(statearr_14783_14816[(2)] = null);

(statearr_14783_14816[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14775 === (17))){
var inst_14767 = (state_14774[(2)]);
var state_14774__$1 = (function (){var statearr_14785 = state_14774;
(statearr_14785[(10)] = inst_14767);

return statearr_14785;
})();
var statearr_14786_14817 = state_14774__$1;
(statearr_14786_14817[(2)] = null);

(statearr_14786_14817[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14775 === (3))){
var inst_14772 = (state_14774[(2)]);
var state_14774__$1 = state_14774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14774__$1,inst_14772);
} else {
if((state_val_14775 === (12))){
var _ = (function (){var statearr_14787 = state_14774;
(statearr_14787[(4)] = cljs.core.rest((state_14774[(4)])));

return statearr_14787;
})();
var state_14774__$1 = state_14774;
var ex14784 = (state_14774__$1[(2)]);
var statearr_14788_14818 = state_14774__$1;
(statearr_14788_14818[(5)] = ex14784);


if((ex14784 instanceof Object)){
var statearr_14789_14819 = state_14774__$1;
(statearr_14789_14819[(1)] = (11));

(statearr_14789_14819[(5)] = null);

} else {
throw ex14784;

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14775 === (2))){
var inst_14733 = cljs.core.reset_BANG_(dctr,cnt);
var inst_14734 = cnt;
var inst_14735 = (0);
var state_14774__$1 = (function (){var statearr_14790 = state_14774;
(statearr_14790[(11)] = inst_14733);

(statearr_14790[(8)] = inst_14734);

(statearr_14790[(7)] = inst_14735);

return statearr_14790;
})();
var statearr_14791_14820 = state_14774__$1;
(statearr_14791_14820[(2)] = null);

(statearr_14791_14820[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14775 === (11))){
var inst_14739 = (state_14774[(2)]);
var inst_14740 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_14774__$1 = (function (){var statearr_14792 = state_14774;
(statearr_14792[(12)] = inst_14739);

return statearr_14792;
})();
var statearr_14793_14821 = state_14774__$1;
(statearr_14793_14821[(2)] = inst_14740);

(statearr_14793_14821[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14775 === (9))){
var inst_14735 = (state_14774[(7)]);
var _ = (function (){var statearr_14794 = state_14774;
(statearr_14794[(4)] = cljs.core.cons((12),(state_14774[(4)])));

return statearr_14794;
})();
var inst_14746 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_14735) : chs__$1.call(null,inst_14735));
var inst_14747 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_14735) : done.call(null,inst_14735));
var inst_14748 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_14746,inst_14747);
var ___$1 = (function (){var statearr_14795 = state_14774;
(statearr_14795[(4)] = cljs.core.rest((state_14774[(4)])));

return statearr_14795;
})();
var state_14774__$1 = state_14774;
var statearr_14796_14822 = state_14774__$1;
(statearr_14796_14822[(2)] = inst_14748);

(statearr_14796_14822[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14775 === (5))){
var inst_14758 = (state_14774[(2)]);
var state_14774__$1 = (function (){var statearr_14797 = state_14774;
(statearr_14797[(13)] = inst_14758);

return statearr_14797;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14774__$1,(13),dchan);
} else {
if((state_val_14775 === (14))){
var inst_14763 = cljs.core.async.close_BANG_(out);
var state_14774__$1 = state_14774;
var statearr_14798_14823 = state_14774__$1;
(statearr_14798_14823[(2)] = inst_14763);

(statearr_14798_14823[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14775 === (16))){
var inst_14770 = (state_14774[(2)]);
var state_14774__$1 = state_14774;
var statearr_14799_14824 = state_14774__$1;
(statearr_14799_14824[(2)] = inst_14770);

(statearr_14799_14824[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14775 === (10))){
var inst_14735 = (state_14774[(7)]);
var inst_14751 = (state_14774[(2)]);
var inst_14752 = (inst_14735 + (1));
var inst_14735__$1 = inst_14752;
var state_14774__$1 = (function (){var statearr_14800 = state_14774;
(statearr_14800[(14)] = inst_14751);

(statearr_14800[(7)] = inst_14735__$1);

return statearr_14800;
})();
var statearr_14801_14825 = state_14774__$1;
(statearr_14801_14825[(2)] = null);

(statearr_14801_14825[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14775 === (8))){
var inst_14756 = (state_14774[(2)]);
var state_14774__$1 = state_14774;
var statearr_14802_14826 = state_14774__$1;
(statearr_14802_14826[(2)] = inst_14756);

(statearr_14802_14826[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13413__auto__ = null;
var cljs$core$async$state_machine__13413__auto____0 = (function (){
var statearr_14803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14803[(0)] = cljs$core$async$state_machine__13413__auto__);

(statearr_14803[(1)] = (1));

return statearr_14803;
});
var cljs$core$async$state_machine__13413__auto____1 = (function (state_14774){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_14774);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e14804){var ex__13416__auto__ = e14804;
var statearr_14805_14827 = state_14774;
(statearr_14805_14827[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_14774[(4)]))){
var statearr_14806_14828 = state_14774;
(statearr_14806_14828[(1)] = cljs.core.first((state_14774[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__14829 = state_14774;
state_14774 = G__14829;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$state_machine__13413__auto__ = function(state_14774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13413__auto____1.call(this,state_14774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13413__auto____0;
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13413__auto____1;
return cljs$core$async$state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_14807 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_14807[(6)] = c__13487__auto___14809);

return statearr_14807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__14832 = arguments.length;
switch (G__14832) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13487__auto___14887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_14864){
var state_val_14865 = (state_14864[(1)]);
if((state_val_14865 === (7))){
var inst_14843 = (state_14864[(7)]);
var inst_14844 = (state_14864[(8)]);
var inst_14843__$1 = (state_14864[(2)]);
var inst_14844__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14843__$1,(0),null);
var inst_14845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14843__$1,(1),null);
var inst_14846 = (inst_14844__$1 == null);
var state_14864__$1 = (function (){var statearr_14866 = state_14864;
(statearr_14866[(7)] = inst_14843__$1);

(statearr_14866[(8)] = inst_14844__$1);

(statearr_14866[(9)] = inst_14845);

return statearr_14866;
})();
if(cljs.core.truth_(inst_14846)){
var statearr_14867_14888 = state_14864__$1;
(statearr_14867_14888[(1)] = (8));

} else {
var statearr_14868_14889 = state_14864__$1;
(statearr_14868_14889[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14865 === (1))){
var inst_14833 = cljs.core.vec(chs);
var inst_14834 = inst_14833;
var state_14864__$1 = (function (){var statearr_14869 = state_14864;
(statearr_14869[(10)] = inst_14834);

return statearr_14869;
})();
var statearr_14870_14890 = state_14864__$1;
(statearr_14870_14890[(2)] = null);

(statearr_14870_14890[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14865 === (4))){
var inst_14834 = (state_14864[(10)]);
var state_14864__$1 = state_14864;
return cljs.core.async.ioc_alts_BANG_(state_14864__$1,(7),inst_14834);
} else {
if((state_val_14865 === (6))){
var inst_14860 = (state_14864[(2)]);
var state_14864__$1 = state_14864;
var statearr_14871_14891 = state_14864__$1;
(statearr_14871_14891[(2)] = inst_14860);

(statearr_14871_14891[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14865 === (3))){
var inst_14862 = (state_14864[(2)]);
var state_14864__$1 = state_14864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14864__$1,inst_14862);
} else {
if((state_val_14865 === (2))){
var inst_14834 = (state_14864[(10)]);
var inst_14836 = cljs.core.count(inst_14834);
var inst_14837 = (inst_14836 > (0));
var state_14864__$1 = state_14864;
if(cljs.core.truth_(inst_14837)){
var statearr_14873_14892 = state_14864__$1;
(statearr_14873_14892[(1)] = (4));

} else {
var statearr_14874_14893 = state_14864__$1;
(statearr_14874_14893[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14865 === (11))){
var inst_14834 = (state_14864[(10)]);
var inst_14853 = (state_14864[(2)]);
var tmp14872 = inst_14834;
var inst_14834__$1 = tmp14872;
var state_14864__$1 = (function (){var statearr_14875 = state_14864;
(statearr_14875[(11)] = inst_14853);

(statearr_14875[(10)] = inst_14834__$1);

return statearr_14875;
})();
var statearr_14876_14894 = state_14864__$1;
(statearr_14876_14894[(2)] = null);

(statearr_14876_14894[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14865 === (9))){
var inst_14844 = (state_14864[(8)]);
var state_14864__$1 = state_14864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14864__$1,(11),out,inst_14844);
} else {
if((state_val_14865 === (5))){
var inst_14858 = cljs.core.async.close_BANG_(out);
var state_14864__$1 = state_14864;
var statearr_14877_14895 = state_14864__$1;
(statearr_14877_14895[(2)] = inst_14858);

(statearr_14877_14895[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14865 === (10))){
var inst_14856 = (state_14864[(2)]);
var state_14864__$1 = state_14864;
var statearr_14878_14896 = state_14864__$1;
(statearr_14878_14896[(2)] = inst_14856);

(statearr_14878_14896[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14865 === (8))){
var inst_14834 = (state_14864[(10)]);
var inst_14843 = (state_14864[(7)]);
var inst_14844 = (state_14864[(8)]);
var inst_14845 = (state_14864[(9)]);
var inst_14848 = (function (){var cs = inst_14834;
var vec__14839 = inst_14843;
var v = inst_14844;
var c = inst_14845;
return (function (p1__14830_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__14830_SHARP_);
});
})();
var inst_14849 = cljs.core.filterv(inst_14848,inst_14834);
var inst_14834__$1 = inst_14849;
var state_14864__$1 = (function (){var statearr_14879 = state_14864;
(statearr_14879[(10)] = inst_14834__$1);

return statearr_14879;
})();
var statearr_14880_14897 = state_14864__$1;
(statearr_14880_14897[(2)] = null);

(statearr_14880_14897[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13413__auto__ = null;
var cljs$core$async$state_machine__13413__auto____0 = (function (){
var statearr_14881 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14881[(0)] = cljs$core$async$state_machine__13413__auto__);

(statearr_14881[(1)] = (1));

return statearr_14881;
});
var cljs$core$async$state_machine__13413__auto____1 = (function (state_14864){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_14864);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e14882){var ex__13416__auto__ = e14882;
var statearr_14883_14898 = state_14864;
(statearr_14883_14898[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_14864[(4)]))){
var statearr_14884_14899 = state_14864;
(statearr_14884_14899[(1)] = cljs.core.first((state_14864[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__14900 = state_14864;
state_14864 = G__14900;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$state_machine__13413__auto__ = function(state_14864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13413__auto____1.call(this,state_14864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13413__auto____0;
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13413__auto____1;
return cljs$core$async$state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_14885 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_14885[(6)] = c__13487__auto___14887);

return statearr_14885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__14902 = arguments.length;
switch (G__14902) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13487__auto___14948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_14926){
var state_val_14927 = (state_14926[(1)]);
if((state_val_14927 === (7))){
var inst_14908 = (state_14926[(7)]);
var inst_14908__$1 = (state_14926[(2)]);
var inst_14909 = (inst_14908__$1 == null);
var inst_14910 = cljs.core.not(inst_14909);
var state_14926__$1 = (function (){var statearr_14928 = state_14926;
(statearr_14928[(7)] = inst_14908__$1);

return statearr_14928;
})();
if(inst_14910){
var statearr_14929_14949 = state_14926__$1;
(statearr_14929_14949[(1)] = (8));

} else {
var statearr_14930_14950 = state_14926__$1;
(statearr_14930_14950[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14927 === (1))){
var inst_14903 = (0);
var state_14926__$1 = (function (){var statearr_14931 = state_14926;
(statearr_14931[(8)] = inst_14903);

return statearr_14931;
})();
var statearr_14932_14951 = state_14926__$1;
(statearr_14932_14951[(2)] = null);

(statearr_14932_14951[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14927 === (4))){
var state_14926__$1 = state_14926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14926__$1,(7),ch);
} else {
if((state_val_14927 === (6))){
var inst_14921 = (state_14926[(2)]);
var state_14926__$1 = state_14926;
var statearr_14933_14952 = state_14926__$1;
(statearr_14933_14952[(2)] = inst_14921);

(statearr_14933_14952[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14927 === (3))){
var inst_14923 = (state_14926[(2)]);
var inst_14924 = cljs.core.async.close_BANG_(out);
var state_14926__$1 = (function (){var statearr_14934 = state_14926;
(statearr_14934[(9)] = inst_14923);

return statearr_14934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14926__$1,inst_14924);
} else {
if((state_val_14927 === (2))){
var inst_14903 = (state_14926[(8)]);
var inst_14905 = (inst_14903 < n);
var state_14926__$1 = state_14926;
if(cljs.core.truth_(inst_14905)){
var statearr_14935_14953 = state_14926__$1;
(statearr_14935_14953[(1)] = (4));

} else {
var statearr_14936_14954 = state_14926__$1;
(statearr_14936_14954[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14927 === (11))){
var inst_14903 = (state_14926[(8)]);
var inst_14913 = (state_14926[(2)]);
var inst_14914 = (inst_14903 + (1));
var inst_14903__$1 = inst_14914;
var state_14926__$1 = (function (){var statearr_14937 = state_14926;
(statearr_14937[(10)] = inst_14913);

(statearr_14937[(8)] = inst_14903__$1);

return statearr_14937;
})();
var statearr_14938_14955 = state_14926__$1;
(statearr_14938_14955[(2)] = null);

(statearr_14938_14955[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14927 === (9))){
var state_14926__$1 = state_14926;
var statearr_14939_14956 = state_14926__$1;
(statearr_14939_14956[(2)] = null);

(statearr_14939_14956[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14927 === (5))){
var state_14926__$1 = state_14926;
var statearr_14940_14957 = state_14926__$1;
(statearr_14940_14957[(2)] = null);

(statearr_14940_14957[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14927 === (10))){
var inst_14918 = (state_14926[(2)]);
var state_14926__$1 = state_14926;
var statearr_14941_14958 = state_14926__$1;
(statearr_14941_14958[(2)] = inst_14918);

(statearr_14941_14958[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14927 === (8))){
var inst_14908 = (state_14926[(7)]);
var state_14926__$1 = state_14926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14926__$1,(11),out,inst_14908);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13413__auto__ = null;
var cljs$core$async$state_machine__13413__auto____0 = (function (){
var statearr_14942 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14942[(0)] = cljs$core$async$state_machine__13413__auto__);

(statearr_14942[(1)] = (1));

return statearr_14942;
});
var cljs$core$async$state_machine__13413__auto____1 = (function (state_14926){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_14926);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e14943){var ex__13416__auto__ = e14943;
var statearr_14944_14959 = state_14926;
(statearr_14944_14959[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_14926[(4)]))){
var statearr_14945_14960 = state_14926;
(statearr_14945_14960[(1)] = cljs.core.first((state_14926[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__14961 = state_14926;
state_14926 = G__14961;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$state_machine__13413__auto__ = function(state_14926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13413__auto____1.call(this,state_14926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13413__auto____0;
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13413__auto____1;
return cljs$core$async$state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_14946 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_14946[(6)] = c__13487__auto___14948);

return statearr_14946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14963 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14963 = (function (f,ch,meta14964){
this.f = f;
this.ch = ch;
this.meta14964 = meta14964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14965,meta14964__$1){
var self__ = this;
var _14965__$1 = this;
return (new cljs.core.async.t_cljs$core$async14963(self__.f,self__.ch,meta14964__$1));
}));

(cljs.core.async.t_cljs$core$async14963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14965){
var self__ = this;
var _14965__$1 = this;
return self__.meta14964;
}));

(cljs.core.async.t_cljs$core$async14963.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14963.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14963.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14963.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14963.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14966 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14966 = (function (f,ch,meta14964,_,fn1,meta14967){
this.f = f;
this.ch = ch;
this.meta14964 = meta14964;
this._ = _;
this.fn1 = fn1;
this.meta14967 = meta14967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14968,meta14967__$1){
var self__ = this;
var _14968__$1 = this;
return (new cljs.core.async.t_cljs$core$async14966(self__.f,self__.ch,self__.meta14964,self__._,self__.fn1,meta14967__$1));
}));

(cljs.core.async.t_cljs$core$async14966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14968){
var self__ = this;
var _14968__$1 = this;
return self__.meta14967;
}));

(cljs.core.async.t_cljs$core$async14966.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14966.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async14966.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14966.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__14962_SHARP_){
var G__14969 = (((p1__14962_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__14962_SHARP_) : self__.f.call(null,p1__14962_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__14969) : f1.call(null,G__14969));
});
}));

(cljs.core.async.t_cljs$core$async14966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14964,cljs.core.with_meta(cljs.core.cst$sym$__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t__cljs$$core$$async14963], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta14967], null);
}));

(cljs.core.async.t_cljs$core$async14966.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14966");

(cljs.core.async.t_cljs$core$async14966.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14966");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14966.
 */
cljs.core.async.__GT_t_cljs$core$async14966 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14966(f__$1,ch__$1,meta14964__$1,___$2,fn1__$1,meta14967){
return (new cljs.core.async.t_cljs$core$async14966(f__$1,ch__$1,meta14964__$1,___$2,fn1__$1,meta14967));
});

}

return (new cljs.core.async.t_cljs$core$async14966(self__.f,self__.ch,self__.meta14964,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__14970 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__14970) : self__.f.call(null,G__14970));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async14963.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14963.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async14963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14964], null);
}));

(cljs.core.async.t_cljs$core$async14963.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14963");

(cljs.core.async.t_cljs$core$async14963.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14963");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14963.
 */
cljs.core.async.__GT_t_cljs$core$async14963 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14963(f__$1,ch__$1,meta14964){
return (new cljs.core.async.t_cljs$core$async14963(f__$1,ch__$1,meta14964));
});

}

return (new cljs.core.async.t_cljs$core$async14963(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14971 = (function (f,ch,meta14972){
this.f = f;
this.ch = ch;
this.meta14972 = meta14972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14973,meta14972__$1){
var self__ = this;
var _14973__$1 = this;
return (new cljs.core.async.t_cljs$core$async14971(self__.f,self__.ch,meta14972__$1));
}));

(cljs.core.async.t_cljs$core$async14971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14973){
var self__ = this;
var _14973__$1 = this;
return self__.meta14972;
}));

(cljs.core.async.t_cljs$core$async14971.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14971.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14971.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14971.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14971.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14971.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async14971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14972], null);
}));

(cljs.core.async.t_cljs$core$async14971.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14971");

(cljs.core.async.t_cljs$core$async14971.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14971");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14971.
 */
cljs.core.async.__GT_t_cljs$core$async14971 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14971(f__$1,ch__$1,meta14972){
return (new cljs.core.async.t_cljs$core$async14971(f__$1,ch__$1,meta14972));
});

}

return (new cljs.core.async.t_cljs$core$async14971(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14974 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14974 = (function (p,ch,meta14975){
this.p = p;
this.ch = ch;
this.meta14975 = meta14975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14976,meta14975__$1){
var self__ = this;
var _14976__$1 = this;
return (new cljs.core.async.t_cljs$core$async14974(self__.p,self__.ch,meta14975__$1));
}));

(cljs.core.async.t_cljs$core$async14974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14976){
var self__ = this;
var _14976__$1 = this;
return self__.meta14975;
}));

(cljs.core.async.t_cljs$core$async14974.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14974.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14974.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14974.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14974.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14974.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14974.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async14974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14975], null);
}));

(cljs.core.async.t_cljs$core$async14974.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14974");

(cljs.core.async.t_cljs$core$async14974.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14974");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14974.
 */
cljs.core.async.__GT_t_cljs$core$async14974 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14974(p__$1,ch__$1,meta14975){
return (new cljs.core.async.t_cljs$core$async14974(p__$1,ch__$1,meta14975));
});

}

return (new cljs.core.async.t_cljs$core$async14974(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__14978 = arguments.length;
switch (G__14978) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13487__auto___15019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_14999){
var state_val_15000 = (state_14999[(1)]);
if((state_val_15000 === (7))){
var inst_14995 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
var statearr_15001_15020 = state_14999__$1;
(statearr_15001_15020[(2)] = inst_14995);

(statearr_15001_15020[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (1))){
var state_14999__$1 = state_14999;
var statearr_15002_15021 = state_14999__$1;
(statearr_15002_15021[(2)] = null);

(statearr_15002_15021[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (4))){
var inst_14981 = (state_14999[(7)]);
var inst_14981__$1 = (state_14999[(2)]);
var inst_14982 = (inst_14981__$1 == null);
var state_14999__$1 = (function (){var statearr_15003 = state_14999;
(statearr_15003[(7)] = inst_14981__$1);

return statearr_15003;
})();
if(cljs.core.truth_(inst_14982)){
var statearr_15004_15022 = state_14999__$1;
(statearr_15004_15022[(1)] = (5));

} else {
var statearr_15005_15023 = state_14999__$1;
(statearr_15005_15023[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (6))){
var inst_14981 = (state_14999[(7)]);
var inst_14986 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14981) : p.call(null,inst_14981));
var state_14999__$1 = state_14999;
if(cljs.core.truth_(inst_14986)){
var statearr_15006_15024 = state_14999__$1;
(statearr_15006_15024[(1)] = (8));

} else {
var statearr_15007_15025 = state_14999__$1;
(statearr_15007_15025[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (3))){
var inst_14997 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14999__$1,inst_14997);
} else {
if((state_val_15000 === (2))){
var state_14999__$1 = state_14999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14999__$1,(4),ch);
} else {
if((state_val_15000 === (11))){
var inst_14989 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
var statearr_15008_15026 = state_14999__$1;
(statearr_15008_15026[(2)] = inst_14989);

(statearr_15008_15026[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (9))){
var state_14999__$1 = state_14999;
var statearr_15009_15027 = state_14999__$1;
(statearr_15009_15027[(2)] = null);

(statearr_15009_15027[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (5))){
var inst_14984 = cljs.core.async.close_BANG_(out);
var state_14999__$1 = state_14999;
var statearr_15010_15028 = state_14999__$1;
(statearr_15010_15028[(2)] = inst_14984);

(statearr_15010_15028[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (10))){
var inst_14992 = (state_14999[(2)]);
var state_14999__$1 = (function (){var statearr_15011 = state_14999;
(statearr_15011[(8)] = inst_14992);

return statearr_15011;
})();
var statearr_15012_15029 = state_14999__$1;
(statearr_15012_15029[(2)] = null);

(statearr_15012_15029[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (8))){
var inst_14981 = (state_14999[(7)]);
var state_14999__$1 = state_14999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14999__$1,(11),out,inst_14981);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13413__auto__ = null;
var cljs$core$async$state_machine__13413__auto____0 = (function (){
var statearr_15013 = [null,null,null,null,null,null,null,null,null];
(statearr_15013[(0)] = cljs$core$async$state_machine__13413__auto__);

(statearr_15013[(1)] = (1));

return statearr_15013;
});
var cljs$core$async$state_machine__13413__auto____1 = (function (state_14999){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_14999);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e15014){var ex__13416__auto__ = e15014;
var statearr_15015_15030 = state_14999;
(statearr_15015_15030[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_14999[(4)]))){
var statearr_15016_15031 = state_14999;
(statearr_15016_15031[(1)] = cljs.core.first((state_14999[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__15032 = state_14999;
state_14999 = G__15032;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$state_machine__13413__auto__ = function(state_14999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13413__auto____1.call(this,state_14999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13413__auto____0;
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13413__auto____1;
return cljs$core$async$state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_15017 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_15017[(6)] = c__13487__auto___15019);

return statearr_15017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15034 = arguments.length;
switch (G__15034) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13487__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_15097){
var state_val_15098 = (state_15097[(1)]);
if((state_val_15098 === (7))){
var inst_15093 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
var statearr_15099_15138 = state_15097__$1;
(statearr_15099_15138[(2)] = inst_15093);

(statearr_15099_15138[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (20))){
var inst_15063 = (state_15097[(7)]);
var inst_15074 = (state_15097[(2)]);
var inst_15075 = cljs.core.next(inst_15063);
var inst_15049 = inst_15075;
var inst_15050 = null;
var inst_15051 = (0);
var inst_15052 = (0);
var state_15097__$1 = (function (){var statearr_15100 = state_15097;
(statearr_15100[(8)] = inst_15074);

(statearr_15100[(9)] = inst_15049);

(statearr_15100[(10)] = inst_15050);

(statearr_15100[(11)] = inst_15051);

(statearr_15100[(12)] = inst_15052);

return statearr_15100;
})();
var statearr_15101_15139 = state_15097__$1;
(statearr_15101_15139[(2)] = null);

(statearr_15101_15139[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (1))){
var state_15097__$1 = state_15097;
var statearr_15102_15140 = state_15097__$1;
(statearr_15102_15140[(2)] = null);

(statearr_15102_15140[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (4))){
var inst_15038 = (state_15097[(13)]);
var inst_15038__$1 = (state_15097[(2)]);
var inst_15039 = (inst_15038__$1 == null);
var state_15097__$1 = (function (){var statearr_15103 = state_15097;
(statearr_15103[(13)] = inst_15038__$1);

return statearr_15103;
})();
if(cljs.core.truth_(inst_15039)){
var statearr_15104_15141 = state_15097__$1;
(statearr_15104_15141[(1)] = (5));

} else {
var statearr_15105_15142 = state_15097__$1;
(statearr_15105_15142[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (15))){
var state_15097__$1 = state_15097;
var statearr_15109_15143 = state_15097__$1;
(statearr_15109_15143[(2)] = null);

(statearr_15109_15143[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (21))){
var state_15097__$1 = state_15097;
var statearr_15110_15144 = state_15097__$1;
(statearr_15110_15144[(2)] = null);

(statearr_15110_15144[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (13))){
var inst_15052 = (state_15097[(12)]);
var inst_15049 = (state_15097[(9)]);
var inst_15050 = (state_15097[(10)]);
var inst_15051 = (state_15097[(11)]);
var inst_15059 = (state_15097[(2)]);
var inst_15060 = (inst_15052 + (1));
var tmp15106 = inst_15049;
var tmp15107 = inst_15051;
var tmp15108 = inst_15050;
var inst_15049__$1 = tmp15106;
var inst_15050__$1 = tmp15108;
var inst_15051__$1 = tmp15107;
var inst_15052__$1 = inst_15060;
var state_15097__$1 = (function (){var statearr_15111 = state_15097;
(statearr_15111[(14)] = inst_15059);

(statearr_15111[(9)] = inst_15049__$1);

(statearr_15111[(10)] = inst_15050__$1);

(statearr_15111[(11)] = inst_15051__$1);

(statearr_15111[(12)] = inst_15052__$1);

return statearr_15111;
})();
var statearr_15112_15145 = state_15097__$1;
(statearr_15112_15145[(2)] = null);

(statearr_15112_15145[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (22))){
var state_15097__$1 = state_15097;
var statearr_15113_15146 = state_15097__$1;
(statearr_15113_15146[(2)] = null);

(statearr_15113_15146[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (6))){
var inst_15038 = (state_15097[(13)]);
var inst_15047 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15038) : f.call(null,inst_15038));
var inst_15048 = cljs.core.seq(inst_15047);
var inst_15049 = inst_15048;
var inst_15050 = null;
var inst_15051 = (0);
var inst_15052 = (0);
var state_15097__$1 = (function (){var statearr_15114 = state_15097;
(statearr_15114[(9)] = inst_15049);

(statearr_15114[(10)] = inst_15050);

(statearr_15114[(11)] = inst_15051);

(statearr_15114[(12)] = inst_15052);

return statearr_15114;
})();
var statearr_15115_15147 = state_15097__$1;
(statearr_15115_15147[(2)] = null);

(statearr_15115_15147[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (17))){
var inst_15063 = (state_15097[(7)]);
var inst_15067 = cljs.core.chunk_first(inst_15063);
var inst_15068 = cljs.core.chunk_rest(inst_15063);
var inst_15069 = cljs.core.count(inst_15067);
var inst_15049 = inst_15068;
var inst_15050 = inst_15067;
var inst_15051 = inst_15069;
var inst_15052 = (0);
var state_15097__$1 = (function (){var statearr_15116 = state_15097;
(statearr_15116[(9)] = inst_15049);

(statearr_15116[(10)] = inst_15050);

(statearr_15116[(11)] = inst_15051);

(statearr_15116[(12)] = inst_15052);

return statearr_15116;
})();
var statearr_15117_15148 = state_15097__$1;
(statearr_15117_15148[(2)] = null);

(statearr_15117_15148[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (3))){
var inst_15095 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15097__$1,inst_15095);
} else {
if((state_val_15098 === (12))){
var inst_15083 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
var statearr_15118_15149 = state_15097__$1;
(statearr_15118_15149[(2)] = inst_15083);

(statearr_15118_15149[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (2))){
var state_15097__$1 = state_15097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15097__$1,(4),in$);
} else {
if((state_val_15098 === (23))){
var inst_15091 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
var statearr_15119_15150 = state_15097__$1;
(statearr_15119_15150[(2)] = inst_15091);

(statearr_15119_15150[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (19))){
var inst_15078 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
var statearr_15120_15151 = state_15097__$1;
(statearr_15120_15151[(2)] = inst_15078);

(statearr_15120_15151[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (11))){
var inst_15049 = (state_15097[(9)]);
var inst_15063 = (state_15097[(7)]);
var inst_15063__$1 = cljs.core.seq(inst_15049);
var state_15097__$1 = (function (){var statearr_15121 = state_15097;
(statearr_15121[(7)] = inst_15063__$1);

return statearr_15121;
})();
if(inst_15063__$1){
var statearr_15122_15152 = state_15097__$1;
(statearr_15122_15152[(1)] = (14));

} else {
var statearr_15123_15153 = state_15097__$1;
(statearr_15123_15153[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (9))){
var inst_15085 = (state_15097[(2)]);
var inst_15086 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15097__$1 = (function (){var statearr_15124 = state_15097;
(statearr_15124[(15)] = inst_15085);

return statearr_15124;
})();
if(cljs.core.truth_(inst_15086)){
var statearr_15125_15154 = state_15097__$1;
(statearr_15125_15154[(1)] = (21));

} else {
var statearr_15126_15155 = state_15097__$1;
(statearr_15126_15155[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (5))){
var inst_15041 = cljs.core.async.close_BANG_(out);
var state_15097__$1 = state_15097;
var statearr_15127_15156 = state_15097__$1;
(statearr_15127_15156[(2)] = inst_15041);

(statearr_15127_15156[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (14))){
var inst_15063 = (state_15097[(7)]);
var inst_15065 = cljs.core.chunked_seq_QMARK_(inst_15063);
var state_15097__$1 = state_15097;
if(inst_15065){
var statearr_15128_15157 = state_15097__$1;
(statearr_15128_15157[(1)] = (17));

} else {
var statearr_15129_15158 = state_15097__$1;
(statearr_15129_15158[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (16))){
var inst_15081 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
var statearr_15130_15159 = state_15097__$1;
(statearr_15130_15159[(2)] = inst_15081);

(statearr_15130_15159[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15098 === (10))){
var inst_15050 = (state_15097[(10)]);
var inst_15052 = (state_15097[(12)]);
var inst_15057 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15050,inst_15052);
var state_15097__$1 = state_15097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15097__$1,(13),out,inst_15057);
} else {
if((state_val_15098 === (18))){
var inst_15063 = (state_15097[(7)]);
var inst_15072 = cljs.core.first(inst_15063);
var state_15097__$1 = state_15097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15097__$1,(20),out,inst_15072);
} else {
if((state_val_15098 === (8))){
var inst_15052 = (state_15097[(12)]);
var inst_15051 = (state_15097[(11)]);
var inst_15054 = (inst_15052 < inst_15051);
var inst_15055 = inst_15054;
var state_15097__$1 = state_15097;
if(cljs.core.truth_(inst_15055)){
var statearr_15131_15160 = state_15097__$1;
(statearr_15131_15160[(1)] = (10));

} else {
var statearr_15132_15161 = state_15097__$1;
(statearr_15132_15161[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13413__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13413__auto____0 = (function (){
var statearr_15133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15133[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13413__auto__);

(statearr_15133[(1)] = (1));

return statearr_15133;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13413__auto____1 = (function (state_15097){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_15097);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e15134){var ex__13416__auto__ = e15134;
var statearr_15135_15162 = state_15097;
(statearr_15135_15162[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_15097[(4)]))){
var statearr_15136_15163 = state_15097;
(statearr_15136_15163[(1)] = cljs.core.first((state_15097[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__15164 = state_15097;
state_15097 = G__15164;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13413__auto__ = function(state_15097){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13413__auto____1.call(this,state_15097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13413__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13413__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_15137 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_15137[(6)] = c__13487__auto__);

return statearr_15137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));

return c__13487__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15166 = arguments.length;
switch (G__15166) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15169 = arguments.length;
switch (G__15169) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15172 = arguments.length;
switch (G__15172) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13487__auto___15220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_15196){
var state_val_15197 = (state_15196[(1)]);
if((state_val_15197 === (7))){
var inst_15191 = (state_15196[(2)]);
var state_15196__$1 = state_15196;
var statearr_15198_15221 = state_15196__$1;
(statearr_15198_15221[(2)] = inst_15191);

(statearr_15198_15221[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15197 === (1))){
var inst_15173 = null;
var state_15196__$1 = (function (){var statearr_15199 = state_15196;
(statearr_15199[(7)] = inst_15173);

return statearr_15199;
})();
var statearr_15200_15222 = state_15196__$1;
(statearr_15200_15222[(2)] = null);

(statearr_15200_15222[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15197 === (4))){
var inst_15176 = (state_15196[(8)]);
var inst_15176__$1 = (state_15196[(2)]);
var inst_15177 = (inst_15176__$1 == null);
var inst_15178 = cljs.core.not(inst_15177);
var state_15196__$1 = (function (){var statearr_15201 = state_15196;
(statearr_15201[(8)] = inst_15176__$1);

return statearr_15201;
})();
if(inst_15178){
var statearr_15202_15223 = state_15196__$1;
(statearr_15202_15223[(1)] = (5));

} else {
var statearr_15203_15224 = state_15196__$1;
(statearr_15203_15224[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15197 === (6))){
var state_15196__$1 = state_15196;
var statearr_15204_15225 = state_15196__$1;
(statearr_15204_15225[(2)] = null);

(statearr_15204_15225[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15197 === (3))){
var inst_15193 = (state_15196[(2)]);
var inst_15194 = cljs.core.async.close_BANG_(out);
var state_15196__$1 = (function (){var statearr_15205 = state_15196;
(statearr_15205[(9)] = inst_15193);

return statearr_15205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15196__$1,inst_15194);
} else {
if((state_val_15197 === (2))){
var state_15196__$1 = state_15196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15196__$1,(4),ch);
} else {
if((state_val_15197 === (11))){
var inst_15176 = (state_15196[(8)]);
var inst_15185 = (state_15196[(2)]);
var inst_15173 = inst_15176;
var state_15196__$1 = (function (){var statearr_15206 = state_15196;
(statearr_15206[(10)] = inst_15185);

(statearr_15206[(7)] = inst_15173);

return statearr_15206;
})();
var statearr_15207_15226 = state_15196__$1;
(statearr_15207_15226[(2)] = null);

(statearr_15207_15226[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15197 === (9))){
var inst_15176 = (state_15196[(8)]);
var state_15196__$1 = state_15196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15196__$1,(11),out,inst_15176);
} else {
if((state_val_15197 === (5))){
var inst_15176 = (state_15196[(8)]);
var inst_15173 = (state_15196[(7)]);
var inst_15180 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15176,inst_15173);
var state_15196__$1 = state_15196;
if(inst_15180){
var statearr_15209_15227 = state_15196__$1;
(statearr_15209_15227[(1)] = (8));

} else {
var statearr_15210_15228 = state_15196__$1;
(statearr_15210_15228[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15197 === (10))){
var inst_15188 = (state_15196[(2)]);
var state_15196__$1 = state_15196;
var statearr_15211_15229 = state_15196__$1;
(statearr_15211_15229[(2)] = inst_15188);

(statearr_15211_15229[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15197 === (8))){
var inst_15173 = (state_15196[(7)]);
var tmp15208 = inst_15173;
var inst_15173__$1 = tmp15208;
var state_15196__$1 = (function (){var statearr_15212 = state_15196;
(statearr_15212[(7)] = inst_15173__$1);

return statearr_15212;
})();
var statearr_15213_15230 = state_15196__$1;
(statearr_15213_15230[(2)] = null);

(statearr_15213_15230[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13413__auto__ = null;
var cljs$core$async$state_machine__13413__auto____0 = (function (){
var statearr_15214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15214[(0)] = cljs$core$async$state_machine__13413__auto__);

(statearr_15214[(1)] = (1));

return statearr_15214;
});
var cljs$core$async$state_machine__13413__auto____1 = (function (state_15196){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_15196);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e15215){var ex__13416__auto__ = e15215;
var statearr_15216_15231 = state_15196;
(statearr_15216_15231[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_15196[(4)]))){
var statearr_15217_15232 = state_15196;
(statearr_15217_15232[(1)] = cljs.core.first((state_15196[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__15233 = state_15196;
state_15196 = G__15233;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$state_machine__13413__auto__ = function(state_15196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13413__auto____1.call(this,state_15196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13413__auto____0;
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13413__auto____1;
return cljs$core$async$state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_15218 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_15218[(6)] = c__13487__auto___15220);

return statearr_15218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15235 = arguments.length;
switch (G__15235) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13487__auto___15302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_15273){
var state_val_15274 = (state_15273[(1)]);
if((state_val_15274 === (7))){
var inst_15269 = (state_15273[(2)]);
var state_15273__$1 = state_15273;
var statearr_15275_15303 = state_15273__$1;
(statearr_15275_15303[(2)] = inst_15269);

(statearr_15275_15303[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15274 === (1))){
var inst_15236 = (new Array(n));
var inst_15237 = inst_15236;
var inst_15238 = (0);
var state_15273__$1 = (function (){var statearr_15276 = state_15273;
(statearr_15276[(7)] = inst_15237);

(statearr_15276[(8)] = inst_15238);

return statearr_15276;
})();
var statearr_15277_15304 = state_15273__$1;
(statearr_15277_15304[(2)] = null);

(statearr_15277_15304[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15274 === (4))){
var inst_15241 = (state_15273[(9)]);
var inst_15241__$1 = (state_15273[(2)]);
var inst_15242 = (inst_15241__$1 == null);
var inst_15243 = cljs.core.not(inst_15242);
var state_15273__$1 = (function (){var statearr_15278 = state_15273;
(statearr_15278[(9)] = inst_15241__$1);

return statearr_15278;
})();
if(inst_15243){
var statearr_15279_15305 = state_15273__$1;
(statearr_15279_15305[(1)] = (5));

} else {
var statearr_15280_15306 = state_15273__$1;
(statearr_15280_15306[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15274 === (15))){
var inst_15263 = (state_15273[(2)]);
var state_15273__$1 = state_15273;
var statearr_15281_15307 = state_15273__$1;
(statearr_15281_15307[(2)] = inst_15263);

(statearr_15281_15307[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15274 === (13))){
var state_15273__$1 = state_15273;
var statearr_15282_15308 = state_15273__$1;
(statearr_15282_15308[(2)] = null);

(statearr_15282_15308[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15274 === (6))){
var inst_15238 = (state_15273[(8)]);
var inst_15259 = (inst_15238 > (0));
var state_15273__$1 = state_15273;
if(cljs.core.truth_(inst_15259)){
var statearr_15283_15309 = state_15273__$1;
(statearr_15283_15309[(1)] = (12));

} else {
var statearr_15284_15310 = state_15273__$1;
(statearr_15284_15310[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15274 === (3))){
var inst_15271 = (state_15273[(2)]);
var state_15273__$1 = state_15273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15273__$1,inst_15271);
} else {
if((state_val_15274 === (12))){
var inst_15237 = (state_15273[(7)]);
var inst_15261 = cljs.core.vec(inst_15237);
var state_15273__$1 = state_15273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15273__$1,(15),out,inst_15261);
} else {
if((state_val_15274 === (2))){
var state_15273__$1 = state_15273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15273__$1,(4),ch);
} else {
if((state_val_15274 === (11))){
var inst_15253 = (state_15273[(2)]);
var inst_15254 = (new Array(n));
var inst_15237 = inst_15254;
var inst_15238 = (0);
var state_15273__$1 = (function (){var statearr_15285 = state_15273;
(statearr_15285[(10)] = inst_15253);

(statearr_15285[(7)] = inst_15237);

(statearr_15285[(8)] = inst_15238);

return statearr_15285;
})();
var statearr_15286_15311 = state_15273__$1;
(statearr_15286_15311[(2)] = null);

(statearr_15286_15311[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15274 === (9))){
var inst_15237 = (state_15273[(7)]);
var inst_15251 = cljs.core.vec(inst_15237);
var state_15273__$1 = state_15273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15273__$1,(11),out,inst_15251);
} else {
if((state_val_15274 === (5))){
var inst_15237 = (state_15273[(7)]);
var inst_15238 = (state_15273[(8)]);
var inst_15241 = (state_15273[(9)]);
var inst_15246 = (state_15273[(11)]);
var inst_15245 = (inst_15237[inst_15238] = inst_15241);
var inst_15246__$1 = (inst_15238 + (1));
var inst_15247 = (inst_15246__$1 < n);
var state_15273__$1 = (function (){var statearr_15287 = state_15273;
(statearr_15287[(12)] = inst_15245);

(statearr_15287[(11)] = inst_15246__$1);

return statearr_15287;
})();
if(cljs.core.truth_(inst_15247)){
var statearr_15288_15312 = state_15273__$1;
(statearr_15288_15312[(1)] = (8));

} else {
var statearr_15289_15313 = state_15273__$1;
(statearr_15289_15313[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15274 === (14))){
var inst_15266 = (state_15273[(2)]);
var inst_15267 = cljs.core.async.close_BANG_(out);
var state_15273__$1 = (function (){var statearr_15291 = state_15273;
(statearr_15291[(13)] = inst_15266);

return statearr_15291;
})();
var statearr_15292_15314 = state_15273__$1;
(statearr_15292_15314[(2)] = inst_15267);

(statearr_15292_15314[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15274 === (10))){
var inst_15257 = (state_15273[(2)]);
var state_15273__$1 = state_15273;
var statearr_15293_15315 = state_15273__$1;
(statearr_15293_15315[(2)] = inst_15257);

(statearr_15293_15315[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15274 === (8))){
var inst_15237 = (state_15273[(7)]);
var inst_15246 = (state_15273[(11)]);
var tmp15290 = inst_15237;
var inst_15237__$1 = tmp15290;
var inst_15238 = inst_15246;
var state_15273__$1 = (function (){var statearr_15294 = state_15273;
(statearr_15294[(7)] = inst_15237__$1);

(statearr_15294[(8)] = inst_15238);

return statearr_15294;
})();
var statearr_15295_15316 = state_15273__$1;
(statearr_15295_15316[(2)] = null);

(statearr_15295_15316[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13413__auto__ = null;
var cljs$core$async$state_machine__13413__auto____0 = (function (){
var statearr_15296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15296[(0)] = cljs$core$async$state_machine__13413__auto__);

(statearr_15296[(1)] = (1));

return statearr_15296;
});
var cljs$core$async$state_machine__13413__auto____1 = (function (state_15273){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_15273);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e15297){var ex__13416__auto__ = e15297;
var statearr_15298_15317 = state_15273;
(statearr_15298_15317[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_15273[(4)]))){
var statearr_15299_15318 = state_15273;
(statearr_15299_15318[(1)] = cljs.core.first((state_15273[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__15319 = state_15273;
state_15273 = G__15319;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$state_machine__13413__auto__ = function(state_15273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13413__auto____1.call(this,state_15273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13413__auto____0;
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13413__auto____1;
return cljs$core$async$state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_15300 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_15300[(6)] = c__13487__auto___15302);

return statearr_15300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15321 = arguments.length;
switch (G__15321) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13487__auto___15399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_15366){
var state_val_15367 = (state_15366[(1)]);
if((state_val_15367 === (7))){
var inst_15362 = (state_15366[(2)]);
var state_15366__$1 = state_15366;
var statearr_15368_15400 = state_15366__$1;
(statearr_15368_15400[(2)] = inst_15362);

(statearr_15368_15400[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15367 === (1))){
var inst_15322 = [];
var inst_15323 = inst_15322;
var inst_15324 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_15366__$1 = (function (){var statearr_15369 = state_15366;
(statearr_15369[(7)] = inst_15323);

(statearr_15369[(8)] = inst_15324);

return statearr_15369;
})();
var statearr_15370_15401 = state_15366__$1;
(statearr_15370_15401[(2)] = null);

(statearr_15370_15401[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15367 === (4))){
var inst_15327 = (state_15366[(9)]);
var inst_15327__$1 = (state_15366[(2)]);
var inst_15328 = (inst_15327__$1 == null);
var inst_15329 = cljs.core.not(inst_15328);
var state_15366__$1 = (function (){var statearr_15371 = state_15366;
(statearr_15371[(9)] = inst_15327__$1);

return statearr_15371;
})();
if(inst_15329){
var statearr_15372_15402 = state_15366__$1;
(statearr_15372_15402[(1)] = (5));

} else {
var statearr_15373_15403 = state_15366__$1;
(statearr_15373_15403[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15367 === (15))){
var inst_15323 = (state_15366[(7)]);
var inst_15354 = cljs.core.vec(inst_15323);
var state_15366__$1 = state_15366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15366__$1,(18),out,inst_15354);
} else {
if((state_val_15367 === (13))){
var inst_15349 = (state_15366[(2)]);
var state_15366__$1 = state_15366;
var statearr_15374_15404 = state_15366__$1;
(statearr_15374_15404[(2)] = inst_15349);

(statearr_15374_15404[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15367 === (6))){
var inst_15323 = (state_15366[(7)]);
var inst_15351 = inst_15323.length;
var inst_15352 = (inst_15351 > (0));
var state_15366__$1 = state_15366;
if(cljs.core.truth_(inst_15352)){
var statearr_15375_15405 = state_15366__$1;
(statearr_15375_15405[(1)] = (15));

} else {
var statearr_15376_15406 = state_15366__$1;
(statearr_15376_15406[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15367 === (17))){
var inst_15359 = (state_15366[(2)]);
var inst_15360 = cljs.core.async.close_BANG_(out);
var state_15366__$1 = (function (){var statearr_15377 = state_15366;
(statearr_15377[(10)] = inst_15359);

return statearr_15377;
})();
var statearr_15378_15407 = state_15366__$1;
(statearr_15378_15407[(2)] = inst_15360);

(statearr_15378_15407[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15367 === (3))){
var inst_15364 = (state_15366[(2)]);
var state_15366__$1 = state_15366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15366__$1,inst_15364);
} else {
if((state_val_15367 === (12))){
var inst_15323 = (state_15366[(7)]);
var inst_15342 = cljs.core.vec(inst_15323);
var state_15366__$1 = state_15366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15366__$1,(14),out,inst_15342);
} else {
if((state_val_15367 === (2))){
var state_15366__$1 = state_15366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15366__$1,(4),ch);
} else {
if((state_val_15367 === (11))){
var inst_15323 = (state_15366[(7)]);
var inst_15327 = (state_15366[(9)]);
var inst_15331 = (state_15366[(11)]);
var inst_15339 = inst_15323.push(inst_15327);
var tmp15379 = inst_15323;
var inst_15323__$1 = tmp15379;
var inst_15324 = inst_15331;
var state_15366__$1 = (function (){var statearr_15380 = state_15366;
(statearr_15380[(12)] = inst_15339);

(statearr_15380[(7)] = inst_15323__$1);

(statearr_15380[(8)] = inst_15324);

return statearr_15380;
})();
var statearr_15381_15408 = state_15366__$1;
(statearr_15381_15408[(2)] = null);

(statearr_15381_15408[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15367 === (9))){
var inst_15324 = (state_15366[(8)]);
var inst_15335 = cljs.core.keyword_identical_QMARK_(inst_15324,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var state_15366__$1 = state_15366;
var statearr_15382_15409 = state_15366__$1;
(statearr_15382_15409[(2)] = inst_15335);

(statearr_15382_15409[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15367 === (5))){
var inst_15327 = (state_15366[(9)]);
var inst_15331 = (state_15366[(11)]);
var inst_15324 = (state_15366[(8)]);
var inst_15332 = (state_15366[(13)]);
var inst_15331__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15327) : f.call(null,inst_15327));
var inst_15332__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15331__$1,inst_15324);
var state_15366__$1 = (function (){var statearr_15383 = state_15366;
(statearr_15383[(11)] = inst_15331__$1);

(statearr_15383[(13)] = inst_15332__$1);

return statearr_15383;
})();
if(inst_15332__$1){
var statearr_15384_15410 = state_15366__$1;
(statearr_15384_15410[(1)] = (8));

} else {
var statearr_15385_15411 = state_15366__$1;
(statearr_15385_15411[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15367 === (14))){
var inst_15327 = (state_15366[(9)]);
var inst_15331 = (state_15366[(11)]);
var inst_15344 = (state_15366[(2)]);
var inst_15345 = [];
var inst_15346 = inst_15345.push(inst_15327);
var inst_15323 = inst_15345;
var inst_15324 = inst_15331;
var state_15366__$1 = (function (){var statearr_15386 = state_15366;
(statearr_15386[(14)] = inst_15344);

(statearr_15386[(15)] = inst_15346);

(statearr_15386[(7)] = inst_15323);

(statearr_15386[(8)] = inst_15324);

return statearr_15386;
})();
var statearr_15387_15412 = state_15366__$1;
(statearr_15387_15412[(2)] = null);

(statearr_15387_15412[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15367 === (16))){
var state_15366__$1 = state_15366;
var statearr_15388_15413 = state_15366__$1;
(statearr_15388_15413[(2)] = null);

(statearr_15388_15413[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15367 === (10))){
var inst_15337 = (state_15366[(2)]);
var state_15366__$1 = state_15366;
if(cljs.core.truth_(inst_15337)){
var statearr_15389_15414 = state_15366__$1;
(statearr_15389_15414[(1)] = (11));

} else {
var statearr_15390_15415 = state_15366__$1;
(statearr_15390_15415[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15367 === (18))){
var inst_15356 = (state_15366[(2)]);
var state_15366__$1 = state_15366;
var statearr_15391_15416 = state_15366__$1;
(statearr_15391_15416[(2)] = inst_15356);

(statearr_15391_15416[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15367 === (8))){
var inst_15332 = (state_15366[(13)]);
var state_15366__$1 = state_15366;
var statearr_15392_15417 = state_15366__$1;
(statearr_15392_15417[(2)] = inst_15332);

(statearr_15392_15417[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13413__auto__ = null;
var cljs$core$async$state_machine__13413__auto____0 = (function (){
var statearr_15393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15393[(0)] = cljs$core$async$state_machine__13413__auto__);

(statearr_15393[(1)] = (1));

return statearr_15393;
});
var cljs$core$async$state_machine__13413__auto____1 = (function (state_15366){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_15366);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e15394){var ex__13416__auto__ = e15394;
var statearr_15395_15418 = state_15366;
(statearr_15395_15418[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_15366[(4)]))){
var statearr_15396_15419 = state_15366;
(statearr_15396_15419[(1)] = cljs.core.first((state_15366[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__15420 = state_15366;
state_15366 = G__15420;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs$core$async$state_machine__13413__auto__ = function(state_15366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13413__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13413__auto____1.call(this,state_15366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13413__auto____0;
cljs$core$async$state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13413__auto____1;
return cljs$core$async$state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_15397 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_15397[(6)] = c__13487__auto___15399);

return statearr_15397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

