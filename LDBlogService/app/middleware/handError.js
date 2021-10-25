module.exports = (options,app)=>{
    return async (ctx,next)=>{
        try {
            await next()
        } catch (error) {
            ctx.body = {
                success:false,
                error:error.message,
                data:null
            }
        }
    }
}