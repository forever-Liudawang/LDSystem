'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/user/insert', controller.user.insert);
  router.get('/user/getUser', controller.user.getUser);
  router.get('/user/userNameIsRepeat', controller.user.userNameIsRepeat);
  router.post('/user/login', controller.user.login);
  router.post('/user/updateAvatar', controller.user.updateAvatar);
  router.post('/user/updateUserName', controller.user.updateUserName);
  router.post('/user/updateSign', controller.user.updateSign);
  
  router.get('/user/getUserById', controller.user.getUserById);
  
  router.post('/post/uploadFile', controller.post.uploadFile);
  router.post('/post/insert', controller.post.insert);
  router.get('/post/getPost', controller.post.getList);
  router.post('/post/light', controller.post.light);
  router.post('/post/unLight', controller.post.unLight);
  router.get('/post/getPostById', controller.post.getPostById);
  router.get('/post/getMyPost', controller.post.getMyPost);
  router.get("/post/getRecommend",controller.post.getRecommend)
  
  router.get("/music/getBannerList",controller.music.getBannerList)
  router.get("/music/getRecommendList",controller.music.getRecommendList)
  router.get("/music/getRecommendMusicList",controller.music.getRecommendMusicList)
  router.get("/music/getHotSinger",controller.music.getHotSinger)
  router.get("/music/getSingerList",controller.music.getSingerList)
  router.get("/music/getSingerDetail",controller.music.getSingerDetail)
  

  router.get("/follow/getFollow",controller.follow.getFollow)
  router.post("/follow/following",controller.follow.following)
  router.post("/follow/isFollowed",controller.follow.isFollowed)
  router.post("/follow/unFollowing",controller.follow.unFollowing)

  router.post("/comment/insert",controller.comment.insert)
  router.get("/comment/getComment",controller.comment.getComment)
  router.get("/comment/getReplayComment",controller.comment.getReplayComment)
};
