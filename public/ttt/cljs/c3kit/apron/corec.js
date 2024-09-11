// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('c3kit.apron.corec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.apron.test_fabric');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.object');
goog.scope(function(){
c3kit.apron.corec.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Like for-all, but with map
 */
c3kit.apron.corec.map_all = (function c3kit$apron$corec$map_all(var_args){
var G__16135 = arguments.length;
switch (G__16135) {
case 2:
return c3kit.apron.corec.map_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___16137 = arguments.length;
var i__5727__auto___16138 = (0);
while(true){
if((i__5727__auto___16138 < len__5726__auto___16137)){
args_arr__5751__auto__.push((arguments[i__5727__auto___16138]));

var G__16139 = (i__5727__auto___16138 + (1));
i__5727__auto___16138 = G__16139;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return c3kit.apron.corec.map_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(c3kit.apron.corec.map_all.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll));
}));

(c3kit.apron.corec.map_all.cljs$core$IFn$_invoke$arity$variadic = (function (f,coll,colls){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.map,f,coll,colls));
}));

/** @this {Function} */
(c3kit.apron.corec.map_all.cljs$lang$applyTo = (function (seq16132){
var G__16133 = cljs.core.first(seq16132);
var seq16132__$1 = cljs.core.next(seq16132);
var G__16134 = cljs.core.first(seq16132__$1);
var seq16132__$2 = cljs.core.next(seq16132__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16133,G__16134,seq16132__$2);
}));

(c3kit.apron.corec.map_all.cljs$lang$maxFixedArity = (2));

/**
 * Creates a collection where each element is put into component syntax: [component-fn item]
 *    Each component is given a React key using (key-fn item).
 */
c3kit.apron.corec.map_component = (function c3kit$apron$corec$map_component(key_fn,component_fn,coll){
return c3kit.apron.corec.map_all.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_fn,x], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(x) : key_fn.call(null,x))], null));
}),coll);
});
/**
 * Like for-all, but with map-indexed
 */
c3kit.apron.corec.map_all_indexed = (function c3kit$apron$corec$map_all_indexed(f,coll){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(f,coll));
});
/**
 * assoc for js objects
 */
c3kit.apron.corec.oset = (function c3kit$apron$corec$oset(o,k,v){
if((o == null)){
var G__16142 = cljs.core.name(k);
var obj16144 = ({});
(obj16144[G__16142] = v);

return obj16144;
} else {
var G__16145_16148 = o;
var G__16146_16149 = cljs.core.name(k);
var G__16147_16150 = v;
c3kit.apron.corec.goog$module$goog$object.set.call(null,G__16145_16148,G__16146_16149,G__16147_16150);

return o;
}
});
c3kit.apron.corec.k_name = (function c3kit$apron$corec$k_name(k){
if(typeof k === 'number'){
return k;
} else {
return cljs.core.name(k);
}
});
c3kit.apron.corec.o_name = (function c3kit$apron$corec$o_name(obj){
if(cljs.core.vector_QMARK_(obj)){
return "vector";
} else {
if(cljs.core.list_QMARK_(obj)){
return "list";
} else {
if(cljs.core.set_QMARK_(obj)){
return "set";
} else {
if((obj instanceof cljs.core.Keyword)){
return "keyword";
} else {
return clojure.string.lower_case((function (){var G__16151 = cljs.core.type(obj);
var G__16152 = "name";
return c3kit.apron.corec.goog$module$goog$object.get.call(null,G__16151,G__16152);
})());

}
}
}
}
});
c3kit.apron.corec.maybe_type_error = (function c3kit$apron$corec$maybe_type_error(k,obj){
if(cljs.core.truth_(cljs.core.some((function (p1__16153_SHARP_){
return (p1__16153_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16153_SHARP_.cljs$core$IFn$_invoke$arity$1(obj) : p1__16153_SHARP_.call(null,obj));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,cljs.core.keyword_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_], null)))){
var type_name = c3kit.apron.corec.o_name(obj);
var k__$1 = c3kit.apron.corec.k_name(k);
throw (new TypeError(["Cannot create property '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$1),"' on ",type_name," '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj),"'"].join('')));
} else {
return null;
}
});
/**
 * assoc-in for js objects
 */
