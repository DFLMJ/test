$(".show-ul-left-1").click(function(){
	$("show-ul-left-1 > li").stop(true)//停止掉前面的动画队伍效果
	$(this).children("li").animate({height:"20px"},500).parent()//获取当前点击元素的子元素li并添加自定义动画并返回父级元素
	.siblings().children("li").animate({height:"0px"},500)//获取兄弟元素下面的li元素并添加自定义动画
}
)
