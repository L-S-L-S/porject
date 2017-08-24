$(function(){
	// about us 
	var about_picH = $(".recommend").height();
	$(".about_pic").height(about_picH);

	// news
	var $div_li =$(".news_tapMeun");
    $div_li.click(function(){ 
        var index =  $div_li.index(this);  
		$(".news_tapBox")   	
				.eq(index).show()   
				.siblings(".recommend").hide(); 
		$(this).addClass('news_tapMeun_active').siblings().removeClass('news_tapMeun_active');
		$(".news_tapMeun span").removeClass('news_tapMeun_active');
		$(this).children('span').addClass("news_tapMeun_active");
	})


    // carShow
    var $carShowL_list = $(".carShowL_list");
	$(".carShowL_list").hide();
    $(".carShowL_list").has("li.carShow_active").show();
    $(".carShowL_tit").click(function(){
		$(".carShowL_tit").removeClass("carShow_active");
		$(".carShowL_tit").children('span').removeClass("carShow_active");
		$(this).toggleClass("carShow_active");
		$(this).children('span').addClass("carShow_active");
		
		// 修改数字控制速度， slideUp(500)控制卷起速度
		$(this).next(".carShowL_list").slideToggle(500).parent("li").siblings("li").children('ul.carShowL_list').slideUp(500);
	})
	$(".carShowL_list>li").click(function(){
		$(".carShowL_list>li").removeClass('carShow_active');
		$(this).addClass('carShow_active');
	})	



	// specialService
	var char_serviceTxtH = $(".char_serviceTxt").height();
	var char_serviceImgH = $(".char_serviceImg img").height();
	var char_serviceImgM = (char_serviceTxtH -char_serviceImgH) / 2;
	$(".char_serviceImg").css("padding-top",char_serviceImgM);
	console.log(char_serviceImgM);
});	