c3kit.apron.corec.oset_in = (function c3kit$apron$corec$oset_in(o,ks,v){
if(cljs.core.not(cljs.core.seq(ks))){
return o;
} else {
var o__$1 = (((o == null))?({}):o);
var o_16173__$2 = o__$1;
var G__16159_16174 = ks;
var vec__16160_16175 = G__16159_16174;
var seq__16161_16176 = cljs.core.seq(vec__16160_16175);
var first__16162_16177 = cljs.core.first(seq__16161_16176);
var seq__16161_16178__$1 = cljs.core.next(seq__16161_16176);
var k_16179 = first__16162_16177;
var ks_16180__$1 = seq__16161_16178__$1;
var o_16181__$3 = o_16173__$2;
var G__16159_16182__$1 = G__16159_16174;
while(true){
var o_16183__$4 = o_16181__$3;
var vec__16168_16184 = G__16159_16182__$1;
var seq__16169_16185 = cljs.core.seq(vec__16168_16184);
var first__16170_16186 = cljs.core.first(seq__16169_16185);
var seq__16169_16187__$1 = cljs.core.next(seq__16169_16185);
var k_16188__$1 = first__16170_16186;
var ks_16189__$2 = seq__16169_16187__$1;
var k_16190__$2 = c3kit.apron.corec.k_name(k_16188__$1);
if(cljs.core.seq(ks_16189__$2)){
var temp__5802__auto___16191 = c3kit.apron.corec.goog$module$goog$object.get.call(null,o_16183__$4,k_16190__$2);
if(cljs.core.truth_(temp__5802__auto___16191)){
var o_next_16192 = temp__5802__auto___16191;
var or__5002__auto___16193 = c3kit.apron.corec.maybe_type_error(cljs.core.first(ks_16189__$2),o_next_16192);
if(cljs.core.truth_(or__5002__auto___16193)){
} else {
var G__16194 = o_next_16192;
var G__16195 = ks_16189__$2;
o_16181__$3 = G__16194;
G__16159_16182__$1 = G__16195;
continue;
}
} else {
var o_next_16196 = ({});
c3kit.apron.corec.goog$module$goog$object.set.call(null,o_16183__$4,k_16190__$2,o_next_16196);

var G__16197 = o_next_16196;
var G__16198 = ks_16189__$2;
o_16181__$3 = G__16197;
G__16159_16182__$1 = G__16198;
continue;
}
} else {
c3kit.apron.corec.goog$module$goog$object.set.call(null,o_16183__$4,k_16190__$2,v);
}
break;
}

return o__$1;
}
});
/**
 * get for js objects
 */
c3kit.apron.corec.oget = (function c3kit$apron$corec$oget(var_args){
var G__16200 = arguments.length;
switch (G__16200) {
case 2:
return c3kit.apron.corec.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
var G__16201 = o;
var G__16202 = cljs.core.name(k);
var G__16203 = null;
return c3kit.apron.corec.goog$module$goog$object.get.call(null,G__16201,G__16202,G__16203);
}));

(c3kit.apron.corec.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
var G__16204 = o;
var G__16205 = cljs.core.name(k);
var G__16206 = not_found;
return c3kit.apron.corec.goog$module$goog$object.get.call(null,G__16204,G__16205,G__16206);
}));

(c3kit.apron.corec.oget.cljs$lang$maxFixedArity = 3);

/**
 * get-in for js objects
 */
