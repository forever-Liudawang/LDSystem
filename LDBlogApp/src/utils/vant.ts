import {Button,NavBar,Icon,Search,Image,Toast,Tag,Loading,Form,Field,CellGroup,Popup,NoticeBar,Dialog,ImagePreview } from "vant"
import { App } from 'vue';

export default (app:App<Element>)=>{
    app.use(Image)
    app.use(Button)
    app.use(Icon)
    app.use(Search)
    app.use(Toast)
    app.use(Tag)
    app.use(Loading)
    app.use(Form)
    app.use(Field)
    app.use(CellGroup)
    app.use(NoticeBar)
    app.use(Dialog)
    app.use(Popup)
    app.use(ImagePreview)
}