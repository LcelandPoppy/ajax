var jqureAjaxXhrOnProgress = function(fun) {
	jqureAjaxXhrOnProgress.onprogress = fun; //绑定监听
	//使用闭包实现监听绑
	return function() {
		//通过$.ajaxSettings.xhr();获得XMLHttpRequest对象
		var xhr = $.ajaxSettings.xhr();
		//判断监听函数是否为函数
		if(typeof jqureAjaxXhrOnProgress.onprogress !== 'function')
			return xhr;
		//如果有监听函数并且xhr对象支持绑定时就把监听函数绑定上去
		if(jqureAjaxXhrOnProgress.onprogress && xhr.upload) {
			xhr.upload.onprogress = jqureAjaxXhrOnProgress.onprogress;
		}
		return xhr;
	}
}
//ajax的滚动条的事件
$.ajax({
	type: "post",
	url: http + "/ProdPicture/Interface/v1/addPictureBatch",
	data: formdata,
	processData: false,
	contentType: false,
	xhr: jqureAjaxXhrOnProgress(function(e) {
		var percent = e.loaded / e.total;
		$('#progress').css("width", percent * 100 + '%');
		$('#progress').html(parseInt(percent * 100) + '%');
		if(parseInt(percent * 100) == 100) {
			$('#progress').html("数据正在解码中,请稍后...");
			$('#progress').css("color", "#000");
		}
	}),
	success: function(d) {
		console.log(d);
		if(d.status) {
			that.videoinfor = d.data[0];
			$('#progress').html("解码成功！");
			$('#progress').css("color", "#000");
		} else {
			$('#progress').html('上传失败!请重新下载!');
			$('#progress').css('background', "#FC0511");
			ttt.parent().css("display", "block");
			}

		},
		error: function(e) {
			console.log(e);
		}
	})
})