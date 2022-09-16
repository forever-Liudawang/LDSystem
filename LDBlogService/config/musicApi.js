module.exports = {
    getBannerList:{
        // 0: 'pc',
        // 1: 'android',
        // 2: 'iphone',
        // 3: 'ipad',
        url:"https://music.163.com/api/v2/banner/get",
        method:"POST",
        data:{
            clientType:"android"
        }
    },
    getRecommentList:{
        url:"https://music.163.com/weapi/personalized/playlist",
        method:"POST",
    },
    getRecommendMusicList:{
        url:"https://music.163.com/api/v6/playlist/detail",
        method:"POST",
    },
    getHotSingerList:{
        url:"https://music.163.com/weapi/artist/top",
        method:"POST",
    },
    getSingerList:{
        url:"https://music.163.com/api/v1/artist/list",
        method:"post",
    },
    getSingerDetail:{
        url:"https://music.163.com/weapi/v1/artist",
        method:"post",
    }
}