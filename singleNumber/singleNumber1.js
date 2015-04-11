/**
 * @param {number[]} A
 * @return {number}
 */
var singleNumber = function(A) {
    var single = 0;
    for (var i = 0, len = A.length; i < len; i++) {
        single = single ^ A[i];
    }
    return single;
};