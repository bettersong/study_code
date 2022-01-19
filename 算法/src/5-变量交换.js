// 不借助临时变量，将两个变量值进行交换

// fun1
/* 
思路：利用es6的解构赋值
*/
function exchange1([a,b]){
    [b,a] = [a,b]
    return [a,b]
}
console.log(exchange1([1,2]))     //[2,1]

// fun2
/* 
思路：利用加减运算进行交换
*/
function exchange2([a,b]){
    b = b - a
    a = a + b
    b = a - b
    return [a,b]
}
console.log(exchange2([1, 2])) //[2,1]
