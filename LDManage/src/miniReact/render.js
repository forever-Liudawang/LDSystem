export default function render(vDom,root) {
    let dom = null;
    console.log(vDom,'vDom')
    if(typeof vDom == "object"){
        dom = document.createElement(vDom.type)
        const {children, ...props } = vDom.props
        for(let key in props){
            dom[key] = props[key]
        }
        if(typeof children == "string"){
            render(children,dom)
        }else if(children && Array.isArray(children)){
            children.forEach(item=>{
                render(item,dom)
            })
        }
    }else{
        dom = document.createTextNode(vDom)
    }
    console.log(dom,'dom')
    root.appendChild(dom)
}