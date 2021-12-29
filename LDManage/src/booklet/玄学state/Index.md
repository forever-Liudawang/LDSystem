# setState 更新流程如下图
![avatar](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d5e25a4ed464547bdd0e7c3a44d0ccc~tplv-k3u1fbpfcp-watermark.awebp)

# setState 执行原理
``` javascript
/* 绑定setState 方法 */
Component.prototype.setState = function (partialState, callback) {
  this.updater.enqueueSetState(this, partialState, callback, "setState");
};
```
`实际执行的是updater中的enqueueSetState 方法`
``` javascript
enqueueSetState(){
     /* 每一次调用`setState`，react 都会创建一个 update 里面保存了 */
     const update = createUpdate(expirationTime, suspenseConfig);
     /* callback 可以理解为 setState 回调函数，第二个参数 */
     callback && (update.callback = callback) 
     /* enqueueUpdate 把当前的update 传入当前fiber，待更新队列中 */
     enqueueUpdate(fiber, update); 
     /* 开始调度更新 */
     scheduleUpdateOnFiber(fiber, expirationTime);
}
```

# 批量更新
* 异步操作里面的异步更新会被打破
```javascript
setTimeout(()=>{
    this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback1', this.state.number)  })
    console.log(this.state.number)
    this.setState({ number:this.state.number + 1 },()=>{    console.log( 'callback2', this.state.number)  })
    console.log(this.state.number)
    this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback3', this.state.number)  })
    console.log(this.state.number)
})
```
`打印 ： callback1 1 , 1, callback2 2 , 2,callback3 3 , 3`
* 异步环境中开启批量更新
  ```javascript
    import ReactDOM from 'react-dom'
    const { unstable_batchedUpdates } = ReactDOM
  ```
# 提升更新优先级 flushSync 
``` javascript
handerClick=()=>{
    setTimeout(()=>{
        this.setState({ number: 1  })
    })
    this.setState({ number: 2  })
    ReactDOM.flushSync(()=>{
        this.setState({ number: 3  })
    })
    this.setState({ number: 4  })
}
```
`打印 3 4 1`  
补充说明 :  
`flushSync 在同步条件下，会合并之前的 setState | useState，可以理解成，如果发现了 flushSync ，就会先执行更新，如果之前有未更新的 setState ｜ useState ，就会一起合并了，所以就解释了如上，2 和 3 被批量更新到 3 ，所以 3 先被打印`    

# useState  和 setState的区别

* 在非purecomponent组件模式下 setState不会浅比较两次state的值，只要调用了setState就会触发更新，而函数组件会比较前后两次的值来确定是否更新

* setState 有专门监听 state 变化的回调函数 callback，可以获取最新state；但是在函数组件中，只能通过 useEffect 来执行 state 变化引起的副作用。
* setState 在底层处理逻辑上主要是和老 state 进行合并处理，而 useState 更倾向于重新赋值。