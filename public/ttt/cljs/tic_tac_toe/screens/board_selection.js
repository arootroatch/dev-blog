// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('tic_tac_toe.screens.board_selection');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.board_options');
tic_tac_toe.screens.board_selection.on_click = (function tic_tac_toe$screens$board_selection$on_click(state,n){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_screen,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?cljs.core.cst$kw$play:cljs.core.cst$kw$first_DASH_level_DASH_selection));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$board,(function (){var G__15993 = n;
switch (G__15993) {
case (1):
return tic_tac_toe.board_options.initial_3x3_board;

break;
case (2):
return tic_tac_toe.board_options.initial_4x4_board;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15993)].join('')));

}
})());
});
tic_tac_toe.screens.board_selection.preview_square = (function tic_tac_toe$screens$board_selection$preview_square(size){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["preview-square-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')], null)], null);
});
tic_tac_toe.screens.board_selection.three_by_three_preview = (function tic_tac_toe$screens$board_selection$three_by_three_preview(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$three_DASH_grid,(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$board_selection$three_by_three_preview_$_iter__15995(s__15996){
return (new cljs.core.LazySeq(null,(function (){
var s__15996__$1 = s__15996;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15996__$1);
if(temp__5804__auto__){
var s__15996__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15996__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__15996__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__15998 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__15997 = (0);
while(true){
if((i__15997 < size__5479__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5478__auto__,i__15997);
cljs.core.chunk_append(b__15998,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.preview_square,(27)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)));

var G__15999 = (i__15997 + (1));
i__15997 = G__15999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15998),tic_tac_toe$screens$board_selection$three_by_three_preview_$_iter__15995(cljs.core.chunk_rest(s__15996__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15998),null);
}
} else {
var n = cljs.core.first(s__15996__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.preview_square,(27)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)),tic_tac_toe$screens$board_selection$three_by_three_preview_$_iter__15995(cljs.core.rest(s__15996__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((9)));
})()], null);
});
tic_tac_toe.screens.board_selection.four_by_four_preview = (function tic_tac_toe$screens$board_selection$four_by_four_preview(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$four_DASH_grid,(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$board_selection$four_by_four_preview_$_iter__16000(s__16001){
return (new cljs.core.LazySeq(null,(function (){
var s__16001__$1 = s__16001;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16001__$1);
if(temp__5804__auto__){
var s__16001__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16001__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16001__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16003 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16002 = (0);
while(true){
if((i__16002 < size__5479__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5478__auto__,i__16002);
cljs.core.chunk_append(b__16003,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.preview_square,(20)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)));

var G__16004 = (i__16002 + (1));
i__16002 = G__16004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16003),tic_tac_toe$screens$board_selection$four_by_four_preview_$_iter__16000(cljs.core.chunk_rest(s__16001__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16003),null);
}
} else {
var n = cljs.core.first(s__16001__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.preview_square,(20)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)),tic_tac_toe$screens$board_selection$four_by_four_preview_$_iter__16000(cljs.core.rest(s__16001__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)));
})()], null);
});
tic_tac_toe.screens.board_selection.board_preview = (function tic_tac_toe$screens$board_selection$board_preview(n){
var G__16005 = n;
switch (G__16005) {
case (1):
return tic_tac_toe.screens.board_selection.three_by_three_preview();

break;
case (2):
return tic_tac_toe.screens.board_selection.four_by_four_preview();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16005)].join('')));

}
});
tic_tac_toe.screens.board_selection.select_board_btn = (function tic_tac_toe$screens$board_selection$select_board_btn(state,n){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$select_DASH_board_DASH_btn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(tic_tac_toe.screens.board_selection.on_click,state,n)], null),tic_tac_toe.screens.board_selection.board_preview(n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.board_prompt,n)], null);
});
tic_tac_toe.render_screen.render_screen.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$board_DASH_selection,(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_board_DASH_selection$screen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,cljs.core.first(tic_tac_toe.print_utils.board_prompt)], null),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$board_selection$iter__16007(s__16008){
return (new cljs.core.LazySeq(null,(function (){
var s__16008__$1 = s__16008;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16008__$1);
if(temp__5804__auto__){
var s__16008__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16008__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16008__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16010 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16009 = (0);
while(true){
if((i__16009 < size__5479__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5478__auto__,i__16009);
cljs.core.chunk_append(b__16010,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.select_board_btn,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)));

var G__16011 = (i__16009 + (1));
i__16009 = G__16011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16010),tic_tac_toe$screens$board_selection$iter__16007(cljs.core.chunk_rest(s__16008__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16010),null);
}
} else {
var n = cljs.core.first(s__16008__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.select_board_btn,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)),tic_tac_toe$screens$board_selection$iter__16007(cljs.core.rest(s__16008__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null));
})()], null);
}));
