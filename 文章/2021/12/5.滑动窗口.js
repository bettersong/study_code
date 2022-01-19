/*滑动窗口指的是这样一类问题的求解方法，在数组上通过双指针同向移动而解决的一类问题。
其实这样的问题我们可以不必为它们专门命名一个名字，它们的解法其实是很自然的。

使用滑动窗口解决的问题通常是暴力解法的优化，掌握这一类问题最好的办法就是练习，然后思考清楚为什么可以使用滑动窗口。
*/

// 最长的美好子字符串
/**
 * 当一个字符串 s 包含的每一种字母的大写和小写形式 同时 出现在 s 中，就称这个字符串 s 是 美好 字符串。
 * 比方说，"abABB" 是美好字符串，因为 'A' 和 'a' 同时出现了，且 'B' 和 'b' 也同时出现了。
 * 然而，"abA" 不是美好字符串因为 'b' 出现了，而 'B' 没有出现。
给你一个字符串 s ，请你返回 s 最长的 美好子字符串 。如果有多个答案，请你返回 最早 出现的一个。
如果不存在美好子字符串，请你返回一个空字符串。
输入：s = "YazaAay"
输出："aAa"
 */
/**
 * @param {string} s
 * @return {string}
 */
 var longestNiceSubstring = function(s) {
     let res = ""
     if(s.length<2) return ""
    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<=s.length;j++){
            const str = s.slice(i,j+1)
            if(isNiceStr(str)&&str.length>res.length){
                    res = str
            }
        }
    }
    return res

    function isNiceStr(str){
        for (const c of str) {
            const charCode = c.charCodeAt()
            let s
            if (charCode > 90) {
              s = String.fromCharCode(charCode - 32)
            } else {
              s = String.fromCharCode(charCode + 32)
            }
            if (!str.includes(s)) return false
          }
          return true
    }
};
console.log('longestNiceSubstring',longestNiceSubstring('sasASsdSbcds'))



// console.log('isNiceStr',isNiceStr('saSbcds'))