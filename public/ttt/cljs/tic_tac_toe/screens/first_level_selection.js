// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('tic_tac_toe.screens.first_level_selection');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.screens.selection_button');
tic_tac_toe.screens.first_level_selection.on_click = (function tic_tac_toe$screens$first_level_selection$on_click(state,n){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_screen,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?cljs.core.cst$kw$second_DASH_level_DASH_selection:cljs.core.cst$kw$play));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$first_DASH_ai_DASH_level,n);
});
tic_tac_toe.screens.first_level_selection.selection_heading = (function tic_tac_toe$screens$first_level_selection$selection_heading(state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return cljs.core.first(tic_tac_toe.print_utils.level_prompt);
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.level_prompt,(2));
}
});
tic_tac_toe.screens.first_level_selection.set_number = (function tic_tac_toe$screens$first_level_selection$set_number(n){
var G__11326 = n;
switch (G__11326) {
case (3):
return (1);

break;
case (4):
return (2);

break;
case (6):
return (3);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11326)].join('')));

}
});
tic_tac_toe.render_screen.render_screen.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$first_DASH_level_DASH_selection,(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_first_DASH_level_DASH_selection$screen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,tic_tac_toe.screens.first_level_selection.selection_heading(state)], null),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$first_level_selection$iter__11328(s__11329){
return (new cljs.core.LazySeq(null,(function (){
var s__11329__$1 = s__11329;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__11329__$1);
if(temp__5804__auto__){
var s__11329__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11329__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__11329__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__11331 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__11330 = (0);
while(true){
if((i__11330 < size__5479__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5478__auto__,i__11330);
cljs.core.chunk_append(b__11331,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.selection_button.selection_button,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.level_prompt,n),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(tic_tac_toe.screens.first_level_selection.on_click,state,tic_tac_toe.screens.first_level_selection.set_number(n))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)));

var G__11332 = (i__11330 + (1));
i__11330 = G__11332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11331),tic_tac_toe$screens$first_level_selection$iter__11328(cljs.core.chunk_rest(s__11329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11331),null);
}
} else {
var n = cljs.core.first(s__11329__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.selection_button.selection_button,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.level_prompt,n),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(tic_tac_toe.screens.first_level_selection.on_click,state,tic_tac_toe.screens.first_level_selection.set_number(n))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)),tic_tac_toe$screens$first_level_selection$iter__11328(cljs.core.rest(s__11329__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(6)], null));
})()], null);
}));
