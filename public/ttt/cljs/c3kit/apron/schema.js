// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('c3kit.apron.schema');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('clojure.edn');
goog.require('clojure.string');
goog.require('com.cognitect.transit.types');
goog.require('clojure.walk');
c3kit.apron.schema.coerce_ex = (function c3kit$apron$schema$coerce_ex(value,type){
var value_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
var value_str__$1 = ((((50) < ((value_str).length)))?[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value_str,(0),(45)),"..."].join(''):value_str);
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["can't coerce ",value_str__$1," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,value,cljs.core.cst$kw$type,type], null));
});
c3kit.apron.schema.validation_ex = (function c3kit$apron$schema$validation_ex(message,value){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = message;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "is invalid";
}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null));
});
c3kit.apron.schema.date = Date;
c3kit.apron.schema.present_QMARK_ = (function c3kit$apron$schema$present_QMARK_(v){
return (!((((v == null)) || (((typeof v === 'string') && (clojure.string.blank_QMARK_(v)))))));
});
c3kit.apron.schema.required = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$validate,c3kit.apron.schema.present_QMARK_,cljs.core.cst$kw$message,"is required"], null);
c3kit.apron.schema.nil_or = (function c3kit$apron$schema$nil_or(f){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.apron.schema",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/nil-or deprecated.  Use nil?-or instead"], null);
}),null)),null,(35),null);

return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,f);
});
c3kit.apron.schema.nil_QMARK__or = (function c3kit$apron$schema$nil_QMARK__or(f){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,f);
});
c3kit.apron.schema.email_pattern = /[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?/;
c3kit.apron.schema.email_QMARK_ = (function c3kit$apron$schema$email_QMARK_(value){
return cljs.core.boolean$(cljs.core.re_matches(c3kit.apron.schema.email_pattern,value));
});
c3kit.apron.schema.bigdec_QMARK_ = (function c3kit$apron$schema$bigdec_QMARK_(v){
return typeof v === 'number';
});
c3kit.apron.schema.uri_QMARK_ = (function c3kit$apron$schema$uri_QMARK_(value){
return typeof value === 'string';
});
c3kit.apron.schema.is_enum_QMARK_ = (function c3kit$apron$schema$is_enum_QMARK_(enum$){
var enum_name = cljs.core.name(cljs.core.cst$kw$enum.cljs$core$IFn$_invoke$arity$1(enum$));
var enum_set = c3kit.apron.corec.map_set((function (p1__18483_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(enum_name,cljs.core.name(p1__18483_SHARP_));
}),cljs.core.cst$kw$values.cljs$core$IFn$_invoke$arity$1(enum$));
return (function (value){
return (((value == null)) || (cljs.core.contains_QMARK_(enum_set,value)));
});
});
c3kit.apron.schema.parse_BANG_ = (function c3kit$apron$schema$parse_BANG_(f,v){
var result = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
if(cljs.core.truth_(isNaN(result))){
throw Error("parsed NaN");
} else {
return result;
}
});
c3kit.apron.schema.__GT_boolean = (function c3kit$apron$schema$__GT_boolean(value){
if((value == null)){
return null;
} else {
if(cljs.core.boolean_QMARK_(value)){
return value;
} else {
if(typeof value === 'string'){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("false",clojure.string.lower_case(value));
} else {
return cljs.core.boolean$(value);

}
}
}
});
c3kit.apron.schema.__GT_string = (function c3kit$apron$schema$__GT_string(value){
var G__18484 = value;
if((G__18484 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18484);
}
});
c3kit.apron.schema.str_or_nil = (function c3kit$apron$schema$str_or_nil(v){
return c3kit.apron.schema.__GT_string(v);
});
c3kit.apron.schema.__GT_keyword = (function c3kit$apron$schema$__GT_keyword(value){
if((value == null)){
return null;
} else {
if((value instanceof cljs.core.Keyword)){
return value;
} else {
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
if(clojure.string.starts_with_QMARK_(s,":")){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
}

}
}
});
c3kit.apron.schema.__GT_float = (function c3kit$apron$schema$__GT_float(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
try{return c3kit.apron.schema.parse_BANG_(parseFloat,v);
}catch (e18485){var _ = e18485;
throw c3kit.apron.schema.coerce_ex(v,"float");
}}
} else {
if(cljs.core.truth_(isNaN(v))){
return null;
} else {
if(cljs.core.integer_QMARK_(v)){
return v;
} else {
if(typeof v === 'number'){
return v;
} else {
if(c3kit.apron.schema.bigdec_QMARK_(v)){
return v;
} else {
throw c3kit.apron.schema.coerce_ex(v,"float");

}
}
}
}
}
}
});
c3kit.apron.schema.__GT_int = (function c3kit$apron$schema$__GT_int(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
try{return c3kit.apron.schema.parse_BANG_(parseInt,v);
}catch (e18486){var _ = e18486;
throw c3kit.apron.schema.coerce_ex(v,"int");
}}
} else {
if((v instanceof cljs.core.Keyword)){
throw c3kit.apron.schema.coerce_ex(v,"int");
} else {
if(cljs.core.truth_(isNaN(v))){
return null;
} else {
if(cljs.core.integer_QMARK_(v)){
return v;
} else {
if(typeof v === 'number'){
return cljs.core.long$(v);
} else {
if(c3kit.apron.schema.bigdec_QMARK_(v)){
return v;
} else {
throw c3kit.apron.schema.coerce_ex(v,"int");

}
}
}
}
}
}
}
});
c3kit.apron.schema.__GT_bigdec = (function c3kit$apron$schema$__GT_bigdec(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
try{return c3kit.apron.schema.parse_BANG_(parseFloat,v);
}catch (e18487){var _ = e18487;
throw c3kit.apron.schema.coerce_ex(v,"bigdec");
}}
} else {
if(cljs.core.truth_(isNaN(v))){
return null;
} else {
if(cljs.core.integer_QMARK_(v)){
return v;
} else {
if(typeof v === 'number'){
return v;
} else {
throw c3kit.apron.schema.coerce_ex(v,"bigdec");

}
}
}
}
}
});
c3kit.apron.schema.__GT_date = (function c3kit$apron$schema$__GT_date(v){
if((v == null)){
return null;
} else {
if((v instanceof c3kit.apron.schema.date)){
return v;
} else {
if(cljs.core.integer_QMARK_(v)){
var G__18488 = (new Date());
G__18488.setTime(v);

return G__18488;
} else {
if((v instanceof goog.date.Date)){
return (new Date(v.getTime()));
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
if(clojure.string.starts_with_QMARK_(v,"#inst")){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(v);
} else {
throw c3kit.apron.schema.coerce_ex(v,"date");

}
}
} else {
throw c3kit.apron.schema.coerce_ex(v,"date");

}
}
}
}
}
});
c3kit.apron.schema.__GT_sql_date = (function c3kit$apron$schema$__GT_sql_date(v){
if((v == null)){
return null;
} else {
if((v instanceof Date)){
return v;
} else {
if(cljs.core.integer_QMARK_(v)){
var G__18489 = (new Date());
G__18489.setTime(v);

return G__18489;
} else {
if((v instanceof goog.date.Date)){
return (new Date(v.getTime()));
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
if(clojure.string.starts_with_QMARK_(v,"#inst")){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(v);
} else {
throw c3kit.apron.schema.coerce_ex(v,"sql-date");

}
}
} else {
throw c3kit.apron.schema.coerce_ex(v,"sql-date");

}
}
}
}
}
});
c3kit.apron.schema.__GT_timestamp = (function c3kit$apron$schema$__GT_timestamp(v){
if((v == null)){
return null;
} else {
if((v instanceof Date)){
return v;
} else {
if(cljs.core.integer_QMARK_(v)){
var G__18490 = (new Date());
G__18490.setTime(v);

return G__18490;
} else {
if((v instanceof goog.date.Date)){
return (new Date(v.getTime()));
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
if(clojure.string.starts_with_QMARK_(v,"#inst")){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(v);
} else {
throw c3kit.apron.schema.coerce_ex(v,"timestamp");

}
}
} else {
throw c3kit.apron.schema.coerce_ex(v,"timestamp");

}
}
}
}
}
});
c3kit.apron.schema.__GT_uri = (function c3kit$apron$schema$__GT_uri(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
return v;
} else {
throw c3kit.apron.schema.coerce_ex(v,"uri");

}
}
});
c3kit.apron.schema.__GT_map = (function c3kit$apron$schema$__GT_map(m){
if((m == null)){
return m;
} else {
if(cljs.core.map_QMARK_(m)){
return m;
} else {
if(cljs.core.sequential_QMARK_(m)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,m);
} else {
throw c3kit.apron.schema.coerce_ex(m,"map");

}
}
}
});
(com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL);
c3kit.apron.schema.__GT_uuid = (function c3kit$apron$schema$__GT_uuid(v){
if((v == null)){
return null;
} else {
if(cljs.core.uuid_QMARK_(v)){
return v;
} else {
if(typeof v === 'string'){
return cljs.core.uuid(v);
} else {
throw c3kit.apron.schema.coerce_ex(v,"uuid");

}
}
}
});
c3kit.apron.schema.multiple_QMARK_ = (function c3kit$apron$schema$multiple_QMARK_(thing){
return ((cljs.core.sequential_QMARK_(thing)) || (cljs.core.set_QMARK_(thing)));
});
c3kit.apron.schema.__GT_vec = (function c3kit$apron$schema$__GT_vec(v){
if((v == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(c3kit.apron.schema.multiple_QMARK_(v)){
return cljs.core.vec(v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);

}
}
});
c3kit.apron.schema.__GT_seq = (function c3kit$apron$schema$__GT_seq(v){
if((v == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(c3kit.apron.schema.multiple_QMARK_(v)){
return v;
} else {
return (new cljs.core.List(null,v,null,(1),null));

}
}
});
c3kit.apron.schema.type_validators = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$date,cljs.core.cst$kw$long,cljs.core.cst$kw$double,cljs.core.cst$kw$fn,cljs.core.cst$kw$instant,cljs.core.cst$kw$int,cljs.core.cst$kw$ref,cljs.core.cst$kw$float,cljs.core.cst$kw$string,cljs.core.cst$kw$ignore,cljs.core.cst$kw$kw_DASH_ref,cljs.core.cst$kw$keyword,cljs.core.cst$kw$bigdec,cljs.core.cst$kw$uri,cljs.core.cst$kw$uuid,cljs.core.cst$kw$seq,cljs.core.cst$kw$timestamp,cljs.core.cst$kw$boolean,cljs.core.cst$kw$map,cljs.core.cst$kw$any],[c3kit.apron.schema.nil_QMARK__or((function (p1__18492_SHARP_){
return (p1__18492_SHARP_ instanceof c3kit.apron.schema.date);
})),c3kit.apron.schema.nil_QMARK__or(cljs.core.integer_QMARK_),c3kit.apron.schema.nil_QMARK__or(cljs.core.number_QMARK_),c3kit.apron.schema.nil_QMARK__or(cljs.core.ifn_QMARK_),c3kit.apron.schema.nil_QMARK__or((function (p1__18493_SHARP_){
return (p1__18493_SHARP_ instanceof c3kit.apron.schema.date);
})),c3kit.apron.schema.nil_QMARK__or(cljs.core.integer_QMARK_),c3kit.apron.schema.nil_QMARK__or(cljs.core.integer_QMARK_),c3kit.apron.schema.nil_QMARK__or(cljs.core.number_QMARK_),c3kit.apron.schema.nil_QMARK__or(cljs.core.string_QMARK_),cljs.core.constantly(true),c3kit.apron.schema.nil_QMARK__or(cljs.core.keyword_QMARK_),c3kit.apron.schema.nil_QMARK__or(cljs.core.keyword_QMARK_),c3kit.apron.schema.nil_QMARK__or(c3kit.apron.schema.bigdec_QMARK_),c3kit.apron.schema.nil_QMARK__or(c3kit.apron.schema.uri_QMARK_),c3kit.apron.schema.nil_QMARK__or(cljs.core.uuid_QMARK_),c3kit.apron.schema.nil_QMARK__or(c3kit.apron.schema.multiple_QMARK_),c3kit.apron.schema.nil_QMARK__or((function (p1__18495_SHARP_){
return (p1__18495_SHARP_ instanceof c3kit.apron.schema.date);
})),c3kit.apron.schema.nil_QMARK__or(cljs.core.boolean_QMARK_),c3kit.apron.schema.nil_QMARK__or(cljs.core.map_QMARK_),cljs.core.constantly(true)]);
c3kit.apron.schema.type_coercers = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$date,cljs.core.cst$kw$long,cljs.core.cst$kw$double,cljs.core.cst$kw$fn,cljs.core.cst$kw$instant,cljs.core.cst$kw$int,cljs.core.cst$kw$ref,cljs.core.cst$kw$float,cljs.core.cst$kw$string,cljs.core.cst$kw$ignore,cljs.core.cst$kw$kw_DASH_ref,cljs.core.cst$kw$keyword,cljs.core.cst$kw$bigdec,cljs.core.cst$kw$uri,cljs.core.cst$kw$uuid,cljs.core.cst$kw$seq,cljs.core.cst$kw$timestamp,cljs.core.cst$kw$boolean,cljs.core.cst$kw$map,cljs.core.cst$kw$any],[c3kit.apron.schema.__GT_sql_date,c3kit.apron.schema.__GT_int,c3kit.apron.schema.__GT_float,cljs.core.identity,c3kit.apron.schema.__GT_date,c3kit.apron.schema.__GT_int,c3kit.apron.schema.__GT_int,c3kit.apron.schema.__GT_float,c3kit.apron.schema.__GT_string,cljs.core.identity,c3kit.apron.schema.__GT_keyword,c3kit.apron.schema.__GT_keyword,c3kit.apron.schema.__GT_bigdec,c3kit.apron.schema.__GT_uri,c3kit.apron.schema.__GT_uuid,cljs.core.identity,c3kit.apron.schema.__GT_timestamp,c3kit.apron.schema.__GT_boolean,c3kit.apron.schema.__GT_map,cljs.core.identity]);
c3kit.apron.schema.valid_types = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(c3kit.apron.schema.type_coercers),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$one_DASH_of], null)));
c3kit.apron.schema.normalize_seq_shorthand = (function c3kit$apron$schema$normalize_seq_shorthand(p__18496){
var map__18497 = p__18496;
var map__18497__$1 = cljs.core.__destructure_map(map__18497);
var spec = map__18497__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18497__$1,cljs.core.cst$kw$type);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(type))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("seq shorthand type must contain 1 type",spec);
} else {
}

