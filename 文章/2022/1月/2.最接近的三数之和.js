/*给你一个长度为 n 的整数数组 nums 和 一个目标值 target。
请你从 nums 中选出三个整数，使它们的和与 target 最接近。
返回这三个数的和。
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
假定每组输入只存在恰好一个解。
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b)=>a-b)
    let j,m,res=null
    for(let i=0;i<nums.length;i++){
        j = i+1,m=nums.length-1
        let sto = target - nums[i]
        while (j<m) {
            clac(i,j,m)
            if(nums[j]+nums[m]>sto){
                m--
            }else{
                j++
            }
        }
    }
    function clac(i,j,m){
        res = res==null || Math.abs(nums[i]+nums[j]+nums[m]-target)<Math.abs(res-target)  ?
        nums[i]+nums[j]+nums[m] :res
    }
    return res
};

console.log('threeSumClosest',threeSumClosest([0,2,1,-3],1))