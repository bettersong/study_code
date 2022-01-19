// 给定两个字符串 a 和 b，寻找重复叠加字符串 a 的最小次数，使得字符串 b 成为叠加后的字符串 a 的子串，如果不存在则返回 -1。

// 注意：字符串 "abc" 重复叠加 0 次是 ""，重复叠加 1 次是 "abc"，重复叠加 2 次是 "abcabc"。


/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
 var repeatedStringMatch = function(a, b) {
    let newa = a
    let num = 1
    while(!(new RegExp(b).test(a))) {
        if(a.length>Math.pow(10,4) || b.length>Math.pow(10,4)) return -1
        a+=newa
        num++
    }
    return num
};
console.log(repeatedStringMatch('ssa','ssssssa'))


// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * @param {string} s
 * @return {number} 'sdcnxskweri'
 */
 var lengthOfLongestSubstring = function(s) {
    if(s.length==0) return 0;
    const lengthT = []
    let str;
    for(var i=0;i<s.length;i++){
        str = s[i]
        lengthT.push(str.length)
        for(var j=i;j<s.length;j++){
            if(str.indexOf(s[j])<0 && s.indexOf(str+s[j])>=0){
                str+=s[j]
                lengthT.push(str.length)
            }
        }
    }
    return Math.max(...lengthT)
};
// var lengthOfLongestSubstring = function(s) {
//     if(s.length==0) return 0

//     const str = s[0]
//     for(var i=0;i<s.length;i++){

//     }

// }

console.log('max',lengthOfLongestSubstring("jzxwxqmevoyyuvzeugrvgqxqhvnezuwiw"))

// 给定一个已按照 非递减顺序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。

// 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数 ，
// 所以答案数组应当满足 1 <= answer[0] < answer[1] <= numbers.length 。
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 输入：numbers = [2,7,11,15], target = 9
输出：[1,2]
 */
 var twoSum = function(numbers, target) {
    //  let res;
    //  for(let i=0;i<numbers.length;){
    //      const tar = target-numbers[i]
    //      let low = 0
    //     let high = numbers.length - 1
    //     while(low<high){
    //         let mid = Math.floor((low+high)/2)
    //         // if(mid==i) return
    //         if(tar==numbers[mid]){
    //             console.log(mid,i)
    //             res = mid<i?[mid+1,i+1]:[i+1,mid+1]
    //             break
    //         } else if(tar<numbers[mid]){
    //             high = mid-1
    //         }else if(tar>numbers[mid]){
    //             low = mid +1 
    //         }
    //      }
    //      i++
    //  }
    //  return res || [-1,-1]
    let l = 0, r = numbers.length-1
    while(l<r){
        if(numbers[l]+numbers[r]===target){
            return [l+1,r+1]
        }else if(numbers[l]+numbers[r]<target){
            l++
        }else{
            r--
        }
    }
}
console.log('twoSum',twoSum([2,3,4],6))

/*罗马数字转整数
字符          数值          
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
*/
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const map = {
        I:1,
        IV:4,
        V:5,
        IX:9,
        X:10,
        XL:40,
        L:50,
        XC:90,
        C:100,
        CD:400,
        D:500,
        CM:900,
        M:1000
    }
    let num=0;
    if(s.length<2) return map[s]
    for(let i=0;i<s.length;){
        if(map[s.slice(i,i+2)]){
            num += map[s.slice(i,i+2)]
            console.log(num,map[s.slice(i,i+2)],'a',i)
            i+=2
        }else{
            num += map[s[i]]
            console.log(num,map[s[i]],'b',i)
            i++
        }
    }
    return num
};
console.log('romanToInt',romanToInt('LVIII'))
//90
var intToRoman = function(num) {
    let nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let romans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let res = "";
    for(let i = 0; i < nums.length; i++){
     while(num >= nums[i]){
         num -= nums[i];
         res += romans[i];
     }   
    }
    return res;
};
console.log('intToRoman',intToRoman(1998))
