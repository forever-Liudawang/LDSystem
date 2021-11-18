import {Button,NavBar,Icon,Search,Image,Toast,Tag} from "vant"
import { App } from 'vue';

export default (app:App<Element>)=>{
    app.use(Image)
    app.use(Button)
    app.use(Icon)
    app.use(Search)
    app.use(Toast)
    app.use(Tag)
}