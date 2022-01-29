module.exports = app =>{
    //配置全局中间件
    app.config.coreMiddleware.unshift('handError');
    
}