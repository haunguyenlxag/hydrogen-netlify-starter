import{r as i,j}from"./index.3df4e929.js";import{P as k}from"./651ab248.js";import{f as m}from"./92add5bc.js";function x(n,l){var e,s;if(!(!n.length||((s=(e=n==null?void 0:n[0])==null?void 0:e.selectedOptions)==null?void 0:s.length)!==Object.keys(l).length))return n==null?void 0:n.find(c=>Object.entries(l).every(([r,P])=>{var f;return(f=c==null?void 0:c.selectedOptions)==null?void 0:f.some(u=>(u==null?void 0:u.name)===r&&(u==null?void 0:u.value)===P)}))}function E(n){const l=n.reduce((e,s)=>{var c;if(!s.selectedOptions)throw new Error("'getOptions' requires 'variant.selectedOptions'");return(c=s==null?void 0:s.selectedOptions)==null||c.forEach(r=>{var P,f,u,g;e[(P=r==null?void 0:r.name)!=null?P:""]=e[(f=r==null?void 0:r.name)!=null?f:""]||new Set,e[(u=r==null?void 0:r.name)!=null?u:""].add((g=r==null?void 0:r.value)!=null?g:"")}),e},{});return Object.keys(l).map(e=>({name:e,values:Array.from(l[e])}))}function D({children:n,data:l,initialVariantId:e}){const s=i.exports.useMemo(()=>{var t;return m((t=l.variants)!=null?t:{})},[l.variants]);if(!M(s))throw new Error("<ProductOptionsProvider/> requires 'product.variants.nodes' or 'product.variants.edges'");const c=i.exports.useMemo(()=>E(s),[s]),[r,P]=i.exports.useState(()=>S(e,s)),[f,u]=i.exports.useState(()=>b(r));i.exports.useEffect(()=>{const t=S(e,s);P(t),u(b(t))},[e,s]);const g=i.exports.useCallback((t,d)=>{u(o=>{const a={...o,[t]:d};return P(x(s,a)),a})},[u,s]),w=i.exports.useCallback((t,d)=>{var a;const o=x(s,{...f,[t]:d});return(a=o==null?void 0:o.availableForSale)!=null?a:!0},[f,s]),A=i.exports.useMemo(()=>{var t;return m((t=l.sellingPlanGroups)!=null?t:{}).map(d=>{var o;return{...d,sellingPlans:m((o=d==null?void 0:d.sellingPlans)!=null?o:{})}})},[l.sellingPlanGroups]),[O,y]=i.exports.useState(void 0),h=i.exports.useMemo(()=>{var t,d;if(!(!r||!O)){if(!((t=r.sellingPlanAllocations)!=null&&t.nodes)&&!((d=r.sellingPlanAllocations)!=null&&d.edges))throw new Error("<ProductOptionsProvider/>: You must include 'sellingPlanAllocations.nodes' or 'sellingPlanAllocations.edges' in your variants in order to calculate selectedSellingPlanAllocation");return m(r.sellingPlanAllocations).find(o=>{var a;return((a=o==null?void 0:o.sellingPlan)==null?void 0:a.id)===O.id})}},[r,O]),C=i.exports.useMemo(()=>({variants:s,variantsConnection:l.variants,options:c,selectedVariant:r,setSelectedVariant:P,selectedOptions:f,setSelectedOption:g,setSelectedOptions:u,isOptionInStock:w,selectedSellingPlan:O,setSelectedSellingPlan:y,selectedSellingPlanAllocation:h,sellingPlanGroups:A,sellingPlanGroupsConnection:l.sellingPlanGroups}),[w,c,l.sellingPlanGroups,l.variants,f,O,h,r,A,g,s]);return j(k.Provider,{value:C,children:n})}function S(n,l){if(n){const e=l.find(s=>(s==null?void 0:s.id)===n);return e||console.warn("<ProductOptionsProvider/> received a 'initialVariantId' prop, but could not actually find a variant with that ID"),e}if(n===null)return null;if(n===void 0)return l.find(e=>e==null?void 0:e.availableForSale)||l[0]}function b(n){return n!=null&&n.selectedOptions?n.selectedOptions.reduce((l,e)=>{var s,c;return l[(s=e==null?void 0:e.name)!=null?s:""]=(c=e==null?void 0:e.value)!=null?c:"",l},{}):{}}function M(n){return!(!n||!Array.isArray(n))}export{D as ProductOptionsProvider};
//# sourceMappingURL=27ae738d.js.map
