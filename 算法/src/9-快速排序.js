/* 
快速排序：
思路：参考某个元素值，将小于它的值，放到左数组，大于它的元素放到右数组中，
然后递归进行上一次左右数组的操作，返回合并的数组就是已经排好序的数组
*/
function quickSort(arr) {
    // 如果数组长度小于等于1，直接返回该数组
    if(arr.length <= 1){
        return arr
    }
    let referValue = arr[0] //参考元素
    let leftArr = [],rightArr = [] //定义左数组和右数组
    // 开始遍历数组
    for(let i=1;i<arr.length; i++){
        if(arr[i] < referValue){
            // 小于参考元素的放入左数组
            leftArr.push(arr[i])
        }else{
            // 大于参考元素的放入右数组
            rightArr.push(arr[i])
        }
    }
    // 递归执行
    return quickSort(leftArr).concat([referValue],quickSort(rightArr))
}
console.log(quickSort([1, 5, 3, 6, 4, 8, 9, 4])) //[ 1, 3, 4, 4, 5, 6, 8, 9 ]