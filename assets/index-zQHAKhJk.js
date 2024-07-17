import{r as u,j as e,R as Ye}from"./vendor-react--EDJ-zWX.js";import{c as Ge}from"./vendor-react-dom-Cw0BBBPM.js";import{u as M,a as Fe,P as Xe}from"./vendor-react-redux-BfVwT-U3.js";import{u as Ce,A as Ze}from"./vendor-@auth0-DQ8kj68q.js";import{c as ce,a as le,b as qe}from"./vendor-@reduxjs-CK6Bk_V3.js";import{c as Ee}from"./vendor-@supabase-DGCEgKs8.js";import{L as de,B as Qe}from"./vendor-react-router-dom-DZZ0svMZ.js";import{c as Ke,j as ae,a as B,n as _}from"./vendor-@emotion-C9WN6cOB.js";import{L as re}from"./vendor-leaflet-Bvd2dtdE.js";import{b as et}from"./vendor-bad-words-CQdPGy6X.js";import{d as tt,a as ot,e as it,f as ee}from"./vendor-react-router-D74tEK1t.js";import{p as D,h as nt}from"./vendor-styled-components-DAvkXs_u.js";import"./vendor-react-to-print-RaivNu-D.js";import"./vendor-scheduler-CzFDRTuY.js";import"./vendor-use-sync-external-store-CGloDidZ.js";import"./vendor-redux-DITMfSWq.js";import"./vendor-immer-BWU1mfoO.js";import"./vendor-reselect-BeKUwQU7.js";import"./vendor-redux-thunk-ClJT1hhx.js";import"./vendor-@remix-run-DyRdwddT.js";import"./vendor-hoist-non-react-statics-C8dGezqB.js";import"./vendor-react-is-8JwjhRSi.js";import"./vendor-@babel-CCbyfPlC.js";import"./vendor-stylis-NkKAe6Bn.js";import"./vendor-badwords-list-D7DhYHEh.js";import"./vendor-tslib-wbdO-F7s.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function o(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(s){if(s.ep)return;s.ep=!0;const d=o(s);fetch(s.href,d)}})();const st="https://hknrbmfihwwaepwhfhbi.supabase.co",at="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrbnJibWZpaHd3YWVwd2hmaGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyNDA2OTAsImV4cCI6MjAzNjgxNjY5MH0.pgIz0EqpbQFXXLlu5m-8ejB8Q6jjXYv1V2uqBTY3HpA",rt=Ee(st,at),Se=ce("store/fetchData",async()=>{try{const{data:r,error:t}=await rt.from("hazards").select("*");if(t)throw t;return console.log(r),{data:r,fetchedAt:Date.now()}}catch(r){throw console.error("Error fetching data:",r),r}}),Ae=le({name:"items",initialState:{items:[],fetchedAt:null},reducers:{add(r,t){const o=t.payload,a=Math.max(...r.items.map(s=>s.id),0);o.id=a+1,r.items.push(o)}},extraReducers:r=>{r.addCase(Se.fulfilled,(t,o)=>{t.items=o.payload.data.map(a=>({...a})),t.fetchedAt=o.payload.fetchedAt})}}),ct=Ae.reducer,{add:lt}=Ae.actions,$e=r=>r.items.items,dt=r=>r.items.fetchedAt,ht="/Corvallis-Hazard-Watch/api/hazardtypes.json",Le=ce("store/fetchTypes",async()=>{try{return await(await fetch(ht)).json()}catch(r){throw console.error("Error fetching data:",r),r}}),Te=le({name:"hazards",initialState:[],extraReducers:r=>{r.addCase(Le.fulfilled,(t,o)=>o.payload.map(a=>({...a})))}}),pt=Te.reducer,ut=Te.selectSlice;function De(r){return ut(r)}const mt="/Corvallis-Hazard-Watch/api/hazardIcons.json",Be=ce("store/fetchIcons",async()=>{try{return await(await fetch(mt)).json()}catch(r){throw console.error("Error fetching data:",r),r}}),He=le({name:"icons",initialState:[],reducers:{},extraReducers:r=>{r.addCase(Be.fulfilled,(t,o)=>(console.log("testing for icons",o.payload),o.payload.map(a=>({...a}))))}}),ft=He.reducer,gt=He.selectSlice;function xt(r){return gt(r)}const yt="/api/getsensor",bt=ce("store/fetchSensor",async()=>{try{return await(await fetch(yt)).json()}catch(r){throw console.error("Error fetching data:",r),r}}),Oe=le({name:"sensor",initialState:[],extraReducers:r=>{r.addCase(bt.fulfilled,(t,o)=>o.payload.data.map(a=>({...a})))}}),vt=Oe.reducer;Oe.selectSlice;const Ne=qe({reducer:{items:ct,hazards:pt,icons:ft,sensor:vt}});Ne.subscribe(()=>{});const wt="/Corvallis-Hazard-Watch/assets/logo-D0C-oCw5.png";class ze{constructor(t,o,a,s){var d;this.lat=t.latitude,this.dateObject=t.created_at,this.date=this.dateObject.toLocaleString(),this.types=a,this.icons=s,this.long=t.longitude,this.type=((d=this.types.find(m=>m.id===t.type))==null?void 0:d.name)||"Other",this.icon=s.find(m=>m.id===t.type)||s.find(m=>m.id===100),this.text=t.text,this.image=t.image,this.radius=t.radius,this.marker=null,this.map=o,this.visible=!1,this.location=t.location,this.show()}convertIsoToCustomFormat(t){const o=new Date(t),a=o.getMonth()+1,s=o.getDate(),d=o.getFullYear(),m=o.getHours(),x=o.getMinutes();return`${a}/${s}/${d}, ${m}:${x}`}remove(){this.visible&&(this.marker.remove(),this.visible=!1)}isVisible(){return this.visible}show(){if(!this.visible){if(!this.marker)if(this.radius)this.marker=L.circle([this.lat,this.long],{color:"red",fillColor:"#f03",fillOpacity:.5,radius:this.radius});else{var t=L.icon({iconUrl:this.icon.iconUrl,shadowUrl:this.icon.shadowUrl,iconSize:this.icon.iconSize,shadowSize:this.icon.shadowSize,iconAnchor:this.icon.iconAnchor,shadowAnchor:this.icon.shadowAnchor,popupAnchor:this.icon.popupAnchor});this.marker=L.marker([this.lat,this.long],{icon:t})}this.marker.addTo(this.map),this.marker.bindPopup("<b>"+this.type+" reported at "+this.date+`<b>
<p> Description: `+this.text+"</p>"),this.visible=!0}}}class jt{constructor(t,o,a,s,d){this.hazardList=t,this.icons=d,this.hazTypes=a,this.size=t.length,this.current=0,this.grouped=!1,this.filteredData,this.groupedContainer=new Array;var m=this.size;this.api=s,this.container,this.map=o,this.size<50?(this.size*=2,this.container=new Array(2*this.size)):(this.size=100,this.container=new Array(100));for(let x=0;x<m;x++){let v=JSON.parse(JSON.stringify(this.hazardList[x]));v.created_at=new Date(v.created_at),this.insert(v)}this.currentDate=new Date}insert(t){var o=new ze(t,this.map,this.hazTypes,this.icons);this.current==this.size&&this.grow(),this.container[this.current++]=o,this.filteredData&&this.filteredData.push(o)}insert(t,o,a,s){var d=new ze(t,this.map,this.hazTypes,this.icons);this.current==this.size&&this.grow(),this.container[this.current++]=d,s&&this.filter(o,a,s)}update(t,o,a,s){this.removeAll(),this.container=new Array(2*t.length);let d=t.length;this.current=0;for(let m=0;m<d;m++){let x=JSON.parse(JSON.stringify(t[m]));x.created_at=new Date(x.created_at),this.insert(x)}this.filter(o,a,s)}grow(){var t=this.container;this.container=new Array(2*this.size);for(let o=0;o<this.size;o++)this.container[o]=t[o]}at(t){return this.container[t]}viewAll(){for(let t=0;t<this.current;t++)this.container[t].show()}removeAll(){for(let t=0;t<this.current;t++)this.container[t].remove()}filter(t,o,a){this.groupedContainer.forEach(s=>{s[2]!=="loc"&&s[3].remove()}),delete this.filteredData,this.filteredData=new Array,this.viewAll(),this.filterByTime(t,o),this.filterByType(a);for(let s=0;s<this.current;s++)this.container[s].isVisible()&&this.filteredData.push(this.container[s]);this.grouped&&(this.grouped=!1,this.group())}filterByTime(t,o){for(let a=0;a<this.current;a++)this.container[a].dateObject.getTime()>t.getTime()&&this.container[a].dateObject.getTime()<o.getTime()||this.container[a].remove()}filterByType(t){if(t!="All")for(let o=0;o<this.current;o++)t.includes(this.container[o].type)||this.container[o].remove()}unGroup(t,o,a,s){this.grouped&&(this.grouped=!1,this.filter(t,o,a),this.groupedContainer.forEach(d=>{d[2]!=="loc"&&d[3].remove()}))}async group(){if(!this.grouped){this.removeAll(),this.grouped=!0,delete this.groupedContainer,this.groupedContainer=new Array,this.filteredData.forEach(o=>{var a=!1;for(let s=0;s<this.groupedContainer.length;s++)if(this.groupedContainer[s][0]===o.location){this.groupedContainer[s][1].push(o),a=!0;continue}a||this.groupedContainer.push([o.location,[o],"loc","marker"])});const t=this.groupedContainer.map(o=>fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${o[0]}&limit=1&appid=${this.api}`).then(a=>{if(!a.ok)throw new Error("Network response was not ok");return a.json()}).then(a=>{a[0]&&(o[2]=[a[0].lat,a[0].lon])}).catch(a=>{console.error("There was a problem with the fetch operation:",a)}));Promise.all(t).then(()=>{this.groupedContainer.forEach(o=>{if(o[2]!=="loc"){var a=L.icon({iconUrl:"/assets/icons/marker-icon.png",shadowUrl:"/assets/icons/marker-shadow.png",iconSize:[25,41],shadowSize:[41,41],iconAnchor:[12,41],shadowAnchor:[12,41],popupAnchor:[-3,-41]}),s=L.marker(o[2],{icon:a});s.addTo(this.map),s.bindPopup("<b>"+o[1].length+" hazards reported in this area</p>"),o[3]=s}})})}}}const Ct="https://hknrbmfihwwaepwhfhbi.supabase.co",St="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrbnJibWZpaHd3YWVwd2hmaGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyNDA2OTAsImV4cCI6MjAzNjgxNjY5MH0.pgIz0EqpbQFXXLlu5m-8ejB8Q6jjXYv1V2uqBTY3HpA",Dt=Ee(Ct,St),ke=()=>{var r;const t=M(dt),o=u.useRef(null),a=u.useRef(null);u.useState(!1);const s=new Date,d=new Date(s.getTime()+24*60*60*1e3),m=new Date(s.getTime()-24*60*60*1e3),[x,v]=u.useState(),[I,w]=u.useState(),[R,P]=u.useState(!1),[y,Y]=u.useState({}),[f,G]=u.useState(null),[oe,H]=u.useState(!1),A=M($e),X=M(De),he=M(xt),[z,pe]=u.useState(null),ie=Fe(),Z="bed1848ba67a4ff12b0e3c2f5c0421fe",{lat:q,lon:c,time:l}=tt();u.useState(!1);const[g,p]=u.useState(),[C,S]=u.useState(0);Ce();function T(){navigator.permissions?navigator.permissions.query({name:"geolocation"}).then(n=>{n.state==="granted"?O():n.state==="prompt"?navigator.geolocation.getCurrentPosition(i=>{O()},i=>{console.error("Error getting user location:",i.message)}):console.error("Geolocation permission denied or unavailable.")}):console.error("Permissions API is not supported in this browser.")}function O(){navigator.geolocation.getCurrentPosition(n=>{const i=n.coords.latitude,h=n.coords.longitude;return f.setView([i,h],14),h},n=>{console.error("Error getting user location:",n.message)})}function J(n){var i=document.getElementById(`circleRadio${n}`),h=document.getElementById(`radiusSlider${n}`);i.checked?h.style.display="block":h.style.display="none"}function ue(n){var i=document.getElementById(`pointRadio${n}`);return i.checked?"Point":"Circle"}function me(n){var i=document.getElementById(`circleRadio${n}`),h=document.getElementById(`radius${n}`);return i.checked?h.value:0}function fe(){f.closePopup()}function ge(n,i,h,b,k,N,F,E,U){const se=document.getElementById(`bad-length${U}`);var V=document.getElementById(`bad-words${U}`);V.style.display="none",se.style.display="none";const $=new et;if(i<-180||i>180){var n=n-Math.floor((n+90)/180)*180,i=i-Math.floor((i+180)/360)*360;f.setView([n,i],13)}if(F.length>200){const j=document.getElementById(`bad-length-value${U}`);se.style.display="block",j.textContent=F.length-200+" characters over the limit";const W=f.getSize(),K={lat:n,lng:i},ve=f.getBounds(),we=f.containerPointToLatLng([W.x/2,W.y-0]),je=K.lat-(we.lat-ve.getCenter().lat);f.panTo([je,K.lng])}else if($.isProfane(F)){const j=xe(F,$.clean(F));var Q=document.getElementById(`bad-words-found${U}`);Q.textContent=j,V.style.display="block";const W=f.getSize(),K={lat:n,lng:i},ve=f.getBounds(),we=f.containerPointToLatLng([W.x/2,W.y-0]),je=K.lat-(we.lat-ve.getCenter().lat);f.panTo([je,K.lng])}else ye(n,i,h,b,N,F),f.closePopup()}function xe(n,i){const h=n.split(" "),b=i.split(" ");var k="";for(let N=0;N<h.length;N++)b[N].includes("*")&&(k+=h[N]+" ");return k}const ye=async(n,i,h,b,k,N)=>{var F="N/A";try{const j=await(await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${n}&lon=${i}&limit=1&appid=${Z}`)).json();j[0]&&j[0].country&&j[0].country==="US"?F=`${j[0].name},${j[0].state}, ${j[0].country}`:j[0]&&j[0].country?F=`${j[0].name}, ${j[0].country}`:F="N/A"}catch($){throw console.error($),new Error("Error fetching location data")}k==0&&(k=null);let E={latitude:n,longitude:i,created_at:b,type:parseInt(h,10),icon_type:null,text:N,image:null,creator_id:10,radius:k,location:F};const U=new Date(x),se=new Date(I);var V=Object.keys(y).filter($=>y[$]);V.length===0&&(V="All"),z.insert(E,U,se,V),E.created_at=E.created_at.toLocaleString(),ie(lt(E));try{const{data:$,error:Q}=await Dt.from("hazards").insert([{type:E.type,latitude:E.latitude,longitude:E.longitude,text:E.text,radius:E.radius,location:E.location}]).select();if(Q)throw Q}catch($){console.error($)}},ne=n=>{const i=Math.floor(Math.random()*1e8)+1;var h=`
                      <div>
                          <h3>Please select a type of issue</h3>
                          <select name="hazard" id="hazard${i}">
                              ${X.map(b=>`
                                  <option value="${b.id}">${b.name}</option>
                              `).join("")}
                          </select>
                          <input type="text" id="textInput${i}" placeholder= "description"> 
                          <div id ="bad-length${i}" style="display:none;">
                            <p>The text entered exceeds character limit</p>
                            <p id = "bad-length-value${i}" ></p>
                          </div>
                          <div id ="bad-words${i}" style="display:none;">
                            <p id ="bad-words-caught${i}" >The text you attempted to submit contains a word not allowed in our service</p>
                            <p id = "bad-words-found${i}" ></p>
                          </div>
                      </div>
                      <div>
                          <input type="radio" name="htype" id="pointRadio${i}" checked> Point<br />
                          <input type="radio" name="htype" id="circleRadio${i}"> Circle<br />
                          <div id="radiusSlider${i}" style="display:none;">
                              <label for="radius">Radius:</label>
                              <input type="range" id="radius${i}" name="radius" min="1" max="200" value="100">
                              <span id="radiusValue${i}">50</span> meters
                          </div>
                          <button id="closeButton${i}">Close</button>
                          <button id="submitButton${i}">Submit</button>
                      </div>
                  `;r=re.popup().setLatLng(n.latlng).setContent(h).openOn(f),document.getElementById(`pointRadio${i}`).addEventListener("click",()=>J(i)),document.getElementById(`circleRadio${i}`).addEventListener("click",()=>J(i)),document.getElementById(`closeButton${i}`).addEventListener("click",()=>fe()),document.getElementById(`radius${i}`).addEventListener("input",()=>{document.getElementById(`radiusValue${i}`).textContent=document.getElementById(`radius${i}`).value}),document.getElementById(`submitButton${i}`).addEventListener("click",()=>ge(n.latlng.lat,n.latlng.lng,document.getElementById(`hazard${i}`).value,new Date,ue(i),me(i),document.getElementById(`textInput${i}`).value,r,i))},be=async()=>{ie(Se()),p(!0)};u.useEffect(()=>{if(g&&A.length!=C&&z){const i=new Date(x),h=new Date(I);var n=Object.keys(y).filter(b=>y[b]);n.length===0&&(n="All"),z.update(A,i,h,n),S(A.length),p(null)}},[A,g]),u.useEffect(()=>{if(A.length>0){const n=()=>{if(!o.current._leaflet_id)if(!isNaN(parseFloat(q))&&!isNaN(parseFloat(c))&&!isNaN(parseFloat(l))){const i=new Date(parseFloat(l)-864e5),h=new Date(parseFloat(l)+24*60*60*1e3);v(i.toISOString()),w(h.toISOString()),G(re.map(o.current).setView([parseFloat(q),parseFloat(c)],18))}else v(m.toISOString()),w(d.toISOString()),G(re.map(o.current).setView([44.564568,-123.262047],15))};o.current&&n()}return()=>{}},[A]),u.useEffect(()=>{if(f&&!oe){H(!1),re.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(f),a.current=f;const n=new jt(A,f,X,Z,he);S(A.length),pe(n),isNaN(parseFloat(q))&&T()}},[f,oe]),u.useEffect(()=>{if(z){Date.now()-t>5*1e3&&be(),f.on("click",h=>ne(h));var n,i;isNaN(parseFloat(l))?(n=m,i=d):(n=new Date(parseFloat(l)-24*60*60*1e3),i=new Date(parseFloat(l)+24*60*60*1e3)),z.filter(n,i,"All"),f.on("zoomend",function(){f.getZoom()>=13?Ue():Je()})}},[z]);const Ie=()=>{const n=new Date(x),i=new Date(I);var h=Object.keys(y).filter(b=>y[b]);h.length===0&&(h="All"),z.filter(n,i,h)},Me=n=>{Y(i=>({...i,[n]:!i[n]}))},Je=()=>{z.group()},Ue=()=>{const n=new Date(x),i=new Date(I);var h=Object.keys(y).filter(k=>y[k]);h.length===0&&(h="All"),z.unGroup(n,i,h,Z),Ie();const b=document.getElementById("desperate");if(b){const k=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});b.dispatchEvent(k)}},Ve=Ke`
 text-align: right;
 position: relative;
 z-index: 1000;
`;return ae("div",{children:[B("div",{css:Ve,children:x&&I&&ae("div",{children:["Start Date:",B("input",{type:"date",id:"startDate",value:x.split("T")[0],onChange:n=>v(n.target.value)}),"End Date:",B("input",{type:"date",id:"endDate",value:I.split("T")[0],onChange:n=>w(n.target.value)}),ae("div",{id:"list1",className:"dropdown-check-list",tabIndex:"100",children:[B("span",{className:"anchor",onClick:()=>P(!R),children:"Hazard Types"}),R&&B("ul",{className:"items",children:X.map(n=>ae("li",{children:[B("input",{id:n.id,value:n.name,type:"checkbox",checked:y[n.name]||!1,onChange:()=>Me(n.name)}),n.name]},n.id))})]}),B("button",{id:"desperate",onClick:Ie,children:"Submit"})]})}),B("div",{ref:o,id:"map",style:{height:"70vh"}}),B("p",{children:"To create a hazard, first be signed in, then click anywhere on the map"})]})},te=D(de)`
  font-size: large;
  margin: 0px 75px 0px 0px;
  color: #5d5d5d;
  cursor: pointer;
  transition: .3s;
  font-weight: 500;

  &:not(.btn):hover {
    color: #DC4405;
    border-radius: 20px;
    padding: 10px 20px;
    color: #FFF;
    background-color: #DC4405;
  }
`;D(de)`
  border-radius: 20px;
  padding: 10px 20px;
  color: #FFFFFF;
  background-color: #DC4405;
  cursor: pointer;

  &:hover {
    border-radius: 20px;
    padding: 12px 22px;
  }
`;const It=D.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px 0;
  margin-bottom: 50px;
`;D.nav`
  display: flex;

  

    &.btn {
      border-radius: 20px;
      padding: 10px 20px;
      color: #FFFFFF;
      background-color: #DC4405;
      cursor: pointer
    }
      ;

      &:hover {
        border-radius: 20px;
        padding: 15px 25px;
      }
    }

    a {
      font-size: large;
      margin: 0px 75px 0px 0px;
      color: #5d5d5d;
      cursor: pointer;
      transition: .3s;
      font-weight: 500;

      &:not(.btn):hover {
        border-radius: 20px;
        padding: 10px 20px;
        color: #FFF;
        background-color: #DC4405;
      }
    }
  }
`;const zt=D.img`
  height: auto;
  width: auto;
  max-width: 300px;
  max-height: 300px;
`,kt=D.nav`
  .links {
    display: flex;


      &.btn {
        border-radius: 20px;
        padding: 10px 20px;
        color: #FFFFFF;
        background-color: #DC4405;
        cursor: pointer;

        &:hover {
          border-radius: 20px;
          padding: 15px 25px;
        }
      }

      a, ${te}{
        font-size: large;
        margin: 0px 75px 0px 0px;
        color: #5d5d5d;
        cursor: pointer;
        transition: .3s;
        font-weight: 500;

        &:not(.btn):hover {
          color: #FFFFFF;
          border-radius: 20px;
          padding: 10px 20px;
          background-color: #DC4405;
        }
        .btn{
          color:#FFFFFF;
        }
      }
    }
  }
`,Ft=()=>(Ce(),e.jsx(kt,{children:e.jsxs("ul",{className:"links",children:[e.jsx("li",{className:"start",children:e.jsx(te,{to:"/Corvallis-Hazard-Watch/",title:"Home",children:"Home"})}),e.jsx("li",{children:e.jsx(te,{to:"/Corvallis-Hazard-Watch/map",title:"Map",children:"Map"})}),e.jsx("li",{children:e.jsx(te,{to:"/Corvallis-Hazard-Watch/dataView",className:"dataView",children:"DataView"})}),e.jsx("li",{children:e.jsx(te,{to:"/Corvallis-Hazard-Watch/about",title:"About",children:"About"})})]})})),Et=({id:r,created_at:t,type:o,latitude:a,longitude:s,text:d,radius:m,location:x,onClick:v})=>{var y;const I=M(De),w=_.td`
        border-style: solid;
        padding: 8px;
        text-align: left;
    `,R=new Date(t),P=()=>{v&&v({latitude:a,longitude:s})};return e.jsxs("tr",{onClick:P,children:[e.jsx(w,{children:r}),e.jsx(w,{children:R.toLocaleString()}),e.jsx(w,{children:((y=I.find(Y=>Y.id===o))==null?void 0:y.name)||"Other"}),x==="N/A"?e.jsxs(w,{children:[a,",",s]}):e.jsx(w,{children:x}),e.jsx(w,{children:d}),e.jsx(w,{children:m})]})},At=()=>{const r=M($e),[t,o]=u.useState([]),a=M(De),s=new Date;u.useState();const d=new Date(s.getTime()-3*31*24*60*60*1e3),[m,x]=u.useState(d.toISOString()),[v,I]=u.useState(s.toISOString()),[w,R]=u.useState(!1),[P,y]=u.useState({});u.useRef();const Y=ot(),f=()=>{x(d.toISOString()),I(s.toISOString()),R(!1),y({}),G()},G=c=>{const l=new Date(m),g=new Date(v);var p=Object.keys(P).filter(S=>P[S]);console.log(c),p.length===0&&(p="All"),console.log(l,g,p);var C=r.map(S=>({...S}));X(l,g,p,C,c)},oe=c=>{y(l=>({...l,[c]:!l[c]}))},H=_.th`
      
      border-style: solid;
      padding: 8px;
      textAlign: left;
      `,A=_.table`
      border-collapse: collapse;
      width: 100%;
      @media print {
        color: black; /* Change font color to black */
    }
  `;u.useEffect(()=>{const c=[];r.forEach(l=>{c.push(JSON.parse(JSON.stringify(l)))}),[...c].sort((l,g)=>new Date(g.created_at)-new Date(l.created_at)),o(c)},[r]);const X=(c,l,g,p,C)=>{console.log(C),p=z(c,l,p),p=pe(g,p),C&&C.length>0&&(p=he(p,C));const S=[...p].sort((O,J)=>new Date(J.created_at)-new Date(O.created_at));o(S);const T=document.getElementById("locationSearch");T.value=C},he=(c,l)=>{console.log("filter by name: ",l);var g=l.split(",").map(p=>p.trim().toLowerCase());return c=c.filter(p=>{var C=p.location.split(",").map(T=>T.trim().toLowerCase());let S=0;return g.forEach(T=>{C.forEach(O=>{T===O&&S++})}),S>=g.length}),c},z=(c,l,g)=>(g=g.filter(p=>new Date(p.created_at).getTime()>c.getTime()&&new Date(p.created_at).getTime()<l.getTime()),g),pe=(c,l)=>(c!="All"&&(l=l.filter(g=>c.includes(g.type.toString()))),console.log(l),l),ie=c=>{const l=new Date(c.created_at).getTime(),g=`/map/${c.latitude}/${c.longitude}/${l}`;Y(g)},Z=()=>{var c=`ID,Created At,Type,Location,Text,Radius,latitude,longitude
`;t.forEach(C=>{var ne;var{id:S,created_at:T,type:O,location:J,text:ue,radius:me,latitude:fe,longitude:ge}=C,xe=((ne=a.find(be=>be.id===O))==null?void 0:ne.name)||"Other",ye=`${S},"${T}","${xe}","${J}","${ue}",${me},"${fe},${ge}"
`;c+=ye});var l=new Blob([c],{type:"text/csv;charset=utf-8;"}),g=URL.createObjectURL(l),p=document.createElement("a");p.href=g,p.download="hazards_data.csv",document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(g)},q=_.div`
    position: relative;
    z-index: 1000;
   `;return e.jsxs(q,{children:[e.jsx("input",{id:"locationSearch",type:"text",placeholder:"EX: Corvallis, Oregon, US"}),e.jsxs("div",{children:["Start Date:",e.jsx("input",{type:"date",id:"startDate",value:m.split("T")[0],onChange:c=>x(c.target.value)}),"End Date:",e.jsx("input",{type:"date",id:"endDate",value:v.split("T")[0],onChange:c=>I(c.target.value)}),e.jsxs("div",{id:"list1",className:"dropdown-check-list",tabIndex:"100",children:[e.jsx("span",{className:"anchor",onClick:()=>R(!w),children:"Hazard Types"}),w&&e.jsx("ul",{className:"items",children:a.map(c=>e.jsxs("li",{children:[e.jsx("input",{id:c.id,value:c.id,type:"checkbox",checked:P[c.id]||!1,onChange:()=>oe(c.id)}),c.name]},c.id))})]}),e.jsx("button",{onClick:()=>{const c=document.getElementById("locationSearch");console.log(c.value);const l=c.value;G(l)},children:"Submit"}),e.jsx("button",{onClick:f,children:"Clear Filters"}),e.jsx("button",{onClick:Z,children:"Save"})]}),e.jsxs(A,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(H,{children:"ID"}),e.jsx(H,{children:"Created At"}),e.jsx(H,{children:"Type"}),e.jsx(H,{children:"Location"}),e.jsx(H,{children:"Text"}),e.jsx(H,{children:"Radius"})]})}),e.jsx("tbody",{children:t.map(c=>e.jsx(Et,{onClick:()=>ie(c),...c},c.id))})]})]})},$t="/Corvallis-Hazard-Watch/assets/mapillustration-DIBzkvWx.png",Re=D.div`
  // margin-top: 100px;
   margin-left: 10vw;
  // width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0px;
  padding-right: 50px;

  
  padding-top: 30px;
  justify-content: space-between;
  width: 90%;
`,Pe=D.div`
  paddingTop: 50px;
  flex-grow: 1;
  margin-right: 25px;
  paddingBottom: 20px;

  h1 {
    font-size: 50px;
    marginBottom: 50px;
  }
`,Lt=D.div`
  overflow: 'hidden';
  .content {
    .container {
      .info {
        h1 {
          font-size: 50px;
        }
      }
    }
  }
`,Tt=D.div`
   margin-left: auto;
  align-self: center;
  flex-grow: 0;
  marginBottom: 150px;

  img {
    max-height: 80vh;
    width: auto;
    height: auto;
    margin-left: auto;
    display: block;
  }
`,Bt=D.div`
    // marginLeft: 25vw;

    // align-self: center;
    // justifyContent: center;
    // flex-grow 0;
    // marginBottom: 150px;

    img{
    max-height: 80vh;
    width: auto;
    height: auto;
    }


`,Ht=D.button`
  border-radius: 20px;
  padding: 10px 30px;
  font-weight: bold;
  font-size: x-large;
  background-color: #DC4405;
  margin-top: 30px;
  cursor: pointer;
  color: #FFF;

  &:hover {
    transform: scale(1.1);
  }
`,Ot=()=>e.jsx(Lt,{children:e.jsx("div",{className:"content",children:e.jsxs(Re,{children:[e.jsxs(Pe,{children:[e.jsx("h1",{children:"Stay Informed on Local Hazards"}),e.jsx("br",{}),e.jsxs("p",{children:[e.jsx("strong",{children:"Do you value your safety?"}),e.jsx("br",{})," ",e.jsx("strong",{children:"Want to help your loved ones and your community stay safe?"}),e.jsx("br",{})," ",e.jsx("br",{})," We've got you covered, stay up to date and reports hazard in your area with HazardWatch!"]}),e.jsx(Ht,{children:e.jsx(de,{to:"/map",children:"View Map"})})]}),e.jsx(Tt,{children:e.jsx("img",{src:$t,alt:"Map Illustration"})})]})})}),We=nt`
 

  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');



  <meta name="viewport" content="width=device-width" />
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');


  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    overflow-x: hidden; 
  }

  html, body {
    font-family: "Ubuntu", sans-serif;
    background-color: #FAFAFA;
    color: #5d5d5d;
    overflowY: 'scroll';
    overflowX: 'hidden';
  }


  


  strong{
    font-family: "Playfair Display", serif;
    font-weight: 700;
    font-size: 1.8em; 
    color: #DC4405; 
    font-weight: bold; 
    // background-color: #FFF3E0; 
    // padding: 2px;
    // border-radius: 2px;
  }

  ul,
  nav {
    list-style: none;
    padding: 0;
    border-bottom: black;
  }

  a {
    text-decoration: none;
  }
`,Nt="/Corvallis-Hazard-Watch/assets/teamPic-wZFRJGqY.jpg",Rt=()=>e.jsxs(e.Fragment,{children:[e.jsx(We,{}),e.jsx("html",{children:e.jsx("body",{children:e.jsx(Re,{children:e.jsxs(Pe,{children:[e.jsx("h1",{children:"About Us"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Our Mission"}),e.jsxs("p",{children:["At HazardWatch, we prioritize your safety by providing real-time updates on local hazards.",e.jsx("br",{}),"Our goal is to help you and your loved ones stay informed and prepared for any potential threats in your area.",e.jsx("br",{}),"National and Local alert systems often miss hazards and are succeptible to delay.",e.jsx("br",{}),"We set out to fix this using help from millions keen-eyed people like yourself to provide a trustworthy, constantly updated map of hazard alerts."]})]}),e.jsx("h1",{children:"Development Team"}),e.jsx(Bt,{children:e.jsx("img",{src:Nt,alt:"Team"})}),e.jsxs("section",{children:[e.jsx("a",{href:"https://github.com/CGA15/Corvallis-Hazard-Watch",children:e.jsx("h2",{children:"GitHub"})}),e.jsx("a",{href:"https://github.com/CGA15/Corvallis-Hazard-Watch",children:e.jsx("p",{children:'https://github.com/CGA15/Corvallis-Hazard-Watch"'})}),e.jsx("h2",{children:"Contact Information"}),e.jsx("p",{children:"Email: corvallis-hazardwatch@proton.me"}),e.jsx("p",{children:"Address: 123 Safe Street, Safety City, Safe Country"}),e.jsx("p",{children:e.jsx("b",{children:"**The above address info is a placeholder values because website is still under construction**"})})]})]})})})})]}),Pt=()=>{const{isLoading:r,error:t}=Ce(),o=Fe();return u.useEffect(()=>{o(Be()),o(Le()),o(Se())},[o]),_.h1`
    display: flex
  `,_.div`
  margin-right: 1em;
  border-style: solid;
  border-radius: 18px;
  width: fit-content;
  background: lightslategrey;
  `,t?e.jsxs("div",{children:["Oops... ",t.message]}):e.jsxs(Qe,{children:[e.jsx(We,{}),e.jsxs(It,{children:[e.jsx(de,{to:"/Corvallis-Hazard-Watch/",children:e.jsx(zt,{src:wt,alt:"Hazard Logo"})}),e.jsx(Ft,{})]}),e.jsx("main",{style:{marginTop:"100px"},children:e.jsxs(it,{children:[e.jsx(ee,{path:"/Corvallis-Hazard-Watch/",element:e.jsx(Ot,{})}),e.jsx(ee,{path:"/Corvallis-Hazard-Watch/map",element:e.jsx(ke,{})}),e.jsx(ee,{path:"/Corvallis-Hazard-Watch/map/:lat/:lon/:time",element:e.jsx(ke,{})}),e.jsx(ee,{path:"/Corvallis-Hazard-Watch/dataView",element:e.jsx(At,{})}),e.jsx(ee,{path:"/Corvallis-Hazard-Watch/about",element:e.jsx(Rt,{})})]})})]})};Ge.createRoot(document.getElementById("root")).render(e.jsx(Ye.StrictMode,{children:e.jsx(Ze,{domain:"dev-6m2d6yf4ffilgk3i.us.auth0.com",clientId:"kzqh8vmwcVoVFm5ipNO8rxmYsjMg8950",authorizationParams:{redirect_uri:window.location.origin},children:e.jsx(Xe,{store:Ne,children:e.jsx(Pt,{})})})}));
