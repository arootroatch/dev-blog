// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('tic_tac_toe.screens.play');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('tic_tac_toe.bot_moves');
goog.require('tic_tac_toe.eval_board');
goog.require('tic_tac_toe.player');
goog.require('tic_tac_toe.render_screen');
tic_tac_toe.screens.play.on_click = (function tic_tac_toe$screens$play$on_click(state,move){
var board = cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var player = cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var new_board = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,move,player);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$board,new_board,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$player,tic_tac_toe.player.switch_player(player),cljs.core.cst$kw$game_DASH_state,tic_tac_toe.eval_board.score(new_board),cljs.core.cst$kw$human_QMARK_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?true:false)], 0));
});
tic_tac_toe.screens.play.set_token = (function tic_tac_toe$screens$play$set_token(state,n){
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),n);
if((val instanceof cljs.core.Keyword)){
return clojure.string.capitalize(cljs.core.name(val));
} else {
return null;
}
});
tic_tac_toe.screens.play.board_square = (function tic_tac_toe$screens$play$board_square(state,n){
var token = tic_tac_toe.screens.play.set_token(state,n);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$board_DASH_square,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,["index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(tic_tac_toe.screens.play.on_click,state,n),cljs.core.cst$kw$disabled,((cljs.core.not(cljs.core.cst$kw$human_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$in_DASH_progress,cljs.core.cst$kw$game_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))) || ((!((token == null)))))))], null),token], null);
});
tic_tac_toe.screens.play.ai_turn = (function tic_tac_toe$screens$play$ai_turn(state){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$in_DASH_progress,cljs.core.cst$kw$game_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))) && (cljs.core.not(cljs.core.cst$kw$human_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))))){
var new_board = (function (){var G__19042 = cljs.core.deref(state);
return (tic_tac_toe.player.take_turn.cljs$core$IFn$_invoke$arity$1 ? tic_tac_toe.player.take_turn.cljs$core$IFn$_invoke$arity$1(G__19042) : tic_tac_toe.player.take_turn.call(null,G__19042));
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$player,tic_tac_toe.player.switch_player(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$board,new_board,cljs.core.cst$kw$game_DASH_state,tic_tac_toe.eval_board.score(new_board),cljs.core.cst$kw$human_QMARK_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?false:true)], 0));
} else {
return null;
}
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.screens !== 'undefined') && (typeof tic_tac_toe.screens.play !== 'undefined') && (typeof tic_tac_toe.screens.play.render_board !== 'undefined')){
} else {
tic_tac_toe.screens.play.render_board = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__19043 = cljs.core.get_global_hierarchy;
return (fexpr__19043.cljs$core$IFn$_invoke$arity$0 ? fexpr__19043.cljs$core$IFn$_invoke$arity$0() : fexpr__19043.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tic-tac-toe.screens.play","render-board"),(function (state){
return cljs.core.count(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
}),cljs.core.cst$kw$default,hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
tic_tac_toe.screens.play.render_board.cljs$core$IMultiFn$_add_method$arity$3(null,(9),(function (state){
React.useEffect(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.screens.play.ai_turn,state));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$three_DASH_grid,(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$play$iter__19044(s__19045){
return (new cljs.core.LazySeq(null,(function (){
var s__19045__$1 = s__19045;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19045__$1);
if(temp__5804__auto__){
var s__19045__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19045__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__19045__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__19047 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__19046 = (0);
while(true){
if((i__19046 < size__5479__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5478__auto__,i__19046);
cljs.core.chunk_append(b__19047,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.play.board_square,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)));

var G__19048 = (i__19046 + (1));
i__19046 = G__19048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19047),tic_tac_toe$screens$play$iter__19044(cljs.core.chunk_rest(s__19045__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19047),null);
}
} else {
var n = cljs.core.first(s__19045__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.play.board_square,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)),tic_tac_toe$screens$play$iter__19044(cljs.core.rest(s__19045__$2)));
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
}));
tic_tac_toe.screens.play.render_board.cljs$core$IMultiFn$_add_method$arity$3(null,(16),(function (state){
React.useEffect(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.screens.play.ai_turn,state));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$four_DASH_grid,(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$play$iter__19049(s__19050){
return (new cljs.core.LazySeq(null,(function (){
var s__19050__$1 = s__19050;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19050__$1);
if(temp__5804__auto__){
var s__19050__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19050__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__19050__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__19052 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__19051 = (0);
while(true){
if((i__19051 < size__5479__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5478__auto__,i__19051);
cljs.core.chunk_append(b__19052,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.play.board_square,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)));

var G__19053 = (i__19051 + (1));
i__19051 = G__19053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19052),tic_tac_toe$screens$play$iter__19049(cljs.core.chunk_rest(s__19050__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19052),null);
}
} else {
var n = cljs.core.first(s__19050__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.play.board_square,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)),tic_tac_toe$screens$play$iter__19049(cljs.core.rest(s__19050__$2)));
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
}));
tic_tac_toe.screens.play.play_heading = (function tic_tac_toe$screens$play$play_heading(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2_SHARP_play_DASH_heading,(function (){var player = (function (){var G__19054 = cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var G__19054__$1 = (((G__19054 == null))?null:cljs.core.name(G__19054));
if((G__19054__$1 == null)){
return null;
} else {
return clojure.string.capitalize(G__19054__$1);
}
})();
var game_state = cljs.core.cst$kw$game_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$in_DASH_progress,game_state)){
return [player,"'s turn!"].join('');
} else {
return game_state;
}
})()], null);
});
tic_tac_toe.screens.play.reset_state = (function tic_tac_toe$screens$play$reset_state(state){
return cljs.core.reset_BANG_(state,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$current_DASH_screen,cljs.core.cst$kw$second_DASH_ai_DASH_level,cljs.core.cst$kw$mode,cljs.core.cst$kw$first_DASH_ai_DASH_level,cljs.core.cst$kw$game_DASH_state,cljs.core.cst$kw$human_QMARK_,cljs.core.cst$kw$ui,cljs.core.cst$kw$player,cljs.core.cst$kw$board],[cljs.core.cst$kw$mode_DASH_selection,null,null,null,cljs.core.cst$kw$in_DASH_progress,true,cljs.core.cst$kw$gui,cljs.core.cst$kw$x,null]));
});
tic_tac_toe.render_screen.render_screen.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$play,(function (state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_board_DASH_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.play.play_heading,state], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,tic_tac_toe.screens.play.render_board,state], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$in_DASH_progress,cljs.core.cst$kw$game_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button_SHARP_restart,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.screens.play.reset_state,state)], null),"Restart"], null):null)], null);
}));
