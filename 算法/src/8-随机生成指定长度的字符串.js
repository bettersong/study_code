
// 随机生成一个指定长度的字符串

/* 
思路：循环生成index,到元数据中取出对应的值push到新数组的，最后返回将数组转为字符串
*/
function createStr(num){
    var strData = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var str = []
    for(var i=0;i<num;i++){
        var index = Math.round(Math.random() * strData.length)
        str.push(strData[index])
    }
    return str.join('')
}
console.log(createStr(3))   // j49   随机产生