// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5804__auto__ = (function (){var fexpr__15442 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__15442.cljs$core$IFn$_invoke$arity$1 ? fexpr__15442.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__15442.call(null,channel));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var req = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15443){
var vec__15444 = p__15443;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15444,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15444,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__15447 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__15447)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__15447)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__15447)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__15447)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__15447)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15447)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15447)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__15448){
var map__15449 = p__15448;
var map__15449__$1 = cljs.core.__destructure_map(map__15449);
var request = map__15449__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15449__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15449__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15449__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__5002__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__15450 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__15450,default_headers);

cljs_http.core.apply_response_type_BANG_(G__15450,response_type);

G__15450.setTimeoutInterval(timeout);

G__15450.setWithCredentials(send_credentials);

return G__15450;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__15451){
var map__15452 = p__15451;
var map__15452__$1 = cljs.core.__destructure_map(map__15452);
var request = map__15452__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15452__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15452__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15452__$1,cljs.core.cst$kw$body);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15452__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15452__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__5002__auto__ = request_method;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__15453 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__15453) : cljs_http.core.error_kw.call(null,G__15453));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_15477 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});
var G__15454_15478 = xhr;
G__15454_15478.setProgressEventsEnabled(true);

G__15454_15478.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_15477,cljs.core.cst$kw$upload));

G__15454_15478.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_15477,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__13487__auto___15479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_15465){
var state_val_15466 = (state_15465[(1)]);
if((state_val_15466 === (1))){
var state_15465__$1 = state_15465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15465__$1,(2),cancel);
} else {
if((state_val_15466 === (2))){
var inst_15456 = (state_15465[(2)]);
var inst_15457 = xhr.isComplete();
var inst_15458 = cljs.core.not(inst_15457);
var state_15465__$1 = (function (){var statearr_15467 = state_15465;
(statearr_15467[(7)] = inst_15456);

return statearr_15467;
})();
if(inst_15458){
var statearr_15468_15480 = state_15465__$1;
(statearr_15468_15480[(1)] = (3));

} else {
var statearr_15469_15481 = state_15465__$1;
(statearr_15469_15481[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15466 === (3))){
var inst_15460 = xhr.abort();
var state_15465__$1 = state_15465;
var statearr_15470_15482 = state_15465__$1;
(statearr_15470_15482[(2)] = inst_15460);

(statearr_15470_15482[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15466 === (4))){
var state_15465__$1 = state_15465;
var statearr_15471_15483 = state_15465__$1;
(statearr_15471_15483[(2)] = null);

(statearr_15471_15483[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15466 === (5))){
var inst_15463 = (state_15465[(2)]);
var state_15465__$1 = state_15465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15465__$1,inst_15463);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__13413__auto__ = null;
var cljs_http$core$xhr_$_state_machine__13413__auto____0 = (function (){
var statearr_15472 = [null,null,null,null,null,null,null,null];
(statearr_15472[(0)] = cljs_http$core$xhr_$_state_machine__13413__auto__);

(statearr_15472[(1)] = (1));

return statearr_15472;
});
var cljs_http$core$xhr_$_state_machine__13413__auto____1 = (function (state_15465){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_15465);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e15473){var ex__13416__auto__ = e15473;
var statearr_15474_15484 = state_15465;
(statearr_15474_15484[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_15465[(4)]))){
var statearr_15475_15485 = state_15465;
(statearr_15475_15485[(1)] = cljs.core.first((state_15465[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__15486 = state_15465;
state_15465 = G__15486;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__13413__auto__ = function(state_15465){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__13413__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__13413__auto____1.call(this,state_15465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__13413__auto____0;
cljs_http$core$xhr_$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__13413__auto____1;
return cljs_http$core$xhr_$_state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_15476 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_15476[(6)] = c__13487__auto___15479);

return statearr_15476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__15487){
var map__15488 = p__15487;
var map__15488__$1 = cljs.core.__destructure_map(map__15488);
var request = map__15488__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15488__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15488__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15488__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15488__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_15501 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_15501], null));

if(cljs.core.truth_(cancel)){
var c__13487__auto___15502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13488__auto__ = (function (){var switch__13412__auto__ = (function (state_15493){
var state_val_15494 = (state_15493[(1)]);
if((state_val_15494 === (1))){
var state_15493__$1 = state_15493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15493__$1,(2),cancel);
} else {
if((state_val_15494 === (2))){
var inst_15490 = (state_15493[(2)]);
var inst_15491 = jsonp.cancel(req_15501);
var state_15493__$1 = (function (){var statearr_15495 = state_15493;
(statearr_15495[(7)] = inst_15490);

return statearr_15495;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15493__$1,inst_15491);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__13413__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__13413__auto____0 = (function (){
var statearr_15496 = [null,null,null,null,null,null,null,null];
(statearr_15496[(0)] = cljs_http$core$jsonp_$_state_machine__13413__auto__);

(statearr_15496[(1)] = (1));

return statearr_15496;
});
var cljs_http$core$jsonp_$_state_machine__13413__auto____1 = (function (state_15493){
while(true){
var ret_value__13414__auto__ = (function (){try{while(true){
var result__13415__auto__ = switch__13412__auto__(state_15493);
if(cljs.core.keyword_identical_QMARK_(result__13415__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13415__auto__;
}
break;
}
}catch (e15497){var ex__13416__auto__ = e15497;
var statearr_15498_15503 = state_15493;
(statearr_15498_15503[(2)] = ex__13416__auto__);


if(cljs.core.seq((state_15493[(4)]))){
var statearr_15499_15504 = state_15493;
(statearr_15499_15504[(1)] = cljs.core.first((state_15493[(4)])));

} else {
throw ex__13416__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13414__auto__,cljs.core.cst$kw$recur)){
var G__15505 = state_15493;
state_15493 = G__15505;
continue;
} else {
return ret_value__13414__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__13413__auto__ = function(state_15493){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__13413__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__13413__auto____1.call(this,state_15493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__13413__auto____0;
cljs_http$core$jsonp_$_state_machine__13413__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__13413__auto____1;
return cljs_http$core$jsonp_$_state_machine__13413__auto__;
})()
})();
var state__13489__auto__ = (function (){var statearr_15500 = (f__13488__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13488__auto__.cljs$core$IFn$_invoke$arity$0() : f__13488__auto__.call(null));
(statearr_15500[(6)] = c__13487__auto___15502);

return statearr_15500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13489__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__15506){
var map__15507 = p__15506;
var map__15507__$1 = cljs.core.__destructure_map(map__15507);
var request = map__15507__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15507__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
