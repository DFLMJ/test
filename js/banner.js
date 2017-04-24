var oimg=getClass("div-xhuatu")[1].getElementsByTagName("li");//获取banner图片的li标签
var obutton=getClass("div-xhuatu")[2].getElementsByTagName("li");//获取图片按钮的li标签
var index=0;
	for(var i=0;i<obutton.length;i++){//根据点击的图片按钮去切换图片
		obutton[i]=index;//使按钮图片的index与图片index保持一致
		obutton[i].onclick=function(){//当用户点击图片按钮时调用函数
			for(var j=0;j<obutton.length;j++){//消除类class样式
//				obutton[j].className="nono";
					if(j!=index){
                        fadeOut(oimg[j],1000);//调用淡出函数
                  }
			}
			fadeIn(oimg[index],1000);//调用淡入函数
		}
		
	}
        function fadeIn(obj,time){//淡入函数  实现time毫秒后显示，原理是根据透明度来完成的
            var startTime=new Date(); 
            obj.style.opacity=0;//设置下初始值透明度
            obj.style.display="block";
            var timer=setInterval(function(){
                var nowTime=new Date();
                var prop=(nowTime-startTime)/time;
                if(prop>=1){
                    prop=1;//设置最终系数值
                    clearInterval(timer);
                }
                obj.style.opacity=prop;//透明度公式： 初始值+系数*（结束值-初始值）
            },13);//每隔13ms执行一次function函数
        };

		function fadeOut(obj,time){
            var startTime=new Date(); 
            obj.style.opacity=1;//设置下初始值透明度
            obj.style.display="block";
            var timer=setInterval(function(){
                var nowTime=new Date();
                var prop=(nowTime-startTime)/time;
                if(prop>=1){
                    prop=1;//设置最终系数值
                    clearInterval(timer);
                }
                obj.style.opacity=1+prop*(0-1);//透明度公式： 初始值+系数*（结束值-初始值）
            },13);//每隔13ms执行一次function函数
        };
