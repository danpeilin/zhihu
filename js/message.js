mui.init({
	gestureConig:{
		tap:true,
		doubletap:true,
		longtap:true,
		swipe:true,
		drag:true,
		hold:false,
		release:false
	}
});

window.onload = function(){
	var menuLeft = document.getElementById("my-menu-left");
	var menuRight = document.getElementById("my-menu-right");
	var menuBoderLeft = document.getElementById("my-menu-border-left");
	var menuBoderRight = document.getElementById("my-menu-border-right");
	var dongtai = document.getElementsByClassName("msg-dongtai-body")[0];
	var xiaoxi = document.getElementsByClassName("msg-xiaoxi-body")[0];
	var body = document.getElementsByClassName("mui-content")[0];
	
	menuLeft.addEventListener('tap',dong_tai_event);
	menuRight.addEventListener('tap',xiao_xi_event);
	body.addEventListener('swiperight',dong_tai_event);
	body.addEventListener('swipeleft',xiao_xi_event);
	
	
	function dong_tai_event(){
		menuBoderLeft.style.borderBottom = "2px solid black";
		menuBoderRight.style.borderBottom = "none";
		
		dongtai.style.display = "inline";
		xiaoxi.style.display = "none";
		
	}
	
	function xiao_xi_event(){
		menuBoderRight.style.borderBottom = "2px solid black";
		menuBoderLeft.style.borderBottom = "none";
		
		dongtai.style.display = "none";
		xiaoxi.style.display = "inline";
	}
	
	 // scroll左右滚动
	    body.scroll({
	        // deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	        scrollY: false, //是否竖向滚动
	        scrollX: true, //是否横向滚动
	        startX: 0, //初始化时滚动至x
	        startY: 0, //初始化时滚动至y
	        // indicators: true, //是否显示滚动条
	        deceleration: 8.1008, //阻尼系数,系数越小滑动越灵敏
	        bounce: true //是否启用回弹
	    });
}