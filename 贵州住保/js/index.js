$(function(){
    var mw = $(window).width();
    if(mw<=340){  //iphone4之类的小屏        
        $('.f_size1_2').css('font-size','12px');
        $('.f_size1_3').css('font-size','13px');
        $('.f_size1_4').css('font-size','14px');
        $('.f_size1_5').css('font-size','15px');
        $('.f_size1_6').css('font-size','16px');
        $('.f_size1_8').css('font-size','18px');
        $('.f_size2_0').css('font-size','20px');
        $('.f_size2_6').css('font-size','26px');
        $('.f_size2_8').css('font-size','28px');
    }else if(mw>=340 && mw<=400){ //一般的安卓机
        $('.f_size1_2').css('font-size','14px');
        $('.f_size1_3').css('font-size','15px');
        $('.f_size1_4').css('font-size','16px');
        $('.f_size1_5').css('font-size','17px');
        $('.f_size1_6').css('font-size','18px');
        $('.f_size1_8').css('font-size','20px');
        $('.f_size2_0').css('font-size','22px');
        $('.f_size2_6').css('font-size','28px');
        $('.f_size2_8').css('font-size','30px');
    }else if(mw>400 && mw<=420){ //iphone6s等大屏的
        $('.f_size1_2').css('font-size','15px');
        $('.f_size1_3').css('font-size','16px');
        $('.f_size1_4').css('font-size','17px');
        $('.f_size1_5').css('font-size','18px');
        $('.f_size1_6').css('font-size','19px');
        $('.f_size1_8').css('font-size','21px');
        $('.f_size2_0').css('font-size','23px');
        $('.f_size2_6').css('font-size','29px');
        $('.f_size2_8').css('font-size','31px');
    }else if(mw>420 && mw<700){ //
        $('.f_size1_2').css('font-size','16px');
        $('.f_size1_3').css('font-size','17px');
        $('.f_size1_4').css('font-size','18px');
        $('.f_size1_5').css('font-size','19px');
        $('.f_size1_6').css('font-size','20px');
        $('.f_size1_8').css('font-size','22px');
        $('.f_size2_0').css('font-size','24px');
        $('.f_size2_6').css('font-size','30px');
        $('.f_size2_8').css('font-size','32px');
    }else if(mw>=700){
        $('.f_size1_2').css('font-size','28px');
        $('.f_size1_3').css('font-size','29px');
        $('.f_size1_4').css('font-size','30px');
        $('.f_size1_5').css('font-size','31px');
        $('.f_size1_6').css('font-size','32px');
        $('.f_size1_8').css('font-size','34px');
        $('.f_size2_0').css('font-size','36px');
        $('.f_size2_6').css('font-size','42px');
        $('.f_size2_8').css('font-size','44px');
    }
    if(mw<=340){  //iphone4之类的小屏        
        $('.pr_content input').css('font-size','13px');
    }else if(mw>=340 && mw<=400){ //一般的安卓机
        $('.pr_content input').css('font-size','15px');
    }else if(mw>400 && mw<=420){ //iphone6s等大屏的
        $('.pr_content input').css('font-size','16px');
    }else if(mw>420 && mw<700){ //
        $('.pr_content input').css('font-size','17px');
    }else if(mw>=700){
        $('.pr_content input').css('font-size','29px');
    }  

    var winH = $(window).height(),
        winW = $(window).width(),
        ph = ($(window).width()*1280)/720;

    $("header").height(winH * 0.073).css("line-height",(winH*0.073)+"px");
    $(".header_p").width(winW*0.055).height(winW*0.055).css("margin-top",-(winW*0.055)/2);
    $(".content").height(winH * 0.927);
    $(".meunHead_img").width(winW*0.3).height(winW*0.3);
    $(".notice_img").width(winW*0.32).height(winH*0.12);
    $(".notice_text").width(winW*0.59);
    $(".g_input").height(winH *0.04283);
    $(".g_select").height(winH *0.04283);

    clickFn = function(n){
        switch (n){
            case 1: $(".main").toggleClass('click');
                    break;
            case 2: $(".main").removeClass('click');
                    break;
        }
    }

    var $div_li =$(".tapMeun>li");
    $div_li.click(function(){
        $(this).addClass("active")            
               .siblings().removeClass("active");  
        var index =  $div_li.index(this);  
        $("div.tapBox")      
                .eq(index).show()   
                .siblings().hide(); 
    });
})
