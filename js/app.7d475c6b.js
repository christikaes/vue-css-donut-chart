(function(e){function t(t){for(var o,r,l=t[0],i=t[1],c=t[2],d=0,v=[];d<l.length;d++)r=l[d],s[r]&&v.push(s[r][0]),s[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(v.length)v.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==s[i]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},s={app:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue-css-donut-chart/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b75":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Main"),e._m(0)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[e._v("\n    Made with "),n("strong",[e._v("👐")]),e._v(" and "),n("strong",[e._v("⌨️")]),e._v(" by\n    "),n("a",{attrs:{href:"https://github.com/dumptyd"}},[e._v("dumptyd")]),e._v(".\n  ")])}],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),e._m(1),n("div",{staticClass:"container-donut"},[n("Donut",{attrs:{background:e.background,foreground:e.foreground,size:e.size,unit:e.unit,thickness:e.thickness,hasLegend:e.hasLegend,legendPlacement:e.legendPlacement,sections:e.validatedSections,total:e.total}},[n("div",{domProps:{innerHTML:e._s(e.donutHTML)}})])],1),n("div",{staticClass:"container-body"},[n("div",{staticClass:"configuration"},[n("div",[n("h3",[e._v("Donut configuration")]),n("div",{staticClass:"control-group"},[n("div",{staticClass:"control"},[n("label",{attrs:{for:"background"}},[e._v("Background")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.background,expression:"background"}],attrs:{name:"background",type:"color"},domProps:{value:e.background},on:{input:function(t){t.target.composing||(e.background=t.target.value)}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"foreground"}},[e._v("Foreground")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.foreground,expression:"foreground"}],attrs:{name:"foreground",type:"color"},domProps:{value:e.foreground},on:{input:function(t){t.target.composing||(e.foreground=t.target.value)}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"size"}},[e._v("Size")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.size,expression:"size"}],staticClass:"sm",attrs:{name:"size",type:"number"},domProps:{value:e.size},on:{input:function(t){t.target.composing||(e.size=t.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.unit,expression:"unit"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.unit=t.target.multiple?n:n[0]}}},e._l(e.unitOptions,function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n                "+e._s(t)+"\n              ")])}))]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"thickness"}},[e._v("Ring thickness (%)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.thickness,expression:"thickness"}],staticClass:"sm",attrs:{name:"thickness",type:"number",min:"0",max:"100"},domProps:{value:e.thickness},on:{input:function(t){t.target.composing||(e.thickness=t.target.value)}}})])])]),n("div",[n("h3",[e._v("Legend configuration")]),n("div",{staticClass:"control-group"},[n("div",{staticClass:"control"},[n("label",{attrs:{for:"has-legend"}},[e._v("Has legend?")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.hasLegend,expression:"hasLegend"}],attrs:{name:"has-legend",type:"checkbox"},domProps:{checked:Array.isArray(e.hasLegend)?e._i(e.hasLegend,null)>-1:e.hasLegend},on:{change:function(t){var n=e.hasLegend,o=t.target,s=!!o.checked;if(Array.isArray(n)){var a=null,r=e._i(n,a);o.checked?r<0&&(e.hasLegend=n.concat([a])):r>-1&&(e.hasLegend=n.slice(0,r).concat(n.slice(r+1)))}else e.hasLegend=s}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"placement"}},[e._v("Legend Placement")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.legendPlacement,expression:"legendPlacement"}],attrs:{name:"placement",disabled:!e.hasLegend},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.legendPlacement=t.target.multiple?n:n[0]}}},e._l(e.placementOptions,function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n                "+e._s(t)+"\n              ")])}))])])]),n("div",[n("h3",[e._v("Donut content")]),n("div",{staticClass:"control-group"},[n("div",{staticClass:"control control-vertical flex-grow-1 flex-start"},[e._m(2),"HTML"===e.textType?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.donutHTML,expression:"donutHTML"}],attrs:{name:"text",rows:"3"},domProps:{value:e.donutHTML},on:{input:function(t){t.target.composing||(e.donutHTML=t.target.value)}}}):e._e()])])]),n("div",{staticClass:"donut-sections"},[n("h3",[e._v("Donut sections")]),e._l(e.sections,function(t,o){return n("div",{key:o,staticClass:"control-group"},[n("div",{staticClass:"control"},[n("pre",[n("small",[e._v(e._s(o+1)+".")])])]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"section-value-"+(o+1)}},[e._v("Value")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.value,expression:"section.value",modifiers:{number:!0}}],staticClass:"sm",attrs:{name:"`section-value-${idx + 1}`",min:0,max:t.value+e.remaining,type:"number"},domProps:{value:t.value},on:{input:function(n){n.target.composing||e.$set(t,"value",e._n(n.target.value))},blur:function(t){e.$forceUpdate()}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"section-label-"+(o+1)}},[e._v("Label")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"section.label"}],attrs:{name:"`section-label-${idx + 1}`",type:"text"},domProps:{value:t.label},on:{input:function(n){n.target.composing||e.$set(t,"label",n.target.value)}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"section-color-"+(o+1)}},[e._v("Color")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"section.color"}],staticClass:"sm",attrs:{name:"`section-color-${idx + 1}`",type:"color"},domProps:{value:t.color},on:{input:function(n){n.target.composing||e.$set(t,"color",n.target.value)}}})]),n("div",{staticClass:"control"},[n("button",{staticClass:"outline-red",on:{click:function(t){e.removeSection(o)}}},[e._v("- remove")])])])})],2),n("button",{staticClass:"outline-green",on:{click:e.addSection}},[e._v("\n        + add "+e._s(e.sections.length?"another":"a")+" section\n      ")])])])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-header"},[n("h1",[e._v("vue-css-donut-chart")]),n("span",[e._v("Lightweight Vue component for drawing pure CSS donut charts")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"container-nav"},[n("a",{attrs:{href:"https://github.com/dumptyd/vue-css-donut-chart/blob/master/README.md"}},[e._v("Documentation")]),n("a",{attrs:{href:"https://github.com/dumptyd/vue-css-donut-chart/blob/master/README.md#installation"}},[e._v("Installation")]),n("a",{attrs:{href:"https://github.com/dumptyd/vue-css-donut-chart/blob/master/README.md#usage"}},[e._v("Usage")]),n("a",{attrs:{href:"https://github.com/dumptyd/vue-css-donut-chart"}},[e._v("Github")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{attrs:{for:"text"}},[e._v("Content "),n("small",[e._v("(HTML supported)")])])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cdc-container",style:e.placementStyles.container},[n("div",{ref:"donut",staticClass:"cdc",style:e.donutStyles},[n("DonutSections",{attrs:{sections:e.donutSections}}),n("div",{staticClass:"cdc-overlay",style:e.overlayStyles},[n("div",{staticClass:"cdc-text",style:e.donutTextStyles},[e._t("default",[e._v(e._s(e.text))])],2)])],1),e._t("legend",[e.hasLegend?n("div",{staticClass:"cdc-legend",style:e.placementStyles.legend},e._l(e.legend,function(t,o){return n("span",{key:o,staticClass:"cdc-legend-item",attrs:{title:t.percent}},[n("span",{staticClass:"cdc-legend-item-color",style:t.styles}),n("span",[e._v(e._s(t.label))])])})):e._e()])],2)},c=[];n("ac6a");const u=["#FF6384","#36A2EB","#FFCE56","#F58231","#46F0F0","#D2F53C","#911EB4","#F032E6","#3CB44B","#FFE119","#E6194B","#FABEBE","#008080","#E6BEFF","#0082C8","#AA6E28","#FFFAC8","#800000","#AAFFC3","#808000","#FFD8B1","#000080","#808080","#000000"];var d=u;const v="1em",p="dodgerblue",m={TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},f={[m.TOP]:{container:{flexDirection:"column"},legend:{order:-1,margin:0,marginBottom:v}},[m.RIGHT]:{container:{},legend:{flexDirection:"column",margin:0,marginLeft:v}},[m.BOTTOM]:{container:{flexDirection:"column"},legend:{}},[m.LEFT]:{container:{},legend:{flexDirection:"column",order:-1,margin:0,marginRight:v}}},g=e=>!!e&&e.constructor===Object,h=[{type:"number",key:"value",required:!0},{key:"label"},{key:"color"}];function b(e){return!!g(e)&&h.reduce((t,n)=>{if(!t)return!1;let o=!0;return n.required&&(o=o&&Object.hasOwnProperty.call(e,n.key)),n.type&&(o=o&&typeof e[n.key]===n.type),t&&o},!0)}var y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cdc-sections"},e._l(e.dSections,function(e,t){return n("div",{key:t,staticClass:"cdc-section",class:e.className,style:e.sectionStyles},[n("div",{staticClass:"cdc-filler",style:e.fillerStyles,attrs:{title:e.label}})])}))},_=[];const x={LEFT:"cdc-section-left",RIGHT:"cdc-section-right"};var C={props:{sections:{type:Array,default:()=>[]}},computed:{dSections(){const e=180;let t=0,n=0;const o=this.sections.map(o=>{let s=[x.RIGHT,-180],a=s[0],r=s[1];if(t>=e){var l=[x.LEFT,180];a=l[0],r=l[1]}const i=r+o.degree,c={backgroundColor:o.color||p,transform:`rotate(${i}deg)`},u={transform:`rotate(${n}deg)`};return t+=o.degree,180===t?n=0:n+=o.degree,{label:o.label,className:a,fillerStyles:c,sectionStyles:u}});return o}}},S=C,k=n("2877"),E=Object(k["a"])(S,y,_,!1,null,null,null);E.options.__file="DonutSections.vue";var L=E.exports,T=(n("7e79"),{name:"vc-donut",props:{size:{type:Number,default:250,validator:e=>e>0},unit:{type:String,default:"px"},thickness:{type:Number,default:20,validator:e=>e>=0&&e<=100},text:{type:String,default:null},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#eeeeee"},sections:{type:Array,default:()=>[],validator(e){for(let t=0;t<e.length;++t)if(!b(e[t]))return!1;return!0}},total:{type:Number,default:100,validator:e=>e>0},hasLegend:{type:Boolean,default:!1},legendPlacement:{default:m.BOTTOM,validator:e=>!!m[e.toUpperCase()]}},watch:{size(){this.recalcFontSize()},unit(){this.recalcFontSize()}},data(){return{donutEl:null,fontSize:"1em"}},computed:{donutSections(){const e=this.sections.reduce((e,t)=>e+t.value,0);if(e>this.total){const t=`Sum of all the sections' values (${e}) should not exceed \`total\` (${this.total})`;throw new Error(t)}const t=360,n=180;let o=0,s=0;const a=[];return this.sections.forEach(e=>{const r=t*(e.value/this.total);let l=[r];r>n&&(l=[n,r-n]);const i=e.color||d[s++];l.forEach(t=>{const s=o+t;if(s>n){const s=n-o;a.push(Object.assign({},e,{degree:s,color:i}),Object.assign({},e,{degree:t-s,color:i}))}else a.push(Object.assign({},e,{degree:t,color:i}));o+=t,o>=n&&(o-=n)})}),a},legend(){if(!this.hasLegend)return null;let e=0;return this.sections.map((t,n)=>({label:t.label||`Section ${n+1}`,percent:`${t.value} (${t.value/this.total*100}%)`,styles:{backgroundColor:t.color||d[e++]}}))},placementStyles(){return this.hasLegend?f[this.legendPlacement]:{}},donutStyles(){const e=`${this.size}${this.unit}`,t={height:"auto",width:e,backgroundColor:this.foreground,paddingBottom:e};return t},overlayStyles(){const e=100,t=e-this.thickness,n=`${t}%`,o=`calc(50% - ${t/2}%)`;return{height:n,width:n,top:o,left:o,backgroundColor:this.background}},donutTextStyles(){const e=this.fontSize;return{fontSize:e}}},methods:{recalcFontSize(){const e=.08;let t=this.size;"px"!==this.unit&&(t=this.donutEl?this.donutEl.clientWidth:null),this.fontSize=t?`${(t*e).toFixed(2)}px`:"1em"}},mounted(){this.donutEl=this.$refs.donut,this.recalcFontSize(),window.addEventListener("resize",()=>{this.recalcFontSize()})},components:{DonutSections:L}}),w=T,F=Object(k["a"])(w,i,c,!1,null,null,null);F.options.__file="Donut.vue";var O=F.exports;n("ce52"),n("0b75");function P(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var $={data(){const e=["px","%"],t=["top","right","bottom","left"],n=["text","HTML"],o=["Wake up","Work","Eat donuts","Sleep"],s=100,a=Array(4).fill(!0).map((e,t,n)=>({value:P(s/n.length/2,s/n.length),label:o[t],color:d[t]})),r=a.reduce((e,t)=>e+t.value,0);return{background:"#ffffff",foreground:"#eeeeee",size:200,unit:"px",thickness:20,total:s,hasLegend:!0,legendPlacement:"bottom",textType:"HTML",donutHTML:`<h1 style="margin: 0;">${r}%</h1> donut consumed`,donutText:"",unitOptions:e,placementOptions:t,textTypeOptions:n,sections:a}},computed:{consumed(){return this.sections.reduce((e,t)=>e+t.value,0)},remaining(){return this.total-this.consumed},validatedSections(){return this.consumed>this.total?[]:this.sections}},methods:{addSection(){this.sections.push({value:0,label:null,color:d[this.sections.length]||null})},removeSection(e){this.sections.splice(e,1)}},components:{Donut:O}},M=$,z=Object(k["a"])(M,r,l,!1,null,null,null);z.options.__file="Main.vue";var A=z.exports,D={components:{Main:A}},j=D,B=Object(k["a"])(j,s,a,!1,null,null,null);B.options.__file="App.vue";var H=B.exports;o["a"].config.productionTip=!1,new o["a"]({render:e=>e(H)}).$mount("#app")},"7e79":function(e,t,n){},ce52:function(e,t,n){}});