c3kit.apron.corec.oget_in = (function c3kit$apron$corec$oget_in(var_args){
var G__16210 = arguments.length;
switch (G__16210) {
case 2:
return c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$2 = (function (o,ks){
return c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$3(o,ks,null);
}));

(c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$3 = (function (o,ks,not_found){
var or__5002__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(c3kit.apron.corec.goog$module$goog$object.getValueByKeys,o,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16208_SHARP_){
if(typeof p1__16208_SHARP_ === 'number'){
return p1__16208_SHARP_;
} else {
return cljs.core.name(p1__16208_SHARP_);
}
}),ks));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(c3kit.apron.corec.oget_in.cljs$lang$maxFixedArity = 3);

c3kit.apron.corec.new_uuid = (function c3kit$apron$corec$new_uuid(){
return cljs.core.random_uuid();
});
/**
 * ensures the seq is a vector before conj-ing
 */
c3kit.apron.corec.conjv = (function c3kit$apron$corec$conjv(col,item){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(col),item);
});
/**
 * ensures the seq is a vector after concat-ing
 */
c3kit.apron.corec.concatv = (function c3kit$apron$corec$concatv(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16213 = arguments.length;
var i__5727__auto___16214 = (0);
while(true){
if((i__5727__auto___16214 < len__5726__auto___16213)){
args__5732__auto__.push((arguments[i__5727__auto___16214]));

var G__16215 = (i__5727__auto___16214 + (1));
i__5727__auto___16214 = G__16215;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return c3kit.apron.corec.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(c3kit.apron.corec.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (cols){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cols));
}));

(c3kit.apron.corec.concatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.apron.corec.concatv.cljs$lang$applyTo = (function (seq16212){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16212));
}));

/**
 * insert elem into vector at index 
 */
c3kit.apron.corec.assocv = (function c3kit$apron$corec$assocv(coll,i,elem){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),i),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,i)], 0)));
});
/**
 * removes the item at index i from the vector
 */
c3kit.apron.corec.dissocv = (function c3kit$apron$corec$dissocv(coll,i){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,(i + (1)))));
});
/**
 * assocv with coll as last param
 */
c3kit.apron.corec.assocv_GT__GT_ = (function c3kit$apron$corec$assocv_GT__GT_(i,elem,coll){
return c3kit.apron.corec.assocv(coll,i,elem);
});
/**
 * dissocv with coll as last param
 */
c3kit.apron.corec.dissocv_GT__GT_ = (function c3kit$apron$corec$dissocv_GT__GT_(i,coll){
return c3kit.apron.corec.dissocv(coll,i);
});
c3kit.apron.corec.removev = (function c3kit$apron$corec$removev(pred,col){

return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,col));
});
c3kit.apron.corec.removev_EQ_ = (function c3kit$apron$corec$removev_EQ_(col,item){

return c3kit.apron.corec.removev((function (p1__16216_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16216_SHARP_,item);
}),col);
});
/**
 * Same as (first (filter ...)), but faster!
 */
c3kit.apron.corec.ffilter = (function c3kit$apron$corec$ffilter(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,b){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(b) : pred.call(null,b)))){
return cljs.core.reduced(b);
} else {
return null;
}
}),null,coll);
});
/**
 * Sums the results of a function applied to the elements of a collection
 */
c3kit.apron.corec.sum_by = (function c3kit$apron$corec$sum_by(f,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core._PLUS_,coll);
});
/**
 * DEPRECATED: Use `keep` instead.
 * Like (filter some? (map f coll)).
 * Returns a transducer when no collection is provided.
 */
c3kit.apron.corec.map_some = (function c3kit$apron$corec$map_some(var_args){
var G__16221 = arguments.length;
switch (G__16221) {
case 1:
return c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___16223 = arguments.length;
var i__5727__auto___16224 = (0);
while(true){
if((i__5727__auto___16224 < len__5726__auto___16223)){
args_arr__5751__auto__.push((arguments[i__5727__auto___16224]));

var G__16225 = (i__5727__auto___16224 + (1));
i__5727__auto___16224 = G__16225;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_));
}));

(c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$1(f),coll);
}));

(c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$variadic = (function (f,coll,colls){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence,c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$1(f),coll,colls);
}));

