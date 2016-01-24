/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var maxPalindrome = 1,
        len = s.length,
        palindrome = s[0];

    for (var i = 1; i < len; i++) {
        if (s[i] != s[i + 1]) {
            for (var j = maxPalindrome; j <= i; j++) {

                if (s[i - j] !== s[i + j]) {
                    break;
                }
                if ( maxPalindrome < (i + j  - (i - j))) {
                    maxPalindrome = i + j  - (i - j);
                    palindrome = s.substring(i - j, i + j + 1);
                }

            }
        } else {
            for (var j = maxPalindrome; j <= i; j++) {

                if (s[i - j] !== s[i + j]) {
                    break;
                }
                if ( maxPalindrome < (i + j  - (i - j))) {
                    maxPalindrome = i + j  - (i - j);
                    palindrome = s.substring(i - j, i + j + 1);
                }

            }
        }

    }
    return palindrome;

};
var arr = ["e", "abcba", "dfabcbalg"];
for (var i = 0; i < arr.length; i++) {
    console.log(longestPalindrome(arr[i]));
}
