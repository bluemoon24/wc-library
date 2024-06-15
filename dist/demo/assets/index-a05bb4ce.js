(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function h(){}function B(e){return e()}function C(){return Object.create(null)}function A(e){e.forEach(B)}function P(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Q(e){return Object.keys(e).length===0}function y(e,t){e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode&&e.parentNode.removeChild(e)}function F(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function L(e){return document.createElement(e)}function _(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function R(e){return document.createTextNode(e)}function U(){return R("")}function l(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function V(e){return Array.from(e.childNodes)}let E;function x(e){E=e}function W(){if(!E)throw new Error("Function called outside component initialization");return E}function X(e){W().$$.on_mount.push(e)}const v=[],I=[],k=[],z=[],Y=Promise.resolve();let S=!1;function Z(){S||(S=!0,Y.then(q))}function j(e){k.push(e)}const M=new Set;let $=0;function q(){if($!==0)return;const e=E;do{try{for(;$<v.length;){const t=v[$];$++,x(t),ee(t.$$)}}catch(t){throw v.length=0,$=0,t}for(x(null),v.length=0,$=0;I.length;)I.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];M.has(n)||(M.add(n),n())}k.length=0}while(v.length);for(;z.length;)z.pop()();S=!1,M.clear(),x(e)}function ee(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}const N=new Set;let te;function H(e,t){e&&e.i&&(N.delete(e),e.i(t))}function ne(e,t,n,o){if(e&&e.o){if(N.has(e))return;N.add(e),te.c.push(()=>{N.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function re(e){e&&e.c()}function K(e,t,n,o){const{fragment:s,after_update:r}=e.$$;s&&s.m(t,n),o||j(()=>{const c=e.$$.on_mount.map(B).filter(P);e.$$.on_destroy?e.$$.on_destroy.push(...c):A(c),e.$$.on_mount=[]}),r.forEach(j)}function T(e,t){const n=e.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){e.$$.dirty[0]===-1&&(v.push(e),Z(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(e,t,n,o,s,r,c,u=[-1]){const a=E;x(e);const i=e.$$={fragment:null,ctx:[],props:r,update:h,not_equal:s,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:C(),dirty:u,skip_bound:!1,root:t.target||a.$$.root};c&&c(i.root);let p=!1;if(i.ctx=n?n(e,t.props||{},(d,g,...f)=>{const m=f.length?f[0]:g;return i.ctx&&s(i.ctx[d],i.ctx[d]=m)&&(!i.skip_bound&&i.bound[d]&&i.bound[d](m),p&&oe(e,d)),g}):[],i.update(),p=!0,A(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const d=V(t.target);i.fragment&&i.fragment.l(d),d.forEach(w)}else i.fragment&&i.fragment.c();t.intro&&H(e.$$.fragment),K(e,t.target,t.anchor,t.customElement),q()}x(a)}class J{$destroy(){T(this,1),this.$destroy=h}$on(t,n){if(!P(n))return h;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(t){this.$$set&&!Q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function se(e,t,n){const o=e.slice();return o[4]=t[n],o}function le(e,t,n){const o=e.slice();return o[7]=t[n],o}function ce(e){let t;return{c(){t=_("line"),l(t,"class","minor svelte-7fcxns"),l(t,"y1","42"),l(t,"y2","45"),l(t,"transform","rotate("+6*(e[4]+e[7])+")")},m(n,o){b(n,t,o)},p:h,d(n){n&&w(t)}}}function ie(e){let t,n,o=[1,2,3,4],s=[];for(let r=0;r<4;r+=1)s[r]=ce(le(e,o,r));return{c(){t=_("line");for(let r=0;r<4;r+=1)s[r].c();n=U(),l(t,"class","major svelte-7fcxns"),l(t,"y1","35"),l(t,"y2","45"),l(t,"transform","rotate("+30*e[4]+")")},m(r,c){b(r,t,c);for(let u=0;u<4;u+=1)s[u].m(r,c);b(r,n,c)},p:h,d(r){r&&w(t),F(s,r),r&&w(n)}}}function fe(e){let t,n,o,s,r,c,u,a,i,p,d=[0,5,10,15,20,25,30,35,40,45,50,55],g=[];for(let f=0;f<12;f+=1)g[f]=ie(se(e,d,f));return{c(){t=_("svg"),n=_("circle");for(let f=0;f<12;f+=1)g[f].c();o=_("line"),r=_("line"),u=_("g"),a=_("line"),i=_("line"),l(n,"class","clock-face svelte-7fcxns"),l(n,"r","48"),l(o,"class","hour svelte-7fcxns"),l(o,"y1","2"),l(o,"y2","-20"),l(o,"transform",s="rotate("+(30*e[2]+e[1]/2)+")"),l(r,"class","minute svelte-7fcxns"),l(r,"y1","4"),l(r,"y2","-30"),l(r,"transform",c="rotate("+(6*e[1]+e[0]/10)+")"),l(a,"class","second svelte-7fcxns"),l(a,"y1","10"),l(a,"y2","-38"),l(i,"class","second-counterweight svelte-7fcxns"),l(i,"y1","10"),l(i,"y2","2"),l(u,"transform",p="rotate("+6*e[0]+")"),l(t,"viewBox","-50 -50 100 100"),l(t,"class","svelte-7fcxns")},m(f,m){b(f,t,m),y(t,n);for(let O=0;O<12;O+=1)g[O].m(t,null);y(t,o),y(t,r),y(t,u),y(u,a),y(u,i)},p(f,[m]){m&6&&s!==(s="rotate("+(30*f[2]+f[1]/2)+")")&&l(o,"transform",s),m&3&&c!==(c="rotate("+(6*f[1]+f[0]/10)+")")&&l(r,"transform",c),m&1&&p!==(p="rotate("+6*f[0]+")")&&l(u,"transform",p)},i:h,o:h,d(f){f&&w(t),F(g,f)}}}function ue(e,t,n){let o,s,r,c=new Date;return X(()=>{const u=setInterval(()=>{n(3,c=new Date)},1e3);return()=>{clearInterval(u)}}),e.$$.update=()=>{e.$$.dirty&8&&n(2,o=c.getHours()),e.$$.dirty&8&&n(1,s=c.getMinutes()),e.$$.dirty&8&&n(0,r=c.getSeconds())},[r,s,o,c]}class ae extends J{constructor(t){super(),G(this,t,ue,fe,D,{})}}function de(e){let t,n,o,s;return o=new ae({}),{c(){t=L("main"),n=L("p"),re(o.$$.fragment),l(n,"class","container svelte-1wszdkc"),l(t,"class","svelte-1wszdkc")},m(r,c){b(r,t,c),y(t,n),K(o,n,null),s=!0},p:h,i(r){s||(H(o.$$.fragment,r),s=!0)},o(r){ne(o.$$.fragment,r),s=!1},d(r){r&&w(t),T(o)}}}class _e extends J{constructor(t){super(),G(this,t,null,de,D,{})}}new _e({target:document.getElementById("app")});