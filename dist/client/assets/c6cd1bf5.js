import{R as a}from"./index.3df4e929.js";import{C as m}from"./c84c5730.js";import{u as l}from"./4e9f3bc7.js";import{u as y}from"./338b02b6.js";function g(){const t=a.useContext(m);if(!t)throw new Error("Expected a Cart Context, but no Cart Context was found");return t}const b="https://cdn.shopify.com/shopifycloud/shop-js/v1.0/client.js";function I({variantIds:t,className:h,variantIdsAndQuantities:n,width:i}){const{storeDomain:d}=l(),f=y(b);let r;if(t&&n)throw new Error(x);if(t)r=t.reduce((e,o)=>{const s=u(o);return s&&e.push(s),e},[]);else if(n)r=n.reduce((e,o)=>{var p;const s=u(o==null?void 0:o.id);return s&&e.push(`${s}:${(p=o==null?void 0:o.quantity)!=null?p:1}`),e},[]);else throw new Error(C);const c=i?{"--shop-pay-button-width":i}:void 0;return a.createElement("div",{className:h,tabIndex:0,style:c},f==="done"&&a.createElement("shop-pay-button",{"store-url":`https://${d}`,variants:r.join(",")}))}function u(t){if(!!t)return t.split("/").pop()}const C='You must pass in either "variantIds" or "variantIdsAndQuantities" to ShopPayButton',x="You must provide either a variantIds or variantIdsAndQuantities prop, but not both in the ShopPayButton component";export{I as S,g as u};
//# sourceMappingURL=c6cd1bf5.js.map
