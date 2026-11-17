"use strict";var l=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var d=l(function(m,q){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),u=require('@stdlib/ndarray-base-stride/dist'),v=require('@stdlib/ndarray-base-offset/dist'),n=require('@stdlib/ndarray-base-data-buffer/dist'),s=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),c=require('@stdlib/blas-base-gsyr/dist').ndarray;function g(a){var r,i,t,e;return t=a[0],e=a[1],i=s(a[2]),r=s(a[3]),c(i,o(e,0),r,n(t),u(t,0),v(t),n(e),u(e,0),u(e,1),v(e)),e}q.exports=g
});var p=d();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
