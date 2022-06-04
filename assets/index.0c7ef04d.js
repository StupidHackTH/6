const q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}};q();const y={};let G=F;const E={},m=1,N=2,D={owned:null,cleanups:null,context:null,owner:null};var u=null;let v=null,w=null,r=null,p=null,$=0;function V(e,t){const n=u,i=e.length===0?D:{owned:null,cleanups:null,context:null,owner:t||n};u=i;try{return O(()=>e(()=>B(i)),!0)}finally{u=n}}function _(e,t,n){const i=W(e,t,!1,m);H(i)}function k(e){if(w)return e();let t;const n=w=[];try{t=e()}finally{w=null}return O(()=>{for(let i=0;i<n.length;i+=1){const s=n[i];if(s.pending!==E){const l=s.pending;s.pending=E,U(s,l)}}},!1),t}function I(e){let t;return t=e(),t}function U(e,t,n){if(w)return e.pending===E&&w.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let i=!1;return e.value=t,e.observers&&e.observers.length&&O(()=>{for(let s=0;s<e.observers.length;s+=1){const l=e.observers[s];i&&v.disposed.has(l),(i&&!l.tState||!i&&!l.state)&&(l.pure?r.push(l):p.push(l),l.observers&&K(l)),i||(l.state=m)}if(r.length>1e6)throw r=[],new Error},!1),t}function H(e){if(!e.fn)return;B(e);const t=u,n=$;u=e,Q(e,e.value,n),u=t}function Q(e,t,n){let i;try{i=e.fn(t)}catch(s){M(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?U(e,i):e.value=i,e.updatedAt=n)}function W(e,t,n,i=m,s){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:u,context:null,pure:n};return u===null||u!==D&&(u.owned?u.owned.push(l):u.owned=[l]),l}function j(e){const t=v;if(e.state===0||t)return;if(e.state===N||t)return S(e);if(e.suspense&&I(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<$);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===m||t)H(e);else if(e.state===N||t){const s=r;r=null,S(e,n[0]),r=s}}function O(e,t){if(r)return e();let n=!1;t||(r=[]),p?n=!0:p=[],$++;try{const i=e();return Y(n),i}catch(i){M(i)}finally{r=null,n||(p=null)}}function Y(e){r&&(F(r),r=null),!e&&(p.length?k(()=>{G(p),p=null}):p=null)}function F(e){for(let t=0;t<e.length;t++)j(e[t])}function S(e,t){const n=v;e.state=0;for(let i=0;i<e.sources.length;i+=1){const s=e.sources[i];s.sources&&(s.state===m||n?s!==t&&j(s):(s.state===N||n)&&S(s,t))}}function K(e){const t=v;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=N,i.pure?r.push(i):p.push(i),i.observers&&K(i))}}function B(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const l=s.pop(),o=n.observerSlots.pop();i<s.length&&(l.sourceSlots[o]=i,s[i]=l,n.observerSlots[i]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)B(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function M(e){throw e}function J(e,t){return I(()=>e(t||{}))}function X(e,t,n){let i=n.length,s=t.length,l=i,o=0,f=0,c=t[s-1].nextSibling,h=null;for(;o<s||f<l;){if(t[o]===n[f]){o++,f++;continue}for(;t[s-1]===n[l-1];)s--,l--;if(s===o){const d=l<i?f?n[f-1].nextSibling:n[l-f]:c;for(;f<l;)e.insertBefore(n[f++],d)}else if(l===f)for(;o<s;)(!h||!h.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[f]===t[s-1]){const d=t[--s].nextSibling;e.insertBefore(n[f++],t[o++].nextSibling),e.insertBefore(n[--l],d),t[s]=n[l]}else{if(!h){h=new Map;let a=f;for(;a<l;)h.set(n[a],a++)}const d=h.get(t[o]);if(d!=null)if(f<d&&d<l){let a=o,C=1,L;for(;++a<s&&a<l&&!((L=h.get(t[a]))==null||L!==d+C);)C++;if(C>d-f){const R=t[o];for(;f<d;)e.insertBefore(n[f++],R)}else e.replaceChild(n[f++],t[o++])}else o++;else t[o++].remove()}}}function Z(e,t,n){let i;return V(s=>{i=s,t===document?e():te(t,e(),t.firstChild?null:void 0,n)}),()=>{i(),t.textContent=""}}function z(e,t,n){const i=document.createElement("template");i.innerHTML=e;let s=i.content.firstChild;return n&&(s=s.firstChild),s}function ee(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function A(e,t){t==null?e.removeAttribute("class"):e.className=t}function te(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return b(e,t,i,n);_(s=>b(e,t(),s,n),i)}function b(e,t,n,i,s){for(y.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=i!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(y.context)return n;if(l==="number"&&(t=t.toString()),o){let f=n[0];f&&f.nodeType===3?f.data=t:f=document.createTextNode(t),n=g(e,n,i,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(y.context)return n;n=g(e,n,i)}else{if(l==="function")return _(()=>{let f=t();for(;typeof f=="function";)f=f();n=b(e,f,n,i)}),()=>n;if(Array.isArray(t)){const f=[];if(T(f,t,s))return _(()=>n=b(e,f,n,i,!0)),()=>n;if(y.context){for(let c=0;c<f.length;c++)if(f[c].parentNode)return n=f}if(f.length===0){if(n=g(e,n,i),o)return n}else Array.isArray(n)?n.length===0?P(e,f,i):X(e,n,f):(n&&g(e),P(e,f));n=f}else if(t instanceof Node){if(y.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=g(e,n,i,t);g(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function T(e,t,n){let i=!1;for(let s=0,l=t.length;s<l;s++){let o=t[s],f;if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=T(e,o)||i;else if((f=typeof o)=="string")e.push(document.createTextNode(o));else if(f==="function")if(n){for(;typeof o=="function";)o=o();i=T(e,Array.isArray(o)?o:[o])||i}else e.push(o),i=!0;else e.push(document.createTextNode(o.toString()))}return i}function P(e,t,n){for(let i=0,s=t.length;i<s;i++)e.insertBefore(t[i],n)}function g(e,t,n,i){if(n===void 0)return e.textContent="";const s=i||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const f=t[o];if(s!==f){const c=f.parentNode===e;!l&&!o?c?e.replaceChild(s,f):e.insertBefore(s,n):c&&f.remove()}else l=!0}}else e.insertBefore(s,n);return[s]}var ne="/6/assets/img.31113541.webp";const ie="_App_256jd_1",se="_header_256jd_6",le="_title_256jd_17",oe="_links_256jd_26";var x={App:ie,header:se,title:le,links:oe};const fe=z('<div><header><img alt=""><h1>STAY TUNED</h1><div><a href="https://facebook.com/stupidhackth">FACEBOOK</a><a href="https://eventpop.me">EVENTPOP</a></div></header><footer><h4>THE STUPID HACKATHON THAILAND</h4></footer></div>');function re(){return(()=>{const e=fe.cloneNode(!0),t=e.firstChild,n=t.firstChild,i=n.nextSibling,s=i.nextSibling;return ee(n,"src",ne),_(l=>{const o=x.App,f=x.header,c=x.title,h=x.links;return o!==l._v$&&A(e,l._v$=o),f!==l._v$2&&A(t,l._v$2=f),c!==l._v$3&&A(i,l._v$3=c),h!==l._v$4&&A(s,l._v$4=h),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),e})()}Z(()=>J(re,{}),document.getElementById("root"));