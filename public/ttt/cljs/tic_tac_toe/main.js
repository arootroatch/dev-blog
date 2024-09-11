// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('tic_tac_toe.main');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.dom');
goog.require('c3kit.wire.js');
goog.require('tic_tac_toe.app');
tic_tac_toe.main.main = (function tic_tac_toe$main$main(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.app.app], null),c3kit.wire.js.element_by_id("app"));
});
goog.exportSymbol('tic_tac_toe.main.main', tic_tac_toe.main.main);
