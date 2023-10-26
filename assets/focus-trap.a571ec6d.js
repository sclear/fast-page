import{T as oe,W as C,b4 as G,a4 as I,i as $,a5 as U,r as b,d as re,_ as ue,R as y,g as m,a8 as W,X as ce,a1 as ae}from"./index.acb06b61.js";import{_ as ie}from"./index.90209fed.js";function fe(e){return e==null}class de extends Error{constructor(t){super(t),this.name="ElementPlusError"}}function Fe(e,t){throw new de(`[${e}] ${t}`)}function De(e,t){}const Ie=(...e)=>t=>{e.forEach(s=>{oe(s)?s(t):s.value=t})},te={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},Ue="update:modelValue",Pe="change",ke="input";var Ee=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(Ee||{});const O=e=>{const t=C(e)?e:[e],s=[];return t.forEach(o=>{var u;C(o)?s.push(...O(o)):G(o)&&C(o.children)?s.push(...O(o.children)):(s.push(o),G(o)&&((u=o.component)==null?void 0:u.subTree)&&s.push(...O(o.component.subTree)))}),s};let p=[];const X=e=>{const t=e;t.key===te.esc&&p.forEach(s=>s(t))},le=e=>{I(()=>{p.length===0&&document.addEventListener("keydown",X),$&&p.push(e)}),U(()=>{p=p.filter(t=>t!==e),p.length===0&&$&&document.removeEventListener("keydown",X)})},F="focus-trap.focus-after-trapped",D="focus-trap.focus-after-released",pe="focus-trap.focusout-prevented",j={cancelable:!0,bubbles:!1},ve={cancelable:!0,bubbles:!1},q="focusAfterTrapped",J="focusAfterReleased",Te=Symbol("elFocusTrap"),P=b(),A=b(0),k=b(0);let _=0;const ne=e=>{const t=[],s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const u=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||u?NodeFilter.FILTER_SKIP:o.tabIndex>=0||o===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)t.push(s.currentNode);return t},z=(e,t)=>{for(const s of e)if(!me(s,t))return s},me=(e,t)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},_e=e=>{const t=ne(e),s=z(t,e),o=z(t.reverse(),e);return[s,o]},Se=e=>e instanceof HTMLInputElement&&"select"in e,E=(e,t)=>{if(e&&e.focus){const s=document.activeElement;e.focus({preventScroll:!0}),k.value=window.performance.now(),e!==s&&Se(e)&&t&&e.select()}};function Q(e,t){const s=[...e],o=e.indexOf(t);return o!==-1&&s.splice(o,1),s}const Le=()=>{let e=[];return{push:o=>{const u=e[0];u&&o!==u&&u.pause(),e=Q(e,o),e.unshift(o)},remove:o=>{var u,f;e=Q(e,o),(f=(u=e[0])==null?void 0:u.resume)==null||f.call(u)}}},be=(e,t=!1)=>{const s=document.activeElement;for(const o of e)if(E(o,t),document.activeElement!==s)return},Z=Le(),Ae=()=>A.value>k.value,S=()=>{P.value="pointer",A.value=window.performance.now()},ee=()=>{P.value="keyboard",A.value=window.performance.now()},Ne=()=>(I(()=>{_===0&&(document.addEventListener("mousedown",S),document.addEventListener("touchstart",S),document.addEventListener("keydown",ee)),_++}),U(()=>{_--,_<=0&&(document.removeEventListener("mousedown",S),document.removeEventListener("touchstart",S),document.removeEventListener("keydown",ee))}),{focusReason:P,lastUserFocusTimestamp:A,lastAutomatedFocusTimestamp:k}),L=e=>new CustomEvent(pe,{...ve,detail:e}),we=re({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[q,J,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const s=b();let o,u;const{focusReason:f}=Ne();le(n=>{e.trapped&&!l.paused&&t("release-requested",n)});const l={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},v=n=>{if(!e.loop&&!e.trapped||l.paused)return;const{key:r,altKey:c,ctrlKey:a,metaKey:i,currentTarget:g,shiftKey:h}=n,{loop:x}=e,se=r===te.tab&&!c&&!a&&!i,T=document.activeElement;if(se&&T){const N=g,[w,R]=_e(N);if(w&&R){if(!h&&T===R){const d=L({focusReason:f.value});t("focusout-prevented",d),d.defaultPrevented||(n.preventDefault(),x&&E(w,!0))}else if(h&&[w,N].includes(T)){const d=L({focusReason:f.value});t("focusout-prevented",d),d.defaultPrevented||(n.preventDefault(),x&&E(R,!0))}}else if(T===N){const d=L({focusReason:f.value});t("focusout-prevented",d),d.defaultPrevented||n.preventDefault()}}};ue(Te,{focusTrapRef:s,onKeydown:v}),y(()=>e.focusTrapEl,n=>{n&&(s.value=n)},{immediate:!0}),y([s],([n],[r])=>{n&&(n.addEventListener("keydown",v),n.addEventListener("focusin",V),n.addEventListener("focusout",M)),r&&(r.removeEventListener("keydown",v),r.removeEventListener("focusin",V),r.removeEventListener("focusout",M))});const K=n=>{t(q,n)},H=n=>t(J,n),V=n=>{const r=m(s);if(!r)return;const c=n.target,a=n.relatedTarget,i=c&&r.contains(c);e.trapped||a&&r.contains(a)||(o=a),i&&t("focusin",n),!l.paused&&e.trapped&&(i?u=c:E(u,!0))},M=n=>{const r=m(s);if(!(l.paused||!r))if(e.trapped){const c=n.relatedTarget;!fe(c)&&!r.contains(c)&&setTimeout(()=>{if(!l.paused&&e.trapped){const a=L({focusReason:f.value});t("focusout-prevented",a),a.defaultPrevented||E(u,!0)}},0)}else{const c=n.target;c&&r.contains(c)||t("focusout",n)}};async function Y(){await W();const n=m(s);if(n){Z.push(l);const r=n.contains(document.activeElement)?o:document.activeElement;if(o=r,!n.contains(r)){const a=new Event(F,j);n.addEventListener(F,K),n.dispatchEvent(a),a.defaultPrevented||W(()=>{let i=e.focusStartEl;ce(i)||(E(i),document.activeElement!==i&&(i="first")),i==="first"&&be(ne(n),!0),(document.activeElement===r||i==="container")&&E(n)})}}}function B(){const n=m(s);if(n){n.removeEventListener(F,K);const r=new CustomEvent(D,{...j,detail:{focusReason:f.value}});n.addEventListener(D,H),n.dispatchEvent(r),!r.defaultPrevented&&(f.value=="keyboard"||!Ae()||n.contains(document.activeElement))&&E(o!=null?o:document.body),n.removeEventListener(D,H),Z.remove(l)}}return I(()=>{e.trapped&&Y(),y(()=>e.trapped,n=>{n?Y():B()})}),U(()=>{e.trapped&&B()}),{onKeydown:v}}});function Re(e,t,s,o,u,f){return ae(e.$slots,"default",{handleKeydown:e.onKeydown})}var Ke=ie(we,[["render",Re],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{Pe as C,te as E,Te as F,ke as I,Ee as P,Ue as U,Ke as a,Ie as c,De as d,O as f,fe as i,Fe as t};
