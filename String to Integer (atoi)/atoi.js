var INT_MAX = 2147483647;
var INT_MIN = -2147483648;
/**
 * @param {string} str
 * @return {number}
 */
var atoi = function(str) {
    var number = parseInt(str);

    if (number > INT_MAX) {
        return INT_MAX;
    }
    if (number < INT_MIN) {
        return INT_MIN;
    }
    if (number !== number) {
        number = 0;
    }
    return number;
};