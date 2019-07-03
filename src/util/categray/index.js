/*
 * @Author: afei
 * @Date: 2019-07-01 11:13:33
 * @Description: 类目扩展汇总
 */

import ArrayCategory from './array+category';

// 数组类目
for (var item in ArrayCategory) {
    Array.prototype[item] = ArrayCategory[item];
}

console.log(Array.prototype);