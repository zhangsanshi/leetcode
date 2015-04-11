/**
 * 这个方法是手动计算平方差法
 * @param {number} n
 * @returns {number}
 */
var sqrt = function(n) {
    n = Math.floor(n) + '';
    var len = n.length,
        result = '',
        i = 0, tmpN, tmps;
    //按照奇偶把第一位或者第一二位独立出来，不参与循环，记作N
    if (len % 2) {
        tmpN = n[i++];
    } else {
        tmpN = n[i++] + n[i++];
    }
    //算出N的最大平方差sqrt1
    result += Math.floor(Math.sqrt(tmpN));
    //计算出 N - sqrt1* sqrt1结果
    tmps = {
        tmpDiff: tmpN - Math.pow(result, 2)
    };
    //保存平方差结果
    for (; i < len; i++) {
        tmps = getTmp(tmps.tmpDiff + n[i] + n[++i], result);
        result += tmps.tmpSqrt;
    }
    return result - 0;
};


function getTmp (tmpN, result) {
    var tmp = result * 20,
        _tmpSqrt = Math.floor(tmpN / tmp),
        store;
    while ((store = (tmp + _tmpSqrt) * _tmpSqrt) > tmpN) {
        _tmpSqrt--;
    }
    return {
        tmpSqrt: _tmpSqrt,
        tmpDiff: tmpN - store
    };

}