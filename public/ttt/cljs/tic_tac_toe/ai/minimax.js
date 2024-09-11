// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('tic_tac_toe.ai.minimax');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tic_tac_toe.ai.easy_medium');
goog.require('tic_tac_toe.ai.lookup_tables');
goog.require('tic_tac_toe.eval_board');
goog.require('tic_tac_toe.player');
goog.require('tic_tac_toe.print_utils');
tic_tac_toe.ai.minimax.get_player_paths = (function tic_tac_toe$ai$minimax$get_player_paths(board,player){
var paths = (tic_tac_toe.eval_board.__GT_paths.cljs$core$IFn$_invoke$arity$1 ? tic_tac_toe.eval_board.__GT_paths.cljs$core$IFn$_invoke$arity$1(board) : tic_tac_toe.eval_board.__GT_paths.call(null,board));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19008_SHARP_){
var and__5000__auto__ = (!(cljs.core.contains_QMARK_(cljs.core.set(p1__19008_SHARP_),tic_tac_toe.player.switch_player(player))));
if(and__5000__auto__){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([player]),p1__19008_SHARP_);
} else {
return and__5000__auto__;
}
}),paths);
});
tic_tac_toe.ai.minimax.get_player_moves = (function tic_tac_toe$ai$minimax$get_player_moves(board,player){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.number_QMARK_,cljs.core.flatten(tic_tac_toe.ai.minimax.get_player_paths(board,player)));
});
tic_tac_toe.ai.minimax.get_relevant_moves = (function tic_tac_toe$ai$minimax$get_relevant_moves(board,player){
var available = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.number_QMARK_,board);
var opponent_moves = tic_tac_toe.ai.minimax.get_player_moves(board,tic_tac_toe.player.switch_player(player));
var player_moves = tic_tac_toe.ai.minimax.get_player_moves(board,player);
var overlap = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(player_moves),cljs.core.set(opponent_moves));
if((((cljs.core.count(overlap) > (3))) && ((cljs.core.count(available) > (16))))){
if((cljs.core.count(overlap) > (6))){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((6),overlap);
} else {
return overlap;
}
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not_empty(player_moves);
if(cljs.core.truth_(and__5000__auto__)){
return (cljs.core.count(available) > (16));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.set(player_moves);
} else {
if((cljs.core.count(available) > (16))){
return cljs.core.set(opponent_moves);
} else {
return available;

}
}
}
});
tic_tac_toe.ai.minimax.minimax_move = (function tic_tac_toe$ai$minimax$minimax_move(board,max_QMARK_,player,depth,alpha,beta){
var available = tic_tac_toe.ai.minimax.get_relevant_moves(board,player);
var best_score = (cljs.core.truth_(max_QMARK_)?(-1000):(1000));
var new_alpha = alpha;
var new_beta = beta;
while(true){
if(((cljs.core.empty_QMARK_(available)) || ((alpha > beta)))){
return best_score;
} else {
var move = cljs.core.first(available);
var new_board = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,(move - (1)),player);
var score = (function (){var G__19015 = new_board;
var G__19016 = cljs.core.not(max_QMARK_);
var G__19017 = (depth + (1));
var G__19018 = tic_tac_toe.player.switch_player(player);
var G__19019 = new_alpha;
var G__19020 = new_beta;
return (tic_tac_toe.ai.minimax.minimax.cljs$core$IFn$_invoke$arity$6 ? tic_tac_toe.ai.minimax.minimax.cljs$core$IFn$_invoke$arity$6(G__19015,G__19016,G__19017,G__19018,G__19019,G__19020) : tic_tac_toe.ai.minimax.minimax.call(null,G__19015,G__19016,G__19017,G__19018,G__19019,G__19020));
})();
if(cljs.core.truth_(max_QMARK_)){
var G__19021 = cljs.core.rest(available);
var G__19022 = (function (){var x__5087__auto__ = best_score;
var y__5088__auto__ = score;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var G__19023 = (function (){var x__5087__auto__ = alpha;
var y__5088__auto__ = score;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var G__19024 = beta;
available = G__19021;
best_score = G__19022;
new_alpha = G__19023;
new_beta = G__19024;
continue;
} else {
var G__19025 = cljs.core.rest(available);
var G__19026 = (function (){var x__5090__auto__ = best_score;
var y__5091__auto__ = score;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var G__19027 = alpha;
var G__19028 = (function (){var x__5090__auto__ = beta;
var y__5091__auto__ = score;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
available = G__19025;
best_score = G__19026;
new_alpha = G__19027;
new_beta = G__19028;
continue;
}
}
break;
}
});
tic_tac_toe.ai.minimax.minimax_move_memo = cljs.core.memoize(tic_tac_toe.ai.minimax.minimax_move);
tic_tac_toe.ai.minimax.minimax = (function tic_tac_toe$ai$minimax$minimax(board,max_QMARK_,depth,player,alpha,beta){
var maximizer = (cljs.core.truth_(max_QMARK_)?player:tic_tac_toe.player.switch_player(player));
var game_state = tic_tac_toe.eval_board.evaluate_board(board,depth,maximizer);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$in_DASH_progress,game_state)){
return game_state;
} else {
if((depth > (4))){
return (0);
} else {
return (tic_tac_toe.ai.minimax.minimax_move_memo.cljs$core$IFn$_invoke$arity$6 ? tic_tac_toe.ai.minimax.minimax_move_memo.cljs$core$IFn$_invoke$arity$6(board,max_QMARK_,player,depth,alpha,beta) : tic_tac_toe.ai.minimax.minimax_move_memo.call(null,board,max_QMARK_,player,depth,alpha,beta));

}
}
});
tic_tac_toe.ai.minimax.search_with_minimax = (function tic_tac_toe$ai$minimax$search_with_minimax(board,player,gui){
var available = tic_tac_toe.ai.minimax.get_relevant_moves(board,player);
var best_move = (-1);
var best_score = (-1000);
while(true){
if(cljs.core.not(gui)){
tic_tac_toe.print_utils.display_bot_thinking_message(player);
} else {
}

if(cljs.core.empty_QMARK_(available)){
return best_move;
} else {
var move = cljs.core.first(available);
var new_board = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,(move - (1)),player);
var score = tic_tac_toe.ai.minimax.minimax(new_board,false,(0),tic_tac_toe.player.switch_player(player),(-1000),(1000));
var G__19029 = cljs.core.rest(available);
var G__19030 = (((score > best_score))?move:best_move);
var G__19031 = (function (){var x__5087__auto__ = score;
var y__5088__auto__ = best_score;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
available = G__19029;
best_move = G__19030;
best_score = G__19031;
continue;
}
break;
}
});
tic_tac_toe.ai.minimax.search_with_minimax_memo = cljs.core.memoize(tic_tac_toe.ai.minimax.search_with_minimax);
tic_tac_toe.ai.minimax.find_best_move = (function tic_tac_toe$ai$minimax$find_best_move(board,player,gui){
var available = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.number_QMARK_,board);
var winning_move = tic_tac_toe.ai.easy_medium.get_winning_move(board,player);
var blocking_move = tic_tac_toe.ai.easy_medium.get_winning_move(board,tic_tac_toe.player.switch_player(player));
var move_table = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.cst$kw$x))?tic_tac_toe.ai.lookup_tables.move_table_x:tic_tac_toe.ai.lookup_tables.move_table_o);
if(cljs.core.every_QMARK_(cljs.core.number_QMARK_,board)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),cljs.core.count(board))){
return (14);
} else {
return (1);
}
} else {
if((!((winning_move == null)))){
return winning_move;
} else {
if((!((blocking_move == null)))){
return blocking_move;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),cljs.core.count(board))) && ((cljs.core.count(available) >= (12))))){
return cljs.core.first(available);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),cljs.core.count(board))) && (typeof cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,(13)) === 'number'))){
return (14);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),cljs.core.count(board))) && (cljs.core.contains_QMARK_(move_table,board)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(move_table,board);
} else {
return (tic_tac_toe.ai.minimax.search_with_minimax_memo.cljs$core$IFn$_invoke$arity$3 ? tic_tac_toe.ai.minimax.search_with_minimax_memo.cljs$core$IFn$_invoke$arity$3(board,player,gui) : tic_tac_toe.ai.minimax.search_with_minimax_memo.call(null,board,player,gui));

}
}
}
}
}
}
});
tic_tac_toe.ai.minimax.find_best_move_memo = cljs.core.memoize(tic_tac_toe.ai.minimax.find_best_move);
