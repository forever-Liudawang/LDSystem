function _createDom (fiber) {
    return document.createElement(fiber.type || "div")
}
function performUnitOfWork(fiber) {
    if(!fiber.dom){
        fiber.dom = _createDom(fiber)
    }
    if(fiber.return){
        fiber.return.dom.appendChild(fiber.dom)
    }
    /* -------------------构建fiber-------------------- */
    const childs = fiber.children
    //保存上一个fiber元素
    let prevSibling = null;
    if(childs && childs.length){
        for(let i=0;i<childs.length;i++){
            const ele = childs[i]
            const newFiber = {
                type: ele.type,
                props: ele.props,
                return: fiber,
                dom: null
            }
            //父级fiber的child指针指向第一个子元素fiber
            if(i === 0){
                fiber.children = newFiber
            }else{
                prevSibling.sibling = newFiber
            }
            prevSibling = newFiber
        }
    }
    if(fiber.children){
        return fiber.children
    }
    
}