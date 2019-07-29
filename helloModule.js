/**
 * 1、如果想一次性向外暴露多个属性或方法，需要使用 module.exports = {} 的方式
 * 2、在 node 中，每一个 js 文件中的代码都默认包装在一个函数中 function(exports, require, module, _filename, _dirname){}
 *      其中参数 module 指向的是当前模块
 *      参数 exports 作为一个引用变量，指向的是 module.exports 对象
 *      所以 exports.xxx = xxx 相当于 module.exports.xxx = xxx
 * 3、如果使用 exports = {} 的方式向外暴露多个属性或方法，相当于 exports 重新指向了另一个对象，而 module.exports 并未改变
 * 4、所以只能使用 exports.xxx = xxx 的方式向外暴露一个属性或方法，不能使用 exports = {} 的方式向外暴露多个属性或方法
 * */

module.exports = {
    name: "孙悟空",
    age: 18,
    sayName: function () {
        console.log("我是孙悟空！");
    }
};
