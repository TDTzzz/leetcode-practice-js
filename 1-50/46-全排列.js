/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = []
    help(0, nums.length - 1, nums, res)
    return res
};

let help = function (start, end, nums, res) {
    if (start == end) {
        res.push(copy(nums))
        return
    }

    for (let i = start; i <= end; i++) {
        [nums[i], nums[start]] = [nums[start], nums[i]]
        help(start + 1, end, nums, res);
        [nums[start], nums[i]] = [nums[i], nums[start]]
    }
}

//深拷贝
let copy = function (arr) {
    let res = []
    for (let i in arr) {
        res.push(arr[i])
    }

    return res
}


let nums = [1, 2, 3]

console.log(permute(nums))