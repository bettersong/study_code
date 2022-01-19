// 冒泡排序,从小到大

/* 
思想：冒泡排序的思想就是两个两个进行比较，如果第一个数小于第二个数就不交换位置，否则交换位置，
*/
function bubbleSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}
console.log(bubbleSort([1, 3, 4, 9, 6, 8, 5, 2])) //[ 1, 2, 3, 4, 5, 6, 8, 9 ]