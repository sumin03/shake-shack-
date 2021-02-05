// JavaScript Document
$(document).ready(function(e){

	
	$(".fade").fadeIn(500);
	$(".fade_2").fadeIn(800);
	$(".burger").fadeIn(1500);

	//스크롤 다운
	$(window).scroll(function(){
		var a = $(this).scrollTop();
		
		if(a>60){
			$(".back_btn>img").css("display","block");
		}else{
			$(".back_btn>img").css("display","none");	
		}
	});
	//버튼 눌렀을경우 맨 위로 돌아오는 
	$(".back_btn>img").click(function(){
		$("html,body").animate({"scrollTop":0},1000);	
	});
	//슬라이드메뉴 _ .sub_m
	$(".gnb > li").mouseenter(function(){
		$(this).css("color","#ff8a00");
		$(this).children(".sub_m").stop().slideDown(500);
		
	});
	$(".gnb > li").mouseleave(function(){
		$(this).css("color","#8fc56a");
		$(this).children(".sub_m").stop().slideUp(500);
	});
	

});
