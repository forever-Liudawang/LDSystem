'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.post('/uploadImg', controller.home.uploadImg);

  router.get('/getPlayerTotal',controller.player.getPlayerTotal)
};
