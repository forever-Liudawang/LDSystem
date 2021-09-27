export default function confirm(resp,success,error,showToast){
	if(resp && resp.data && resp.data.success){
		success && success(resp.data.data)
	}else{
		if(resp.data.message){
			error?error():uni.showToast({
				title:resp.data.message,
				icon:"error"
			})
		}
	}
}
