// 请使用最基本的遍历来实现判断字符串 a 是否被包含在字符串 b 中，并返回第一次出现的位置（找不到返回 -1）。

function findStr(str1,str2){
    /* 
    这里设定str1是较小的那个字符串，str2是较大的那个
    */
   let [str1Arr,str2Arr]= [[...str1],[...str2]]   //将两个字符串转维数组
   let str1First = str1Arr[0]   //较小字符串的第一个字符
   let str1Length = str1Arr.length    //较小字符串的长度
   let str1FirstIndex = [] ////较小字符串的第一个字符在较大字符串中第一次出现的位置
    // 遍历找出第一个字符出现的所有位置存为数组
    str2Arr.forEach((item,index)=>{
        if(item === str1First){
            str1FirstIndex.push(index)
        }
    })
    // 在对这个数组进行遍历
    for(let i = 0; i < str1FirstIndex.length;i++){
        // console.log(str2Arr.slice(str1FirstIndex[i], str1FirstIndex[i] + str1Length))
        /* 
        这里需要注意两个数组不能直接比较，引用类型的数据比的实际是他们的指针，需要把数组再转为字符串去比较
        */
        if (str2Arr.slice(str1FirstIndex[i], str1FirstIndex[i] + str1Length).join('') == str1Arr.join('')) {
            return str1FirstIndex[i]
        }else{
            return -1
        }
    }
}

console.log(findStr('cd','abcdefga'))   //  2
console.log(findStr('acf','ashahgbvj'))    //-1









// function isContain(a, b) {
//     for (let i in b) {
//         if (a[0] === b[i]) {
//             let tmp = true;
//             for (let j in a) {
//                 if (a[j] !== b[~~i + ~~j]) {
//                     tmp = false;
//                 }
//             }
//             if (tmp) {
//                 return i;
//             }
//         }
//     }
//     return -1;
// }
// console.log(isContain('bc', 'abcdefg'))
