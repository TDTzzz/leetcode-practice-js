//全排列

var fuck = function (nums) {
    var tmp = [],
        res = [];

    help(0, nums.length - 1, nums, res);
    return res;
}

var help = function (start, end, nums, res) {

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

var copy = function (arr) {
    var res = [];
    for (let i in arr) {
        res.push(arr[i])
    }

    return res;
}

let nums = [1, 2, 3]
console.log(fuck(nums))