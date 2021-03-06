'use strict';

const q1Currying = require('..');

function addRandomParams() {
    return arguments.length ? Array.from(arguments).reduce((a, b) => a + b) : 0;
}

function addSpecificParams(a, b, c) {
    return a + b + c;
}

// 通过传空参结束
test('pass empty params', () => {
    expect(q1Currying(addRandomParams)(1)(2)(3)()).toBe(6);
});

// 入参函数参数有限结束
test('pass specific params', () => {
    expect(q1Currying(addSpecificParams)(1)(2)(3)).toBe(6);
});

// 入参个数不确定且未通过传空参结束, 复写toString方法可以在console.log等地通过隐式转化为需要的值
test('no end eecursion end condition', () => {
    expect(q1Currying(addRandomParams)(1)(2)(3).toString()).toBe(6)
});

// 初始化柯里函数时传参
test('no end eecursion end condition', () => {
    expect(q1Currying(addSpecificParams,1,2)(3)).toBe(6)
});

