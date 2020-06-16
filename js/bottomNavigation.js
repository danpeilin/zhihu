
				//mui初始化
				mui.init();
				// 子页面集合
				var subpages = ['zhuye.html', 'message.html', 'zlbj.html','wode.html'];
				// 子页面样式
				var subpage_style = {
					top: '0px',
					bottom: '51px',
					scrollIndicator:'none',//当页面内容较多出现滚动条时,隐藏
				};
				
				// 记录展示结果集
				var aniShow = {};
				//1、创建子页面，首个选项卡页面显示，其它均隐藏；
				mui.plusReady(function() {
					// 获取自身
					var self = plus.webview.currentWebview();
					// 循环创建子页面
					for (var i = 0; i < subpages.length; i++) {
						var temp = {};
						// 创建子页面,create(url,id,styles)
						var sub = plus.webview.create(subpages[i], subpages[i], subpage_style);
						if (i > 0) {//不是第一个页面,则隐藏
							sub.hide();
						} else {//第一个页面
							temp[subpages[i]] = "true";
							// 把两个对象合并成一个对象,
							mui.extend(aniShow, temp);
							// console.log(JSON.stringify(aniShow));
							// aniShow输出{"a.html":"true"}
						}
						// 把子页面追加到自身
						self.append(sub);
					}
				});
				
				//当前激活选项,默认为第一个子页面
				var activeTab = subpages[0];
				//2、选项卡点击事件
				mui('.mui-bar-tab').on('tap', 'a', function(e) {
					// 获取当前点击tab的href属性
					var targetTab = this.getAttribute('href');
					// 当前子页面=激活的页面,不操作
					if (targetTab == activeTab) {
						return;
					}
					//1、显示目标选项卡
					//若为iOS平台或非首次显示(不是第一次显示)，则直接显示
					if (mui.os.ios || aniShow[targetTab]) {
						// console.log(aniShow[targetTab]);
						//输出true
						plus.webview.show(targetTab);
					} else {//第一次点击tab才显示
						//否则，使用fade-in动画，且保存变量
						var temp = {};
						temp[targetTab] = "true";
						// 合并对象
						mui.extend(aniShow, temp);
						console.log(JSON.stringify(aniShow));
						// aniShow输出 {"a.html":"true","b.html":"true"}
						// aniShow输出 {"a.html":"true","b.html":"true","c.html":"true"} 
						plus.webview.show(targetTab, "fade-in", 300);
					}
					//2、隐藏当前;
					plus.webview.hide(activeTab);
					//3、更改当前活跃的选项卡
					activeTab = targetTab;
				});
				
				//3、退出系统时，默认还是加载初始化的页面，自定义事件，模拟点击“首页选项卡”
				document.addEventListener('gohome', function() {
					var defaultTab = document.getElementById("defaultTab");
					//模拟首页点击
					mui.trigger(defaultTab, 'tap');
					//切换选项卡高亮
					var current = document.querySelector(".mui-bar-tab>.mui-tab-item.mui-active");
					if (defaultTab !== current) {
						current.classList.remove('mui-active');
						defaultTab.classList.add('mui-active');
					}
				});