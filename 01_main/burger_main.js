// JavaScript Document
$(document).ready(function(e){
	
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
	
	
	//.menu li버튼 눌렀을 때 메뉴 change!	 
	
	$(".menu li").click(function(){
		var menu_clicked = $(this);
		 console.log(this);
		 console.log(menu_clicked.hasClass("active_menu"));
		 console.log($(".menu li.active_menu").index());
		if(menu_clicked.hasClass("active_menu")){
			return;	
		}else{
			var menu_clicked_name = menu_clicked[0].innerText;
			var current_menu_index = $(".menu li.active_menu").index();
			var new_menu_index=menu_clicked.index();
			var difference=new_menu_index-current_menu_index;
			var move_left = 1200*difference;
			var move_left_toString ="-="+move_left+"px"
			$(".item_box").stop(true,true).animate({left:move_left_toString},300);
			
			$(".active_menu").removeClass("active_menu");
			$(".menu li").eq(new_menu_index).addClass("active_menu");
		}
		//.menu li 클릭했을 때 색 바뀜 
		
		$(".menu li").mouseenter(function(){
			$(this).css("color","#8fc56a");	
		});
		$(".menu li").mouseleave(function(){
			$(this).css("color","black");	
		});
		
		
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