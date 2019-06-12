/**
 * @param {string} s
 * @return {number}
 */
//中心扩展法
var countSubstrings = function (s) {

    let num = 0
    for (let i = 0; i < s.length; i++) {
        let start = i,
            end = i;

        while (start >= 0 && end < s.length && s[start] == s[end]) {
            num++;
            start--;
            end++;
        }

        start = i, end = i + 1;

        while (start >= 0 && end < s.length && s[start] == s[end]) {
            num++;
            start--;
            end++;
        }
    }

    return num
};

//动态规划法


let s = 'aaa';
console.log(countSubstrings(s))