var spec_type = cljs.core.first(type);
var base_spec_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$validate,null,cljs.core.cst$kw$present,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$validations,null,cljs.core.cst$kw$coerce,null,cljs.core.cst$kw$message,null], null), null);
if((spec_type instanceof cljs.core.Keyword)){
var entry_spec = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(spec,base_spec_keys),cljs.core.cst$kw$type,spec_type);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,spec,base_spec_keys),cljs.core.cst$kw$type,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$spec,entry_spec], 0));
} else {
if(((cljs.core.map_QMARK_(spec_type)) && (cljs.core.contains_QMARK_(spec_type,cljs.core.cst$kw$type)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(spec,cljs.core.cst$kw$type,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$spec,(c3kit.apron.schema.normalize_spec.cljs$core$IFn$_invoke$arity$1 ? c3kit.apron.schema.normalize_spec.cljs$core$IFn$_invoke$arity$1(spec_type) : c3kit.apron.schema.normalize_spec.call(null,spec_type))], 0));
} else {
var entry_spec = (function (){var G__18498 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(spec,base_spec_keys),cljs.core.cst$kw$type,spec_type);
return (c3kit.apron.schema.normalize_spec.cljs$core$IFn$_invoke$arity$1 ? c3kit.apron.schema.normalize_spec.cljs$core$IFn$_invoke$arity$1(G__18498) : c3kit.apron.schema.normalize_spec.call(null,G__18498));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,spec,base_spec_keys),cljs.core.cst$kw$type,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$spec,entry_spec], 0));

}
}
});
c3kit.apron.schema.normalize_map_shorthand = (function c3kit$apron$schema$normalize_map_shorthand(p__18499){
var map__18500 = p__18499;
var map__18500__$1 = cljs.core.__destructure_map(map__18500);
var spec = map__18500__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18500__$1,cljs.core.cst$kw$type);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(spec,cljs.core.cst$kw$type,cljs.core.cst$kw$map,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$schema,type], 0));
});
c3kit.apron.schema.normalize_set_shorthand = (function c3kit$apron$schema$normalize_set_shorthand(p__18501){
var map__18502 = p__18501;
var map__18502__$1 = cljs.core.__destructure_map(map__18502);
var spec = map__18502__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18502__$1,cljs.core.cst$kw$type);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(spec,cljs.core.cst$kw$type,cljs.core.cst$kw$one_DASH_of,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$specs,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(c3kit.apron.schema.normalize_spec,type)], 0));
});
/**
 * Returns true if the schema-or-spec has been normalized, false otherwise.
 */
c3kit.apron.schema.normalized_QMARK_ = (function c3kit$apron$schema$normalized_QMARK_(schema_or_spec){
return cljs.core.cst$kw$c3kit$apron$schema_SLASH_normalized_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema_or_spec));
});
c3kit.apron.schema.normal_spec_form_QMARK_ = (function c3kit$apron$schema$normal_spec_form_QMARK_(spec){
return ((cljs.core.map_QMARK_(spec)) && ((cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(spec) instanceof cljs.core.Keyword)));
});
/**
 * If the spec is using a shorthand, it will be expanded.
 */
c3kit.apron.schema.normalize_spec = (function c3kit$apron$schema$normalize_spec(spec){
if(cljs.core.truth_(c3kit.apron.schema.normalized_QMARK_(spec))){
return spec;
} else {
return cljs.core.with_meta(((c3kit.apron.schema.normal_spec_form_QMARK_(spec))?spec:(((spec instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,spec], null):((cljs.core.sequential_QMARK_(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(spec)))?c3kit.apron.schema.normalize_seq_shorthand(spec):((cljs.core.map_QMARK_(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(spec)))?c3kit.apron.schema.normalize_map_shorthand(spec):((cljs.core.set_QMARK_(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(spec)))?c3kit.apron.schema.normalize_set_shorthand(spec):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["invalid spec: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,spec], null))})()
))))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$c3kit$apron$schema_SLASH_normalized_QMARK_,true], null));
}
});
/**
 * Returns the schema with all shorthand specs expanded.
 */
c3kit.apron.schema.normalize_schema = (function c3kit$apron$schema$normalize_schema(schema){
if(cljs.core.truth_(c3kit.apron.schema.normalized_QMARK_(schema))){
return schema;
} else {
return cljs.core.with_meta(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update_vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema,cljs.core.cst$kw$_STAR_),c3kit.apron.schema.normalize_spec),cljs.core.select_keys(schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_STAR_], null))], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$c3kit$apron$schema_SLASH_normalized_QMARK_,true], null));
}
});
/**
 * Used as a :present value to remove the entry from presentation
 */
c3kit.apron.schema.omit = cljs.core.constantly(null);
c3kit.apron.schema.kind = (function c3kit$apron$schema$kind(key){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$keyword,cljs.core.cst$kw$value,key,cljs.core.cst$kw$validate,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__18503_SHARP_){
return (((p1__18503_SHARP_ == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,p1__18503_SHARP_)));
})], null),cljs.core.cst$kw$coerce,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__18504_SHARP_){
var or__5002__auto__ = p1__18504_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return key;
}
})], null),cljs.core.cst$kw$message,["mismatch; must be ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')], null);
});
c3kit.apron.schema.id = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$ref], null);
c3kit.apron.schema.type_coercer_BANG_ = (function c3kit$apron$schema$type_coercer_BANG_(type){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c3kit.apron.schema.type_coercers,type);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["unhandled coercion type: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$coerce_QMARK_,true], null));
}
});
c3kit.apron.schema.type_validator_BANG_ = (function c3kit$apron$schema$type_validator_BANG_(type){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c3kit.apron.schema.type_validators,type);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["unhandled validation type: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

/**
 * @interface
 */
c3kit.apron.schema.FieldError = function(){};


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {c3kit.apron.schema.FieldError}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
c3kit.apron.schema.CoerceError = (function (message,__meta,__extmap,__hash){
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c3kit.apron.schema.CoerceError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18506,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18510 = k18506;
var G__18510__$1 = (((G__18510 instanceof cljs.core.Keyword))?G__18510.fqn:null);
switch (G__18510__$1) {
case "message":
return self__.message;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18506,else__5303__auto__);

}
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18511){
var vec__18512 = p__18511;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18512,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18512,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#c3kit.apron.schema.CoerceError{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$message,self__.message],null))], null),self__.__extmap));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18505){
var self__ = this;
var G__18505__$1 = this;
return (new cljs.core.RecordIter((0),G__18505__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$message], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new c3kit.apron.schema.CoerceError(self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (){var fexpr__18515 = (function (coll__5297__auto__){
return (-1845798480 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
});
return fexpr__18515(this__5296__auto____$1);
})();
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18507,other18508){
var self__ = this;
var this18507__$1 = this;
return (((!((other18508 == null)))) && ((((this18507__$1.constructor === other18508.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18507__$1.message,other18508.message)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18507__$1.__extmap,other18508.__extmap)))))));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new c3kit.apron.schema.CoerceError(self__.message,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18506){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18516 = k18506;
var G__18516__$1 = (((G__18516 instanceof cljs.core.Keyword))?G__18516.fqn:null);
switch (G__18516__$1) {
case "message":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18506);

}
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18505){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18517 = cljs.core.keyword_identical_QMARK_;
var expr__18518 = k__5309__auto__;
if(cljs.core.truth_((function (){var G__18520 = cljs.core.cst$kw$message;
var G__18521 = expr__18518;
return (pred__18517.cljs$core$IFn$_invoke$arity$2 ? pred__18517.cljs$core$IFn$_invoke$arity$2(G__18520,G__18521) : pred__18517.call(null,G__18520,G__18521));
})())){
return (new c3kit.apron.schema.CoerceError(G__18505,self__.__meta,self__.__extmap,null));
} else {
return (new c3kit.apron.schema.CoerceError(self__.message,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18505),null));
}
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$message,self__.message,null))], null),self__.__extmap));
}));

