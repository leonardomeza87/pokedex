(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(8),i=c.n(s),r=c(5),j=(c(13),c(2)),o=(c(14),c(3)),b=c.p+"static/media/bug.259056df.jpg",l=c.p+"static/media/dark.af2c9f86.jpg",d=c.p+"static/media/dragon.84cada9c.jpg",u=c.p+"static/media/electric.45bc0a04.jpg",f=c.p+"static/media/fairy.081d6f3b.jpg",p=c.p+"static/media/fighting.0f78d767.jpg",O=c.p+"static/media/fire.23fb1b94.jpg",m=c.p+"static/media/flying.a6b05cbf.jpg",g=c.p+"static/media/ghost.6d30e4a9.jpg",h=c.p+"static/media/grass.603ef7de.jpg",k=c.p+"static/media/ground.cf0019cd.jpg",x=c.p+"static/media/ice.a9701c71.jpg",v=c.p+"static/media/normal.7f9a782c.jpg",y=c.p+"static/media/poison.d42b94f2.jpg",S=c.p+"static/media/psychic.db84422a.jpg",A=c.p+"static/media/rock.b8cbfec1.jpg",N=c.p+"static/media/steel.b174dee6.jpg",C=c.p+"static/media/water.cbfd2c2c.jpg",w=c(1),E=function(e){var t=e.type;return Object(w.jsx)("div",{className:"type "+t,children:Object(w.jsx)("p",{children:function(e){var t=e[0];return e.replace(t,t.toUpperCase())}(t)})})},F=function(e){var t=e.url,c=Object(a.useState)(null),n=Object(o.a)(c,2),s=n[0],i=n[1];Object(a.useEffect)((function(){fetch(t).then((function(e){return e.json()})).then((function(e){i(e)}))}),[t]);var r=Object(a.useState)(!1),j=Object(o.a)(r,2),F=j[0],I=j[1],L=Object(a.useState)(null),T=Object(o.a)(L,2),B=T[0],J=T[1],P=Object(a.useState)(null),z=Object(o.a)(P,2),D=z[0],M=z[1];Object(a.useEffect)((function(){if(s)switch(J(null),I(!1),setTimeout((function(){return J(s.sprites.other["official-artwork"].front_default)})),s.types[0].type.name){case"bug":M(b);break;case"dark":M(l);break;case"dragon":M(d);break;case"electric":M(u);break;case"fairy":M(f);break;case"fighting":M(p);break;case"fire":M(O);break;case"flying":M(m);break;case"ghost":M(g);break;case"grass":M(h);break;case"ground":M(k);break;case"ice":M(x);break;case"normal":default:M(v);break;case"poison":M(y);break;case"psychic":M(S);break;case"rock":M(A);break;case"steel":M(N);break;case"water":M(C)}}),[s]);return Object(w.jsx)("div",{className:"card",children:s&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"pictures",children:[Object(w.jsx)("div",{className:"background",children:Object(w.jsx)("img",{src:D,alt:""})}),Object(w.jsx)("div",{className:"pokemon",children:Object(w.jsx)("img",{src:B,alt:"",className:F?"ready":void 0,onLoad:function(){I(!0)},loading:"lazy"})})]}),Object(w.jsxs)("div",{className:"info",children:[Object(w.jsx)("div",{className:"icon"}),s.types.map((function(e,t){return Object(w.jsx)(E,{type:e.type.name},t)})),Object(w.jsx)("h2",{children:"#".concat(s.id)}),Object(w.jsx)("h3",{children:s.name})]})]})})},I=function(e){var t=e.data;return Object(w.jsx)("div",{className:"generator",children:t&&t.results&&t.results.map((function(e,t){return Object(w.jsx)(F,{url:e.url},t)}))})},L=function(){var e=Object(r.c)(),t=Object(o.a)(e,2),c=t[0],n=t[1],s=function(e){var t=c.get(e);return null!==t?parseInt(t):null},i=Object(a.useCallback)(s,[c]),j=Object(a.useState)(s("offset")?s("offset"):0),b=Object(o.a)(j,2),l=b[0],d=b[1],u=Object(a.useState)(s("limit")?s("limit"):5),f=Object(o.a)(u,2),p=f[0],O=f[1];Object(a.useEffect)((function(){var e=i("offset"),t=i("limit");d(null!==e?e:0),O(null!==t?t:5)}),[i]);var m=Object(a.useState)(!0),g=Object(o.a)(m,2),h=(g[0],g[1],Object(a.useState)(1118)),k=Object(o.a)(h,2),x=(k[0],k[1],Object(a.useState)(null)),v=Object(o.a)(x,2),y=v[0],S=v[1];Object(a.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon?offset=".concat(l,"&limit=").concat(p)).then((function(e){return e.json()})).then((function(e){console.log(e),S(e)}))}),[l,p]);return Object(w.jsxs)("div",{children:[Object(w.jsx)(I,{data:y}),Object(w.jsxs)("nav",{children:[Object(w.jsx)(r.b,{to:"/",children:"Inicio"}),Object(w.jsx)("button",{onClick:function(){n(l-p>=0?{offset:l-p,limit:p}:{offset:0,limit:p})},children:"Atras"}),Object(w.jsx)("button",{onClick:function(){n({offset:l+p,limit:p})},children:"Adelante"})]})]})},T=function(){var e=Object(j.g)().pokemon;return console.log(e),Object(w.jsx)("div",{children:Object(w.jsx)("p",{children:"AAAAAAAAaaaa"})})};var B=function(){return Object(w.jsxs)(j.c,{children:[Object(w.jsx)(j.a,{path:"/",element:Object(w.jsx)(L,{})}),Object(w.jsx)(j.a,{path:":pokemon",element:Object(w.jsx)(T,{})})]})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(r.a,{children:Object(w.jsx)(B,{})})}),document.getElementById("root")),J()}},[[16,1,2]]]);
//# sourceMappingURL=main.9a555b77.chunk.js.map