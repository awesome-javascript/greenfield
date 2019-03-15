!function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=0)}([function(t,e,i){t.exports=i(1)},function(t,e,i){"use strict";i.r(e);class s{static parse(t){return new s(256*t>>0)}asInt(){return this._raw/256>>0}asDouble(){return this._raw/256}constructor(t){this._raw=t}}var r=s;class n{static uint(t){return{value:t,type:"u",size:4,optional:!1,_marshallArg:function(t){new Uint32Array(t.buffer,t.bufferOffset,1)[0]=this.value,t.bufferOffset+=this.size}}}static uintOptional(t){return{value:t,type:"u",size:4,optional:!0,_marshallArg:function(e){new Uint32Array(e.buffer,e.bufferOffset,1)[0]=null===t?0:this.value,e.bufferOffset+=this.size}}}static fileDescriptor(t){return{value:t,type:"h",size:0,optional:!1,_marshallArg:function(t){t.fds.push(this.value)}}}static fileDescriptorOptional(t){return{value:t,type:"h",size:0,optional:!0,_marshallArg:function(t){t.fds.push(this.value)}}}static int(t){return{value:t,type:"i",size:4,optional:!1,_marshallArg:function(t){new Int32Array(t.buffer,t.bufferOffset,1)[0]=this.value,t.bufferOffset+=this.size}}}static intOptional(t){return{value:t,type:"i",size:4,optional:!0,_marshallArg:function(e){new Int32Array(e.buffer,e.bufferOffset,1)[0]=null===t?0:this.value,e.bufferOffset+=this.size}}}static fixed(t){return{value:t,type:"f",size:4,optional:!1,_marshallArg:function(t){new Int32Array(t.buffer,t.bufferOffset,1)[0]=this.value._raw,t.bufferOffset+=this.size}}}static fixedOptional(t){return{value:t,type:"f",size:4,optional:!0,_marshallArg:function(e){new Int32Array(e.buffer,e.bufferOffset,1)[0]=null===t?0:this.value._raw,e.bufferOffset+=this.size}}}static object(t){return{value:t,type:"o",size:4,optional:!1,_marshallArg:function(t){new Uint32Array(t.buffer,t.bufferOffset,1)[0]=this.value.id,t.bufferOffset+=this.size}}}static objectOptional(t){return{value:t,type:"o",size:4,optional:!0,_marshallArg:function(e){new Uint32Array(e.buffer,e.bufferOffset,1)[0]=null===t?0:this.value.id,e.bufferOffset+=this.size}}}static newObject(){return{value:0,type:"n",size:4,optional:!1,_marshallArg:function(t){new Uint32Array(t.buffer,t.bufferOffset,1)[0]=this.value,t.bufferOffset+=this.size}}}static string(t){return{value:`${t}\0`,type:"s",size:4+(t.length+1+3&-4),optional:!1,_marshallArg:function(t){new Uint32Array(t.buffer,t.bufferOffset,1)[0]=this.value.length;const e=this.value.length,i=new Uint8Array(t.buffer,t.bufferOffset+4,e);for(let t=0;t<e;t++)i[t]=this.value[t].codePointAt(0);t.bufferOffset+=this.size}}}static stringOptional(t){return{value:`${t}\0`,type:"s",size:4+(null===t?0:t.length+1+3&-4),optional:!0,_marshallArg:function(t){if(null===this.value)new Uint32Array(t.buffer,t.bufferOffset,1)[0]=0;else{new Uint32Array(t.buffer,t.bufferOffset,1)[0]=this.value.length;const e=this.value.length,i=new Uint8Array(t.buffer,t.bufferOffset+4,e);for(let t=0;t<e;t++)i[t]=this.value[t].codePointAt(0)}t.bufferOffset+=this.size}}}static array(t){return{value:t,type:"a",size:4+(t.byteLength+3&-4),optional:!1,_marshallArg:function(t){new Uint32Array(t.buffer,t.bufferOffset,1)[0]=this.value.byteLength;const e=this.value.byteLength;new Uint8Array(t.buffer,t.bufferOffset+4,e).set(new Uint8Array(this.value.buffer,0,e)),t.bufferOffset+=this.size}}}static arrayOptional(t){return{value:t,type:"a",size:4+(null===t?0:t.byteLength+3&-4),optional:!0,_marshallArg:function(t){if(null===this.value)new Uint32Array(t.buffer,t.bufferOffset,1)[0]=0;else{new Uint32Array(t.buffer,t.bufferOffset,1)[0]=this.value.byteLength;const e=this.value.byteLength;new Uint8Array(t.buffer,t.bufferOffset+4,e).set(new Uint8Array(this.value.buffer,0,e))}t.bufferOffset+=this.size}}}static _checkMessageSize(t,e){if(t.consumed+e>t.size)throw new Error("Request too short.");t.consumed+=e}static u(t){return n._checkMessageSize(t,4),t.buffer[t.bufferOffset++]}static i(t){n._checkMessageSize(t,4);const e=new Int32Array(t.buffer.buffer,t.buffer.byteOffset+t.bufferOffset*Uint32Array.BYTES_PER_ELEMENT,1)[0];return t.bufferOffset+=1,e}static f(t){n._checkMessageSize(t,4);const e=new Int32Array(t.buffer.buffer,t.buffer.byteOffset+t.bufferOffset*Uint32Array.BYTES_PER_ELEMENT,1)[0];return t.bufferOffset+=1,new r(e>>0)}static o(t,e,i){n._checkMessageSize(t,4);const s=t.buffer[t.bufferOffset++];if(e&&0===s)return null;{const t=i.wlObjects[s];if(t)return t;throw new Error(`Unknown object id ${s}`)}}static n(t){return n._checkMessageSize(t,4),t.buffer[t.bufferOffset++]}static s(t,e){n._checkMessageSize(t,4);const i=t.buffer[t.bufferOffset++];if(e&&0===i)return null;{const e=i+3&-4;n._checkMessageSize(t,e);const s=new Uint8Array(t.buffer.buffer,t.buffer.byteOffset+t.bufferOffset*Uint32Array.BYTES_PER_ELEMENT,i-1);return t.bufferOffset+=e/4,String.fromCharCode(...s)}}static a(t,e){n._checkMessageSize(t,4);const i=t.buffer[t.bufferOffset++];if(e&&0===i)return null;{const e=i+3&-4;n._checkMessageSize(t,e);const s=t.buffer.buffer.slice(t.buffer.byteOffset+t.bufferOffset*Uint32Array.BYTES_PER_ELEMENT,t.buffer.byteOffset+t.bufferOffset*Uint32Array.BYTES_PER_ELEMENT+i);return t.bufferOffset+=e,s}}static h(t){if(t.fds.length>0)return t.fds.shift();throw new Error("Not enough file descriptors in message object.")}constructor(){this.wlObjects={},this.closed=!1,this._outMessages=[],this._inMessages=[]}marshallMsg(t,e,i,s){const r={buffer:new ArrayBuffer(i),fds:[],bufferOffset:0},n=new Uint32Array(r.buffer),a=new Uint16Array(r.buffer);n[0]=t,a[2]=e,a[3]=i,r.bufferOffset=8,s.forEach(t=>t._marshallArg(r)),this.onSend(r)}async message(t){if(!(this.closed||this._inMessages.push(t)>1)){for(;this._inMessages.length;){const t=this._inMessages[0];for(t.bufferOffset=0,t.consumed=0,t.size=0;t.bufferOffset<t.buffer.length;){const e=t.buffer[t.bufferOffset],i=t.buffer[t.bufferOffset+1];t.size=i>>>16;const s=65535&i;if(t.size>t.buffer.byteLength)throw new Error("Request buffer too small");const r=this.wlObjects[e];if(!r)throw new Error(`invalid object ${e}`);t.bufferOffset+=2,t.consumed=8;try{await r[s](t)}catch(t){throw console.error(`\nwlObject: ${r.constructor.name}[${s}](..)\nname: ${t.name} message: ${t.message} text: ${t.text}\nerror object stack: \n${t.stack}\n`),this.close(),t}if(this.closed)return}this._inMessages.shift()}this.flush()}}onSend(t){this.closed||this._outMessages.push(t)}flush(){this.closed||0!==this._outMessages.length&&(this.onFlush(this._outMessages),this._outMessages=[])}onFlush(t){}close(){this.closed||(Object.values(this.wlObjects).sort((t,e)=>t.id-e.id).forEach(t=>t.destroy()),this._outMessages=null,this._inMessages=null,this.closed=!0)}registerWlObject(t){if(!this.closed){if(t.id in this.wlObjects)throw new Error(`Illegal object id: ${t.id}. Already registered.`);this.wlObjects[t.id]=t}}unregisterWlObject(t){this.closed||delete this.wlObjects[t.id]}}var a=n;var o=class{constructor(t,e,i,s,r){this.fd=t,this.fdType=e,this.fdDomainUUID=i,this._onGetTransferable=s,this._onClose=r}async getTransferable(){return await this._onGetTransferable(this)}close(){this._onClose(this)}};var l=class{constructor(t){this.id=t,this._destroyPromise=new Promise(t=>this._destroyResolver=t),this._destroyListeners=[],this._destroyPromise.then(()=>this._destroyListeners.forEach(t=>t(this)))}destroy(){this._destroyResolver()}addDestroyListener(t){this._destroyListeners.push(t)}removeDestroyListener(t){this._destroyListeners=this._destroyListeners.filter(e=>e!==t)}onDestroy(){return this._destroyPromise}};class c{static create(t){return new c(t)}constructor(t){this._fdDomainUUID=t,this._webFDs={},this._nextFD=0}fromArrayBuffer(t){if(!(t instanceof ArrayBuffer))throw new TypeError("Expected first argument to be of type ArrayBuffer.");const e=this._nextFD++,i=new o(e,"ArrayBuffer",this._fdDomainUUID,()=>Promise.resolve(t),()=>{delete this._webFDs[e]});return this._webFDs[e]=i,i}fromImageBitmap(t){if(!(t instanceof ImageBitmap))throw new TypeError("Expected first argument to be of type ImageBitmap.");const e=this._nextFD++,i=new o(e,"ImageBitmap",this._fdDomainUUID,()=>Promise.resolve(t),()=>{delete this._webFDs[e]});return this._webFDs[e]=i,i}getWebFD(t){return this._webFDs[t]}}class h extends l{constructor(t,e,i){super(i),this.display=t,this._connection=e,e.registerWlObject(this)}destroy(){super.destroy(),this._connection.unregisterWlObject(this)}_marshallConstructor(t,e,i,s){const r=new i(this.display,this._connection,this.display.generateNextId());let n=8;return s.forEach(t=>{"n"===t.type&&(t.value=r.id),n+=t.size}),this._connection.marshallMsg(t,e,n,s),r}_marshall(t,e,i){let s=8;i.forEach(t=>s+=t.size),this._connection.marshallMsg(t,e,s,i)}}const{uint:f,uintOptional:u,int:p,intOptional:d,fixed:y,fixedOptional:b,object:O,objectOptional:_,newObject:m,string:g,stringOptional:w,array:x,arrayOptional:v,fileDescriptorOptional:j,fileDescriptor:D,h:A,u:S,i:z,f:E,o:M,n:P,s:B,a:U}=a;class N extends h{constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.done(S(t))}}N.protocolName="wl_callback";var C=N;const{uint:R,uintOptional:T,int:I,intOptional:k,fixed:L,fixedOptional:F,object:$,objectOptional:W,newObject:Y,string:G,stringOptional:H,array:K,arrayOptional:X,fileDescriptorOptional:q,fileDescriptor:V,h:J,u:Q,i:Z,f:tt,o:et,n:it,s:st,a:rt}=a;class nt extends h{bind(t,e,i,s){return this._marshallConstructor(this.id,0,i,[R(t),G(e),R(s),Y()])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.global(Q(t),st(t,!1),Q(t))}async 1(t){await this.listener.globalRemove(Q(t))}}nt.protocolName="wl_registry";var at=nt;const{uint:ot,uintOptional:lt,int:ct,intOptional:ht,fixed:ft,fixedOptional:ut,object:pt,objectOptional:dt,newObject:yt,string:bt,stringOptional:Ot,array:_t,arrayOptional:mt,fileDescriptorOptional:gt,fileDescriptor:wt,h:xt,u:vt,i:jt,f:Dt,o:At,n:St,s:zt,a:Et}=a;class Mt extends h{sync(){return this._marshallConstructor(this.id,0,C,[yt()])}getRegistry(){return this._marshallConstructor(this.id,1,at,[yt()])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.error(At(t,!1,this._connection),vt(t),zt(t,!1))}async 1(t){await this.listener.deleteId(vt(t))}}Mt.protocolName="wl_display",Mt.Error={invalidObject:0,invalidMethod:1,noMemory:2};var Pt=Mt;const{uint:Bt,uintOptional:Ut,int:Nt,intOptional:Ct,fixed:Rt,fixedOptional:Tt,object:It,objectOptional:kt,newObject:Lt,string:Ft,stringOptional:$t,array:Wt,arrayOptional:Yt,fileDescriptorOptional:Gt,fileDescriptor:Ht,h:Kt,u:Xt,i:qt,f:Vt,o:Jt,n:Qt,s:Zt,a:te}=a;class ee extends h{destroy(){super.destroy(),this._marshall(this.id,0,[])}attach(t,e,i){this._marshall(this.id,1,[kt(t),Nt(e),Nt(i)])}damage(t,e,i,s){this._marshall(this.id,2,[Nt(t),Nt(e),Nt(i),Nt(s)])}frame(){return this._marshallConstructor(this.id,3,C,[Lt()])}setOpaqueRegion(t){this._marshall(this.id,4,[kt(t)])}setInputRegion(t){this._marshall(this.id,5,[kt(t)])}commit(t){this._marshall(this.id,6,[Bt(t)])}setBufferTransform(t){this._marshall(this.id,7,[Nt(t)])}setBufferScale(t){this._marshall(this.id,8,[Nt(t)])}damageBuffer(t,e,i,s){this._marshall(this.id,9,[Nt(t),Nt(e),Nt(i),Nt(s)])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.enter(Jt(t,!1,this._connection))}async 1(t){await this.listener.leave(Jt(t,!1,this._connection))}}ee.protocolName="wl_surface",ee.Error={invalidScale:0,invalidTransform:1};var ie=ee;const{uint:se,uintOptional:re,int:ne,intOptional:ae,fixed:oe,fixedOptional:le,object:ce,objectOptional:he,newObject:fe,string:ue,stringOptional:pe,array:de,arrayOptional:ye,fileDescriptorOptional:be,fileDescriptor:Oe,h:_e,u:me,i:ge,f:we,o:xe,n:ve,s:je,a:De}=a;class Ae extends h{destroy(){super.destroy(),this._marshall(this.id,0,[])}add(t,e,i,s){this._marshall(this.id,1,[ne(t),ne(e),ne(i),ne(s)])}subtract(t,e,i,s){this._marshall(this.id,2,[ne(t),ne(e),ne(i),ne(s)])}constructor(t,e,i){super(t,e,i),this.listener=null}}Ae.protocolName="wl_region";var Se=Ae;const{uint:ze,uintOptional:Ee,int:Me,intOptional:Pe,fixed:Be,fixedOptional:Ue,object:Ne,objectOptional:Ce,newObject:Re,string:Te,stringOptional:Ie,array:ke,arrayOptional:Le,fileDescriptorOptional:Fe,fileDescriptor:$e,h:We,u:Ye,i:Ge,f:He,o:Ke,n:Xe,s:qe,a:Ve}=a;class Je extends h{createSurface(){return this._marshallConstructor(this.id,0,ie,[Re()])}createRegion(){return this._marshallConstructor(this.id,1,Se,[Re()])}constructor(t,e,i){super(t,e,i),this.listener=null}}Je.protocolName="wl_compositor";var Qe=Je;const{uint:Ze,uintOptional:ti,int:ei,intOptional:ii,fixed:si,fixedOptional:ri,object:ni,objectOptional:ai,newObject:oi,string:li,stringOptional:ci,array:hi,arrayOptional:fi,fileDescriptorOptional:ui,fileDescriptor:pi,h:di,u:yi,i:bi,f:Oi,o:_i,n:mi,s:gi,a:wi}=a;class xi extends h{destroy(){super.destroy(),this._marshall(this.id,0,[])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.release()}}xi.protocolName="wl_buffer";var vi=xi;const{uint:ji,uintOptional:Di,int:Ai,intOptional:Si,fixed:zi,fixedOptional:Ei,object:Mi,objectOptional:Pi,newObject:Bi,string:Ui,stringOptional:Ni,array:Ci,arrayOptional:Ri,fileDescriptorOptional:Ti,fileDescriptor:Ii,h:ki,u:Li,i:Fi,f:$i,o:Wi,n:Yi,s:Gi,a:Hi}=a;class Ki extends h{accept(t,e){this._marshall(this.id,0,[ji(t),Ni(e)])}receive(t,e){this._marshall(this.id,1,[Ui(t),Ii(e)])}destroy(){super.destroy(),this._marshall(this.id,2,[])}finish(){this._marshall(this.id,3,[])}setActions(t,e){this._marshall(this.id,4,[ji(t),ji(e)])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.offer(Gi(t,!1))}async 1(t){await this.listener.sourceActions(Li(t))}async 2(t){await this.listener.action(Li(t))}}Ki.protocolName="wl_data_offer",Ki.Error={invalidFinish:0,invalidActionMask:1,invalidAction:2,invalidOffer:3};var Xi=Ki;const{uint:qi,uintOptional:Vi,int:Ji,intOptional:Qi,fixed:Zi,fixedOptional:ts,object:es,objectOptional:is,newObject:ss,string:rs,stringOptional:ns,array:as,arrayOptional:os,fileDescriptorOptional:ls,fileDescriptor:cs,h:hs,u:fs,i:us,f:ps,o:ds,n:ys,s:bs,a:Os}=a;class _s extends h{offer(t){this._marshall(this.id,0,[rs(t)])}destroy(){super.destroy(),this._marshall(this.id,1,[])}setActions(t){this._marshall(this.id,2,[qi(t)])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.target(bs(t,!0))}async 1(t){await this.listener.send(bs(t,!1),hs(t))}async 2(t){await this.listener.cancelled()}async 3(t){await this.listener.dndDropPerformed()}async 4(t){await this.listener.dndFinished()}async 5(t){await this.listener.action(fs(t))}}_s.protocolName="wl_data_source",_s.Error={invalidActionMask:0,invalidSource:1};var ms=_s;const{uint:gs,uintOptional:ws,int:xs,intOptional:vs,fixed:js,fixedOptional:Ds,object:As,objectOptional:Ss,newObject:zs,string:Es,stringOptional:Ms,array:Ps,arrayOptional:Bs,fileDescriptorOptional:Us,fileDescriptor:Ns,h:Cs,u:Rs,i:Ts,f:Is,o:ks,n:Ls,s:Fs,a:$s}=a;class Ws extends h{startDrag(t,e,i,s){this._marshall(this.id,0,[Ss(t),As(e),Ss(i),gs(s)])}setSelection(t,e){this._marshall(this.id,1,[Ss(t),gs(e)])}release(){super.destroy(),this._marshall(this.id,2,[])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.dataOffer(new Xi(this._connection,Ls(t)))}async 1(t){await this.listener.enter(Rs(t),ks(t,!1,this._connection),Is(t),Is(t),ks(t,!0,this._connection))}async 2(t){await this.listener.leave()}async 3(t){await this.listener.motion(Rs(t),Is(t),Is(t))}async 4(t){await this.listener.drop()}async 5(t){await this.listener.selection(ks(t,!0,this._connection))}}Ws.protocolName="wl_data_device",Ws.Error={role:0};var Ys=Ws;const{uint:Gs,uintOptional:Hs,int:Ks,intOptional:Xs,fixed:qs,fixedOptional:Vs,object:Js,objectOptional:Qs,newObject:Zs,string:tr,stringOptional:er,array:ir,arrayOptional:sr,fileDescriptorOptional:rr,fileDescriptor:nr,h:ar,u:or,i:lr,f:cr,o:hr,n:fr,s:ur,a:pr}=a;class dr extends h{createDataSource(){return this._marshallConstructor(this.id,0,ms,[Zs()])}getDataDevice(t){return this._marshallConstructor(this.id,1,Ys,[Zs(),Js(t)])}constructor(t,e,i){super(t,e,i),this.listener=null}}dr.protocolName="wl_data_device_manager",dr.DndAction={none:0,copy:1,move:2,ask:4};const{uint:yr,uintOptional:br,int:Or,intOptional:_r,fixed:mr,fixedOptional:gr,object:wr,objectOptional:xr,newObject:vr,string:jr,stringOptional:Dr,array:Ar,arrayOptional:Sr,fileDescriptorOptional:zr,fileDescriptor:Er,h:Mr,u:Pr,i:Br,f:Ur,o:Nr,n:Cr,s:Rr,a:Tr}=a;class Ir extends h{pong(t){this._marshall(this.id,0,[yr(t)])}move(t,e){this._marshall(this.id,1,[wr(t),yr(e)])}resize(t,e,i){this._marshall(this.id,2,[wr(t),yr(e),yr(i)])}setToplevel(){this._marshall(this.id,3,[])}setTransient(t,e,i,s){this._marshall(this.id,4,[wr(t),Or(e),Or(i),yr(s)])}setFullscreen(t,e,i){this._marshall(this.id,5,[yr(t),yr(e),xr(i)])}setPopup(t,e,i,s,r,n){this._marshall(this.id,6,[wr(t),yr(e),wr(i),Or(s),Or(r),yr(n)])}setMaximized(t){this._marshall(this.id,7,[xr(t)])}setTitle(t){this._marshall(this.id,8,[jr(t)])}setClass(t){this._marshall(this.id,9,[jr(t)])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.ping(Pr(t))}async 1(t){await this.listener.configure(Pr(t),Br(t),Br(t))}async 2(t){await this.listener.popupDone()}}Ir.protocolName="wl_shell_surface",Ir.Resize={none:0,top:1,bottom:2,left:4,topLeft:5,bottomLeft:6,right:8,topRight:9,bottomRight:10},Ir.Transient={inactive:1},Ir.FullscreenMethod={default:0,scale:1,driver:2,fill:3};var kr=Ir;const{uint:Lr,uintOptional:Fr,int:$r,intOptional:Wr,fixed:Yr,fixedOptional:Gr,object:Hr,objectOptional:Kr,newObject:Xr,string:qr,stringOptional:Vr,array:Jr,arrayOptional:Qr,fileDescriptorOptional:Zr,fileDescriptor:tn,h:en,u:sn,i:rn,f:nn,o:an,n:on,s:ln,a:cn}=a;class hn extends h{getShellSurface(t){return this._marshallConstructor(this.id,0,kr,[Xr(),Hr(t)])}constructor(t,e,i){super(t,e,i),this.listener=null}}hn.protocolName="wl_shell",hn.Error={role:0};var fn=hn;const{uint:un,uintOptional:pn,int:dn,intOptional:yn,fixed:bn,fixedOptional:On,object:_n,objectOptional:mn,newObject:gn,string:wn,stringOptional:xn,array:vn,arrayOptional:jn,fileDescriptorOptional:Dn,fileDescriptor:An,h:Sn,u:zn,i:En,f:Mn,o:Pn,n:Bn,s:Un,a:Nn}=a;class Cn extends h{setCursor(t,e,i,s){this._marshall(this.id,0,[un(t),mn(e),dn(i),dn(s)])}release(){super.destroy(),this._marshall(this.id,1,[])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.enter(zn(t),Pn(t,!1,this._connection),Mn(t),Mn(t))}async 1(t){await this.listener.leave(zn(t),Pn(t,!1,this._connection))}async 2(t){await this.listener.motion(zn(t),Mn(t),Mn(t))}async 3(t){await this.listener.button(zn(t),zn(t),zn(t),zn(t))}async 4(t){await this.listener.axis(zn(t),zn(t),Mn(t))}async 5(t){await this.listener.frame()}async 6(t){await this.listener.axisSource(zn(t))}async 7(t){await this.listener.axisStop(zn(t),zn(t))}async 8(t){await this.listener.axisDiscrete(zn(t),En(t))}}Cn.protocolName="wl_pointer",Cn.Error={role:0},Cn.ButtonState={released:0,pressed:1},Cn.Axis={verticalScroll:0,horizontalScroll:1},Cn.AxisSource={wheel:0,finger:1,continuous:2,wheelTilt:3};var Rn=Cn;const{uint:Tn,uintOptional:In,int:kn,intOptional:Ln,fixed:Fn,fixedOptional:$n,object:Wn,objectOptional:Yn,newObject:Gn,string:Hn,stringOptional:Kn,array:Xn,arrayOptional:qn,fileDescriptorOptional:Vn,fileDescriptor:Jn,h:Qn,u:Zn,i:ta,f:ea,o:ia,n:sa,s:ra,a:na}=a;class aa extends h{release(){super.destroy(),this._marshall(this.id,0,[])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.keymap(Zn(t),Qn(t),Zn(t))}async 1(t){await this.listener.enter(Zn(t),ia(t,!1,this._connection),na(t,!1))}async 2(t){await this.listener.leave(Zn(t),ia(t,!1,this._connection))}async 3(t){await this.listener.key(Zn(t),Zn(t),Zn(t),Zn(t))}async 4(t){await this.listener.modifiers(Zn(t),Zn(t),Zn(t),Zn(t),Zn(t))}async 5(t){await this.listener.repeatInfo(ta(t),ta(t))}}aa.protocolName="wl_keyboard",aa.KeymapFormat={noKeymap:0,xkbV1:1},aa.KeyState={released:0,pressed:1};var oa=aa;const{uint:la,uintOptional:ca,int:ha,intOptional:fa,fixed:ua,fixedOptional:pa,object:da,objectOptional:ya,newObject:ba,string:Oa,stringOptional:_a,array:ma,arrayOptional:ga,fileDescriptorOptional:wa,fileDescriptor:xa,h:va,u:ja,i:Da,f:Aa,o:Sa,n:za,s:Ea,a:Ma}=a;class Pa extends h{release(){super.destroy(),this._marshall(this.id,0,[])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.down(ja(t),ja(t),Sa(t,!1,this._connection),Da(t),Aa(t),Aa(t))}async 1(t){await this.listener.up(ja(t),ja(t),Da(t))}async 2(t){await this.listener.motion(ja(t),Da(t),Aa(t),Aa(t))}async 3(t){await this.listener.frame()}async 4(t){await this.listener.cancel()}async 5(t){await this.listener.shape(Da(t),Aa(t),Aa(t))}async 6(t){await this.listener.orientation(Da(t),Aa(t))}}Pa.protocolName="wl_touch";var Ba=Pa;const{uint:Ua,uintOptional:Na,int:Ca,intOptional:Ra,fixed:Ta,fixedOptional:Ia,object:ka,objectOptional:La,newObject:Fa,string:$a,stringOptional:Wa,array:Ya,arrayOptional:Ga,fileDescriptorOptional:Ha,fileDescriptor:Ka,h:Xa,u:qa,i:Va,f:Ja,o:Qa,n:Za,s:to,a:eo}=a;class io extends h{getPointer(){return this._marshallConstructor(this.id,0,Rn,[Fa()])}getKeyboard(){return this._marshallConstructor(this.id,1,oa,[Fa()])}getTouch(){return this._marshallConstructor(this.id,2,Ba,[Fa()])}release(){super.destroy(),this._marshall(this.id,3,[])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.capabilities(qa(t))}async 1(t){await this.listener.name(to(t,!1))}}io.protocolName="wl_seat",io.Capability={pointer:1,keyboard:2,touch:4};const{uint:so,uintOptional:ro,int:no,intOptional:ao,fixed:oo,fixedOptional:lo,object:co,objectOptional:ho,newObject:fo,string:uo,stringOptional:po,array:yo,arrayOptional:bo,fileDescriptorOptional:Oo,fileDescriptor:_o,h:mo,u:go,i:wo,f:xo,o:vo,n:jo,s:Do,a:Ao}=a;class So extends h{release(){super.destroy(),this._marshall(this.id,0,[])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.geometry(wo(t),wo(t),wo(t),wo(t),wo(t),Do(t,!1),Do(t,!1),wo(t))}async 1(t){await this.listener.mode(go(t),wo(t),wo(t),wo(t))}async 2(t){await this.listener.done()}async 3(t){await this.listener.scale(wo(t))}}So.protocolName="wl_output",So.Subpixel={unknown:0,none:1,horizontalRgb:2,horizontalBgr:3,verticalRgb:4,verticalBgr:5},So.Transform={normal:0,90:1,180:2,270:3,flipped:4,flipped90:5,flipped180:6,flipped270:7},So.Mode={current:1,preferred:2};const{uint:zo,uintOptional:Eo,int:Mo,intOptional:Po,fixed:Bo,fixedOptional:Uo,object:No,objectOptional:Co,newObject:Ro,string:To,stringOptional:Io,array:ko,arrayOptional:Lo,fileDescriptorOptional:Fo,fileDescriptor:$o,h:Wo,u:Yo,i:Go,f:Ho,o:Ko,n:Xo,s:qo,a:Vo}=a;class Jo extends h{destroy(){super.destroy(),this._marshall(this.id,0,[])}setPosition(t,e){this._marshall(this.id,1,[Mo(t),Mo(e)])}placeAbove(t){this._marshall(this.id,2,[No(t)])}placeBelow(t){this._marshall(this.id,3,[No(t)])}setSync(){this._marshall(this.id,4,[])}setDesync(){this._marshall(this.id,5,[])}constructor(t,e,i){super(t,e,i),this.listener=null}}Jo.protocolName="wl_subsurface",Jo.Error={badSurface:0};var Qo=Jo;const{uint:Zo,uintOptional:tl,int:el,intOptional:il,fixed:sl,fixedOptional:rl,object:nl,objectOptional:al,newObject:ol,string:ll,stringOptional:cl,array:hl,arrayOptional:fl,fileDescriptorOptional:ul,fileDescriptor:pl,h:dl,u:yl,i:bl,f:Ol,o:_l,n:ml,s:gl,a:wl}=a;class xl extends h{destroy(){super.destroy(),this._marshall(this.id,0,[])}getSubsurface(t,e){return this._marshallConstructor(this.id,1,Qo,[ol(),nl(t),nl(e)])}constructor(t,e,i){super(t,e,i),this.listener=null}}xl.protocolName="wl_subcompositor",xl.Error={badSurface:0};const{uint:vl,uintOptional:jl,int:Dl,intOptional:Al,fixed:Sl,fixedOptional:zl,object:El,objectOptional:Ml,newObject:Pl,string:Bl,stringOptional:Ul,array:Nl,arrayOptional:Cl,fileDescriptorOptional:Rl,fileDescriptor:Tl,h:Il,u:kl,i:Ll,f:Fl,o:$l,n:Wl,s:Yl,a:Gl}=a;class Hl extends h{destroy(){super.destroy(),this._marshall(this.id,0,[])}setSize(t,e){this._marshall(this.id,1,[Dl(t),Dl(e)])}setAnchorRect(t,e,i,s){this._marshall(this.id,2,[Dl(t),Dl(e),Dl(i),Dl(s)])}setAnchor(t){this._marshall(this.id,3,[vl(t)])}setGravity(t){this._marshall(this.id,4,[vl(t)])}setConstraintAdjustment(t){this._marshall(this.id,5,[vl(t)])}setOffset(t,e){this._marshall(this.id,6,[Dl(t),Dl(e)])}constructor(t,e,i){super(t,e,i),this.listener=null}}Hl.protocolName="xdg_positioner",Hl.Error={invalidInput:0},Hl.Anchor={none:0,top:1,bottom:2,left:3,right:4,topLeft:5,bottomLeft:6,topRight:7,bottomRight:8},Hl.Gravity={none:0,top:1,bottom:2,left:3,right:4,topLeft:5,bottomLeft:6,topRight:7,bottomRight:8},Hl.ConstraintAdjustment={none:0,slideX:1,slideY:2,flipX:4,flipY:8,resizeX:16,resizeY:32};var Kl=Hl;const{uint:Xl,uintOptional:ql,int:Vl,intOptional:Jl,fixed:Ql,fixedOptional:Zl,object:tc,objectOptional:ec,newObject:ic,string:sc,stringOptional:rc,array:nc,arrayOptional:ac,fileDescriptorOptional:oc,fileDescriptor:lc,h:cc,u:hc,i:fc,f:uc,o:pc,n:dc,s:yc,a:bc}=a;class Oc extends h{destroy(){super.destroy(),this._marshall(this.id,0,[])}setParent(t){this._marshall(this.id,1,[ec(t)])}setTitle(t){this._marshall(this.id,2,[sc(t)])}setAppId(t){this._marshall(this.id,3,[sc(t)])}showWindowMenu(t,e,i,s){this._marshall(this.id,4,[tc(t),Xl(e),Vl(i),Vl(s)])}move(t,e){this._marshall(this.id,5,[tc(t),Xl(e)])}resize(t,e,i){this._marshall(this.id,6,[tc(t),Xl(e),Xl(i)])}setMaxSize(t,e){this._marshall(this.id,7,[Vl(t),Vl(e)])}setMinSize(t,e){this._marshall(this.id,8,[Vl(t),Vl(e)])}setMaximized(){this._marshall(this.id,9,[])}unsetMaximized(){this._marshall(this.id,10,[])}setFullscreen(t){this._marshall(this.id,11,[ec(t)])}unsetFullscreen(){this._marshall(this.id,12,[])}setMinimized(){this._marshall(this.id,13,[])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.configure(fc(t),fc(t),bc(t,!1))}async 1(t){await this.listener.close()}}Oc.protocolName="xdg_toplevel",Oc.ResizeEdge={none:0,top:1,bottom:2,left:4,topLeft:5,bottomLeft:6,right:8,topRight:9,bottomRight:10},Oc.State={maximized:1,fullscreen:2,resizing:3,activated:4};var _c=Oc;const{uint:mc,uintOptional:gc,int:wc,intOptional:xc,fixed:vc,fixedOptional:jc,object:Dc,objectOptional:Ac,newObject:Sc,string:zc,stringOptional:Ec,array:Mc,arrayOptional:Pc,fileDescriptorOptional:Bc,fileDescriptor:Uc,h:Nc,u:Cc,i:Rc,f:Tc,o:Ic,n:kc,s:Lc,a:Fc}=a;class $c extends h{destroy(){super.destroy(),this._marshall(this.id,0,[])}grab(t,e){this._marshall(this.id,1,[Dc(t),mc(e)])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.configure(Rc(t),Rc(t),Rc(t),Rc(t))}async 1(t){await this.listener.popupDone()}}$c.protocolName="xdg_popup",$c.Error={invalidGrab:0};var Wc=$c;const{uint:Yc,uintOptional:Gc,int:Hc,intOptional:Kc,fixed:Xc,fixedOptional:qc,object:Vc,objectOptional:Jc,newObject:Qc,string:Zc,stringOptional:th,array:eh,arrayOptional:ih,fileDescriptorOptional:sh,fileDescriptor:rh,h:nh,u:ah,i:oh,f:lh,o:ch,n:hh,s:fh,a:uh}=a;class ph extends h{destroy(){super.destroy(),this._marshall(this.id,0,[])}getToplevel(){return this._marshallConstructor(this.id,1,_c,[Qc()])}getPopup(t,e){return this._marshallConstructor(this.id,2,Wc,[Qc(),Jc(t),Vc(e)])}setWindowGeometry(t,e,i,s){this._marshall(this.id,3,[Hc(t),Hc(e),Hc(i),Hc(s)])}ackConfigure(t){this._marshall(this.id,4,[Yc(t)])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.configure(ah(t))}}ph.protocolName="xdg_surface",ph.Error={notConstructed:1,alreadyConstructed:2,unconfiguredBuffer:3};var dh=ph;const{uint:yh,uintOptional:bh,int:Oh,intOptional:_h,fixed:mh,fixedOptional:gh,object:wh,objectOptional:xh,newObject:vh,string:jh,stringOptional:Dh,array:Ah,arrayOptional:Sh,fileDescriptorOptional:zh,fileDescriptor:Eh,h:Mh,u:Ph,i:Bh,f:Uh,o:Nh,n:Ch,s:Rh,a:Th}=a;class Ih extends h{destroy(){super.destroy(),this._marshall(this.id,0,[])}createPositioner(){return this._marshallConstructor(this.id,1,Kl,[vh()])}getXdgSurface(t){return this._marshallConstructor(this.id,2,dh,[vh(),wh(t)])}pong(t){this._marshall(this.id,3,[yh(t)])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.ping(Ph(t))}}Ih.protocolName="xdg_wm_base",Ih.Error={role:0,defunctSurfaces:1,notTheTopmostPopup:2,invalidPopupParent:3,invalidSurfaceState:4,invalidPositioner:5};const{uint:kh,uintOptional:Lh,int:Fh,intOptional:$h,fixed:Wh,fixedOptional:Yh,object:Gh,objectOptional:Hh,newObject:Kh,string:Xh,stringOptional:qh,array:Vh,arrayOptional:Jh,fileDescriptorOptional:Qh,fileDescriptor:Zh,h:tf,u:ef,i:sf,f:rf,o:nf,n:af,s:of,a:lf}=a;class cf extends h{attach(t){this._marshall(this.id,0,[Zh(t)])}constructor(t,e,i){super(t,e,i),this.listener=null}async 0(t){await this.listener.detach(tf(t))}}cf.protocolName="gr_web_shm_buffer";var hf=cf;const{uint:ff,uintOptional:uf,int:pf,intOptional:df,fixed:yf,fixedOptional:bf,object:Of,objectOptional:_f,newObject:mf,string:gf,stringOptional:wf,array:xf,arrayOptional:vf,fileDescriptorOptional:jf,fileDescriptor:Df,h:Af,u:Sf,i:zf,f:Ef,o:Mf,n:Pf,s:Bf,a:Uf}=a;class Nf extends h{createWebArrayBuffer(){return this._marshallConstructor(this.id,0,hf,[mf()])}createBuffer(t,e,i){return this._marshallConstructor(this.id,1,vi,[mf(),Of(t),pf(e),pf(i)])}constructor(t,e,i){super(t,e,i),this.listener=null}}Nf.protocolName="gr_web_shm";var Cf=Nf;const{uint:Rf,uintOptional:Tf,int:If,intOptional:kf,fixed:Lf,fixedOptional:Ff,object:$f,objectOptional:Wf,newObject:Yf,string:Gf,stringOptional:Hf,array:Kf,arrayOptional:Xf,fileDescriptorOptional:qf,fileDescriptor:Vf,h:Jf,u:Qf,i:Zf,f:tu,o:eu,n:iu,s:su,a:ru}=a;class nu extends h{transfer(t){this._marshall(this.id,0,[Vf(t)])}constructor(t,e,i){super(t,e,i),this.listener=null}}nu.protocolName="gr_web_gl_buffer";var au=nu;const{uint:ou,uintOptional:lu,int:cu,intOptional:hu,fixed:fu,fixedOptional:uu,object:pu,objectOptional:du,newObject:yu,string:bu,stringOptional:Ou,array:_u,arrayOptional:mu,fileDescriptorOptional:gu,fileDescriptor:wu,h:xu,u:vu,i:ju,f:Du,o:Au,n:Su,s:zu,a:Eu}=a;class Mu extends h{createWebGlBuffer(){return this._marshallConstructor(this.id,0,au,[yu()])}createBuffer(t){return this._marshallConstructor(this.id,1,vi,[yu(),pu(t)])}constructor(t,e,i){super(t,e,i),this.listener=null}}Mu.protocolName="gr_web_gl";const Pu=c.create(([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,t=>(t^self.crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16))),Bu=new a,Uu=new class{constructor(t){this._recycledIds=[],this._connection=t,this._displayProxy=new Pt(this,this._connection,1),this._lastId=1,this._destroyResolve=null,this._destroyReject=null,this._destroyPromise=new Promise((t,e)=>{this._destroyResolve=t,this._destroyReject=e}),this._displayProxy.listener={deleteId:t=>{this._recycledIds.push(t)},error:(t,e,i)=>{this._protocolError(t,e,i)}},this.errorHandler=null}close(){this._connection.closed||(this._connection.close(),this._destroyResolve())}_protocolError(t,e,i){this._connection.closed||(this._connection.close(),this._destroyReject(new Error(`Protocol error. type: ${t.constructor.name}, id: ${t.id}, code: ${e}, message: ${i}`)))}onClose(){return this._destroyPromise}getRegistry(){return this._displayProxy.getRegistry()}generateNextId(){return this._recycledIds.length?this._recycledIds.shift():++this._lastId}sync(){return new Promise(t=>{const e=this._displayProxy.sync();e.listener={done:i=>{t(i),e.destroy()}}})}flush(){this._connection.flush()}}(Bu);!function(t,e,i){const s=[];onmessage=(s=>{if(e.closed)return;const r=s.data;if(r.protocolMessage instanceof ArrayBuffer){const s=new Uint32Array(r.protocolMessage),n=r.meta.map(t=>t instanceof ArrayBuffer?i.fromArrayBuffer(t):t instanceof ImageBitmap?i.fromImageBitmap(t):(console.warn(`COMPOSITOR BUG? Unsupported transferable received from compositor: ${t}. WebFD will be null.`),null));try{e.message({buffer:s,fds:n})}catch(e){t.errorHandler&&"function"==typeof t.errorHandler?t.errorHandler(e):(console.error("\tname: "+e.name+" message: "+e.message+" text: "+e.text),console.error("error object stack: "),console.error(e.stack))}}else console.error("[web-worker-client] server send an illegal message."),e.close()}),e.onFlush=(async t=>{if(s.push(t),!(s.length>1))for(;s.length;){const t=s[0],e=t.reduce((t,e)=>t+e.buffer.byteLength,0),i=new Uint32Array(new ArrayBuffer(e));let r=0;const n=[];for(const e of t){for(const t of e.fds){const e=await t.getTransferable();n.push(e)}const t=new Uint32Array(e.buffer);i.set(t,r),r+=t.length}postMessage({protocolMessage:i.buffer,meta:n},[i.buffer].concat(n)),s.shift()}})}(Uu,Bu,Pu);class Nu{static create(t,e,i,s){const r=new Array(e),n=new Nu(r);for(let a=0;a<e;a++)r[a]=Cu.create(t,i,s,n);return n}constructor(t){this._available=t,this._busy=[]}give(t){const e=this._busy.indexOf(t);e>-1&&this._busy.splice(e,1),this._available.push(t)}take(){const t=this._available.shift();return null!=t?(this._busy.push(t),t):null}}class Cu{static create(t,e,i,s){const r=new ArrayBuffer(i*e*Uint32Array.BYTES_PER_ELEMENT),n=Pu.fromArrayBuffer(r),a=t.createWebArrayBuffer(),o=t.createBuffer(a,e,i),l=new Cu(a,o,n,r,e,i,s);return a.listener=l,o.listener=l,l}constructor(t,e,i,s,r,n,a){this.proxy=t,this.bufferProxy=e,this._pixelContent=i,this.arrayBuffer=s,this.width=r,this.height=n,this._shmBufferPool=a}attach(){this.proxy.attach(this._pixelContent)}async detach(t){this._pixelContent=t,this.arrayBuffer=await t.getTransferable()}release(){this._shmBufferPool.give(this)}}class Ru{static create(t,e){const i=Uu.getRegistry(),s=new Ru(i,t,e);return i.listener=s,s}constructor(t,e,i){this._registry=t,this.width=e,this.height=i,this._shmBufferPool=null,this._compositor=null,this._webShm=null,this._shell=null,this._surface=null}global(t,e,i){var s;e===Qe.protocolName&&(this._compositor=this._registry.bind(t,e,Qe,i),this._surface=this._compositor.createSurface(),this._onFrame=(s=this._surface,()=>new Promise(t=>{const e=s.frame();e.listener={done:i=>{t(i),e.destroy()}}}))),e===Cf.protocolName&&(this._webShm=this._registry.bind(t,e,Cf,i),this._webShm.listener=this,this._shmBufferPool=Nu.create(this._webShm,2,this.width,this.height)),e===fn.protocolName&&(this._shell=this._registry.bind(t,e,fn,i))}init(){this._shellSurface=this._shell.getShellSurface(this._surface),this._shellSurface.listener=this,this._shellSurface.setToplevel(),this._shellSurface.setTitle("Simple Web Shm")}_paintPixels(t,e){const i=t.width>>1,s=t.height>>1;let r,n;const a=new Uint32Array(t.arrayBuffer);r=(n=(s<i?s:i)-8)-32,n*=n,r*=r;let o=0;for(let l=0;l<t.height;l++){const c=(l-i)*(l-i);for(let i=0;i<t.width;i++){let t,h=4278190080;const f=(i-s)*(i-s)+c;h|=(16711680&(t=f<r?525313*((f>>5)+(e>>6)):f<n?525313*(l+(e>>5)):525313*(i+(e>>4))))>>16,h|=65280&t,h|=(255&t)<<16,a[o++]=h}}}draw(t){const e=this._shmBufferPool.take();e?(this._paintPixels(e,t),e.attach(),this._surface.attach(e.bufferProxy,0,0),this._surface.damage(0,0,e.width,e.height),this._onFrame().then(t=>this.draw(t)),this._surface.commit(0)):(console.error("All buffers occupied by compositor!"),Uu.close())}globalRemove(t){}configure(t,e,i){}ping(t){this._shellSurface.pong(t)}popupDone(){}}!async function(){const t=Ru.create(250,250),e=Uu.sync();Uu.flush(),await e,t.init(),t.draw(0);try{await Uu.onClose(),console.log("Application exit.")}catch(t){console.error("Application terminated with error."),console.error(t.stackTrace)}}()}]);