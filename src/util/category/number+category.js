/*
 * @Author: afei
 * @Date: 2019-07-05 17:50:14
 * @Description: Number 类目
 */

const afDecimalLength = function () {
    let arr = ("" + this).split('.');
    return arr.length > 1 ? arr[1].length : 0
}

export default {
    afDecimalLength
}