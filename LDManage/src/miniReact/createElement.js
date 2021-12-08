export default function createElement(type,props,...children) {
    console.log(`type,props`, type,props)
    return {
        type,
        props:{
            ...props,
            children
        }
    }
}