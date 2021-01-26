/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */

/**
 * Naive solution
 * Time complexity: O(n^2)
 */

// const minOperations = (nums, x) => {
//     const ans = findMin(nums, 0, nums.length-1, x, 0);
//     return ans === Infinity ? -1 : ans;
// };

// const findMin = (nums, leftIndex, rightIndex, x, counter) => {
//     const leftNum = nums[leftIndex];
//     const rightNum = nums[rightIndex];

//     if (x === 0) {
//         return counter;
//     }

//     if (x - leftNum < 0 && x - rightNum < 0 || leftIndex > rightIndex) {
//         return Infinity;
//     }

//     const leftMin = findMin(nums, leftIndex + 1, rightIndex, x - leftNum, counter + 1);
//     const rightMin = findMin(nums, leftIndex, rightIndex - 1, x - rightNum, counter + 1);

//     return Math.min(leftMin, rightMin);
// }

/**
  * Optimal solution
  * Time complexity: O(n)
  */

const minOperations = (nums, x) => {
  const map = new Map(); // key is sum, value is index
  map.set(0, -1);
  let prefix = 0, result = -Infinity;
  const target = nums.reduce((a,b) => a + b) - x;
  for (const [index, num] of nums.entries()) { // create prefix hashmap
    prefix += num;
    map.set(prefix, index);
    if (map.has(prefix - target)) { // see if sum - target exists
      const lengthOfMaxSub = index - map.get(prefix - target); // if exists, get difference between the two index (this represents num of elements to remove)
      result = Math.max(result, lengthOfMaxSub);
    }
  }

  return result === -Infinity ? -1 : nums.length - result;
};

// console.log(minOperations([3, 2, 20, 1, 1, 3], 10))
console.log(minOperations([1,1,4,2,3], 5))
