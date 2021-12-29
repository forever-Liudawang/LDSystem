## react api
1. `React.Children.toArray`
```javascript
React.Children.toArray(children)
```
2. ` React.cloneElement `
``` javascript
React.cloneElement(reactElement,{style:{color:'red'}},...newChildren)
```
3. `React.Children.forEach`
``` javascript
// React.Children.forEach 本身也可以把 children 扁平化了
React.Children.forEach(flatChildren,item=>{
   if(React.isValidElement(item)){
       newChildren.push(item)
   }
})
```
## jsx 转换规则

| jsx 元素类型      | react.createElement 转换后                        | type 属性                  |
| ----------------- | ------------------------------------------------- | -------------------------- |
| elment 元素类型   | react element 类型                                | 标签字符串，例如 div       |
| fragment 类型     | react element 类型                                | symbol react.fragment 类型 |
| 文本类型          | 直接字符串                                        | 无                         |
| 数组类型          | 返回数组结构，里面元素被 react.createElement 转换 | 无                         |
| 组件类型          | react element 类型                                | 组件类或者组件函数本身     |
| 三元运算 / 表达式 | 先执行三元运算，然后按照上述规则处理              | 看三元运算返回结果         |
| 函数执行          | 先执行函数，然后按照上述规则处理                  | 看函数执行返回结果         |


## 不同的react element对应不同的filber 类型
``` javascript 
export const FunctionComponent = 0;       // 函数组件
export const ClassComponent = 1;          // 类组件
export const IndeterminateComponent = 2;  // 初始化的时候不知道是函数组件还是类组件 
export const HostRoot = 3;                // Root Fiber 可以理解为根元素 ， 通过reactDom.render()产生的根元素
export const HostPortal = 4;              // 对应  ReactDOM.createPortal 产生的 Portal 
export const HostComponent = 5;           // dom 元素 比如 <div>
export const HostText = 6;                // 文本节点
export const Fragment = 7;                // 对应 <React.Fragment> 
export const Mode = 8;                    // 对应 <React.StrictMode>   
export const ContextConsumer = 9;         // 对应 <Context.Consumer>
export const ContextProvider = 10;        // 对应 <Context.Provider>
export const ForwardRef = 11;             // 对应 React.ForwardRef
export const Profiler = 12;               // 对应 <Profiler/ >
export const SuspenseComponent = 13;      // 对应 <Suspense>
export const MemoComponent = 14;          // 对应 React.memo 返回的组件
```