(c3kit.apron.schema.CoerceError.prototype.c3kit$apron$schema$FieldError$ = cljs.core.PROTOCOL_SENTINEL);

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18505){
var self__ = this;
var this__5299__auto____$1 = this;
return (new c3kit.apron.schema.CoerceError(self__.message,G__18505,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5306__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(c3kit.apron.schema.CoerceError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$message], null);
}));

(c3kit.apron.schema.CoerceError.cljs$lang$type = true);

(c3kit.apron.schema.CoerceError.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"c3kit.apron.schema/CoerceError",null,(1),null));
}));

(c3kit.apron.schema.CoerceError.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"c3kit.apron.schema/CoerceError");
}));

/**
 * Positional factory function for c3kit.apron.schema/CoerceError.
 */
c3kit.apron.schema.__GT_CoerceError = (function c3kit$apron$schema$__GT_CoerceError(message){
return (new c3kit.apron.schema.CoerceError(message,null,null,null));
});

/**
 * Factory function for c3kit.apron.schema/CoerceError, taking a map of keywords to field values.
 */
c3kit.apron.schema.map__GT_CoerceError = (function c3kit$apron$schema$map__GT_CoerceError(G__18509){
var extmap__5342__auto__ = (function (){var G__18522 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18509,cljs.core.cst$kw$message);
if(cljs.core.record_QMARK_(G__18509)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18522);
} else {
return G__18522;
}
})();
return (new c3kit.apron.schema.CoerceError(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(G__18509),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {c3kit.apron.schema.FieldError}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
c3kit.apron.schema.ValidateError = (function (message,__meta,__extmap,__hash){
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c3kit.apron.schema.ValidateError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18526,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18530 = k18526;
var G__18530__$1 = (((G__18530 instanceof cljs.core.Keyword))?G__18530.fqn:null);
switch (G__18530__$1) {
case "message":
return self__.message;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18526,else__5303__auto__);

}
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18531){
var vec__18532 = p__18531;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18532,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18532,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#c3kit.apron.schema.ValidateError{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$message,self__.message],null))], null),self__.__extmap));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18525){
var self__ = this;
var G__18525__$1 = this;
return (new cljs.core.RecordIter((0),G__18525__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$message], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new c3kit.apron.schema.ValidateError(self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (){var fexpr__18535 = (function (coll__5297__auto__){
return (-1231026224 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
});
return fexpr__18535(this__5296__auto____$1);
})();
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18527,other18528){
var self__ = this;
var this18527__$1 = this;
return (((!((other18528 == null)))) && ((((this18527__$1.constructor === other18528.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18527__$1.message,other18528.message)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18527__$1.__extmap,other18528.__extmap)))))));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new c3kit.apron.schema.ValidateError(self__.message,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18526){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18536 = k18526;
var G__18536__$1 = (((G__18536 instanceof cljs.core.Keyword))?G__18536.fqn:null);
switch (G__18536__$1) {
case "message":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18526);

}
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18525){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18537 = cljs.core.keyword_identical_QMARK_;
var expr__18538 = k__5309__auto__;
if(cljs.core.truth_((function (){var G__18540 = cljs.core.cst$kw$message;
var G__18541 = expr__18538;
return (pred__18537.cljs$core$IFn$_invoke$arity$2 ? pred__18537.cljs$core$IFn$_invoke$arity$2(G__18540,G__18541) : pred__18537.call(null,G__18540,G__18541));
})())){
return (new c3kit.apron.schema.ValidateError(G__18525,self__.__meta,self__.__extmap,null));
} else {
return (new c3kit.apron.schema.ValidateError(self__.message,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18525),null));
}
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$message,self__.message,null))], null),self__.__extmap));
}));

(c3kit.apron.schema.ValidateError.prototype.c3kit$apron$schema$FieldError$ = cljs.core.PROTOCOL_SENTINEL);

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18525){
var self__ = this;
var this__5299__auto____$1 = this;
return (new c3kit.apron.schema.ValidateError(self__.message,G__18525,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5306__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(c3kit.apron.schema.ValidateError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$message], null);
}));

(c3kit.apron.schema.ValidateError.cljs$lang$type = true);

(c3kit.apron.schema.ValidateError.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"c3kit.apron.schema/ValidateError",null,(1),null));
}));

(c3kit.apron.schema.ValidateError.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"c3kit.apron.schema/ValidateError");
}));

/**
 * Positional factory function for c3kit.apron.schema/ValidateError.
 */
c3kit.apron.schema.__GT_ValidateError = (function c3kit$apron$schema$__GT_ValidateError(message){
return (new c3kit.apron.schema.ValidateError(message,null,null,null));
});

/**
 * Factory function for c3kit.apron.schema/ValidateError, taking a map of keywords to field values.
 */
c3kit.apron.schema.map__GT_ValidateError = (function c3kit$apron$schema$map__GT_ValidateError(G__18529){
var extmap__5342__auto__ = (function (){var G__18542 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18529,cljs.core.cst$kw$message);
if(cljs.core.record_QMARK_(G__18529)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18542);
} else {
return G__18542;
}
})();
return (new c3kit.apron.schema.ValidateError(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(G__18529),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {c3kit.apron.schema.FieldError}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
c3kit.apron.schema.ConformError = (function (message,__meta,__extmap,__hash){
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c3kit.apron.schema.ConformError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18546,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18550 = k18546;
var G__18550__$1 = (((G__18550 instanceof cljs.core.Keyword))?G__18550.fqn:null);
switch (G__18550__$1) {
case "message":
return self__.message;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18546,else__5303__auto__);

}
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18551){
var vec__18552 = p__18551;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18552,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18552,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#c3kit.apron.schema.ConformError{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$message,self__.message],null))], null),self__.__extmap));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18545){
var self__ = this;
var G__18545__$1 = this;
return (new cljs.core.RecordIter((0),G__18545__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$message], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new c3kit.apron.schema.ConformError(self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (){var fexpr__18555 = (function (coll__5297__auto__){
return (-668996003 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
});
return fexpr__18555(this__5296__auto____$1);
})();
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18547,other18548){
var self__ = this;
var this18547__$1 = this;
return (((!((other18548 == null)))) && ((((this18547__$1.constructor === other18548.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18547__$1.message,other18548.message)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18547__$1.__extmap,other18548.__extmap)))))));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new c3kit.apron.schema.ConformError(self__.message,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18546){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18556 = k18546;
var G__18556__$1 = (((G__18556 instanceof cljs.core.Keyword))?G__18556.fqn:null);
switch (G__18556__$1) {
case "message":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18546);

}
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18545){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18557 = cljs.core.keyword_identical_QMARK_;
var expr__18558 = k__5309__auto__;
if(cljs.core.truth_((function (){var G__18560 = cljs.core.cst$kw$message;
var G__18561 = expr__18558;
return (pred__18557.cljs$core$IFn$_invoke$arity$2 ? pred__18557.cljs$core$IFn$_invoke$arity$2(G__18560,G__18561) : pred__18557.call(null,G__18560,G__18561));
})())){
return (new c3kit.apron.schema.ConformError(G__18545,self__.__meta,self__.__extmap,null));
} else {
return (new c3kit.apron.schema.ConformError(self__.message,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18545),null));
}
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$message,self__.message,null))], null),self__.__extmap));
}));

(c3kit.apron.schema.ConformError.prototype.c3kit$apron$schema$FieldError$ = cljs.core.PROTOCOL_SENTINEL);

(c3kit.apron.schema.ConformError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18545){
var self__ = this;
var this__5299__auto____$1 = this;
return (new c3kit.apron.schema.ConformError(self__.message,G__18545,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5306__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(c3kit.apron.schema.ConformError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$message], null);
}));

(c3kit.apron.schema.ConformError.cljs$lang$type = true);

(c3kit.apron.schema.ConformError.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"c3kit.apron.schema/ConformError",null,(1),null));
}));

(c3kit.apron.schema.ConformError.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"c3kit.apron.schema/ConformError");
}));

/**
 * Positional factory function for c3kit.apron.schema/ConformError.
 */
c3kit.apron.schema.__GT_ConformError = (function c3kit$apron$schema$__GT_ConformError(message){
return (new c3kit.apron.schema.ConformError(message,null,null,null));
});

/**
 * Factory function for c3kit.apron.schema/ConformError, taking a map of keywords to field values.
 */
