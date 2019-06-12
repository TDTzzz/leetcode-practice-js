/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var res = [],
        tmp = [];
    help(0, 0, tmp, res, n);


    return res;
};

var help = function (left, right, tmp, res, n) {
    if (left == n && right == n) {
        res.push(tmp);
        return;
    }

    if (left < n) help(left + 1, right, tmp + "(", res, n);
    if (left > right) help(left, right + 1, tmp + ")", res, n);
}

console.log(generateParenthesis(3));