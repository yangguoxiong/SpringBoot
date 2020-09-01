
		$(function(){
			$(".mobile-PLP-menu .h1 .s1").text("關於屈臣氏");
			$(".mobile-PLP-menu .h1 .s2").text("Total: 451 Items");
			$(".mobile-PLP-menu .i3").addClass("hide");
			$(".globalWrapper").addClass("show-mobile-PLP-menu");

			
			$(".contentpage-Filter2 .page .prev").click(function(){
				var val=parseInt($(this).parent().find(".s1").text());
				if(val>1){
					val=val-1;
				}
				if(val==1){
					$(this).removeClass("active");
				}else{
					$(".contentpage-Filter2 .page .next").addClass("active");
				}
				$(this).parent().find(".s1").text(val);
			})
			$(".contentpage-Filter2 .page .next").click(function(){
				var val=parseInt($(this).parent().find(".s1").text());
				var val2=parseInt($(this).parent().find(".s2").text());
				if(val<val2){
					val=val+1;
				}
				if(val==val2){
					$(this).removeClass("active");
				}else{
					$(".contentpage-Filter2 .page .prev").addClass("active");
				}
				$(this).parent().find(".s1").text(val);
			})

		    if($(window).width()<980){
		        $(".contentpage-Filter").width($(window).width()-30);
		        $("#sort-select").attr("title",$("#sort-select").data("mobile-title"));
		        $("#sort-select .bs-title-option").html($("#sort-select").data("mobile-title"));
			    $("#sort-select").selectpicker("refresh");
		    }
		    $(window).resize(function(){
		    	if($(window).width()<980){
			        $(".contentpage-Filter").width($(window).width()-30);
			        $("#sort-select").attr("title",$("#sort-select").data("mobile-title"));
			        $("#sort-select .bs-title-option").html($("#sort-select").data("mobile-title"));
				    $("#sort-select").selectpicker("refresh");
			    }else{
			    	$(".contentpage-Filter").width("auto");

					$("#sort-select").attr("title",$("#sort-select").data("desktop-title"));
					$("#sort-select .bs-title-option").remove();
				    $("#sort-select").selectpicker("refresh");
				    $("#sort-select").css("z-index",0);
			    }
		    })

			var scroll1=true;
			$(window).scroll(function(){
				if($(window).width()<980){
					var scrollTop1 = $(window).scrollTop();
				　　var scrollHeight1 = $(document).height();
				　　var windowHeight1 = $(window).height();
					
				　　if(scrollTop1 + windowHeight1 > scrollHeight1-$('footer').height()){
						$(".ProductSales-loading").removeClass("hide");
						if(scroll1==true){
							scroll1=false;
							setTimeout(function(){
								for(var i=0;i<4;i++){
									$(".news-list>ul").append('<li><div class="img"><a href=""><img src="assets/img/faq_image2.png" alt=""></a></div><div class="intro"><div class="new-title">「小額退稅服務」正式上線</div><div class="new-time">2017-04-28</div><div class="new-description"></div><div class="more"><a href="">more ></a></div></li>');
								}
								scroll1=true;
								$(".ProductSales-loading").addClass("hide");
							},1500)
						}
				　　}
				}
			});
		})