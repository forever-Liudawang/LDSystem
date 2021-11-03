'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
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
  

  //user
  router.post('/user/login', controller.user.login);
  router.post('/user/logout', controller.user.logout);
  
};
