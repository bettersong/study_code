// 翻转字符串

// fun1
/* 
思路：先利用字符串split()方法将字符串切割成数组，再对数组进行翻转，最后在利用数组join()方法转为字符串
*/
function strReverse(str){
    return str.split('').reverse().join('')
}
console.log(strReverse('hello'))  // 'olleh'

// fun2
/* 
思路：跟方法类似，只不过这里是用的es6的扩展运算符将字符串转为数组再操作
*/
function strReverse2(str){
    return ([...str].reverse().join(''))
}
console.log(strReverse2('hello'))   // 'olleh'

// 数组反转
function arrReverse(arr){
    for(let i=0;i<arr.length;i++){
        var helpItem = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = helpItem
        console.log(arr[arr.length - 1 - i])
        //[arr[i],arr[arr.length-1-i]] = [arr[arr.length-1-i],arr[i]]
    }
// console.log(arr)
}
arrReverse([1, 2, 3, 4, 5, 6, 7])
console.log(arrReverse([1,2,3,4,5,6,7]))