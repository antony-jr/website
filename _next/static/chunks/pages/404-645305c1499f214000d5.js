_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"97Is":function(t,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return o("uNx/")}])},hXnw:function(t,n,o){"use strict";function e(t,n){var o=n.left,e=n.right,r=n.up,i=n.down,a=n.top,u=n.bottom,l=n.mirror,c=n.opposite,s=(o?1:0)|(e?2:0)|(a||i?4:0)|(u||r?8:0)|(l?16:0)|(c?32:0)|(t?64:0);if(f.hasOwnProperty(s))return f[s];if(!l!=!(t&&c)){var p=[e,o,u,a,i,r];o=p[0],e=p[1],a=p[2],u=p[3],r=p[4],i=p[5]}var m=o||e,b=a||u||r||i,v=void 0;return m||b?t?v="40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(m?(o?"":"-")+"42px":"0")+", "+(b?(i||a?"-":"")+"60px":"0")+", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d("+(m?(e?"":"-")+"2000px":"0")+", "+(b?(r||u?"":"-")+"2000px":"0")+", 0);\n          transform-origin: "+(b?"center bottom":(o?"left":"right")+" center")+";\n        }":v="from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d("+(m?(o?"-":"")+"1000px":"0")+", "+(b?(i||a?"-":"")+"1000px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(m?(e?"-":"")+"10px":"0")+", "+(b?(r||u?"-":"")+"60px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }":v=(t?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(t?"from":"to")+" { opacity: 1; transform: none;}",f[s]=(0,d.animation)(v),f[s]}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.defaults,n=t.children,o=(t.out,t.forever),r=t.timeout,i=t.duration,a=void 0===i?d.defaults.duration:i,u=t.delay,c=void 0===u?d.defaults.delay:u,f=t.count,s=void 0===f?d.defaults.count:f,p=function(t,n){var o={};for(var e in t)n.indexOf(e)>=0||Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e]);return o}(t,["children","out","forever","timeout","duration","delay","count"]),m={make:e,duration:void 0===r?a:r,delay:c,forever:o,count:s,style:{animationFillMode:"both"},reverse:p.left};return(0,l.default)(p,m,m,n)}Object.defineProperty(n,"__esModule",{value:!0});var i,a=o("17x9"),u=o("eH+L"),l=(i=u)&&i.__esModule?i:{default:i},d=o("ar19"),c={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,delay:a.number,count:a.number,forever:a.bool},f={};r.propTypes=c,n.default=r,t.exports=n.default},"uNx/":function(t,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return c}));o("8Kt/");var e=o("q1tI"),r=o.n(e),i=o("hXnw"),a=o.n(i),u=o("9M7Z"),l=o("2mvg"),d=r.a.createElement;function c(){return d(r.a.Fragment,null,d(a.a,null,d("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"400px"}},d(l.a,{fluid:!0,src:"/error_anim.png"}),d(u.a,{type:"h4",font:"Dosis Bold"},"404, File not Found."))))}}},[["97Is",0,1,2,3]]]);