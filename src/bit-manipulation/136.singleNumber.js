/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
};
// @lc code=end

// 由于题目要求时间复杂度O(n)，空间复杂度O(1)，因此不能使用排序算法，也不能使用hash-table。
// 本题使用二进制异或的性质来完成：两个数字异或 a^b 是将 a 和 b 的二进制每一位进行运算，如果同一位的数字相同则为0，不同则为1。
console.log(singleNumber([4, 10, 3, 1, 2, 1, 3, 7, 4, 10, 2]));
