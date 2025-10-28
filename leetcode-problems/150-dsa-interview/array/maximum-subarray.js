/**
 * https://leetcode.com/problems/maximum-subarray/
 * @problem 53. Maximum Subarray
 *
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 * @example 1
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 *
 * @example 2
 * Input: nums = [1]
 * Output: 1
 * Explanation: The subarray [1] has the largest sum 1.
 */

/**
 * @param {number[]} nums - An array of integers
 * @return {number} - The sum of the contiguous subarray with the largest sum
 */
var maxSubArray = function (nums) {
  if (!nums || nums.length < 1) return 0;

  let max_sum = nums[0];
  let max_ending_here = nums[0];
  for (let i = 1; i < nums.length; i++) {
    max_ending_here = Math.max(nums[i], max_ending_here + nums[i]);
    max_sum = Math.max(max_sum, max_ending_here);
  }

  return max_sum;
};
