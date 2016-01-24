/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = x + '';
    var first = '',
        xArr = x.split(''),
        reverse;
    if (isNaN(x[0])) {
        first = xArr.shift();
    }
    reverse = first + xArr.reverse().join('') - 0;
    if (reverse < (1 << 31) || (reverse > -1 - (1 << 31))) {
        reverse = 0;
    }
    return reverse;
};