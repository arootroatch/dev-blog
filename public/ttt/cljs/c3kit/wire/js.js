// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('c3kit.wire.js');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.apron.schema');
goog.require('c3kit.apron.time');
goog.require('cljs_http.client');
goog.require('clojure.string');
goog.require('goog.History');
goog.require('goog.object');
goog.scope(function(){
c3kit.wire.js.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * DEPRECATED: Use 'e-code' instead.
 */
c3kit.wire.js.e_key_code = (function c3kit$wire$js$e_key_code(e){
return e.keyCode;
});
c3kit.wire.js.e_code = (function c3kit$wire$js$e_code(e){
return e.code;
});
/**
 * On macOS, this is the ⌥ Option key.
 */
c3kit.wire.js.alt_key_QMARK_ = (function c3kit$wire$js$alt_key_QMARK_(e){
return e.altKey;
});
/**
 * On macOS, this is the ⌘ Command key.
 */
c3kit.wire.js.meta_key_QMARK_ = (function c3kit$wire$js$meta_key_QMARK_(e){
return e.metaKey;
});
c3kit.wire.js.ctrl_key_QMARK_ = (function c3kit$wire$js$ctrl_key_QMARK_(e){
return e.ctrlKey;
});
c3kit.wire.js.shift_key_QMARK_ = (function c3kit$wire$js$shift_key_QMARK_(e){
return e.shiftKey;
});
c3kit.wire.js.BACKSPACE = "Backspace";
c3kit.wire.js.TAB = "Tab";
c3kit.wire.js.ENTER = "Enter";
c3kit.wire.js.SHIFTLEFT = "ShiftLeft";
c3kit.wire.js.SHIFTRIGHT = "ShiftRight";
c3kit.wire.js.ESC = "Escape";
c3kit.wire.js.SPACE = "Space";
c3kit.wire.js.LEFT = "ArrowLeft";
c3kit.wire.js.UP = "ArrowUp";
c3kit.wire.js.RIGHT = "ArrowRight";
c3kit.wire.js.DOWN = "ArrowDown";
c3kit.wire.js.DELETE = "Delete";
c3kit.wire.js.DIGIT0 = "Digit0";
c3kit.wire.js.DIGIT1 = "Digit1";
c3kit.wire.js.DIGIT2 = "Digit2";
c3kit.wire.js.DIGIT3 = "Digit3";
c3kit.wire.js.DIGIT4 = "Digit4";
c3kit.wire.js.DIGIT5 = "Digit5";
c3kit.wire.js.DIGIT6 = "Digit6";
c3kit.wire.js.DIGIT7 = "Digit7";
c3kit.wire.js.DIGIT8 = "Digit8";
c3kit.wire.js.DIGIT9 = "Digit9";
c3kit.wire.js.NUMPAD_PLUS_ = "NumpadAdd";
c3kit.wire.js.COMMA = "Comma";
c3kit.wire.js.e_code_QMARK_ = (function c3kit$wire$js$e_code_QMARK_(var_args){
var G__18772 = arguments.length;
switch (G__18772) {
case 1:
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (code){
return (function (e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(code,e);
});
}));

(c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (code,e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.e_code(e),code);
}));

(c3kit.wire.js.e_code_QMARK_.cljs$lang$maxFixedArity = 2);

c3kit.wire.js.BACKSPACE_QMARK_ = (function c3kit$wire$js$BACKSPACE_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.BACKSPACE,e);
});
c3kit.wire.js.TAB_QMARK_ = (function c3kit$wire$js$TAB_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.TAB,e);
});
c3kit.wire.js.ENTER_QMARK_ = (function c3kit$wire$js$ENTER_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.ENTER,e);
});
c3kit.wire.js.SHIFT_QMARK_ = (function c3kit$wire$js$SHIFT_QMARK_(e){
return ((c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.SHIFTLEFT,e)) || (c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.SHIFTRIGHT,e)));
});
c3kit.wire.js.ESC_QMARK_ = (function c3kit$wire$js$ESC_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.ESC,e);
});
c3kit.wire.js.SPACE_QMARK_ = (function c3kit$wire$js$SPACE_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.SPACE,e);
});
c3kit.wire.js.LEFT_QMARK_ = (function c3kit$wire$js$LEFT_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.LEFT,e);
});
c3kit.wire.js.UP_QMARK_ = (function c3kit$wire$js$UP_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.UP,e);
});
c3kit.wire.js.RIGHT_QMARK_ = (function c3kit$wire$js$RIGHT_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.RIGHT,e);
});
c3kit.wire.js.DOWN_QMARK_ = (function c3kit$wire$js$DOWN_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.DOWN,e);
});
c3kit.wire.js.DELETE_QMARK_ = (function c3kit$wire$js$DELETE_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.DELETE,e);
});
c3kit.wire.js.NUMPAD_PLUS__QMARK_ = (function c3kit$wire$js$NUMPAD_PLUS__QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.NUMPAD_PLUS_,e);
});
c3kit.wire.js.COMMA_QMARK_ = (function c3kit$wire$js$COMMA_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.COMMA,e);
});
c3kit.wire.js.key_modifier_QMARK_ = (function c3kit$wire$js$key_modifier_QMARK_(e,modifier){
try{return e.getModifierState(modifier);
}catch (e18774){var e__$1 = e18774;
return false;
}});
c3kit.wire.js.shift_modifier_QMARK_ = (function c3kit$wire$js$shift_modifier_QMARK_(e){
return c3kit.wire.js.key_modifier_QMARK_(e,"Shift");
});
c3kit.wire.js.ctl_modifier_QMARK_ = (function c3kit$wire$js$ctl_modifier_QMARK_(e){
return c3kit.wire.js.key_modifier_QMARK_(e,"Control");
});
c3kit.wire.js.alt_modifier_QMARK_ = (function c3kit$wire$js$alt_modifier_QMARK_(e){
return c3kit.wire.js.key_modifier_QMARK_(e,"Alt");
});
c3kit.wire.js.o_get = (function c3kit$wire$js$o_get(var_args){
var G__18776 = arguments.length;
switch (G__18776) {
case 2:
return c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,key){
return c3kit.wire.js.goog$module$goog$object.get.call(null,js_obj,key,null);
}));

(c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$3 = (function (js_obj,key,default$){
return c3kit.wire.js.goog$module$goog$object.get.call(null,js_obj,key,default$);
}));

