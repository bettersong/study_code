// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
// 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
// 思路：1.将数组折半，分成左右两个数组。

// 　　　　　2.判断要查找的数和中间位置数值的大小，来判断要查找的数实在哪一半。

// 　　　　　3.之后继续折半查找，直至找到这个数。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
     let low = 0;
     let high =  nums.length-1
    
    while(low<=high){
        const mid = parseInt((low+high)/2)
        if(target==nums[mid]){
            return mid
        }else if(target<nums[mid]){
            high = mid-1
        }else if(target>nums[mid]){
            low = mid+1
        }
    }
    return -1
};
console.log(search([-1,0,3,5,9,12],3))



// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
// 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let low = 0
    let high = nums.length - 1
    while(low<=high){
        const mid = Math.floor((high+low)/2)
        if(target<nums[0]) return 0
        if(target>nums[nums.length - 1]) {
            return nums.length
        }
        if(nums[mid]<target&&nums[mid+1]>target) {
            return mid+1
        }
        if(nums[mid]>target){
            high = mid - 1
        }else if(nums[mid]==target){
            return mid
        }else{
            low = mid + 1
        }
    }
};

console.log(searchInsert([1,3,5,6],2))

// 假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。

function isBadVersion(v){}
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(n==1) return 1
        let mid = Math.floor(n/2)
        let low = 0
        let high = n
        while(true) {
            if(isBadVersion(mid)){
                if(isBadVersion(mid-1)){
                    high = mid-1
                }else{
                    return mid
                }
            }else{
                low = mid + 1
            }
            mid = Math.floor((low+high)/2)
        }
    };
};