/** @this {Function} */
(c3kit.apron.corec.map_some.cljs$lang$applyTo = (function (seq16218){
var G__16219 = cljs.core.first(seq16218);
var seq16218__$1 = cljs.core.next(seq16218);
var G__16220 = cljs.core.first(seq16218__$1);
var seq16218__$2 = cljs.core.next(seq16218__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16219,G__16220,seq16218__$2);
}));

(c3kit.apron.corec.map_some.cljs$lang$maxFixedArity = (2));

/**
 * Like (map f (filter some? coll)).
 * Returns a transducer when no collection is provided.
 */
c3kit.apron.corec.some_map = (function c3kit$apron$corec$some_map(var_args){
var G__16227 = arguments.length;
switch (G__16227) {
case 1:
return c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(f));
}));

(c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$1(f),coll);
}));

(c3kit.apron.corec.some_map.cljs$lang$maxFixedArity = 2);

/**
 * Like (set (map f coll))
 */
c3kit.apron.corec.map_set = (function c3kit$apron$corec$map_set(f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),coll);
});
/**
 * Like (set (mapcat f coll))
 */
c3kit.apron.corec.mapcat_set = (function c3kit$apron$corec$mapcat_set(f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(f),coll);
});
/**
 * Like (distinct (map f coll))
 */
c3kit.apron.corec.map_distinct = (function c3kit$apron$corec$map_distinct(var_args){
var G__16230 = arguments.length;
switch (G__16230) {
case 1:
return c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0());
}));

(c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$1(f),coll);
}));

(c3kit.apron.corec.map_distinct.cljs$lang$maxFixedArity = 2);

/**
 * Same as sort, but reversed
 */
c3kit.apron.corec.rsort = (function c3kit$apron$corec$rsort(var_args){
var G__16233 = arguments.length;
switch (G__16233) {
case 1:
return c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,coll);
}));

(c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$2 = (function (comp,coll){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(y,x) : comp.call(null,y,x));
}),coll);
}));

(c3kit.apron.corec.rsort.cljs$lang$maxFixedArity = 2);

/**
 * Same as sort-by, but reversed
 */
c3kit.apron.corec.rsort_by = (function c3kit$apron$corec$rsort_by(var_args){
var G__16236 = arguments.length;
switch (G__16236) {
case 2:
return c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
return c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cljs.core.compare,coll);
}));

(c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$3 = (function (keyfn,comp,coll){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,(function (x,y){
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(y,x) : comp.call(null,y,x));
}),coll);
}));

(c3kit.apron.corec.rsort_by.cljs$lang$maxFixedArity = 3);

/**
 * Returns a lazy sequence of the items in coll starting from the
 * first item for which (pred item) returns logical true.  Returns a
 * stateful transducer when no collection is provided.
 */
c3kit.apron.corec.drop_until = (function c3kit$apron$corec$drop_until(var_args){
var G__16239 = arguments.length;
switch (G__16239) {
case 1:
return c3kit.apron.corec.drop_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.drop_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.drop_until.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1(cljs.core.complement(pred));
}));

(c3kit.apron.corec.drop_until.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
}));

(c3kit.apron.corec.drop_until.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of successive items from coll while
 * (pred item) returns logical false. pred must be free of side effects.
 * Returns a transducer when no collection is provided.
 */
c3kit.apron.corec.take_until = (function c3kit$apron$corec$take_until(var_args){
var G__16242 = arguments.length;
switch (G__16242) {
case 1:
return c3kit.apron.corec.take_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.take_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.take_until.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$1(cljs.core.complement(pred));
}));

(c3kit.apron.corec.take_until.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
}));

(c3kit.apron.corec.take_until.cljs$lang$maxFixedArity = 2);

