/*实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列
（即，组合出下一个更大的整数）。
如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
必须 原地 修改，只允许使用额外常数空间。
输入：nums = [1,2,3]
输出：[1,3,2]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 const nextPermutation = nums => {
    const len = nums.length;
    let i = len - 2;
    // 找到第一个当前项比后一项小的位置i
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    // i>=0，说明此时不是最大的排列
    if (i >= 0) {
        let j = len - 1;
        // 找到最小的比nums[i]大的数对应的j
        while (j >= 0 && nums[i] >= nums[j]) j--;
        // 交换位置
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    // i后面的数升序排序
    let [left, right] = [i + 1, len - 1];
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};


console.log('nextPermutation',nextPermutation([1,2,3]))
