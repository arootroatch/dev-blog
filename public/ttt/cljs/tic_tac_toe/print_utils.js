// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('tic_tac_toe.print_utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
tic_tac_toe.print_utils.display_invalid_move_error = (function tic_tac_toe$print_utils$display_invalid_move_error(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Please choose an empty cell"], 0));
});
tic_tac_toe.print_utils.prompt_user_for_move = (function tic_tac_toe$print_utils$prompt_user_for_move(player,mode,board){
var letter = cljs.core.name(player).toUpperCase();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),mode)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),cljs.core.count(board))))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter),"'s turn!\nPlease enter your move (type 1-16 and hit enter):"].join('')], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),mode)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter),"'s turn!\nPlease enter your move (type 1-9 and hit enter):"].join('')], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),cljs.core.count(board))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Please enter your move (type 1-16 and hit enter):"], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Please enter your move (type 1-9 and hit enter):"], 0));

}
}
}
});
tic_tac_toe.print_utils.display_bot_thinking_message = (function tic_tac_toe$print_utils$display_bot_thinking_message(player){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Player ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(player).toUpperCase())," is thinking..."].join('')], 0));
});
tic_tac_toe.print_utils.display_bot_move_message = (function tic_tac_toe$print_utils$display_bot_move_message(move,mode,player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(4))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(player).toUpperCase())," plays ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(move),"!"].join('')], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Your opponent plays ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(move),"!"].join('')], 0));
}
});
tic_tac_toe.print_utils.print_board_selection = (function tic_tac_toe$print_utils$print_board_selection(input){
var G__11168 = input;
switch (G__11168) {
case (1):
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["3x3 board activated!\n"], 0));

break;
case (2):
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["4x4 board activated!\n"], 0));