(c3kit.wire.js.o_get.cljs$lang$maxFixedArity = 3);

c3kit.wire.js.o_get_in = (function c3kit$wire$js$o_get_in(var_args){
var G__18779 = arguments.length;
switch (G__18779) {
case 2:
return c3kit.wire.js.o_get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.js.o_get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.o_get_in.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(c3kit.wire.js.o_get,js_obj,ks);
}));

(c3kit.wire.js.o_get_in.cljs$core$IFn$_invoke$arity$3 = (function (js_obj,ks,default$){
var or__5002__auto__ = c3kit.wire.js.o_get_in.cljs$core$IFn$_invoke$arity$2(js_obj,ks);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(c3kit.wire.js.o_get_in.cljs$lang$maxFixedArity = 3);

c3kit.wire.js.o_set = (function c3kit$wire$js$o_set(js_obj,key,value){
return c3kit.wire.js.goog$module$goog$object.set.call(null,js_obj,key,value);
});
/**
 * Update a JavaScript object key according to a function, f,
 * applied to the current value followed by args.
 */
c3kit.wire.js.o_update_BANG_ = (function c3kit$wire$js$o_update_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18785 = arguments.length;
var i__5727__auto___18786 = (0);
while(true){
if((i__5727__auto___18786 < len__5726__auto___18785)){
args__5732__auto__.push((arguments[i__5727__auto___18786]));

var G__18787 = (i__5727__auto___18786 + (1));
i__5727__auto___18786 = G__18787;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return c3kit.wire.js.o_update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(c3kit.wire.js.o_update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
return c3kit.wire.js.o_set(obj,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2(obj,k),args));
}));

(c3kit.wire.js.o_update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.js.o_update_BANG_.cljs$lang$applyTo = (function (seq18781){
var G__18782 = cljs.core.first(seq18781);
var seq18781__$1 = cljs.core.next(seq18781);
var G__18783 = cljs.core.first(seq18781__$1);
var seq18781__$2 = cljs.core.next(seq18781__$1);
var G__18784 = cljs.core.first(seq18781__$2);
var seq18781__$3 = cljs.core.next(seq18781__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18782,G__18783,G__18784,seq18781__$3);
}));

/**
 * Dissoc a key in a JavaScript object according to a path of keys.
 */
c3kit.wire.js.o_dissoc_BANG_ = (function c3kit$wire$js$o_dissoc_BANG_(obj,key){
delete obj[key];

return obj;
});
/**
 * Returns the first object with the subsequent objects merged onto it
 */
c3kit.wire.js.o_merge_BANG_ = (function c3kit$wire$js$o_merge_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18811 = arguments.length;
var i__5727__auto___18812 = (0);
while(true){
if((i__5727__auto___18812 < len__5726__auto___18811)){
args__5732__auto__.push((arguments[i__5727__auto___18812]));

var G__18813 = (i__5727__auto___18812 + (1));
i__5727__auto___18812 = G__18813;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return c3kit.wire.js.o_merge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(c3kit.wire.js.o_merge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,other,others){
if(cljs.core.map_QMARK_(other)){
var seq__18791_18814 = cljs.core.seq(cljs.core.seq(other));
var chunk__18792_18815 = null;
var count__18793_18816 = (0);
var i__18794_18817 = (0);
while(true){
if((i__18794_18817 < count__18793_18816)){
var vec__18801_18818 = chunk__18792_18815.cljs$core$IIndexed$_nth$arity$2(null,i__18794_18817);
var k_18819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18801_18818,(0),null);
var v_18820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18801_18818,(1),null);
c3kit.wire.js.o_set(obj,k_18819,v_18820);


var G__18821 = seq__18791_18814;
var G__18822 = chunk__18792_18815;
var G__18823 = count__18793_18816;
var G__18824 = (i__18794_18817 + (1));
seq__18791_18814 = G__18821;
chunk__18792_18815 = G__18822;
count__18793_18816 = G__18823;
i__18794_18817 = G__18824;
continue;
} else {
var temp__5804__auto___18825 = cljs.core.seq(seq__18791_18814);
if(temp__5804__auto___18825){
var seq__18791_18826__$1 = temp__5804__auto___18825;
if(cljs.core.chunked_seq_QMARK_(seq__18791_18826__$1)){
var c__5525__auto___18827 = cljs.core.chunk_first(seq__18791_18826__$1);
var G__18828 = cljs.core.chunk_rest(seq__18791_18826__$1);
var G__18829 = c__5525__auto___18827;
var G__18830 = cljs.core.count(c__5525__auto___18827);
var G__18831 = (0);
seq__18791_18814 = G__18828;
chunk__18792_18815 = G__18829;
count__18793_18816 = G__18830;
i__18794_18817 = G__18831;
continue;
} else {
var vec__18804_18832 = cljs.core.first(seq__18791_18826__$1);
var k_18833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18804_18832,(0),null);
var v_18834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18804_18832,(1),null);
c3kit.wire.js.o_set(obj,k_18833,v_18834);


var G__18835 = cljs.core.next(seq__18791_18826__$1);
var G__18836 = null;
var G__18837 = (0);
var G__18838 = (0);
seq__18791_18814 = G__18835;
chunk__18792_18815 = G__18836;
count__18793_18816 = G__18837;
i__18794_18817 = G__18838;
continue;
}
} else {
}
}
break;
}
} else {
if((other instanceof Object)){
var seq__18807_18839 = cljs.core.seq(Object.keys(other));
var chunk__18808_18840 = null;
var count__18809_18841 = (0);
var i__18810_18842 = (0);
while(true){
if((i__18810_18842 < count__18809_18841)){
var k_18843 = chunk__18808_18840.cljs$core$IIndexed$_nth$arity$2(null,i__18810_18842);
c3kit.wire.js.o_set(obj,k_18843,c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2(other,k_18843));


var G__18844 = seq__18807_18839;
var G__18845 = chunk__18808_18840;
var G__18846 = count__18809_18841;
var G__18847 = (i__18810_18842 + (1));
seq__18807_18839 = G__18844;
chunk__18808_18840 = G__18845;
count__18809_18841 = G__18846;
i__18810_18842 = G__18847;
continue;
} else {
var temp__5804__auto___18848 = cljs.core.seq(seq__18807_18839);
if(temp__5804__auto___18848){
var seq__18807_18849__$1 = temp__5804__auto___18848;
if(cljs.core.chunked_seq_QMARK_(seq__18807_18849__$1)){
var c__5525__auto___18850 = cljs.core.chunk_first(seq__18807_18849__$1);
var G__18851 = cljs.core.chunk_rest(seq__18807_18849__$1);
var G__18852 = c__5525__auto___18850;
var G__18853 = cljs.core.count(c__5525__auto___18850);
var G__18854 = (0);
seq__18807_18839 = G__18851;
chunk__18808_18840 = G__18852;
count__18809_18841 = G__18853;
i__18810_18842 = G__18854;
continue;
} else {
var k_18855 = cljs.core.first(seq__18807_18849__$1);
c3kit.wire.js.o_set(obj,k_18855,c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2(other,k_18855));


var G__18856 = cljs.core.next(seq__18807_18849__$1);
var G__18857 = null;
var G__18858 = (0);
var G__18859 = (0);
seq__18807_18839 = G__18856;
chunk__18808_18840 = G__18857;
count__18809_18841 = G__18858;
i__18810_18842 = G__18859;
continue;
}
} else {
}
}
break;
}
} else {
}
}

if(cljs.core.seq(others)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(c3kit.wire.js.o_merge_BANG_,obj,others);
} else {
return obj;
}
}));

