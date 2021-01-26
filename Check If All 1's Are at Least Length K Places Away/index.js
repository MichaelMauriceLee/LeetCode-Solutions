/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const kLengthApart = (nums, k) => {
    let lastIndex = -1;
    for (const [index, num] of nums.entries()) {
        if (num === 1) {
            if (num === 1 && lastIndex !== -1 && index - lastIndex <= k) {
                return false;
            }
            lastIndex = index;
        }
    }
    return true;
};