break;
case (3):
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["3 dimensional board activated!\n"], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11168)].join('')));

}
});
tic_tac_toe.print_utils.board_prompt = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please select board:","3x3","4x4","3x3x3 (3 Dimensional)"], null);
tic_tac_toe.print_utils.prompt_user_for_board = (function tic_tac_toe$print_utils$prompt_user_for_board(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.board_prompt,(0))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["1 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.board_prompt,(1)))].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["2 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.board_prompt,(2)))].join('')], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["3 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.board_prompt,(3)))].join('')], 0));
});
tic_tac_toe.print_utils.print_level_selection = (function tic_tac_toe$print_utils$print_level_selection(level,mode,board){
var G__11170 = level;
switch (G__11170) {
case (1):
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Easy mode activated!\n"], 0));

break;
case (2):
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Medium mode activated!\n"], 0));

break;
case (3):
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),board)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),mode)))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hard mode activated!\n"], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unbeatable mode activated!\n"], 0));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11170)].join('')));

}
});
tic_tac_toe.print_utils.level_prompt = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please select level for player X:","Please select level for player O:","Please select level of difficulty:","Easy","Medium","Hard","Unbeatable"], null);
tic_tac_toe.print_utils.prompt_user_for_level = (function tic_tac_toe$print_utils$prompt_user_for_level(ai,mode,board){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ai,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(4))))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.level_prompt,(0))], 0));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ai,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(4))))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.level_prompt,(1))], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.level_prompt,(2))], 0));

}
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["1 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.level_prompt,(3)))].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["2 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.level_prompt,(4)))].join('')], 0));

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),mode)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),board)))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["3 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.level_prompt,(5)))].join('')], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["3 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.level_prompt,(6)))].join('')], 0));
}
});
tic_tac_toe.print_utils.print_mode_selection = (function tic_tac_toe$print_utils$print_mode_selection(mode){
var G__11172 = mode;
switch (G__11172) {
case (1):
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Human vs Human activated!\n"], 0));

break;
case (2):
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Human vs Computer activated!\n"], 0));

break;
case (3):
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Computer vs Human activated!\n"], 0));

break;
case (4):
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Computer vs Computer activated!\n"], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11172)].join('')));

}
});
tic_tac_toe.print_utils.mode_prompt = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please select game mode (X always plays first):","Human vs Human","Human vs Computer (Human plays first)","Computer vs Human (Computer plays first)","Computer vs Computer"], null);
tic_tac_toe.print_utils.prompt_user_for_mode = (function tic_tac_toe$print_utils$prompt_user_for_mode(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(tic_tac_toe.print_utils.mode_prompt)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["1 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.mode_prompt,(1)))].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["2 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.mode_prompt,(2)))].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["3 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.mode_prompt,(3)))].join('')], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["4 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.mode_prompt,(4)))].join('')], 0));
});
tic_tac_toe.print_utils.print_resume_selection = (function tic_tac_toe$print_utils$print_resume_selection(input){
var G__11174 = input;
switch (G__11174) {
case (1):
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Game resumed!\n"], 0));

break;
case (2):
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["New game started!\n"], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11174)].join('')));

}
});
tic_tac_toe.print_utils.resume_prompt = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There's an unfinished game! Would you like resume?","Yes","No"], null);
tic_tac_toe.print_utils.prompt_user_to_resume = (function tic_tac_toe$print_utils$prompt_user_to_resume(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(tic_tac_toe.print_utils.resume_prompt)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["1 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.resume_prompt,(1)))].join('')], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["2 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.print_utils.resume_prompt,(2)))].join('')], 0));
});
tic_tac_toe.print_utils.purple = "\u001B[35m";
tic_tac_toe.print_utils.reset = "\u001B[0m";
tic_tac_toe.print_utils.format_board = (function tic_tac_toe$print_utils$format_board(board){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11176_SHARP_){
if((p1__11176_SHARP_ instanceof cljs.core.Keyword)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__11176_SHARP_).toUpperCase())].join('');
} else {
if((p1__11176_SHARP_ < (10))){
return [" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11176_SHARP_),tic_tac_toe.print_utils.reset].join('');
} else {
return [tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11176_SHARP_),tic_tac_toe.print_utils.reset].join('');

}
}
}),board);
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.print_utils !== 'undefined') && (typeof tic_tac_toe.print_utils.print_board !== 'undefined')){
} else {
tic_tac_toe.print_utils.print_board = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__11177 = cljs.core.get_global_hierarchy;
return (fexpr__11177.cljs$core$IFn$_invoke$arity$0 ? fexpr__11177.cljs$core$IFn$_invoke$arity$0() : fexpr__11177.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tic-tac-toe.print-utils","print-board"),cljs.core.count,cljs.core.cst$kw$default,hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
tic_tac_toe.print_utils.print_board.cljs$core$IMultiFn$_add_method$arity$3(null,(9),(function (board){
var board__$1 = tic_tac_toe.print_utils.format_board(board);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(board__$1))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(board__$1))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(2))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(3)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(4)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(5))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(6)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(7)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(8))),"\n"].join('')], 0));
}));
tic_tac_toe.print_utils.print_board.cljs$core$IMultiFn$_add_method$arity$3(null,(16),(function (board){
var board__$1 = tic_tac_toe.print_utils.format_board(board);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(board__$1))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(board__$1))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(2)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(3))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(4)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(5)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(6)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(7))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(8)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(9)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(10)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(11))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(12)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(13)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(14)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board__$1,(15))),"\n"].join('')], 0));
}));
tic_tac_toe.print_utils.print_board.cljs$core$IMultiFn$_add_method$arity$3(null,(27),(function (board){
var top_board = cljs.core.first(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((9),board));
var middle_board = cljs.core.second(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((9),board));
var bottom_board = cljs.core.last(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((9),board));
(tic_tac_toe.print_utils.print_board.cljs$core$IFn$_invoke$arity$1 ? tic_tac_toe.print_utils.print_board.cljs$core$IFn$_invoke$arity$1(top_board) : tic_tac_toe.print_utils.print_board.call(null,top_board));

(tic_tac_toe.print_utils.print_board.cljs$core$IFn$_invoke$arity$1 ? tic_tac_toe.print_utils.print_board.cljs$core$IFn$_invoke$arity$1(middle_board) : tic_tac_toe.print_utils.print_board.call(null,middle_board));

return (tic_tac_toe.print_utils.print_board.cljs$core$IFn$_invoke$arity$1 ? tic_tac_toe.print_utils.print_board.cljs$core$IFn$_invoke$arity$1(bottom_board) : tic_tac_toe.print_utils.print_board.call(null,bottom_board));
}));
tic_tac_toe.print_utils.display_no_moves_error = (function tic_tac_toe$print_utils$display_no_moves_error(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["There are no moves to show for this game."], 0));
});
tic_tac_toe.print_utils.play_logged_game = (function tic_tac_toe$print_utils$play_logged_game(moves,winner){
if(cljs.core.empty_QMARK_(moves)){
return tic_tac_toe.print_utils.display_no_moves_error();
} else {
cljs.core.run_BANG_(tic_tac_toe.print_utils.print_board,moves);

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([winner], 0));
}
});
tic_tac_toe.print_utils.display_unfinished_game_error = (function tic_tac_toe$print_utils$display_unfinished_game_error(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["The requested game is unfinished. Please choose a completed game to replay."], 0));
});
tic_tac_toe.print_utils.display_invalid_game_id_error = (function tic_tac_toe$print_utils$display_invalid_game_id_error(id){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["There is no game with ID ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], 0));
});
tic_tac_toe.print_utils.display_command_options = (function tic_tac_toe$print_utils$display_command_options(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Please enter your preferences:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Format: 'lein run <ui> <db> <game id>"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["<db> is the only required field\n"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--psqldb         Run with PostgreSQL"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--edndb         Run with EDN Database"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["gui             Run GUI"], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--game <id>     Run GUI"], 0));
});
