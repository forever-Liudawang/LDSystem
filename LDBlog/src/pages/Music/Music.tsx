import React, { useEffect,useRef} from 'react'
import "./index.scss"
import Mask from "../../components/Mask/Mask"
export default function AboutMe() {
    const iframeRef = useRef<any>()
    useEffect(()=>{
        Mask.show()
        const iframeObj = iframeRef.current
        if (iframeObj.attachEvent){
            iframeObj.attachEvent("onload", function(){
                Mask.hidden()
            });
        } else {
            iframeObj.onload = function(){
                Mask.hidden()
            };
        }
    })
    return (
        <div className="music">
            <iframe ref={iframeRef} src="http://localhost:8080/index" ></iframe>
        </div>
    )
}