c3kit.apron.corec.greatest_v = (function c3kit$apron$corec$greatest_v(var_args){
var G__16250 = arguments.length;
switch (G__16250) {
case 1:
return c3kit.apron.corec.greatest_v.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___16253 = arguments.length;
var i__5727__auto___16254 = (0);
while(true){
if((i__5727__auto___16254 < len__5726__auto___16253)){
args_arr__5751__auto__.push((arguments[i__5727__auto___16254]));

var G__16255 = (i__5727__auto___16254 + (1));
i__5727__auto___16254 = G__16255;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return c3kit.apron.corec.greatest_v.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(c3kit.apron.corec.greatest_v.cljs$core$IFn$_invoke$arity$1 = (function (_){
return null;
}));

(c3kit.apron.corec.greatest_v.cljs$core$IFn$_invoke$arity$variadic = (function (greater_QMARK_,init,vals){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16244_SHARP_,p2__16245_SHARP_){
if(cljs.core.truth_((function (){var G__16251 = cljs.core.compare(p1__16244_SHARP_,p2__16245_SHARP_);
return (greater_QMARK_.cljs$core$IFn$_invoke$arity$1 ? greater_QMARK_.cljs$core$IFn$_invoke$arity$1(G__16251) : greater_QMARK_.call(null,G__16251));
})())){
return p1__16244_SHARP_;
} else {
return p2__16245_SHARP_;
}
}),init,vals);
}));

/** @this {Function} */
(c3kit.apron.corec.greatest_v.cljs$lang$applyTo = (function (seq16247){
var G__16248 = cljs.core.first(seq16247);
var seq16247__$1 = cljs.core.next(seq16247);
var G__16249 = cljs.core.first(seq16247__$1);
var seq16247__$2 = cljs.core.next(seq16247__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16248,G__16249,seq16247__$2);
}));

(c3kit.apron.corec.greatest_v.cljs$lang$maxFixedArity = (2));

/**
 * Like max, but works with non-numeric values
 */
c3kit.apron.corec.max_v = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.apron.corec.greatest_v,cljs.core.pos_QMARK_);
/**
 * Like min, but works with non-numeric values
 */
c3kit.apron.corec.min_v = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.apron.corec.greatest_v,cljs.core.neg_QMARK_);
c3kit.apron.corec.greatest_m = (function c3kit$apron$corec$greatest_m(greater_QMARK_,k,comp,x,y){
if(cljs.core.truth_((function (){var G__16256 = (function (){var G__16257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k);
var G__16258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(y,k);
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__16257,G__16258) : comp.call(null,G__16257,G__16258));
})();
return (greater_QMARK_.cljs$core$IFn$_invoke$arity$1 ? greater_QMARK_.cljs$core$IFn$_invoke$arity$1(G__16256) : greater_QMARK_.call(null,G__16256));
})())){
return x;
} else {
return y;
}
});
c3kit.apron.corec.greatest_by = (function c3kit$apron$corec$greatest_by(var_args){
var G__16262 = arguments.length;
switch (G__16262) {
case 3:
return c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$3 = (function (pos_neg_QMARK_,k,coll){
return c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$4(pos_neg_QMARK_,k,cljs.core.compare,coll);
}));

(c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$4 = (function (pos_neg_QMARK_,k,comp,p__16263){
var vec__16264 = p__16263;
var seq__16265 = cljs.core.seq(vec__16264);
var first__16266 = cljs.core.first(seq__16265);
var seq__16265__$1 = cljs.core.next(seq__16265);
var first = first__16266;
var rest = seq__16265__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16259_SHARP_,p2__16260_SHARP_){
return c3kit.apron.corec.greatest_m(pos_neg_QMARK_,k,comp,p1__16259_SHARP_,p2__16260_SHARP_);
}),first,rest);
}));

(c3kit.apron.corec.greatest_by.cljs$lang$maxFixedArity = 4);

/**
 * Like max-key, but works with non-numeric values.
 */
c3kit.apron.corec.max_by = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.apron.corec.greatest_by,cljs.core.pos_QMARK_);
/**
 * Like min-key, but works with non-numeric values.
 */
c3kit.apron.corec.min_by = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.apron.corec.greatest_by,cljs.core.neg_QMARK_);
/**
 * Insert in threading macro to print the value.
 */
