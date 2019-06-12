/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let first = Number.MAX_SAFE_INTEGER,
        second = Number.MAX_SAFE_INTEGER;

    for (let now of nums) {
        if (now <= first) {
            first = now;
            continue;
        }
        if (first <= now && now <= second) {
            second = now;
            continue;
        }
        if (now > second) {
            return true
        }
    }
    return false;
};

let nums = [5, 1, 5, 5, 2, 5, 4]

console.log(increasingTriplet(nums))