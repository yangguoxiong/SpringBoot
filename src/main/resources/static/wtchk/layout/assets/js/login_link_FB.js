
		$(function(){
			$(".globalWrapper").addClass("show-mobile-menu-3");
			$(".mobile-menu-3 span").text("連結帳號");
			function tool_box_hei(){
		        if($(window).width()<980){
		            var height=$(window).height()-$(".link-here-btn .left").offset().top-$(".link-here-btn .left").height();
		            $(".link-here-btn .left").css("margin-top",height+"px");
		        }
		    }
		    tool_box_hei();
			var valida=0;
			$(" #login-submit").click(function(){
				valida=0;
				if($("#mail").val().trim().length==0){
					$("#mail").addClass("error");
					valida=1;
				}
				if($("#password").val().trim().length==0){
					$("#password").addClass("error");
					valida=1;
				}
				if(valida==1){
					$("#errortext").removeClass("hide");
				}
			})
		})