const BaseURL = "http://192.168.1.90:7001"
const request = (options)=>{
	return new Promise((resolve,reject)=>{
			uni.request({
				url:BaseURL + options.url,
				data:options.data || {},
				method:options.method || "post",
				success:(res)=>{
					if(!res.data.success){
						uni.showToast({
							title:res.data.error || "请求错误",
							duration:2000,
							icon:"none"
						})
						uni.hideLoading()
					}
					resolve(res);
				},
				fail:(err)=>{
					console.log(err)
					if(err == "request:fail timeout"){
						uni.hideLoading()
						uni.showToast({
							title:"请求超时",
							duration:2000
						})
					}else{
						uni.hideLoading()
						uni.showToast({
							title:err,
							duration:2000,
							icon:"none"
						})
					}
					reject(err)
				}
			})
	})
}
export {BaseURL}
export default request