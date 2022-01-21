import path from 'path';
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             '@': resolve('src/*'),
    //             '@views': resolve('@/views/*'),
    //             '@utils': resolve('@/utils/*'),
    //             '@apis': resolve('@/http/*'),
    //             '@assets': resolve('@/assets/*')
    //         }
    //     }
    // },
    chainWebpack: config => { 
        config.resolve.alias.set('@',resolve('src'))
        config.resolve.alias.set('@apis',resolve('src/http'))
    }
}