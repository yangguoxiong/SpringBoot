$(function(){
			$(".globalWrapper").addClass("checkoutWrapper");
			$(".globalWrapper").addClass("pd");
			$(".checkout_bill .title").click(function(){
				if($(this).parent().hasClass("active")){
	                $(this).parent().find(".checkout_bill_drop_box").slideUp();
	                $(this).parent().removeClass("active");
	            }else{
	                $(this).parent().find(".checkout_bill_drop_box").stop().slideDown();
	                $(this).parent().addClass("active")
	            }
			})
			$(".checkout_bill .hide-all").click(function(){
				$(".checkout_bill .title").click();
			})
			$(".preference-part .title").click(function(){
				if($(this).parent().hasClass("active")){
	                $(this).parent().find(".preference-part_drop_box").slideUp();
	                $(this).parent().removeClass("active");
	            }else{
	                $(this).parent().find(".preference-part_drop_box").stop().slideDown();
	                $(this).parent().addClass("active")
	            }
			})
			$(".preference-part .hide-all").click(function(){
				$(".preference-part .title").click();
			})
			$(".advance_chose .advance_chose_title").click(function(){
				if($(this).parent().hasClass("active")){
	                $(this).parent().find(".advance_chose_drop_box").slideUp();
	                $(this).parent().removeClass("active");
	            }else{
	                $(this).parent().find(".advance_chose_drop_box").stop().slideDown();
	                $(this).parent().addClass("active")
	            }
			})
			function countTicket(){
				$(".count-box .ticket-count p span").text($(".ticket-box ul li input[type='checkbox']:checked").length+"/"+$(".ticket-box ul li").length);
			}
			countTicket();
			$(".ticket-box ul li").click(function(){
				if($(this).find("input[type='checkbox']").prop("checked")){
					$(this).addClass("active");
				}else{
					$(this).removeClass("active");
				}
				if($(".ticket-box ul li input[type='checkbox']:checked").length>0){
					$(".ticket-box .ticket-title").removeClass("hide");
					countTicket();
				}else{
					$(".ticket-box .ticket-title").addClass("hide");
				}
			})
			$(".ticket-box .ticket-title .icon-delete").click(function(){
				$(".ticket-box .ticket-title").addClass("hide");
				$(".ticket-box ul li input[type='checkbox']").prop("checked",false);
				$(".ticket-box ul li").removeClass("active");
				countTicket();
			})
			$("#payment-way-select").on("change",function(){
				var id = $(this).find("option:selected").data("id");
				$(".invoice-list .cell").addClass("hide");
				if(id!=""){
					$(".invoice-intro").addClass("hide");
					$("#"+id).removeClass("hide");
				}else{
					$(".invoice-intro").removeClass("hide");
				}
				
			})
			$(".discount-box .tab a").click(function(){
				//if(!$(".discount-box .tab").hasClass("disabled")){
					var id=$(this).data("id");
					$(".discount-box .tab a").removeClass("active");
					$(this).addClass("active");
					$(".discount-box .tab-content .form").addClass("hide");
					$(".discount-box .tab-content .form[data-id='"+id+"']").removeClass("hide");
				//}
			})
			$("#discount-no-btn").click(function(){
				$("#discount-no").addClass("error");
				$("#discount-no-msg").removeClass("hide");
			})
			$("#discount-select-btn").click(function(){
				if(!$(this).parent().hasClass("disabled")){
					$(".discount-box .tab-content").append('<div class="tab-result"><span>'+$("#discount-select").val()+'</span><i class="icon-delete"></i></div>');
					$(".discount-box .tab").addClass("disabled");
					$(this).parent().addClass("disabled");
					$("#discount-no-btn").parent().addClass("disabled");
				}	
			})
			$("body").on("click",".discount-box .tab-result .icon-delete",function(){
				$(this).parent().remove();
				$(".discount-box .tab").removeClass("disabled");
				$("#discount-select-btn , #discount-no-btn").parent().removeClass("disabled");
			})
			$("#count-box-btn").click(function(){
				if(!$(this).parent().hasClass("disabled")){
					$("#count-box-input").val("");
					$(".count-box .tip").after('<div class="tab-result"><span>電子折價券$100</span><i class="icon-delete"></i></div>');
					$(this).parent().addClass("disabled");
				}	
			})
			$("body").on("click",".count-box .tab-result .icon-delete",function(){
				$(this).parent().remove();
				$("#count-box-btn").parent().removeClass("disabled");
			})
			$(".checkout_bill .title .close-btn").click(function(){
				$(".checkout_bill").removeClass("show_mobile");
				$("html").removeClass("mobile-overflow");
			})
			$(".checkout_payment_part2 .total-box .total").click(function(){
				$(".checkout_bill").addClass("show_mobile");
				$("html").addClass("mobile-overflow");
			})
			$("#payment-way").on("change",function(){
				$(".payment-way-check").addClass("hide");
				$(".payment-way-check[data-id='"+$(this).val()+"']").removeClass("hide");
			})
			$(".ticket-box ul").niceScroll({
				"horizrailenabled": false,
				"cursorcolor": "#009AA9",
				"cursorwidth": "8px",
				"hidecursordelay": 1000,
				"railpadding": { top: 0, right: 1, left: 0, bottom: 0 },
			});
			$(".cash-discount").click(function(){
				$(this).toggleClass("active");
				$("#cash-discount").toggleClass("hide");
			})
		})