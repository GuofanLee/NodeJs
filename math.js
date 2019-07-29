/**
 * 定义一个模块
 *      1、在该模块中提供一个 add(a, b) 方法，求 a、b 两个数的和
 *      2、在该模块中提供一个 nul(a, b) 方法，求 a、b 两个数的积
 */

exports.add = function (a, b) {
    return a + b;
};

exports.mul = function (a, b) {
    return a * b;
};