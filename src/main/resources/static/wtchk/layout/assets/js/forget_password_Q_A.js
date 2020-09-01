
		$(function(){
			$(".globalWrapper").addClass("show-mobile-menu-3");
			$(".mobile-menu-3 span").text("提出問題");
			

			$("#form-submit-btn").click(function(){
				if($("#contactUs_name").val().trim().length==0){
					$("#contactUs_name").addClass("error");
				}
				if($("#contactUs_eMailCustomer").val().trim().length==0){
					$("#contactUs_eMailCustomer").addClass("error");
				}
				if($("#contactUs_phone").val().trim().length==0){
					$("#contactUs_phone").addClass("error");
				}
				if($("#contactUs_mailText").val().trim().length==0){
					$("#contactUs_mailText").addClass("error");
				}
				if($("#verifyCode").val().trim().length==0){
					$("#verifyCode").addClass("error");
				}
				if($("#subject").val().trim().length==0){
					$("#subject").addClass("error");
					$("#subject").parent().parent().addClass("red");
				}
				$(".forget_password_page input , .forget_password_page select").each(function(){
					if($(this).hasClass("error")){
						$("#"+$(this).attr("id")+"-msg").removeClass("hide");
					}
				})
			})
		})