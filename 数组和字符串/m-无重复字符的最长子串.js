/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var max = 0,
        left = 0,
        map = {};
    for (var i = 0; i < s.length; i++) {
        var v = s[i];
        if (map[v] >= left) {
            left = map[v] + 1;
        }
        map[v] = i;
        if (max < i - left + 1) {
            max = i - left + 1;
        }
    }

    console.log(map)
    return max;
};


var test = function (s) {
    let left = 0,
        max = 0,
        map = {};

    for (let i = 0; i < s.length; i++) {
        let v = s[i]
        if (map[v] >= left) {
            left = map[v] + 1;
        }
        map[v] = i
        if (max < i - left + 1) {
            max = i - left + 1
        }
    }

    return max
}

let s = "abcabcbb"

console.log(lengthOfLongestSubstring(s))