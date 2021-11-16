import {Button,NavBar,Icon,Search} from "vant"
import { App } from 'vue';

export default (app:App<Element>)=>{
    app.use(Button)
    app.use(Icon)
    app.use(Search)
}