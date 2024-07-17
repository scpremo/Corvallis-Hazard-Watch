import{r as u,j as e,R as We}from"./vendor-react--EDJ-zWX.js";import{c as Ge}from"./vendor-react-dom-Cw0BBBPM.js";import{u as J,a as Ee,P as Xe}from"./vendor-react-redux-BfVwT-U3.js";import{u as Se,A as Ze}from"./vendor-@auth0-DQ8kj68q.js";import{c as ce,a as le,b as qe}from"./vendor-@reduxjs-CK6Bk_V3.js";import{c as Ae}from"./vendor-@supabase-Dq6PmCnV.js";import{L as de,B as Qe}from"./vendor-react-router-dom-DZZ0svMZ.js";import{c as Ke,j as re,a as B,n as Y}from"./vendor-@emotion-C9WN6cOB.js";import{L as ae}from"./vendor-leaflet-Bvd2dtdE.js";import{b as et}from"./vendor-bad-words-CQdPGy6X.js";import{d as tt,a as ot,e as nt,f as ee}from"./vendor-react-router-D74tEK1t.js";import{p as D,h as it}from"./vendor-styled-components-DAvkXs_u.js";import"./vendor-react-to-print-RaivNu-D.js";import"./vendor-scheduler-CzFDRTuY.js";import"./vendor-use-sync-external-store-CGloDidZ.js";import"./vendor-redux-DITMfSWq.js";import"./vendor-immer-BWU1mfoO.js";import"./vendor-reselect-BeKUwQU7.js";import"./vendor-redux-thunk-ClJT1hhx.js";import"./vendor-@remix-run-DyRdwddT.js";import"./vendor-hoist-non-react-statics-C8dGezqB.js";import"./vendor-react-is-8JwjhRSi.js";import"./vendor-@babel-CCbyfPlC.js";import"./vendor-stylis-NkKAe6Bn.js";import"./vendor-badwords-list-D7DhYHEh.js";import"./vendor-tslib-wbdO-F7s.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function o(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(s){if(s.ep)return;s.ep=!0;const d=o(s);fetch(s.href,d)}})();const st="https://hknrbmfihwwaepwhfhbi.supabase.co",rt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrbnJibWZpaHd3YWVwd2hmaGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyNDA2OTAsImV4cCI6MjAzNjgxNjY5MH0.pgIz0EqpbQFXXLlu5m-8ejB8Q6jjXYv1V2uqBTY3HpA",at=Ae(st,rt),Ce=ce("store/fetchData",async()=>{try{const{data:a,error:t}=await at.from("hazards").select("*");if(t)throw t;return console.log(a),{data:a,fetchedAt:Date.now()}}catch(a){throw console.error("Error fetching data:",a),a}}),ze=le({name:"items",initialState:{items:[],fetchedAt:null},reducers:{add(a,t){const o=t.payload,r=Math.max(...a.items.map(s=>s.id),0);o.id=r+1,a.items.push(o)}},extraReducers:a=>{a.addCase(Ce.fulfilled,(t,o)=>{t.items=o.payload.data.map(r=>({...r})),t.fetchedAt=o.payload.fetchedAt})}}),ct=ze.reducer,{add:lt}=ze.actions,$e=a=>a.items.items,dt=a=>a.items.fetchedAt,pt="/api/hazardtypes.json",Le=ce("store/fetchTypes",async()=>{try{return await(await fetch(pt)).json()}catch(a){throw console.error("Error fetching data:",a),a}}),Te=le({name:"hazards",initialState:[],extraReducers:a=>{a.addCase(Le.fulfilled,(t,o)=>o.payload.map(r=>({...r})))}}),ht=Te.reducer,ut=Te.selectSlice;function De(a){return ut(a)}const mt="/api/hazardIcons.json",Be=ce("store/fetchIcons",async()=>{try{return await(await fetch(mt)).json()}catch(a){throw console.error("Error fetching data:",a),a}}),Oe=le({name:"icons",initialState:[],reducers:{},extraReducers:a=>{a.addCase(Be.fulfilled,(t,o)=>(console.log("testing for icons",o.payload),o.payload.map(r=>({...r}))))}}),ft=Oe.reducer,gt=Oe.selectSlice;function xt(a){return gt(a)}const yt="/api/getsensor",bt=ce("store/fetchSensor",async()=>{try{return await(await fetch(yt)).json()}catch(a){throw console.error("Error fetching data:",a),a}}),Ne=le({name:"sensor",initialState:[],extraReducers:a=>{a.addCase(bt.fulfilled,(t,o)=>o.payload.data.map(r=>({...r})))}}),wt=Ne.reducer;Ne.selectSlice;const Re=qe({reducer:{items:ct,hazards:ht,icons:ft,sensor:wt}});Re.subscribe(()=>{});const vt="/assets/logo-D0C-oCw5.png";class ke{constructor(t,o,r,s){var d;this.lat=t.latitude,this.dateObject=t.created_at,this.date=this.dateObject.toLocaleString(),this.types=r,this.icons=s,this.long=t.longitude,this.type=((d=this.types.find(m=>m.id===t.type))==null?void 0:d.name)||"Other",this.icon=s.find(m=>m.id===t.type)||s.find(m=>m.id===100),this.text=t.text,this.image=t.image,this.radius=t.radius,this.marker=null,this.map=o,this.visible=!1,this.location=t.location,this.show()}convertIsoToCustomFormat(t){const o=new Date(t),r=o.getMonth()+1,s=o.getDate(),d=o.getFullYear(),m=o.getHours(),x=o.getMinutes();return`${r}/${s}/${d}, ${m}:${x}`}remove(){this.visible&&(this.marker.remove(),this.visible=!1)}isVisible(){return this.visible}show(){if(!this.visible){if(!this.marker)if(this.radius)this.marker=L.circle([this.lat,this.long],{color:"red",fillColor:"#f03",fillOpacity:.5,radius:this.radius});else{var t=L.icon({iconUrl:this.icon.iconUrl,shadowUrl:this.icon.shadowUrl,iconSize:this.icon.iconSize,shadowSize:this.icon.shadowSize,iconAnchor:this.icon.iconAnchor,shadowAnchor:this.icon.shadowAnchor,popupAnchor:this.icon.popupAnchor});this.marker=L.marker([this.lat,this.long],{icon:t})}this.marker.addTo(this.map),this.marker.bindPopup("<b>"+this.type+" reported at "+this.date+`<b>
<p> Description: `+this.text+"</p>"),this.visible=!0}}}class jt{constructor(t,o,r,s,d){this.hazardList=t,this.icons=d,this.hazTypes=r,this.size=t.length,this.current=0,this.grouped=!1,this.filteredData,this.groupedContainer=new Array;var m=this.size;this.api=s,this.container,this.map=o,this.size<50?(this.size*=2,this.container=new Array(2*this.size)):(this.size=100,this.container=new Array(100));for(let x=0;x<m;x++){let w=JSON.parse(JSON.stringify(this.hazardList[x]));w.created_at=new Date(w.created_at),this.insert(w)}this.currentDate=new Date}insert(t){var o=new ke(t,this.map,this.hazTypes,this.icons);this.current==this.size&&this.grow(),this.container[this.current++]=o,this.filteredData&&this.filteredData.push(o)}insert(t,o,r,s){var d=new ke(t,this.map,this.hazTypes,this.icons);this.current==this.size&&this.grow(),this.container[this.current++]=d,s&&this.filter(o,r,s)}update(t,o,r,s){this.removeAll(),this.container=new Array(2*t.length);let d=t.length;this.current=0;for(let m=0;m<d;m++){let x=JSON.parse(JSON.stringify(t[m]));x.created_at=new Date(x.created_at),this.insert(x)}this.filter(o,r,s)}grow(){var t=this.container;this.container=new Array(2*this.size);for(let o=0;o<this.size;o++)this.container[o]=t[o]}at(t){return this.container[t]}viewAll(){for(let t=0;t<this.current;t++)this.container[t].show()}removeAll(){for(let t=0;t<this.current;t++)this.container[t].remove()}filter(t,o,r){this.groupedContainer.forEach(s=>{s[2]!=="loc"&&s[3].remove()}),delete this.filteredData,this.filteredData=new Array,this.viewAll(),this.filterByTime(t,o),this.filterByType(r);for(let s=0;s<this.current;s++)this.container[s].isVisible()&&this.filteredData.push(this.container[s]);this.grouped&&(this.grouped=!1,this.group())}filterByTime(t,o){for(let r=0;r<this.current;r++)this.container[r].dateObject.getTime()>t.getTime()&&this.container[r].dateObject.getTime()<o.getTime()||this.container[r].remove()}filterByType(t){if(t!="All")for(let o=0;o<this.current;o++)t.includes(this.container[o].type)||this.container[o].remove()}unGroup(t,o,r,s){this.grouped&&(this.grouped=!1,this.filter(t,o,r),this.groupedContainer.forEach(d=>{d[2]!=="loc"&&d[3].remove()}))}async group(){if(!this.grouped){this.removeAll(),this.grouped=!0,delete this.groupedContainer,this.groupedContainer=new Array,this.filteredData.forEach(o=>{var r=!1;for(let s=0;s<this.groupedContainer.length;s++)if(this.groupedContainer[s][0]===o.location){this.groupedContainer[s][1].push(o),r=!0;continue}r||this.groupedContainer.push([o.location,[o],"loc","marker"])});const t=this.groupedContainer.map(o=>fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${o[0]}&limit=1&appid=${this.api}`).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{r[0]&&(o[2]=[r[0].lat,r[0].lon])}).catch(r=>{console.error("There was a problem with the fetch operation:",r)}));Promise.all(t).then(()=>{this.groupedContainer.forEach(o=>{if(o[2]!=="loc"){var r=L.icon({iconUrl:"/assets/icons/marker-icon.png",shadowUrl:"/assets/icons/marker-shadow.png",iconSize:[25,41],shadowSize:[41,41],iconAnchor:[12,41],shadowAnchor:[12,41],popupAnchor:[-3,-41]}),s=L.marker(o[2],{icon:r});s.addTo(this.map),s.bindPopup("<b>"+o[1].length+" hazards reported in this area</p>"),o[3]=s}})})}}}const St="https://hknrbmfihwwaepwhfhbi.supabase.co",Ct="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrbnJibWZpaHd3YWVwd2hmaGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyNDA2OTAsImV4cCI6MjAzNjgxNjY5MH0.pgIz0EqpbQFXXLlu5m-8ejB8Q6jjXYv1V2uqBTY3HpA",Dt=Ae(St,Ct),Fe=()=>{var a;const t=J(dt),o=u.useRef(null),r=u.useRef(null);u.useState(!1);const s=new Date,d=new Date(s.getTime()+24*60*60*1e3),m=new Date(s.getTime()-24*60*60*1e3),[x,w]=u.useState(),[I,v]=u.useState(),[H,P]=u.useState(!1),[y,W]=u.useState({}),[f,G]=u.useState(null),[oe,O]=u.useState(!1),z=J($e),X=J(De),pe=J(xt),[k,he]=u.useState(null),ne=Ee(),Z="bed1848ba67a4ff12b0e3c2f5c0421fe",{lat:q,lon:c,time:l}=tt();u.useState(!1);const[g,h]=u.useState(),[S,C]=u.useState(0);Se();function T(){navigator.permissions?navigator.permissions.query({name:"geolocation"}).then(i=>{i.state==="granted"?N():i.state==="prompt"?navigator.geolocation.getCurrentPosition(n=>{N()},n=>{console.error("Error getting user location:",n.message)}):console.error("Geolocation permission denied or unavailable.")}):console.error("Permissions API is not supported in this browser.")}function N(){navigator.geolocation.getCurrentPosition(i=>{const n=i.coords.latitude,p=i.coords.longitude;return f.setView([n,p],14),p},i=>{console.error("Error getting user location:",i.message)})}function U(i){var n=document.getElementById(`circleRadio${i}`),p=document.getElementById(`radiusSlider${i}`);n.checked?p.style.display="block":p.style.display="none"}function ue(i){var n=document.getElementById(`pointRadio${i}`);return n.checked?"Point":"Circle"}function me(i){var n=document.getElementById(`circleRadio${i}`),p=document.getElementById(`radius${i}`);return n.checked?p.value:0}function fe(){f.closePopup()}function ge(i,n,p,b,F,R,E,A,V){const se=document.getElementById(`bad-length${V}`);var _=document.getElementById(`bad-words${V}`);_.style.display="none",se.style.display="none";const $=new et;if(n<-180||n>180){var i=i-Math.floor((i+90)/180)*180,n=n-Math.floor((n+180)/360)*360;f.setView([i,n],13)}if(E.length>200){const j=document.getElementById(`bad-length-value${V}`);se.style.display="block",j.textContent=E.length-200+" characters over the limit";const M=f.getSize(),K={lat:i,lng:n},we=f.getBounds(),ve=f.containerPointToLatLng([M.x/2,M.y-0]),je=K.lat-(ve.lat-we.getCenter().lat);f.panTo([je,K.lng])}else if($.isProfane(E)){const j=xe(E,$.clean(E));var Q=document.getElementById(`bad-words-found${V}`);Q.textContent=j,_.style.display="block";const M=f.getSize(),K={lat:i,lng:n},we=f.getBounds(),ve=f.containerPointToLatLng([M.x/2,M.y-0]),je=K.lat-(ve.lat-we.getCenter().lat);f.panTo([je,K.lng])}else ye(i,n,p,b,R,E),f.closePopup()}function xe(i,n){const p=i.split(" "),b=n.split(" ");var F="";for(let R=0;R<p.length;R++)b[R].includes("*")&&(F+=p[R]+" ");return F}const ye=async(i,n,p,b,F,R)=>{var E="N/A";try{const j=await(await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${i}&lon=${n}&limit=1&appid=${Z}`)).json();j[0]&&j[0].country&&j[0].country==="US"?E=`${j[0].name},${j[0].state}, ${j[0].country}`:j[0]&&j[0].country?E=`${j[0].name}, ${j[0].country}`:E="N/A"}catch($){throw console.error($),new Error("Error fetching location data")}F==0&&(F=null);let A={latitude:i,longitude:n,created_at:b,type:parseInt(p,10),icon_type:null,text:R,image:null,creator_id:10,radius:F,location:E};const V=new Date(x),se=new Date(I);var _=Object.keys(y).filter($=>y[$]);_.length===0&&(_="All"),k.insert(A,V,se,_),A.created_at=A.created_at.toLocaleString(),ne(lt(A));try{const{data:$,error:Q}=await Dt.from("hazards").insert([{type:A.type,latitude:A.latitude,longitude:A.longitude,text:A.text,radius:A.radius,location:A.location}]).select();if(Q)throw Q}catch($){console.error($)}},ie=i=>{const n=Math.floor(Math.random()*1e8)+1;var p=`
                      <div>
                          <h3>Please select a type of issue</h3>
                          <select name="hazard" id="hazard${n}">
                              ${X.map(b=>`
                                  <option value="${b.id}">${b.name}</option>
                              `).join("")}
                          </select>
                          <input type="text" id="textInput${n}" placeholder= "description"> 
                          <div id ="bad-length${n}" style="display:none;">
                            <p>The text entered exceeds character limit</p>
                            <p id = "bad-length-value${n}" ></p>
                          </div>
                          <div id ="bad-words${n}" style="display:none;">
                            <p id ="bad-words-caught${n}" >The text you attempted to submit contains a word not allowed in our service</p>
                            <p id = "bad-words-found${n}" ></p>
                          </div>
                      </div>
                      <div>
                          <input type="radio" name="htype" id="pointRadio${n}" checked> Point<br />
                          <input type="radio" name="htype" id="circleRadio${n}"> Circle<br />
                          <div id="radiusSlider${n}" style="display:none;">
                              <label for="radius">Radius:</label>
                              <input type="range" id="radius${n}" name="radius" min="1" max="200" value="100">
                              <span id="radiusValue${n}">50</span> meters
                          </div>
                          <button id="closeButton${n}">Close</button>
                          <button id="submitButton${n}">Submit</button>
                      </div>
                  `;a=ae.popup().setLatLng(i.latlng).setContent(p).openOn(f),document.getElementById(`pointRadio${n}`).addEventListener("click",()=>U(n)),document.getElementById(`circleRadio${n}`).addEventListener("click",()=>U(n)),document.getElementById(`closeButton${n}`).addEventListener("click",()=>fe()),document.getElementById(`radius${n}`).addEventListener("input",()=>{document.getElementById(`radiusValue${n}`).textContent=document.getElementById(`radius${n}`).value}),document.getElementById(`submitButton${n}`).addEventListener("click",()=>ge(i.latlng.lat,i.latlng.lng,document.getElementById(`hazard${n}`).value,new Date,ue(n),me(n),document.getElementById(`textInput${n}`).value,a,n))},be=async()=>{ne(Ce()),h(!0)};u.useEffect(()=>{if(g&&z.length!=S&&k){const n=new Date(x),p=new Date(I);var i=Object.keys(y).filter(b=>y[b]);i.length===0&&(i="All"),k.update(z,n,p,i),C(z.length),h(null)}},[z,g]),u.useEffect(()=>{if(z.length>0){const i=()=>{if(!o.current._leaflet_id)if(!isNaN(parseFloat(q))&&!isNaN(parseFloat(c))&&!isNaN(parseFloat(l))){const n=new Date(parseFloat(l)-864e5),p=new Date(parseFloat(l)+24*60*60*1e3);w(n.toISOString()),v(p.toISOString()),G(ae.map(o.current).setView([parseFloat(q),parseFloat(c)],18))}else w(m.toISOString()),v(d.toISOString()),G(ae.map(o.current).setView([44.564568,-123.262047],15))};o.current&&i()}return()=>{}},[z]),u.useEffect(()=>{if(f&&!oe){O(!1),ae.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(f),r.current=f;const i=new jt(z,f,X,Z,pe);C(z.length),he(i),isNaN(parseFloat(q))&&T()}},[f,oe]),u.useEffect(()=>{if(k){Date.now()-t>5*1e3&&be(),f.on("click",p=>ie(p));var i,n;isNaN(parseFloat(l))?(i=m,n=d):(i=new Date(parseFloat(l)-24*60*60*1e3),n=new Date(parseFloat(l)+24*60*60*1e3)),k.filter(i,n,"All"),f.on("zoomend",function(){f.getZoom()>=13?Ve():Ue()})}},[k]);const Ie=()=>{const i=new Date(x),n=new Date(I);var p=Object.keys(y).filter(b=>y[b]);p.length===0&&(p="All"),k.filter(i,n,p)},Je=i=>{W(n=>({...n,[i]:!n[i]}))},Ue=()=>{k.group()},Ve=()=>{const i=new Date(x),n=new Date(I);var p=Object.keys(y).filter(F=>y[F]);p.length===0&&(p="All"),k.unGroup(i,n,p,Z),Ie();const b=document.getElementById("desperate");if(b){const F=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});b.dispatchEvent(F)}},_e=Ke`
 text-align: right;
 position: relative;
 z-index: 1000;
`;return re("div",{children:[B("div",{css:_e,children:x&&I&&re("div",{children:["Start Date:",B("input",{type:"date",id:"startDate",value:x.split("T")[0],onChange:i=>w(i.target.value)}),"End Date:",B("input",{type:"date",id:"endDate",value:I.split("T")[0],onChange:i=>v(i.target.value)}),re("div",{id:"list1",className:"dropdown-check-list",tabIndex:"100",children:[B("span",{className:"anchor",onClick:()=>P(!H),children:"Hazard Types"}),H&&B("ul",{className:"items",children:X.map(i=>re("li",{children:[B("input",{id:i.id,value:i.name,type:"checkbox",checked:y[i.name]||!1,onChange:()=>Je(i.name)}),i.name]},i.id))})]}),B("button",{id:"desperate",onClick:Ie,children:"Submit"})]})}),B("div",{ref:o,id:"map",style:{height:"70vh"}}),B("p",{children:"To create a hazard, first be signed in, then click anywhere on the map"})]})},te=D(de)`
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
`;const kt=D.img`
  height: auto;
  width: auto;
  max-width: 300px;
  max-height: 300px;
`,Ft=D.nav`
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
`,Et=()=>(Se(),e.jsx(Ft,{children:e.jsxs("ul",{className:"links",children:[e.jsx("li",{className:"start",children:e.jsx(te,{to:"/",title:"Home",children:"Home"})}),e.jsx("li",{children:e.jsx(te,{to:"/map",title:"Map",children:"Map"})}),e.jsx("li",{children:e.jsx(te,{to:"/dataView",className:"dataView",children:"DataView"})}),e.jsx("li",{children:e.jsx(te,{to:"/about",title:"About",children:"About"})})]})})),At=({id:a,created_at:t,type:o,latitude:r,longitude:s,text:d,radius:m,location:x,onClick:w})=>{var y;const I=J(De),v=Y.td`
        border-style: solid;
        padding: 8px;
        text-align: left;
    `,H=new Date(t),P=()=>{w&&w({latitude:r,longitude:s})};return e.jsxs("tr",{onClick:P,children:[e.jsx(v,{children:a}),e.jsx(v,{children:H.toLocaleString()}),e.jsx(v,{children:((y=I.find(W=>W.id===o))==null?void 0:y.name)||"Other"}),x==="N/A"?e.jsxs(v,{children:[r,",",s]}):e.jsx(v,{children:x}),e.jsx(v,{children:d}),e.jsx(v,{children:m})]})},zt=()=>{const a=J($e),[t,o]=u.useState([]),r=J(De),s=new Date;u.useState();const d=new Date(s.getTime()-3*31*24*60*60*1e3),[m,x]=u.useState(d.toISOString()),[w,I]=u.useState(s.toISOString()),[v,H]=u.useState(!1),[P,y]=u.useState({});u.useRef();const W=ot(),f=()=>{x(d.toISOString()),I(s.toISOString()),H(!1),y({}),G()},G=c=>{const l=new Date(m),g=new Date(w);var h=Object.keys(P).filter(C=>P[C]);console.log(c),h.length===0&&(h="All"),console.log(l,g,h);var S=a.map(C=>({...C}));X(l,g,h,S,c)},oe=c=>{y(l=>({...l,[c]:!l[c]}))},O=Y.th`
      
      border-style: solid;
      padding: 8px;
      textAlign: left;
      `,z=Y.table`
      border-collapse: collapse;
      width: 100%;
      @media print {
        color: black; /* Change font color to black */
    }
  `;u.useEffect(()=>{const c=[];a.forEach(l=>{c.push(JSON.parse(JSON.stringify(l)))}),[...c].sort((l,g)=>new Date(g.created_at)-new Date(l.created_at)),o(c)},[a]);const X=(c,l,g,h,S)=>{console.log(S),h=k(c,l,h),h=he(g,h),S&&S.length>0&&(h=pe(h,S));const C=[...h].sort((N,U)=>new Date(U.created_at)-new Date(N.created_at));o(C);const T=document.getElementById("locationSearch");T.value=S},pe=(c,l)=>{console.log("filter by name: ",l);var g=l.split(",").map(h=>h.trim().toLowerCase());return c=c.filter(h=>{var S=h.location.split(",").map(T=>T.trim().toLowerCase());let C=0;return g.forEach(T=>{S.forEach(N=>{T===N&&C++})}),C>=g.length}),c},k=(c,l,g)=>(g=g.filter(h=>new Date(h.created_at).getTime()>c.getTime()&&new Date(h.created_at).getTime()<l.getTime()),g),he=(c,l)=>(c!="All"&&(l=l.filter(g=>c.includes(g.type.toString()))),console.log(l),l),ne=c=>{const l=new Date(c.created_at).getTime(),g=`/map/${c.latitude}/${c.longitude}/${l}`;W(g)},Z=()=>{var c=`ID,Created At,Type,Location,Text,Radius,latitude,longitude
`;t.forEach(S=>{var ie;var{id:C,created_at:T,type:N,location:U,text:ue,radius:me,latitude:fe,longitude:ge}=S,xe=((ie=r.find(be=>be.id===N))==null?void 0:ie.name)||"Other",ye=`${C},"${T}","${xe}","${U}","${ue}",${me},"${fe},${ge}"
`;c+=ye});var l=new Blob([c],{type:"text/csv;charset=utf-8;"}),g=URL.createObjectURL(l),h=document.createElement("a");h.href=g,h.download="hazards_data.csv",document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(g)},q=Y.div`
    position: relative;
    z-index: 1000;
   `;return e.jsxs(q,{children:[e.jsx("input",{id:"locationSearch",type:"text",placeholder:"EX: Corvallis, Oregon, US"}),e.jsxs("div",{children:["Start Date:",e.jsx("input",{type:"date",id:"startDate",value:m.split("T")[0],onChange:c=>x(c.target.value)}),"End Date:",e.jsx("input",{type:"date",id:"endDate",value:w.split("T")[0],onChange:c=>I(c.target.value)}),e.jsxs("div",{id:"list1",className:"dropdown-check-list",tabIndex:"100",children:[e.jsx("span",{className:"anchor",onClick:()=>H(!v),children:"Hazard Types"}),v&&e.jsx("ul",{className:"items",children:r.map(c=>e.jsxs("li",{children:[e.jsx("input",{id:c.id,value:c.id,type:"checkbox",checked:P[c.id]||!1,onChange:()=>oe(c.id)}),c.name]},c.id))})]}),e.jsx("button",{onClick:()=>{const c=document.getElementById("locationSearch");console.log(c.value);const l=c.value;G(l)},children:"Submit"}),e.jsx("button",{onClick:f,children:"Clear Filters"}),e.jsx("button",{onClick:Z,children:"Save"})]}),e.jsxs(z,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(O,{children:"ID"}),e.jsx(O,{children:"Created At"}),e.jsx(O,{children:"Type"}),e.jsx(O,{children:"Location"}),e.jsx(O,{children:"Text"}),e.jsx(O,{children:"Radius"})]})}),e.jsx("tbody",{children:t.map(c=>e.jsx(At,{onClick:()=>ne(c),...c},c.id))})]})]})},$t="/assets/mapillustration-DIBzkvWx.png",He=D.div`
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


`,Ot=D.button`
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
`,Nt=()=>e.jsx(Lt,{children:e.jsx("div",{className:"content",children:e.jsxs(He,{children:[e.jsxs(Pe,{children:[e.jsx("h1",{children:"Stay Informed on Local Hazards"}),e.jsx("br",{}),e.jsxs("p",{children:[e.jsx("strong",{children:"Do you value your safety?"}),e.jsx("br",{})," ",e.jsx("strong",{children:"Want to help your loved ones and your community stay safe?"}),e.jsx("br",{})," ",e.jsx("br",{})," We've got you covered, stay up to date and reports hazard in your area with HazardWatch!"]}),e.jsx(Ot,{children:e.jsx(de,{to:"/map",children:"View Map"})})]}),e.jsx(Tt,{children:e.jsx("img",{src:$t,alt:"Map Illustration"})})]})})}),Me=it`
 

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
`,Rt="/assets/teamPic-wZFRJGqY.jpg",Ht=()=>e.jsxs(e.Fragment,{children:[e.jsx(Me,{}),e.jsx("html",{children:e.jsx("body",{children:e.jsx(He,{children:e.jsxs(Pe,{children:[e.jsx("h1",{children:"About Us"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Our Mission"}),e.jsxs("p",{children:["At HazardWatch, we prioritize your safety by providing real-time updates on local hazards.",e.jsx("br",{}),"Our goal is to help you and your loved ones stay informed and prepared for any potential threats in your area.",e.jsx("br",{}),"National and Local alert systems often miss hazards and are succeptible to delay.",e.jsx("br",{}),"We set out to fix this using help from millions keen-eyed people like yourself to provide a trustworthy, constantly updated map of hazard alerts."]})]}),e.jsx("h1",{children:"Development Team"}),e.jsx(Bt,{children:e.jsx("img",{src:Rt,alt:"Team"})}),e.jsxs("section",{children:[e.jsx("a",{href:"https://github.com/CGA15/Corvallis-Hazard-Watch",children:e.jsx("h2",{children:"GitHub"})}),e.jsx("a",{href:"https://github.com/CGA15/Corvallis-Hazard-Watch",children:e.jsx("p",{children:'https://github.com/CGA15/Corvallis-Hazard-Watch"'})}),e.jsx("h2",{children:"Contact Information"}),e.jsx("p",{children:"Email: corvallis-hazardwatch@proton.me"}),e.jsx("p",{children:"Address: 123 Safe Street, Safety City, Safe Country"}),e.jsx("p",{children:e.jsx("b",{children:"**The above address info is a placeholder values because website is still under construction**"})})]})]})})})})]}),Pt=()=>{const{isLoading:a,error:t}=Se(),o=Ee();return u.useEffect(()=>{o(Be()),o(Le()),o(Ce())},[o]),Y.h1`
    display: flex
  `,Y.div`
  margin-right: 1em;
  border-style: solid;
  border-radius: 18px;
  width: fit-content;
  background: lightslategrey;
  `,t?e.jsxs("div",{children:["Oops... ",t.message]}):e.jsxs(Qe,{children:[e.jsx(Me,{}),e.jsxs(It,{children:[e.jsx(de,{to:"/",children:e.jsx(kt,{src:vt,alt:"Hazard Logo"})}),e.jsx(Et,{})]}),e.jsx("main",{style:{marginTop:"100px"},children:e.jsxs(nt,{children:[e.jsx(ee,{path:"/",element:e.jsx(Nt,{})}),e.jsx(ee,{path:"/map",element:e.jsx(Fe,{})}),e.jsx(ee,{path:"/map/:lat/:lon/:time",element:e.jsx(Fe,{})}),e.jsx(ee,{path:"/dataView",element:e.jsx(zt,{})}),e.jsx(ee,{path:"/about",element:e.jsx(Ht,{})})]})})]})};Ge.createRoot(document.getElementById("root")).render(e.jsx(We.StrictMode,{children:e.jsx(Ze,{domain:"dev-6m2d6yf4ffilgk3i.us.auth0.com",clientId:"kzqh8vmwcVoVFm5ipNO8rxmYsjMg8950",authorizationParams:{redirect_uri:window.location.origin},children:e.jsx(Xe,{store:Re,children:e.jsx(Pt,{})})})}));
