/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const dp = new Array(s.length + 1).fill(0).map(x => new Array(p.length + 1).fill(false));
  dp[0][0] = true;
  for (let i = 0; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (j > 1 && p[j - 1] === '*') {
        if (dp[i][j - 2]) {
          dp[i][j] = true;
        } else {
          if (i > 0 && (s[i - 1] === p[j - 2] || p[j - 2] === '.')) {
            dp[i][j] = dp[i - 1][j];
          }
        }
      } else {
        if (i > 0 && (s[i - 1] === p[j - 1] || p[j - 1] === '.')) {
          dp[i][j] = dp[i - 1][j - 1];
        }
      }
    }
  }
  return dp[s.length][p.length];
};
// @lc code=end

// 这道题也可以尝试着用dp来解。一般来说，涉及到两字符串比较求极值的问题，通常都是建立一个二维数组dp[i][j]，然后让两字符串的每个字符充当横纵轴，然后查看结果是否匹配。定义好问题后，我们看下子问题分类，这里一共有两种情况。
// 1. 当正则字符串的前一个字符不为*时，那么就考虑s前一个字符是否被p前一个字符匹配了(即相等或.)，子问题化简为dp[i-1][j-1]。即：
// dp[i][j] = dp[i-1][j-1]  当dp[j-1] !== "*" && (s[i-1] === p[j-1] || p[j-1] === '.')
// 2. 当正则字符串的前一个字符为*时，子问题又要分化为两种情况，即：
// 1）在*前面的字符没有被匹配过，那么匹配字符串的前两个字符都可以被去掉了，即：
// dp[i][j] = dp[i][j-2] 当dp[j-1] === "*" && *前面的字符没有被匹配过
// 2）在*前面的字符被匹配过，那么就考虑s前一个字符是否被p前 两 个字符匹配了(即相等或.)(因为p前一个字符为*)，即：
// dp[i][j] = dp[i-1][j] 当dp[j-1] === "*" && *前面的字符被匹配过 && (s[i-1] === p[j-2] || p[j-1] === '.')

console.log(isMatch('ab', '.*'));
