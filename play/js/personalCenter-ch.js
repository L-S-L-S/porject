$(function(){
	$(".personalCenter_tapMeun").click(function(){
		$(this).addClass('tap_active')
			   .siblings("p").removeClass('tap_active');
		var tap_index = $(this).index();
		$(".personalCenter_tapBox")
				.eq(tap_index).show(500)
				.siblings("div.personalCenter_tapBox").hide("fast");
	})

	var tapBoxPicW = ($(window).width() - $(window).width() * 0.11) * 0.44;
	// var tapBoxPicW = $(window).width() * 0.44
	// var tapBoxPicW = $(".tapBoxPic_img").width();
	$(".tapBoxPic_img").height(tapBoxPicW);
	console.log(tapBoxPicW)

	var tapBoxPic1LH =($(window).width() - $(window).width() * 0.02)*0.23;
	$(".tapBoxPic1L").css({
							"height":tapBoxPic1LH,
							"border-radius":tapBoxPic1LH/2
						});

	var tapBoxPic2LH =($(window).width() - $(window).width() * 0.02)*0.17;
	$(".tapBoxPic2L").css({
							"height":tapBoxPic2LH,
							"border-radius":tapBoxPic2LH/2
						});
	$(".tapBoxPic2R").css({
							"height":tapBoxPic2LH	
						});

	var imgW = $(".personalCenter_Head img").width();
    $(".personalCenter_Head").css({
    	"border-radius":imgW/2,
    	"width":imgW,
    	"height":imgW
    });
})