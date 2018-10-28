//动态设置iframe高度
//在父页面里引用

function setIframeHeight(iframe_id){//父页面中iframe的id
    var min_height =455;
    var cacheHeight = 0;
    function run(iframe_id) {  
        var mf = $("#"+iframe_id)[0];  
        // when the main frame has already been loaded, the check its height  
        if (mf && mf.contentDocument && mf.contentDocument.body) {  
            var iframeHeight = $("#"+iframe_id)[0].contentDocument.body.clientHeight;  
            if (iframeHeight && iframeHeight != cacheHeight) {  
                // cache the main frame height  
                cacheHeight = iframeHeight; 
                iframeHeight=iframeHeight<min_height?min_height:iframeHeight;
        $("#"+iframe_id).height(iframeHeight);  
            }  
        } 
        setTimeout(run, 200,iframe_id);  
    }  
    run(iframe_id);
}
//如果需要在子页面中调用，则用如下方法：（追加parent）

function setIframeHeight(iframe_id){//父页面中iframe的id
    var min_height =455;
    var cacheHeight = 0;
    function run(iframe_id) {  
        var mf = parent.$("#"+iframe_id)[0];  
        // when the main frame has already been loaded, the check its height  
        if (mf && mf.contentDocument && mf.contentDocument.body) {  
            var iframeHeight = parent.$("#"+iframe_id)[0].contentDocument.body.clientHeight;  
            if (iframeHeight && iframeHeight != cacheHeight) {  
                // cache the main frame height  
                cacheHeight = iframeHeight; 
                iframeHeight=iframeHeight<min_height?min_height:iframeHeight;
        parent.$("#"+iframe_id).height(iframeHeight);  
            }  
        } 
        setTimeout(run, 200,iframe_id);  
    }  
    run(iframe_id);
}