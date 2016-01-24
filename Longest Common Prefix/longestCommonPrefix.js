/**
 * Created by sanshi on 2015/10/7.
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var len = strs.length,
        str = '',
        long = strs[0] || '';
    if (len == 1 || !long) {
        return long;
    }
    for (var i = 1; i < len; i++) {
        str = strs[i];
        if (str) {
            while (str.indexOf(long) != 0) {
                if (long.length > 1) {
                    long = long.substring(0, long.length - 1);
                } else {
                    return '';
                }
            }
        } else {
            return '';
        }
    }
    return long;
};