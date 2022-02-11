
// 先定义三个常量表示状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class LPromise {
    status = PENDING
    value = null 
    reason = null
    onFulfilledCallbacks = []
    onRejectedCallbacks = []
    constructor(exector){
        try{
            exector(this.resolve,this.reject)
        }catch(err){
            this.reject(err)
        }
    }
    resolve = (value)=>{
        if(this.status === PENDING){
            this.status = FULFILLED
            this.value = value
            // this.onFulfilledCallback && this.onFulfilledCallback(value)
            while(this.onFulfilledCallbacks.length){
                this.onFulfilledCallbacks.shift()(value)
            }
        }
    }
    static resolve = (arg)=>{
        if(arg instanceof LPromise){
            return arg
        }
        return new LPromise((resolve,reject)=>{
            resolve(arg)
        })
    }
    static reject = (err)=>{
        return new LPromise((resolve,reject)=>{
            reject(err)
        })
    }
    reject = (err)=>{
        if(this.status === PENDING){
            this.status = REJECTED
            this.reason = err 
            // this.onRejectedCallback && this.onRejectedCallback(err)
            while(this.onRejectedCallbacks.length){
                this.onRejectedCallbacks.shift()(err)
            }
        }
    }
    then(onFulfilled,onRejected){
        if(this.status === FULFILLED){
            onFulfilled(this.value)
        }else if(this.status === REJECTED){
            onRejected(this.reason)
        }else if(this.status === PENDING){
            this.onFulfilledCallback = onFulfilled
            this.onRejectedCallback = onRejected
            this.onFulfilledCallbacks.push(onFulfilled)
            this.onRejectedCallbacks.push(onRejected)
        }
        const newPromise = new LPromise((resolve,reject)=>{
            if(this.status === FULFILLED){
                const x = onFulfilled(this.value,resolve,reject)
                resolvePromise(x,resolve,reject)
            }else if (this.status === REJECTED) {
                onRejected(this.reason);
              } else if (this.status === PENDING) {
                this.onFulfilledCallbacks.push(onFulfilled);
                this.onRejectedCallbacks.push(onRejected);
              }
        })
        return newPromise
    }
    static all = (promises)=>{
        return new LPromise((resolve,reject)=>{
            let ret = []
            let len = promises.length;
            if(len<=0){
                return resolve([])
            }
            for(let i=0;i<len;i++){
                LPromise.resolve(promises[i]).then(res=>{
                    ret[i] = res;
                })
            }
            resolve(ret)
        })
    }
}
function resolvePromise(x,resolve,reject) {
    if(x instanceof LPromise){
        x.then(resolve,reject)
    }else{
        resolve(x)
    }
}
const promise = new LPromise((resolve,reject)=>{
        resolve(123)
})
promise.then(res=>{
    console.log('res', res)
    return 100
}).then(res1=>{
    console.log('res1', res1)
})
LPromise.resolve(12300).then(ret=>console.log('ret', ret))
Promise.all()