c3kit.apron.corec.__GT_inspect = (function c3kit$apron$corec$__GT_inspect(v){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["->inspect: ",v], 0));

return v;
});
/**
 * Returns the index of e (using =) in the seq. nil if missing.
 */
c3kit.apron.corec.index_of = (function c3kit$apron$corec$index_of(e,coll){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__16269_SHARP_,p2__16268_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__16268_SHARP_)){
return p1__16269_SHARP_;
} else {
return null;
}
}),coll));
});
/**
 * Takes keyword argument and converts them to a map.  If the args are prefixed with a map, the rest of the
 *   args are merged in.
 */
c3kit.apron.corec.__GT_options = (function c3kit$apron$corec$__GT_options(options){
if((options == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),options)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(options))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(options),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.rest(options))], 0));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);

}
}
}
});
/**
 * Platform agnostic string format fm
 */
c3kit.apron.corec.formats = (function c3kit$apron$corec$formats(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16272 = arguments.length;
var i__5727__auto___16273 = (0);
while(true){
if((i__5727__auto___16273 < len__5726__auto___16272)){
args__5732__auto__.push((arguments[i__5727__auto___16273]));

var G__16274 = (i__5727__auto___16273 + (1));
i__5727__auto___16273 = G__16274;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.formats.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(c3kit.apron.corec.formats.cljs$core$IFn$_invoke$arity$variadic = (function (format,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,format,args);
}));

(c3kit.apron.corec.formats.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.formats.cljs$lang$applyTo = (function (seq16270){
var G__16271 = cljs.core.first(seq16270);
var seq16270__$1 = cljs.core.next(seq16270);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16271,seq16270__$1);
}));

/**
 * Creates a string of a given length by repeating the provided value.
 */
c3kit.apron.corec.__GT_string = (function c3kit$apron$corec$__GT_string(v,length){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(length,v));
});
/**
 * Pads the left side of a string.
 * If no character is provided, spaces will be used.
 * If the string is greater than or equal to the pad length,
 * the unmodified string will be returned.
 */
c3kit.apron.corec.pad_left = (function c3kit$apron$corec$pad_left(var_args){
var G__16276 = arguments.length;
switch (G__16276) {
case 2:
return c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$2 = (function (s,length){
return c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$3(s,length," ");
}));

(c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$3 = (function (s,length,v){
var size = cljs.core.count(s);
var G__16277 = s;
if((length > size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.__GT_string(v,(length - size))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16277)].join('');
} else {
return G__16277;
}
}));

(c3kit.apron.corec.pad_left.cljs$lang$maxFixedArity = 3);

/**
 * Pads the right side of a string.
 * If no character is provided, spaces will be used.
 * If the string is greater than or equal to the pad length,
 * the unmodified string will be returned.
 */
c3kit.apron.corec.pad_right = (function c3kit$apron$corec$pad_right(var_args){
var G__16280 = arguments.length;
switch (G__16280) {
case 2:
return c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$2 = (function (s,length){
return c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$3(s,length," ");
}));

(c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$3 = (function (s,length,v){
var size = cljs.core.count(s);
var G__16281 = s;
if((length > size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16281),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.__GT_string(v,(length - size)))].join('');
} else {
return G__16281;
}
}));

(c3kit.apron.corec.pad_right.cljs$lang$maxFixedArity = 3);

/**
 * Same as pad-left, except the string will be trimmed to the desired length.
 */
c3kit.apron.corec.pad_left_BANG_ = (function c3kit$apron$corec$pad_left_BANG_(var_args){
var G__16284 = arguments.length;
switch (G__16284) {
case 2:
return c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (s,length){
return c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$3(s,length," ");
}));

(c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (s,length,v){
var size = cljs.core.count(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(length,size)){
return s;
} else {
if((size > length)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(size - length));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.__GT_string(v,(length - size))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');

}
}
}));

(c3kit.apron.corec.pad_left_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Same as pad-right, except the string will be trimmed to the desired length.
 */
c3kit.apron.corec.pad_right_BANG_ = (function c3kit$apron$corec$pad_right_BANG_(var_args){
var G__16287 = arguments.length;
switch (G__16287) {
case 2:
return c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (s,length){
return c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$3(s,length," ");
}));

(c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (s,length,v){
var size = cljs.core.count(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(length,size)){
return s;
} else {
if((size > length)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),length);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.__GT_string(v,(length - size)))].join('');

}
}
}));

