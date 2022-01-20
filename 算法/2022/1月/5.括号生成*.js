/*数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例 1：
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：
输入：n = 1
输出：["()"]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const list = []
    backtracking(n, list, 0, 0, "");
    return list;
};


function backtracking(n, result, left, right, str) {
    // 右边括号数量大于左边，表示无效括号组合
    if (right > left) {
            return;
        }
    // 左右两边括号数量相等
    if (left == n && right == n) {
        result.push(str);
        return;
    }
    // 左边少了，则左边 + 1
    if (left < n) {
        backtracking(n, result, left+1, right, str+"(");
    }
    // 右边少了，则右边 + 1
    if (right < left) {
        backtracking(n, result, left, right+1, str+")");
    }
}

console.log('generateParenthesis',generateParenthesis(3))