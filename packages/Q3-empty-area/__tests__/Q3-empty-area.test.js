'use strict';

const q3EmptyArea = require('..');
const sample = [
    '*****',
    '* * *',
    '**  *',
    '*   *',
    '*****'
];

const sample2 = [
    '*****',
    '*** *',
    '**  *',
    '*   *',
    '*****'
];

test('basic test', () => {
    expect(q3EmptyArea(sample)).toBe(2);
});

test('basic test 2', () => {
    expect(q3EmptyArea(sample2)).toBe(1);
});
