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

  
};
