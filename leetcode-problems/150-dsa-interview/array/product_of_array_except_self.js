/**
 * @problem 238. Product of Array Except Self
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * @example
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 */

/**
 * @param {number[]} nums - Array of integers
 * @return {number[]} - Array where each element is the product of all other elements
 */

var productExceptSelf = function (nums) {
  let n = nums.length;
  const productArr = new Array(n).fill(1);

  //build prefix product array
  for (let i = 1; i < n; i++) {
    productArr[i] = productArr[i - 1] * nums[i - 1];
  }

  let prevSuffix = 1;
  for (let i = n - 2; i >= 0; i--) {
    prevSuffix *= nums[i + 1];
    productArr[i] *= prevSuffix;
  }

  return productArr;
};