c3kit.apron.schema.map__GT_ConformError = (function c3kit$apron$schema$map__GT_ConformError(G__18549){
var extmap__5342__auto__ = (function (){var G__18562 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18549,cljs.core.cst$kw$message);
if(cljs.core.record_QMARK_(G__18549)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18562);
} else {
return G__18562;
}
})();
return (new c3kit.apron.schema.ConformError(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(G__18549),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {c3kit.apron.schema.FieldError}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
c3kit.apron.schema.PresentError = (function (message,__meta,__extmap,__hash){
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c3kit.apron.schema.PresentError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18566,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18570 = k18566;
var G__18570__$1 = (((G__18570 instanceof cljs.core.Keyword))?G__18570.fqn:null);
switch (G__18570__$1) {
case "message":
return self__.message;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18566,else__5303__auto__);

}
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18571){
var vec__18572 = p__18571;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18572,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18572,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#c3kit.apron.schema.PresentError{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$message,self__.message],null))], null),self__.__extmap));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18565){
var self__ = this;
var G__18565__$1 = this;
return (new cljs.core.RecordIter((0),G__18565__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$message], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new c3kit.apron.schema.PresentError(self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (){var fexpr__18575 = (function (coll__5297__auto__){
return (-923193472 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
});
return fexpr__18575(this__5296__auto____$1);
})();
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18567,other18568){
var self__ = this;
var this18567__$1 = this;
return (((!((other18568 == null)))) && ((((this18567__$1.constructor === other18568.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18567__$1.message,other18568.message)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18567__$1.__extmap,other18568.__extmap)))))));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new c3kit.apron.schema.PresentError(self__.message,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18566){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18576 = k18566;
var G__18576__$1 = (((G__18576 instanceof cljs.core.Keyword))?G__18576.fqn:null);
switch (G__18576__$1) {
case "message":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18566);

}
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18565){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18577 = cljs.core.keyword_identical_QMARK_;
var expr__18578 = k__5309__auto__;
if(cljs.core.truth_((function (){var G__18580 = cljs.core.cst$kw$message;
var G__18581 = expr__18578;
return (pred__18577.cljs$core$IFn$_invoke$arity$2 ? pred__18577.cljs$core$IFn$_invoke$arity$2(G__18580,G__18581) : pred__18577.call(null,G__18580,G__18581));
})())){
return (new c3kit.apron.schema.PresentError(G__18565,self__.__meta,self__.__extmap,null));
} else {
return (new c3kit.apron.schema.PresentError(self__.message,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18565),null));
}
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$message,self__.message,null))], null),self__.__extmap));
}));

(c3kit.apron.schema.PresentError.prototype.c3kit$apron$schema$FieldError$ = cljs.core.PROTOCOL_SENTINEL);

(c3kit.apron.schema.PresentError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18565){
var self__ = this;
var this__5299__auto____$1 = this;
return (new c3kit.apron.schema.PresentError(self__.message,G__18565,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5306__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(c3kit.apron.schema.PresentError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$message], null);
}));

(c3kit.apron.schema.PresentError.cljs$lang$type = true);

(c3kit.apron.schema.PresentError.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"c3kit.apron.schema/PresentError",null,(1),null));
}));

(c3kit.apron.schema.PresentError.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"c3kit.apron.schema/PresentError");
}));

/**
 * Positional factory function for c3kit.apron.schema/PresentError.
 */
c3kit.apron.schema.__GT_PresentError = (function c3kit$apron$schema$__GT_PresentError(message){
return (new c3kit.apron.schema.PresentError(message,null,null,null));
});

/**
 * Factory function for c3kit.apron.schema/PresentError, taking a map of keywords to field values.
 */
c3kit.apron.schema.map__GT_PresentError = (function c3kit$apron$schema$map__GT_PresentError(G__18569){
var extmap__5342__auto__ = (function (){var G__18582 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18569,cljs.core.cst$kw$message);
if(cljs.core.record_QMARK_(G__18569)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18582);
} else {
return G__18582;
}
})();
return (new c3kit.apron.schema.PresentError(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(G__18569),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

c3kit.apron.schema._create_field_error = (function c3kit$apron$schema$_create_field_error(ctor,default_message,options){
var ex = cljs.core.cst$kw$exception.cljs$core$IFn$_invoke$arity$1(options);
var data = cljs.core.ex_data(ex);
var message = (function (){var or__5002__auto__ = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = cljs.core.ex_message(ex);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return default_message;
}
}
}
})();
return cljs.core.with_meta((ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(message) : ctor.call(null,message)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$message)], 0)));
});
/**
 * Return the message of an error.
 */
c3kit.apron.schema.error_message = (function c3kit$apron$schema$error_message(error){
return cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(error);
});
/**
 * Return the exception attached to a FieldError if any, otherwise nil.
 */
c3kit.apron.schema.error_exception = (function c3kit$apron$schema$error_exception(field_error){
return cljs.core.cst$kw$exception.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(field_error));
});
/**
 * Return the value that caused the FieldError, if any, otherwise nil.
 */
c3kit.apron.schema.error_value = (function c3kit$apron$schema$error_value(field_error){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(field_error));
});
/**
 * Return the target type of a CoerceError, if any, otherwise nil.
 */
c3kit.apron.schema.error_type = (function c3kit$apron$schema$error_type(field_error){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(field_error));
});
/**
 * Return the data map associated with the FieldError.
 */
c3kit.apron.schema.error_data = (function c3kit$apron$schema$error_data(field_error){
return cljs.core.meta(field_error);
});
c3kit.apron.schema.error__GT_exception = (function c3kit$apron$schema$error__GT_exception(error){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(error),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Returns true if the value is a FieldError, false otherwise.
 */
c3kit.apron.schema.field_error_QMARK_ = (function c3kit$apron$schema$field_error_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.c3kit$apron$schema$FieldError$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(c3kit.apron.schema.FieldError,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(c3kit.apron.schema.FieldError,value);
}
});
/**
 * Returns a sequence of all the FieldErrors in a processed entity.
 */
c3kit.apron.schema.error_seq = (function c3kit$apron$schema$error_seq(entity){
if(c3kit.apron.schema.field_error_QMARK_(entity)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity], null);
} else {
if(cljs.core.map_QMARK_(entity)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(c3kit.apron.schema.error_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(entity)], 0));
} else {
if(c3kit.apron.schema.multiple_QMARK_(entity)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(c3kit.apron.schema.error_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity], 0));
} else {
return null;

}
}
}
});
/**
 * Return true if the processed entity has errors, false otherwise.
 */
