/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * Time Complexity: O(n)
 */

const maxOperations = (nums, k) => {
    const map = new Map();
    let counter = 0;
    for (const num of nums) {
        if (map.has(k-num) && map.get(k-num) !== 0) {
            map.set(k-num, map.get(k-num) - 1);
            counter++;
        } else {
            map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
        }
    }
    return counter;
};

console.log(maxOperations([1,2,3,4], 5))
