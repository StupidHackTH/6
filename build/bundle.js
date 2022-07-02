var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c;function i(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}const l="undefined"!=typeof window;let u=l?()=>window.performance.now():()=>Date.now(),f=l?t=>requestAnimationFrame(t):t;const m=new Set;function h(t){m.forEach((e=>{e.c(t)||(m.delete(e),e.f())})),0!==m.size&&f(h)}function p(t,e){t.appendChild(e)}function d(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function g(t){const e=y("style");return function(t,e){p(t.head||t,e)}(d(t),e),e.sheet}function b(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function $(){return k(" ")}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const S=new Map;let T,_=0;function H(t,e,n,r,o,s,a,c=0){const i=16.666/r;let l="{\n";for(let t=0;t<=1;t+=i){const r=e+(n-e)*s(t);l+=100*t+`%{${a(r,1-r)}}\n`}const u=l+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,m=d(t),{stylesheet:h,rules:p}=S.get(m)||function(t,e){const n={stylesheet:g(e),rules:{}};return S.set(t,n),n}(m,t);p[f]||(p[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const b=t.style.animation||"";return t.style.animation=`${b?`${b}, `:""}${f} ${r}ms linear ${o}ms 1 both`,_+=1,f}function C(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),_-=o,_||f((()=>{_||(S.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),S.clear())})))}function A(t){T=t}const L=[],E=[],j=[],M=[],B=Promise.resolve();let D=!1;function V(t){j.push(t)}const q=new Set;let N,z=0;function F(){const t=T;do{for(;z<L.length;){const t=L[z];z++,A(t),P(t.$$)}for(A(null),L.length=0,z=0;E.length;)E.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];q.has(e)||(q.add(e),e())}j.length=0}while(L.length);for(;M.length;)M.pop()();D=!1,q.clear(),A(t)}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}function R(t,e,n){t.dispatchEvent(function(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,r,e),o}(`${e?"intro":"outro"}${n}`))}const U=new Set;let I;function K(t,e){t&&t.i&&(U.delete(t),t.i(e))}function W(t,e,n,r){if(t&&t.o){if(U.has(t))return;U.add(t),I.c.push((()=>{U.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const O={duration:0};function Y(n,r,a,c){let i=r(n,a),l=c?0:1,p=null,d=null,g=null;function b(){g&&C(n,g)}function w(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(r){const{delay:s=0,duration:a=300,easing:c=e,tick:y=t,css:k}=i||O,$={start:u()+s,b:r};r||($.group=I,I.r+=1),p||d?d=$:(k&&(b(),g=H(n,l,r,a,s,c,k)),r&&y(0,1),p=w($,a),V((()=>R(n,r,"start"))),function(t){let e;0===m.size&&f(h),new Promise((n=>{m.add(e={c:t,f:n})}))}((t=>{if(d&&t>d.start&&(p=w(d,a),d=null,R(n,p.b,"start"),k&&(b(),g=H(n,l,p.b,p.duration,0,c,i.css))),p)if(t>=p.end)y(l=p.b,1-l),R(n,p.b,"end"),d||(p.b?b():--p.group.r||o(p.group.c)),p=null;else if(t>=p.start){const e=t-p.start;l=p.a+p.d*c(e/p.duration),y(l,1-l)}return!(!p&&!d)})))}return{run(t){s(i)?(N||(N=Promise.resolve(),N.then((()=>{N=null}))),N).then((()=>{i=i(),y(t)})):y(t)},end(){b(),p=d=null}}}function G(t){t&&t.c()}function J(t,e,r,a){const{fragment:c,on_mount:i,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,r),a||V((()=>{const e=i.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(V)}function X(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(L.push(t),D||(D=!0,B.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,n,s,a,c,i,l,u=[-1]){const f=T;A(e);const m=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(m.root);let h=!1;if(m.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return m.ctx&&c(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),h&&Z(e,t)),n})):[],m.update(),h=!0,o(m.before_update),m.fragment=!!a&&a(m.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);m.fragment&&m.fragment.l(t),t.forEach(w)}else m.fragment&&m.fragment.c();n.intro&&K(e.$$.fragment),J(e,n.target,n.anchor,n.customElement),F()}A(f)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function et(t,e,n){const r=t.slice();return r[1]=e[n],r}function nt(t){let e,n,r=t[1].name+"";return{c(){e=y("p"),n=k(r)},m(t,r){b(t,e,r),p(e,n)},p(t,e){1&e&&r!==(r=t[1].name+"")&&v(n,r)},d(t){t&&w(e)}}}function rt(t){let e,n,r;return{c(){e=y("img"),i(e.src,n=t[1].imgSrc)||x(e,"src",n),x(e,"alt",r=t[1].name+" ticket")},m(t,n){b(t,e,n)},p(t,o){1&o&&!i(e.src,n=t[1].imgSrc)&&x(e,"src",n),1&o&&r!==(r=t[1].name+" ticket")&&x(e,"alt",r)},d(t){t&&w(e)}}}function ot(t){let e,n,r,o;function s(t,e){return t[1].imgSrc?rt:nt}let a=s(t),c=a(t);return{c(){e=y("a"),n=y("div"),c.c(),r=$(),x(e,"class","flex aspect-square items-center justify-center bg-white text-center text-black hover:brightness-95 border border-black"),x(e,"href",o=t[1].href||"/")},m(t,o){b(t,e,o),p(e,n),c.m(n,null),p(e,r)},p(t,r){a===(a=s(t))&&c?c.p(t,r):(c.d(1),c=a(t),c&&(c.c(),c.m(n,null))),1&r&&o!==(o=t[1].href||"/")&&x(e,"href",o)},d(t){t&&w(e),c.d()}}}function st(e){let n,r=e[0],o=[];for(let t=0;t<r.length;t+=1)o[t]=ot(et(e,r,t));return{c(){n=y("div");for(let t=0;t<o.length;t+=1)o[t].c();x(n,"class","grid w-full grid-cols-2 border border-black bg-white")},m(t,e){b(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){if(1&e){let s;for(r=t[0],s=0;s<r.length;s+=1){const a=et(t,r,s);o[s]?o[s].p(a,e):(o[s]=ot(a),o[s].c(),o[s].m(n,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=r.length}},i:t,o:t,d(t){t&&w(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t)}}}function at(t,e,n){let{data:r}=e;return t.$$set=t=>{"data"in t&&n(0,r=t.data)},[r]}class ct extends tt{constructor(t){super(),Q(this,t,at,st,a,{data:0})}}function it(e){let n;return{c(){n=y("nav"),n.innerHTML='<h4><a href="#about" class="svelte-vbs9u5">About</a></h4> \n  <h4><a href="#sponsors" class="svelte-vbs9u5">Supports</a></h4> \n  <h4><a href="#tickets" class="svelte-vbs9u5">Tickets</a></h4>',x(n,"class","flex flex-row justify-center p-2 w-full gap-3 sm:p-6 sm:gap-4 sm:mb-2")},m(t,e){b(t,n,e)},p:t,i:t,o:t,d(t){t&&w(n)}}}class lt extends tt{constructor(t){super(),Q(this,t,null,it,a,{})}}function ut(t,{delay:n=0,duration:r=400,easing:o=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:o,css:t=>"opacity: "+t*s}}const ft=[{name:"The University of the Thai Chamber of Commerce",href:"https://utcc.ac.th",imgSrc:"images/sponsors/utcc.webp"},{name:"brikl",href:"https://brikl.com",imgSrc:"images/sponsors/brikl.webp"},{name:"Hodl My Beer",href:"https://www.facebook.com/hodlbeer/",imgSrc:"images/sponsors/hodl.webp"},{name:"Laika",href:"https://getlaika.app/",imgSrc:"images/sponsors/laika.webp"},{name:"#อาจารย์มิกเป็นคนซีเรียส",href:"/",imgSrc:"images/sponsors/ajmick.webp"},{name:"Wonderful.software",href:"https://wonderful.software",imgSrc:"images/sponsors/wonderfulsoftware.webp"},{name:"Sunday Ins.",href:"https://easysunday.com",imgSrc:"images/sponsors/sunday.webp"},{name:"Microsoft",href:"http://microsoft.com",imgSrc:"images/sponsors/microsoft.webp"},{name:"Fastwork",href:"https://fastwork.co",imgSrc:"images/sponsors/fastwork.webp"},{name:"Rayriffy",href:"http://rayriffy.com",imgSrc:"images/sponsors/rayriffy.webp"}],mt=[{name:"Batch[0] = Early Bird",href:"https://www.facebook.com/StupidHackTH/posts/pfbid02VLgLbiSm9VeBYfDG4ueYNK9pVDazLyDB1jDsUqpjUKAVN3dwkuLpJdkw9uqzugZkl",imgSrc:"images/tickets/b0_earlybird.webp"},{name:"Batch[1] = Stupid Pitch Challenge",href:"https://www.facebook.com/StupidHackTH/posts/pfbid033hnWHpJkqjjvQyynzUdfuU8Sq9hWfpY2VY8MdDxoWoJSpqjJJHVrxhcVFuXDLY2Gl",imgSrc:"images/tickets/b1_stupidpitch.webp"},{name:"Batch[2] = Beyond the Canvas, a CTF Challenge by SaltyAom",href:"https://www.facebook.com/StupidHackTH/posts/pfbid0ABMxzwZKtSGdpvrsXV9d1Wy3aXz64wCCSobu7LbspRYBLSFgMxhjansPj8rn2v1Vl",imgSrc:"images/tickets/b2_ctf.webp"},{name:"Batch[3] = Treasure Hunter by showdown.space",href:"https://www.facebook.com/StupidHackTH/posts/pfbid088KpvD6VAFn8P29PTdUSRLHyY9NSCZB8iCm87b9Ab6FfxSGj8L9ZQzF93SzpXxuEl",imgSrc:"images/tickets/b3_treasure_hunter.webp"},{name:"Batch[4] = Stupid Adventure, a text game by Rayriffy",href:"https://www.facebook.com/StupidHackTH/posts/pfbid0oTWLNmdznStoqPiV5FuAabe3GWEmveMLcUnMnin6s6qZVBvgq4s7xBXt1iaberGMl",imgSrc:"images/tickets/b4_stupid_adventure.webp"},{name:"Batch[5] = I'm not a robot by Keron",href:"https://facebook.com/stupidhackth",imgSrc:"images/tickets/b5_captcha.webp"}],ht=[{name:"UTCC Makerspace",href:"https://eng.utcc.ac.th",imgSrc:"images/partners/makerspace.webp"},{name:"showdown.space",href:"https://showdown.space",imgSrc:"images/partners/showdownspace.webp"},{name:"Keron Technology",href:"https://www.instagram.com/keron.tech",imgSrc:"images/partners/keron.webp"},{name:"ITexperience",href:"https://web.facebook.com/ITxKMITL",imgSrc:"images/partners/itx.webp"}];function pt(e){let n,r,o,s;return r=new ct({props:{data:mt}}),{c(){n=y("section"),G(r.$$.fragment),x(n,"id","tickets")},m(t,e){b(t,n,e),J(r,n,null),s=!0},p:t,i(t){s||(K(r.$$.fragment,t),V((()=>{o||(o=Y(n,ut,{},!0)),o.run(1)})),s=!0)},o(t){W(r.$$.fragment,t),o||(o=Y(n,ut,{},!1)),o.run(0),s=!1},d(t){t&&w(n),X(r),t&&o&&o.end()}}}function dt(t){let e,n,r,s,a,c,i,l,u,f,m,h,d,g,S,T,_,H,C,A,L,E,j,M,B,D,V,q,N,z=t[0].ticket?"[-] Tickets [Archived]":"[+] Tickets [Archived]";n=new lt({}),S=new ct({props:{data:ft,id:"sponsors"}}),A=new ct({props:{data:ht,id:"partners"}});let F=t[0].ticket&&pt();return{c(){e=y("main"),G(n.$$.fragment),r=$(),s=y("header"),s.innerHTML='<img src="images/banner.webp" alt="THE ៦th STUPID HACKATHON THAILAND" class="max-w-[90vw] border-2 border-black sm:max-w-[28rem] md:max-w-[90vw] md:max-h-[60vh]"/>',a=$(),c=y("section"),c.innerHTML='<h2 class="pb-4 md:pb-8"><span class="font-bold">Date:</span> 2-3 July 2022</h2> \n\t\t<h2 class=""><span class="font-bold">Venue:</span> The University of the Thai Chamber of Commerce</h2>',i=$(),l=y("h2"),l.textContent="About us",u=$(),f=y("section"),f.innerHTML='<h4 class="p-4 md:p-8">The Stupid Hackathon in Thailand is a collaborative hackathon in Thailand with non-competitive intentions and no focuses on business value.</h4> \n\t\t<h4 class="p-4 md:p-8">Our main goal for this hackathon is to get makers to just *have fun* and learn together, through working on any project they can dream of, fostering a community of enthusiastic creators.</h4> \n\t\t<h4 class="p-4 md:p-8">In the spirit of the stupid hackathons worldwide, this event is *non-commercial* and free to attend...</h4>',m=$(),h=y("h2"),h.textContent="Sponsors",d=$(),g=y("section"),G(S.$$.fragment),T=$(),_=y("h2"),_.textContent="Partners",H=$(),C=y("section"),G(A.$$.fragment),L=$(),E=y("h2"),j=k(z),M=$(),F&&F.c(),B=$(),D=y("footer"),D.innerHTML='<h4><a href="https://www.eventpop.me/e/13089" class="no-underline">Eventpop</a></h4> \n\t\t\t<h4><a href="https://facebook.com/stupidhackth" class="no-underline">Facebook</a></h4> \n\t\t\t<h4><a href="https://stupidhackth.github.io/" class="no-underline">Website</a></h4>',x(s,"class","flex flex-col items-center justify-center my-2 sm:my-8 hover:scale-[1.01] hover:rotate-1 transition-all"),x(c,"class","border-2 border-black p-4 my-4 md:p-8 md:my-8"),x(l,"class","my-4 text-2xl md:my-8 text-center"),x(l,"id","about"),x(f,"class","border-2 border-black"),x(f,"id","about"),x(h,"class","my-4 text-2xl md:my-8 text-center"),x(h,"id","sponsors"),x(g,"id","sponsors"),x(_,"class","my-4 text-2xl md:my-8 text-center"),x(_,"id","sponsors"),x(C,"id","sponsors"),x(E,"class","my-4 text-2xl md:my-8 text-center text-sky-600 hover:font-bold"),x(E,"id","tickets"),x(D,"class","py-6 gap-3 flex flex-row sm:gap-4"),x(D,"id","links"),x(e,"class","flex flex-col items-center justify-center")},m(o,w){var y,k,$,x;b(o,e,w),J(n,e,null),p(e,r),p(e,s),p(e,a),p(e,c),p(e,i),p(e,l),p(e,u),p(e,f),p(e,m),p(e,h),p(e,d),p(e,g),J(S,g,null),p(e,T),p(e,_),p(e,H),p(e,C),J(A,C,null),p(e,L),p(e,E),p(E,j),p(e,M),F&&F.m(e,null),p(e,B),p(e,D),V=!0,q||(y=E,k="click",$=t[1],y.addEventListener(k,$,x),N=()=>y.removeEventListener(k,$,x),q=!0)},p(t,[n]){(!V||1&n)&&z!==(z=t[0].ticket?"[-] Tickets [Archived]":"[+] Tickets [Archived]")&&v(j,z),t[0].ticket?F?(F.p(t,n),1&n&&K(F,1)):(F=pt(),F.c(),K(F,1),F.m(e,B)):F&&(I={r:0,c:[],p:I},W(F,1,1,(()=>{F=null})),I.r||o(I.c),I=I.p)},i(t){V||(K(n.$$.fragment,t),K(S.$$.fragment,t),K(A.$$.fragment,t),K(F),V=!0)},o(t){W(n.$$.fragment,t),W(S.$$.fragment,t),W(A.$$.fragment,t),W(F),V=!1},d(t){t&&w(e),X(n),X(S),X(A),F&&F.d(),q=!1,N()}}}function gt(t,e,n){let r={ticket:!1};return[r,()=>{n(0,r.ticket=!r.ticket,r)}]}return new class extends tt{constructor(t){super(),Q(this,t,gt,dt,a,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
