this.workbox=this.workbox||{},this.workbox.cacheableResponse=function(s){"use strict";try{self["workbox:cacheable-response:5.1.2"]&&_()}catch(s){}class t{constructor(s={}){this.s=s.statuses,this.t=s.headers}isResponseCacheable(s){let t=!0;return this.s&&(t=this.s.includes(s.status)),this.t&&t&&(t=Object.keys(this.t).some(t=>s.headers.get(t)===this.t[t])),t}}return s.CacheableResponse=t,s.CacheableResponsePlugin=class{constructor(s){this.cacheWillUpdate=async({response:s})=>this.i.isResponseCacheable(s)?s:null,this.i=new t(s)}},s}({});