
		$(function(){
			$(".globalWrapper").addClass("show-mobile-menu-3");
			$(".mobile-menu-3 span").text("網購註冊");
			$(".accept-way ul li label").click(function(){
				if($(this).parent().find("input[type='radio']:checked").length>0){
					$(this).parent().removeClass("un_check");
				}else{
					$(this).parent().addClass("un_check");
				}
				var len=0;
				$(".accept-way ul li").each(function(){
					if($(this).find("input[type='radio']:checked").length<1){
						len++;
					}
				})
				if(len==0)
				$(".accept-warning").addClass("hide");
			})
			$("#city-select").on("changed.bs.select",function(){
				$('#area-code').selectpicker('val', $(this).val());
				if($(this).val()=='hongkong'){
					$("#tel-list input").attr("disabled","true");
				}else{
					$("#tel-list input").removeAttr("disabled");
				}
			})
			$("#area-code").on("changed.bs.select",function(){
				$('#city-select').selectpicker('val', $(this).val());
				if($(this).val()=='hongkong'){
					$("#tel-list input").attr("disabled","true");
				}else{
					$("#tel-list input").removeAttr("disabled");
				}
			})

			$(".signup_send-btn").click(function(){
				if($(".no_card_provide").hasClass("hide")){
					if($("#registerEmail").val().trim().length==0){
						$("#registerEmail").addClass("error");
					}
					if($("#registerEmail2").val().trim().length==0){
						$("#registerEmail2").addClass("error");
					}
					if($("#registerMobile").val().trim().length==0){
						$("#registerMobile").addClass("error");
					}
					if($("#registerName").val().trim().length==0){
						$("#registerName").addClass("error");
					}
					if($("#genderForm_gender").val().trim().length==0){
						$("#genderForm_gender").addClass("error");
						$("#genderForm_gender").parent().parent().addClass("red");
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
					if($("#register_pwd").val().trim().length==0){
						$("#register_pwd").addClass("error");
					}
					if($("#register_pwd2").val().trim().length==0){
						$("#register_pwd2").addClass("error");
					}
					if($("#agree").prop("checked")==false){
						$("#agree").addClass("error");
					}
					$(".yes_card_provide input , .yes_card_provide select , #agree").each(function(){
						if($(this).hasClass("error")){
							$("#"+$(this).attr("id")+"-msg").removeClass("hide");
						}
					})
					$(".yes_card_provide .accept-way ul li").each(function(){
						if($(this).find("input[type='radio']:checked").length<1){
							$(this).addClass("un_check");
							$(".yes_card_provide .accept-warning").removeClass("hide");
						}
					})
				}else{
					if($("#email").val().trim().length==0){
						$("#email").addClass("error");
					}
					if($("#email2").val().trim().length==0){
						$("#email2").addClass("error");
					}
					if($("#tel").val().trim().length==0){
						$("#tel").addClass("error");
					}
					if($("#password").val().trim().length==0){
						$("#password").addClass("error");
					}
					if($("#password2").val().trim().length==0){
						$("#password2").addClass("error");
					}
					
					if($("#agree").prop("checked")==false){
						$("#agree").addClass("error");
					}
					$(".no_card_provide input , .no_card_provide select , #agree").each(function(){
						if($(this).hasClass("error")){
							$("#"+$(this).attr("id")+"-msg").removeClass("hide");
						}
					})
					$(".no_card_provide .accept-way ul li").each(function(){
						if($(this).find("input[type='radio']:checked").length<1){
							$(this).addClass("un_check");
							$(".no_card_provide .accept-warning").removeClass("hide");
						}
					})
				}
					
			})
			$(".provide_dropDown .provide_dropDown_title").click(function(){
				if($(this).parent().hasClass("active")){
	                $(this).parent().find(".provide_dropDown_box").slideUp();
	                $(this).parent().removeClass("active");
	            }else{
	                $(this).parent().find(".provide_dropDown_box").stop().slideDown();
	                $(this).parent().addClass("active")
	            }
			})
			function tool_box_hei(){
		        if($(window).width()<980){
		            var height=$(window).height()-$("#yes_card_box-btn").offset().top-$("#yes_card_box-btn").height()-20;
		            $("#yes_card_box-btn").css("margin-top",height+"px");
		            $("#yes_card_box-btn").css("margin-bottom",20+"px");
		        }
		    }
			$("#yes_card_box-btn").click(function(){
				var verify=true;
				if($("#memberCardCode").val().trim().length==0){
					$("#memberCardCode").addClass("error");
					verify=false;
				}
				if($("#yes_password").val().trim().length==0){
					$("#yes_password").addClass("error");
					verify=false;
				}
				$(".yes_card_box input").each(function(){
					if($(this).hasClass("error")){
						$("#"+$(this).attr("id")+"-msg").removeClass("hide");
					}
				})
				if(verify){
					$("#yes_card_box-btn").addClass("disabled");
					$("#memberCardCode , #yes_password").attr("disabled",true);
					$(".yes_card_provide , .checkout_signup_part2").removeClass("hide");
					$("#yes_card_box-btn").removeAttr("style");
					$(".yes_card_box .forget-password a").attr("onclick","return false;").attr("disabled",true);
				}
			})
			$("#open_card_check").click(function(){
				if($(this).find("input[type='checkbox']").prop("checked")==false){
					if($("#yes_card_box-btn").hasClass("disabled")){
						overlayOpen("signup_form-popup");
					}else{
						$(".yes_card_provide , .yes_card_box").addClass("hide");
						$(".no_card_provide , .checkout_signup_part2").removeClass("hide");
					}
				}else{
					$(".no_card_provide , .checkout_signup_part2").addClass("hide");
					$(".yes_card_box").removeClass("hide");
					if($("#yes_card_box-btn").hasClass("disabled")){
						$(".yes_card_provide").removeClass("hide");
						$("#yes_card_box-btn").removeAttr("style");
					}else{
						tool_box_hei();
					}
				}
			})
			$(".signup_form-popup-no").click(function(){
				$("#open_card_check").find("input[type='checkbox']").prop("checked",true);
			})
			$(".signup_form-popup-yes").click(function(){
				$(".yes_card_provide , .yes_card_box").addClass("hide");
				$(".no_card_provide , .checkout_signup_part2").removeClass("hide");
				$("#yes_card_box-btn").removeClass("disabled");
				$("#memberCardCode , #yes_password").removeAttr("disabled");
				$(".yes_card_provide , .checkout_signup_part2").addClass("hide");
				$(".yes_card_box .forget-password a").removeAttr("onclick").removeAttr("disabled");
				$("#memberCardCode , #yes_password").val("");
			})
		})