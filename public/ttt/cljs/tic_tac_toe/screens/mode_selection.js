// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('tic_tac_toe.screens.mode_selection');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.selection_button');
tic_tac_toe.screens.mode_selection.on_click = (function tic_tac_toe$screens$mode_selection$on_click(state,n){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_screen,cljs.core.cst$kw$board_DASH_selection,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mode,n,cljs.core.cst$kw$human_QMARK_,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),n)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),n))))?false:true)], 0));
});
tic_tac_toe.render_screen.render_screen.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mode_DASH_selection,(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_mode_DASH_selection$screen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,cljs.core.first(tic_tac_toe.print_utils.mode_prompt)], null),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$mode_selection$iter__18995(s__18996){
return (new cljs.core.LazySeq(null,(function (){
var s__18996__$1 = s__18996;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18996__$1);
if(temp__5804__auto__){
var s__18996__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18996__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18996__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18998 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18997 = (0);
while(true){
if((i__18997 < size__5479__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5478__auto__,i__18997);
cljs.core.chunk_append(b__18998,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.selection_button.selection_button,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.mode_prompt,n),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(tic_tac_toe.screens.mode_selection.on_click,state,n)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)));

var G__18999 = (i__18997 + (1));
i__18997 = G__18999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18998),tic_tac_toe$screens$mode_selection$iter__18995(cljs.core.chunk_rest(s__18996__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18998),null);
}
} else {
var n = cljs.core.first(s__18996__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.selection_button.selection_button,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.mode_prompt,n),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(tic_tac_toe.screens.mode_selection.on_click,state,n)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)),tic_tac_toe$screens$mode_selection$iter__18995(cljs.core.rest(s__18996__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null));
})()], null);
}));
