// 求数组中的最大差值

// fun1  
/* 
思路：遍历数组，记录数组中的最大值与最小值，再相减
*/

function maxDifference(arr){
    let maxVal= arr[0],minVal = arr[0]
    arr.forEach(item => {
        if(item>maxVal){
            maxVal = item
        }else if(item < minVal){
            minVal = item
        }
    })
    return {maxVal,minVal,maxDif: maxVal-minVal}
}

console.log(maxDifference([1, 2, 3, 6, 8, 7, 3])) //{ maxVal: 8, minVal: 1, maxDif: 7 }

// fun2
/* 
思路：利用es6扩展运算符将数组展开，在利用Math对象的max与min方法求出最大值与最小值
*/
function maxDifference2(arr){
    let maxVal = Math.max(...arr)
    let minVal = Math.min(...arr)
    let maxDif = maxVal - minVal
    return {maxVal, minVal, maxDif}
}
console.log(maxDifference2([1, 2, 3, 6, 8, 7, 3])) //{ maxVal: 8, minVal: 1, maxDif: 7 }
