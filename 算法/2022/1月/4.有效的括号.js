/*给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
输入：s = "{[]}"
输出：true
输入：s = "([)]"
输出：false
*/
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
     if(s.length%2==1) return false
     const map = new Map([
         ['(',')'],
         ['[',']'],
         ['{','}']
     ])
    let stack = [] //左括号栈
    console.log(map)
    for(let i=0; i< s.length; i++) {
        if(map.has(s[i])){
            //左括号进栈
            stack.push(s[i])
        }else if(s[i]===map.get(stack.pop())){
            // flag = true
        }else{
            return false
        }
    }
    return stack.length==0
};
console.log('isValid',isValid('(()('))