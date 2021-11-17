import {Button,NavBar,Icon,Search,Image} from "vant"
import { App } from 'vue';

export default (app:App<Element>)=>{
    app.use(Image)
    app.use(Button)
    app.use(Icon)
    app.use(Search)
}