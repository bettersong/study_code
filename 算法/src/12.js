var findRepeatNumber = function(nums) {
    let newArr = [],
        res = []
    for(let i=0;i<nums.length;i++) {
        if(newArr.indexOf(nums[i]) == -1) {
            newArr.push(nums[i])
        }else {
            res.push(nums[i])
        }
    }
    console.log(res.join('或'))
    return res.join('或')
};

findRepeatNumber([2, 3, 1, 0, 2,5, 5, 3])