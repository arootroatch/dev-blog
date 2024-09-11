// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('tic_tac_toe.screens.second_level_selection');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.screens.selection_button');
tic_tac_toe.screens.second_level_selection.on_click = (function tic_tac_toe$screens$second_level_selection$on_click(state,n){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_screen,cljs.core.cst$kw$play,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$second_DASH_ai_DASH_level,n], 0));
});
tic_tac_toe.screens.second_level_selection.set_number = (function tic_tac_toe$screens$second_level_selection$set_number(n){
var G__18986 = n;
switch (G__18986) {
case (3):
return (1);

break;
case (4):
return (2);

break;
case (6):
return (3);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18986)].join('')));

}
});
tic_tac_toe.render_screen.render_screen.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$second_DASH_level_DASH_selection,(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_second_DASH_level_DASH_selection$screen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.level_prompt,(1))], null),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$second_level_selection$iter__18988(s__18989){
return (new cljs.core.LazySeq(null,(function (){
var s__18989__$1 = s__18989;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18989__$1);
if(temp__5804__auto__){
var s__18989__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18989__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18989__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18991 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18990 = (0);
while(true){
if((i__18990 < size__5479__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5478__auto__,i__18990);
cljs.core.chunk_append(b__18991,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.selection_button.selection_button,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.level_prompt,n),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(tic_tac_toe.screens.second_level_selection.on_click,state,tic_tac_toe.screens.second_level_selection.set_number(n))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)));

var G__18992 = (i__18990 + (1));
i__18990 = G__18992;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18991),tic_tac_toe$screens$second_level_selection$iter__18988(cljs.core.chunk_rest(s__18989__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18991),null);
}
} else {
var n = cljs.core.first(s__18989__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.selection_button.selection_button,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.level_prompt,n),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(tic_tac_toe.screens.second_level_selection.on_click,state,tic_tac_toe.screens.second_level_selection.set_number(n))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)),tic_tac_toe$screens$second_level_selection$iter__18988(cljs.core.rest(s__18989__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(6)], null));
})()], null);
}));
