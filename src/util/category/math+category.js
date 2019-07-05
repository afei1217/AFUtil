/*
 * @Author: afei
 * @Date: 2019-07-05 13:57:59
 * @Description: Math的类目
 */


// 将数字转有限集
const _toFinite = (value) => {
    const INFINITY = 1 / 0
    const MAX_INTEGER = 1.7976931348623157e+308

    if (!value) {
        return value === 0 ? value : 0
    }
    if (value === INFINITY || value === -INFINITY) {
        const sign = (value < 0 ? -1 : 1)
        return sign * MAX_INTEGER
    }
    return value === value ? value : 0
}

const afRandom = function (lower, upper, floating) {
    const freeParseFloat = parseFloat;

    if (floating === undefined) {
        if (typeof upper == 'boolean') {
            floating = upper
            upper = undefined
        } else if (typeof lower == 'boolean') {
            floating = lower
            lower = undefined
        }
    }

    if (lower === undefined && upper === undefined) {
        lower = 0
        upper = 1
    } else {
        lower = _toFinite(lower)
        if (upper === undefined) {
            upper = lower
            lower = 0
        } else {
            upper = _toFinite(upper)
        }
    }

    if (lower > upper) {
        lower = lower ^ upper;
        upper = lower ^ upper;
        lower = lower ^ upper;
    }

    console.log('random',lower,upper,floating);
    let scale = Math.max(lower.afDecimalLength(), upper.afDecimalLength());
    // scale = 10 ^ scale;
    scale =  Math.pow(10, scale);
    if (floating && scale === 1) scale = 10;



    return Math.floor(Math.random() * (upper * scale - lower * scale + 1) + lower * scale) / scale;

    // if (floating || lower % 1 || upper % 1) {
    //     const rand = Math.random()
    //     const randLength = `${rand}`.length - 1
    //     return Math.min(lower + (rand * (upper - lower + freeParseFloat(`1e-${randLength}`)), upper))
    // }
    // return lower + Math.floor(Math.random() * (upper - lower + 1))
}

export default {
    afRandom
}