/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var weight = 0;

    while(n) {
        if ( n % 2 ) {
            weight ++;
        }
        n = (n >>> 1);
    }
    return weight;
};