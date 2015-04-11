
/**
 * 这个方法是中位数逼近法
 * @param {number} n
 * @returns {number}
 */
var sqrt = function(n) {
    var left = n >> 1,
        right = n,
        leftPow;
    if (n < 1) {
        return 0;
    } else if (n === 1){
        return 1;
    }
    while(true) {
        leftPow = Math.pow(left, 2);
        if (leftPow > n) {
            right = left;
            left = left >> 1;
        }
        if (leftPow === n) {
            break;
        }
        if (right - left <= 1) {
            break;
        }
        if (leftPow < n) {
            left = ((right - left) >> 1) + left;
        }
    }
    return left;
};