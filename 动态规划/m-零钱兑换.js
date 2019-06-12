/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    coins.sort(function (a, b) {
        return a - b;
    });

    let dp = new Array(amount + 1)
    dp.fill(amount + 1)
    dp[0] = 0

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }
    return dp[amount] == amount + 1 ? -1 : dp[amount]
};

let coins = [1, 2, 5]
let amount = 11

console.log(coinChange(coins, amount))