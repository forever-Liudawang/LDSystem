import React,{Component, useState} from "react"
//处理大量数据渲染  requestIdleCallback

/* 获取随机颜色 */
function getColor(){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return 'rgba('+ r +','+ g +','+ b +',0.8)';
 }
/* 获取随机位置 */
function getPostion(position: { width: any; height: any; }){
     const { width , height } = position
     return { left: Math.ceil( Math.random() * width ) + 'px',top: Math.ceil(  Math.random() * height ) + 'px'}
}
/* 色块组件 */
function Circle({ position }:any){
    const style = React.useMemo(()=>{ //用useMemo缓存，计算出来的随机位置和色值。
         return {  
            background : getColor(),
            ...getPostion(position),
            width:"5px",
            height:"5px",
            borderRadius:"50%",
         }
    },[])
    return <div style={{position:"absolute",...style}} className="circle" />
}

class Index extends Component {
    state:any={
        dataList:[],                  // 数据源列表
        renderList:[],                // 渲染列表
        position:{ width:0,height:0 }, // 位置信息
        eachRenderNum:500,
        index:0
    }
    box= React.createRef<HTMLDivElement>()
    componentDidMount(){
        const { offsetHeight , offsetWidth } = this.box.current as any;
        const originList = new Array(30000).fill(1)
        this.setState({
            position: { height:offsetHeight, width:offsetWidth },
            dataList:originList,
            renderList:[],
            index:Math.ceil(originList.length/this.state.eachRenderNum)
        },()=>{
            this.renderToList()
        })
    }
    renderToList = ()=>{
        if(this.state.index === 0)return
        requestIdleCallback(()=>{
            const newArr:any []= (new Array(this.state.eachRenderNum)).fill(1)
            this.setState({
                renderList: [...this.state.renderList,...newArr],
                index: this.state.index-1
            },()=>{
                this.renderToList()
            })
        })
    }
    render() {
        const { renderList, position } = this.state
        return <div className="bigData_index" ref={this.box} style={{height:"100vh",width:"100vw"}}>
            {
                renderList.map((item: any,index: any)=><Circle  position={ position } key={index}  /> )
            }
        </div>
    }
}


export default function Index16() {
    const [show, setShow] = useState(false)
    const [ btnShow, setBtnShow ] = useState(true)
    const handleClick=()=>{
        setBtnShow(false)
        setTimeout(()=>{ 
            setShow(true) 
        })
    } 
    return <div>
        <input/>
        { btnShow &&  <button onClick={handleClick} >show</button> } 
        { show && <Index />  }
    </div>
}
