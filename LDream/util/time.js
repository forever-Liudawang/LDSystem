const dateDistance = (date)=>{
	const targetTime = new Date(date);
	const now = new Date();
	const distance = Math.floor((now - targetTime)/1000)
	const d = Math.floor(distance/(24*60*60));
	let hours,minutes,seconds;
	if(d<1){
		hours = Math.floor(distance%(24*60*60)/3600);
		if(hours<1){
			minutes = Math.floor(distance%(60*60)/60);
			seconds = d%60
			return [minutes,"分钟"]
		}else{
			return [hours,"小时"]
		}
	}else{
		return [d,"天"]
	}
}

const formatPlayTime = interval => {
  interval = interval | 0;
  const minute = (interval / 60) | 0;
  const second = (interval % 60).toString().padStart(2, "0");
  return `${minute}:${second}`;
};
export {
	dateDistance,
	formatPlayTime
}