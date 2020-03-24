/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (!nums || nums.length <= 0) return [];
  nums = nums.sort((a, b) => a - b);
  if (nums[0] > 0 || nums[nums.length - 1] < 0) return [];

  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;
    const target = 0 - nums[i];
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let sum = nums[l] + nums[r];
      if (sum === target) {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (sum < target) {
        l++;
      } else {
        r--;
      }
    }
  }
  return res;
};
// @lc code=end

// 这道题是Two Sum的升级版，需要三个数的和为0。那么我们可以想到，这三个数中的最小数必定为负数，并且另两个数的和等于这个数的相反数。
// 因此我们需要对数组从小到大进行排序，之后遍历一遍数组，每次固定住最小的那个数字，将它的相反数作为target。之后的解法就与Two Sum的解法完全一致了，由于另外两个数一定比最小数大，因此左右指针范围在当前位置+1到数组尾。
// 跟Two Sum稍有不同的是，当找到target的一组解后不能立即结束循环，因为有可能存在多组和为target的解。并且数字组成完全相同的解不能放入结果中，需要做好条件判断。
console.log(threeSum([-1, 0, 1, 2, -1, -4]));