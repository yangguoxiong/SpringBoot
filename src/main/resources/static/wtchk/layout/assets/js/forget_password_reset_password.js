
		$(function(){
			$(".globalWrapper").addClass("show-mobile-menu-3");
			$(".mobile-menu-3 span").text("新密碼");
			function tool_box_hei(){
		        if($(window).width()<980){
		            var height=$(window).height()-$(".forget_password-btn").offset().top-$(".forget_password-btn").height();
		            $(".forget_password-btn").css("margin-top",height+"px");
		        }
		    }
		    tool_box_hei();

			$("#forget_password-btn").click(function(){
				if($("#password").val().trim().length==0){
					$("#password").addClass("error");
				}
				if($("#password2").val().trim().length==0){
					$("#password2").addClass("error");
				}
				$(".forget_password_page input").each(function(){
					if($(this).hasClass("error")){
						$("#"+$(this).attr("id")+"-msg").removeClass("hide");
					}
				})
			})
		})