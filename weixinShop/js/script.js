$(function(){    
    var mw = $(window).width();
    if(mw<=340){  //iphone4之类的小屏        
        $('.f_size1_2').css('font-size','12px');
        $('.f_size1_3').css('font-size','13px');
        $('.f_size1_4').css('font-size','14px');
        $('.f_size1_5').css('font-size','15px');
        $('.f_size1_6').css('font-size','16px');
        $('.f_size1_8').css('font-size','18px');
        $('.f_size2_6').css('font-size','26px');
        $('.f_size2_8').css('font-size','28px');
    }else if(mw>=340 && mw<=400){ //一般的安卓机
        $('.f_size1_2').css('font-size','14px');
        $('.f_size1_3').css('font-size','15px');
        $('.f_size1_4').css('font-size','16px');
        $('.f_size1_5').css('font-size','17px');
        $('.f_size1_6').css('font-size','18px');
        $('.f_size1_8').css('font-size','20px');
        $('.f_size2_6').css('font-size','28px');
        $('.f_size2_8').css('font-size','30px');
    }else if(mw>400 && mw<=420){ //iphone6s等大屏的
        $('.f_size1_2').css('font-size','15px');
        $('.f_size1_3').css('font-size','16px');
        $('.f_size1_4').css('font-size','17px');
        $('.f_size1_5').css('font-size','18px');
        $('.f_size1_6').css('font-size','19px');
        $('.f_size1_8').css('font-size','21px');
        $('.f_size2_6').css('font-size','29px');
        $('.f_size2_8').css('font-size','31px');
    }else if(mw>420 && mw<700){ //
        $('.f_size1_2').css('font-size','16px');
        $('.f_size1_3').css('font-size','17px');
        $('.f_size1_4').css('font-size','18px');
        $('.f_size1_5').css('font-size','19px');
        $('.f_size1_6').css('font-size','20px');
        $('.f_size1_8').css('font-size','22px');
        $('.f_size2_6').css('font-size','30px');
        $('.f_size2_8').css('font-size','32px');
    }else if(mw>=700){
        $('.f_size1_2').css('font-size','28px');
        $('.f_size1_3').css('font-size','29px');
        $('.f_size1_4').css('font-size','30px');
        $('.f_size1_5').css('font-size','31px');
        $('.f_size1_6').css('font-size','32px');
        $('.f_size1_8').css('font-size','34px');
        $('.f_size2_6').css('font-size','42px');
        $('.f_size2_8').css('font-size','44px');
    }	

    var winW = $(window).width();
    var winH = $(window).height();

    $(".goods_list li").width((winW / 2)-0.5);

    $(".user_h").css({
        width: winW * 0.18,
        height: winW * 0.18
    });

    $("#goods_banner>p").width(winW).height(winW);

    $(".goods_list li:nth-child(2n-1)").css({
        float: 'left'
    });
    $(".goods_list li:nth-child(2n)").css({
        "float": "right"
    }).after("<p class='clear'></p>");

    var li_h = $(".goods_list1 li").height();
    var txt_h = $(".list1_txt").height();
    // console.log(txt_h)
    $(".list1_txt").css({
        "padding-top": (li_h - txt_h) / 2
    });

    $(".unEmptyList_img").css({
        "width": winW * 0.23,
        "height": winW * 0.23
    });
    
    $(window).scroll(function() { 
        var winST = $(window).scrollTop();
        var cH = $(".top_nav").height();        
        // console.log(winST)        
        if(winST >= cH){
            $(".custom-category").addClass("top_fix");
        }else if(winST < cH){
           $(".custom-category").removeClass("top_fix"); 
        }

        if(winST >= winH*1.5){
            $(".backTop").removeClass("hide");
        }else if(winST < winH*1.5){ 
            $(".backTop").addClass("hide");
        }
    }); 

    $(".category li:nth-child(2n-1)").css({
        float: 'left'
    });
    $(".category li:nth-child(2n)").css({
        "float": "right"
    }).after("<p class='clear'></p>");

    // 每个按钮的点击事件
    clickFn = function(n){
        switch(n){
            case 1: $('#det_Popup').show();
                    $('#cuxiao').slideDown(500);//促销显示  
                    noScroll(); //禁止滚动                  
                    break;
            case 2: $('#det_Popup').hide();
                    $('#cuxiao').slideUp(300);//促销隐藏
                    Scroll(); //还原滚动
                    break;
            case 3: $('#det_Popup').show();
                    $('#fuwu').slideDown(500);//服务显示
                    noScroll(); //禁止滚动
                    break;            
            case 4: $('#det_Popup').hide();
                    $('#fuwu').slideUp(300);//服务隐藏
                    Scroll(); //还原滚动
                    break;
            case 5: $('#det_Popup').show();
                    $('#fenxiang').slideDown(500);//分享显示
                    noScroll(); //禁止滚动
                    break;            
            case 6: $('#det_Popup').hide();
                    $('#fenxiang').slideUp(300);//分享隐藏
                    Scroll(); //还原滚动
                    break;
            case 7: $('#det_Popup').show();
                    $('#pinglun').slideDown(500);//评论显示
                    noScroll(); //禁止滚动
                    break;            
            case 8: $('#det_Popup').hide();
                    $('#pinglun').slideUp(300);//评论隐藏
                    Scroll(); //还原滚动
                    break;
            case 9: $('#det_Popup').show();
                    $('#guige').slideDown(500);//规格显示
                    noScroll(); //禁止滚动
                    break;            
            case 10: $('#det_Popup').hide();
                    $('#guige').slideUp(300);//规格隐藏
                    Scroll(); //还原滚动
                    break;
        }
    }

    // 商品详情tab切换
    var $div_li = $("#details_tab li");
    var $tab_box = document.getElementsByName("details_tab_box");
    $div_li.click(function(){
        $(this).addClass("active")            
               .siblings().removeClass("active");  
        var index =  $div_li.index(this);  
        $(".tap_con[name=details_tab_box]").eq(index).show()   
                .siblings().hide(); 
    })

    // 禁止滚动
    var $objScr = $('body');
    function noScroll(){        
        var scrollTop = $("body").scrollTop();//objScr设置为fixed之后会飘到顶部，所以要动态计算当前用户所在高度
        $objScr.css({
            'overflow':'hidden',
            // 'height': winH
            'position': 'fixed',
            'top': scrollTop*-1
        });

        // $loadMask.css('top',scrollTop);//设置遮罩层top值
    }

    function Scroll(){    
        /*取消后设置回来*/
        // $objScr.attr("style"," ");
        $objScr.css({
            'overflow':'auto',
            // 'height':'auto'
            'position': 'static',
            'top': "auto"
        });
        // console.log(scrollTop);
        // $("body").scrollTop();
    }

    $("#det_Popup").click(function(){
        $("#det_Popup").hide();
        $(".Popup_contant").slideUp(300);
        Scroll();
    }) 

    $(".guige_sty").click(function(){
        $(".guige_sty").removeClass("active");
        $(this).addClass("active");        
    }) 

    // 订单状态
    $("#order_status>li").click(function() {
        $(this).addClass("active")
               .siblings("li").removeClass("active")
    });
    
    // 单个选中
    choose = function (obj){
        // var $obj  = $(obj);
        if(obj.checked){
            $(obj).parent("label").addClass("check");
        }else{
            $(obj).parent("label").removeClass("check");
        }    
    }
    // 全选
    chooseAll = function (obj){
        if(obj.checked){
            $(obj).parent("label").addClass("check");
            $('[name=items]:checkbox').attr("checked",true).parent("label").addClass("check");  
        }else{
            $(obj).parent("label").removeClass("check");
            $('[name=items]:checkbox').attr("checked",false).parent("label").removeClass("check");
        } 
    } 

});	

function changePrice(obj){
    var $obj  = $(obj);
    // alert(obj)
    $obj.toggleClass("Price_down").toggleClass("Price_up");
}

