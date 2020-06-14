/* mui.init({
	gestureConfig:{
		
	}
}); */

window.onload = function(){
	var menuLeft = document.getElementById("my-menu-left");
	var menuRight = document.getElementById("my-menu-right");
	var menuBoderLeft = document.getElementById("my-menu-border-left");
	var menuBoderRight = document.getElementById("my-menu-border-right");
	
	var subPages=['message_updates.html','login.html'];
		var subPageStyle={
			top:'46px',
			bottom:'51px'
		}
		//使用硬件系统，必须用真机运行
		mui.plusReady(function(){
			var self=plus.webview.currentWebview();//获取当前页面窗体
			for(var i=0;i<subPages.length;i++){			
				var sub=plus.webview.create(subPages[i],subPages[i],subPageStyle);//给四个子页面创建窗体
				sub.hide();//将4个子页面隐藏
				self.append(sub);//将创建的子窗体追加到主页面
			}
			plus.webview.show(subPages[0]);
		})
	
	menuLeft.addEventListener('tap',function(){
		menuBoderLeft.style.borderBottom = "2px solid black";
		menuBoderRight.style.borderBottom = "none";
		
		var tagPage = this.getAttribute("href");
		plus.webview.show(tagPage,"fade-in",100);
	});
	
	menuRight.addEventListener('tap',function(){
		menuBoderRight.style.borderBottom = "2px solid black";
		menuBoderLeft.style.borderBottom = "none";
		
		var tagPage = this.getAttribute("href");
		plus.webview.show(tagPage,"fade-in",100);
	});
	
}
