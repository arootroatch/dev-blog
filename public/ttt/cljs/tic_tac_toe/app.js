// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('tic_tac_toe.app');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.state');
goog.require('tic_tac_toe.screens.mode_selection');
goog.require('tic_tac_toe.screens.board_selection');
goog.require('tic_tac_toe.screens.first_level_selection');
goog.require('tic_tac_toe.screens.second_level_selection');
goog.require('tic_tac_toe.screens.play');
tic_tac_toe.app.app = (function tic_tac_toe$app$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_app_DASH_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Tic-Tac-Toe"], null),(tic_tac_toe.render_screen.render_screen.cljs$core$IFn$_invoke$arity$1 ? tic_tac_toe.render_screen.render_screen.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.state.state) : tic_tac_toe.render_screen.render_screen.call(null,tic_tac_toe.state.state))], null);
});
