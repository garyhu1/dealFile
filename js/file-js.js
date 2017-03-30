window.onload = function() {
	var check = document.getElementById("check");
	var fileName = document.getElementById("file");
	var icon = document.getElementById("icon");
	var info = document.getElementById("info");
	file.addEventListener('change',function() {
		//清除背景图
		icon.style.background = '';
		//检查文件是否选择
		if(!file.value){
			info.innerHTML = '文件未选择';
			return ;
		}
		//获取file的引用
		var f = file.files[0];
		//获取file的信息
		info.innerHTML = '文件名：'+f.name+'<br>'+
		                 '大小：'+f.size+'<br>'+
		                 '修改：'+f.lastModifiedDate;
		//判断选取文件的类型
		if(f.type !== 'image/jpeg'&&f.type !== 'image/jpg'&&f.type !== 'image/png'&&f.type !== 'image/gif'){
			alert('不是有效的图片文件');
			return;
		}
		//读取文件
		var reader = new FileReader();
		reader.onload = function(e) {
			var data = e.target.result;// 'data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...'   
//			icon.src = 'url('+data+')';
			icon.style.background = 'url('+data+')';    
			icon.style.backgroundSize = 'cover';
		}
		reader.readAsDataURL(f);
	});
}
