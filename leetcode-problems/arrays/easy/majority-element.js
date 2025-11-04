/**
 * @problem 169. Majority Element
 *
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 *
 * @example 1
 * Input: nums = [3,2,3]
 * Output: 3
 *
 * @example 2
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 */

/**
 * @param {number[]} nums - Array of integers
 * @return {number} - The majority element
 */
var majorityElement = function (nums) {
  let majority = nums[0],
    vote = 0;

  for (let i = 0; i < nums.length; i++) {
    if (vote == 0) {
      vote++;
      majority = nums[i];
    } else if (majority == nums[i]) {
      vote++;
    } else {
      vote--;
    }
  }
  return majority;
};
