/*
 * @Author: afei
 * @Date: 2019-07-01 11:13:33
 * @Description: 类目扩展汇总
 */

import afUtil from './util'
import ArrayCategory from './array+category';
import ObjectCategory from './object+category'
import MathCategory from './math+category';
import NumberCategory from './number+category'

window.afUtil = afUtil;

// 数组类目
for (const item in ArrayCategory) {
    Array.prototype[item] = ArrayCategory[item];
}

/**
 * warning vue里给Object.prototype 添加属性会体现在url上 所以注释掉 绑定在 window.afUtil 上
 */
// for (const item in ObjectCategory) {
//     Object.prototype[item] = ObjectCategory[item];
// }
window.afUtil = Object.assign(window.afUtil,ObjectCategory);


// Math类目
for (const item in MathCategory) {
    Math[item] = MathCategory[item];
}

// Number类目
for (const item in NumberCategory) {
    Number.prototype[item] = NumberCategory[item];
}