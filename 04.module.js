/**
 * 1、在 node 中有一个全局对象 global，它的作用和网页中的 window 类似
 * 2、在全局中创建的变量都会作为 global 的属性保存
 * 3、在全局中创建的函数都会作为 global 的方法保存
 * */
var a = 10;     //局部变量
b = 20;         //全局变量
console.log(global.a);
console.log(global.b);

/**
 * 1、在 node 中，每一个 js 文件中的代码都默认包装在一个函数中 function(exports, require, module, _filename, _dirname){}，该函数由 node 引擎调用
 * 2、正因为 js 代码被函数包装，所以每个 js 文件中定义的变量都是局部变量，除非变量不用 var 声明，但是这种做法不推荐
 * */