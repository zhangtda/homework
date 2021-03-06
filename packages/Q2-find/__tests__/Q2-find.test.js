'use strict';

const q2Find = require('..');

const data = [
    { userId: 8, title: 'title1' },
    { userId: 11, title: 'other' },
    { userId: 15, title: null },
    { userId: 19, title: 'title2' }
];

test('reg search', () => {
    expect(q2Find(data).where({
        'title': /\d$/
    }).orderBy('userId', 'desc')).toStrictEqual([{ userId: 19, title: 'title2' }, { userId: 8, title: 'title1' }]);
});


test('exact search', () => {
    expect(q2Find(data).where({
        userId: 8
    }).orderBy('userId', 'desc')).toStrictEqual([{ userId: 8, title: 'title1' }]);
});

test('asce sort', () => {
    expect(q2Find(data).where({
        'title': /\d$/
    }).orderBy('userId', 'asce')).toStrictEqual([{ userId: 8, title: 'title1' }, { userId: 19, title: 'title2' }]);
});