var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function a(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i;function c(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}const l="undefined"!=typeof window;let h=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const p=new Set;function m(t){p.forEach((e=>{e.c(t)||(p.delete(e),e.f())})),0!==p.size&&u(m)}function d(t,e){t.appendChild(e)}function b(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function g(t){const e=k("style");return function(t,e){d(t.head||t,e)}(b(t),e),e.sheet}function f(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function x(){return v(" ")}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const $=new Map;let T,A=0;function M(t,e,n,a,o,s,r,i=0){const c=16.666/a;let l="{\n";for(let t=0;t<=1;t+=c){const a=e+(n-e)*s(t);l+=100*t+`%{${r(a,1-a)}}\n`}const h=l+`100% {${r(n,1-n)}}\n}`,u=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(h)}_${i}`,p=b(t),{stylesheet:m,rules:d}=$.get(p)||function(t,e){const n={stylesheet:g(e),rules:{}};return $.set(t,n),n}(p,t);d[u]||(d[u]=!0,m.insertRule(`@keyframes ${u} ${h}`,m.cssRules.length));const f=t.style.animation||"";return t.style.animation=`${f?`${f}, `:""}${u} ${a}ms linear ${o}ms 1 both`,A+=1,u}function P(t,e){const n=(t.style.animation||"").split(", "),a=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-a.length;o&&(t.style.animation=a.join(", "),A-=o,A||u((()=>{A||($.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),$.clear())})))}function E(t){T=t}const C=[],H=[],L=[],R=[],_=Promise.resolve();let j=!1;function K(t){L.push(t)}const B=new Set;let D,F=0;function N(){const t=T;do{for(;F<C.length;){const t=C[F];F++,E(t),O(t.$$)}for(E(null),C.length=0,F=0;H.length;)H.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];B.has(e)||(B.add(e),e())}L.length=0}while(C.length);for(;R.length;)R.pop()();j=!1,B.clear(),E(t)}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}function z(t,e,n){t.dispatchEvent(function(t,e,{bubbles:n=!1,cancelable:a=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,a,e),o}(`${e?"intro":"outro"}${n}`))}const I=new Set;let V;function W(t,e){t&&t.i&&(I.delete(t),t.i(e))}function G(t,e,n,a){if(t&&t.o){if(I.has(t))return;I.add(t),V.c.push((()=>{I.delete(t),a&&(n&&t.d(1),a())})),t.o(e)}}const q={duration:0};function J(n,a,r,i){let c=a(n,r),l=i?0:1,d=null,b=null,g=null;function f(){g&&P(n,g)}function w(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(a){const{delay:s=0,duration:r=300,easing:i=e,tick:y=t,css:k}=c||q,v={start:h()+s,b:a};a||(v.group=V,V.r+=1),d||b?b=v:(k&&(f(),g=M(n,l,a,r,s,i,k)),a&&y(0,1),d=w(v,r),K((()=>z(n,a,"start"))),function(t){let e;0===p.size&&u(m),new Promise((n=>{p.add(e={c:t,f:n})}))}((t=>{if(b&&t>b.start&&(d=w(b,r),b=null,z(n,d.b,"start"),k&&(f(),g=M(n,l,d.b,d.duration,0,i,c.css))),d)if(t>=d.end)y(l=d.b,1-l),z(n,d.b,"end"),b||(d.b?f():--d.group.r||o(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;l=d.a+d.d*i(e/d.duration),y(l,1-l)}return!(!d&&!b)})))}return{run(t){s(c)?(D||(D=Promise.resolve(),D.then((()=>{D=null}))),D).then((()=>{c=c(),y(t)})):y(t)},end(){f(),d=b=null}}}function X(t){t&&t.c()}function Y(t,e,a,r){const{fragment:i,on_mount:c,on_destroy:l,after_update:h}=t.$$;i&&i.m(e,a),r||K((()=>{const e=c.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),h.forEach(K)}function U(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(C.push(t),j||(j=!0,_.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,n,s,r,i,c,l,h=[-1]){const u=T;E(e);const p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:a(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:a(),dirty:h,skip_bound:!1,root:n.target||u.$$.root};l&&l(p.root);let m=!1;if(p.ctx=s?s(e,n.props||{},((t,n,...a)=>{const o=a.length?a[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),m&&Z(e,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!r&&r(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(w)}else p.fragment&&p.fragment.c();n.intro&&W(e.$$.fragment),Y(e,n.target,n.anchor,n.customElement),N()}E(u)}class tt{$destroy(){U(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function et(t,e,n){const a=t.slice();return a[1]=e[n],a}function nt(t){let e,n,a,o,s,r,i;return{c(){e=k("a"),n=k("div"),a=k("img"),r=x(),c(a.src,o=t[1].imgSrc)||S(a,"src",o),S(a,"alt",s=t[1].name),S(e,"class","flex aspect-square items-center justify-center bg-white text-center text-black hover:brightness-95 border border-black"),S(e,"href",i=t[1].href||"/")},m(t,o){f(t,e,o),d(e,n),d(n,a),d(e,r)},p(t,n){1&n&&!c(a.src,o=t[1].imgSrc)&&S(a,"src",o),1&n&&s!==(s=t[1].name)&&S(a,"alt",s),1&n&&i!==(i=t[1].href||"/")&&S(e,"href",i)},d(t){t&&w(e)}}}function at(e){let n,a=e[0],o=[];for(let t=0;t<a.length;t+=1)o[t]=nt(et(e,a,t));return{c(){n=k("div");for(let t=0;t<o.length;t+=1)o[t].c();S(n,"class","grid grid-cols-2 md:grid-cols-4 w-full border border-black bg-white")},m(t,e){f(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){if(1&e){let s;for(a=t[0],s=0;s<a.length;s+=1){const r=et(t,a,s);o[s]?o[s].p(r,e):(o[s]=nt(r),o[s].c(),o[s].m(n,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=a.length}},i:t,o:t,d(t){t&&w(n),y(o,t)}}}function ot(t,e,n){let{data:a}=e;return t.$$set=t=>{"data"in t&&n(0,a=t.data)},[a]}class st extends tt{constructor(t){super(),Q(this,t,ot,at,r,{data:0})}}function rt(e){let n;return{c(){n=k("nav"),n.innerHTML='<h4><a href="#projects" class="svelte-vbs9u5">Projects</a></h4> \n  <h4><a href="#sponsors" class="svelte-vbs9u5">Supports</a></h4> \n  <h4><a href="#about" class="svelte-vbs9u5">About</a></h4>',S(n,"class","flex flex-row justify-center p-2 w-full gap-3 sm:p-6 sm:gap-4 sm:mb-2")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&w(n)}}}class it extends tt{constructor(t){super(),Q(this,t,null,rt,r,{})}}const ct=[{name:"Karage by Karakasang",team:[["Kirttipoom"],["Thanakrit"],["Phacharaphol"],["Suratan"]],description:"Chatbot chuan kui kae ngao tee chuay ha kum plae pa sa tai pen pa sa karaoke lae yung samart pen tua chuay fueg pim pa sa  karaoke dai eek duay lae yung mee function nae nam satantee tong tieaw lae pleng eek duay\nChatbot ชวนคุยแก้เหงาที่ช่วยหาคำแปลภาษาไทยเป็นภาษาคาราโอเกะ และยังสามารถเป็นตัวช่วยฝึกพิมพ์ภาษาคาราโอเกะได้อีกด้วย และยังมีฟังก์ชั่นแนะนำสถานที่ท่องเที่ยวและเพลงอีกด้วย]",img:"karage.webp",url:[]},{name:"กรรมตามติด by de",team:[["tinarskii","https://github.com/tinarskii"],["0xNithi","https://github.com/0xNithi"],["pavitpim40","https://github.com/pavitpim40"],["pumipatw","https://github.com/pumipatw"]],description:"กรรม, but on blockchain",img:"de.webp",url:[["github","https://github.com/karma-soulbound/karma-soulbound-ui"]]},{name:"luungluungluung by ลุงลุ่งลุ้ง",team:[["Supasate Vorathammathorn","https://github.com/ksupasate"],["Tanachat Mongkolporn","https://github.com/hbeat"],["Thanakrit Maneesawas","https://github.com/klemonade"],["Kanokpon Nagavajara","https://github.com/pploythehuman"],["Subhakorn Chayawatto","https://github.com/Fkie01"]],description:"โปรเจกต์สำหรับใช้ในการด่าลุง 🌚🌝 ที่คุณต้องลองเข้าไปดูถึงรู้ว่ามันต่างจากเว็บอื่นยังไง",img:"lung.webp",url:[["site","https://luungluungluung.netlify.app"]]},{name:"MosQlick by tam-arai-sak-yang-tee",team:[["Seai"],["Jainu"],["Mikaxris"],["Santhitak","https://github.com/santhitak"],["Spicyzboss","https://github.com/spicyzboss"],["Jeremy","https://github.com/pp3times"]],description:"ซ้อมตียุงกันเถอะ!!",img:"mosqlick.webp",url:[["site","https://mos-qlick.vercel.app/"],["github","https://github.com/santhitak/mosQlick"]],award:"🥈 2nd Most Stupid Award"},{name:"TAOLOI by มวดทุกเขา",team:[["Gus"],["Focus"],["Tong"],["Namkheng"]],description:"เต่าบินทำไมถ้าเราเต่าลอยยันเช้า",img:"taoloi.webp",url:[],award:"🥈 2nd Non Stupid Award"},{name:"Kaptcha by LAzyDev",team:[["Kanisorn siripatkerdpong","https://github.com/new4761"],["Tanakorn Thampanya","https://github.com/Endifly"],["Nopon Somanawattana","https://github.com/noppon11"],["Khajohnyos Boonkate","https://github.com/markkj"],["Pisitchai Siriratanachaikul","https://github.com/pisichi"],["Pithakthakul Kaewchai"]],description:"Captcha Kappa by LAzyDev",img:"lazydev.webp",url:[["Github Frontend","https://github.com/LAzyDev-101/Kaptcha-shit6 [front-end]"],["Github Backend","https://github.com/LAzyDev-101/stupid-core [backend]"],["Site","https://dev.tanakorn.space/page/"],["Video","https://youtu.be/-8mBm18a_Mo"]],award:"🥈 2nd Most Aesthetically Pleasing Award"},{name:"ไว้ค่อยคิดชื่อละกัน by ไว้ทำพรุ่งนี้นะ",team:[["Sataphon Obra","https://github.com/puyepuye"],["Phonlakrit Tiraratn"],["Lillada Kietdumrongwon"],["Thitiwut Pattanasuttinon"],["Patit-ake Jumreangkwa"]],description:"",img:"later.webp",url:[["github","https://github.com/puyepuye/stupidHack6-2022"],["demo","https://puyepuye.github.io/"]],award:"🏆 Most Stupid Award"},{name:"พิจ๋าวนักแปล แปลฟรีๆ ไม่คิดตังค์ by ชานม",team:[["James","https://github.com/crunzex"],["Ty","https://github.com/tyNAKAMOL"],["Park","https://github.com/ParkSoravee"],["Onn","https://github.com/Charonyx"],["Fill","https://github.com/Kiratikorn"],["Rom","https://github.com/FabuKi-Xr"]],description:"เมื่อเราคุยกับเพื่อนรู้เรื่องมากเกินไป เราจึงสร้างบอทที่ทำให้เราสามารถคุยกับเพื่อนได้รู้เรื่องมากขึ้น!",img:"milktea.webp",url:[["github","https://github.com/CRUNZEX/discord-stupid"],["github","https://github.com/FabuKi-Xr/stupid_hackathon_bot_NLP"]]},{name:"Social BuT PDPA Filter by 2147483647",description:"ในช่วงนี้เทรน pdpa กำลังมา ซึ่งมีผลกระทบหลักๆเกิดขึ้นบน social media จากที่เคยลงรูปได้อย่างสบายใจ แต่ในตอนนี้ ทุกครั้งที่ลงรูปก็จะต้องมานั่งกังวลว่าผิดกฎ pdpa ไหมมมม ทางพวกเราจึงคิดค้นสิ่งที่จะสร้าง social media zero trust จาก pdpa โดยทุกครั้งที่ upload รูปขึ้น social media ของเรา รูปทุกรูปจะถูกแก้ไขให้ถูกกฎของ pdpa ด้วยวิธีการต่างๆ",team:[["Kook","https://github.com/eXitHere"],["Pim","https://github.com/It5Me"],["Best","https://github.com/swekiiz"],["Poom","https://github.com/GoldF15h"],["Ploy","https://github.com/ployns"],["Dear","https://github.com/DearSmc"]],img:"pdpa.webp",url:[["Backend0","https://github.com/eXitHere/stupid-hack-6-backend"],["Backend1","https://github.com/GoldF15h/shit6-backend"],["Frontend","https://github.com/swekiiz/stupid-hack-6-frontend"]],award:"🥈 2nd Most Impressive Technology Award"},{name:"OMYIM by OMYIM",description:"Because LOVE is not only about the mind, Body and Sexual orientation also have effect us. We're proud to present OMYIM 🍭!, the online platform for supporting sex dating especially to be more convenience, more satisfied, and more secure!",team:[["Techin"],["Sarita"],["Sittisak"],["Kittipat"],["Thitiworada"],["Chalothorn"]],img:"omyim.webp",url:[],award:"🏆 Non Stupid Award"},{name:"Jerm by Monks",description:"a blessing github action...",team:[["ST4RCHASER","https://github.com/ST4RCHASER"],["kana2011th","https://github.com/kana2011th"],["runyasak","https://github.com/runyasak"]],img:"monks.webp",url:[["github","https://github.com/ST4RCHASER/jerm-action"],["demo","https://github.com/ST4RCHASER/jerm-demo"]],award:"🏆 Most Impressive Technology Award"},{name:"RRRaaSs by ผจญภัยในป่าอะเมซอน ไปเจอชนเผ่ามายาฮี มายาฮู มายาฮา มายาห๊ะ นั่นเสียงอะไรหน่ะ นั่นสิ ไม่รู้ ไม่รู้ ไม่รู้",description:"Rickroll but you wouldn't hear it, you touch it ;)",team:[["Phu","https://github.com/richeyphu"],["Unn","https://github.com/thitiwat-t"]],img:"rrraass.webp",url:[["github","https://github.com/thitiwat-t/rrraass"],["demo","https://rrraass.vercel.app"]]},{name:"ได้รับเเรงบันดาลใจจากภูมิปรินทร์ by นั้นสิ",description:"ไอเดียที่ทำมาจาก ภูมิปรินทร์ โดยการเลื่อนผ่าน Facebook\nRef 1: [Below]\nRef 2: [Below]",team:[["Palm"],["Khing"]],url:[["Ref1","https://www.facebook.com/phoomparin.mano/posts/pfbid026wRPbokYijMQMZ4ZFRovX3dRKTyVvGFbSLLQwiB2VLYfJbdiZnhZ3gfRQeHXyPigl"],["Ref2","https://www.facebook.com/phoomparin.mano/posts/pfbid0PMjZ8HwTXy8KwimNU5ZtRdCg6G8Rmp9SoX1zxeY3RDqLoa2TauZuNEgvErWK6vAsl"],["Website","https://inspired-by-ppr.web.app/"],["Thaifuc","https://github.com/palmcm/thaifuc"]],img:"thaifuc.webp"},{name:"บ้านสีเหลือง by Cunny",description:"An alternative to lighthouse for finding stats about your website, but it's for ความรักชาติ. Also there's an eslint module for thai number only.",team:[["Gusbell","https://github.com/Gusb3ll"],["Varkaria","https://github.com/Varkaria"],["Leomotors","https://github.com/Leomotors"],["IkaWaAyuMu","https://github.com/IkaWaAyuMu"],["sleepntsheep","https://github.com/sleepntsheep"],["WitMaster","https://github.com/WitMaster98"]],img:"cunny.webp",url:[["GitHub","https://github.com/cunny-SHiT6"],["Homepage (written in Kotchasan)","https://www.youtube.com/watch?v=dQw4w9WgXcQ"]],award:"🏆 Most Aesthetically Pleasing Award"},{name:"PEDEEEPE-A by PEDEEP",description:"PeDeepe-A เป็​นเว็บไซต์สำหรับจัดการๆ ใช้ PDPA  อย่างถูกต้องคุณจะได้รับรู้ กฎหมาย และข้อกำหนดของกฎหมายใหม่ อย่างแท้จริงถ่องแท้ถึงภายใน พร้อมระบบจัดการวัดความรู้ว่าคุณได้ผ่านการเรียนรู้มาอย่างมีประสิทธิภาพหรือไม่ นี่แหละคือ Pedeep  ที่พวกคุณต้องลองใช้แล้วจะจำไม่มีวันลืม 😂",team:[["Mixko50","https://github.com/Mixko50"],["Floaty_KT","https://github.com/FloatKasemtan"],["tententgc","https://github.com/tententgc"],["Jay","https://github.com/jasonnonstop10"],["o0SoloWolf0o","https://github.com/o0SoloWolf0o"],["Awirut","https://github.com/awirut3526293"]],url:[["site","https://pedeeepe-a.vercel.app/"],["github","https://github.com/PEDEEP/PEDEEEPE-A"]],img:"pedeep.webp"}];function lt(t,e,n){const a=t.slice();return a[0]=e[n],a}function ht(t,e,n){const a=t.slice();return a[3]=e[n],a}function ut(t,e,n){const a=t.slice();return a[6]=e[n],a}function pt(e){let n,a,o=e[6][0].split(" ")[0]+"";return{c(){n=k("span"),a=v(o),S(n,"class","bg-slate-100 p-1 mr-2 mb-2 rounded-md border-2 border-slate-400")},m(t,e){f(t,n,e),d(n,a)},p:t,d(t){t&&w(n)}}}function mt(e){let n,a,o=e[6][0].split(" ")[0]+"";return{c(){n=k("a"),a=v(o),S(n,"href",e[6][1]),S(n,"class","no-underline hover:bg-sky-100 bg-slate-100 p-1 mr-2 mb-2 rounded-md border-2 border-slate-400")},m(t,e){f(t,n,e),d(n,a)},p:t,d(t){t&&w(n)}}}function dt(t){let e;let n=function(t,e){return 2==t[6].length?mt:pt}(t),a=n(t);return{c(){a.c(),e=v("")},m(t,n){a.m(t,n),f(t,e,n)},p(t,e){a.p(t,e)},d(t){a.d(t),t&&w(e)}}}function bt(e){let n,a,o,s,r,i=e[3][0]+"";return{c(){n=k("a"),a=v("["),o=v(i),s=v("]"),S(n,"href",r=e[3][1]),S(n,"class","px-1")},m(t,e){f(t,n,e),d(n,a),d(n,o),d(n,s)},p:t,d(t){t&&w(n)}}}function gt(e){let n,a,o,s,r,i,l,h,u,p,m,b,g,$,T=e[0].name+"",A=e[0].description+"",M=e[0].img&&function(e){let n,a,o,s;return{c(){n=k("div"),a=k("img"),c(a.src,o="images/projects/"+e[0].img)||S(a,"src",o),S(a,"alt",s=e[0].name),S(a,"class","w-full object-cover group-hover:scale-[1.02]"),S(n,"class","overflow-hidden aspect-video")},m(t,e){f(t,n,e),d(n,a)},p:t,d(t){t&&w(n)}}}(e),P=e[0].award&&function(e){let n,a,o=e[0].award+"";return{c(){n=k("h4"),a=v(o),S(n,"class","pb-2 text-md text-slate-500")},m(t,e){f(t,n,e),d(n,a)},p:t,d(t){t&&w(n)}}}(e),E=e[0].team,C=[];for(let t=0;t<E.length;t+=1)C[t]=dt(ut(e,E,t));let H=e[0].url,L=[];for(let t=0;t<H.length;t+=1)L[t]=bt(ht(e,H,t));return{c(){n=k("div"),M&&M.c(),a=x(),o=k("div"),P&&P.c(),s=x(),r=k("h1"),i=v(T),l=x(),h=k("div");for(let t=0;t<C.length;t+=1)C[t].c();u=x(),p=k("p"),m=v(A),b=x();for(let t=0;t<L.length;t+=1)L[t].c();g=x(),S(r,"class","text-2xl pb-2"),S(h,"class","flex flex-wrap py-2"),S(p,"class","text-base sm:text-lg pb-4"),S(o,"class","p-4"),S(n,"class","group border-2 border-black h-full hover:scale-[1.01] hover:rotate-1 transition-all"),S(n,"id",$=e[0].img?e[0].img.split(".")[0]:"monks")},m(t,e){f(t,n,e),M&&M.m(n,null),d(n,a),d(n,o),P&&P.m(o,null),d(o,s),d(o,r),d(r,i),d(o,l),d(o,h);for(let t=0;t<C.length;t+=1)C[t].m(h,null);d(o,u),d(o,p),d(p,m),d(o,b);for(let t=0;t<L.length;t+=1)L[t].m(o,null);d(n,g)},p(t,e){if(t[0].img&&M.p(t,e),t[0].award&&P.p(t,e),0&e){let n;for(E=t[0].team,n=0;n<E.length;n+=1){const a=ut(t,E,n);C[n]?C[n].p(a,e):(C[n]=dt(a),C[n].c(),C[n].m(h,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=E.length}if(0&e){let n;for(H=t[0].url,n=0;n<H.length;n+=1){const a=ht(t,H,n);L[n]?L[n].p(a,e):(L[n]=bt(a),L[n].c(),L[n].m(o,null))}for(;n<L.length;n+=1)L[n].d(1);L.length=H.length}},d(t){t&&w(n),M&&M.d(),P&&P.d(),y(C,t),y(L,t)}}}function ft(e){let n,a=ct,o=[];for(let t=0;t<a.length;t+=1)o[t]=gt(lt(e,a,t));return{c(){n=k("div");for(let t=0;t<o.length;t+=1)o[t].c();S(n,"class","grid w-full grid-cols-1 gap-6 lg:grid-cols-2 items-center justify-center mb-4 sm:mb-8")},m(t,e){f(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){if(0&e){let s;for(a=ct,s=0;s<a.length;s+=1){const r=lt(t,a,s);o[s]?o[s].p(r,e):(o[s]=gt(r),o[s].c(),o[s].m(n,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=a.length}},i:t,o:t,d(t){t&&w(n),y(o,t)}}}class wt extends tt{constructor(t){super(),Q(this,t,null,ft,r,{})}}function yt(t,{delay:n=0,duration:a=400,easing:o=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:a,easing:o,css:t=>"opacity: "+t*s}}const kt=[{name:"The University of the Thai Chamber of Commerce",href:"https://utcc.ac.th",imgSrc:"images/sponsors/utcc.webp"},{name:"brikl",href:"https://brikl.com",imgSrc:"images/sponsors/brikl.webp"},{name:"Hodl My Beer",href:"https://www.facebook.com/hodlbeer/",imgSrc:"images/sponsors/hodl.webp"},{name:"Laika",href:"https://getlaika.app/",imgSrc:"images/sponsors/laika.webp"},{name:"#อาจารย์มิกเป็นคนซีเรียส",href:"/",imgSrc:"images/sponsors/ajmick.webp"},{name:"Wonderful.software",href:"https://wonderful.software",imgSrc:"images/sponsors/wonderfulsoftware.webp"},{name:"Sunday Ins.",href:"https://easysunday.com",imgSrc:"images/sponsors/sunday.webp"},{name:"Microsoft",href:"http://microsoft.com",imgSrc:"images/sponsors/microsoft.webp"},{name:"Fastwork",href:"https://fastwork.co",imgSrc:"images/sponsors/fastwork.webp"},{name:"Rayriffy",href:"http://rayriffy.com",imgSrc:"images/sponsors/rayriffy.webp"},{name:"Phoomparin",href:"https://poom.dev",imgSrc:"images/sponsors/poom.webp"},{name:"Bangmod Clound",href:"https://bangmod.cloud",imgSrc:"images/sponsors/bangmodcloud.webp"}],vt=[{name:"Batch[0] = Early Bird",href:"https://www.facebook.com/StupidHackTH/posts/pfbid02VLgLbiSm9VeBYfDG4ueYNK9pVDazLyDB1jDsUqpjUKAVN3dwkuLpJdkw9uqzugZkl",imgSrc:"images/tickets/b0_earlybird.webp"},{name:"Batch[1] = Stupid Pitch Challenge",href:"https://www.facebook.com/StupidHackTH/posts/pfbid033hnWHpJkqjjvQyynzUdfuU8Sq9hWfpY2VY8MdDxoWoJSpqjJJHVrxhcVFuXDLY2Gl",imgSrc:"images/tickets/b1_stupidpitch.webp"},{name:"Batch[2] = Beyond the Canvas, a CTF Challenge by SaltyAom",href:"https://www.facebook.com/StupidHackTH/posts/pfbid0ABMxzwZKtSGdpvrsXV9d1Wy3aXz64wCCSobu7LbspRYBLSFgMxhjansPj8rn2v1Vl",imgSrc:"images/tickets/b2_ctf.webp"},{name:"Batch[3] = Treasure Hunter by showdown.space",href:"https://www.facebook.com/StupidHackTH/posts/pfbid088KpvD6VAFn8P29PTdUSRLHyY9NSCZB8iCm87b9Ab6FfxSGj8L9ZQzF93SzpXxuEl",imgSrc:"images/tickets/b3_treasure_hunter.webp"},{name:"Batch[4] = Stupid Adventure, a text game by Rayriffy",href:"https://www.facebook.com/StupidHackTH/posts/pfbid0oTWLNmdznStoqPiV5FuAabe3GWEmveMLcUnMnin6s6qZVBvgq4s7xBXt1iaberGMl",imgSrc:"images/tickets/b4_stupid_adventure.webp"},{name:"Batch[5] = I'm not a robot by Keron",href:"https://facebook.com/stupidhackth",imgSrc:"images/tickets/b5_captcha.webp"}],xt=[{name:"UTCC Makerspace",href:"https://eng.utcc.ac.th",imgSrc:"images/partners/makerspace.webp"},{name:"showdown.space",href:"https://showdown.space",imgSrc:"images/partners/showdownspace.webp"},{name:"Keron Technology",href:"https://www.instagram.com/keron.tech",imgSrc:"images/partners/keron.webp"},{name:"ITexperience",href:"https://web.facebook.com/ITxKMITL",imgSrc:"images/partners/itx.webp"}];function St(e){let n,a,o,s;return a=new st({props:{data:vt}}),{c(){n=k("section"),X(a.$$.fragment),S(n,"class","w-[90vw] mb-4 sm:w-[28rem]")},m(t,e){f(t,n,e),Y(a,n,null),s=!0},p:t,i(t){s||(W(a.$$.fragment,t),K((()=>{o||(o=J(n,yt,{},!0)),o.run(1)})),s=!0)},o(t){G(a.$$.fragment,t),o||(o=J(n,yt,{},!1)),o.run(0),s=!1},d(t){t&&w(n),U(a),t&&o&&o.end()}}}function $t(t){let e,n,a,s,r,i,c,l,h,u,p,m,b,g,y,$,T,A,M,P,E,C,H,L,R,_,j,B,D,F,N,O,z,I,q,Z,Q,tt,et,nt,at,ot,rt=t[0].ticket?"[-] Tickets [Sold Out]":"[+] Tickets [Sold Out]";n=new it({}),$=new wt({}),H=new st({props:{data:kt,id:"sponsors"}}),B=new st({props:{data:xt,id:"partners"}});let ct=t[0].ticket&&St();return{c(){e=k("main"),X(n.$$.fragment),a=x(),s=k("header"),s.innerHTML='<img src="images/banner.webp" alt="THE ៦th STUPID HACKATHON THAILAND" class="max-w-[90vw] border-2 border-black sm:max-w-[28rem] md:max-w-[90vw] md:max-h-[60vh]"/>',r=x(),i=k("section"),i.innerHTML='<h2 class="pb-4 md:pb-8"><span class="font-bold">Date:</span> 2-3 July 2022</h2> \n\t\t<h2 class="pb-4 md:pb-8"><span class="font-bold">Venue:</span> The University of the Thai Chamber of Commerce</h2> \n\t\t<h2 class=""><span class="font-bold">Pitch Session:</span><a class="px-2" href="https://www.facebook.com/creatorsgarten/videos/753821805747854">[PART 1]</a>  <a href="https://www.facebook.com/creatorsgarten/videos/2202840639881996">[PART 2]</a></h2>',c=x(),l=k("h2"),l.textContent="Awards",h=x(),u=k("section"),u.innerHTML='<h4 class="p-4 pb-1 md:p-8 md:pb-2">Most Stupid Award\n\t\t\t<br/>🏆 <a href="#later">ไว้ค่อยคิดชื่อละกัน</a> \n\t\t\t<br/>🥈 <a href="#mosqlick">MosQlick</a></h4> \n\t\t<h4 class="px-4 py-1 md:px-8 md:py-2">Non Stupid Award\n\t\t\t<br/>🏆 <a href="#omyim">OMYIM</a> \n\t\t\t<br/>🥈 <a href="#taoloi">TAOLOI</a></h4> \n\t\t<h4 class="px-4 py-1 md:px-8 md:py-2">Most Aesthetically Pleasing Award\n\t\t\t<br/>🏆 <a href="#cunny">Yellow-house</a> \n\t\t\t<br/>🥈 <a href="#lazydev">Captcha Kappa</a></h4> \n\t\t<h4 class="p-4 pt-1 md:p-8 md:pt-2">Most Impressive Technology Award\n\t\t\t<br/>🏆 <a href="#monks">Jerm - a blessing github action...</a> \n\t\t\t<br/>🥈 <a href="#pdpa">Social BuT PDPA Filter</a></h4>',m=x(),b=k("h2"),b.textContent="PROJECTS",g=x(),y=k("div"),X($.$$.fragment),T=x(),A=k("section"),A.innerHTML='<img src="images/pic.webp" alt="THE ៦th STUPID HACKATHON THAILAND" class="max-w-[90vw] border-2 border-black sm:max-w-[28rem] md:max-w-[90vw] md:max-h-[60vh]"/>',M=x(),P=k("h2"),P.textContent="Sponsors",E=x(),C=k("section"),X(H.$$.fragment),L=x(),R=k("h2"),R.textContent="Partners",_=x(),j=k("section"),X(B.$$.fragment),D=x(),F=k("h2"),F.textContent="About us",N=x(),O=k("section"),O.innerHTML='<h4 class="p-4 md:p-8">The Stupid Hackathon in Thailand is a collaborative hackathon in Thailand with non-competitive intentions and no focuses on business value.</h4> \n\t\t<h4 class="p-4 md:p-8">Our main goal for this hackathon is to get makers to just *have fun* and learn together, through working on any project they can dream of, fostering a community of enthusiastic creators.</h4> \n\t\t<h4 class="p-4 md:p-8">In the spirit of the stupid hackathons worldwide, this event is *non-commercial* and free to attend...</h4>',I=x(),q=k("h2"),Z=v(rt),Q=x(),ct&&ct.c(),tt=x(),et=k("footer"),et.innerHTML='<h4><a href="https://www.eventpop.me/e/13089">Eventpop</a></h4> \n\t\t\t<h4><a href="https://facebook.com/stupidhackth">Facebook</a></h4> \n\t\t\t<h4><a href="https://stupidhackth.github.io/">Website</a></h4>',S(s,"class","flex flex-col items-center justify-center my-2 sm:my-8 hover:scale-[1.01] hover:rotate-1 transition-all"),S(i,"class","border-2 border-black p-4 my-4 md:p-8 md:my-8 w-[90vw] mb-4 sm:w-[28rem]"),S(l,"class","my-4 text-3xl md:my-8 text-center"),S(l,"id","Awards"),S(u,"class","border-2 border-black w-[90vw] mb-4 sm:w-[28rem]"),S(b,"class","my-4 text-3xl md:my-8 text-center"),S(b,"id","projects"),S(y,"class","mt-1 lg:mt-4 w-[90vw] lg:w-[75vw] xl-[60vw]"),S(A,"class","flex flex-col items-center justify-center my-2 sm:my-8 hover:scale-[1.01] hover:rotate-1 transition-all"),S(P,"class","text-3xl my-8 text-center"),S(P,"id","sponsors"),S(C,"class","w-[90vw] lg:w-[75vw] xl-[60vw]"),S(R,"class","text-3xl my-8 text-center"),S(R,"id","sponsors"),S(j,"class","w-[90vw] lg:w-[75vw] xl-[60vw]"),S(F,"class","text-3xl my-8 text-center"),S(F,"id","about"),S(O,"class","border-2 border-black w-[90vw] mb-4 sm:w-[28rem]"),S(q,"class","my-4 text-3xl md:my-8 text-center text-sky-600 hover:font-bold"),S(q,"id","tickets"),S(et,"class","py-6 gap-3 flex flex-row sm:gap-4"),S(et,"id","links"),S(e,"class","flex flex-col items-center justify-center")},m(o,p){var w,k,v,x;f(o,e,p),Y(n,e,null),d(e,a),d(e,s),d(e,r),d(e,i),d(e,c),d(e,l),d(e,h),d(e,u),d(e,m),d(e,b),d(e,g),d(e,y),Y($,y,null),d(e,T),d(e,A),d(e,M),d(e,P),d(e,E),d(e,C),Y(H,C,null),d(e,L),d(e,R),d(e,_),d(e,j),Y(B,j,null),d(e,D),d(e,F),d(e,N),d(e,O),d(e,I),d(e,q),d(q,Z),d(e,Q),ct&&ct.m(e,null),d(e,tt),d(e,et),nt=!0,at||(w=q,k="click",v=t[1],w.addEventListener(k,v,x),ot=()=>w.removeEventListener(k,v,x),at=!0)},p(t,[n]){(!nt||1&n)&&rt!==(rt=t[0].ticket?"[-] Tickets [Sold Out]":"[+] Tickets [Sold Out]")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(Z,rt),t[0].ticket?ct?(ct.p(t,n),1&n&&W(ct,1)):(ct=St(),ct.c(),W(ct,1),ct.m(e,tt)):ct&&(V={r:0,c:[],p:V},G(ct,1,1,(()=>{ct=null})),V.r||o(V.c),V=V.p)},i(t){nt||(W(n.$$.fragment,t),K((()=>{p||(p=J(u,yt,{},!0)),p.run(1)})),W($.$$.fragment,t),W(H.$$.fragment,t),W(B.$$.fragment,t),K((()=>{z||(z=J(O,yt,{},!0)),z.run(1)})),W(ct),nt=!0)},o(t){G(n.$$.fragment,t),p||(p=J(u,yt,{},!1)),p.run(0),G($.$$.fragment,t),G(H.$$.fragment,t),G(B.$$.fragment,t),z||(z=J(O,yt,{},!1)),z.run(0),G(ct),nt=!1},d(t){t&&w(e),U(n),t&&p&&p.end(),U($),U(H),U(B),t&&z&&z.end(),ct&&ct.d(),at=!1,ot()}}}function Tt(t,e,n){let a={ticket:!1,about:!1,one:!1};return[a,()=>{n(0,a.ticket=!a.ticket,a)}]}return new class extends tt{constructor(t){super(),Q(this,t,Tt,$t,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
