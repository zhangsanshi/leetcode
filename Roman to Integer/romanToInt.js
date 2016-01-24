/**
 * Created by sanshi on 2015/9/18.
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var num = 0,
        dic = {"M":1000,"CM":900,"D":500,"CD":400,"C":100,"XC":90,"L":50,"XL":40,"X":10,"IX":9,"V":5,"IV":4,"I":1};
    for (var i = 0, len = s.length; i < len; i++) {
        var s2 = s[i] + s[i + 1];
        if (!dic[s2]) {
            num += dic[s[i]];
        } else {
            num += dic[s2];
            i++;
        }
    }
    return num;
};