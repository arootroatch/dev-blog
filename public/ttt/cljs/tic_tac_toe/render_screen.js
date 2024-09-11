// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('tic_tac_toe.render_screen');
goog.require('cljs.core');
goog.require('cljs.core.constants');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.render_screen !== 'undefined') && (typeof tic_tac_toe.render_screen.render_screen !== 'undefined')){
} else {
tic_tac_toe.render_screen.render_screen = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__11323 = cljs.core.get_global_hierarchy;
return (fexpr__11323.cljs$core$IFn$_invoke$arity$0 ? fexpr__11323.cljs$core$IFn$_invoke$arity$0() : fexpr__11323.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tic-tac-toe.render-screen","render-screen"),(function (state){
return cljs.core.cst$kw$current_DASH_screen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
}),cljs.core.cst$kw$default,hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
