"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[566],{1687:function(n,e,t){t.d(e,{Hx:function(){return d},Qk:function(){return l},Tg:function(){return o},Y5:function(){return p},bI:function(){return u},xc:function(){return f}});var r=t(5861),a=t(7757),i=t.n(a),c=t(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="51152509db377696be1781d05c6af581",o=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(s,"&page=1"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(s));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function l(n){return n?"https://image.tmdb.org/t/p/w300/".concat(n):"https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg"}},4321:function(n,e,t){t.d(e,{a:function(){return i}});var r=t(4137),a=t(184),i=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Rf,{color:"#4fa94d",width:"100",visible:!0,ariaLabel:"falling-lines-loading"})})}},6566:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,i,c=t(5861),s=t(9439),o=t(7757),u=t.n(o),p=t(7689),f=t(2791),d=t(1087),l=t(8174),h=t(4321),v=t(1687),x=t(168),g=t(7924),m=g.ZP.div(r||(r=(0,x.Z)(["\n  width: 200px;\n  height: 270px;\n"]))),w=g.ZP.div(a||(a=(0,x.Z)(["\n  width: 600px;\n  margin-left: 10px;\n"]))),j=t(184),k=function(n){var e=n.movies,t=e.poster_path,r=e.original_title,a=e.vote_average,i=e.overview,c=e.genres,s=Math.round(10*a);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(m,{children:(0,j.jsx)("img",{src:(0,v.Qk)(t),alt:"poster"})}),(0,j.jsxs)(w,{children:[(0,j.jsx)("h1",{children:r}),(0,j.jsxs)("p",{children:["User Check: ",s,"%"]}),(0,j.jsx)("h2",{children:"Overview"}),(0,j.jsx)("p",{children:i}),(0,j.jsx)("h2",{children:"Genres"}),c?c.map((function(n,e){return(0,j.jsx)("p",{children:n.name},e)})):"Genres is not available"]})]})},Z=t(9126),b=(0,g.ZP)(d.rU)(i||(i=(0,x.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  :hover {\n    color: orangered;\n  }\n"]))),_=function(n){var e=n.to,t=n.children;return(0,j.jsxs)(b,{to:e,children:[(0,j.jsx)(Z.O6K,{size:"24"}),t]})},y=function(){var n,e,t=(0,f.useState)([]),r=(0,s.Z)(t,2),a=r[0],i=r[1],o=(0,f.useState)(!1),x=(0,s.Z)(o,2),g=x[0],m=x[1],w=(0,p.UO)().id,Z=null!==(n=null===(e=(0,p.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,f.useEffect)((function(){function n(){return(n=(0,c.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,(0,v.Y5)(w);case 4:e=n.sent,i(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),l.Am.error("something went wrong");case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[w]),(0,j.jsxs)("div",{children:[g&&(0,j.jsx)(h.a,{}),(0,j.jsx)(_,{to:Z,children:"Go Back"}),!g&&(0,j.jsx)(k,{movies:a}),(0,j.jsxs)("ul",{children:[(0,j.jsx)(d.rU,{to:"reviews",state:{from:Z},children:"Reviews"}),(0,j.jsx)(d.rU,{to:"cast",state:{from:Z},children:"Cast"})]}),(0,j.jsx)(p.j3,{})]})}}}]);
//# sourceMappingURL=566.4423f994.chunk.js.map