/**
 * @param {string} str
 * @return {number}
 */
var INT_MAX = 2147483647;
var INT_MIN = -2147483648;

var myAtoi = function(str) {
    var reg = /-{0,1}\d{1,}/g,
        number = (reg.exec(str)||'')[0],
        len = str.length;
    while (number && str[reg.lastIndex - number.length - 1] === '+') {
        number = (reg.exec(str)||'')[0];
    }

    if (!number){
        return 0;
    } else if (number>> 32 != number) {
        if (number > 0) {
            return INT_MAX;
        } else {
            return INT_MIN;
        }
    } else {
        return number - 0;
    }

};