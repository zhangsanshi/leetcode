/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var xTemp = x + '',
        i = xTemp.length - 1,
        first = 1,
        reverse = '',
        endLoop = 0;
    if (x>>32 !== x) {
        return 0;
    }
    if (x < 0) {
        endLoop = 1;
        first = -1;
    }
    for (i; i >= endLoop; i--) {
        reverse += xTemp[i];
    }
    reverse = first * reverse;
    if (reverse>>32 !== reverse) {
        return 0;
    }
    return reverse;
};