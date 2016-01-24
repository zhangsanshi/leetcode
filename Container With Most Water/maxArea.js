/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = Math.max,
        min = Math.min,
        len = height.length,
        start = 0,
        end = len - 1,
        maxArea = 0;
    while (start < end) {
        maxArea = max(min(height[start], height[end]) * (end - start), maxArea);
        if (height[start] <= height[end]) {
            start++;
        } else {
            end--;
        }
    }

    return maxArea;

};

