/* 
    封装一个方法用来将数组扁平化
*/
let arr = [1,2,[3,4],[5,6,[7,8]]]
// es6现有的方法flat可以将数组拉平，默认只会拉平一层

// 下面自己封装方法,无论数组有多少层全都扁平化为一层
Array.prototype.myFlat = (arr) => {
    let stack = [...arr]   //展开数组另存一份
    const newArr = []     //定义一个新数组用来存放拉平的数组元素
    while(stack.length){
        // 取出一个元素
        const next = stack.pop()
        if(Array.isArray(next)){
            // 如果当前取出的元素是数组的话将它展开并push回stack中
            stack.push(...next)
        }else{
            // 如果不是数组就插入到新数组中
            newArr.push(next)
        }
    }
    // 因为是从后面开始取得，所以需要将数组反转一下
    return newArr.reverse()

}
console.log(Array.prototype.myFlat(arr))