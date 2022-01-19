// 请写出所有你能想到的数组去重的方法

//fun1 双重for循环
/* 
思路：两个数组进行对比，去掉相同的
*/
function unique1(arr){
    for(let i=0; i<arr.length;i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i] == arr[j]){
                arr.splice(j,1)
                j--   //这里不能省，去掉一个数组元素后，后面的元素会往前移一位，如果不减1，将会漏掉一些数据进行比较
            }
        }
    }
    return arr
}
console.log(unique1([1,2,3,4,1,5,6,2]))   //[1,2,3,4,5,6]

// fun2 利用数组indexOf()方法
/* 
思路：定义一个新数组用来存放满足要求的数据，遍历原始数组，将数组元素push进新数组，但在push之前先使用indexOf()方法判断该元素在新数组中是否存在，存在就不push进去
*/
function unique2(arr){
    let newArr = []
    for(let i=0;i<arr.length;i++){
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(unique2([1, 2, 2, 4, 1, 5, 6, 2])) //[1,2,4,5,6]

// fun3  过滤filter()
/* 
思路：过滤返回数组元素index与indexOf相等的元素，因为indexOf返回的是该元素在数组中第一次出现的位置，即使右面还有该元素也不会返回，这就起到了去重的效果了
*/
function unique3(arr){
    let newArr = arr.filter((item,index,arr)=>{
        return index === arr.indexOf(item)
    })
    return newArr
}
console.log(unique3([1, 2, 2, 4, 1, 5, 6, 2])) //[1,2,4,5,6]

// fun4   数组forEach方法
/* 
思路：同方法二
*/
function unique4(arr){
    let newArr = []
    arr.forEach(item => {
        if(newArr.indexOf(item) === -1){
            newArr.push(item)
        }
    })
    return newArr
}
console.log(unique4([1, 2, 2, 4, 1, 5, 6, 2])) //[1,2,4,5,6]

// fun5   利用Set过滤
/* 
思路：利用Set来去重是最简单的一种方法，因为如果给Set传递一个可迭代对象，它会将所有元素不重复的添加到新的Set中,然后再用扩展运算符展开成数组
*/
function unique5(arr){
    return [...new Set(arr)]
}
console.log(unique5([1, 2, 2, 4, 1, 5, 6, 2])) //[1,2,4,5,6]

// fun6   利用对象特征
/* 
思路：这里主要利用对象属性重名会覆盖的特点，将数组元素设为对象属性，再利用对象构造函数的keys方法将对象属性转为数组
*/
function unique6(arr){
    var obj = {}
    arr.forEach((item,index) => {
        obj[item] = item
    })
    return Object.values(obj)
}
console.log(unique6([1, 2, 2, 4, 1, 5, 6, 2])) //[1,2,4,5,6]
