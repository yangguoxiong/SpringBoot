
		$(function(){
			$(".globalWrapper").addClass("show-mobile-menu-3");
			$(".mobile-menu-3 span").text("忘記密碼");
			function tool_box_hei(){
		        if($(window).width()<980){
		            var height=$(window).height()-$(".forget_password-btn").offset().top-$(".forget_password-btn").height();
		            $(".forget_password-btn").css("margin-top",height+"px");
		        }
		    }
		    tool_box_hei();

		    $("#forget_password-btn").click(function(){
				if($(".check-list input[type='radio']:checked").length==0){
					$("#checkbox-msg").removeClass("hide");
					$(".check-list input[type='radio']").addClass("error");
				}
			})
			$(".check-list .check-line label").click(function(){
				$("#checkbox-msg").addClass("hide");
				$(".check-list input[type='radio']").removeClass("error");
			})
		})