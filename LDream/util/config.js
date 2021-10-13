const forumCate = [
					{id:1,cateId:1,value:"校园",label:"校园"},
					{id:2,cateId:2,value:"职场",label:"职场"},
					{id:3,cateId:3,value:"篮球",label:"篮球"},
					{id:4,cateId:4,value:"情感",label:"情感"},
					{id:5,cateId:5,value:"生活",label:"生活"},
					]
const cateList = [
					{value:"1",label:"校园"},
					{value:"2",label:"职场"},
					{value:"3",label:"篮球"},
					{value:"4",label:"情感"},
					{value:"5",label:"生活"},
				]
const getSongUrl = (id)=>{
	return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
const getName = (list = []) => {
    let str = "";
    list.map((item, index) => {
      str += index === 0 ? item.name : "/" + item.name;
      return item;
    });
    return str;
};
export {
	forumCate,
	cateList,
	getSongUrl,
	getName
}