const __vite__fileDeps=["assets/_...404_-ClVf18s3.js","assets/web-SuoEmjJT.js","assets/Link-C0a3SUQc.js","assets/random-blog-D6zx7FOF.js","assets/index-1_YyxxKG.js","assets/fix-for-deploying-static-solid-start-5.x-to-cloudflare-pages-BOTHh9Nq.js","assets/BlogParagraph-P6XR_Txb.js","assets/index-4NIQCdV-.js","assets/preload-helper-N37mDRhq.js","assets/notes-on-database-sharding-Dgm9UzD0.js","assets/BlogParagraphSubsection-DJgZ1XL0.js","assets/setting-up-square-payment-links-the-stripe-alternative-BfOyXeiW.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{c as J,a as T,b as h,g as X,u as Y,S as W,o as Q,d as ee,e as te,f as j,h as ne,i as E,s as C,m as P,j as v,r as N,t as k,l as re,k as ae,n as x,p as ie,q as B,E as oe,v as se}from"./web-SuoEmjJT.js";import{_ as A}from"./preload-helper-N37mDRhq.js";import{M as le}from"./index-4NIQCdV-.js";import{r as ce}from"./random-blog-D6zx7FOF.js";import{c as ue,a as de,R as fe,s as F,g as he,b as me,d as pe,m as ge,k as be,e as ve,f as $e,n as we,u as _e,L}from"./Link-C0a3SUQc.js";const D="Invariant Violation",{setPrototypeOf:xe=function(e,t){return e.__proto__=t,e}}=Object;class M extends Error{framesToPop=1;name=D;constructor(t=D){super(typeof t=="number"?`${D}: ${t} (see https://github.com/apollographql/invariant-packages)`:t),xe(this,M.prototype)}}function I(e,t){if(!e)throw new M(t)}const Ee=/^[A-Za-z]:\//;function ye(e=""){return e&&e.replace(/\\/g,"/").replace(Ee,t=>t.toUpperCase())}const ke=/^[/\\]{2}/,Re=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,Se=/^[A-Za-z]:$/,Ae=function(e){if(e.length===0)return".";e=ye(e);const t=e.match(ke),n=O(e),r=e[e.length-1]==="/";return e=Le(e,!n),e.length===0?n?"/":r?"./":".":(r&&(e+="/"),Se.test(e)&&(e+="/"),t?n?`//${e}`:`//./${e}`:n&&!O(e)?`/${e}`:e)},K=function(...e){if(e.length===0)return".";let t;for(const n of e)n&&n.length>0&&(t===void 0?t=n:t+=`/${n}`);return t===void 0?".":Ae(t.replace(/\/\/+/g,"/"))};function Le(e,t){let n="",r=0,a=-1,i=0,c=null;for(let o=0;o<=e.length;++o){if(o<e.length)c=e[o];else{if(c==="/")break;c="/"}if(c==="/"){if(!(a===o-1||i===1))if(i===2){if(n.length<2||r!==2||n[n.length-1]!=="."||n[n.length-2]!=="."){if(n.length>2){const f=n.lastIndexOf("/");f===-1?(n="",r=0):(n=n.slice(0,f),r=n.length-1-n.lastIndexOf("/")),a=o,i=0;continue}else if(n.length>0){n="",r=0,a=o,i=0;continue}}t&&(n+=n.length>0?"/..":"..",r=2)}else n.length>0?n+=`/${e.slice(a+1,o)}`:n=e.slice(a+1,o),r=o-a-1;a=o,i=0}else c==="."&&i!==-1?++i:i=-1}return n}const O=function(e){return Re.test(e)};function Te(e){return`virtual:${e}`}function Ce(e){return e.handler?.endsWith(".html")?O(e.handler)?e.handler:K(e.root,e.handler):`#vinxi/handler/${e.name}`}const Pe=new Proxy({},{get(e,t){return I(typeof t=="string","Bundler name should be a string"),{name:t,type:"client",handler:Te(Ce({name:t})),baseURL:"/_build",chunks:new Proxy({},{get(n,r){I(typeof r=="string","Chunk expected");let a=K("/_build",r+".mjs");return{import(){return import(a)},output:{path:a}}}}),inputs:new Proxy({},{get(n,r){I(typeof r=="string","Input must be string");let a=window.manifest[r].output;return{async import(){return import(a)},async assets(){return window.manifest[r].assets},output:{path:a}}}})}}});globalThis.MANIFEST=Pe;const Ne=e=>t=>{const{base:n}=t,r=J(()=>t.children),a=T(()=>ue(r(),t.base||""));let i;const c=de(e,a,()=>i,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(c),h(fe.Provider,{value:c,get children(){return h(De,{routerState:c,get root(){return t.root},get load(){return t.rootLoad},get children(){return[T(()=>(i=X())&&null),h(Ie,{routerState:c,get branches(){return a()}})]}})}})};function De(e){const t=e.routerState.location,n=e.routerState.params,r=T(()=>e.load&&Y(()=>{F(!0),e.load({params:n,location:t,intent:he()||"initial"}),F(!1)}));return h(W,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:a=>h(a,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function Ie(e){const t=[];let n;const r=T(Q(e.routerState.matches,(a,i,c)=>{let o=i&&a.length===i.length;const f=[];for(let s=0,p=a.length;s<p;s++){const g=i&&i[s],b=a[s];c&&g&&b.route.key===g.route.key?f[s]=c[s]:(o=!1,t[s]&&t[s](),ee($=>{t[s]=$,f[s]=pe(e.routerState,f[s-1]||e.routerState.base,q(()=>r()[s+1]),()=>e.routerState.matches()[s])}))}return t.splice(a.length).forEach(s=>s()),c&&o?c:(n=f[0],f)}));return q(()=>r()&&n)()}const q=e=>()=>h(W,{get when(){return e()},keyed:!0,children:t=>h(me.Provider,{value:t,get children(){return t.outlet()}})});function Oe([e,t],n,r){return[e,r?a=>t(r(a)):t]}function Me(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function Ue(e){let t=!1;const n=a=>typeof a=="string"?{value:a}:a,r=Oe(te(n(e.get()),{equals:(a,i)=>a.value===i.value&&a.state===i.state}),void 0,a=>(!t&&e.set(a),a));return e.init&&j(e.init((a=e.get())=>{t=!0,r[1](n(a)),t=!1})),Ne({signal:r,create:e.create,utils:e.utils})}function Be(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Fe(e,t){const n=Me(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const qe=new Map;function He(e=!0,t=!1,n="/_server",r){return a=>{const i=a.base.path(),c=a.navigatorFactory(a.base);let o={};function f(l){return l.namespaceURI==="http://www.w3.org/2000/svg"}function s(l){if(l.defaultPrevented||l.button!==0||l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)return;const u=l.composedPath().find(U=>U instanceof Node&&U.nodeName.toUpperCase()==="A");if(!u||t&&!u.hasAttribute("link"))return;const m=f(u),d=m?u.href.baseVal:u.href;if((m?u.target.baseVal:u.target)||!d&&!u.hasAttribute("state"))return;const w=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||w&&w.includes("external"))return;const _=m?new URL(d,document.baseURI):new URL(d);if(!(_.origin!==window.location.origin||i&&_.pathname&&!_.pathname.toLowerCase().startsWith(i.toLowerCase())))return[u,_]}function p(l){const u=s(l);if(!u)return;const[m,d]=u,S=a.parsePath(d.pathname+d.search+d.hash),w=m.getAttribute("state");l.preventDefault(),c(S,{resolve:!1,replace:m.hasAttribute("replace"),scroll:!m.hasAttribute("noscroll"),state:w&&JSON.parse(w)})}function g(l){const u=s(l);if(!u)return;const[m,d]=u;typeof r=="function"&&(d.pathname=r(d.pathname)),o[d.pathname]||a.preloadRoute(d,m.getAttribute("preload")!=="false")}function b(l){const u=s(l);if(!u)return;const[m,d]=u;typeof r=="function"&&(d.pathname=r(d.pathname)),!o[d.pathname]&&(o[d.pathname]=setTimeout(()=>{a.preloadRoute(d,m.getAttribute("preload")!=="false"),delete o[d.pathname]},200))}function $(l){const u=s(l);if(!u)return;const[,m]=u;typeof r=="function"&&(m.pathname=r(m.pathname)),o[m.pathname]&&(clearTimeout(o[m.pathname]),delete o[m.pathname])}function R(l){if(l.defaultPrevented)return;let u=l.submitter&&l.submitter.hasAttribute("formaction")?l.submitter.getAttribute("formaction"):l.target.getAttribute("action");if(!u)return;if(!u.startsWith("https://action/")){const d=new URL(u,ge);if(u=a.parsePath(d.pathname+d.search),!u.startsWith(n))return}if(l.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const m=qe.get(u);if(m){l.preventDefault();const d=new FormData(l.target);l.submitter&&l.submitter.name&&d.append(l.submitter.name,l.submitter.value),m.call({r:a,f:l.target},d)}}ne(["click","submit"]),document.addEventListener("click",p),e&&(document.addEventListener("mouseover",b),document.addEventListener("mouseout",$),document.addEventListener("focusin",g),document.addEventListener("touchstart",g)),document.addEventListener("submit",R),j(()=>{document.removeEventListener("click",p),e&&(document.removeEventListener("mouseover",b),document.removeEventListener("mouseout",$),document.removeEventListener("focusin",g),document.removeEventListener("touchstart",g)),document.removeEventListener("submit",R)})}}function ze(e){const t=()=>{const r=window.location.pathname+window.location.search;return{value:e.transformUrl?e.transformUrl(r)+window.location.hash:r+window.location.hash,state:window.history.state}},n=$e();return Ue({get:t,set({value:r,replace:a,scroll:i,state:c}){a?window.history.replaceState(be(c),"",r):window.history.pushState(c,"",r),Fe(window.location.hash.slice(1),i),ve()},init:r=>Be(window,"popstate",we(r,a=>{if(a&&a<0)return!n.confirm(a);{const i=t();return!n.confirm(i.value,{state:i.state})}})),create:He(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}function Ve(e){e.forEach(t=>{if(!t.attrs.href)return;let n=document.head.querySelector(`link[href="${t.attrs.href}"]`);n||(n=document.createElement("link"),n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",t.attrs.href),document.head.appendChild(n))})}var We=k("<style>"),je=k("<link>"),Ke=k("<script> ");const Ge={style:e=>(()=>{var t=E(We);return C(t,P(()=>e.attrs),!1,!0),v(t,()=>e.children),N(),t})(),link:e=>(()=>{var t=E(je);return C(t,P(()=>e.attrs),!1,!1),N(),t})(),script:e=>e.attrs.src?(()=>{var t=E(Ke);return C(t,P(()=>e.attrs,{get id(){return e.key}}),!1,!0),N(),t})():null};function Ze(e,t){let{tag:n,attrs:{key:r,...a}={key:void 0},children:i}=e;return Ge[n]({attrs:{...a,nonce:t},key:r,children:i})}function Je(e,t,n,r="default"){return re(async()=>{{const i=(await e.import())[r],o=(await t.inputs?.[e.src].assets()).filter(s=>s.tag==="style"||s.attrs.rel==="stylesheet");return typeof window<"u"&&Ve(o),{default:s=>[...o.map(p=>Ze(p)),h(i,s)]}}})}const y={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Xe(e={}){const t={options:e,rootNode:G(),staticRoutesMap:{}},n=r=>e.strictTrailingSlash?r:r.replace(/\/$/,"")||"/";if(e.routes)for(const r in e.routes)H(t,n(r),e.routes[r]);return{ctx:t,lookup:r=>Ye(t,n(r)),insert:(r,a)=>H(t,n(r),a),remove:r=>Qe(t,n(r))}}function Ye(e,t){const n=e.staticRoutesMap[t];if(n)return n.data;const r=t.split("/"),a={};let i=!1,c=null,o=e.rootNode,f=null;for(let s=0;s<r.length;s++){const p=r[s];o.wildcardChildNode!==null&&(c=o.wildcardChildNode,f=r.slice(s).join("/"));const g=o.children.get(p);if(g===void 0){if(o&&o.placeholderChildren.length>1){const b=r.length-s;o=o.placeholderChildren.find($=>$.maxDepth===b)||null}else o=o.placeholderChildren[0]||null;if(!o)break;o.paramName&&(a[o.paramName]=p),i=!0}else o=g}return(o===null||o.data===null)&&c!==null&&(o=c,a[o.paramName||"_"]=f,i=!0),o?i?{...o.data,params:i?a:void 0}:o.data:null}function H(e,t,n){let r=!0;const a=t.split("/");let i=e.rootNode,c=0;const o=[i];for(const f of a){let s;if(s=i.children.get(f))i=s;else{const p=et(f);s=G({type:p,parent:i}),i.children.set(f,s),p===y.PLACEHOLDER?(s.paramName=f==="*"?`_${c++}`:f.slice(1),i.placeholderChildren.push(s),r=!1):p===y.WILDCARD&&(i.wildcardChildNode=s,s.paramName=f.slice(3)||"_",r=!1),o.push(s),i=s}}for(const[f,s]of o.entries())s.maxDepth=Math.max(o.length-f,s.maxDepth||0);return i.data=n,r===!0&&(e.staticRoutesMap[t]=i),i}function Qe(e,t){let n=!1;const r=t.split("/");let a=e.rootNode;for(const i of r)if(a=a.children.get(i),!a)return n;if(a.data){const i=r.at(-1)||"";a.data=null,Object.keys(a.children).length===0&&a.parent&&(a.parent.children.delete(i),a.parent.wildcardChildNode=null,a.parent.placeholderChildren=[]),n=!0}return n}function G(e={}){return{type:e.type||y.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function et(e){return e.startsWith("**")?y.WILDCARD:e[0]===":"||e==="*"?y.PLACEHOLDER:y.NORMAL}const Z=[{page:!0,$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>A(()=>import("./_...404_-ClVf18s3.js"),__vite__mapDeps([0,1,2,3])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/[...404].tsx?pick=default&pick=$css"].output.path)},path:"/*404",filePath:"/Users/ahammer/Development/ahammer/src/routes/[...404].tsx"},{page:!0,$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>A(()=>import("./index-1_YyxxKG.js"),__vite__mapDeps([4,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/index.tsx?pick=default&pick=$css"].output.path)},path:"/",filePath:"/Users/ahammer/Development/ahammer/src/routes/index.tsx"},{page:!0,$component:{src:"src/routes/blog/fix-for-deploying-static-solid-start-5.x-to-cloudflare-pages.tsx?pick=default&pick=$css",build:()=>A(()=>import("./fix-for-deploying-static-solid-start-5.x-to-cloudflare-pages-BOTHh9Nq.js"),__vite__mapDeps([5,1,6,7,2,8])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/blog/fix-for-deploying-static-solid-start-5.x-to-cloudflare-pages.tsx?pick=default&pick=$css"].output.path)},path:"/blog/fix-for-deploying-static-solid-start-5.x-to-cloudflare-pages",filePath:"/Users/ahammer/Development/ahammer/src/routes/blog/fix-for-deploying-static-solid-start-5.x-to-cloudflare-pages.tsx"},{page:!0,$component:{src:"src/routes/blog/notes-on-database-sharding.tsx?pick=default&pick=$css",build:()=>A(()=>import("./notes-on-database-sharding-Dgm9UzD0.js"),__vite__mapDeps([9,1,6,7,10])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/blog/notes-on-database-sharding.tsx?pick=default&pick=$css"].output.path)},path:"/blog/notes-on-database-sharding",filePath:"/Users/ahammer/Development/ahammer/src/routes/blog/notes-on-database-sharding.tsx"},{page:!0,$component:{src:"src/routes/blog/setting-up-square-payment-links-the-stripe-alternative.tsx?pick=default&pick=$css",build:()=>A(()=>import("./setting-up-square-payment-links-the-stripe-alternative-BfOyXeiW.js"),__vite__mapDeps([11,6,1,7,10])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/blog/setting-up-square-payment-links-the-stripe-alternative.tsx?pick=default&pick=$css"].output.path)},path:"/blog/setting-up-square-payment-links-the-stripe-alternative",filePath:"/Users/ahammer/Development/ahammer/src/routes/blog/setting-up-square-payment-links-the-stripe-alternative.tsx"}],tt=nt(Z.filter(e=>e.page));function nt(e){function t(n,r,a,i){const c=Object.values(n).find(o=>a.startsWith(o.id+"/"));return c?(t(c.children||(c.children=[]),r,a.slice(c.id.length)),n):(n.push({...r,id:a,path:a.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),n)}return e.sort((n,r)=>n.path.length-r.path.length).reduce((n,r)=>t(n,r,r.path,r.path),[])}function rt(e){return e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}Xe({routes:Z.reduce((e,t)=>{if(!rt(t))return e;let n=t.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(r,a)=>`**:${a}`);if(/:[^/]*\?/g.test(n))throw new Error(`Optional parameters are not supported in API routes: ${n}`);if(e[n])throw new Error(`Duplicate API routes for "${n}" found at "${e[n].route.path}" and "${t.path}"`);return e[n]={route:t},e},{})});function at(){function e(n){return{...n,...n.$$route?n.$$route.require().route:void 0,info:{...n.$$route?n.$$route.require().route.info:{},filesystem:!0},component:n.$component&&Je(n.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:n.children?n.children.map(e):void 0}}return tt.map(e)}let z;const it=()=>z||(z=at());var ot=k(`<nav class=mb-8><ul class="container flex items-center font-semibold flex-wrap gap-4 sm:gap-6"><li></li>|<li></li>|<li><a href="/Aaron Taylor Hammer.pdf"download="Aaron Hammer's Resume">Resume</a></li>|<li></li>|<li></li>|<li>`);function st(){const e=_e(),t=n=>n==e.pathname?"border-sky-600":"border-transparent hover:border-sky-600";return(()=>{var n=E(ot),r=n.firstChild,a=r.firstChild,i=a.nextSibling,c=i.nextSibling,o=c.nextSibling,f=o.nextSibling,s=f.nextSibling,p=s.nextSibling,g=p.nextSibling,b=g.nextSibling,$=b.nextSibling,R=$.nextSibling;return v(a,h(L,{href:"/",defaultBlack:!0,children:"Home"})),v(c,h(L,{get href(){return ce()},defaultBlack:!0,children:"Random Blog"})),v(p,h(L,{href:"https://twitter.com/ahammer_dev",defaultBlack:!0,external:!0,children:"Twitter"})),v(b,h(L,{href:"https://www.linkedin.com/in/athammer/",defaultBlack:!0,external:!0,children:"Linkedin"})),v(R,h(L,{href:"https://github.com/athammer",defaultBlack:!0,external:!0,children:"Github"})),ae(l=>{var u=`border-b-2 ${t("/")} mr-5 sm:mr-6`,m=`border-b-2 ${t("/blog")}`,d=`border-b-2 ${t("/blog")}`,S=`border-b-2 ${t("/about")}`,w=`border-b-2 ${t("/about")}`,_=`border-b-2 ${t("/about")}`;return u!==l.e&&x(a,l.e=u),m!==l.t&&x(c,l.t=m),d!==l.a&&x(f,l.a=d),S!==l.o&&x(p,l.o=S),w!==l.i&&x(b,l.i=w),_!==l.n&&x(R,l.n=_),l},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),n})()}var lt=k('<div class="max-w-5xl m-auto my-8 sm:mt-16 text-lg p-4 text-left"><!$><!/><!$><!/>');function ct(){return h(ze,{get base(){return""},root:e=>h(ie,{get children(){return h(le,{get children(){var t=E(lt),n=t.firstChild,[r,a]=B(n.nextSibling),i=r.nextSibling,[c,o]=B(i.nextSibling);return v(t,h(st,{}),r,a),v(t,()=>e.children,c,o),t}})}}),get children(){return h(it,{})}})}const ut=e=>null;var dt=k("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const ft=e=>{const t="Error | Uncaught Client Exception";return h(oe,{fallback:n=>(console.error(n),[(()=>{var r=E(dt);return v(r,t),r})(),h(ut,{code:500})]),get children(){return e.children}})};function ht(e,t){return se(e,t)}function V(e){return e.children}function mt(){return h(V,{get children(){return h(V,{get children(){return h(ft,{get children(){return h(ct,{})}})}})}})}ht(()=>h(mt,{}),document.getElementById("app"));const wt=void 0;export{wt as default};