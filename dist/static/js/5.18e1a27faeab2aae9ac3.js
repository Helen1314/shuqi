webpackJsonp([5],{cndR:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("GQaK"),i={name:"booklist",data:function(){return{data:[]}},components:{Footer:e("Jauv").a},methods:{normalData:function(t){return t.forEach(function(t){t.tags=t.tags.split(",")}),t},toChildren:function(t,a){this.$router.push({name:"listdetail",params:{sid:t,sdesc:a}})}},created:function(){var t=this;this.$axios.get("/haha/novel/i.php?do=is_pay_sdlist&page=1&size=10&shuqi_h5=&onlyCpBooks=1&_=1552200499607").then(function(a){t.data=t.normalData(a.data.data)})},mounted:function(){new n.a(".wrapper",{click:!0})}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"booklist wrapper"},[e("div",{staticClass:"content"},[e("ul",t._l(t.data,function(a,n){return e("li",{key:n,on:{click:function(e){return t.toChildren(a.id,a.sdesc)}}},[e("div",{staticClass:"liwrap"},[e("div",{staticClass:"leftinfo"},[e("h4",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.sdesc))]),t._v(" "),a.tags.length>1?e("div",{staticClass:"tags"},t._l(a.tags,function(a,n){return e("span",{key:n},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(a)+"\n\t\t\t\t\t\t\t")])}),0):t._e()]),t._v(" "),e("div",{staticClass:"rightbg"},t._l(a.items,function(t,a){return e("div",{key:a},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cover,expression:"it.cover"}]})])}),0)])])}),0),t._v(" "),e("Footer")],1),t._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=e("VU/8")(i,s,!1,function(t){e("rLIi")},"data-v-381117e8",null);a.default=r.exports},rLIi:function(t,a){}});
//# sourceMappingURL=5.18e1a27faeab2aae9ac3.js.map