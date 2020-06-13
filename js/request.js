mui.ajax('http://localhost:8002/msm/send/'+phone,{
	data: {
		"phone":phone,
		"code" :code
	},
	dataType:'json',//服务器返回json格式数据
	type:'get',//HTTP请求类型
	timeout:10000,//超时时间设置为10秒；
	headers:{
		'Content-Type':'application/json',
		'token':window.localStorage.getItem("usertoken")
	},	              
	success:function(data){
		mui.toast("短信发送成功")
	},
	error:function(xhr,type,errorThrown){
		//异常处理；
		mui.toast("短信发送失败")
	}
});