(c3kit.wire.js.o_merge_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(c3kit.wire.js.o_merge_BANG_.cljs$lang$applyTo = (function (seq18788){
var G__18789 = cljs.core.first(seq18788);
var seq18788__$1 = cljs.core.next(seq18788);
var G__18790 = cljs.core.first(seq18788__$1);
var seq18788__$2 = cljs.core.next(seq18788__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18789,G__18790,seq18788__$2);
}));

c3kit.wire.js.get_or_create_node = (function c3kit$wire$js$get_or_create_node(obj,k){
var or__5002__auto__ = c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2(obj,k);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var node = (new Object());
c3kit.wire.js.o_set(obj,k,node);

return node;
}
});
/**
 * Assoc a nested value in a JavaScript object according to a path of keys.
 */
c3kit.wire.js.o_assoc_in_BANG_ = (function c3kit$wire$js$o_assoc_in_BANG_(obj,ks,v){
var key_path = cljs.core.butlast(ks);
var node = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(c3kit.wire.js.get_or_create_node,obj,key_path);
var key = cljs.core.last(ks);
return c3kit.wire.js.o_set(node,key,v);
});
/**
 * Dissoc a nested value in a JavaScript object according to a path of keys.
 */
c3kit.wire.js.o_dissoc_in_BANG_ = (function c3kit$wire$js$o_dissoc_in_BANG_(obj,ks){
var G__18860_18861 = c3kit.wire.js.o_get_in.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.butlast(ks));
if((G__18860_18861 == null)){
} else {
delete G__18860_18861[cljs.core.last(ks)];
}

return obj;
});
c3kit.wire.js.user_agent = (function c3kit$wire$js$user_agent(var_args){
var G__18863 = arguments.length;
switch (G__18863) {
case 0:
return c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$0 = (function (){
return c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$1(navigator);
}));

(c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$1 = (function (navigator){
return navigator.userAgent;
}));

(c3kit.wire.js.user_agent.cljs$lang$maxFixedArity = 1);

c3kit.wire.js.user_agent_match_QMARK_ = (function c3kit$wire$js$user_agent_match_QMARK_(var_args){
var G__18866 = arguments.length;
switch (G__18866) {
case 1:
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (re){
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$2(re,c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$0());
}));

(c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (re,user_agent){
return cljs.core.boolean$(cljs.core.re_find(re,user_agent));
}));

(c3kit.wire.js.user_agent_match_QMARK_.cljs$lang$maxFixedArity = 2);

c3kit.wire.js.mac_os_QMARK_ = (function c3kit$wire$js$mac_os_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1(/\((Macintosh|MacIntel|MacPPC|Mac68K)/);
});
c3kit.wire.js.win_os_QMARK_ = (function c3kit$wire$js$win_os_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1(/\((Windows|Win32|Win64|WinCE)/);
});
c3kit.wire.js.linux_QMARK_ = (function c3kit$wire$js$linux_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1(/\(Linux/);
});
c3kit.wire.js.ios_QMARK_ = (function c3kit$wire$js$ios_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1(/\((iPhone|iPad|iPod)/);
});
c3kit.wire.js.android_QMARK_ = (function c3kit$wire$js$android_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1(/\(Android/);
});
c3kit.wire.js.clear_interval = (function c3kit$wire$js$clear_interval(interval){
return clearInterval(interval);
});
c3kit.wire.js.clear_timeout = (function c3kit$wire$js$clear_timeout(timeout){
return clearTimeout(timeout);
});
c3kit.wire.js.context_2d = (function c3kit$wire$js$context_2d(canvas){
return canvas.getContext("2d");
});
c3kit.wire.js.active_element = (function c3kit$wire$js$active_element(){
return document.activeElement;
});
c3kit.wire.js.doc_body = (function c3kit$wire$js$doc_body(var_args){
var G__18869 = arguments.length;
switch (G__18869) {
case 0:
return c3kit.wire.js.doc_body.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.js.doc_body.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.doc_body.cljs$core$IFn$_invoke$arity$0 = (function (){
return document.body;
}));

(c3kit.wire.js.doc_body.cljs$core$IFn$_invoke$arity$1 = (function (doc){
return doc.body;
}));

(c3kit.wire.js.doc_body.cljs$lang$maxFixedArity = 1);

c3kit.wire.js.doc_cookie = (function c3kit$wire$js$doc_cookie(){
return document.cookie;
});
c3kit.wire.js.doc_ready_state = (function c3kit$wire$js$doc_ready_state(){
return document.readyState;
});
c3kit.wire.js.doc_ready_QMARK_ = (function c3kit$wire$js$doc_ready_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("complete",c3kit.wire.js.doc_ready_state());
});
c3kit.wire.js.document = (function c3kit$wire$js$document(var_args){
var G__18872 = arguments.length;
switch (G__18872) {
case 0:
return c3kit.wire.js.document.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.js.document.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.document.cljs$core$IFn$_invoke$arity$0 = (function (){
return document;
}));

(c3kit.wire.js.document.cljs$core$IFn$_invoke$arity$1 = (function (node){
return node.ownerDocument;
}));

(c3kit.wire.js.document.cljs$lang$maxFixedArity = 1);

c3kit.wire.js.e_checked_QMARK_ = (function c3kit$wire$js$e_checked_QMARK_(e){
return e.target.checked;
});
c3kit.wire.js.e_delta_y = (function c3kit$wire$js$e_delta_y(e){
return e.deltaY;
});
c3kit.wire.js.e_client_x = (function c3kit$wire$js$e_client_x(e){
return e.clientX;
});
c3kit.wire.js.e_client_y = (function c3kit$wire$js$e_client_y(e){
return e.clientY;
});
c3kit.wire.js.e_coordinates = (function c3kit$wire$js$e_coordinates(e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});
c3kit.wire.js.e_related_target = (function c3kit$wire$js$e_related_target(e){
return e.relatedTarget;
});
c3kit.wire.js.e_left_click_QMARK_ = (function c3kit$wire$js$e_left_click_QMARK_(e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2(e,"button"));
});
c3kit.wire.js.e_wheel_click_QMARK_ = (function c3kit$wire$js$e_wheel_click_QMARK_(e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2(e,"button"));
});
c3kit.wire.js.e_right_click_QMARK_ = (function c3kit$wire$js$e_right_click_QMARK_(e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2(e,"button"));
});
c3kit.wire.js.e_target = (function c3kit$wire$js$e_target(e){
return e.target;
});
c3kit.wire.js.e_text = (function c3kit$wire$js$e_text(e){
return e.target.value;
});
c3kit.wire.js.e_type = (function c3kit$wire$js$e_type(e){
return e.type;
});
c3kit.wire.js.file__GT_clj = (function c3kit$wire$js$file__GT_clj(file){
return c3kit.apron.corec.remove_nils(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$name,file.name,cljs.core.cst$kw$type,file.type,cljs.core.cst$kw$size,file.size,cljs.core.cst$kw$last_DASH_modified,file.lastModified,cljs.core.cst$kw$last_DASH_modified_DASH_date,file.lastModifiedDate,cljs.core.cst$kw$webkit_DASH_relative_DASH_path,file.webkitRelativePath,cljs.core.cst$kw$file,file], null));
});
c3kit.wire.js.e_files = (function c3kit$wire$js$e_files(e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.file__GT_clj,(function (){var or__5002__auto__ = (function (){var G__18874 = e;
var G__18874__$1 = (((G__18874 == null))?null:G__18874.dataTransfer);
if((G__18874__$1 == null)){
return null;
} else {
return G__18874__$1.files;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var G__18875 = e;
var G__18875__$1 = (((G__18875 == null))?null:G__18875.target);
if((G__18875__$1 == null)){
return null;
} else {
return G__18875__$1.files;
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
})());
});
c3kit.wire.js.element_by_id = (function c3kit$wire$js$element_by_id(id){
return document.getElementById(id);
});
c3kit.wire.js.frame_window = (function c3kit$wire$js$frame_window(iframe){
return iframe.contentWindow;
});
c3kit.wire.js.interval = (function c3kit$wire$js$interval(millis,f){
return setInterval(f,millis);
});
c3kit.wire.js.node_add_class = (function c3kit$wire$js$node_add_class(node,class$){
return node.classList.add(class$);
});
c3kit.wire.js.node_append_child = (function c3kit$wire$js$node_append_child(node,child){
return node.appendChild(child);
});
c3kit.wire.js.node_children = (function c3kit$wire$js$node_children(node){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(node.childNodes);
});
c3kit.wire.js.node_classes = (function c3kit$wire$js$node_classes(node){
return node.className;
});
c3kit.wire.js.node_clone = (function c3kit$wire$js$node_clone(node,deep_QMARK_){
return node.cloneNode(deep_QMARK_);
});
c3kit.wire.js.node_files = (function c3kit$wire$js$node_files(node){
return node.files;
});
c3kit.wire.js.node_height = (function c3kit$wire$js$node_height(node){
return node.clientHeight;
});
c3kit.wire.js.node_id = (function c3kit$wire$js$node_id(node){
return c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2(node,"id");
});
c3kit.wire.js.node_id_EQ_ = (function c3kit$wire$js$node_id_EQ_(node,id){
return c3kit.wire.js.o_set(node,"id",id);
});
c3kit.wire.js.node_text = (function c3kit$wire$js$node_text(node){
return node.innerText;
});
c3kit.wire.js.node_parent = (function c3kit$wire$js$node_parent(node){
return node.parentNode;
});
c3kit.wire.js.node_placeholder = (function c3kit$wire$js$node_placeholder(node){
return node.placeholder;
});
c3kit.wire.js.node_remove_child = (function c3kit$wire$js$node_remove_child(node,child){
return node.removeChild(child);
});
c3kit.wire.js.node_remove_class = (function c3kit$wire$js$node_remove_class(node,class$){
return node.classList.remove(class$);
});
c3kit.wire.js.node_scroll_left = (function c3kit$wire$js$node_scroll_left(node){
return node.scrollLeft;
});
c3kit.wire.js.node_scroll_top = (function c3kit$wire$js$node_scroll_top(node){
return node.scrollTop;
});
c3kit.wire.js.node_size = (function c3kit$wire$js$node_size(node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.clientWidth,node.clientHeight], null);
});
c3kit.wire.js.node_style = (function c3kit$wire$js$node_style(node){
return node.style;
});
c3kit.wire.js.node_value = (function c3kit$wire$js$node_value(node){
return node.value;
});
c3kit.wire.js.node_width = (function c3kit$wire$js$node_width(node){
return node.clientWidth;
});
c3kit.wire.js.page_href = (function c3kit$wire$js$page_href(){
return window.location.href;
});
c3kit.wire.js.page_hash = (function c3kit$wire$js$page_hash(){
return window.location.hash;
});
c3kit.wire.js.page_pathname = (function c3kit$wire$js$page_pathname(){
return window.location.pathname;
});
c3kit.wire.js.page_reload_BANG_ = (function c3kit$wire$js$page_reload_BANG_(){
return window.location.reload();
});
c3kit.wire.js.page_title = (function c3kit$wire$js$page_title(){
return document.title;
});
c3kit.wire.js.page_title_EQ_ = (function c3kit$wire$js$page_title_EQ_(title){
return (document.title = title);
});
c3kit.wire.js.post_message = (function c3kit$wire$js$post_message(window,message,target_domain){
return window.postMessage(cljs.core.clj__GT_js(message),target_domain);
});
c3kit.wire.js.print_page = (function c3kit$wire$js$print_page(){
return window.print();
});
c3kit.wire.js.query_selector = (function c3kit$wire$js$query_selector(selector){
return document.querySelector(selector);
});
c3kit.wire.js.query_selector_all = (function c3kit$wire$js$query_selector_all(selector){
return document.querySelectorAll(selector);
});
c3kit.wire.js.register_post_message_handler = (function c3kit$wire$js$register_post_message_handler(handler){
return window.addEventListener("message",handler);
});
c3kit.wire.js.register_storage_handler = (function c3kit$wire$js$register_storage_handler(handler){
return window.addEventListener("storage",handler);
});
c3kit.wire.js.remove_local_storage = (function c3kit$wire$js$remove_local_storage(key){
return localStorage.removeItem(key);
});
c3kit.wire.js.screen_size = (function c3kit$wire$js$screen_size(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen.width,screen.height], null);
});
c3kit.wire.js.set_local_storage = (function c3kit$wire$js$set_local_storage(key,value){
return localStorage.setItem(key,value);
});
c3kit.wire.js.timeout = (function c3kit$wire$js$timeout(millis,f){
return setTimeout(f,millis);
});
c3kit.wire.js.uri_encode = (function c3kit$wire$js$uri_encode(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18877 = arguments.length;
var i__5727__auto___18878 = (0);
while(true){
if((i__5727__auto___18878 < len__5726__auto___18877)){
args__5732__auto__.push((arguments[i__5727__auto___18878]));

var G__18879 = (i__5727__auto___18878 + (1));
i__5727__auto___18878 = G__18879;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return c3kit.wire.js.uri_encode.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(c3kit.wire.js.uri_encode.cljs$core$IFn$_invoke$arity$variadic = (function (stuff){
return encodeURIComponent(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,stuff));
}));

(c3kit.wire.js.uri_encode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.wire.js.uri_encode.cljs$lang$applyTo = (function (seq18876){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18876));
}));

c3kit.wire.js.window_close_BANG_ = (function c3kit$wire$js$window_close_BANG_(){
return window.close();
});
c3kit.wire.js.window_open = (function c3kit$wire$js$window_open(url,window_name,options_string){
return window.open(url,window_name,options_string);
});
c3kit.wire.js.node_bounds = (function c3kit$wire$js$node_bounds(node){
var rect = node.getBoundingClientRect();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rect.x,rect.y,rect.width,rect.height], null);
});
/**
 * Return a hashmap of cookie names and their values.
 */
