const path = require('path')

module.exports = {
    // 此网站部署于LDBlogService public目录下
    publicPath: '/static/music',
    // publicPath: '/',
    chainWebpack: (config) => {
        config.resolve.alias
        .set('@assets', path.join(__dirname, './src/assets'))
        .set('@components', path.join(__dirname, './src/components'))
        .set('@plugins', path.join(__dirname, './src/plugins'))
        .set('@views', path.join(__dirname, './src/views'))
        .set('@apis', path.join(__dirname, './src/apis'))
        .set('@utils', path.join(__dirname, './src/utils'))

        config.resolve.extensions
        .add('.js')
        .add('.vue')

        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    },
    lintOnSave: false
}
function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/less/common.less') // 需要全局导入的less
            ]
        })
}
