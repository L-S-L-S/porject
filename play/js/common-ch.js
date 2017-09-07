$(function(){
	//banner
	var sWidth = $(window).width();
	var bi = 360 / 720;
	var bannerH = sWidth * bi;
	$('.header_style').height(bannerH);
	$('.banner li img').width(sWidth);

    var mw = $(window).width();
    var mh = $(window).height();
    var ph = (($(window).width())*1334)/750;
    var pw = (750*($(window).height()))/1334;
    // console.log(mw);
	if(mw<=340){  //iphone4之类的小屏
        $('.menu').css('font-size','1.2rem');
        $('.sum_txt_tit1').css('font-size','1.4rem');
        $('.sum_txt_tit2').css('font-size','1.3rem');
        $('.con_img').css('font-size','1.2rem');
        $('.con_tit').css('font-size','1.2rem');
        $('.con_blurb').css('font-size','1.2rem');
        $('.con_price').css('font-size','1.3rem');
        $('.con_tit_01L').css('font-size','1.5rem');
        $('.con_tit_01R').css('font-size','1.2rem');
        $('.con_img_02').css('font-size','1.2rem');
        $('.con_tit_02L').css('font-size','1.4rem');
        $('.con_txt_02').css('font-size','1.2rem');
    }else if(mw>=340 && mw<=400){ //一般的安卓机
        $('.menu').css('font-size','1.4rem');
        $('.sum_txt_tit1').css('font-size','1.6rem');
        $('.sum_txt_tit2').css('font-size','1.4rem');
        $('.con_img').css('font-size','1.4rem');
        $('.con_tit').css('font-size','1.4rem');
        $('.con_blurb').css('font-size','1.4rem');
        $('.con_price').css('font-size','1.5rem');
        $('.con_tit_01L').css('font-size','1.7rem');
        $('.con_tit_01R').css('font-size','1.4rem');
        $('.con_img_02').css('font-size','1.4rem');
        $('.con_tit_02L').css('font-size','1.6rem');
        $('.con_txt_02').css('font-size','1.4rem');
    }else if(mw>400 && mw<700){ //iphone6s等大屏的
        $('.menu').css('font-size','1.6rem');
        $('.sum_txt_tit1').css('font-size','1.8rem');
        $('.sum_txt_tit2').css('font-size','1.6rem');
        $('.con_img').css('font-size','1.6rem');
        $('.con_tit').css('font-size','1.6rem');
        $('.con_blurb').css('font-size','1.6rem');
        $('.con_price').css('font-size','1.7rem');
        $('.con_tit_01L').css('font-size','1.9rem');
        $('.con_tit_01R').css('font-size','1.6rem');
        $('.con_img_02').css('font-size','1.6rem');
        $('.con_tit_02L').css('font-size','1.8rem');
        $('.con_txt_02').css('font-size','1.6rem');
    }else if(mw>=700){
        $('.menu').css('font-size','2.8rem');
        $('.sum_txt_tit1').css('font-size','3rem');
        $('.sum_txt_tit2').css('font-size','2.9rem');    
        $('.con_img').css('font-size','2.8rem');
        $('.con_tit').css('font-size','2.8srem');
        $('.con_blurb').css('font-size','2.8rem');    
        $('.con_price').css('font-size','2.9rem');    
        $('.con_tit_01L').css('font-size','3.1rem');
        $('.con_tit_01R').css('font-size','2.8rem');
        $('.con_img_02').css('font-size','2.8rem');
        $('.con_tit_02L').css('font-size','2.6rem');
        $('.con_txt_02').css('font-size','2.8rem');
    }


    if(mw<=340){  //iphone4之类的小屏        
        $('.f_size1_2').css('font-size','1.2rem');
        $('.f_size1_3').css('font-size','1.3rem');
        $('.f_size1_4').css('font-size','1.4rem');
        $('.f_size1_5').css('font-size','1.5rem');
        $('.f_size1_6').css('font-size','1.6rem');
        $('.f_size1_8').css('font-size','1.8rem');
        $('.f_size2_8').css('font-size','2.8rem');
    }else if(mw>=340 && mw<=400){ //一般的安卓机
        $('.f_size1_2').css('font-size','1.4rem');
        $('.f_size1_3').css('font-size','1.5rem');
        $('.f_size1_4').css('font-size','1.6rem');
        $('.f_size1_5').css('font-size','1.7rem');
        $('.f_size1_6').css('font-size','1.8rem');
        $('.f_size1_8').css('font-size','2rem');
        $('.f_size2_8').css('font-size','3rem');
    }else if(mw>400 && mw<700){ //iphone6s等大屏的
        $('.f_size1_2').css('font-size','1.6rem');
        $('.f_size1_3').css('font-size','1.7rem');
        $('.f_size1_4').css('font-size','1.8rem');
        $('.f_size1_5').css('font-size','1.9rem');
        $('.f_size1_6').css('font-size','2rem');
        $('.f_size1_8').css('font-size','2.2rem');
        $('.f_size2_8').css('font-size','3.2rem');
    }else if(mw>=700){
        $('.f_size1_2').css('font-size','2.8rem');
        $('.f_size1_3').css('font-size','2.9rem');
        $('.f_size1_4').css('font-size','3rem');
        $('.f_size1_5').css('font-size','3.1rem');
        $('.f_size1_6').css('font-size','3.2rem');
        $('.f_size1_8').css('font-size','3.4rem');
        $('.f_size2_8').css('font-size','4.4rem');
    }
    var con_imgW =$(".con_img").width();
    var con_ph = (con_imgW*320)/687;
    // var winH = $(window).height();
    // $(".con_img").height(winH*0.3);
    $(".con_img").height(con_ph);

    var btnW = $(".header_style .btn").width();
    $(".header_style .btn").css("margin-right",-btnW/2);

    alert($(window).width() " + " $(window).height())
})