c3kit.wire.js.cookies = (function c3kit$wire$js$cookies(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(clojure.string.blank_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__18880_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__18880_SHARP_,"=");
}))),clojure.string.split.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.doc_cookie(),"; "));
});
/**
 * Resolves a value into a DOM node.
 *   Possible values:
 *  - string id       - id of the node
 *  - string selector - CSS selector to find the node
 *  - node            - anything else is assumed to be the node
 */
c3kit.wire.js.resolve_node = (function c3kit$wire$js$resolve_node(thing){
if(typeof thing === 'string'){
var or__5002__auto__ = c3kit.wire.js.element_by_id(thing);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return c3kit.wire.js.query_selector(thing);
}
} else {
return thing;
}
});
c3kit.wire.js.ancestor_where = (function c3kit$wire$js$ancestor_where(pred,node){
while(true){
if((node == null)){
return null;
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(node) : pred.call(null,node)))){
return node;
} else {
var G__18881 = pred;
var G__18882 = node.parentElement;
pred = G__18881;
node = G__18882;
continue;

}
}
break;
}
});
c3kit.wire.js.ancestor_QMARK_ = (function c3kit$wire$js$ancestor_QMARK_(ancestor,node){
return cljs.core.boolean$(c3kit.wire.js.ancestor_where((function (p1__18883_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ancestor,p1__18883_SHARP_);
}),node));
});
/**
 * Give an event the nod, as if saying: Good job, your work is done.
 */
