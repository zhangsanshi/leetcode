/**
 * @param {number} n
 * @returns {string}
 */
var convertToTitle = function(n) {
    var str = '',
        need,          //是否需要借位
        mod = 0,      //余数
        needMod,      //借位后mod值
        divisor = 26, //除数
        dividend = n; //被除数
    while (dividend) {
        mod = dividend % divisor;
        needMod = mod;
        if (need ) {
            if (needMod) {
                needMod = mod - 1;
            }
        }
        need = !needMod;
        if (need) {
            needMod = 26;
        }
        str = String.fromCharCode(needMod + 64) + str;
        dividend = (dividend - mod) / divisor;
    }
    if (need && str[0] === 'Z' ) {
        str = str.substring(1);
    }
    return str;
};