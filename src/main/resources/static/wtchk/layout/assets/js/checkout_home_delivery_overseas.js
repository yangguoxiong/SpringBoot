
		$(function(){
			$(".globalWrapper").addClass("checkoutWrapper");
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
			$("#submit2").click(function(){
				if($("#name").val().trim().length==0){
					$("#name").addClass("error");
				}
				if($("#mail").val().trim().length==0){
					$("#mail").addClass("error");
				}
				if($("#tel").val().trim().length==0){
					$("#tel").addClass("error");
				}
				if($("#address").val().trim().length==0){
					$("#address").addClass("error");
				}
				if($("#city1 select").val()==""){
					$("#city1").addClass("red");
					$("#city1-msg").removeClass("hide");
				}
				if($("#city2 select").val()==""){
					$("#city2").addClass("red");
					$("#city2-msg").removeClass("hide");
				}
				$(".checkout_homeD input").each(function(){
					if($(this).hasClass("error")){
						$("#"+$(this).attr("id")+"-msg").removeClass("hide");
					}
				})
			})
		})