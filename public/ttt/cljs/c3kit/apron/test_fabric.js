// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('c3kit.apron.test_fabric');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
c3kit.apron.test_fabric.__GT_pattern = (function c3kit$apron$test_fabric$__GT_pattern(s){
return cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(s,"%",".*"),"_","."));
});
c3kit.apron.test_fabric.pattern_comparator = (function c3kit$apron$test_fabric$pattern_comparator(v,case_sensitive_QMARK_){
var pattern = c3kit.apron.test_fabric.__GT_pattern(v);
return (function (ev){
if(cljs.core.truth_(ev)){
var ev__$1 = (cljs.core.truth_(case_sensitive_QMARK_)?ev:clojure.string.upper_case(ev));
return cljs.core.boolean$(cljs.core.re_matches(pattern,ev__$1));
} else {
return null;
}
});
});
c3kit.apron.test_fabric.multi_QMARK_ = (function c3kit$apron$test_fabric$multi_QMARK_(v){
return ((cljs.core.sequential_QMARK_(v)) || (cljs.core.set_QMARK_(v)));
});
c3kit.apron.test_fabric._normal_tester = (function c3kit$apron$test_fabric$_normal_tester(f,v){
return (function (ev){
if(c3kit.apron.test_fabric.multi_QMARK_(ev)){
return cljs.core.some((function (p1__16104_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__16104_SHARP_,v) : f.call(null,p1__16104_SHARP_,v));
}),ev);
} else {
var and__5000__auto__ = (!((ev == null)));
if(and__5000__auto__){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ev,v) : f.call(null,ev,v));
} else {
return and__5000__auto__;
}
}
});
});
c3kit.apron.test_fabric._or_tester = (function c3kit$apron$test_fabric$_or_tester(values){
var v_set_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core.set(values));
return (function (ev){
if(c3kit.apron.test_fabric.multi_QMARK_(ev)){
return cljs.core.some(v_set_QMARK_,ev);
} else {
return (v_set_QMARK_.cljs$core$IFn$_invoke$arity$1 ? v_set_QMARK_.cljs$core$IFn$_invoke$arity$1(ev) : v_set_QMARK_.call(null,ev));
}
});
});
c3kit.apron.test_fabric._tester = (function c3kit$apron$test_fabric$_tester(form){
var pred__16105 = cljs.core._EQ_;
var expr__16106 = cljs.core.first(form);
if(cljs.core.truth_((function (){var G__16108 = cljs.core.cst$sym$_GT_;
var G__16109 = expr__16106;
return (pred__16105.cljs$core$IFn$_invoke$arity$2 ? pred__16105.cljs$core$IFn$_invoke$arity$2(G__16108,G__16109) : pred__16105.call(null,G__16108,G__16109));
})())){
var v = cljs.core.second(form);
if(typeof v === 'number'){
return c3kit.apron.test_fabric._normal_tester(cljs.core._GT_,v);
} else {
return c3kit.apron.test_fabric._normal_tester(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pos_QMARK_,cljs.core.compare),v);
}
} else {
if(cljs.core.truth_((function (){var G__16110 = cljs.core.cst$sym$_LT_;
var G__16111 = expr__16106;
return (pred__16105.cljs$core$IFn$_invoke$arity$2 ? pred__16105.cljs$core$IFn$_invoke$arity$2(G__16110,G__16111) : pred__16105.call(null,G__16110,G__16111));
})())){
var v = cljs.core.second(form);
if(typeof v === 'number'){
return c3kit.apron.test_fabric._normal_tester(cljs.core._LT_,v);
} else {
return c3kit.apron.test_fabric._normal_tester(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.neg_QMARK_,cljs.core.compare),v);
}
} else {
if(cljs.core.truth_((function (){var G__16112 = cljs.core.cst$sym$_GT__EQ_;
var G__16113 = expr__16106;
return (pred__16105.cljs$core$IFn$_invoke$arity$2 ? pred__16105.cljs$core$IFn$_invoke$arity$2(G__16112,G__16113) : pred__16105.call(null,G__16112,G__16113));
})())){
var v = cljs.core.second(form);
if(typeof v === 'number'){
return c3kit.apron.test_fabric._normal_tester(cljs.core._GT__EQ_,v);
} else {
return c3kit.apron.test_fabric._normal_tester(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.neg_QMARK_,cljs.core.compare),v);
}
} else {
if(cljs.core.truth_((function (){var G__16114 = cljs.core.cst$sym$_LT__EQ_;
var G__16115 = expr__16106;
return (pred__16105.cljs$core$IFn$_invoke$arity$2 ? pred__16105.cljs$core$IFn$_invoke$arity$2(G__16114,G__16115) : pred__16105.call(null,G__16114,G__16115));
})())){
var v = cljs.core.second(form);
if(typeof v === 'number'){
return c3kit.apron.test_fabric._normal_tester(cljs.core._LT__EQ_,v);
} else {
return c3kit.apron.test_fabric._normal_tester(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.pos_QMARK_,cljs.core.compare),v);
}
} else {
if(cljs.core.truth_((function (){var G__16116 = cljs.core.cst$sym$like;
var G__16117 = expr__16106;
return (pred__16105.cljs$core$IFn$_invoke$arity$2 ? pred__16105.cljs$core$IFn$_invoke$arity$2(G__16116,G__16117) : pred__16105.call(null,G__16116,G__16117));
})())){
return c3kit.apron.test_fabric.pattern_comparator(cljs.core.second(form),true);
} else {
if(cljs.core.truth_((function (){var G__16118 = cljs.core.cst$sym$ilike;
var G__16119 = expr__16106;
return (pred__16105.cljs$core$IFn$_invoke$arity$2 ? pred__16105.cljs$core$IFn$_invoke$arity$2(G__16118,G__16119) : pred__16105.call(null,G__16118,G__16119));
})())){
return c3kit.apron.test_fabric.pattern_comparator(clojure.string.upper_case(cljs.core.second(form)),false);
} else {
if(cljs.core.truth_((function (){var G__16120 = cljs.core.cst$sym$not_EQ_;
var G__16121 = expr__16106;
return (pred__16105.cljs$core$IFn$_invoke$arity$2 ? pred__16105.cljs$core$IFn$_invoke$arity$2(G__16120,G__16121) : pred__16105.call(null,G__16120,G__16121));
})())){
return cljs.core.complement(c3kit.apron.test_fabric._or_tester(cljs.core.rest(form)));
} else {
if(cljs.core.truth_((function (){var G__16122 = cljs.core.cst$sym$_EQ_;
var G__16123 = expr__16106;
return (pred__16105.cljs$core$IFn$_invoke$arity$2 ? pred__16105.cljs$core$IFn$_invoke$arity$2(G__16122,G__16123) : pred__16105.call(null,G__16122,G__16123));
})())){
return c3kit.apron.test_fabric._or_tester(cljs.core.rest(form));
} else {
return c3kit.apron.test_fabric._or_tester(form);
}
}
}
}
}
}
}
}
});
c3kit.apron.test_fabric.ensure_key = (function c3kit$apron$test_fabric$ensure_key(k){
if(cljs.core.set_QMARK_(k)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(c3kit.apron.test_fabric.ensure_key,k);
} else {
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.namespace(k),cljs.core.name(k)], null))));
}
});
c3kit.apron.test_fabric.get_tester_by_type = (function c3kit$apron$test_fabric$get_tester_by_type(v){
if(cljs.core.set_QMARK_(v)){
return c3kit.apron.test_fabric._or_tester(v);
} else {
if(cljs.core.sequential_QMARK_(v)){
return c3kit.apron.test_fabric._tester(v);
} else {
if((v == null)){
return cljs.core.nil_QMARK_;
} else {
return c3kit.apron.test_fabric._normal_tester(cljs.core._EQ_,v);

}
}
}
});
c3kit.apron.test_fabric.kv__GT_tester = (function c3kit$apron$test_fabric$kv__GT_tester(p__16124){
var vec__16125 = p__16124;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16125,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16125,(1),null);
var tester = c3kit.apron.test_fabric.get_tester_by_type(v);
var key_path = c3kit.apron.test_fabric.ensure_key(k);
return (function (e){
var G__16128 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(e,key_path);
return (tester.cljs$core$IFn$_invoke$arity$1 ? tester.cljs$core$IFn$_invoke$arity$1(G__16128) : tester.call(null,G__16128));
});
});
/**
 * Creates a predicate based on the key-value pairs in spec.
 */
c3kit.apron.test_fabric.spec__GT_tester = (function c3kit$apron$test_fabric$spec__GT_tester(spec){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,cljs.core.map.cljs$core$IFn$_invoke$arity$2(c3kit.apron.test_fabric.kv__GT_tester,spec));
});