(c3kit.apron.corec.pad_right_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Char code at the given index of a string
 */
c3kit.apron.corec.char_code_at = (function c3kit$apron$corec$char_code_at(s,i){
return s.charCodeAt(i);
});
/**
 * Char code at index 0 of a string
 */
c3kit.apron.corec.first_char_code = (function c3kit$apron$corec$first_char_code(s){
return c3kit.apron.corec.char_code_at(s,(0));
});
c3kit.apron.corec.not_blank_QMARK_ = cljs.core.complement(clojure.string.blank_QMARK_);
/**
 * Return a map where all the keys with blank values are removed
 */
c3kit.apron.corec.remove_blanks = (function c3kit$apron$corec$remove_blanks(e){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__16289){
var vec__16290 = p__16289;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16290,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16290,(1),null);
if(clojure.string.blank_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))){
return r;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,e);
});
/**
 * Return a map where all the keys with nil values are removed
 */
c3kit.apron.corec.remove_nils = (function c3kit$apron$corec$remove_nils(e){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__16293){
var vec__16294 = p__16293;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16294,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16294,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,v)){
return r;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,e);
});
/**
 * Returns true is e is an exception/error for the running platform
 */
c3kit.apron.corec.ex_QMARK_ = (function c3kit$apron$corec$ex_QMARK_(e){
return (e instanceof Error);
});
/**
 * Does nothing
 */
