
		$(function(){
			$(".globalWrapper").addClass("show-mobile-menu-3");
			$(".mobile-menu-3 span").text("重設密碼");
			function tool_box_hei(){
		        if($(window).width()<980){
		            var height=$(window).height()-$(".forget_password-btn").offset().top-$(".forget_password-btn").height();
		            $(".forget_password-btn").css("margin-top",height+"px");
		        }
		    }
		    tool_box_hei();

			$("#information-btn").click(function(){
				if($("#member").val().trim().length==0){
					$("#member").addClass("error");
				}
				if($("#registerMobile").val().trim().length==0){
					$("#registerMobile").addClass("error");
				}
				if($("#dateOfBirth_year").val().trim().length==0){
					$("#dateOfBirth_year").addClass("error");
					$("#dateOfBirth-msg").removeClass("hide");
					$("#dateOfBirth_year").parent().parent().addClass("red");
				}
				if($("#dateOfBirth_month").val().trim().length==0){
					$("#dateOfBirth_month").addClass("error");
					$("#dateOfBirth-msg").removeClass("hide");
					$("#dateOfBirth_month").parent().parent().addClass("red");
				}
				if($("#dateOfBirth_day").val().trim().length==0){
					$("#dateOfBirth_day").addClass("error");
					$("#dateOfBirth-msg").removeClass("hide");
					$("#dateOfBirth_day").parent().parent().addClass("red");
				}
				
				$(".forget_password_page input").each(function(){
					if($(this).hasClass("error")){
						$("#"+$(this).attr("id")+"-msg").removeClass("hide");
					}
				})
			})
		})