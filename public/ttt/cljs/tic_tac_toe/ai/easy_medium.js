// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('tic_tac_toe.ai.easy_medium');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tic_tac_toe.eval_board');
tic_tac_toe.ai.easy_medium.played_corner_QMARK_ = (function tic_tac_toe$ai$easy_medium$played_corner_QMARK_(board){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$o,null,cljs.core.cst$kw$x,null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19004_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,p1__19004_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(6),(8)], null)));
});
tic_tac_toe.ai.easy_medium.can_win_QMARK_ = (function tic_tac_toe$ai$easy_medium$can_win_QMARK_(path,player){
var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.count(path)))?(3):(2)),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([player]),path)));
if(and__5000__auto__){
return cljs.core.some(cljs.core.number_QMARK_,path);
} else {
return and__5000__auto__;
}
});
tic_tac_toe.ai.easy_medium.get_winning_move = (function tic_tac_toe$ai$easy_medium$get_winning_move(board,player){
var paths = (tic_tac_toe.eval_board.__GT_paths.cljs$core$IFn$_invoke$arity$1 ? tic_tac_toe.eval_board.__GT_paths.cljs$core$IFn$_invoke$arity$1(board) : tic_tac_toe.eval_board.__GT_paths.call(null,board));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.number_QMARK_,cljs.core.flatten(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19005_SHARP_){
return tic_tac_toe.ai.easy_medium.can_win_QMARK_(p1__19005_SHARP_,player);
}),paths))));
});
tic_tac_toe.ai.easy_medium.find_easy_move = (function tic_tac_toe$ai$easy_medium$find_easy_move(board){
var available = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.number_QMARK_,board);
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(available,cljs.core.rand_int(cljs.core.count(available)));
});
tic_tac_toe.ai.easy_medium.find_medium_move = (function tic_tac_toe$ai$easy_medium$find_medium_move(board){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),cljs.core.count(board))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,board)))))){
if(cljs.core.truth_(tic_tac_toe.ai.easy_medium.played_corner_QMARK_(board))){
return (5);
} else {
return (1);
}
} else {
if((!((tic_tac_toe.ai.easy_medium.get_winning_move(board,cljs.core.cst$kw$x) == null)))){
return tic_tac_toe.ai.easy_medium.get_winning_move(board,cljs.core.cst$kw$x);
} else {
if((!((tic_tac_toe.ai.easy_medium.get_winning_move(board,cljs.core.cst$kw$o) == null)))){
return tic_tac_toe.ai.easy_medium.get_winning_move(board,cljs.core.cst$kw$o);
} else {
return tic_tac_toe.ai.easy_medium.find_easy_move(board);

}
}
}
});
