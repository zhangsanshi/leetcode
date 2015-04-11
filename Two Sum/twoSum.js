/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]} two integers in an array, ie: [index1, index2]
 */
var twoSum = function(numbers, target) {
    var result = {},
        first, second;
    for (var i = 0, len = numbers.length; i < len; i++) {
        first = numbers[i];
        second = target - first;
        if (!(first in  result)) {
            result[first] = [i];
            result['!' + (target - first)] = [i];
        } else {
            result[first].push(i);
            result['!' + (target - first)].push(i);
        }
        if ('!' + first in result && i !== result['!' + first][0]) {
            return [ result['!' + first][0] + 1, i + 1 ];
        }

    }
};