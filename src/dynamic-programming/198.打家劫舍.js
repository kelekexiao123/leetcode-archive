/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 *
 * https://leetcode-cn.com/problems/house-robber/description/
 *
 * algorithms
 * Easy (43.79%)
 * Likes:    720
 * Dislikes: 0
 * Total Accepted:    96.3K
 * Total Submissions: 218K
 * Testcase Example:  '[1,2,3,1]'
 *
 * 
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3,1]
 * 输出: 4
 * 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 * 示例 2:
 * 
 * 输入: [2,7,9,3,1]
 * 输出: 12
 * 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 * 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let dp = 0;
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    const temp = res;
    res = Math.max(res, dp + nums[i]);
    dp = temp;
  }
  return res;
};

// @lc code=end

// 状态转移方程：dp[n] = max(dp[n-2] + nums[n], dp[n-1])
// 最简单经典的动态规划题之一。当前最优选择只有两种可能：
// 1. 要么拿当前这户的钱，获利为当前这户所取得的钱与上两家获取的获利相加
// 2. 要么不拿当前这户的钱，获利等于在上一户所取得的获利

// 原版动态规划如下：
// var rob = function(nums) {
//   let dp = new Array(nums.length);
//   dp[0] = 0;
//   dp[1] = nums[0];
//   for (let i = 2; i <= nums.length; i++) {
//     dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
//   }
//   return dp[nums.length];
// };
// 由于dp[n]的值只取决于dp[n-1]与dp[n-2]，因此我们只需要不断更新这两个变量，从而节省空间复杂度。

console.log(rob([2, 7, 9, 3, 1]));