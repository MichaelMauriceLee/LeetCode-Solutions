/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = (nums) => {
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i - 1] < nums[i]) {
            let firstNum = nums[i - 1], firstIndex = i - 1, secondNum = nums[i], secondIndex = i
            for (let j = i; j < nums.length; j++) { // find lowest number to switch with
                if (nums[j] <= secondNum && nums[j] > firstNum) {
                    secondNum = nums[j]
                    secondIndex = j
                }
            }
            nums[secondIndex] = firstNum
            nums[firstIndex] = secondNum
            // reverse that array portion
            for (let j = 0; j < (nums.length - i) / 2; j++) {
                let temp = nums[i + j]
                nums[i + j] = nums[nums.length - 1 - j]
                nums[nums.length - 1 - j] = temp
            }
            return
        }
    }
    // if it gets here, need to reverse entire array
    for (let i = 0; i < nums.length / 2; i++) {
        let temp = nums[i]
        nums[i] = nums[nums.length - 1 - i]
        nums[nums.length - 1 - i] = temp
    }
};

const nums = [1,5,1]
nextPermutation(nums)
console.log(nums)
