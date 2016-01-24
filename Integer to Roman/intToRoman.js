/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
    var value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var dic = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var result = '';
    var tmp = {
        1: ['', ''],
        2: ['', '', ''],
        3: ['', '', '', '']
    };

    for (var i = 0, len = value.length; (i < len) && num; i++) {
        var division = Math.floor(num / value[i]);
        num = num % value[i];
        if ( division > 0 ) {
            result += tmp[division].join(dic[i]);
        }
    }
    return result;
};