
/**
 * 这个方法是辗转逼近法，第一次记sqrt=1，sqrt = ath.floor((n / sqrt + sqrt) / 2);
 * @param {number} n
 * @returns {number}
 */
var sqrt = function(n) {
    var sqrt = 1;
    while(! (Math.pow(sqrt, 2) <= n && Math.pow(sqrt + 1, 2) > n )) {
        sqrt = Math.floor((n / sqrt + sqrt) / 2);
    }
    return sqrt;
};