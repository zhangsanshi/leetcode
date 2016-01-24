/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var rev = 0,
        tmp = x;
    if (x > 0 && x >> 32 == x) {
        while (tmp) {
            rev = rev * 10 + tmp % 10;
            tmp = Math.floor(tmp / 10);
        }
        if (rev === x) {
            return true;
        }
    }
    return false;
};