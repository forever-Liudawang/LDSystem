export default function formatArticleName(articleCate:string | number=""){
    switch(articleCate.toString()){
        case "1":
            return "前端技术";
        case "2":
            return "后端技术";
        case "3":
            return "生活随笔";
        default:
            return "未分类"
    }
} 