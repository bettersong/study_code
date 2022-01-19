// 将类似str = get-element-by-id 转为getElementById这种驼峰方式

// 方法一
function strChange(str){
    // 遍历寻找-的位置存为数组
    let arr = [...str]  //将字符串转为数组
    arr.forEach((item, index) => {
        if(item === '-'){
            arr.splice(index, 1, arr[index + 1].toUpperCase())
            arr.splice(index + 1, 1)
        }
    })
    return arr.join('')
}

console.log(strChange('get-element-by-id')) //getElementById

// 方法2
function strChange2(str){
    // 切割字符串
    var arr = str.split('-')
    //在遍历这个数组将每个单词首字母转换成大写，除第一个
    for(var i=1;i<arr.length;i++){
        console.log(arr[i][0])
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1,arr[i].length-1)
    }
    return arr.join('')

}
console.log(strChange2('get-element-by-id')) //getElementById
