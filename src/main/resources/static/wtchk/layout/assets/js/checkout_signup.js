
		$(function(){
			$(".globalWrapper").addClass("checkoutWrapper");
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
				$(".checkout_signup input").each(function(){
					if($(this).hasClass("error")){
						$("#"+$(this).attr("id")+"-msg").removeClass("hide");
					}
				})
				$(".accept-way ul li").each(function(){
					if($(this).find("input[type='radio']:checked").length<1){
						$(this).addClass("un_check");
						$(".accept-warning").removeClass("hide");
					}
				})
			})
		})