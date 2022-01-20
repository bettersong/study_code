// 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// [1,2,3]
// [3,1,2]
// [2,3,1]
// [1,2,3]
 var rotate = function(nums, k) {
    let m = k % nums.length
    let newArr = Object.assign([],nums) 
    if(m==0) return nums
    for(let i=0;i<newArr.length;i++){
         nums[(i+k)%newArr.length]=newArr[i] 
    }
    return nums
};
console.log(rotate([1,2,3,4,5,6,7],3))

// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 输入: [0,1,0,3,12]
   输出: [1,3,12,0,0]
   //思路：设置一个index，表示非0数的个数，循环遍历数组，
    // 如果不是0，将非0值移动到第index位置,然后index + 1
    //遍历结束之后，index值表示为非0的个数，再次遍历，从index位置后的位置此时都应该为0
 */
 var moveZeroes = function(nums) {
     let index = 0
     for(let i = 0;i<nums.length;i++){
         if(nums[i]!==0){
            nums[index] = nums[i]
            index++
         }
     }
     while(index<nums.length){
         nums[index] = 0
         index++
     }
     return nums
};

console.log(moveZeroes([0,0,1]))

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

console.log('twoSum',twoSum([2,7,11,15],9))

// 反转字符串
// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 输入：s = ["h","e","l","l","o"]
输出：["o","l","l","e","h"]
 */
 var reverseString = function(s) {
    let l = 0,r = s.length-1
    while(l<r){
        [s[l],s[r]] = [s[r],s[l]]
        l++
        r--
    }
    return s
};
console.log('reverseString',reverseString(["h","e","l",'3',"l","o"]))

// 反转字符串中的单词 III
/*给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例：
输入："Let's take LeetCode contest"
输出："s'teL ekat edoCteeL tsetnoc"
*/
/**
 * @param {string} s
 * @return {string}
 */
/*
思路：将字符串转为数组，再遍历数组，将数组每一项利用逆向双指针进行反转
*/
 var reverseWords = function(s) {
    const arr = s.split(" ")
    for(let i=0;i<arr.length;i++){
        let target = arr[i].split("")
        let l=0,r=target.length-1
        while(l<r){
            [target[l],target[r]] = [target[r],target[l]]
            l++
            r--
        }
        arr[i] = target.join("")
    }
    return arr.join(' ')
};
console.log('reverseWords',reverseWords("Let's take LeetCode contest"))

// 链表的中间结点
// 给定一个头结点为 head 的非空单链表，返回链表的中间结点。

// 如果有两个中间结点，则返回第二个中间结点。
/*
输入：[1,2,3,4,5]
输出：此列表中的结点 3 (序列化形式：[3,4,5])
返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
注意，我们返回了一个 ListNode 类型的对象 ans，这样：
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.
*/

 // 思路1：快慢指针。当有两个中间结点时，slow最终会指向第一个中间结点
 // 1.定义两个指针，一个快指针fast，一个慢指针slow
 // 2.在fast.next != null && fast.next.next != null的前提下，同时让两个指针走，fast每次走两步，slow每次走一步
 // 3.当退出循环时，如果fast.next == null，说明只有一个中间节点，返回slow
 // 4.当推出循环时，如果fast.next != null && fast.next.next == null，说明有两个中间结点，根据题意，返回第二个中间结点，即slow.next
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 

// 思路2：快慢指针。当有两个中间结点时，slow最终会指向第二个中间结点
 // 1.定义两个指针，一个快指针fast，一个慢指针slow
 // 2.在fast != null && fast.next != null的前提下，同时让两个指针走，fast每次走两步，slow每次走一步
 // 3.当退出循环时，slow就指向了中间结点。当有两个中间结点时，slow指向了第二个中间结点
 var middleNode = function(head) {
    let slow = head
    let fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};


/*给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
换句话说，s1 的排列之一是 s2 的 子串 。

示例 1：
输入：s1 = "ab" s2 = "eidbaooo"
输出：true
解释：s2 包含 s1 的排列之一 ("ba").
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    if(s1.length>s2.length) return false
    let slow = 0,fast = s1.length-1
    const str1 = s1.split('').sort().join('')
    while(fast<s2.length){
        if(str1 == s2.slice(slow,fast+1).split("").sort().join("")) return true
        slow++
        fast++
    }
    return false
};
var checkInclusion2 = function(s1, s2) {
    let array1 = new Array(26).fill(0);
    let array2 = new Array(26).fill(0);
    if(s1.length > s2.length) {
        return false;
    }
    for(let i=0; i<s1.length; i++) {
        array1[s1.charCodeAt(i) - 'a'.charCodeAt()]++;
        array2[s2.charCodeAt(i) - 'a'.charCodeAt()]++;
    }
    for(let i=s1.length; i<s2.length; i++) {
        if(array1.join('') === array2.join('')) {
            return true;
        }
        array2[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt()]--;
        array2[s2.charCodeAt(i) - 'a'.charCodeAt()]++;
    }
    return array1.join('') === array2.join('');
};

console.log('checkInclusion',checkInclusion("abc","eidbaooo"))