c3kit.apron.corec.noop = (function c3kit$apron$corec$noop(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16298 = arguments.length;
var i__5727__auto___16299 = (0);
while(true){
if((i__5727__auto___16299 < len__5726__auto___16298)){
args__5732__auto__.push((arguments[i__5727__auto___16299]));

var G__16300 = (i__5727__auto___16299 + (1));
i__5727__auto___16299 = G__16300;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return c3kit.apron.corec.noop.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(c3kit.apron.corec.noop.cljs$core$IFn$_invoke$arity$variadic = (function (_){
return null;
}));

(c3kit.apron.corec.noop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.apron.corec.noop.cljs$lang$applyTo = (function (seq16297){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16297));
}));

/**
 * Insert in threading macro to invoke a function with a given set of arguments.
 */
c3kit.apron.corec.invoke = (function c3kit$apron$corec$invoke(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16303 = arguments.length;
var i__5727__auto___16304 = (0);
while(true){
if((i__5727__auto___16304 < len__5726__auto___16303)){
args__5732__auto__.push((arguments[i__5727__auto___16304]));

var G__16305 = (i__5727__auto___16304 + (1));
i__5727__auto___16304 = G__16305;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(c3kit.apron.corec.invoke.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));

(c3kit.apron.corec.invoke.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.invoke.cljs$lang$applyTo = (function (seq16301){
var G__16302 = cljs.core.first(seq16301);
var seq16301__$1 = cljs.core.next(seq16301);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16302,seq16301__$1);
}));

/**
 * Create an n-arity function from a 0-arity function
 */
c3kit.apron.corec.narity = (function c3kit$apron$corec$narity(f){
return (function() { 
var G__16306__delegate = function (_){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
};
var G__16306 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__16307__i = 0, G__16307__a = new Array(arguments.length -  0);
while (G__16307__i < G__16307__a.length) {G__16307__a[G__16307__i] = arguments[G__16307__i + 0]; ++G__16307__i;}
  _ = new cljs.core.IndexedSeq(G__16307__a,0,null);
} 
return G__16306__delegate.call(this,_);};
G__16306.cljs$lang$maxFixedArity = 0;
G__16306.cljs$lang$applyTo = (function (arglist__16308){
var _ = cljs.core.seq(arglist__16308);
return G__16306__delegate(_);
});
G__16306.cljs$core$IFn$_invoke$arity$variadic = G__16306__delegate;
return G__16306;
})()
;
});
/**
 * Filters coll by items matching kvs.
 */
c3kit.apron.corec.find_by = (function c3kit$apron$corec$find_by(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16314 = arguments.length;
var i__5727__auto___16315 = (0);
while(true){
if((i__5727__auto___16315 < len__5726__auto___16314)){
args__5732__auto__.push((arguments[i__5727__auto___16315]));

var G__16316 = (i__5727__auto___16315 + (1));
i__5727__auto___16315 = G__16316;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.find_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(c3kit.apron.corec.find_by.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__16311){
var map__16312 = p__16311;
var map__16312__$1 = cljs.core.__destructure_map(map__16312);
var kvs = map__16312__$1;
var G__16313 = coll;
if(cljs.core.seq(kvs)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(c3kit.apron.test_fabric.spec__GT_tester(kvs),G__16313);
} else {
return G__16313;
}
}));

(c3kit.apron.corec.find_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.find_by.cljs$lang$applyTo = (function (seq16309){
var G__16310 = cljs.core.first(seq16309);
var seq16309__$1 = cljs.core.next(seq16309);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16310,seq16309__$1);
}));

/**
 * Finds the first item in coll matching kvs.
 */
c3kit.apron.corec.ffind_by = (function c3kit$apron$corec$ffind_by(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16321 = arguments.length;
var i__5727__auto___16322 = (0);
while(true){
if((i__5727__auto___16322 < len__5726__auto___16321)){
args__5732__auto__.push((arguments[i__5727__auto___16322]));

var G__16323 = (i__5727__auto___16322 + (1));
i__5727__auto___16322 = G__16323;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.ffind_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(c3kit.apron.corec.ffind_by.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__16319){
var map__16320 = p__16319;
var map__16320__$1 = cljs.core.__destructure_map(map__16320);
var kvs = map__16320__$1;
return c3kit.apron.corec.ffilter(c3kit.apron.test_fabric.spec__GT_tester(kvs),coll);
}));

(c3kit.apron.corec.ffind_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.ffind_by.cljs$lang$applyTo = (function (seq16317){
var G__16318 = cljs.core.first(seq16317);
var seq16317__$1 = cljs.core.next(seq16317);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16318,seq16317__$1);
}));

/**
 * Counts the number of items in coll that satisfy a predicate
 */
c3kit.apron.corec.count_where = (function c3kit$apron$corec$count_where(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16325_SHARP_,p2__16324_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p2__16324_SHARP_) : pred.call(null,p2__16324_SHARP_)))){
return (p1__16325_SHARP_ + (1));
} else {
return p1__16325_SHARP_;
}
}),(0),coll);
});
/**
 * Counts the number of items in coll that
 * exactly match some given key-value pairs
 */
c3kit.apron.corec.count_by = (function c3kit$apron$corec$count_by(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16330 = arguments.length;
var i__5727__auto___16331 = (0);
while(true){
if((i__5727__auto___16331 < len__5726__auto___16330)){
args__5732__auto__.push((arguments[i__5727__auto___16331]));

var G__16332 = (i__5727__auto___16331 + (1));
i__5727__auto___16331 = G__16332;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.count_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(c3kit.apron.corec.count_by.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__16328){
var map__16329 = p__16328;
var map__16329__$1 = cljs.core.__destructure_map(map__16329);
var kvs = map__16329__$1;
return c3kit.apron.corec.count_where(c3kit.apron.test_fabric.spec__GT_tester(kvs),coll);
}));

(c3kit.apron.corec.count_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.count_by.cljs$lang$applyTo = (function (seq16326){
var G__16327 = cljs.core.first(seq16326);
var seq16326__$1 = cljs.core.next(seq16326);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16327,seq16326__$1);
}));

