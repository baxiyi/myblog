# js中this的指向问题 #

最近一直弄混this的指向问题，所以写一篇博客来总结一下。简单来说this的指向取决于谁调用了它。本文总体分为六种情况：1.直接调用 2.方法调用 3.DOM事件中this指向 4.new调用时的this 5.箭头函数中的this 6.通过bind来改变this指向。ps:手写实现bind




1. 直接调用:指向window<pre>
//let a=3;//不会绑定到window上
var a=2;
function fun(){
	var a=1;
	console.log(this.a); //2
}
fun();</pre>
1. 方法调用: 指向方法所属的对象<pre>
const obj={
	fun1(){
		console.log(this===obj);//true
	}
}
obj.fun1();
</pre>
1. 事件函数中：指向event.target<pre>
let btn=document.querySelector("#btn");
btn.onclick=function(){
	console.log(this===btn);
}
</pre>
1. new调用:指向通过new创建的实例对象<pre>
function Person(age){
	this.age=age;
}
const obj=new Person(15);
console.log(obj.age);//15</pre>
1. 箭头函数中的this:箭头函数没有自己的this，它的this取决于它外面一层的函数<pre>
const obj={
	fun1(){
		return ()=>{
			console.log(this===obj); //true
		}
	}
}
let fun=obj.fun1();
fun();
</pre>
1. 通过bind,apply,call可以改变this的指向<pre>
let obj={};
function fun(){
	console.log(this===obj);
}
let fun1=fun.bind(obj);
fun1();
</pre>
1. ps:手写实现bind函数<pre>
Function.prototype.mybind = function(obj){
let args=[].slice.call(arguments,1);
let self=this;
return function(){
		self.apply(obj,args.concat([].slice.apply(arguments)));
}
};
let obj={
	a:1
}
function func(){
	console.log(this.a);
}
let fun1=func.mybind(obj);
fun1();
</pre>