c3kit.wire.js.nod = (function c3kit$wire$js$nod(e){
return e.preventDefault();
});
/**
 * Return function to suppress browser event with nod and call the supplied function with args.
 */
c3kit.wire.js.nod_n_do = (function c3kit$wire$js$nod_n_do(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18886 = arguments.length;
var i__5727__auto___18887 = (0);
while(true){
if((i__5727__auto___18887 < len__5726__auto___18886)){
args__5732__auto__.push((arguments[i__5727__auto___18887]));

var G__18888 = (i__5727__auto___18887 + (1));
i__5727__auto___18887 = G__18888;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return c3kit.wire.js.nod_n_do.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(c3kit.wire.js.nod_n_do.cljs$core$IFn$_invoke$arity$variadic = (function (a_fn,args){
return (function (e){
c3kit.wire.js.nod(e);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(a_fn,args);
});
}));

(c3kit.wire.js.nod_n_do.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.wire.js.nod_n_do.cljs$lang$applyTo = (function (seq18884){
var G__18885 = cljs.core.first(seq18884);
var seq18884__$1 = cljs.core.next(seq18884);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18885,seq18884__$1);
}));

/**
 * Nip the event in the bud, before it causes any trouble.
 */
c3kit.wire.js.nip = (function c3kit$wire$js$nip(e){
return e.stopPropagation();
});
/**
 * Return function to suppress browser event with nip and call the supplied function with args.
 */
c3kit.wire.js.nip_n_do = (function c3kit$wire$js$nip_n_do(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18891 = arguments.length;
var i__5727__auto___18892 = (0);
while(true){
if((i__5727__auto___18892 < len__5726__auto___18891)){
args__5732__auto__.push((arguments[i__5727__auto___18892]));

var G__18893 = (i__5727__auto___18892 + (1));
i__5727__auto___18892 = G__18893;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return c3kit.wire.js.nip_n_do.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(c3kit.wire.js.nip_n_do.cljs$core$IFn$_invoke$arity$variadic = (function (a_fn,args){
return (function (e){
c3kit.wire.js.nip(e);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(a_fn,args);
});
}));

(c3kit.wire.js.nip_n_do.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.wire.js.nip_n_do.cljs$lang$applyTo = (function (seq18889){
var G__18890 = cljs.core.first(seq18889);
var seq18889__$1 = cljs.core.next(seq18889);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18890,seq18889__$1);
}));

/**
 * Nix an event: Stop what you're doing and get the hell out.
 */
c3kit.wire.js.nix = (function c3kit$wire$js$nix(e){
c3kit.wire.js.nip(e);

return c3kit.wire.js.nod(e);
});
/**
 * Return function to suppress browser event with nix and call the supplied function with args.
 */
c3kit.wire.js.nix_n_do = (function c3kit$wire$js$nix_n_do(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18896 = arguments.length;
var i__5727__auto___18897 = (0);
while(true){
if((i__5727__auto___18897 < len__5726__auto___18896)){
args__5732__auto__.push((arguments[i__5727__auto___18897]));

var G__18898 = (i__5727__auto___18897 + (1));
i__5727__auto___18897 = G__18898;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return c3kit.wire.js.nix_n_do.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(c3kit.wire.js.nix_n_do.cljs$core$IFn$_invoke$arity$variadic = (function (a_fn,args){
return (function (e){
c3kit.wire.js.nix(e);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(a_fn,args);
});
}));

(c3kit.wire.js.nix_n_do.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.wire.js.nix_n_do.cljs$lang$applyTo = (function (seq18894){
var G__18895 = cljs.core.first(seq18894);
var seq18894__$1 = cljs.core.next(seq18894);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18895,seq18894__$1);
}));

/**
 * Tell the browser to load the given URL, with full HTTP request/response process.
 */
c3kit.wire.js.redirect_BANG_ = (function c3kit$wire$js$redirect_BANG_(url){
return (window.location = url);
});
/**
 * Resolved the node and focus.
 *   Options: {:preventScroll true ;; default is false
 *          :focusVisible true}  ;; default may be false 
 */
c3kit.wire.js.focus_BANG_ = (function c3kit$wire$js$focus_BANG_(var_args){
var G__18900 = arguments.length;
switch (G__18900) {
case 1:
return c3kit.wire.js.focus_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.focus_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.focus_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
var G__18901 = thing;
var G__18901__$1 = (((G__18901 == null))?null:c3kit.wire.js.resolve_node(G__18901));
if((G__18901__$1 == null)){
return null;
} else {
return G__18901__$1.focus();
}
}));

(c3kit.wire.js.focus_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,options){
var G__18902 = thing;
var G__18902__$1 = (((G__18902 == null))?null:c3kit.wire.js.resolve_node(G__18902));
if((G__18902__$1 == null)){
return null;
} else {
return G__18902__$1.focus(cljs.core.clj__GT_js(options));
}
}));

(c3kit.wire.js.focus_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.js.blur_BANG_ = (function c3kit$wire$js$blur_BANG_(thing){
var G__18904 = thing;
var G__18904__$1 = (((G__18904 == null))?null:c3kit.wire.js.resolve_node(G__18904));
if((G__18904__$1 == null)){
return null;
} else {
return G__18904__$1.blur();
}
});
c3kit.wire.js.click_BANG_ = (function c3kit$wire$js$click_BANG_(thing){
var G__18905 = thing;
var G__18905__$1 = (((G__18905 == null))?null:c3kit.wire.js.resolve_node(G__18905));
if((G__18905__$1 == null)){
return null;
} else {
return G__18905__$1.click();
}
});
/**
 * True if the element is the document's activeElement.
 */
c3kit.wire.js.active_QMARK_ = (function c3kit$wire$js$active_QMARK_(thing){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.active_element(),c3kit.wire.js.resolve_node(thing));
});
/**
 * True if the element is not the document's activeElement.
 */
c3kit.wire.js.inactive_QMARK_ = (function c3kit$wire$js$inactive_QMARK_(thing){
return (!(c3kit.wire.js.active_QMARK_(thing)));
});
c3kit.wire.js.add_listener = (function c3kit$wire$js$add_listener(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18913 = arguments.length;
var i__5727__auto___18914 = (0);
while(true){
if((i__5727__auto___18914 < len__5726__auto___18913)){
args__5732__auto__.push((arguments[i__5727__auto___18914]));

var G__18915 = (i__5727__auto___18914 + (1));
i__5727__auto___18914 = G__18915;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return c3kit.wire.js.add_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(c3kit.wire.js.add_listener.cljs$core$IFn$_invoke$arity$variadic = (function (node,event,listener,p__18910){
var map__18911 = p__18910;
var map__18911__$1 = cljs.core.__destructure_map(map__18911);
var options = map__18911__$1;
if(cljs.core.truth_(node)){
return node.addEventListener(event,listener,(function (){var G__18912 = options;
if((G__18912 == null)){
return null;
} else {
return cljs.core.clj__GT_js(G__18912);
}
})());
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.wire.js",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add-listener to nil node"], null);
}),null)),null,(45),null);
}
}));

(c3kit.wire.js.add_listener.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.js.add_listener.cljs$lang$applyTo = (function (seq18906){
var G__18907 = cljs.core.first(seq18906);
var seq18906__$1 = cljs.core.next(seq18906);
var G__18908 = cljs.core.first(seq18906__$1);
var seq18906__$2 = cljs.core.next(seq18906__$1);
var G__18909 = cljs.core.first(seq18906__$2);
var seq18906__$3 = cljs.core.next(seq18906__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18907,G__18908,G__18909,seq18906__$3);
}));

c3kit.wire.js.remove_listener = (function c3kit$wire$js$remove_listener(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18923 = arguments.length;
var i__5727__auto___18924 = (0);
while(true){
if((i__5727__auto___18924 < len__5726__auto___18923)){
args__5732__auto__.push((arguments[i__5727__auto___18924]));

var G__18925 = (i__5727__auto___18924 + (1));
i__5727__auto___18924 = G__18925;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return c3kit.wire.js.remove_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(c3kit.wire.js.remove_listener.cljs$core$IFn$_invoke$arity$variadic = (function (node,event,listener,p__18920){
var map__18921 = p__18920;
var map__18921__$1 = cljs.core.__destructure_map(map__18921);
var options = map__18921__$1;
if(cljs.core.truth_(node)){
return node.removeEventListener(event,listener,(function (){var G__18922 = options;
if((G__18922 == null)){
return null;
} else {
return cljs.core.clj__GT_js(G__18922);
}
})());
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.wire.js",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["remove-listener to nil node"], null);
}),null)),null,(46),null);
}
}));

(c3kit.wire.js.remove_listener.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.js.remove_listener.cljs$lang$applyTo = (function (seq18916){
var G__18917 = cljs.core.first(seq18916);
var seq18916__$1 = cljs.core.next(seq18916);
var G__18918 = cljs.core.first(seq18916__$1);
var seq18916__$2 = cljs.core.next(seq18916__$1);
var G__18919 = cljs.core.first(seq18916__$2);
var seq18916__$3 = cljs.core.next(seq18916__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18917,G__18918,G__18919,seq18916__$3);
}));

c3kit.wire.js.add_doc_listener = (function c3kit$wire$js$add_doc_listener(event,handler){
return c3kit.wire.js.add_listener(document,event,handler);
});
c3kit.wire.js.remove_doc_listener = (function c3kit$wire$js$remove_doc_listener(event,handler){
return c3kit.wire.js.remove_listener(document,event,handler);
});
c3kit.wire.js.__GT_query_value = (function c3kit$wire$js$__GT_query_value(v){
if((v instanceof Date)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
} else {
return v;
}
});
c3kit.wire.js.__GT_query_string = (function c3kit$wire$js$__GT_query_string(params){
return cljs_http.client.generate_query_string(cljs.core.update_vals(params,c3kit.wire.js.__GT_query_value));
});
c3kit.wire.js.encode_url = (function c3kit$wire$js$encode_url(root,params){
var G__18926 = root;
if(cljs.core.seq(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18926),"?",c3kit.wire.js.__GT_query_string(params)].join('');
} else {
return G__18926;
}
});
c3kit.wire.js.download = (function c3kit$wire$js$download(var_args){
var G__18928 = arguments.length;
switch (G__18928) {
case 2:
return c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$2 = (function (url,filename){
return c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$3(url,filename,cljs.core.PersistentArrayMap.EMPTY);
}));

(c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$3 = (function (url,filename,params){
var a = document.createElement("a");
var url__$1 = c3kit.wire.js.encode_url(url,params);
(a.href = url__$1);

(a.download = filename);

return a.click();
}));

(c3kit.wire.js.download.cljs$lang$maxFixedArity = 3);

c3kit.wire.js.download_data = (function c3kit$wire$js$download_data(data,content_type,filename){
var blob = (new Blob(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,content_type], null))));
var url = URL.createObjectURL(blob);
c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$2(url,filename);

return c3kit.wire.js.timeout((100),(function (){
return URL.revokeObjectURL(url);
}));
});
c3kit.wire.js.__GT_audio = (function c3kit$wire$js$__GT_audio(src){
var audio = cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(document,"createElement",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["audio"], 0));
c3kit.wire.js.o_set(audio,"src",src);

return audio;
});
c3kit.wire.js.play_audio = (function c3kit$wire$js$play_audio(audio){
return cljs.core.js_invoke(audio,"play");
});
c3kit.wire.js.pause_audio = (function c3kit$wire$js$pause_audio(audio){
return cljs.core.js_invoke(audio,"pause");
});
c3kit.wire.js.copy_to_clipboard_fallback = (function c3kit$wire$js$copy_to_clipboard_fallback(text){
var textarea = document.createElement("textarea");
var body = document.body;
(textarea.textContent = text);

body.appendChild(textarea);

var selection = document.getSelection();
var range = document.createRange();
range.selectNode(textarea);

selection.removeAllRanges();

selection.addRange(range);

document.execCommand("copy");

selection.removeAllRanges();

return body.removeChild(textarea);
});
c3kit.wire.js.copy_to_clipboard = (function c3kit$wire$js$copy_to_clipboard(text){
var temp__5802__auto__ = navigator.clipboard;
if(cljs.core.truth_(temp__5802__auto__)){
var clipboard = temp__5802__auto__;
return clipboard.writeText(text);
} else {
return c3kit.wire.js.copy_to_clipboard_fallback(text);
}
});
c3kit.wire.js.begin_path_BANG_ = (function c3kit$wire$js$begin_path_BANG_(ctx){
return ctx.beginPath();
});
c3kit.wire.js.stroke_BANG_ = (function c3kit$wire$js$stroke_BANG_(ctx){
return ctx.stroke();
});
c3kit.wire.js.fill_BANG_ = (function c3kit$wire$js$fill_BANG_(ctx){
return ctx.fill();
});
c3kit.wire.js.line_width_EQ_ = (function c3kit$wire$js$line_width_EQ_(ctx,w){
return (ctx.lineWidth = w);
});
c3kit.wire.js.stroke_color_EQ_ = (function c3kit$wire$js$stroke_color_EQ_(ctx,color){
return (ctx.strokeStyle = color);
});
c3kit.wire.js.fill_color_EQ_ = (function c3kit$wire$js$fill_color_EQ_(ctx,color){
return (ctx.fillStyle = color);
});
c3kit.wire.js.font_EQ_ = (function c3kit$wire$js$font_EQ_(ctx,font){
return (ctx.font = font);
});
c3kit.wire.js.text_align_EQ_ = (function c3kit$wire$js$text_align_EQ_(ctx,align){
return (ctx.textAlign = align);
});
c3kit.wire.js.close_path_BANG_ = (function c3kit$wire$js$close_path_BANG_(ctx){
return ctx.closePath();
});
c3kit.wire.js.move_to_BANG_ = (function c3kit$wire$js$move_to_BANG_(ctx,p__18930){
var vec__18931 = p__18930;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18931,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18931,(1),null);
return ctx.moveTo(x,y);
});
c3kit.wire.js.line_to_BANG_ = (function c3kit$wire$js$line_to_BANG_(ctx,p__18934){
var vec__18935 = p__18934;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18935,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18935,(1),null);
return ctx.lineTo(x,y);
});
c3kit.wire.js.fill_rect_BANG_ = (function c3kit$wire$js$fill_rect_BANG_(ctx,p__18938,p__18939){
var vec__18940 = p__18938;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18940,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18940,(1),null);
var vec__18943 = p__18939;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18943,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18943,(1),null);
return ctx.fillRect(x1,y1,x2,y2);
});
c3kit.wire.js.stroke_rect_BANG_ = (function c3kit$wire$js$stroke_rect_BANG_(ctx,p__18946,p__18947){
var vec__18948 = p__18946;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18948,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18948,(1),null);
var vec__18951 = p__18947;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18951,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18951,(1),null);
return ctx.strokeRect(x1,y1,x2,y2);
});
c3kit.wire.js.fill_text_BANG_ = (function c3kit$wire$js$fill_text_BANG_(ctx,text,p__18954){
var vec__18955 = p__18954;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18955,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18955,(1),null);
return ctx.fillText(text,x,y);
});
c3kit.wire.js.scroll_into_view = (function c3kit$wire$js$scroll_into_view(var_args){
var G__18959 = arguments.length;
switch (G__18959) {
case 1:
return c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$2(thing,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$behavior,"smooth"], null));
}));

