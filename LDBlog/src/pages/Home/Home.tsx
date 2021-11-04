import React,{memo} from 'react'
import "./home.scss"
import Main from "../../components/Main/Main"
function Home(props:any) {
    return (
        <div className="home">
            <div className="bgImg">
            </div>
            <Main/>
        </div>
    )
}
export default memo(Home)
