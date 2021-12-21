import React,{memo} from 'react'
import "./home.scss"
import Main from "../../components/Main/Main"
import bgImg from "../../assets/bg1.jpeg"
function Home(props:any) {
    return (
        <div className="home">
            <div className="bgImg">
                <img src={bgImg}  alt="" />
            </div>
            <Main/>
        </div>
    )
}
export default memo(Home)
