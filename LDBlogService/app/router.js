'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index);
  router.post('/uploadImg', controller.home.uploadImg);


  //article
  router.post('/article/createArtice', controller.article.createArtice);
  router.get('/article/getArticleById', controller.article.getArticleById);
  router.get('/article/getArticleList', controller.article.getArticleList);
  router.post('/article/updateArticle', controller.article.updateArticle);
  router.post('/article/deleteArticle', controller.article.deleteArticle);
  router.get('/article/getRecommendArticle', controller.article.getRecommendArticle);
  router.get('/article/getMyRecommendArticle', controller.article.getMyRecommendArticle);
  router.get('/article/getCateArticle', controller.article.getCateArticle);
  router.get('/article/getLatestFive', controller.article.getLatestFive);
  router.get('/article/getSearchList', controller.article.getSearchList);
  router.post('/article/switchRecommendArticle', controller.article.switchRecommendArticle);
  router.post('/article/saveDraft', controller.article.saveDraft);
  router.get('/article/getDraft', controller.article.getDraft);


  //user
  router.post('/user/login', controller.user.login);
  router.post('/user/logout', controller.user.logout);

  //articleTags
  router.get('/articleTag/getTags', controller.articleTag.getTags);
  router.post('/articleTag/inertTag', controller.articleTag.inertTag);
  router.post('/articleTag/deleteTag', controller.articleTag.deleteTag);

  //邮箱
  router.post('/email/sendEmail', controller.email.sendEmail);
  router.post('/email/insert', controller.email.insert);
  router.get('/email/getList', controller.email.getList);

  //在线demo服务
  router.post('/onlineDemo/add', controller.onlineDemo.add);
  router.get('/onlineDemo/getList', controller.onlineDemo.getList);
  router.post('/onlineDemo/update', controller.onlineDemo.update);
  router.post('/onlineDemo/delete', controller.onlineDemo.delete);

  router.get('/form/getFormData', controller.dynamicTable.getFormData)
  router.post('/test/add', controller.test.add)
  router.get('/test/getList', controller.test.getList)
  router.get('/test/getMenu', controller.test.getMenu)


  router.post('/user/insert', controller.user.insert);
  router.get('/user/getUser', controller.user.getUser);
  router.get('/user/userNameIsRepeat', controller.user.userNameIsRepeat);
  router.post('/user/login', controller.user.login);
  router.post('/user/updateAvatar', controller.user.updateAvatar);
  router.post('/user/updateUserName', controller.user.updateUserName);
  router.post('/user/updateSign', controller.user.updateSign);
  router.post('/user/updatePsd', controller.user.updatePsd);
  router.get('/user/getUserById', controller.user.getUserById);
  
  router.post('/post/uploadFile', controller.post.uploadFile);
  router.post('/post/uploadImg', controller.post.uploadImg);
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
  router.post("/music/likeMusic",controller.music.likeMusic)
  router.post("/music/isLiked",controller.music.isLiked)
  
  
  router.get("/follow/getFollow",controller.follow.getFollow)
  router.post("/follow/following",controller.follow.following)
  router.post("/follow/isFollowed",controller.follow.isFollowed)
  router.post("/follow/unFollowing",controller.follow.unFollowing)

  router.post("/comment/insert",controller.comment.insert)
  router.get("/comment/getComment",controller.comment.getComment)
  router.get("/comment/getReplayComment",controller.comment.getReplayComment)
};