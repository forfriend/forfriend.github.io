/**
 * Created by admin on 2015/6/29.
 */
function check(){
	var pattern_jiaoyan=/^[0-9]{6}$/;
	var pattern_name=/^[a-zA-Z\d]\w{5,9}$/;
	var pattern_pswd=/^[a-zA-Z0-9\d_]{6,10}$/;
	var pattern_email=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Zz-z0-9]+)*\.[A-Za-z0-9]/;
	var pattern_phone=/^[0-9]{11}$/;
	var yonghuming = document.getElementById("yonghuming").value;
	var youxiang = document.getElementById("youxiang").value;
	var mima = document.getElementById("mima").value;
	var mima1 = document.getElementById("mima1").value;
	var phone = document.getElementById("phone").value;
	
	if(!pattern_name.test(yonghuming)){
		document.getElementById("Validform_checktip2").innerHTML="*必须为6-10位开头为字母或者数字"
	}else{
		document.getElementById("Validform_checktip2").innerHTML="*校验通过"
	}
	if(!pattern_email.test(youxiang)){
		document.getElementById("Validform_checktip3").innerHTML="*格式有错误"
	}else{
		document.getElementById("Validform_checktip3").innerHTML="*校验通过"
	}
	if(!pattern_pswd.test(mima)){
		document.getElementById("Validform_checktip4").innerHTML="*格式有错误"
	}else{
		document.getElementById("Validform_checktip4").innerHTML="*校验通过"
	}
	if(mima == mima1 && mima!="" && mima1!=""){
		document.getElementById("Validform_checktip5").innerHTML="*校验通过"
	}else{
		document.getElementById("Validform_checktip5").innerHTML="*两次输入不同"
	}
	if(!pattern_phone.test(phone)){
		document.getElementById("Validform_checktip6").innerHTML="*校验不通过";
	}else{
		document.getElementById("Validform_checktip6").innerHTML="校验通过";
		
	}

}