c3kit.apron.schema.error_QMARK_ = (function c3kit$apron$schema$error_QMARK_(entity){
return cljs.core.boolean$(cljs.core.seq(c3kit.apron.schema.error_seq(entity)));
});
if((typeof c3kit !== 'undefined') && (typeof c3kit.apron !== 'undefined') && (typeof c3kit.apron.schema !== 'undefined') && (typeof c3kit.apron.schema._process_field_spec !== 'undefined')){
} else {
c3kit.apron.schema._process_field_spec = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__18586 = cljs.core.get_global_hierarchy;
return (fexpr__18586.cljs$core$IFn$_invoke$arity$0 ? fexpr__18586.cljs$core$IFn$_invoke$arity$0() : fexpr__18586.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("c3kit.apron.schema","-process-field-spec"),(function (process,_spec,_value){
return process;
}),cljs.core.cst$kw$default,hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.apron !== 'undefined') && (typeof c3kit.apron.schema !== 'undefined') && (typeof c3kit.apron.schema._process_entity_level_spec !== 'undefined')){
} else {
c3kit.apron.schema._process_entity_level_spec = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__18587 = cljs.core.get_global_hierarchy;
return (fexpr__18587.cljs$core$IFn$_invoke$arity$0 ? fexpr__18587.cljs$core$IFn$_invoke$arity$0() : fexpr__18587.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("c3kit.apron.schema","-process-entity-level-spec"),(function (process,_key,_spec,_entity){
return process;
}),cljs.core.cst$kw$default,hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.apron !== 'undefined') && (typeof c3kit.apron.schema !== 'undefined') && (typeof c3kit.apron.schema._process_error !== 'undefined')){
} else {
c3kit.apron.schema._process_error = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__18588 = cljs.core.get_global_hierarchy;
return (fexpr__18588.cljs$core$IFn$_invoke$arity$0 ? fexpr__18588.cljs$core$IFn$_invoke$arity$0() : fexpr__18588.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("c3kit.apron.schema","-process-error"),(function (process,_options){
return process;
}),cljs.core.cst$kw$default,hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
c3kit.apron.schema._process_error.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$coerce,(function (_,options){
return c3kit.apron.schema._create_field_error(c3kit.apron.schema.__GT_CoerceError,"coercion failed",options);
}));
c3kit.apron.schema._process_error.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$validate,(function (_,options){
return c3kit.apron.schema._create_field_error(c3kit.apron.schema.__GT_ValidateError,"is invalid",options);
}));
c3kit.apron.schema._process_error.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$conform,(function (_,options){
return c3kit.apron.schema._create_field_error(c3kit.apron.schema.__GT_ConformError,"conform failed",options);
}));
c3kit.apron.schema._process_error.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$present,(function (_,options){
return c3kit.apron.schema._create_field_error(c3kit.apron.schema.__GT_PresentError,"present failed",options);
}));
c3kit.apron.schema.field_result_or_error = (function c3kit$apron$schema$field_result_or_error(process,spec,value){
try{return (c3kit.apron.schema._process_field_spec.cljs$core$IFn$_invoke$arity$3 ? c3kit.apron.schema._process_field_spec.cljs$core$IFn$_invoke$arity$3(process,spec,value) : c3kit.apron.schema._process_field_spec.call(null,process,spec,value));
}catch (e18589){var e = e18589;
var G__18590 = process;
var G__18591 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exception,e], null);
return (c3kit.apron.schema._process_error.cljs$core$IFn$_invoke$arity$2 ? c3kit.apron.schema._process_error.cljs$core$IFn$_invoke$arity$2(G__18590,G__18591) : c3kit.apron.schema._process_error.call(null,G__18590,G__18591));
}});
c3kit.apron.schema.entity_result_or_error = (function c3kit$apron$schema$entity_result_or_error(process,key,spec,entity){
try{return (c3kit.apron.schema._process_entity_level_spec.cljs$core$IFn$_invoke$arity$4 ? c3kit.apron.schema._process_entity_level_spec.cljs$core$IFn$_invoke$arity$4(process,key,spec,entity) : c3kit.apron.schema._process_entity_level_spec.call(null,process,key,spec,entity));
}catch (e18592){var e = e18592;
var G__18593 = process;
var G__18594 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exception,e], null);
return (c3kit.apron.schema._process_error.cljs$core$IFn$_invoke$arity$2 ? c3kit.apron.schema._process_error.cljs$core$IFn$_invoke$arity$2(G__18593,G__18594) : c3kit.apron.schema._process_error.call(null,G__18593,G__18594));
}});
c3kit.apron.schema._process_field_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$coerce,(function (_,spec,value){
var map__18595 = spec;
var map__18595__$1 = cljs.core.__destructure_map(map__18595);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18595__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18595__$1,cljs.core.cst$kw$message);
var coerce_fns = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(c3kit.apron.schema.__GT_vec(cljs.core.cst$kw$coerce.cljs$core$IFn$_invoke$arity$1(spec)),c3kit.apron.schema.type_coercer_BANG_(type));
try{var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,coerce_fn){
return (coerce_fn.cljs$core$IFn$_invoke$arity$1 ? coerce_fn.cljs$core$IFn$_invoke$arity$1(result) : coerce_fn.call(null,result));
}),value,coerce_fns);
return result;
}catch (e18596){var e = e18596;
var G__18597 = cljs.core.cst$kw$coerce;
var G__18598 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,message,cljs.core.cst$kw$exception,e], null);
return (c3kit.apron.schema._process_error.cljs$core$IFn$_invoke$arity$2 ? c3kit.apron.schema._process_error.cljs$core$IFn$_invoke$arity$2(G__18597,G__18598) : c3kit.apron.schema._process_error.call(null,G__18597,G__18598));
}}));
c3kit.apron.schema.process_validations = (function c3kit$apron$schema$process_validations(validations,value){
var seq__18599 = cljs.core.seq(validations);
var chunk__18600 = null;
var count__18601 = (0);
var i__18602 = (0);
while(true){
if((i__18602 < count__18601)){
var map__18613 = chunk__18600.cljs$core$IIndexed$_nth$arity$2(null,i__18602);
var map__18613__$1 = cljs.core.__destructure_map(map__18613);
var validate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18613__$1,cljs.core.cst$kw$validate);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18613__$1,cljs.core.cst$kw$message);
var validate_fns_18623 = ((c3kit.apron.schema.multiple_QMARK_(validate))?validate:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [validate], null));
var seq__18614_18624 = cljs.core.seq(validate_fns_18623);
var chunk__18615_18625 = null;
var count__18616_18626 = (0);
var i__18617_18627 = (0);
while(true){
if((i__18617_18627 < count__18616_18626)){
var v_fn_18628 = chunk__18615_18625.cljs$core$IIndexed$_nth$arity$2(null,i__18617_18627);
if(cljs.core.truth_((v_fn_18628.cljs$core$IFn$_invoke$arity$1 ? v_fn_18628.cljs$core$IFn$_invoke$arity$1(value) : v_fn_18628.call(null,value)))){
} else {
throw c3kit.apron.schema.validation_ex(message,value);
}


var G__18629 = seq__18614_18624;
var G__18630 = chunk__18615_18625;
var G__18631 = count__18616_18626;
var G__18632 = (i__18617_18627 + (1));
seq__18614_18624 = G__18629;
chunk__18615_18625 = G__18630;
count__18616_18626 = G__18631;
i__18617_18627 = G__18632;
continue;
} else {
var temp__5804__auto___18633 = cljs.core.seq(seq__18614_18624);
if(temp__5804__auto___18633){
var seq__18614_18634__$1 = temp__5804__auto___18633;
if(cljs.core.chunked_seq_QMARK_(seq__18614_18634__$1)){
var c__5525__auto___18635 = cljs.core.chunk_first(seq__18614_18634__$1);
var G__18636 = cljs.core.chunk_rest(seq__18614_18634__$1);
var G__18637 = c__5525__auto___18635;
var G__18638 = cljs.core.count(c__5525__auto___18635);
var G__18639 = (0);
seq__18614_18624 = G__18636;
chunk__18615_18625 = G__18637;
count__18616_18626 = G__18638;
i__18617_18627 = G__18639;
continue;
} else {
var v_fn_18640 = cljs.core.first(seq__18614_18634__$1);
if(cljs.core.truth_((v_fn_18640.cljs$core$IFn$_invoke$arity$1 ? v_fn_18640.cljs$core$IFn$_invoke$arity$1(value) : v_fn_18640.call(null,value)))){
} else {
throw c3kit.apron.schema.validation_ex(message,value);
}


var G__18641 = cljs.core.next(seq__18614_18634__$1);
var G__18642 = null;
var G__18643 = (0);
var G__18644 = (0);
seq__18614_18624 = G__18641;
chunk__18615_18625 = G__18642;
count__18616_18626 = G__18643;
i__18617_18627 = G__18644;
continue;
}
} else {
}
}
break;
}


var G__18645 = seq__18599;
var G__18646 = chunk__18600;
var G__18647 = count__18601;
var G__18648 = (i__18602 + (1));
seq__18599 = G__18645;
chunk__18600 = G__18646;
count__18601 = G__18647;
i__18602 = G__18648;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18599);
if(temp__5804__auto__){
var seq__18599__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18599__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18599__$1);
var G__18649 = cljs.core.chunk_rest(seq__18599__$1);
var G__18650 = c__5525__auto__;
var G__18651 = cljs.core.count(c__5525__auto__);
var G__18652 = (0);
seq__18599 = G__18649;
chunk__18600 = G__18650;
count__18601 = G__18651;
i__18602 = G__18652;
continue;
} else {
var map__18618 = cljs.core.first(seq__18599__$1);
var map__18618__$1 = cljs.core.__destructure_map(map__18618);
var validate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18618__$1,cljs.core.cst$kw$validate);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18618__$1,cljs.core.cst$kw$message);
var validate_fns_18653 = ((c3kit.apron.schema.multiple_QMARK_(validate))?validate:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [validate], null));
var seq__18619_18654 = cljs.core.seq(validate_fns_18653);
var chunk__18620_18655 = null;
var count__18621_18656 = (0);
var i__18622_18657 = (0);
while(true){
if((i__18622_18657 < count__18621_18656)){
var v_fn_18658 = chunk__18620_18655.cljs$core$IIndexed$_nth$arity$2(null,i__18622_18657);
if(cljs.core.truth_((v_fn_18658.cljs$core$IFn$_invoke$arity$1 ? v_fn_18658.cljs$core$IFn$_invoke$arity$1(value) : v_fn_18658.call(null,value)))){
} else {
throw c3kit.apron.schema.validation_ex(message,value);
}


var G__18659 = seq__18619_18654;
var G__18660 = chunk__18620_18655;
var G__18661 = count__18621_18656;
var G__18662 = (i__18622_18657 + (1));
seq__18619_18654 = G__18659;
chunk__18620_18655 = G__18660;
count__18621_18656 = G__18661;
i__18622_18657 = G__18662;
continue;
} else {
var temp__5804__auto___18663__$1 = cljs.core.seq(seq__18619_18654);
if(temp__5804__auto___18663__$1){
var seq__18619_18664__$1 = temp__5804__auto___18663__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18619_18664__$1)){
var c__5525__auto___18665 = cljs.core.chunk_first(seq__18619_18664__$1);
var G__18666 = cljs.core.chunk_rest(seq__18619_18664__$1);
var G__18667 = c__5525__auto___18665;
var G__18668 = cljs.core.count(c__5525__auto___18665);
var G__18669 = (0);
seq__18619_18654 = G__18666;
chunk__18620_18655 = G__18667;
count__18621_18656 = G__18668;
i__18622_18657 = G__18669;
continue;
} else {
var v_fn_18670 = cljs.core.first(seq__18619_18664__$1);
if(cljs.core.truth_((v_fn_18670.cljs$core$IFn$_invoke$arity$1 ? v_fn_18670.cljs$core$IFn$_invoke$arity$1(value) : v_fn_18670.call(null,value)))){
} else {
throw c3kit.apron.schema.validation_ex(message,value);
}


var G__18671 = cljs.core.next(seq__18619_18664__$1);
var G__18672 = null;
var G__18673 = (0);
var G__18674 = (0);
seq__18619_18654 = G__18671;
chunk__18620_18655 = G__18672;
count__18621_18656 = G__18673;
i__18622_18657 = G__18674;
continue;
}
} else {
}
}
break;
}


var G__18675 = cljs.core.next(seq__18599__$1);
var G__18676 = null;
var G__18677 = (0);
var G__18678 = (0);
seq__18599 = G__18675;
chunk__18600 = G__18676;
count__18601 = G__18677;
i__18602 = G__18678;
continue;
}
} else {
return null;
}
}
break;
}
});
c3kit.apron.schema._process_field_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$validate,(function (_,spec,value){
var map__18679 = spec;
var map__18679__$1 = cljs.core.__destructure_map(map__18679);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18679__$1,cljs.core.cst$kw$type);
var validate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18679__$1,cljs.core.cst$kw$validate);
var validations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18679__$1,cljs.core.cst$kw$validations);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18679__$1,cljs.core.cst$kw$message);
var validations__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$validate,c3kit.apron.schema.type_validator_BANG_(type),cljs.core.cst$kw$message,message], null)], null),(cljs.core.truth_(validate)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$validate,validate,cljs.core.cst$kw$message,message], null)], null):cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([validations], 0));
c3kit.apron.schema.process_validations(validations__$1,value);

