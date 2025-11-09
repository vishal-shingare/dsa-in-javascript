/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * @problem 334. Increasing Triplet Subsequence
 *
 * Given an integer array nums, return true if there exists a triple of indices (i, j, k)
 * such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
 *
 * @example 1
 * Input: nums = [1,2,3,4,5]
 * Output: true
 * Explanation: Any triplet where i < j < k is valid.
 *
 * @example 2
 * Input: nums = [5,4,3,2,1]
 * Output: false
 * Explanation: No triplet exists.
 */

/**
 * O(n) greedy solution - keep two markers for smallest and second smallest values seen so far.
 * If we find a number greater than both markers we have an increasing triplet.
 *
 * @param {number[]} nums - Input array
 * @return {boolean} - True if an increasing triplet subsequence exists
 */
var increasingTriplet = function (nums) {
  // small = smallest value so far; mid = second smallest value so far
  let small = Infinity,
    mid = Infinity;
  for (let x of nums) {
    if (x <= small) {
      small = x;
    } else if (x <= mid) {
      mid = x;
    } else {
      // x > mid > small -> we have a triplet
      return true;
    }
  }
  return false;
};
