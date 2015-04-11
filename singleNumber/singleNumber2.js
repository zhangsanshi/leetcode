/**
 * @param {number[]} A
 * @return {number}
 */
var singleNumber = function(A) {
    var single = {};
    for (var i = 0, len = A.length; i < len; i++) {
        if (A[i] in single) {
            delete single[A[i]];
        } else {
            single[A[i]] = true;
        }
    }
    for (var key in single)
        return key - 0;
};