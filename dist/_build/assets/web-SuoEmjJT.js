const c={context:void 0,registry:void 0};function T(e){c.context=e}function Le(){return{...c.context,id:`${c.context.id}${c.context.count++}-`,count:0}}const Ve=(e,t)=>e===t,G=Symbol("solid-proxy"),X={equals:Ve};let _=null,qe=Pe;const P=1,F=2,pe={owned:null,cleanups:null,context:null,owner:null},te={};var d=null;let f=null,He=null,y=null,A=null,S=null,J=0;function me(e,t){const n=y,s=d,i=e.length===0,r=t===void 0?s:t,l=i?pe:{owned:null,cleanups:null,context:r?r.context:null,owner:r},o=i?e:()=>e(()=>E(()=>j(l)));d=l,y=null;try{return C(o,!0)}finally{y=n,d=s}}function k(e,t){t=t?Object.assign({},X,t):X;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(f&&f.running&&f.sources.has(n)?i=i(n.tValue):i=i(n.value)),Ce(n,i));return[Oe.bind(n),s]}function ce(e,t,n){const s=Q(e,t,!0,P);R(s)}function V(e,t,n){const s=Q(e,t,!1,P);R(s)}function $(e,t,n){n=n?Object.assign({},X,n):X;const s=Q(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,R(s),Oe.bind(s)}function Ie(e){return e&&typeof e=="object"&&"then"in e}function Me(e,t,n){let s,i,r;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,i=e,r=t||{}):(s=e,i=t,r={});let l=null,o=te,u=null,g=!1,a=!1,h="initialValue"in r,x=typeof s=="function"&&$(s);const m=new Set,[O,N]=(r.storage||k)(r.initialValue),[v,L]=k(void 0),[D,z]=k(void 0,{equals:!1}),[oe,ue]=k(h?"ready":"unresolved");if(c.context){u=`${c.context.id}${c.context.count++}`;let w;r.ssrLoadFrom==="initial"?o=r.initialValue:c.load&&(w=c.load(u))&&(o=w)}function q(w,b,p,H){return l===w&&(l=null,H!==void 0&&(h=!0),(w===o||b===o)&&r.onHydrated&&queueMicrotask(()=>r.onHydrated(H,{value:b})),o=te,f&&w&&g?(f.promises.delete(w),g=!1,C(()=>{f.running=!0,fe(b,p)},!1)):fe(b,p)),b}function fe(w,b){C(()=>{b===void 0&&N(()=>w),ue(b!==void 0?"errored":h?"ready":"unresolved"),L(b);for(const p of m.keys())p.decrement();m.clear()},!1)}function Z(){const w=B&&Ee(B),b=O(),p=v();if(p!==void 0&&!l)throw p;return y&&!y.user&&w&&ce(()=>{D(),l&&(w.resolved&&f&&g?f.promises.add(l):m.has(w)||(w.increment(),m.add(w)))}),b}function ee(w=!0){if(w!==!1&&a)return;a=!1;const b=x?x():s;if(g=f&&f.running,b==null||b===!1){q(l,E(O));return}f&&l&&f.promises.delete(l);const p=o!==te?o:E(()=>i(b,{value:O(),refetching:w}));return Ie(p)?(l=p,"value"in p?(p.status==="success"?q(l,p.value,void 0,b):q(l,void 0,void 0,b),p):(a=!0,queueMicrotask(()=>a=!1),C(()=>{ue(h?"refreshing":"pending"),z()},!1),p.then(H=>q(p,H,void 0,b),H=>q(p,void 0,ke(H),b)))):(q(l,p,void 0,b),p)}return Object.defineProperties(Z,{state:{get:()=>oe()},error:{get:()=>v()},loading:{get(){const w=oe();return w==="pending"||w==="refreshing"}},latest:{get(){if(!h)return Z();const w=v();if(w&&!l)throw w;return O()}}}),x?ce(()=>ee(!1)):ee(!1),[Z,{refetch:ee,mutate:N}]}function E(e){if(y===null)return e();const t=y;y=null;try{return e()}finally{y=t}}function mt(e,t,n){const s=Array.isArray(e);let i;return r=>{let l;if(s){l=Array(e.length);for(let u=0;u<e.length;u++)l[u]=e[u]()}else l=e();const o=E(()=>t(l,i,r));return i=l,o}}function Se(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function De(e,t){_||(_=Symbol("error")),d=Q(void 0,void 0,!0),d.context={...d.context,[_]:[t]},f&&f.running&&f.sources.add(d);try{return e()}catch(n){K(n)}finally{d=d.owner}}function _e(){return d}function St(e,t){const n=d,s=y;d=e,y=null;try{return C(t,!0)}catch(i){K(i)}finally{d=n,y=s}}function At(e){if(f&&f.running)return e(),f.done;const t=y,n=d;return Promise.resolve().then(()=>{y=t,d=n;let s;return B&&(s=f||(f={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(i=>s.resolve=i)),s.running=!0),C(e,!1),y=d=null,s?s.done:void 0})}const[Et,ae]=k(!1);function Fe(e){S.push.apply(S,e),e.length=0}function Ae(e,t){const n=Symbol("context");return{id:n,Provider:Ke(n),defaultValue:e}}function Ee(e){return d&&d.context&&d.context[e.id]!==void 0?d.context[e.id]:e.defaultValue}function Be(e){const t=$(e),n=$(()=>se(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let B;function Ue(){return B||(B=Ae())}function Oe(){const e=f&&f.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===P)R(this);else{const t=A;A=null,C(()=>W(this),!1),A=t}if(y){const t=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(t)):(y.sources=[this],y.sourceSlots=[t]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return e&&f.sources.has(this)?this.tValue:this.value}function Ce(e,t,n){let s=f&&f.running&&f.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(f){const i=f.running;(i||!n&&f.sources.has(e))&&(f.sources.add(e),e.tValue=t),i||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&C(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],l=f&&f.running;l&&f.disposed.has(r)||((l?!r.tState:!r.state)&&(r.pure?A.push(r):S.push(r),r.observers&&Te(r)),l?r.tState=P:r.state=P)}if(A.length>1e6)throw A=[],new Error},!1)}return t}function R(e){if(!e.fn)return;j(e);const t=J;de(e,f&&f.running&&f.sources.has(e)?e.tValue:e.value,t),f&&!f.running&&f.sources.has(e)&&queueMicrotask(()=>{C(()=>{f&&(f.running=!0),y=d=e,de(e,e.tValue,t),y=d=null},!1)})}function de(e,t,n){let s;const i=d,r=y;y=d=e;try{s=e.fn(t)}catch(l){return e.pure&&(f&&f.running?(e.tState=P,e.tOwned&&e.tOwned.forEach(j),e.tOwned=void 0):(e.state=P,e.owned&&e.owned.forEach(j),e.owned=null)),e.updatedAt=n+1,K(l)}finally{y=r,d=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ce(e,s,!0):f&&f.running&&e.pure?(f.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function Q(e,t,n,s=P,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:d?d.context:null,pure:n};return f&&f.running&&(r.state=0,r.tState=s),d===null||d!==pe&&(f&&f.running&&d.pure?d.tOwned?d.tOwned.push(r):d.tOwned=[r]:d.owned?d.owned.push(r):d.owned=[r]),r}function $e(e){const t=f&&f.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===F)return W(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<J);){if(t&&f.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let i=e,r=n[s+1];for(;(i=i.owner)&&i!==r;)if(f.disposed.has(i))return}if((t?e.tState:e.state)===P)R(e);else if((t?e.tState:e.state)===F){const i=A;A=null,C(()=>W(e,n[0]),!1),A=i}}}function C(e,t){if(A)return e();let n=!1;t||(A=[]),S?n=!0:S=[],J++;try{const s=e();return Re(n),s}catch(s){n||(S=null),A=null,K(s)}}function Re(e){if(A&&(Pe(A),A=null),e)return;let t;if(f){if(!f.promises.size&&!f.queue.size){const s=f.sources,i=f.disposed;S.push.apply(S,f.effects),t=f.resolve;for(const r of S)"tState"in r&&(r.state=r.tState),delete r.tState;f=null,C(()=>{for(const r of i)j(r);for(const r of s){if(r.value=r.tValue,r.owned)for(let l=0,o=r.owned.length;l<o;l++)j(r.owned[l]);r.tOwned&&(r.owned=r.tOwned),delete r.tValue,delete r.tOwned,r.tState=0}ae(!1)},!1)}else if(f.running){f.running=!1,f.effects.push.apply(f.effects,S),S=null,ae(!0);return}}const n=S;S=null,n.length&&C(()=>qe(n),!1),t&&t()}function Pe(e){for(let t=0;t<e.length;t++)$e(e[t])}function W(e,t){const n=f&&f.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];if(i.sources){const r=n?i.tState:i.state;r===P?i!==t&&(!i.updatedAt||i.updatedAt<J)&&$e(i):r===F&&W(i,t)}}}function Te(e){const t=f&&f.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(t?!s.tState:!s.state)&&(t?s.tState=F:s.state=F,s.pure?A.push(s):S.push(s),s.observers&&Te(s))}}function j(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),l=n.observerSlots.pop();s<i.length&&(r.sourceSlots[l]=s,i[s]=r,n.observerSlots[s]=l)}}if(f&&f.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)j(e.tOwned[t]);delete e.tOwned}Ne(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)j(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}f&&f.running?e.tState=0:e.state=0}function Ne(e,t){if(t||(e.tState=0,f.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)Ne(e.owned[n])}function ke(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function he(e,t,n){try{for(const s of t)s(e)}catch(s){K(s,n&&n.owner||null)}}function K(e,t=d){const n=_&&t&&t.context&&t.context[_],s=ke(e);if(!n)throw s;S?S.push({fn(){he(s,n,t)},state:P}):he(s,n,t)}function se(e){if(typeof e=="function"&&!e.length)return se(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=se(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Ke(e,t){return function(s){let i;return V(()=>i=E(()=>(d.context={...d.context,[e]:s.value},Be(()=>s.children))),void 0),i}}let je=!1;function Ye(){je=!0}function Ge(e,t){if(je&&c.context){const n=c.context;T(Le());const s=E(()=>e(t||{}));return T(n),s}return E(()=>e(t||{}))}function Y(){return!0}const ie={get(e,t,n){return t===G?n:e.get(t)},has(e,t){return t===G?!0:e.has(t)},set:Y,deleteProperty:Y,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Y,deleteProperty:Y}},ownKeys(e){return e.keys()}};function ne(e){return(e=typeof e=="function"?e():e)?e:{}}function Xe(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Ot(...e){let t=!1;for(let l=0;l<e.length;l++){const o=e[l];t=t||!!o&&G in o,e[l]=typeof o=="function"?(t=!0,$(o)):o}if(t)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const u=ne(e[o])[l];if(u!==void 0)return u}},has(l){for(let o=e.length-1;o>=0;o--)if(l in ne(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(ne(e[o])));return[...new Set(l)]}},ie);const n={},s=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const u=Object.getOwnPropertyNames(o);for(let g=u.length-1;g>=0;g--){const a=u[g];if(a==="__proto__"||a==="constructor")continue;const h=Object.getOwnPropertyDescriptor(o,a);if(!s[a])s[a]=h.get?{enumerable:!0,configurable:!0,get:Xe.bind(n[a]=[h.get.bind(o)])}:h.value!==void 0?h:void 0;else{const x=n[a];x&&(h.get?x.push(h.get.bind(o)):h.value!==void 0&&x.push(()=>h.value))}}}const i={},r=Object.keys(s);for(let l=r.length-1;l>=0;l--){const o=r[l],u=s[o];u&&u.get?Object.defineProperty(i,o,u):i[o]=u?u.value:void 0}return i}function Ct(e,...t){if(G in e){const i=new Set(t.length>1?t.flat():t[0]),r=t.map(l=>new Proxy({get(o){return l.includes(o)?e[o]:void 0},has(o){return l.includes(o)&&o in e},keys(){return l.filter(o=>o in e)}},ie));return r.push(new Proxy({get(l){return i.has(l)?void 0:e[l]},has(l){return i.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!i.has(l))}},ie)),r}const n={},s=t.map(()=>({}));for(const i of Object.getOwnPropertyNames(e)){const r=Object.getOwnPropertyDescriptor(e,i),l=!r.get&&!r.set&&r.enumerable&&r.writable&&r.configurable;let o=!1,u=0;for(const g of t)g.includes(i)&&(o=!0,l?s[u][i]=r.value:Object.defineProperty(s[u],i,r)),++u;o||(l?n[i]=r.value:Object.defineProperty(n,i,r))}return[...s,n]}function $t(e){let t,n;const s=i=>{const r=c.context;if(r){const[o,u]=k();c.count||(c.count=0),c.count++,(n||(n=e())).then(g=>{T(r),c.count--,u(()=>g.default),T()}),t=o}else if(!t){const[o]=Me(()=>(n||(n=e())).then(u=>u.default));t=o}let l;return $(()=>(l=t())&&E(()=>{if(!r)return l(i);const o=c.context;T(r);const u=l(i);return T(o),u}))};return s.preload=()=>n||((n=e()).then(i=>t=()=>i.default),n),s}let We=0;function Pt(){const e=c.context;return e?`${e.id}${e.count++}`:`cl-${We++}`}const Je=e=>`Stale read from <${e}>.`;function Tt(e){const t=e.keyed,n=$(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return $(()=>{const s=n();if(s){const i=e.children;return typeof i=="function"&&i.length>0?E(()=>i(t?s:()=>{if(!E(n))throw Je("Show");return e.when})):i}return e.fallback},void 0,void 0)}let M;function Nt(){M&&[...M].forEach(e=>e())}function kt(e){let t;c.context&&c.load&&(t=c.load(c.context.id+c.context.count));const[n,s]=k(t,void 0);return M||(M=new Set),M.add(s),Se(()=>M.delete(s)),$(()=>{let i;if(i=n()){const r=e.fallback;return typeof r=="function"&&r.length?E(()=>r(i,()=>s())):r}return De(()=>e.children,s)},void 0,void 0)}const Qe=Ae();function jt(e){let t=0,n,s,i,r,l;const[o,u]=k(!1),g=Ue(),a={increment:()=>{++t===1&&u(!0)},decrement:()=>{--t===0&&u(!1)},inFallback:o,effects:[],resolved:!1},h=_e();if(c.context&&c.load){const O=c.context.id+c.context.count;let N=c.load(O);if(N&&(typeof N!="object"||N.status!=="success"?i=N:c.gather(O)),i&&i!=="$$f"){const[v,L]=k(void 0,{equals:!1});r=v,i.then(()=>{if(c.done)return L();c.gather(O),T(s),L(),T()},D=>{l=D,L()})}}const x=Ee(Qe);x&&(n=x.register(a.inFallback));let m;return Se(()=>m&&m()),Ge(g.Provider,{value:a,get children(){return $(()=>{if(l)throw l;if(s=c.context,r)return r(),r=void 0;s&&i==="$$f"&&T();const O=$(()=>e.children);return $(N=>{const v=a.inFallback(),{showContent:L=!0,showFallback:D=!0}=n?n():{};if((!v||i&&i!=="$$f")&&L)return a.resolved=!0,m&&m(),m=s=i=void 0,Fe(a.effects),O();if(D)return m?N:me(z=>(m=z,s&&(T({id:s.id+"f",count:0}),s=void 0),e.fallback),h)})})}})}const ze=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ze=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ze]),et=new Set(["innerHTML","textContent","innerText","children"]),tt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),nt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function st(e,t){const n=nt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const it=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),rt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function lt(e,t,n){let s=n.length,i=t.length,r=s,l=0,o=0,u=t[i-1].nextSibling,g=null;for(;l<i||o<r;){if(t[l]===n[o]){l++,o++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===l){const a=r<s?o?n[o-1].nextSibling:n[r-o]:u;for(;o<r;)e.insertBefore(n[o++],a)}else if(r===o)for(;l<i;)(!g||!g.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[o]===t[i-1]){const a=t[--i].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--r],a),t[i]=n[r]}else{if(!g){g=new Map;let h=o;for(;h<r;)g.set(n[h],h++)}const a=g.get(t[l]);if(a!=null)if(o<a&&a<r){let h=l,x=1,m;for(;++h<i&&h<r&&!((m=g.get(t[h]))==null||m!==a+x);)x++;if(x>a-o){const O=t[l];for(;o<a;)e.insertBefore(n[o++],O)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const ge="_$DX_DELEGATE";function ot(e,t,n,s={}){let i;return me(r=>{i=r,t===document?e():yt(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function vt(e,t,n){let s;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},r=()=>(s||(s=i())).cloneNode(!0);return r.cloneNode=r,r}function ut(e,t=window.document){const n=t[ge]||(t[ge]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,ve))}}function Lt(e,t,n){c.context&&e.isConnected||(e[t]=n)}function re(e,t,n){c.context&&e.isConnected||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function ft(e,t,n,s){c.context&&e.isConnected||(s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s))}function ct(e,t){c.context&&e.isConnected||(t==null?e.removeAttribute("class"):e.className=t)}function at(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=r=>i.call(e,n[1],r))}else e.addEventListener(t,n)}function dt(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let r,l;for(r=0,l=i.length;r<l;r++){const o=i[r];!o||o==="undefined"||t[o]||(ye(e,o,!1),delete n[o])}for(r=0,l=s.length;r<l;r++){const o=s[r],u=!!t[o];!o||o==="undefined"||n[o]===u||!u||(ye(e,o,!0),n[o]=u)}return n}function ht(e,t,n){if(!t)return n?re(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,r;for(r in n)t[r]==null&&s.removeProperty(r),delete n[r];for(r in t)i=t[r],i!==n[r]&&(s.setProperty(r,i),n[r]=i);return n}function Vt(e,t={},n,s){const i={};return s||V(()=>i.children=U(e,t.children,i.children)),V(()=>typeof t.ref=="function"?gt(t.ref,e):t.ref=e),V(()=>wt(e,t,n,!0,i,!0)),i}function gt(e,t,n){return E(()=>e(t,n))}function yt(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return U(e,t,s,n);V(i=>U(e,t(),i,n),s)}function wt(e,t,n,s,i={},r=!1){t||(t={});for(const l in i)if(!(l in t)){if(l==="children")continue;i[l]=we(e,l,null,i[l],n,r)}for(const l in t){if(l==="children")continue;const o=t[l];i[l]=we(e,l,o,i[l],n,r)}}function bt(e,t,n={}){c.completed=globalThis._$HY.completed,c.events=globalThis._$HY.events,c.load=i=>globalThis._$HY.r[i],c.has=i=>i in globalThis._$HY.r,c.gather=i=>xe(t,i),c.registry=new Map,c.context={id:n.renderId||"",count:0},xe(t,n.renderId);const s=ot(e,t,[...t.childNodes],n);return c.context=null,s}function qt(e){let t,n;return!c.context||!(t=c.registry.get(n=pt()))?e():(c.completed&&c.completed.add(t),c.registry.delete(n),t)}function Ht(e){let t=e,n=0,s=[];if(c.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="$")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function It(){c.events&&!c.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=c;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;ve(s),t.shift()}}),c.events.queued=!0)}function xt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ye(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,r=s.length;i<r;i++)e.classList.toggle(s[i],n)}function we(e,t,n,s,i,r){let l,o,u,g,a;if(t==="style")return ht(e,n,s);if(t==="classList")return dt(e,n,s);if(n===s)return s;if(t==="ref")r||n(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);s&&e.removeEventListener(h,s),n&&e.addEventListener(h,n)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);s&&e.removeEventListener(h,s,!0),n&&e.addEventListener(h,n,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),x=it.has(h);if(!x&&s){const m=Array.isArray(s)?s[0]:s;e.removeEventListener(h,m)}(x||n)&&(at(e,h,n,x),x&&ut([h]))}else if(t.slice(0,5)==="attr:")re(e,t.slice(5),n);else if((a=t.slice(0,5)==="prop:")||(u=et.has(t))||!i&&((g=st(t,e.tagName))||(o=Ze.has(t)))||(l=e.nodeName.includes("-"))){if(a)t=t.slice(5),o=!0;else if(c.context&&e.isConnected)return n;t==="class"||t==="className"?ct(e,n):l&&!o&&!u?e[xt(t)]=n:e[g||t]=n}else{const h=i&&t.indexOf(":")>-1&&rt[t.split(":")[0]];h?ft(e,h,t,n):re(e,tt[t]||t,n)}return n}function ve(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),c.registry&&!c.done&&(c.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function U(e,t,n,s,i){const r=!!c.context&&e.isConnected;if(r){!n&&(n=[...e.childNodes]);let u=[];for(let g=0;g<n.length;g++){const a=n[g];a.nodeType===8&&a.data.slice(0,2)==="!$"?a.remove():u.push(a)}n=u}for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(r)return n;if(l==="number"&&(t=t.toString()),o){let u=n[0];u&&u.nodeType===3?u.data!==t&&(u.data=t):u=document.createTextNode(t),n=I(e,n,s,u)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(r)return n;n=I(e,n,s)}else{if(l==="function")return V(()=>{let u=t();for(;typeof u=="function";)u=u();n=U(e,u,n,s)}),()=>n;if(Array.isArray(t)){const u=[],g=n&&Array.isArray(n);if(le(u,t,n,i))return V(()=>n=U(e,u,n,s,!0)),()=>n;if(r){if(!u.length)return n;if(s===void 0)return[...e.childNodes];let a=u[0],h=[a];for(;(a=a.nextSibling)!==s;)h.push(a);return n=h}if(u.length===0){if(n=I(e,n,s),o)return n}else g?n.length===0?be(e,u,s):lt(e,n,u):(n&&I(e),be(e,u));n=u}else if(t.nodeType){if(r&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=I(e,n,s,t);I(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function le(e,t,n,s){let i=!1;for(let r=0,l=t.length;r<l;r++){let o=t[r],u=n&&n[e.length],g;if(!(o==null||o===!0||o===!1))if((g=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=le(e,o,u)||i;else if(g==="function")if(s){for(;typeof o=="function";)o=o();i=le(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||i}else e.push(o),i=!0;else{const a=String(o);u&&u.nodeType===3&&u.data===a?e.push(u):e.push(document.createTextNode(a))}}return i}function be(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function I(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(i!==o){const u=o.parentNode===e;!r&&!l?u?e.replaceChild(i,o):e.insertBefore(i,n):u&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function xe(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],r=i.getAttribute("data-hk");(!t||r.startsWith(t))&&!c.registry.has(r)&&c.registry.set(r,i)}}function pt(){const e=c.context;return`${e.id}${e.count++}`}const Mt=()=>{},Dt=!1,_t=(...e)=>(Ye(),bt(...e));export{Ae as A,Nt as B,At as C,Dt as D,kt as E,Mt as F,Ct as G,re as H,c as I,Pt as J,Tt as S,$ as a,Ge as b,Be as c,me as d,k as e,Se as f,_e as g,ut as h,qt as i,yt as j,V as k,$t as l,Ot as m,ct as n,mt as o,jt as p,Ht as q,It as r,Vt as s,vt as t,E as u,_t as v,Me as w,Lt as x,St as y,Ee as z};
