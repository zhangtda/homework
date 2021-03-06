'use strict';

function q1Currying(fn) {
    if (typeof fn !== 'function') {
        throw('Currying wrapper need a function!');
    }
    const _args = Array.from(arguments).slice(1) // 柯里初始化时也可以加入参数例如 q1Currying(fn,1,23)
    const fnArgLength = fn.length; // 入参函数指定的参数个数
    let curriedFn = function (...innerArgs) {
        _args.push(...innerArgs);
        if (innerArgs.length === 0 || (fnArgLength && _args.length >= fnArgLength)) {
            return fn.apply(undefined, _args);
        }
        return curriedFn;
    }
    // 入参函数既没有指定参数数量，又没有空参调用，最终返回的函数增加toSring方法，实现隐式调用
    curriedFn.toString = function() {
        return fn.apply(undefined, _args);
    }
    return curriedFn;
}
module.exports = q1Currying;
