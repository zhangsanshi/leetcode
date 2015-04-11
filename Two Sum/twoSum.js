/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]} two integers in an array, ie: [index1, index2]
 */
var twoSum = function(numbers, target) {
    var result = {},
        first;
    for (var i = 0, len = numbers.length; i < len; i++) {
        first = numbers[i];

        if (first in result) {
            return [result[first] + 1, i + 1];
        } else {
            result[target - first] = i;
        }
    }
};