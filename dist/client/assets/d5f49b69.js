var w=Object.defineProperty;var S=(e,r,t)=>r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var u=(e,r,t)=>(S(e,typeof r!="symbol"?r+"":r,t),t),d=(e,r,t)=>{if(!r.has(e))throw TypeError("Cannot "+t)};var a=(e,r,t)=>(d(e,r,"read from private field"),t?t.call(e):r.get(e)),h=(e,r,t)=>{if(r.has(e))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(e):r.set(e,t)},f=(e,r,t,s)=>(d(e,r,"write to private field"),s?s.call(e,t):r.set(e,t),t);import{c as l}from"./index.3df4e929.js";import"./e5634198.js";function _(e){const r=Array.isArray(e)?e:[e];let t="";for(const s of r)s!=null&&(typeof s=="object"?!!s.body&&typeof s.body=="string"?(t+=s.body,!!s.headers&&s.headers[l]&&(t+=s.headers[l])):t+=JSON.stringify(s):t+=s);return t}const y={};function b(e,r,t=!1){const s=_(e);if(y[s]){const n=y[s];if(t)return;if(n.error)throw n.error;if(n.response)return n.response;if(!t)throw n.promise}const i={promise:r().then(n=>i.response=n).catch(n=>i.error=n)};if(y[s]=i,!t)throw i.promise}const g=(e,r)=>b(e,r);function R(e){return String(e).includes("__proto__")?JSON.parse(e,m):JSON.parse(e)}function m(e,r){if(e!=="__proto__")return r}var o,c;class p extends Response{constructor(t){super(t[0],t[1]);u(this,"bodyUsed",!0);h(this,o,void 0);h(this,c,void 0);u(this,"url");f(this,o,t[0]),this.url=t[2]}text(){return a(this,o)}json(){var t;try{return(t=a(this,c))!=null?t:f(this,c,R(a(this,o)))}catch(s){throw this.ok?s:new Error(`Request to ${this.url} failed with ${this.status} and the response body is not parseable.
Make sure to handle the error state when using fetchSync.`)}}get response(){return this}static async toSerializable(t){return[await t.text(),{status:t.status,statusText:t.statusText,headers:Array.from(t.headers.entries())},t.url]}}o=new WeakMap,c=new WeakMap;function E(e,r){const t=g([e,r],async()=>{const s=await globalThis.fetch(new URL(e,window.location.origin),r);return p.toSerializable(s)});return new p(t)}export{E as f};
//# sourceMappingURL=d5f49b69.js.map
