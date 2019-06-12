/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let res = 0
    let min_buy = Number.MAX_SAFE_INTEGER
    for (let i in prices) {
        min_buy = Math.min(min_buy, prices[i])
        res = Math.max(res, prices[i] - min_buy)
    }

    return res
};

let prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices))