

export default class Watcher{
    constructor(vm,expr,cb){
        this.vm = vm
        this.expr = expr
        this.cb = cb
    }

    get(){}
    // 当依赖发生变化时，触发更新
    update() {

    }
}