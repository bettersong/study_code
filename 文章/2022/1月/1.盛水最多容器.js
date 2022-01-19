/*给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
输入：[1,8,6,2,5,4,8,3,7]
输出：49 
*/

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let left = 0, right=height.length-1,res=0
    while (left<right) {
        res = (height[left]>height[right]?height[right]:height[left]) * (right-left) > res ?(height[right]>height[left]?height[left]:height[right]) * (right-left):res
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    return res
};

console.log('maxArea',maxArea([1,8,6,2,5,4,8,3,7]))

var removeDuplicates = function(nums) {
    for(let i=1; i<nums.length;){
        console.log(nums.slice(0,i),nums)
        if(nums.slice(0,i).indexOf(nums[i])>-1){
            nums.splice(i,1)
        }else{
            console.log(nums,'s')
            i++
        }
    }

    return nums
};
console.log('removeDuplicates',removeDuplicates([1,1,2]))