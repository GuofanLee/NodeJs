/**
 * 引入其他模块
 *       1、在node中，通过require()函数来引入外部的模块
 *       2、require()可以传递一个文件的路径作为参数，node将会自动根据该路径来引入外部模块
 *       3、这里的路径，如果使用相对路径，必须以./或../开头
 *       4、使用require()引入模块后，该函数会返回一个对象，这个对象代表的就是引入的模块
 *       5、使用require()引入外部模块时，使用的是模块标识，我们可以使用模块标识来找到指定的模块
 *       6、模块分为两大类：
 *              - 核心模块：由 node 引擎提供的模块，其模块标识就是模块的名字
 *                  var fs = require("fs");
 *              - 文件模块：由用户自己创建的模块，其模块标识就是 js 文件的绝对路径或者相对路径
 */

const md = require("./02.module");
console.log(md);

const math = require("./math");
console.log(math.add(10, 20));

//引入核心模块
const fs = require("fs");
console.log(fs);