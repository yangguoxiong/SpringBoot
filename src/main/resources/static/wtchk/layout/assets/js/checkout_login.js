
		$(function(){
			$(".globalWrapper").addClass("checkoutWrapper");
			var valida=0;
			$(".checkout_login_content #login-submit").click(function(){
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