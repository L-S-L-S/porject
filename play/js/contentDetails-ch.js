$(function(){
	var part1H = $(".details_part1").height();
	var wH = $(window).height();

	$(".details_btnSty").click(function(){
		$(".details_part1").height(wH);
		$(".details_part2").stop(true,true).animate({"top":0},1500);
		$(".details_part1").stop(true,true).animate({"opacity":.5},1500);
		$(".close").toggle();
		$(".details_buy").toggle();
	})
	$(".close").click(function(){
		$(".details_part1").height("auto");
		$(".details_part2").stop(true,true).animate({"top":part1H},1500);
		$(".details_part1").stop(true,true).animate({"opacity":1},1500);
		$(".details_buy").toggle();
		$(this).toggle();
	})  

	$(".buy_type").last().css("margin-bottom","13.3%")
	$(".confirm_conPic").last().css("margin-bottom","13.3%")
	$(".buy_numInput").val("0");

	// contentDetails_buy
	$(".buy_typeCon>div").click(function(){	
		$(this).addClass('buy_price_active').siblings('div').removeClass('buy_price_active');
	})
	$(".buy_priceCon>div").click(function(){	
		$(this).addClass('buy_price_active').siblings('div').removeClass('buy_price_active');
	})

	// contentDetails_confirm	
	$(".confirm_conPic_pay>div").click(function(){	
		$(this).addClass('pay_active').siblings('div').removeClass('pay_active');
	})
})