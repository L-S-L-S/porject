$(function(){
	//banner
	var sWidth = $(window).width(); 
	var len = $("#focus ul li").length; 
	var index = 0; 
	var picTimer;  
	var btn = "<div class='btn'>"; 

	// alert(bannerH.toFixed(2));

	for(var i=0; i < len; i++) { 
		btn += "<span></span>"; 
	};
	btn += "</div>"; 
	$("#focus").append(btn); 	 
	$("#focus .btn span").mouseover(function() { 
		index = $("#focus .btn span").index(this); 
		showPics(index); 
	}).eq(0).trigger("mouseover"); 
	
	$("#focus ul").css("width",sWidth * (len)); 	
	// $("#focus").hover(function() { 
	// 	clearInterval(picTimer); 
	// },function() { 
		picTimer = setInterval(function() { 
			showPics(index); 
			index++; 
			if(index == len) {index = 0;} 
		},1800); 
	// }).trigger("mouseleave"); 

	
	function showPics(index) { //普通切换 
		// index++;
		var nowLeft = -index*sWidth; 
		$("#focus ul").stop(true,false).animate({"left":nowLeft},600);  	
		$("#focus .btn span").stop(true,false).removeClass('btn_active').eq(index).stop(true,false).addClass('btn_active');  
	} 

 	// 触屏滑动
	// var obj = document.getElementById('banner');
	// obj.addEventListener('touchmove', function(event) {
	//      // 如果这个元素的位置内只有一个手指的话
	//     if (event.targetTouches.length == 1) {
	// 　　　　 event.preventDefault();// 阻止浏览器默认事件，重要 
	//         var touch = event.targetTouches[0];
	//         // 把元素放在手指所在的位置
	//         obj.style.left = touch.pageX - sWidth + 'px';
	//         // obj.style.top = touch.pageY - sWidth + 'px';
	//         }
	// }, false); 
	var z = 0;
	var j = len;
	// var flag = false;
	// function abc(){
	// 	if(!flag){
	// 		z++;
	// 	}else{
	// 		z--;
	// 	}
	// }

	$('#banner').on('touchstart',function(e){		
		e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
		var touch = e.originalEvent.targetTouches[0]; //获取第一个触点  
		var x = Number(touch.pageX); //页面触点X坐标   
		//记录触点初始位置  
		startX = x;  
		
		$('#banner').on('touchmove',function(e){
			e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
			var touch = e.originalEvent.targetTouches[0];  //获取第一个触点  
			var x = Number(touch.pageX); //页面触点X坐标    
			//判断滑动方向
			if (startX-x > 30) {  
			//左滑动 
				clearInterval(picTimer);
		        if(z<len){
		       		showPics(z);
		        }else if(z>=len){
		       		z=0;
		       		showPics(z);
		        }
	        
			}

		})
		z++;
	}) 
	$('#banner').on('touchstart',function(e){		
		e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
		var touch = e.originalEvent.targetTouches[0]; //获取第一个触点  
		var x = Number(touch.pageX); //页面触点X坐标   
		//记录触点初始位置  
		startX = x;  
		
		$('#banner').on('touchmove',function(e){
			e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
			var touch = e.originalEvent.targetTouches[0];  //获取第一个触点  
			var x = Number(touch.pageX); //页面触点X坐标    
			//判断滑动方向	
		    if(x-startX > 30) {
				//右滑动
				clearInterval(picTimer);
				if(j <= len && j >= 0){
		       		showPics(j);
		        }else if(j<=0){
		       		j = len - 1;
		       		showPics(j);
		        }
		        // console.log(j);
			}

		})
		j--;
	}) 
	$('#banner').on('touchend',function(){
	    picTimer = setInterval(function() { 
			showPics(index); 
			index++; 
			if(index == len) {index = 0;} 
		},1800); 
	})

})
