(function(t){function e(e){for(var o,u,l=e[0],a=e[1],c=e[2],d=0,f=[];d<l.length;d++)u=l[d],r[u]&&f.push(r[u][0]),r[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);s&&s(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,l=1;l<n.length;l++){var a=n[l];0!==r[a]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},i=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/Vue-todoList/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var s=a;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"0796":function(t,e,n){},4099:function(t,e,n){"use strict";var o=n("0796"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("My Todo List")]),n("todoList")],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("inputText",{attrs:{placeholder:"Add new todo"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)}},model:{value:t.newTodoText,callback:function(e){t.newTodoText=e},expression:"newTodoText"}}),t.todos.length?n("ul",t._l(t.todos,function(e){return n("listItem",{key:e.id,attrs:{todo:e},on:{remove:t.removeTodo}})}),1):t._e()],1)},l=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",t._g({staticClass:"input",attrs:{type:"text"},domProps:{value:t.value}},t.listeners))},c=[],s=n("cebc"),d={props:{value:{type:String,default:""}},computed:{listeners:function(){var t=this;return Object(s["a"])({},this.$listeners,{input:function(e){t.$emit("input",e.target.value)}})}}},f=d,p=(n("4099"),n("2877")),v=Object(p["a"])(f,a,c,!1,null,"3c98dc7e",null),h=v.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("\n    "+t._s(t.todo.text)+"\n    "),n("button",{on:{click:function(e){return t.$emit("remove",t.todo.id)}}},[t._v("\n        X\n    ")])])},b=[],x={props:{todo:{type:Object,required:!0}}},y=x,T=Object(p["a"])(y,m,b,!1,null,null,null),_=T.exports,w=1,g={name:"list.vue",components:{inputText:h,listItem:_},data:function(){return{newTodoText:"",todos:[{id:w++,text:"Learn Vue"},{id:w++,text:"Learn Node.js"},{id:w++,text:"Find a girlfriend"}]}},methods:{addTodo:function(){var t=this.newTodoText.trim();t&&(this.todos.push({id:w++,text:t}),this.newTodoText="")},removeTodo:function(t){this.todos=this.todos.filter(function(e){return e.id!==t})}}},O=g,j=Object(p["a"])(O,u,l,!1,null,"c27a543a",null),k=j.exports,$={name:"app",components:{todoList:k}},P=$,L=(n("034f"),Object(p["a"])(P,r,i,!1,null,null,null)),S=L.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(S)}}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.4d124031.js.map