(c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$2 = (function (thing,options){
var G__18960 = c3kit.wire.js.resolve_node(thing);
if((G__18960 == null)){
return null;
} else {
return G__18960.scrollIntoView(cljs.core.clj__GT_js(options));
}
}));

(c3kit.wire.js.scroll_into_view.cljs$lang$maxFixedArity = 2);

c3kit.wire.js.scroll_to = (function c3kit$wire$js$scroll_to(thing,options){
var G__18962 = c3kit.wire.js.resolve_node(thing);
if((G__18962 == null)){
return null;
} else {
return G__18962.scrollTo(cljs.core.clj__GT_js(options));
}
});
c3kit.wire.js.scroll_to_top = (function c3kit$wire$js$scroll_to_top(){
return window.scrollTo(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$behavior,"smooth",cljs.core.cst$kw$top,(0)], null)));
});
c3kit.wire.js.console_log = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(console.log);
/**
 * Insert in threading macro to console log the value.
 */
c3kit.wire.js.__GT_inspect = (function c3kit$wire$js$__GT_inspect(v){
(c3kit.wire.js.console_log.cljs$core$IFn$_invoke$arity$2 ? c3kit.wire.js.console_log.cljs$core$IFn$_invoke$arity$2("->inspect:",v) : c3kit.wire.js.console_log.call(null,"->inspect:",v));

return v;
});
/**
 * Creates a JavaScript Event of a given type with optional added attributes
 */
