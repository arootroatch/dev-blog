// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('tic_tac_toe.eval_board');
goog.require('cljs.core');
goog.require('cljs.core.constants');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.eval_board !== 'undefined') && (typeof tic_tac_toe.eval_board.__GT_paths !== 'undefined')){
} else {
tic_tac_toe.eval_board.__GT_paths = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__10773 = cljs.core.get_global_hierarchy;
return (fexpr__10773.cljs$core$IFn$_invoke$arity$0 ? fexpr__10773.cljs$core$IFn$_invoke$arity$0() : fexpr__10773.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tic-tac-toe.eval-board","->paths"),cljs.core.count,cljs.core.cst$kw$default,hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
tic_tac_toe.eval_board.__GT_paths.cljs$core$IMultiFn$_add_method$arity$3(null,(9),(function (board){

return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),board),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10774_SHARP_){
return cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((3),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(p1__10774_SHARP_,board));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((4),board),(new cljs.core.List(null,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),board))),null,(1),null)),(2),null))], 0));
}));
tic_tac_toe.eval_board.__GT_paths.cljs$core$IMultiFn$_add_method$arity$3(null,(16),(function (board){

return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((4),board),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10775_SHARP_){
return cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((4),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(p1__10775_SHARP_,board));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((5),board),(new cljs.core.List(null,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((3),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),board))),null,(1),null)),(2),null))], 0));
}));
tic_tac_toe.eval_board.__GT_3D_diagonals = (function tic_tac_toe$eval_board$__GT_3D_diagonals(board){
return (new cljs.core.List(null,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((13),board),(new cljs.core.List(null,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((11),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),board)),(new cljs.core.List(null,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((7),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((6),board)),(new cljs.core.List(null,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((5),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((8),board))),null,(1),null)),(2),null)),(3),null)),(4),null));
});
tic_tac_toe.eval_board.__GT_2D_diagonals = (function tic_tac_toe$eval_board$__GT_2D_diagonals(board){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10776_SHARP_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((4),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(p1__10776_SHARP_,board)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(9),(18)], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10777_SHARP_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(p1__10777_SHARP_,board)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(11),(20)], null)));
});
tic_tac_toe.eval_board.__GT_paths.cljs$core$IMultiFn$_add_method$arity$3(null,(27),(function (board){

return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),board),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10778_SHARP_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((3),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(p1__10778_SHARP_,board)));
}),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(9),(10),(11),(18),(19),(20)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tic_tac_toe.eval_board.__GT_2D_diagonals(board),tic_tac_toe.eval_board.__GT_3D_diagonals(board),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10779_SHARP_){
return cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((9),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(p1__10779_SHARP_,board));
}),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null))], 0));
}));
tic_tac_toe.eval_board.score = (function tic_tac_toe$eval_board$score(board){
var paths = (tic_tac_toe.eval_board.__GT_paths.cljs$core$IFn$_invoke$arity$1 ? tic_tac_toe.eval_board.__GT_paths.cljs$core$IFn$_invoke$arity$1(board) : tic_tac_toe.eval_board.__GT_paths.call(null,board));
if(cljs.core.truth_(cljs.core.some((function (p1__10780_SHARP_){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,null], null), null),p1__10780_SHARP_);
}),paths))){
return "X wins!";
} else {
if(cljs.core.truth_(cljs.core.some((function (p1__10781_SHARP_){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$o,null], null), null),p1__10781_SHARP_);
}),paths))){
return "O wins!";
} else {
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$o,null,cljs.core.cst$kw$x,null], null), null),board)){
return "It is a tie!";
} else {
return cljs.core.cst$kw$in_DASH_progress;

}
}
}
});
tic_tac_toe.eval_board.evaluate_board = (function tic_tac_toe$eval_board$evaluate_board(board,depth,maximizer){
var paths = (tic_tac_toe.eval_board.__GT_paths.cljs$core$IFn$_invoke$arity$1 ? tic_tac_toe.eval_board.__GT_paths.cljs$core$IFn$_invoke$arity$1(board) : tic_tac_toe.eval_board.__GT_paths.call(null,board));
var minimizer = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(maximizer,cljs.core.cst$kw$x))?cljs.core.cst$kw$o:cljs.core.cst$kw$x);
if(cljs.core.truth_(cljs.core.some((function (p1__10782_SHARP_){
return cljs.core.every_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([minimizer]),p1__10782_SHARP_);
}),paths))){
return ((-10) + depth);
} else {
if(cljs.core.truth_(cljs.core.some((function (p1__10783_SHARP_){
return cljs.core.every_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([maximizer]),p1__10783_SHARP_);
}),paths))){
return ((10) - depth);
} else {
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$o,null,cljs.core.cst$kw$x,null], null), null),board)){
return (0);
} else {
return cljs.core.cst$kw$in_DASH_progress;

}
}
}
});
