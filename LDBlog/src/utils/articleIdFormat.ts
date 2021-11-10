export default function formatArticleName(articleCate:string | number=""){
    switch(articleCate.toString()){
        case "1":
            return "FrontEnd";
        case "2":
            return "BackEnd";
        case "3":
            return "Interesting Things";
        default:
            return "未分类"
    }
} 