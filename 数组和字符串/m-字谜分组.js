/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let hashMap = {}
    for (let str of strs) {

        let tmp = []
        for (let i of str) {
            tmp.push(i)
        }
        tmp.sort()

        let key = tmp.join("")
        if (hashMap[key] == undefined) {
            hashMap[key] = []
        }
        hashMap[key].push(str)
    }

    let res = []
    Object.keys(hashMap).forEach(function (key) {
        res.push(hashMap[key])

    })

    return res
};

let arr = ["eat", "tea", "tan", "ate", "nat", "bat"]

console.log(groupAnagrams(arr))