return value;
}));
c3kit.apron.schema._process_field_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$conform,(function (_,spec,value){
var coerce_result = c3kit.apron.schema.field_result_or_error(cljs.core.cst$kw$coerce,spec,value);
if(c3kit.apron.schema.field_error_QMARK_(coerce_result)){
return coerce_result;
} else {
var field_result_or_failure = c3kit.apron.schema.field_result_or_error(cljs.core.cst$kw$validate,spec,coerce_result);
return field_result_or_failure;
}
}));
c3kit.apron.schema._process_field_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$present,(function (_,spec,value){
var present_fns = c3kit.apron.schema.__GT_vec(cljs.core.cst$kw$present.cljs$core$IFn$_invoke$arity$1(spec));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,present_fn){
return (present_fn.cljs$core$IFn$_invoke$arity$1 ? present_fn.cljs$core$IFn$_invoke$arity$1(result) : present_fn.call(null,result));
}),value,present_fns);
}));
c3kit.apron.schema._process_entity_level_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$coerce,(function (_,key,spec,entity){
var map__18680 = spec;
var map__18680__$1 = cljs.core.__destructure_map(map__18680);
var coerce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18680__$1,cljs.core.cst$kw$coerce);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18680__$1,cljs.core.cst$kw$message);
var coerce_fns = c3kit.apron.schema.__GT_vec(coerce);
try{var coerced_entity = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,coerce_fn){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,key,(coerce_fn.cljs$core$IFn$_invoke$arity$1 ? coerce_fn.cljs$core$IFn$_invoke$arity$1(result) : coerce_fn.call(null,result)));
}),entity,coerce_fns);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coerced_entity,key);
}catch (e18681){var e = e18681;
var G__18682 = cljs.core.cst$kw$coerce;
var G__18683 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,message,cljs.core.cst$kw$exception,e], null);
return (c3kit.apron.schema._process_error.cljs$core$IFn$_invoke$arity$2 ? c3kit.apron.schema._process_error.cljs$core$IFn$_invoke$arity$2(G__18682,G__18683) : c3kit.apron.schema._process_error.call(null,G__18682,G__18683));
}}));
c3kit.apron.schema._process_entity_level_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$validate,(function (_,key,spec,entity){
var map__18684 = spec;
var map__18684__$1 = cljs.core.__destructure_map(map__18684);
var validate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18684__$1,cljs.core.cst$kw$validate);
var validations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18684__$1,cljs.core.cst$kw$validations);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18684__$1,cljs.core.cst$kw$message);
var validations__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(validate)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$validate,validate,cljs.core.cst$kw$message,message], null)], null):cljs.core.PersistentVector.EMPTY),validations);
c3kit.apron.schema.process_validations(validations__$1,entity);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,key);
}));
c3kit.apron.schema._process_entity_level_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$conform,(function (_,key,spec,entity){
var coerce_result = c3kit.apron.schema.entity_result_or_error(cljs.core.cst$kw$coerce,key,spec,entity);
if(c3kit.apron.schema.field_error_QMARK_(coerce_result)){
return coerce_result;
} else {
return c3kit.apron.schema.entity_result_or_error(cljs.core.cst$kw$validate,key,spec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,key,coerce_result));
}
}));
c3kit.apron.schema._process_entity_level_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$present,(function (_,key,spec,entity){
var present_fns = c3kit.apron.schema.__GT_vec(cljs.core.cst$kw$present.cljs$core$IFn$_invoke$arity$1(spec));
var presented_entity = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,present_fn){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,key,(present_fn.cljs$core$IFn$_invoke$arity$1 ? present_fn.cljs$core$IFn$_invoke$arity$1(result) : present_fn.call(null,result)));
}),entity,present_fns);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(presented_entity,key);
}));
c3kit.apron.schema.process_spec_on_seq_entries = (function c3kit$apron$schema$process_spec_on_seq_entries(process,spec,value){
if((value == null)){
return null;
} else {
if((!(c3kit.apron.schema.multiple_QMARK_(value)))){
var G__18686 = process;
var G__18687 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(spec)),"] expected"].join('')], null);
return (c3kit.apron.schema._process_error.cljs$core$IFn$_invoke$arity$2 ? c3kit.apron.schema._process_error.cljs$core$IFn$_invoke$arity$2(G__18686,G__18687) : c3kit.apron.schema._process_error.call(null,G__18686,G__18687));
} else {
var result = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__18685_SHARP_){
return (c3kit.apron.schema._process_spec_on_value.cljs$core$IFn$_invoke$arity$3 ? c3kit.apron.schema._process_spec_on_value.cljs$core$IFn$_invoke$arity$3(process,spec,p1__18685_SHARP_) : c3kit.apron.schema._process_spec_on_value.call(null,process,spec,p1__18685_SHARP_));
}),value);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$present,process)){
return c3kit.apron.corec.removev(cljs.core.nil_QMARK_,result);
} else {
return result;
}

}
}
});
c3kit.apron.schema.process_seq_spec_on_value = (function c3kit$apron$schema$process_seq_spec_on_value(process,spec,value){
var entry_spec = (function (){var or__5002__auto__ = cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$any], null);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$coerce,process)){
var value__$1 = c3kit.apron.schema.field_result_or_error(process,spec,value);
if(c3kit.apron.schema.error_QMARK_(value__$1)){
return value__$1;
} else {
return c3kit.apron.schema.process_spec_on_seq_entries(process,entry_spec,value__$1);
}
} else {
var value__$1 = c3kit.apron.schema.process_spec_on_seq_entries(process,entry_spec,value);
if(c3kit.apron.schema.error_QMARK_(value__$1)){
return value__$1;
} else {
return c3kit.apron.schema.field_result_or_error(process,spec,value__$1);
}
}
});
c3kit.apron.schema.process_map_spec_on_value = (function c3kit$apron$schema$process_map_spec_on_value(process,spec,value){
var schema = cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$coerce,process)){
var value__$1 = c3kit.apron.schema.field_result_or_error(process,spec,value);
if(c3kit.apron.schema.error_QMARK_(value__$1)){
return value__$1;
} else {
return (c3kit.apron.schema.process_schema_on_entity.cljs$core$IFn$_invoke$arity$3 ? c3kit.apron.schema.process_schema_on_entity.cljs$core$IFn$_invoke$arity$3(process,schema,value__$1) : c3kit.apron.schema.process_schema_on_entity.call(null,process,schema,value__$1));
}
} else {
if(cljs.core.map_QMARK_(value)){
var entity = (c3kit.apron.schema.process_schema_on_entity.cljs$core$IFn$_invoke$arity$3 ? c3kit.apron.schema.process_schema_on_entity.cljs$core$IFn$_invoke$arity$3(process,schema,value) : c3kit.apron.schema.process_schema_on_entity.call(null,process,schema,value));
if(c3kit.apron.schema.error_QMARK_(entity)){
return entity;
} else {
return c3kit.apron.schema.field_result_or_error(process,spec,entity);
}
} else {
return c3kit.apron.schema.field_result_or_error(process,spec,value);

}
}
});
c3kit.apron.schema.process_one_of_on_value = (function c3kit$apron$schema$process_one_of_on_value(process,spec,value){
var specs = cljs.core.cst$kw$specs.cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.seq(specs)){
var results = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__18688_SHARP_){
return (c3kit.apron.schema._process_spec_on_value.cljs$core$IFn$_invoke$arity$3 ? c3kit.apron.schema._process_spec_on_value.cljs$core$IFn$_invoke$arity$3(process,p1__18688_SHARP_,value) : c3kit.apron.schema._process_spec_on_value.call(null,process,p1__18688_SHARP_,value));
}),specs);
var non_error_results = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18689_SHARP_){
return (!(c3kit.apron.schema.error_QMARK_(p1__18689_SHARP_)));
}),results);
if(cljs.core.seq(non_error_results)){
return cljs.core.first(non_error_results);
} else {
var G__18690 = process;
var G__18691 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,(function (){var or__5002__auto__ = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "one-of: no matching spec";
}
})(),cljs.core.cst$kw$errors,results], null);
return (c3kit.apron.schema._process_error.cljs$core$IFn$_invoke$arity$2 ? c3kit.apron.schema._process_error.cljs$core$IFn$_invoke$arity$2(G__18690,G__18691) : c3kit.apron.schema._process_error.call(null,G__18690,G__18691));
}
} else {
var G__18692 = process;
var G__18693 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,"one-of: empty specs"], null);
return (c3kit.apron.schema._process_error.cljs$core$IFn$_invoke$arity$2 ? c3kit.apron.schema._process_error.cljs$core$IFn$_invoke$arity$2(G__18692,G__18693) : c3kit.apron.schema._process_error.call(null,G__18692,G__18693));
}
});
c3kit.apron.schema._process_spec_on_value = (function c3kit$apron$schema$_process_spec_on_value(process,spec,value){
var spec__$1 = c3kit.apron.schema.normalize_spec(spec);
var type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(spec__$1);
var G__18694 = type;
var G__18694__$1 = (((G__18694 instanceof cljs.core.Keyword))?G__18694.fqn:null);
switch (G__18694__$1) {
case "seq":
return c3kit.apron.schema.process_seq_spec_on_value(process,spec__$1,value);

break;
case "map":
return c3kit.apron.schema.process_map_spec_on_value(process,spec__$1,value);

break;
case "one-of":
return c3kit.apron.schema.process_one_of_on_value(process,spec__$1,value);

break;
default:
return c3kit.apron.schema.field_result_or_error(process,spec__$1,value);

}
});
c3kit.apron.schema.process_entity_key_spec = (function c3kit$apron$schema$process_entity_key_spec(process,entity,p__18696){
var vec__18697 = p__18696;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18697,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18697,(1),null);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,key);
var new_value = c3kit.apron.schema._process_spec_on_value(process,spec,value);
if((!((new_value == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,key,new_value);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(entity,key);
}
});
c3kit.apron.schema.process_entity_level_spec = (function c3kit$apron$schema$process_entity_level_spec(process,result,p__18700){
var vec__18701 = p__18700;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18701,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18701,(1),null);
var value = c3kit.apron.schema.entity_result_or_error(process,key,spec,cljs.core.cst$kw$entity.cljs$core$IFn$_invoke$arity$1(result));
if((!((value == null)))){
if(c3kit.apron.schema.error_QMARK_(value)){
return cljs.core.assoc_in(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors,key], null),value);
} else {
return cljs.core.assoc_in(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity,key], null),value);
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,cljs.core.cst$kw$entity,cljs.core.dissoc,key);
}
});
c3kit.apron.schema.process_schema_on_entity = (function c3kit$apron$schema$process_schema_on_entity(process,schema,entity){
var entity__$1 = cljs.core.select_keys(entity,cljs.core.keys(schema));
var entity__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.apron.schema.process_entity_key_spec,process),entity__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema,cljs.core.cst$kw$_STAR_));
if(c3kit.apron.schema.error_QMARK_(entity__$2)){
return entity__$2;
} else {
var map__18704 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.apron.schema.process_entity_level_spec,process),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$entity,entity__$2], null),cljs.core.cst$kw$_STAR_.cljs$core$IFn$_invoke$arity$1(schema));
var map__18704__$1 = cljs.core.__destructure_map(map__18704);
var entity__$3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18704__$1,cljs.core.cst$kw$entity);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18704__$1,cljs.core.cst$kw$errors);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity__$3,errors], 0));
}
});
c3kit.apron.schema.coerce_entity_and_process_schema = (function c3kit$apron$schema$coerce_entity_and_process_schema(process,schema,entity){
try{return c3kit.apron.schema.process_schema_on_entity(process,schema,c3kit.apron.schema.__GT_map(entity));
}catch (e18705){var e = e18705;
var G__18706 = process;
var G__18707 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,entity,cljs.core.cst$kw$exception,e], null);
return (c3kit.apron.schema._process_error.cljs$core$IFn$_invoke$arity$2 ? c3kit.apron.schema._process_error.cljs$core$IFn$_invoke$arity$2(G__18706,G__18707) : c3kit.apron.schema._process_error.call(null,G__18706,G__18707));
}});
c3kit.apron.schema.process_value_or_error = (function c3kit$apron$schema$process_value_or_error(process,spec,value){
var result = c3kit.apron.schema._process_spec_on_value(process,spec,value);
var temp__5802__auto__ = cljs.core.first(c3kit.apron.schema.error_seq(result));
if(cljs.core.truth_(temp__5802__auto__)){
var error = temp__5802__auto__;
throw c3kit.apron.schema.error__GT_exception(error);
} else {
return result;
}
});
/**
 * returns coerced value or throws an exception
 */
