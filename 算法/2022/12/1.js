/**
 * @param {string} date
 * @return {number}
 * 一年中的第几天
 */
 var dayOfYear = function(date) {
    const d = new Date(date)
    const y = d.getFullYear()
    const mm = d.getMonth()+1
    const dd = d.getDate()
    let map = []
    if(y%4==0 && y%100!=0 || y%100==0&&y%400==0){
        map = [31,29,31,30,31,30,31,31,30,31,30,31]
    }else {
        map = [31,28,31,30,31,30,31,31,30,31,30,31]
    }
    if(mm==1){
        return dd
    }else{
        let res=0
        if(dd<map[mm-1]){
            for(let i=1;i<mm;i++){
                res+=map[i-1]
            }
            res+=dd
        }else{
             for(let i=1;i<=mm;i++){
                res+=map[i-1]
                console.log(res,'ss')
            }
        }
        return res
    }
};
console.log(dayOfYear("2003-12-27"))

function dayOfYear2(date){
    const d = new Date(date);
    const y = d.getFullYear();
    const newd = new Date(`${y}-01-01`);
    return (d.getTime()-newd.getTime())/24/60/60/1000 + 1
}
console.log(dayOfYear2("2003-01-02"))


// 2.整数反转

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const max = Math.pow(2,31)-1
    const min = -Math.pow(2,31)
    const newx = (Math.abs(x)).toString().split('').reverse().join('')
    if(newx>max||newx<min) return 0
    if(x>=0){
        return Math.abs(newx)
    }else{
        return -(Math.abs(newx))
    }
};
console.log(reverse(1020))