/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 *
 * https://leetcode-cn.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (65.18%)
 * Likes:    458
 * Dislikes: 0
 * Total Accepted:    37.8K
 * Total Submissions: 58K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
 *
 * 示例:
 *
 * 输入: 3
 * 输出: 5
 * 解释:
 * 给定 n = 3, 一共有 5 种不同结构的二叉搜索树:
 *
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  if (n === 0 || n === 1) return 1;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }
  return dp[n];
};
// @lc code=end

// 这道题请与Unique Binary Search Trees II配合食用，这道题需要求对按数字顺序1~n组成的树进行先序遍历,求所有可能的个数。那么我们可以建立一个一维数组dp，考虑当每个数字为根节点时，所有可行的方法个数。
// 这实际上是求卡特兰数，不知道的同学可自行百度。根节点的组成个数为左右子树的组成个数相乘。
// 对于每一个节点i，考虑所有左右子树分配节点个数可能的组成情况，设左子树节点个数为j，那么右子树节点个数为i-1-j,将左右子树的组成个数相乘，将所有情况相加，即可得到dp[i]的值。
// 状态转移方程为dp[i] = dp[i-1] * dp[n-i]。
// 确定边界情况，n=0时，只有可能是空树；n=1时，也只有一种可能。
console.log(numTrees(3));
