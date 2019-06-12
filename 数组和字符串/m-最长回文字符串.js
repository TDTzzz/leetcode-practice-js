/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let res = '',
        max = 0;

    for (let i = 0; i < s.length; i++) {
        let start = i,
            end = i;

        while (start >= 0 && end <= s.length && s[start] == s[end]) {
            if (max < end - start + 1) {
                max = end - start + 1;
                res = s.substr(start, end - start + 1)
            }
            start--;
            end++;
        }
        start = i, end = i + 1;
        while (start >= 0 && end <= s.length && s[start] == s[end]) {
            if (max < end - start + 1) {
                max = end - start + 1;
                res = s.substr(start, end - start + 1)
            }
            start--;
            end++;
        }
    }

    return res;
};

let s = 'abcca'
console.log(longestPalindrome(s))