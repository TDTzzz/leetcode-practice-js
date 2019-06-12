/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    var len = nums.length;
    var dp = []
    dp.fill(0);
    dp[0] = 1;

    for (let i in nums) {
        if (dp[i] == 1) {
            for (let j = parseInt(i) + 1; j <= parseInt(nums[i]) + parseInt(i); j++) {
                if (j < len) {
                    dp[j] = 1;
                }
            }
        } else {
            break;
        }
    }
    return dp[len - 1] == 1;
};

let nums = [2, 3, 1, 1, 4]

console.log(canJump(nums))