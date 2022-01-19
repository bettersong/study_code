// 给你一个 下标从 0 开始 的整数数组 nums ，返回满足下述条件的 不同 四元组 (a, b, c, d) 的 数目 ：

// nums[a] + nums[b] + nums[c] == nums[d] ，且
// a < b < c < d
/**

 * 输入：nums = [1,2,3,6]
输出：1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var countQuadruplets = function(nums) {
     let res = 0
    for(let a=0;a<nums.length;a++){
        for(let b=a+1;b<nums.length;b++){
            for(let c=b+1;c<nums.length;c++){
                for(let d=c+1;d<nums.length;d++){
                    if(nums[a]+nums[b]+nums[c]==nums[d]){
                        res++
                    }
                }
            }
        }
    }
    return res
};
console.log('countQuadruplets',countQuadruplets([1,2,6,4,7]))

/*846给你一个整数数组 hand 其中 hand[i] 是写在第 i 张牌，和一个整数 groupSize 。
如果她可能重新排列这些牌，返回 true ；否则，返回 false 。

示例 1：
输入：hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
输出：true
解释：Alice 手中的牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。
*/
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
 var isNStraightHand = function(hand, groupSize) {
    if(hand.length%groupSize !=0) return false
    if(groupSize==1) return true
    const arr = hand.sort()
    const map = new Map()
    for(let i=0;i<arr.length;i++){
      map.set(arr[i], map.get(arr[i]) ?map.get(arr[i])+1:1)
    }
    console.log(map,'aa') 
    for(let i=0;i<groupSize;i++){

    }
    return
};
console.log('isNStraightHand',isNStraightHand([1,2,3,4,6,6,6,2,3,4,7,8],3))

// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let index = 0,flag=true
    while(flag){
        let str = strs[0].slice(0,index+1)
        let num = 0
        for(let i=0;i<strs.length;i++){
        if(strs[i].slice(0,index+1) == str && index+1<=strs[i].length){
            num++
        }else{
            flag=false
        }
        }
        if(num==strs.length){
            index++
        }
    }
    return strs[0].slice(0,index)
};
console.log('longestCommonPrefix',longestCommonPrefix(["flower","flow","flight"]))

/*输入：n = 9
输出：6
解释：
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr = [2, 4, 6, 8]
arr = [2, 6]
arr = [6]
*/
/**
 * @param {number} n
 * @return {number}
 */

var lastRemaining = function (n) {
    let len = n, space = 1, first = 1, order = true;
    while (len > 1) {
        if (order || len % 2 === 1) {
            first += space;
        }
        len = Math.floor(len / 2);
        space *= 2;
        order = !order;
    }
    return first;
};
console.log('lastRemaining',lastRemaining(9))

/* 给你一个字符串 s，找到 s 中最长的回文子串。
输入：s = "babad"
输出："bab"
*/
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if(s.length==1) return s
    let left,right,target=''
    for(let i=0;i<s.length;i++){
        left=i,right=s.length
        while(left<right){
            let now = s.slice(left,right)
            if(isHuiWen(now)&&now.length>target.length){
                target = now 
            }
            right--
        }
    }
    return target
    function isHuiWen(str) {
        let res
        for(let k=0;k<str.length/2;k++){
            if(str[k]===str[str.length-k-1]){
                res=true
            }else{
                return false
            }
        }
        return res
    }
};
console.log('longestPalindrome',longestPalindrome('cbbd'))

/*将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

P   A   H   N
A P L S I I G
Y   I   R
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
*/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if(numRows==1) return s
    let left=0,type='+'
    const arr = new Array(numRows).fill('');
    for(let i=0;i<s.length;i++){
        if(left<numRows-1&&type=='+'){
            arr[left] +=s[i]
            left++
        }else if(left>0&&type=='-'){
            arr[left] +=s[i]
            left--
        }else if(left==0&&type=='-'){
            arr[left] +=s[i]
            left++
            type='+'
        }else if(left==numRows-1&&type=='+'){
            arr[left] +=s[i]
            left--
            type='-'
        }
    }
    return arr.join('')
};
console.log('convert',convert("PAYPALISHIRING",3))

var myAtoi = function(s) {
    if(isNaN(s[0])&&s[0]!='+'&&s[0]!='-') return 0
    let num='',flag='+'
    if(s[0]=='+'||s[0]=='-') flag = s[0]
    for(let i=s[0]=='+'||s[0]=='-'?1:0;i<s.length;i++){
        console.log(s[i],isNaN(s[i]),'s')
        if(isNaN(s[1])) return num = 0
        if(isNaN(s[i])) break
        if(!isNaN(s[i])){
            num+=s[i]
        }
    }
    return flag+num
};
console.log('myAtoi',myAtoi('  -4193 with words'))

/* 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
*/
//  var threeSum = function(nums) {
//     if(nums.length<3) return []
//     nums = nums.sort((a,b)=>a-b)
//     let l2=1,r=nums.length-1,arr=[]
//     for(let l1=0;l2<nums.length;){
//         while(l2<r){
//             if(nums[l1]+nums[l2]+nums[r]>0){
//                 console.log(nums[l1],nums[l2],nums[r],'>>')
//                 r--
//             }else if(nums[l1]+nums[l2]+nums[r]==0&&!isRepeat(arr,[nums[l1],nums[l2],nums[r]])){
//                 console.log(nums[l1],nums[l2],nums[r],'==')
//                 arr.push([nums[l1],nums[l2],nums[r]])
//                 l2++
//             }else{
//                 console.log(nums[l1],nums[l2],nums[r],'<<')
//                 l2++
//             }
//         }
//         l1++
//         l2=l1+1
//         r=nums.length-1
//     }
//     function isRepeat(arr,target){
//         for(let i=0;i<arr.length;i++){
//             if(arr[i].toString()==target.toString())
//             return true
//         }
//         return false
//     }
//     return arr
// };
var threeSum = function(nums) {
    const len = nums.length;
    if(len < 3) return [];
    nums.sort((a, b) => a - b);
    const res = [];
    for(let i = 0; i < len - 2; i++) {
        if(nums[i] > 0) break;
        // a去重
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1, r = len - 1;
        while(l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if(sum < 0) { l++; continue };
            if(sum > 0) { r--; continue };
            res.push([nums[i], nums[l], nums[r]])
            // b c 去重 
            while(l < r && nums[l] === nums[++l]);
            while(l < r && nums[r] === nums[--r]);
        }
    }
    return res;
};
console.log('threeSum',threeSum([-1,0,1,2,-1,-4]))
