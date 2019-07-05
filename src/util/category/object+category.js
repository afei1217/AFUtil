/*
 * @Author: afei
 * @Date: 2019-07-03 16:26:17
 * @Description: Object 添加方法
 */


const afGet = function (path,defaultValue) {
    return (!Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path).reduce((o, k) => (o || {})[k], this) || defaultValue;
}

export default {
    afGet
}