c3kit.wire.js.__GT_event = (function c3kit$wire$js$__GT_event(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18967 = arguments.length;
var i__5727__auto___18968 = (0);
while(true){
if((i__5727__auto___18968 < len__5726__auto___18967)){
args__5732__auto__.push((arguments[i__5727__auto___18968]));

var G__18969 = (i__5727__auto___18968 + (1));
i__5727__auto___18968 = G__18969;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return c3kit.wire.js.__GT_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(c3kit.wire.js.__GT_event.cljs$core$IFn$_invoke$arity$variadic = (function (type,p__18965){
var map__18966 = p__18965;
var map__18966__$1 = cljs.core.__destructure_map(map__18966);
var kvs = map__18966__$1;
return c3kit.wire.js.o_merge_BANG_((new Event(type)),kvs);
}));

(c3kit.wire.js.__GT_event.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.wire.js.__GT_event.cljs$lang$applyTo = (function (seq18963){
var G__18964 = cljs.core.first(seq18963);
var seq18963__$1 = cljs.core.next(seq18963);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18964,seq18963__$1);
}));

/**
 * Dispatches the event to the node.
 * If given an event, kvs is merged onto it.
 * If given a string, creates a new event of that type with kvs.
 */
c3kit.wire.js.dispatch_event = (function c3kit$wire$js$dispatch_event(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18975 = arguments.length;
var i__5727__auto___18976 = (0);
while(true){
if((i__5727__auto___18976 < len__5726__auto___18975)){
args__5732__auto__.push((arguments[i__5727__auto___18976]));

var G__18977 = (i__5727__auto___18976 + (1));
i__5727__auto___18976 = G__18977;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return c3kit.wire.js.dispatch_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(c3kit.wire.js.dispatch_event.cljs$core$IFn$_invoke$arity$variadic = (function (node,e,p__18973){
var map__18974 = p__18973;
var map__18974__$1 = cljs.core.__destructure_map(map__18974);
var kvs = map__18974__$1;
var e__$1 = ((typeof e === 'string')?c3kit.wire.js.__GT_event.cljs$core$IFn$_invoke$arity$variadic(e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kvs], 0)):c3kit.wire.js.o_merge_BANG_(e,kvs));
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(node,"dispatchEvent",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e__$1], 0));
}));

(c3kit.wire.js.dispatch_event.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(c3kit.wire.js.dispatch_event.cljs$lang$applyTo = (function (seq18970){
var G__18971 = cljs.core.first(seq18970);
var seq18970__$1 = cljs.core.next(seq18970);
var G__18972 = cljs.core.first(seq18970__$1);
var seq18970__$2 = cljs.core.next(seq18970__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18971,G__18972,seq18970__$2);
}));

c3kit.wire.js.__GT_replacer = (function c3kit$wire$js$__GT_replacer(replacer){
if(cljs.core.fn_QMARK_(replacer)){
return replacer;
} else {
if(cljs.core.map_QMARK_(replacer)){
return (function (k,v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(replacer,k,v);
});
} else {
return cljs.core.clj__GT_js(replacer);

}
}
});
/**
 * Converts a value to a JSON string.
 *  - value:    The value to convert to JSON.
 *  - replacer: A 2-arity function of key and value
 *  - space:    A string or number that is used to insert white space.
 */
c3kit.wire.js.stringify_json = (function c3kit$wire$js$stringify_json(var_args){
var G__18979 = arguments.length;
switch (G__18979) {
case 1:
return c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$1 = (function (value){
return c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$2 = (function (value,replacer){
return c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$3(value,replacer,(2));
}));

(c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$3 = (function (value,replacer,space){
return JSON.stringify(cljs.core.clj__GT_js(value),c3kit.wire.js.__GT_replacer(replacer),space);
}));

(c3kit.wire.js.stringify_json.cljs$lang$maxFixedArity = 3);

/**
 * Constructs the Clojure value described by the string.
 *  - value:   The JSON string
 *  - reviver: A 2-arity function of key and value
 */
c3kit.wire.js.parse_json = (function c3kit$wire$js$parse_json(var_args){
var G__18982 = arguments.length;
switch (G__18982) {
case 1:
return c3kit.wire.js.parse_json.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.parse_json.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.parse_json.cljs$core$IFn$_invoke$arity$1 = (function (text){
return c3kit.wire.js.parse_json.cljs$core$IFn$_invoke$arity$2(text,null);
}));

(c3kit.wire.js.parse_json.cljs$core$IFn$_invoke$arity$2 = (function (text,reviver){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(text,c3kit.wire.js.__GT_replacer(reviver)));
}));

(c3kit.wire.js.parse_json.cljs$lang$maxFixedArity = 2);

