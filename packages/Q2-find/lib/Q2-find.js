'use strict';
function isReg(value) {
    return value instanceof RegExp;
}

function compare(key, type) {
    return function (m, n) {
        const a = m[key];
        const b = n[key];
        return type === 'asce' ? (a - b) : (b - a);
    }
}

class _wrapData {
    constructor(data) {
        this.value = data;
        this.allowOrderType = ['asce', 'desc'];
        this.allKeys = ['title', 'userId'];
    }
    where({ title = '', userId = '' }) {
        console.log(title, userId, isReg(userId), isReg(title))
        const filterData = this.value.filter(item => {
            let isIdMatch = true;
            let isTitleMatch = true;
            if (userId) {
                isIdMatch = isReg(userId) ? userId.test(item.userId) : userId === item.userId;
            }

            if (title) {
                isTitleMatch = isReg(title) ? title.test(item.title) : title === item.title;
            }
            return isIdMatch && isTitleMatch;
        });
        this.value = filterData;
        return this;
    }

    orderBy(key, orderType) {
        if (!this.allowOrderType.includes(orderType)) {
            orderType = 'desc' // 排序方式输入错误，默认降序排列
            console.warn('illegal order type, default to be desc');
        }
        if (!this.allKeys.includes(key)) {
            throw ('order by wrong key');
        }
        this.value.sort(compare(key, orderType));
        return this.value;
    }
}

function find(data) {
    if (!Array.isArray(data) || data.length === 0) {
        return 'data in not legal !';
    }
    return new _wrapData(data);
}

module.exports = find;

