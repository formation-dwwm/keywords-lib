(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[569],{1863:function(t,r,e){"use strict";e.d(r,{y:function(){return u}});e(7294);var i=e(5734),n=e(5444),o=e(5713);var a={name:"rzpvw",styles:"color:#555"},s={name:"o171kl",styles:"text-decoration:none;color:inherit"},u=function(t){var r=t.id,e=t.slug,u=t.title,h=void 0===u?"No title":u,l=t.excerpt,f=void 0===l?"":l,p=t.authors,c=void 0===p?[]:p;return(0,i.tZ)("div",{key:r},(0,i.tZ)(n.rU,{to:e,css:s},(0,i.tZ)("h3",{css:(0,i.iv)("margin-bottom:",(0,o.qZ)(1/4),";","")},h," ",(0,i.tZ)("span",{css:a},"— ",c.map((function(t){return(0,i.tZ)("span",null,t.frontmatter.username)})))),(0,i.tZ)("p",null,f)))}},6786:function(t,r,e){"use strict";e.d(r,{n:function(){return f}});var i=e(7294),n=e(2122);var o=function(){function t(t,r,e){this.h=t,this.s=r,this.v=e}return t.prototype.toRGB=function(){return t.hsv2rgb(this.h,this.s,this.v)},t}();function a(t,r){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return s(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}function s(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,i=new Array(r);e<r;e++)i[e]=t[e];return i}o.hsv2rgb=function(t,r,e){var i=function(i,n){return void 0===n&&(n=(i+t/60)%6),e-e*r*Math.max(Math.min(n,4-n,1),0)};return[i(5),i(3),i(1)]};var u=function(){function t(t,r,e){void 0===t&&(t=10),void 0===r&&(r=80),void 0===e&&(e=2),this.spriteSize=t,this.exportSize=r,this.initGrid(),this.image=null,this.DEBUG=!1,this.init(e),this.update(this.rndColor,new o(0,0,.3))}var r=t.prototype;return r.countNeighborhood=function(t,r){var e=0;return t>=1&&(e+=this.spriteGrid[t-1][r].previous),t<=this.spriteSize-2&&(e+=this.spriteGrid[t+1][r].previous),r>=1&&(e+=this.spriteGrid[t][r-1].previous),r<=this.spriteSize/2-2&&(e+=this.spriteGrid[t][r+1].previous),e},r.grow=function(){for(var t=1;t<this.spriteSize-1;++t)for(var r=1;r<this.spriteSize/2;++r){var e=this.spriteGrid[t][r].previous,i=this.countNeighborhood(t,r);this.spriteGrid[t][r].current=0==e&&i<=1||1==e&&(2==i||3==i)}for(var n,o=a(this.spriteGrid);!(n=o()).done;)for(var s,u=a(n.value);!(s=u()).done;){var h=s.value;h.previous=h.current}},r.initGrid=function(){this.spriteGrid=[];for(var t=0;t<this.spriteSize;++t){this.spriteGrid[t]=[];for(var r=0;r<this.spriteSize/2;++r)this.spriteGrid[t][r]={previous:!1,current:!1}}},r.init=function(t){for(var r=1;r<this.spriteSize-1;++r)for(var e=1;e<this.spriteSize/2;++e)this.spriteGrid[r][e]={previous:!!(Math.random()<.5),current:!1};this.rndColor=new o(360*Math.random(),.6,.6+(.8-.6)*Math.random());for(var i=0;i<t;++i)this.DEBUG&&(console.log("===================[Iter "+i+"]==================="),this.printGrid()),this.grow()},r.update=function(t,r){this.image=this.grid2image(this.exportSize,t,r)},r.printGrid=function(){for(var t="",r=0;r<this.spriteSize;++r){for(var e=0;e<this.spriteSize/2;++e)t+=this.spriteGrid[r][e].previous?"o":".";for(var i=0;i<this.spriteSize/2;++i)t+=this.spriteGrid[r][Math.floor(this.spriteSize/2-i-1)].previous?"o":".";t+="\n"}console.log(t)},r.getImage=function(){return this.image},r.grid2image=function(t,r,e){for(var i=Math.round(t/this.spriteSize/Math.sqrt(2)),n=Math.floor((t-this.spriteSize*i)/2),a=t%2,s=[],u=0;u<t;++u){s[u]=[];for(var h=0;h<t;++h)s[u][h]=e}for(var l=0;l<this.spriteSize*i;++l)for(var f=0;f<this.spriteSize*i/2;++f){var p=n+l,c=n+f,d=t-(c+1)-a;this.spriteGrid[Math.floor(l/i)][Math.floor(f/i)].previous?s[p][c]=s[p][d]=r:this.countNeighborhood(Math.floor(l/i),Math.floor(f/i))&&(s[p][c]=s[p][d]=new o(r.h-15,r.s,.4*r.v))}return s},r.getDataURL=function(t){for(var r=t.getContext("2d"),e=r.createImageData(this.exportSize,this.exportSize),i=0;i<this.exportSize;++i)for(var n=0;n<this.exportSize;++n){var o=4*(i*this.exportSize+n),a=this.image[i][n].toRGB().map((function(t){return Math.floor(255*t)})),s=a[0],u=a[1],h=a[2];e.data[o]=s,e.data[o+1]=u,e.data[o+2]=h,e.data[o+3]=255}return r.putImageData(e,0,0),t.toDataURL()},t}(),h=e(5734),l=function(t){var r=t.url,e=function(t,r){if(null==t)return{};var e,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)e=o[i],r.indexOf(e)>=0||(n[e]=t[e]);return n}(t,["url"]),o=(0,i.useState)(r),a=o[0],s=o[1],l=(0,i.useRef)();return(0,i.useEffect)((function(){if((!r||""==r)&&l.current){var t=new u(10,96,5).getDataURL(l.current);s(t)}}),[r]),(0,h.tZ)(i.Fragment,null,(0,h.tZ)("canvas",{ref:l,height:96,width:96,style:{display:"none",width:"96px",height:"96px"}}),(0,h.tZ)("img",(0,n.Z)({src:a},e,{alt:""})))};var f=function(t){return(0,h.tZ)("div",{className:"user-module--user--3vK3v"},(0,h.tZ)(l,{url:t.avatar,className:"user-module--avatar--X5dpJ"}),(0,h.tZ)("div",{className:"user-module--description--2GISF"},(0,h.tZ)("h2",{className:"user-module--username--1f4Sw"},t.username),(0,h.tZ)("p",{className:"user-module--excerpt--1bOlM"},t.excerpt)))}},7179:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return u}});var i=e(7294),n=e(7198),o=e(6786),a=e(1863),s=e(5734);function u(t){var r=t.data.markdownRemark,e=r.frontmatter.tags||[],u=r.frontmatter.authors||[],h=r.frontmatter.related||[];return(0,s.tZ)(n.Z,null,(0,s.tZ)("div",null,(0,s.tZ)("h1",null,r.frontmatter.title),(0,s.tZ)("div",{className:"tags"},e.map((function(t){return(0,s.tZ)("span",{className:"label"},t)}))),(0,s.tZ)("hr",null),(0,s.tZ)("div",{dangerouslySetInnerHTML:{__html:r.html}}),u.length>0&&(0,s.tZ)(i.Fragment,null,(0,s.tZ)("h3",null,"Auteurs :"),(0,s.tZ)("div",{className:"authors"},u.map((function(t){return(0,s.tZ)(o.n,{username:t.frontmatter.username,avatar:t.frontmatter.avatar,excerpt:t.excerpt})})))),h.length>0&&(0,s.tZ)(i.Fragment,null,(0,s.tZ)("h3",null,"Articles liés :"),(0,s.tZ)("div",{className:"related"},h.map((function(t){return t&&(0,s.tZ)(a.y,{id:t.id,slug:t.fields.slug,title:t.frontmatter.title,excerpt:t.excerpt,authors:t.frontmatter.authors})}))))))}}}]);
//# sourceMappingURL=component---src-templates-keyword-post-js-affd5c920f2a736dfc62.js.map