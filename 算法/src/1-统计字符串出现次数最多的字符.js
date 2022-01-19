// js 统计一个字符串出现频率最高的字符以及次数
/* 思路：
    先将字符串转为数组，定义一个辅助对象，然后遍历数组将每一项都作为辅助对象的属性，对应的属性值为该字符出现的次数，在每次遍历的时候判断该属性值是否有值，没有值说明是第一次出现，给他赋值1，有值说明之前已经出现过了，给他加1，并且每次遍历的时候都与maxCount作比较，将较大的值赋给maxCount,并将对应的值赋给maxValue,这样遍历完之后maxValue就是出现次数最多的那个值，maxCount也就是那个最多的次数
*/
function strMaxCount(str){
    let strArr = [...str],    //展开转为数组
    target = {},
    maxValue = ''    //出现次数最多的值
    maxCount = 0     //次数
    // console.log(strArr)
    strArr.forEach(item => {
        target[item] = target[item] == undefined ? 1 : target[item] + 1
        if(target[item] > maxCount){
            maxCount = target[item]
            maxValue = item
        }
    })
    return {maxValue,maxCount}
}

let str = 'askbjvbsajdkjdsnlvn'
console.log(strMaxCount(str))