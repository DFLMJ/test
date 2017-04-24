//通过div的id获取li标签集合
var banner = document.getElementsByClassName("banquan_img");
var botton = document.getElementsByClassName("div-yidong")[0].getElementsByTagName("li");
var br_index = 0,
	bn_index = 1;
imgmove();
var time_1 = setInterval(imgmove, 2000);
//鼠标点击活动按钮跳转到相应的图片
function b_img(num) {
	br_index = num;
	bn_index = (num + 1);
	imgmove();
	clearInterval(time_1);
	time_1 = setInterval(imgmove, 2000);
}
//鼠标点击左右键变动
/*索引
 * 0 1	>	-1 0	>	3 4
 * 3 4	>	1	2	>	1 2
 */
function but_img(but) {
	if (but == 1) {
		br_index-=2;
		bn_index-=2;
		if (bn_index == 0) {
			bn_index = botton.length - 2;
		}
		if (br_index == -1) {
			br_index = banner.length-1;
		}
		if(br_index==-2&&bn_index==-1){
			br_index=2;
			bn_index=3;
		}
	}
	clearInterval(time_1);
	imgmove();
	time_1 = setInterval(imgmove, 2000);
}
//图片变动样式
function imgmove() {
	//通过for循环来遍历li标签
	for (var i = 0; i < banner.length; i++) {
		banner[i].style.opacity = "0";
	}
	for (var i = 1; i < botton.length - 1; i++) {
		botton[i].style.backgroundColor = "black";
	}
	banner[br_index].style.opacity = "1";
	botton[bn_index].style.backgroundColor = "red";
	br_index++;
	bn_index++;
	if (bn_index == botton.length - 1) {
		bn_index = 1;
	}
	if (br_index == banner.length) {
		br_index = 0;
	}
}