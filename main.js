(()=>{var r={9662:(r,t,e)=>{var n=e(7854),o=e(614),i=e(6330),u=n.TypeError;r.exports=function(r){if(o(r))return r;throw u(i(r)+" is not a function")}},9670:(r,t,e)=>{var n=e(7854),o=e(111),i=n.String,u=n.TypeError;r.exports=function(r){if(o(r))return r;throw u(i(r)+" is not an object")}},1318:(r,t,e)=>{var n=e(5656),o=e(1400),i=e(6244),u=function(r){return function(t,e,u){var c,a=n(t),s=i(a),f=o(u,s);if(r&&e!=e){for(;s>f;)if((c=a[f++])!=c)return!0}else for(;s>f;f++)if((r||f in a)&&a[f]===e)return r||f||0;return!r&&-1}};r.exports={includes:u(!0),indexOf:u(!1)}},1194:(r,t,e)=>{var n=e(7293),o=e(5112),i=e(7392),u=o("species");r.exports=function(r){return i>=51||!n((function(){var t=[];return(t.constructor={})[u]=function(){return{foo:1}},1!==t[r](Boolean).foo}))}},7475:(r,t,e)=>{var n=e(7854),o=e(3157),i=e(4411),u=e(111),c=e(5112)("species"),a=n.Array;r.exports=function(r){var t;return o(r)&&(t=r.constructor,(i(t)&&(t===a||o(t.prototype))||u(t)&&null===(t=t[c]))&&(t=void 0)),void 0===t?a:t}},5417:(r,t,e)=>{var n=e(7475);r.exports=function(r,t){return new(n(r))(0===t?0:t)}},4326:(r,t,e)=>{var n=e(1702),o=n({}.toString),i=n("".slice);r.exports=function(r){return i(o(r),8,-1)}},648:(r,t,e)=>{var n=e(7854),o=e(1694),i=e(614),u=e(4326),c=e(5112)("toStringTag"),a=n.Object,s="Arguments"==u(function(){return arguments}());r.exports=o?u:function(r){var t,e,n;return void 0===r?"Undefined":null===r?"Null":"string"==typeof(e=function(r,t){try{return r[t]}catch(r){}}(t=a(r),c))?e:s?u(t):"Object"==(n=u(t))&&i(t.callee)?"Arguments":n}},9920:(r,t,e)=>{var n=e(2597),o=e(3887),i=e(1236),u=e(3070);r.exports=function(r,t){for(var e=o(t),c=u.f,a=i.f,s=0;s<e.length;s++){var f=e[s];n(r,f)||c(r,f,a(t,f))}}},8880:(r,t,e)=>{var n=e(9781),o=e(3070),i=e(9114);r.exports=n?function(r,t,e){return o.f(r,t,i(1,e))}:function(r,t,e){return r[t]=e,r}},9114:r=>{r.exports=function(r,t){return{enumerable:!(1&r),configurable:!(2&r),writable:!(4&r),value:t}}},6135:(r,t,e)=>{"use strict";var n=e(4948),o=e(3070),i=e(9114);r.exports=function(r,t,e){var u=n(t);u in r?o.f(r,u,i(0,e)):r[u]=e}},9781:(r,t,e)=>{var n=e(7293);r.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(r,t,e)=>{var n=e(7854),o=e(111),i=n.document,u=o(i)&&o(i.createElement);r.exports=function(r){return u?i.createElement(r):{}}},8113:(r,t,e)=>{var n=e(5005);r.exports=n("navigator","userAgent")||""},7392:(r,t,e)=>{var n,o,i=e(7854),u=e(8113),c=i.process,a=i.Deno,s=c&&c.versions||a&&a.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&u&&(!(n=u.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=u.match(/Chrome\/(\d+)/))&&(o=+n[1]),r.exports=o},748:r=>{r.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(r,t,e)=>{var n=e(7854),o=e(1236).f,i=e(8880),u=e(1320),c=e(3505),a=e(9920),s=e(4705);r.exports=function(r,t){var e,f,p,v,l,y=r.target,g=r.global,h=r.stat;if(e=g?n:h?n[y]||c(y,{}):(n[y]||{}).prototype)for(f in t){if(v=t[f],p=r.noTargetGet?(l=o(e,f))&&l.value:e[f],!s(g?f:y+(h?".":"#")+f,r.forced)&&void 0!==p){if(typeof v==typeof p)continue;a(v,p)}(r.sham||p&&p.sham)&&i(v,"sham",!0),u(e,f,v,r)}}},7293:r=>{r.exports=function(r){try{return!!r()}catch(r){return!0}}},6916:r=>{var t=Function.prototype.call;r.exports=t.bind?t.bind(t):function(){return t.apply(t,arguments)}},6530:(r,t,e)=>{var n=e(9781),o=e(2597),i=Function.prototype,u=n&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,s=c&&(!n||n&&u(i,"name").configurable);r.exports={EXISTS:c,PROPER:a,CONFIGURABLE:s}},1702:r=>{var t=Function.prototype,e=t.bind,n=t.call,o=e&&e.bind(n);r.exports=e?function(r){return r&&o(n,r)}:function(r){return r&&function(){return n.apply(r,arguments)}}},5005:(r,t,e)=>{var n=e(7854),o=e(614),i=function(r){return o(r)?r:void 0};r.exports=function(r,t){return arguments.length<2?i(n[r]):n[r]&&n[r][t]}},8173:(r,t,e)=>{var n=e(9662);r.exports=function(r,t){var e=r[t];return null==e?void 0:n(e)}},7854:(r,t,e)=>{var n=function(r){return r&&r.Math==Math&&r};r.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:(r,t,e)=>{var n=e(1702),o=e(7908),i=n({}.hasOwnProperty);r.exports=Object.hasOwn||function(r,t){return i(o(r),t)}},3501:r=>{r.exports={}},4664:(r,t,e)=>{var n=e(9781),o=e(7293),i=e(317);r.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(r,t,e)=>{var n=e(7854),o=e(1702),i=e(7293),u=e(4326),c=n.Object,a=o("".split);r.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(r){return"String"==u(r)?a(r,""):c(r)}:c},2788:(r,t,e)=>{var n=e(1702),o=e(614),i=e(5465),u=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(r){return u(r)}),r.exports=i.inspectSource},9909:(r,t,e)=>{var n,o,i,u=e(8536),c=e(7854),a=e(1702),s=e(111),f=e(8880),p=e(2597),v=e(5465),l=e(6200),y=e(3501),g="Object already initialized",h=c.TypeError,b=c.WeakMap;if(u||v.state){var m=v.state||(v.state=new b),x=a(m.get),d=a(m.has),w=a(m.set);n=function(r,t){if(d(m,r))throw new h(g);return t.facade=r,w(m,r,t),t},o=function(r){return x(m,r)||{}},i=function(r){return d(m,r)}}else{var S=l("state");y[S]=!0,n=function(r,t){if(p(r,S))throw new h(g);return t.facade=r,f(r,S,t),t},o=function(r){return p(r,S)?r[S]:{}},i=function(r){return p(r,S)}}r.exports={set:n,get:o,has:i,enforce:function(r){return i(r)?o(r):n(r,{})},getterFor:function(r){return function(t){var e;if(!s(t)||(e=o(t)).type!==r)throw h("Incompatible receiver, "+r+" required");return e}}}},3157:(r,t,e)=>{var n=e(4326);r.exports=Array.isArray||function(r){return"Array"==n(r)}},614:r=>{r.exports=function(r){return"function"==typeof r}},4411:(r,t,e)=>{var n=e(1702),o=e(7293),i=e(614),u=e(648),c=e(5005),a=e(2788),s=function(){},f=[],p=c("Reflect","construct"),v=/^\s*(?:class|function)\b/,l=n(v.exec),y=!v.exec(s),g=function(r){if(!i(r))return!1;try{return p(s,f,r),!0}catch(r){return!1}};r.exports=!p||o((function(){var r;return g(g.call)||!g(Object)||!g((function(){r=!0}))||r}))?function(r){if(!i(r))return!1;switch(u(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return y||!!l(v,a(r))}:g},4705:(r,t,e)=>{var n=e(7293),o=e(614),i=/#|\.prototype\./,u=function(r,t){var e=a[c(r)];return e==f||e!=s&&(o(t)?n(t):!!t)},c=u.normalize=function(r){return String(r).replace(i,".").toLowerCase()},a=u.data={},s=u.NATIVE="N",f=u.POLYFILL="P";r.exports=u},111:(r,t,e)=>{var n=e(614);r.exports=function(r){return"object"==typeof r?null!==r:n(r)}},1913:r=>{r.exports=!1},2190:(r,t,e)=>{var n=e(7854),o=e(5005),i=e(614),u=e(7976),c=e(3307),a=n.Object;r.exports=c?function(r){return"symbol"==typeof r}:function(r){var t=o("Symbol");return i(t)&&u(t.prototype,a(r))}},6244:(r,t,e)=>{var n=e(7466);r.exports=function(r){return n(r.length)}},133:(r,t,e)=>{var n=e(7392),o=e(7293);r.exports=!!Object.getOwnPropertySymbols&&!o((function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(r,t,e)=>{var n=e(7854),o=e(614),i=e(2788),u=n.WeakMap;r.exports=o(u)&&/native code/.test(i(u))},3070:(r,t,e)=>{var n=e(7854),o=e(9781),i=e(4664),u=e(9670),c=e(4948),a=n.TypeError,s=Object.defineProperty;t.f=o?s:function(r,t,e){if(u(r),t=c(t),u(e),i)try{return s(r,t,e)}catch(r){}if("get"in e||"set"in e)throw a("Accessors not supported");return"value"in e&&(r[t]=e.value),r}},1236:(r,t,e)=>{var n=e(9781),o=e(6916),i=e(5296),u=e(9114),c=e(5656),a=e(4948),s=e(2597),f=e(4664),p=Object.getOwnPropertyDescriptor;t.f=n?p:function(r,t){if(r=c(r),t=a(t),f)try{return p(r,t)}catch(r){}if(s(r,t))return u(!o(i.f,r,t),r[t])}},8006:(r,t,e)=>{var n=e(6324),o=e(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(r){return n(r,o)}},5181:(r,t)=>{t.f=Object.getOwnPropertySymbols},7976:(r,t,e)=>{var n=e(1702);r.exports=n({}.isPrototypeOf)},6324:(r,t,e)=>{var n=e(1702),o=e(2597),i=e(5656),u=e(1318).indexOf,c=e(3501),a=n([].push);r.exports=function(r,t){var e,n=i(r),s=0,f=[];for(e in n)!o(c,e)&&o(n,e)&&a(f,e);for(;t.length>s;)o(n,e=t[s++])&&(~u(f,e)||a(f,e));return f}},5296:(r,t)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);t.f=o?function(r){var t=n(this,r);return!!t&&t.enumerable}:e},2140:(r,t,e)=>{var n=e(7854),o=e(6916),i=e(614),u=e(111),c=n.TypeError;r.exports=function(r,t){var e,n;if("string"===t&&i(e=r.toString)&&!u(n=o(e,r)))return n;if(i(e=r.valueOf)&&!u(n=o(e,r)))return n;if("string"!==t&&i(e=r.toString)&&!u(n=o(e,r)))return n;throw c("Can't convert object to primitive value")}},3887:(r,t,e)=>{var n=e(5005),o=e(1702),i=e(8006),u=e(5181),c=e(9670),a=o([].concat);r.exports=n("Reflect","ownKeys")||function(r){var t=i.f(c(r)),e=u.f;return e?a(t,e(r)):t}},1320:(r,t,e)=>{var n=e(7854),o=e(614),i=e(2597),u=e(8880),c=e(3505),a=e(2788),s=e(9909),f=e(6530).CONFIGURABLE,p=s.get,v=s.enforce,l=String(String).split("String");(r.exports=function(r,t,e,a){var s,p=!!a&&!!a.unsafe,y=!!a&&!!a.enumerable,g=!!a&&!!a.noTargetGet,h=a&&void 0!==a.name?a.name:t;o(e)&&("Symbol("===String(h).slice(0,7)&&(h="["+String(h).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(e,"name")||f&&e.name!==h)&&u(e,"name",h),(s=v(e)).source||(s.source=l.join("string"==typeof h?h:""))),r!==n?(p?!g&&r[t]&&(y=!0):delete r[t],y?r[t]=e:u(r,t,e)):y?r[t]=e:c(t,e)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||a(this)}))},4488:(r,t,e)=>{var n=e(7854).TypeError;r.exports=function(r){if(null==r)throw n("Can't call method on "+r);return r}},3505:(r,t,e)=>{var n=e(7854),o=Object.defineProperty;r.exports=function(r,t){try{o(n,r,{value:t,configurable:!0,writable:!0})}catch(e){n[r]=t}return t}},6200:(r,t,e)=>{var n=e(2309),o=e(9711),i=n("keys");r.exports=function(r){return i[r]||(i[r]=o(r))}},5465:(r,t,e)=>{var n=e(7854),o=e(3505),i="__core-js_shared__",u=n[i]||o(i,{});r.exports=u},2309:(r,t,e)=>{var n=e(1913),o=e(5465);(r.exports=function(r,t){return o[r]||(o[r]=void 0!==t?t:{})})("versions",[]).push({version:"3.19.1",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:(r,t,e)=>{var n=e(9303),o=Math.max,i=Math.min;r.exports=function(r,t){var e=n(r);return e<0?o(e+t,0):i(e,t)}},5656:(r,t,e)=>{var n=e(8361),o=e(4488);r.exports=function(r){return n(o(r))}},9303:r=>{var t=Math.ceil,e=Math.floor;r.exports=function(r){var n=+r;return n!=n||0===n?0:(n>0?e:t)(n)}},7466:(r,t,e)=>{var n=e(9303),o=Math.min;r.exports=function(r){return r>0?o(n(r),9007199254740991):0}},7908:(r,t,e)=>{var n=e(7854),o=e(4488),i=n.Object;r.exports=function(r){return i(o(r))}},7593:(r,t,e)=>{var n=e(7854),o=e(6916),i=e(111),u=e(2190),c=e(8173),a=e(2140),s=e(5112),f=n.TypeError,p=s("toPrimitive");r.exports=function(r,t){if(!i(r)||u(r))return r;var e,n=c(r,p);if(n){if(void 0===t&&(t="default"),e=o(n,r,t),!i(e)||u(e))return e;throw f("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(r,t)}},4948:(r,t,e)=>{var n=e(7593),o=e(2190);r.exports=function(r){var t=n(r,"string");return o(t)?t:t+""}},1694:(r,t,e)=>{var n={};n[e(5112)("toStringTag")]="z",r.exports="[object z]"===String(n)},6330:(r,t,e)=>{var n=e(7854).String;r.exports=function(r){try{return n(r)}catch(r){return"Object"}}},9711:(r,t,e)=>{var n=e(1702),o=0,i=Math.random(),u=n(1..toString);r.exports=function(r){return"Symbol("+(void 0===r?"":r)+")_"+u(++o+i,36)}},3307:(r,t,e)=>{var n=e(133);r.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(r,t,e)=>{var n=e(7854),o=e(2309),i=e(2597),u=e(9711),c=e(133),a=e(3307),s=o("wks"),f=n.Symbol,p=f&&f.for,v=a?f:f&&f.withoutSetter||u;r.exports=function(r){if(!i(s,r)||!c&&"string"!=typeof s[r]){var t="Symbol."+r;c&&i(f,r)?s[r]=f[r]:s[r]=a&&p?p(t):v(t)}return s[r]}},2222:(r,t,e)=>{"use strict";var n=e(2109),o=e(7854),i=e(7293),u=e(3157),c=e(111),a=e(7908),s=e(6244),f=e(6135),p=e(5417),v=e(1194),l=e(5112),y=e(7392),g=l("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",m=o.TypeError,x=y>=51||!i((function(){var r=[];return r[g]=!1,r.concat()[0]!==r})),d=v("concat"),w=function(r){if(!c(r))return!1;var t=r[g];return void 0!==t?!!t:u(r)};n({target:"Array",proto:!0,forced:!x||!d},{concat:function(r){var t,e,n,o,i,u=a(this),c=p(u,0),v=0;for(t=-1,n=arguments.length;t<n;t++)if(w(i=-1===t?u:arguments[t])){if(v+(o=s(i))>h)throw m(b);for(e=0;e<o;e++,v++)e in i&&f(c,v,i[e])}else{if(v>=h)throw m(b);f(c,v++,i)}return c.length=v,c}})}},t={};function e(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return r[n](o,o.exports,e),o.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),(()=>{"use strict";function r(r){return Math.floor(Math.random()*r)}e(2222),function(){for(var t=document.querySelector("section"),e=r(Math.pow(4,2)),n=0,o=0;o<4;o+=1)for(var i='<img class="center" src=https://github.com/netology-code/ahj-homeworks/raw/simplification/dom/pic/goblin.png>',u=0;u<4;u+=1){i=n===e?i:"";var c='<div class = "w" id='.concat(String(n),">\n            ").concat(i,"\n              </div>");t.insertAdjacentHTML("afterbegin",c),n+=1}setInterval((function(){var t=r(16),e=document.querySelector("img");if(null!=e){for(;t===e.parentNode.id;)t=r(16);e.remove(),document.getElementById(String(t)).insertAdjacentHTML("afterbegin",'<img class="center" src=https://github.com/netology-code/ahj-homeworks/raw/simplification/dom/pic/goblin.png>')}}),2e3)}()})()})();