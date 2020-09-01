$(function(){
	$(".globalWrapper").addClass("checkoutWrapper");

	$("#area-code").on("changed.bs.select",function(){
		if($(this).val()=='hongkong'){
			$("#tel-list input").attr("disabled","true");
		}else{
			$("#tel-list input").removeAttr("disabled");
		}
	})
	
	$("#change-message").click(function(){
		$(".part-add-address").show();
		$(".part-address").hide();
		var that=$(this).parent().parent().parent();
		$(".part-add-address #name").val(that.find("[data-id='name']").text());
		$(".part-add-address #tel").val(that.find("[data-id='tel']").text());
		$(".part-add-address #mail").val(that.find("[data-id='mail']").text());
		$(".part-add-address #city").val(that.find("[data-id='city']").text());
		$(".part-add-address #address").val(that.find("[data-id='address']").text());
		$('#area-code').selectpicker('val', that.find("[data-id='city']").data("name"));				
	})

	$(".pickup-btn a").click(function(){
		$(".pickup-store").removeClass("hide");
		$(".pickup-btn").addClass("hide");
	})
	$("#next-step").click(function(){
		if($("#name").val().trim().length==0){
			$("#name").addClass("error");
		}
		if($("#mail").val().trim().length==0){
			$("#mail").addClass("error");
		}
		if($("#tel").val().trim().length==0){
			$("#tel").addClass("error");
		}
		$(".checkout_store input").each(function(){
			if($(this).hasClass("error")){
				$("#"+$(this).attr("id")+"-msg").removeClass("hide");
			}
		})
	})
})