var y = 0,r=true;
 var time_id=setInterval(donghua, 2000);
function but(num){
	clearInterval(time_id);
	y=-(num*208);
	donghua();
	time_id=setInterval(donghua,2000);
}
function donghua() {
	var bhul = document.getElementById("banner_min");
	if (r) {
		y -= 208;
		if (y < -(bhul.getElementsByTagName("li").length * 208)+416) {
			r=false;
		}
	}else{
		y+=208;
		if(y>=0){
			r=true;
		}
	}
	bhul.style.transform = "translateY(" + y + "px)";
}