(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function D(){}function z(e){return e()}function B(){return Object.create(null)}function U(e){e.forEach(z)}function K(e){return typeof e=="function"}function Y(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function te(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function G(e,t,n){e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function I(e){return document.createTextNode(e)}function S(){return I(" ")}function _(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function F(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ne(e){return Array.from(e.childNodes)}function re(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function b(e,t){e.value=t??""}function ie(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let j;function v(e){j=e}const $=[],M=[],x=[],H=[],oe=Promise.resolve();let E=!1;function se(){E||(E=!0,oe.then(J))}function O(e){x.push(e)}const A=new Set;let k=0;function J(){if(k!==0)return;const e=j;do{try{for(;k<$.length;){const t=$[k];k++,v(t),le(t.$$)}}catch(t){throw $.length=0,k=0,t}for(v(null),$.length=0,k=0;M.length;)M.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];A.has(n)||(A.add(n),n())}x.length=0}while($.length);for(;H.length;)H.pop()();E=!1,A.clear(),v(e)}function le(e){if(e.fragment!==null){e.update(),U(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}const L=new Set;let ue;function Q(e,t){e&&e.i&&(L.delete(e),e.i(t))}function ae(e,t,n,i){if(e&&e.o){if(L.has(e))return;L.add(e),ue.c.push(()=>{L.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ce(e){e&&e.c()}function W(e,t,n,i){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),i||O(()=>{const l=e.$$.on_mount.map(z).filter(K);e.$$.on_destroy?e.$$.on_destroy.push(...l):U(l),e.$$.on_mount=[]}),o.forEach(O)}function X(e,t){const n=e.$$;n.fragment!==null&&(U(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(e,t){e.$$.dirty[0]===-1&&($.push(e),se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,i,r,o,l,p=[-1]){const f=j;v(e);const s=e.$$={fragment:null,ctx:[],props:o,update:D,not_equal:r,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:B(),dirty:p,skip_bound:!1,root:t.target||f.$$.root};l&&l(s.root);let m=!1;if(s.ctx=n?n(e,t.props||{},(u,P,...y)=>{const w=y.length?y[0]:P;return s.ctx&&r(s.ctx[u],s.ctx[u]=w)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](w),m&&de(e,u)),P}):[],s.update(),m=!0,U(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){const u=ne(t.target);s.fragment&&s.fragment.l(u),u.forEach(R)}else s.fragment&&s.fragment.c();t.intro&&Q(e.$$.fragment),W(e,t.target,t.anchor,t.customElement),J()}v(f)}class ee{$destroy(){X(this,1),this.$destroy=D}$on(t,n){if(!K(n))return D;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!te(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}let N;const fe=new Uint8Array(16);function ye(){if(!N&&(N=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!N))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return N(fe)}const a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));function pe(e,t=0){return(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase()}const ge=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),q={randomUUID:ge};function C(e,t,n){if(q.randomUUID&&!t&&!e)return q.randomUUID();e=e||{};const i=e.random||(e.rng||ye)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){n=n||0;for(let r=0;r<16;++r)t[n+r]=i[r];return t}return pe(i)}function me(e){let t,n,i,r,o,l,p,f,s,m,u,P,y,w,T,V;return{c(){t=g("main"),n=g("p"),n.textContent="DNS:",i=S(),r=g("input"),o=S(),l=g("p"),p=I(e[0]),f=S(),s=g("p"),s.textContent="Fallback DNS:",m=S(),u=g("input"),P=S(),y=g("a"),w=I("Download!"),F(y,"href",e[2]),ie(y,"display","block")},m(d,h){G(d,t,h),c(t,n),c(t,i),c(t,r),b(r,e[0]),c(t,o),c(t,l),c(l,p),c(t,f),c(t,s),c(t,m),c(t,u),b(u,e[1]),c(t,P),c(t,y),c(y,w),T||(V=[_(r,"input",e[4]),_(r,"change",e[3]),_(r,"keydown",e[3]),_(u,"input",e[5]),_(u,"change",e[3]),_(u,"keydown",e[3])],T=!0)},p(d,[h]){h&1&&r.value!==d[0]&&b(r,d[0]),h&1&&re(p,d[0]),h&2&&u.value!==d[1]&&b(u,d[1]),h&4&&F(y,"href",d[2])},i:D,o:D,d(d){d&&R(t),T=!1,U(V)}}}function he(e,t,n){let i,r="",o="",l,p,f=()=>{r!==""&&(i=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
	<dict>
		<key>PayloadDisplayName</key>
		<string>Custom DNS: ${r}</string>
		<key>PayloadOrganization</key>
		<string>junengames.ml</string>
		<key>PayloadDescription</key>
		<string>This profile adds a custom DNS to your iDevice</string>
		<key>PayloadIdentifier</key>
		<string>${C()}</string>
		<key>PayloadScope</key>
		<string>User</string>
		<key>PayloadType</key>
		<string>Configuration</string>
		<key>PayloadUUID</key>
		<string>${C()}</string>
		<key>PayloadVersion</key>
		<integer>1</integer>
		<key>PayloadContent</key>
		<array>
			<dict>
				<key>DNSSettings</key>
				<dict>
					<key>DNSProtocol</key>
					<string>HTTPS</string>
					<key>ServerAddresses</key>
					<array>
						<string>${r}</string>
                        <string>${o}</string>
					</array>
                    <key>ServerURL</key>
					<string>https://junengames.ml</string>
				</dict>
				<key>PayloadType</key>
				<string>com.apple.dnsSettings.managed</string>
				<key>PayloadIdentifier</key>
				<string>${C()}</string>
				<key>PayloadUUID</key>
				<string>${C()}</string>
				<key>PayloadDisplayName</key>
				<string>Custom DNS</string>
				<key>PayloadVersion</key>
				<integer>1</integer>
			</dict>
		</array>
		<key>OnDemandRules</key>
		<array>
			<dict>
				<key>Action</key>
				<string>Connect</string>
				<key>InterfaceTypeMatch</key>
				<string>Cellular</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>Connect</string>
				<key>URLStringProbe</key>
				<string>http://captive.apple.com/hotspot-detect.html</string>
			</dict>
		</array>
	</dict>
</plist>
`,l=new Blob([i],{type:"application/x-apple-aspen-config"}),n(2,p=URL.createObjectURL(l)))};function s(){r=this.value,n(0,r)}function m(){o=this.value,n(1,o)}return[r,o,p,f,s,m]}class _e extends ee{constructor(t){super(),Z(this,t,he,me,Y,{})}}function ke(e){let t,n,i,r;return i=new _e({}),{c(){t=g("main"),n=I(`Add a custom DNS on your (supported) Apple device
  `),ce(i.$$.fragment)},m(o,l){G(o,t,l),c(t,n),W(i,t,null),r=!0},p:D,i(o){r||(Q(i.$$.fragment,o),r=!0)},o(o){ae(i.$$.fragment,o),r=!1},d(o){o&&R(t),X(i)}}}class $e extends ee{constructor(t){super(),Z(this,t,null,ke,Y,{})}}new $e({target:document.getElementById("app")});
