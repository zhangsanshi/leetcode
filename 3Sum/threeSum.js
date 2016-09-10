/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var len = nums.length,
        result = [],
        sumHalf,
        first,
        last,
        i,
        j,
        k,
        prevA,
        prevB,
        prevC;
    nums.sort(function (a, b) {
        return a - b;
    });
    first = nums[0];
    last = nums[len - 1];
    if (first > 0 || last < 0) {
        return result;
    }
    for (i = 0; i < len; i++) {
        sumHalf = nums[i];
        if (prevA === sumHalf) {
            continue;
        }
        prevA = sumHalf;
        prevB = '';
        if (sumHalf <= 0) {
            for (j = len - 1; j > i; j--) {
                if (prevB === nums[j]) {
                    continue;
                }
                sumHalf = nums[i] + nums[j];
                if (-sumHalf < nums[i + 1] || -sumHalf > nums[j - 1]) {
                    continue;
                }
                prevC = '';
                if (sumHalf > 0) {
                    for (k = i + 1; k < j; k++) {
                        if (prevC === nums[k] || nums[k] > -sumHalf) {
                            continue;
                        }
                        if (nums[i] + nums[j] + nums[k] === 0) {
                            prevB = nums[j];
                            prevC = nums[k];
                            result.push([nums[i], nums[j], nums[k]]);
                        }
                    }
                } else {
                    for (k = j - 1; k > i; k--) {
                        if (prevC === nums[k] || nums[k] < -sumHalf) {
                            continue;
                        }
                        if (nums[i] + nums[j] + nums[k] === 0) {
                            prevB = nums[j];
                            prevC = nums[k];
                            result.push([nums[i], nums[j], nums[k]]);
                        }
                    }
                }
            }
        }
    }
    return result;
};
