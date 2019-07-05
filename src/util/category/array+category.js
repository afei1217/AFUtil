/*
 * @Author: afei
 * @Description: 对数组类Array 添加方法
 * @Date: 2019-03-27 09:43:18
 */

/**
* 纯数组的去重
* 纯数组: 纯洁的单层数组
* @return Arrar 返回一个新数组
*/
const afUnique = function() {
    if (Array.hasOwnProperty('from')) {
        return Array.from(new Set(this));
    } else {
        let result = []
        let obj = {}
        for (let i of this) {
            if (!obj[i]) {
                result.push(i)
                obj[i] = true
            }
        }
        return result;
    }
}

/**
* 对象数组的去重 (根据某个key去重)
* @return Arrar 返回一个新数组(暂时未对Object深拷贝)
*/
const afUniqueWithKey = function(keyStr) {
    var obj = {};
    var result = this.reduce((item, next) => {
        const uniqueValue = next[keyStr];
        obj[uniqueValue] ? '' : obj[uniqueValue] = true && item.push(next);
        return item;
    }, []);
    return result;
}

/**
* 纯数组的并集 (实际就是数组的连接并去重);
* @return Arrar 返回一个新数组
*/
const afUnion = function() {
    let array = [].concat(this);
    for (let index = 0; index < arguments.length; index++) {
        array = array.concat(arguments[index]);
    }
    return array.afUnique();
}
/**
* 对象数组的并集 (实际就是数组的连接并去重);
* @return Arrar 返回一个新数组
*/
const afUnionWithKey = function (keyStr) {
    let array = [].concat(this);
    for (let index = 0; index < arguments.length; index++) {
        array = array.concat(arguments[index]);
    }
    return array.afUniqueWithKey(keyStr);
}

/**
* 纯数组的交集
* @return Arrar 返回一个新数组
*/
const afIntersect = function(arr) {
    return this.afUnique().filter(element => arr.indexOf(element) > -1 );
}
/**
* 对象数组的交集
* @return Arrar 返回一个新数组
*/
const afIntersectWithKey = function (arr,keyStr) {
    return this.afUniqueWithKey(keyStr).filter(element => {
        return arr.find(ele => ele[keyStr] === element[keyStr])
    });
}

/**
* 纯数组的差集 (属于a并且不属于b)
* @return Arrar 返回一个新数组
*/
const afDiff = function(arr) {
    return this.filter(v => !arr.includes(v));
}
/**
* 纯数组的差集 (属于a并且不属于b)
* @return Arrar 返回一个新数组
*/
const afDiffWithKey = function (arr,keyStr) {
    return this.filter(element => {
        return !arr.find(ele => ele[keyStr] === element[keyStr])
    });
}

export default {
    afUnique,
    afUniqueWithKey,
    afUnion,
    afUnionWithKey,
    afIntersect,
    afIntersectWithKey,
    afDiff,
    afDiffWithKey

}