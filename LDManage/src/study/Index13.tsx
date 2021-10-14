import React,{useMemo,useCallback,Component,useState,memo} from 'react'

//渲染优化
function Child(props:any) {
    const {changeNum,num}= props
    console.log("rendering......");
    return (
        <div>
            num:{num}
            <button onClick={changeNum}>changeNum</button>
        </div>
    )
}
const ChildMemo = memo(Child)
export default function Index13() {
    const [num, setNum] = useState(12)
    const [parentNum, setParentNum] = useState(5)
    const changeNum = useCallback(()=>{
        setNum(num+1)
    },[num])
    console.log('ChildMemo :>> ', ChildMemo);
    return (
        <div>
            <ChildMemo changeNum={changeNum} num={num}/>
            {/* {ChildMemo} */}
            parentNum:{parentNum}
            <button onClick={()=>setParentNum(parentNum+1)}>changeParenNum</button>
        </div>
    )
}


