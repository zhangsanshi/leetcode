/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var i = 0,
        len = s.length,
        start = 0,
        long = 0,
        hash = {},
        char, isPros, _long;
    for (; i < len; i++) {
        char = s[i];
        isPros = char in hash;

        if (!isPros || hash[char] < start) {
            _long = i - start + 1;
            long = (_long > long) ? _long : long;
        } else if (isPros) {
            start = hash[char] + 1;
        }
        hash[char] = i;
    }
    return long;
};