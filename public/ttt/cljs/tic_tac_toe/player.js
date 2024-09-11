// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('tic_tac_toe.player');
goog.require('cljs.core');
goog.require('cljs.core.constants');
tic_tac_toe.player.dispatch_player = (function tic_tac_toe$player$dispatch_player(p__15971){
var map__15972 = p__15971;
var map__15972__$1 = cljs.core.__destructure_map(map__15972);
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15972__$1,cljs.core.cst$kw$player);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15972__$1,cljs.core.cst$kw$mode);
var first_ai_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15972__$1,cljs.core.cst$kw$first_DASH_ai_DASH_level);
var second_ai_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15972__$1,cljs.core.cst$kw$second_DASH_ai_DASH_level);
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.cst$kw$o)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(2))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.cst$kw$x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(3))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(4))))))))){
return first_ai_level;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.cst$kw$o)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(4))))){
return second_ai_level;
} else {
return null;
}
}
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.player !== 'undefined') && (typeof tic_tac_toe.player.take_turn !== 'undefined')){
} else {
tic_tac_toe.player.take_turn = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__15973 = cljs.core.get_global_hierarchy;
return (fexpr__15973.cljs$core$IFn$_invoke$arity$0 ? fexpr__15973.cljs$core$IFn$_invoke$arity$0() : fexpr__15973.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tic-tac-toe.player","take-turn"),tic_tac_toe.player.dispatch_player,cljs.core.cst$kw$default,hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
tic_tac_toe.player.switch_player = (function tic_tac_toe$player$switch_player(player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$x,player)){
return cljs.core.cst$kw$o;
} else {
return cljs.core.cst$kw$x;
}
});
