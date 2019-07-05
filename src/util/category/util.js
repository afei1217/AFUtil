/*
 * @Author: afei
 * @Date: 2019-07-05 14:05:37
 * @Description: 绑定到window对象上的工具类
 */

const getType = (obj) => {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

const isString = obj => {
    return getType(obj) === 'String';
}

const isNumber = o => { //是否数字
    return getType(o) === 'Number' && !isNaN(o);
}

const isBoolean = o => {
    return getType(o) === "Boolean";
}

const isFunction = o => {
    return getType(o) === 'Function';
}

const isNull = o => {
    return getType(o) === 'Null';
}

const isUndefined = o => {
    return getType(o) === 'Undefined';
}

const isObject = o => {
    return getType(o) === 'Object';
}

const isArray = o => {
    return getType(o) === 'Array';
}

const isDate = o => {
    return getType(o) === 'Date';
}

const isRegExp = o => {
    return getType(o) === 'RegExp';
}

const isError = o => {
    return getType(o) === 'Error';
}

const isSymbol = o => {
    return getType(o) === 'Symbol';
}

const isPromise = o => {
    return getType(o) === 'Promise';
}

const isSet = o => {
    return getType(o) === 'Set';
}


export default {
    getType,
    isString,
    isNumber,
    isBoolean,
    isFunction,
    isNull,
    isUndefined,
    isObject,
    isArray,
    isDate,
    isRegExp,
    isError,
    isSymbol,
    isPromise,
    isSet
}