c3kit.apron.schema.coerce_value_BANG_ = (function c3kit$apron$schema$coerce_value_BANG_(var_args){
var G__18709 = arguments.length;
switch (G__18709) {
case 3:
return c3kit.apron.schema.coerce_value_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.coerce_value_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.coerce_value_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.coerce_value_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.coerce_value_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return c3kit.apron.schema.process_value_or_error(cljs.core.cst$kw$coerce,spec,value);
}));

(c3kit.apron.schema.coerce_value_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * DEPRECATED
 */
c3kit.apron.schema.coerce_value = (function c3kit$apron$schema$coerce_value(var_args){
var G__18712 = arguments.length;
switch (G__18712) {
case 3:
return c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.apron.schema",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/coerce-value is DEPRECATED.  Use schema/coerce-value! instead."], null);
}),null)),null,(36),null);

return c3kit.apron.schema.process_value_or_error(cljs.core.cst$kw$coerce,spec,value);
}));

(c3kit.apron.schema.coerce_value.cljs$lang$maxFixedArity = 3);

/**
 * throws an exception when validation fails, value otherwise
 */
c3kit.apron.schema.validate_value_BANG_ = (function c3kit$apron$schema$validate_value_BANG_(var_args){
var G__18715 = arguments.length;
switch (G__18715) {
case 3:
return c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return c3kit.apron.schema.process_value_or_error(cljs.core.cst$kw$validate,spec,value);
}));

(c3kit.apron.schema.validate_value_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * return true or false
 */
c3kit.apron.schema.valid_value_QMARK_ = (function c3kit$apron$schema$valid_value_QMARK_(var_args){
var G__18718 = arguments.length;
switch (G__18718) {
case 3:
return c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
try{c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2(spec,value);

return true;
}catch (e18719){var _ = e18719;
return false;
}}));

(c3kit.apron.schema.valid_value_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * coerce and validate, returns coerced value or throws
 */
c3kit.apron.schema.conform_value_BANG_ = (function c3kit$apron$schema$conform_value_BANG_(var_args){
var G__18722 = arguments.length;
switch (G__18722) {
case 3:
return c3kit.apron.schema.conform_value_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.conform_value_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.conform_value_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.conform_value_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.conform_value_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return c3kit.apron.schema.process_value_or_error(cljs.core.cst$kw$conform,spec,value);
}));

(c3kit.apron.schema.conform_value_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * DEPRECATED
 */
c3kit.apron.schema.conform_value = (function c3kit$apron$schema$conform_value(var_args){
var G__18725 = arguments.length;
switch (G__18725) {
case 3:
return c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.apron.schema",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/conform-value is DEPRECATED.  Use schema/conform-value! instead."], null);
}),null)),null,(37),null);

return c3kit.apron.schema.process_value_or_error(cljs.core.cst$kw$conform,spec,value);
}));

(c3kit.apron.schema.conform_value.cljs$lang$maxFixedArity = 3);

/**
 * returns a presentable representation of the value, or throws
 */
c3kit.apron.schema.present_value_BANG_ = (function c3kit$apron$schema$present_value_BANG_(var_args){
var G__18728 = arguments.length;
switch (G__18728) {
case 3:
return c3kit.apron.schema.present_value_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.present_value_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.present_value_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.present_value_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.present_value_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return c3kit.apron.schema.process_value_or_error(cljs.core.cst$kw$present,spec,value);
}));

(c3kit.apron.schema.present_value_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * DEPRECATED
 */
c3kit.apron.schema.present_value = (function c3kit$apron$schema$present_value(var_args){
var G__18731 = arguments.length;
switch (G__18731) {
case 3:
return c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.apron.schema",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/present-value is DEPRECATED.  Use schema/present-value! instead."], null);
}),null)),null,(38),null);

return c3kit.apron.schema.process_value_or_error(cljs.core.cst$kw$present,spec,value);
}));

(c3kit.apron.schema.present_value.cljs$lang$maxFixedArity = 3);

/**
 * Returns coerced entity or SchemaError if any coercion failed. Use error? to check result.
 *   Use Case: 'I want to change my data into the types specified by the schema.'
 */
c3kit.apron.schema.coerce = (function c3kit$apron$schema$coerce(schema,entity){
return c3kit.apron.schema.coerce_entity_and_process_schema(cljs.core.cst$kw$coerce,schema,entity);
});
/**
 * Returns entity with all values true, or SchemaError when one or more invalid fields. Use error? to check result.
 *   Use Case: 'I want to make sure all the data is valid according to the schema.'
 */
c3kit.apron.schema.validate = (function c3kit$apron$schema$validate(schema,entity){
return c3kit.apron.schema.coerce_entity_and_process_schema(cljs.core.cst$kw$validate,schema,entity);
});
/**
 * Returns coerced entity or SchemaError upon any coercion or validation failure. Use error? to check result.
 *   Use Case: 'I want to coerce my data then validate the coerced data, all according to the schema.'
 *   Use Case: Data comes in from a web-form so strings have to be coerced into numbers, etc., then
 *          we need to validate that the data is good.
 */
c3kit.apron.schema.conform = (function c3kit$apron$schema$conform(schema,entity){
return c3kit.apron.schema.coerce_entity_and_process_schema(cljs.core.cst$kw$conform,schema,entity);
});
/**
 * Returns presented entity with FieldErrors where the process failed. Use error? to check result.
 */
c3kit.apron.schema.present = (function c3kit$apron$schema$present(schema,entity){
return c3kit.apron.schema.coerce_entity_and_process_schema(cljs.core.cst$kw$present,schema,entity);
});
c3kit.apron.schema.as_map_or_nil = (function c3kit$apron$schema$as_map_or_nil(thing){
if(cljs.core.seq(thing)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,thing);
} else {
return null;
}
});
c3kit.apron.schema.error_map = (function c3kit$apron$schema$error_map(result){
if(c3kit.apron.schema.field_error_QMARK_(result)){
return result;
} else {
if(cljs.core.map_QMARK_(result)){
return c3kit.apron.schema.as_map_or_nil(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18733){
var vec__18734 = p__18733;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18734,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18734,(1),null);
var temp__5804__auto__ = (c3kit.apron.schema.error_map.cljs$core$IFn$_invoke$arity$1 ? c3kit.apron.schema.error_map.cljs$core$IFn$_invoke$arity$1(v) : c3kit.apron.schema.error_map.call(null,v));
if(cljs.core.truth_(temp__5804__auto__)){
var v__$1 = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null);
} else {
return null;
}
}),result)));
} else {
if(c3kit.apron.schema.multiple_QMARK_(result)){
return c3kit.apron.schema.as_map_or_nil(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (k,v){
var temp__5804__auto__ = (c3kit.apron.schema.error_map.cljs$core$IFn$_invoke$arity$1 ? c3kit.apron.schema.error_map.cljs$core$IFn$_invoke$arity$1(v) : c3kit.apron.schema.error_map.call(null,v));
if(cljs.core.truth_(temp__5804__auto__)){
var v__$1 = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null);
} else {
return null;
}
}),result)));
} else {
return null;

}
}
}
});
/**
 * nil when there are no errors, otherwise a map {<field> <error message>}.
 */
c3kit.apron.schema.message_map = (function c3kit$apron$schema$message_map(result){
if(c3kit.apron.schema.error_QMARK_(result)){
var temp__5804__auto__ = c3kit.apron.schema.error_map(result);
if(cljs.core.truth_(temp__5804__auto__)){
var errors = temp__5804__auto__;
return clojure.walk.postwalk((function (v){
if(c3kit.apron.schema.field_error_QMARK_(v)){
return c3kit.apron.schema.error_message(v);
} else {
return v;
}
}),errors);
} else {
return null;
}
} else {
return null;
}
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.error_message_map = (function c3kit$apron$schema$error_message_map(result){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.apron.schema",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/error-message-map is DEPRECATED.  Use schema/message-map instead."], null);
}),null)),null,(39),null);

return c3kit.apron.schema.message_map(result);
});
/**
 * seq of 'friendly' error messages; nil if none.
 */
c3kit.apron.schema.message_seq = (function c3kit$apron$schema$message_seq(result){
var temp__5804__auto__ = c3kit.apron.schema.message_map(result);
if(cljs.core.truth_(temp__5804__auto__)){
var errors = temp__5804__auto__;
var errors__$1 = errors;
var stack = cljs.core.List.EMPTY;
var path = cljs.core.List.EMPTY;
var result__$1 = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(errors__$1)){
if(cljs.core.empty_QMARK_(stack)){
return result__$1;
} else {
var G__18743 = cljs.core.first(stack);
var G__18744 = cljs.core.rest(stack);
var G__18745 = cljs.core.rest(path);
var G__18746 = result__$1;
errors__$1 = G__18743;
stack = G__18744;
path = G__18745;
result__$1 = G__18746;
continue;
}
} else {
var vec__18740 = cljs.core.first(errors__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18740,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18740,(1),null);
var new_path = cljs.core.cons(((cljs.core.int_QMARK_(k))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(k):cljs.core.name(k)),path);
if(cljs.core.map_QMARK_(v)){
var G__18747 = v;
var G__18748 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.rest(errors__$1));
var G__18749 = new_path;
var G__18750 = result__$1;
errors__$1 = G__18747;
stack = G__18748;
path = G__18749;
result__$1 = G__18750;
continue;
} else {
var value = [clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.reverse(new_path))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
var G__18751 = cljs.core.rest(errors__$1);
var G__18752 = stack;
var G__18753 = path;
var G__18754 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__$1,value);
errors__$1 = G__18751;
stack = G__18752;
path = G__18753;
result__$1 = G__18754;
continue;
}
}
break;
}
} else {
return null;
}
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.messages = (function c3kit$apron$schema$messages(result){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.apron.schema",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/messages is DEPRECATED.  Use schema/message-seq instead."], null);
}),null)),null,(40),null);

return c3kit.apron.schema.message_seq(result);
});
/**
 * Runs coerce on the entity and returns a map of error message, or nil if none.
 */
c3kit.apron.schema.coerce_message_map = (function c3kit$apron$schema$coerce_message_map(schema,entity){
return c3kit.apron.schema.message_map(c3kit.apron.schema.coerce(schema,entity));
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.coerce_errors = (function c3kit$apron$schema$coerce_errors(schema,entity){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.apron.schema",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/coerce-errors is DEPRECATED.  Use schema/coerce-message-map instead."], null);
}),null)),null,(41),null);

return c3kit.apron.schema.message_map(c3kit.apron.schema.coerce(schema,entity));
});
/**
 * Runs validate on the entity and returns a map of error message, or nil if none.
 */
