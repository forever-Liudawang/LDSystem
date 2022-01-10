# 监听props的改变
*  类组件 ` getDerivedStateFromProps `
*  函数组件   
    ```javascript 
    React.useEffect(()=>{
        // props 中number 改变，执行这个副作用。
        console.log('props改变：' ，props.number  )
    },[ props.number ])
    ```
# 抽离props
```javascript 
function Son(props){
    console.log(props)
    return <div> hello,world </div>
}

function Father(props){
    const { age,...fatherProps  } = props
    return <Son  { ...fatherProps }  />
}
function Index(){
    const indexProps = {
        name:'alien',
        age:'28',
        mes:'let us learn React !'
    }
    return <Father { ...indexProps }  />
}
```

# 隐式注入props
```javascript
    React.cloneElement(child,{...child.props,onChange:(e: any=>handleChange(e,child.props.name)})
```
