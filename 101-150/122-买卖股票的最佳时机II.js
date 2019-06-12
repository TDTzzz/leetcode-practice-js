/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0
    let yester = Number.MAX_SAFE_INTEGER
    for (let i in prices) {
        if (yester < prices[i]) {
            profit += prices[i] - yester
        }
        yester = prices[i]
    }
    return profit
};


let arr = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(arr))