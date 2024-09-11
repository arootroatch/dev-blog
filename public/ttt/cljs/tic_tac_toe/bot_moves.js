// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('tic_tac_toe.bot_moves');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tic_tac_toe.ai.easy_medium');
goog.require('tic_tac_toe.ai.minimax');
goog.require('tic_tac_toe.player');
goog.require('tic_tac_toe.print_utils');
tic_tac_toe.bot_moves.play_bot_move = (function tic_tac_toe$bot_moves$play_bot_move(move,board,mode,player,ui){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ui,cljs.core.cst$kw$tui)){
tic_tac_toe.print_utils.display_bot_move_message(move,mode,player);
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,(move - (1)),player);
});
tic_tac_toe.player.take_turn.cljs$core$IMultiFn$_add_method$arity$3(null,(1),(function (p__19034){
var map__19035 = p__19034;
var map__19035__$1 = cljs.core.__destructure_map(map__19035);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19035__$1,cljs.core.cst$kw$board);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19035__$1,cljs.core.cst$kw$mode);
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19035__$1,cljs.core.cst$kw$player);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19035__$1,cljs.core.cst$kw$ui);
var move = tic_tac_toe.ai.easy_medium.find_easy_move(board);
return tic_tac_toe.bot_moves.play_bot_move(move,board,mode,player,ui);
}));
tic_tac_toe.player.take_turn.cljs$core$IMultiFn$_add_method$arity$3(null,(2),(function (p__19036){
var map__19037 = p__19036;
var map__19037__$1 = cljs.core.__destructure_map(map__19037);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19037__$1,cljs.core.cst$kw$board);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19037__$1,cljs.core.cst$kw$mode);
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19037__$1,cljs.core.cst$kw$player);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19037__$1,cljs.core.cst$kw$ui);
var move = tic_tac_toe.ai.easy_medium.find_medium_move(board);
return tic_tac_toe.bot_moves.play_bot_move(move,board,mode,player,ui);
}));
tic_tac_toe.player.take_turn.cljs$core$IMultiFn$_add_method$arity$3(null,(3),(function (p__19038){
var map__19039 = p__19038;
var map__19039__$1 = cljs.core.__destructure_map(map__19039);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19039__$1,cljs.core.cst$kw$board);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19039__$1,cljs.core.cst$kw$mode);
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19039__$1,cljs.core.cst$kw$player);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19039__$1,cljs.core.cst$kw$ui);
var move = (tic_tac_toe.ai.minimax.find_best_move_memo.cljs$core$IFn$_invoke$arity$3 ? tic_tac_toe.ai.minimax.find_best_move_memo.cljs$core$IFn$_invoke$arity$3(board,player,ui) : tic_tac_toe.ai.minimax.find_best_move_memo.call(null,board,player,ui));
return tic_tac_toe.bot_moves.play_bot_move(move,board,mode,player,ui);
}));
