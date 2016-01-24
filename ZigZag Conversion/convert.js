/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <= 1) {
        return s;
    }

    var result = new Array(numRows),
        ito = numRows + numRows - 2;

    for (var i = 0, len = s.length; i < len; i++) {
        var index = (i % ito);
        if (index > numRows - 1) {
            index = ito - index;
        }
        if (!result[index]) {
            result[index] = s[i];
        } else {
            result[index] += s[i];
        }
    }
    return result.join('');
};