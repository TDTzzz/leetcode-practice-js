/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort(function(a, b) {
    return a > b ? 1 : -1;
  });
  let res = nums[0] + nums[1] + nums[2];
  let length = nums.length;

  for (let left = 0; left < length - 2; left++) {
    let mid = left + 1;
    let right = length - 1;

    while (mid < right) {
      let tmp = nums[left] + nums[mid] + nums[right];
      if (Math.abs(tmp - target) < Math.abs(res - target)) {
        res = tmp;
      } else {
        if (tmp < target) {
          mid++;
        } else if (tmp == target) {
          return target;
        } else {
          right--;
        }
      }
    }
  }

  return res;
};
