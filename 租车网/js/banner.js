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
	$("#focus").hover(function() { 
		clearInterval(picTimer); 
	},function() { 
		picTimer = setInterval(function() { 
			showPics(index); 
			index++; 
			if(index == len) {index = 0;} 
		},1800); 
	}).trigger("mouseleave"); 


	function showPics(index) { //普通切换 
		var nowLeft = -index*sWidth; 
		$("#focus ul").stop(true,false).animate({"left":nowLeft},600);  	
		$("#focus .btn span").stop(true,false).removeClass('banner_on').eq(index).stop(true,false).addClass('banner_on');  
	} 


	var $slider = $('#demo-slider-0');
	var counter = 0;
	var getSlide = function() {
		counter++;
		return '<li><img src="http://s.amazeui.org/media/i/demos/bing-' +
		(Math.floor(Math.random() * 4) + 1) + '.jpg" />';
	};
})