/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = (nums) => {
    const map = new Map();
    let res = 0;
    for (const num of nums) {
        map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
        if (map.has(num + 1) || map.has(num - 1)) {
            const currentMax = Math.max(map.get(num + 1) || 0, map.get(num - 1) || 0) + map.get(num);
            res = Math.max(currentMax, res);
        }
    }
    return res
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))
