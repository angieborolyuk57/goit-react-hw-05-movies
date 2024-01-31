"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[997],{997:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(791),a=n(87),i=n(784),c=n(31),o="Movies_container__+-Cnt",s="Movies_form__4ow+Z",u="Movies_input__KrUqs",p="Movies_submitBtn__7axAC",f="Movies_movieList__FD6N4",l="Movies_movieListItem__VgK6i",m="Movies_poster__Yc3Qb",v="Movies_movieTitle__lz38M",d=n(861),h=n(439),y=n(757),_=n.n(y),x=n(689),Z=n(390),w=n(70),b=function(){var e=(0,a.lr)(),t=(0,h.Z)(e,2),n=t[0],i=t[1],c=(0,r.useState)([]),o=(0,h.Z)(c,2),s=o[0],u=o[1],p=(0,r.useState)(!1),f=(0,h.Z)(p,2),l=f[0],m=f[1],v=n.get("query"),y=(0,x.TH)();(0,r.useEffect)((function(){if(v){var e=function(){var e=(0,d.Z)(_().mark((function e(){var t;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,Z.XT)(v);case 4:t=e.sent,u(t.results),w.mm(t,i),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),w.qQ(e.t0.message);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[v,i]);return{movies:s,isLoading:l,location:y,handleSubmit:function(e){e.preventDefault();var t=e.currentTarget,n=t.elements.searchQuery.value.trim();i({query:n}),(!!n||(w.Km(),!1))&&t.reset()}}},k=n(184),g=function(){var e=b(),t=e.movies,n=e.isLoading,r=e.location,d=e.handleSubmit;return(0,k.jsxs)("div",{className:o,children:[n&&(0,k.jsx)(i.Z,{}),(0,k.jsxs)("form",{className:s,onSubmit:d,children:[(0,k.jsx)("input",{type:"text",name:"searchQuery",autoComplete:"off",placeholder:"Search movies...",className:u}),(0,k.jsx)("button",{type:"submit",className:p,children:"Search"})]}),t.length>0&&(0,k.jsx)("ul",{className:f,children:t.map((function(e){return(0,k.jsx)("li",{className:l,children:(0,k.jsxs)(a.rU,{state:{from:r},to:"/movies/".concat(e.id),children:[(0,k.jsx)("img",{className:m,src:e.poster_path?"https://image.tmdb.org/t/p/w200/".concat(e.poster_path):c,alt:e.title}),(0,k.jsx)("p",{className:v,children:e.title})]})},e.id)}))})]})}},390:function(e,t,n){n.d(t,{Df:function(){return s},TP:function(){return u},XT:function(){return l},tx:function(){return f},zv:function(){return p}});var r=n(861),a=n(757),i=n.n(a),c=n(294),o=n(70),s=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o.ZP.url,"trending/movie/day?api_key=").concat(o.ZP.key));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o.ZP.url,"movie/").concat(t,"?api_key=").concat(o.ZP.key));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o.ZP.url,"movie/").concat(t,"/credits?api_key=").concat(o.ZP.key));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o.ZP.url,"movie/").concat(t,"/reviews?api_key=").concat(o.ZP.key));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o.ZP.url,"search/movie?api_key=").concat(o.ZP.key,"&query=").concat(t,"&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},70:function(e,t,n){n.d(t,{Km:function(){return i},mm:function(){return c},qQ:function(){return a}});var r=n(694);t.ZP={url:"https://api.themoviedb.org/3/",key:"7bade8181fde7cd628993717c20b9542"};var a=function(e){r.Notify.failure("Please, try again later. Error: ".concat(e),{width:"280px",showOnlyTheLastOne:!0,position:"center-center",timeout:3e3,fontSize:"13px",borderRadius:"8px",cssAnimationStyle:"from-top"})},i=function(){return r.Notify.failure("The search field cannot be empty, please try again.",{width:"280px",showOnlyTheLastOne:!0,position:"center-center",timeout:2e3,fontSize:"15px",borderRadius:"8px",cssAnimationStyle:"from-top"}),""},c=function(e,t){if(0===e.total_results)return r.Notify.failure("Sorry, there are no movies matching your search query. Please try again.",{width:"260px",showOnlyTheLastOne:!0,position:"center-center",timeout:2e3,fontSize:"15px",borderRadius:"8px",cssAnimationStyle:"from-top"}),void t({query:""})}},31:function(e,t,n){e.exports=n.p+"static/media/coming_soon.6c85f80f853d039afb5d.jpg"}}]);
//# sourceMappingURL=997.07bc5d77.chunk.js.map