# 类组件定义
## 类组件内部定义:
`组件中调用的 setState 和 forceUpdate 本质上是调用了 updater 对象上的 enqueueSetState 和 enqueueForceUpdate 方法`
``` javascript
(被react类组件继承的父类Component组件)
function Component(props, context, updater) {
  this.props = props; //绑定props
  this.context = context; //绑定context
  this.refs = emptyObject; //绑定ref
  this.updater = updater || ReactNoopUpdateQueue; //上面所属的updater 对象
}
/* 绑定setState 方法 */
Component.prototype.setState = function (partialState, callback) {
  this.updater.enqueueSetState(this, partialState, callback, "setState");
};
/* 绑定forceupdate 方法 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
};
``` 
## 问题:
如果没有在 constructor 的 super 函数中传递 props，那么接下来 constructor 执行上下文中就获取不到 props  
`因为绑定props是在如上父类的 Component 函数中，执行super实则执行的是父类的Component `

# 函数组件内部调用方式
## 函数组件内部定义
``` javascript
function renderWithHooks(
  current, // 当前函数组件对应的 `fiber`， 初始化
  workInProgress, // 当前正在工作的 fiber 对象
  Component, // 我们函数组件
  props, // 函数组件第一个参数 props
  secondArg, // 函数组件其他参数
  nextRenderExpirationTime //下次渲染过期时间
) {
  /* 执行我们的函数组件，得到 return 返回的 React.element对象 */
  let children = Component(props, secondArg);
}
```
## 问题:
函数组件和类组件本质的区别  
` 对于类组件来说，底层只需要实例化一次，实例中保存了组件的 state 等状态。
对于每一次更新只需要调用 render 方法以及对应的生命周期就可以了。
但是在函数组件中，每一次更新都是一次新的函数执行，一次函数组件的更新，里面的变量会重新声明。
`

# 父子组件通信方式
`父组件项子组件传递回调函数属性值，在子组件中调用回调函数
在函数中传递值`