c3kit.apron.schema.validate_message_map = (function c3kit$apron$schema$validate_message_map(schema,entity){
return c3kit.apron.schema.message_map(c3kit.apron.schema.validate(schema,entity));
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.validate_errors = (function c3kit$apron$schema$validate_errors(schema,entity){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.apron.schema",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/validate-errors is DEPRECATED.  Use schema/validate-message-map instead."], null);
}),null)),null,(42),null);

return c3kit.apron.schema.validate_message_map(schema,entity);
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.validation_errors = (function c3kit$apron$schema$validation_errors(schema,entity){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.apron.schema",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/validation-errors is DEPRECATED.  Use schema/validate-message-map instead."], null);
}),null)),null,(43),null);

return c3kit.apron.schema.validate_message_map(schema,entity);
});
/**
 * Runs conform on the entity and returns a map of error message, or nil if none.
 */
c3kit.apron.schema.conform_message_map = (function c3kit$apron$schema$conform_message_map(schema,entity){
return c3kit.apron.schema.message_map(c3kit.apron.schema.conform(schema,entity));
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.conform_errors = (function c3kit$apron$schema$conform_errors(schema,entity){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.apron.schema",null,null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/conform-errors is DEPRECATED.  Use schema/conform-message-map instead."], null);
}),null)),null,(44),null);

return c3kit.apron.schema.message_map(c3kit.apron.schema.conform(schema,entity));
});
/**
 * Returns a coerced entity or throws an exception if there are errors.
 */
c3kit.apron.schema.coerce_BANG_ = (function c3kit$apron$schema$coerce_BANG_(schema,entity){
var result = c3kit.apron.schema.coerce(schema,entity);
if(c3kit.apron.schema.error_QMARK_(result)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Uncoercable entity",result);
} else {
return result;
}
});
/**
 * Returns a validated entity or throws an exception if there are errors.
 */
c3kit.apron.schema.validate_BANG_ = (function c3kit$apron$schema$validate_BANG_(schema,entity){
var result = c3kit.apron.schema.validate(schema,entity);
if(c3kit.apron.schema.error_QMARK_(result)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid entity",result);
} else {
return result;
}
});
/**
 * Returns a conformed entity or throws an exception if there are errors.
 */
c3kit.apron.schema.conform_BANG_ = (function c3kit$apron$schema$conform_BANG_(schema,entity){
var result = c3kit.apron.schema.conform(schema,entity);
if(c3kit.apron.schema.error_QMARK_(result)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unconformable entity",result);
} else {
return result;
}
});
/**
 * Returns a presented entity or throws an exception if there are errors.
 */
c3kit.apron.schema.present_BANG_ = (function c3kit$apron$schema$present_BANG_(schema,entity){
var result = c3kit.apron.schema.present(schema,entity);
if(c3kit.apron.schema.error_QMARK_(result)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unpresentable entity",result);
} else {
return result;
}
});
c3kit.apron.schema.validate__GT_validations = (function c3kit$apron$schema$validate__GT_validations(p__18755){
var map__18756 = p__18755;
var map__18756__$1 = cljs.core.__destructure_map(map__18756);
var spec = map__18756__$1;
var validate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18756__$1,cljs.core.cst$kw$validate);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18756__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(validate)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.cst$kw$validate),cljs.core.cst$kw$validations,c3kit.apron.corec.conjv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$validate,validate,cljs.core.cst$kw$message,message], null));
} else {
return spec;
}
});
c3kit.apron.schema.merge_specs = (function c3kit$apron$schema$merge_specs(a,b){
var a__$1 = c3kit.apron.schema.validate__GT_validations(a);
var b__$1 = c3kit.apron.schema.validate__GT_validations(b);
var temp__5802__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$validations.cljs$core$IFn$_invoke$arity$2(a__$1,cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$validations.cljs$core$IFn$_invoke$arity$2(b__$1,cljs.core.PersistentVector.EMPTY)));
if(temp__5802__auto__){
var validations = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,b__$1], 0)),cljs.core.cst$kw$validations,cljs.core.vec(validations));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,b__$1], 0));
}
});
c3kit.apron.schema.merge_schemas = (function c3kit$apron$schema$merge_schemas(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18759 = arguments.length;
var i__5727__auto___18760 = (0);
while(true){
if((i__5727__auto___18760 < len__5726__auto___18759)){
args__5732__auto__.push((arguments[i__5727__auto___18760]));

var G__18761 = (i__5727__auto___18760 + (1));
i__5727__auto___18760 = G__18761;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return c3kit.apron.schema.merge_schemas.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(c3kit.apron.schema.merge_schemas.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
var entity_specs = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,c3kit.apron.schema.merge_specs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_,schemas));
var attr_specs = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,c3kit.apron.schema.merge_specs,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18757_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18757_SHARP_,cljs.core.cst$kw$_STAR_);
}),schemas));
if(cljs.core.seq(entity_specs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_specs,cljs.core.cst$kw$_STAR_,entity_specs);
} else {
return attr_specs;
}
}));

(c3kit.apron.schema.merge_schemas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.apron.schema.merge_schemas.cljs$lang$applyTo = (function (seq18758){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18758));
}));

c3kit.apron.schema.validate_type = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$validate,(function (p1__18762_SHARP_){
return cljs.core.contains_QMARK_(c3kit.apron.schema.valid_types,p1__18762_SHARP_);
}),cljs.core.cst$kw$message,"must be one of schema/valid-types"], null);
c3kit.apron.schema.process_spec_schema = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$one_DASH_of,cljs.core.cst$kw$specs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$fn], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$seq,cljs.core.cst$kw$spec,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$fn], null)], null)], null),cljs.core.cst$kw$message,"must be an ifn or seq of ifn"], null);
c3kit.apron.schema.validation_schema = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$validate,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$one_DASH_of,cljs.core.cst$kw$specs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$fn,cljs.core.cst$kw$validations,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c3kit.apron.schema.required], null),cljs.core.cst$kw$message,"must be an ifn"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$seq,cljs.core.cst$kw$spec,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$fn], null),cljs.core.cst$kw$validate,cljs.core.seq,cljs.core.cst$kw$message,"must not be empty"], null)], null),cljs.core.cst$kw$message,"must be an ifn or seq of ifn"], null),cljs.core.cst$kw$message,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$string], null)], null);
c3kit.apron.schema._spec_schema = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$keyword,cljs.core.cst$kw$validations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c3kit.apron.schema.required,c3kit.apron.schema.validate_type], null)], null),cljs.core.cst$kw$validate,c3kit.apron.schema.process_spec_schema,cljs.core.cst$kw$coerce,c3kit.apron.schema.process_spec_schema,cljs.core.cst$kw$present,c3kit.apron.schema.process_spec_schema,cljs.core.cst$kw$message,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$string], null),cljs.core.cst$kw$validations,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$seq,cljs.core.cst$kw$spec,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$map,cljs.core.cst$kw$schema,c3kit.apron.schema.validation_schema,cljs.core.cst$kw$message,"must be schema/validation-schema"], null)], null)], null);
c3kit.apron.schema.spec_schema = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(c3kit.apron.schema._spec_schema,cljs.core.cst$kw$spec,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$map,cljs.core.cst$kw$schema,c3kit.apron.schema._spec_schema,cljs.core.cst$kw$message,"must be schema/spec-schema"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$specs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$seq,cljs.core.cst$kw$spec,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$map,cljs.core.cst$kw$schema,c3kit.apron.schema._spec_schema], null)], null),cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$map,cljs.core.cst$kw$message,"must be a map"], null),cljs.core.cst$kw$_STAR_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$spec,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$validate,(function (p1__18763_SHARP_){
if(cljs.core.truth_(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(p1__18763_SHARP_))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$seq,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(p1__18763_SHARP_));
} else {
return true;
}
}),cljs.core.cst$kw$message,"only used with type :seq"], null),cljs.core.cst$kw$specs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$validate,(function (p1__18764_SHARP_){
if(cljs.core.truth_(cljs.core.cst$kw$specs.cljs$core$IFn$_invoke$arity$1(p1__18764_SHARP_))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$one_DASH_of,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(p1__18764_SHARP_));
} else {
return true;
}
}),cljs.core.cst$kw$message,"only used with type :one-of"], null),cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$validate,(function (p1__18765_SHARP_){
if(cljs.core.truth_(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(p1__18765_SHARP_))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$map,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(p1__18765_SHARP_));
} else {
return true;
}
}),cljs.core.cst$kw$message,"only used with type :map"], null)], null)], 0));
c3kit.apron.schema.entity_spec_schema = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c3kit.apron.schema.spec_schema,cljs.core.cst$kw$type,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$keyword,cljs.core.cst$kw$validate,c3kit.apron.schema.nil_QMARK__or((function (p1__18766_SHARP_){
return cljs.core.contains_QMARK_(c3kit.apron.schema.valid_types,p1__18766_SHARP_);
})),cljs.core.cst$kw$message,"must be one of schema/valid-types"], null));
c3kit.apron.schema.conform_preserving_extras_BANG_ = (function c3kit$apron$schema$conform_preserving_extras_BANG_(schema,spec){
var extra = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,spec,cljs.core.keys(schema));
var conformed = c3kit.apron.schema.conform_BANG_(schema,spec);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conformed,extra], 0));
});
/**
 * Normalizes, coerces, and validates all the specs in the schema.  Any problems in the schema will throw an exception.
 *   Any extra fields in the spec (:value, :db, ...) will be preserved.
 */
c3kit.apron.schema.conform_schema_BANG_ = (function c3kit$apron$schema$conform_schema_BANG_(schema){
var schema__$1 = c3kit.apron.schema.normalize_schema(schema);
var field_schema = cljs.core.update_vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema__$1,cljs.core.cst$kw$_STAR_),(function (p1__18767_SHARP_){
return c3kit.apron.schema.conform_preserving_extras_BANG_(c3kit.apron.schema.spec_schema,p1__18767_SHARP_);
}));
var entity_schema = (function (){var temp__5804__auto__ = cljs.core.cst$kw$_STAR_.cljs$core$IFn$_invoke$arity$1(schema__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
return cljs.core.update_vals(s,(function (p1__18768_SHARP_){
return c3kit.apron.schema.conform_preserving_extras_BANG_(c3kit.apron.schema.entity_spec_schema,p1__18768_SHARP_);
}));
} else {
return null;
}
})();
if(cljs.core.truth_(entity_schema)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(field_schema,cljs.core.cst$kw$_STAR_,entity_schema);
} else {
return field_schema;
}
});
