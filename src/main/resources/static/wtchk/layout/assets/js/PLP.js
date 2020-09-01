
		$(function(){
			
			if($('main').hasClass('thirdLevel')){
				$(this).parent().find('.mobile-PLP-menu .h1 .s1').text("沐浴露");
				$(this).parent().find('.mobile-PLP-menu .h1 .s2').text("777 產品結果");
			}else if($('main').hasClass('branding')){
				$(this).parent().find('.mobile-PLP-menu .h1 .s1').text("WATSONS");
				$(this).parent().find('.mobile-PLP-menu .h1 .s2').text("666 產品結果");
			}else{
				$(".mobile-PLP-menu .h1 .s1").text("身體護理");
				$(".mobile-PLP-menu .h1 .s2").text("367 產品結果");
			}
			$(".globalWrapper").addClass("show-mobile-PLP-menu");

			$(".PLP-Filter .checkbox-label input[type='checkbox']").click(function(){
				if($(this).parent().parent().parent().find("input[type='checkbox']").length>0){
					if($(this).parent().parent().parent().find("input[type='checkbox']:checked").length>0){
						$(this).parent().parent().parent().parent().find(".clear-all").show();
					}else{
						$(this).parent().parent().parent().parent().find(".clear-all").hide();
					}
				} 

				if($(this).prop("checked")){
					$(this).parent().parent().find("span a").addClass("active");
				}else{
					$(this).parent().parent().find("span a").removeClass("active");
				} 
				PLP_Filter3();
			})
			function PLP_Filter3(){
				$(".PLP-Filter3 ul").html('');

				$(".PLP-Filter .checkbox-label input[type='checkbox']:checked").each(function(){
					$(".PLP-Filter3").show();
					$(".PLP-Filter3 ul").append('<li data-value="'+$(this).data('value')+'">'+$(this).data('value')+' <i class="icon-delete"></i></li>');
				})
				$('.PLP .PLP_content .contentRight .brand-filter .brand-name:not(.title).active').each(function(){
					$('.PLP-Filter3').show();
					$('.PLP-Filter3 ul').show();
					$(".PLP-Filter3 ul").append('<li data-value="'+$(this).data('value')+'">'+$(this).data('value')+' <i class="icon-delete"></i></li>');
				})
				$('.PLP .PLP_content .contentRight .other-filter .other-selection:not(.title).active').each(function(){
					$('.PLP-Filter3').show();
					$('.PLP-Filter3 ul').show();
					$(".PLP-Filter3 ul").append('<li data-value="'+$(this).data('value')+'">'+$(this).data('value')+' <i class="icon-delete"></i></li>');
				})
				if($('.PLP-Filter3 ul').length > 0){
					$(".PLP-Filter3 ul").append('<li class="clear-all" data-value="clear"><span class="clear">清除所有</span></li>');	
				}
				if($(window).width() < 980){
					if($('.PLP .PLP_content .contentRight .PLP-Filter3 ul li').length > 0){
						$('.PLP .PLP_content .contentRight .PLP-Filter3 .clear').show();
					}else{
						$('.PLP .PLP_content .contentRight .PLP-Filter3 .clear').hide();
					}
				}
			}
			$('.PLP .PLP_content .contentRight .brand-filter .brand-name:not(.title)').on('click',function(){
				$(this).addClass('active');
				PLP_Filter3();
			})
			$('.PLP .PLP_content .contentRight .other-filter .other-selection:not(.title)').on('click',function(){
				$(this).addClass('active');
				PLP_Filter3();
			})
			$("body").on("click",".PLP-Filter3 ul li .icon-delete",function(){
				var value=$(this).parent().data("value");
				$(this).parent().remove();
				$('.PLP-Filter .checkbox-label input[data-value="'+value+'"][type="checkbox"]:checked').prop("checked",false);
				$('input[data-value="'+value+'"][type="checkbox"]').parent().parent().find("span a").removeClass("active");
				$('.PLP .PLP_content .contentRight .brand-filter .brand-name[data-value="'+value+'"]').removeClass("active");
				$('.PLP .PLP_content .contentRight .other-filter .other-selection[data-value="'+value+'"]').removeClass("active");
				if($('input[data-value="'+value+'"][type="checkbox"]').parent().parent().parent().find("input[type='checkbox']:checked").length<=0){
					$('input[data-value="'+value+'"][type="checkbox"]').parent().parent().parent().parent().find(".clear-all").hide();
				}
				if($('.PLP-Filter3 ul li').length < 1){
					$('.PLP-Filter3').hide();
				}

			})
			$("body").on("click",".PLP-Filter3 span.clear",function(){
				$(this).parent().find('li').remove();
				$('.PLP-Filter .checkbox-label input[type="checkbox"]:checked').prop("checked",false);
				$('input[type="checkbox"]').parent().parent().find("span a").removeClass("active");
				$('.PLP .PLP_content .contentRight .brand-filter .brand-name').removeClass("active");
				$('.PLP .PLP_content .contentRight .other-filter .other-selection').removeClass("active");
				$('.PLP .PLP_content .contentRight .brand-filter').removeClass("active");
				if($('input[type="checkbox"]').parent().parent().parent().find("input[type='checkbox']:checked").length<=0){
					$('input[type="checkbox"]').parent().parent().parent().parent().find(".clear-all").hide();
				}
				$(this).parent().parent().hide();
			})
			
			$(".PLP-Filter .show-all").click(function(){
				$(this).parent().parent().toggleClass("show-h2-box");
			})
			$(".PLP-Filter .clear-all").click(function(){
				$(this).parent().parent().find("input[type='checkbox']").prop("checked",false);
				$(this).parent().parent().find("span a").removeClass("active");
				$(this).hide();
				PLP_Filter3();
			})
			$('.PLP .PLP_content .contentLeft .filter-title .clear').click(function(){
				$('.PLP .PLP_content.show_filter_by .contentLeft .PLP-Filter .brand-filter .selected').html("");
				$(".PLP-Filter input[type='checkbox']").prop("checked",false);
				$(".PLP-Filter .price input").val(0);
				$(".PLP-Filter .clear-all").hide();
				PLP_Filter3();
			})
			$(".filter-btn .green-empty-btn").click(function(){
				$(".PLP_content").removeClass("show_filter_by");
			})
			$(".PLP-Filter .reset").click(function(){
				$(this).parent().parent().find("input").val(0);
			})	
			$('.PLP .PLP_content.show_filter_by .contentLeft .PLP-Filter .other-filter i').on('click',function(){
				$(this).parent().find('.other-selection-list').slideToggle();
				$(this).parent().toggleClass('active');
			})
			$(".PLP-Filter .box-head i").click(function(){
				$(this).parent().parent().find(".box-content").slideToggle();
				$(this).parent().toggleClass("active");
			})

			$(".PLP-Filter .box-head").click(function(){
				if($(this).width()<769){
					$(this).parent().find(".box-content").show();
				}
				if($(this).parent().hasClass("level3")){
					$(this).parent().parent().addClass("open-level3");
				}	
			})
			$(".PLP-Filter .h2 span").click(function(){
				$(this).parent().find("input").click();
			})
			$(".box-content h1").click(function(){
				$(".box-content h1").removeClass("active");
				$(this).addClass("active");
			})

			$(".box-content .color-option span").click(function(){
				$(".box-content .color-option span").removeClass("active");
				$(this).addClass("active");
			})

			$(".filter-title .icon-close").click(function(){
				$(".PLP_content").removeClass("show_filter_by");
			})
			$(".Filter_by_m").click(function(){
				$(".PLP_content").addClass("show_filter_by");
			})
			$(".Filter2-right .list-style").click(function(){
				$(this).toggleClass("active");
				$(".bottomProductSales").toggleClass("list-row");
			})
			$(".PLP-Filter2 .page .prev").click(function(){
				var val=parseInt($(this).parent().find(".s1").text());
				if(val>1){
					val=val-1;
				}
				if(val==1){
					$(this).removeClass("active");
				}else{
					$(".PLP-Filter2 .page .next").addClass("active");
				}
				$(this).parent().find(".s1").text(val);
			})
			$(".PLP-Filter2 .page .next").click(function(){
				var val=parseInt($(this).parent().find(".s1").text());
				var val2=parseInt($(this).parent().find(".s2").text());
				if(val<val2){
					val=val+1;
				}
				if(val==val2){
					$(this).removeClass("active");
				}else{
					$(".PLP-Filter2 .page .prev").addClass("active");
				}
				$(this).parent().find(".s1").text(val);
			})

			$('.brand-search input').bind('keyup',function(){
				var filterKey = $(this).val().toLowerCase();

				$('.brand-search-list .h2').each(function( index ) {
					var value = $(this).find('input').attr('data-value').toLowerCase();

					if(value.indexOf(filterKey) > -1){
						$(this).show();
					}else{
						$(this).hide();
					}
				});
			});

			$(".brand-search input").on("input",function(){
		        $(".brand-search input").parent().addClass("show-delete");
		    })
		    $(".brand-search .icon-delete").click(function(){
		        $(".brand-search input").val("").focus();
		        $(this).parent().removeClass("show-delete");
		        $(".brand-search input").trigger("keyup");
		    })
		    //To expand brand list
			$('.PLP .PLP_content .contentRight .brand-filter i').on('click',function(){
				$(this).parent().toggleClass('active');
			})

		    if($(window).innerWidth()<963){
				$(".PLP .PLP_content .contentLeft .PLP-Filter .box.level3 .box-content").each(function(){
					$(this).width($(window).width()-30);
				})
				$('.PLP-Filter.open-level3').prepend($('.other-filter'));
				$('.PLP-Filter.open-level3').prepend($('.brand-filter'));
				
				$('.PLP .PLP_content .contentLeft .PLP-Filter .other-filter i').on('click',function(){
					$(this).parent().find('.other-selection-list').slideToggle();
					$(this).parent().toggleClass('active');
				})
				$('.PLP .PLP_content .contentLeft .PLP-Filter .brand-filter i').on('click',function(){
					$(this).hide();
					$('.PLP .PLP_content .contentLeft').addClass('show-brand');
					$('.PLP .PLP_content.show_filter_by .contentLeft .PLP-Filter .box').hide();
					$('.PLP .PLP_content.show_filter_by .contentLeft .PLP-Filter .not-brand').hide();
					$('.PLP .PLP_content.show_filter_by .contentLeft .filter-title .clear').hide();
					$('.PLP .PLP_content.show_filter_by .contentLeft .filter-btn').hide();
					$('.PLP .PLP_content.show_filter_by .contentLeft .filter-title span').html('篩選 - 品牌');
					$('.PLP .PLP_content .contentLeft .filter-title').show();
					$(this).parent().show();
					$(this).parent().find('.brand-name.title').hide();
					$(this).parent().find('.all-brand-list').show();
				})
				
				$('.filter-title i.icon-back-arrow').on('click',function(){
					$('.PLP .PLP_content.show_filter_by .contentLeft .PLP-Filter .brand-filter .selected').html("");
					$('.PLP .PLP_content .contentLeft .PLP-Filter .brand-filter .all-brand-list .brand-name .checkbox-label input[type="checkbox"]:checked').each(function(){
						if($('.brand-filter .selected').length){
							$('.brand-filter .selected').append('<span data-value="'+$(this).data('value')+'">'+$(this).data('value')+'</span>');
						}else{
							$('.brand-filter .selected').append(',&nbsp'+'<span data-value="'+$(this).data('value')+'">'+$(this).data('value')+'</span>');
						}
						
					})
					$('.PLP .PLP_content .contentLeft').removeClass('show-brand');
					$('.PLP .PLP_content.show_filter_by .contentLeft .PLP-Filter .box').show();
					$('.PLP .PLP_content.show_filter_by .contentLeft .PLP-Filter .not-brand').show();
					$('.PLP .PLP_content.show_filter_by .contentLeft .filter-title .clear').show();
					$('.PLP .PLP_content.show_filter_by .contentLeft .filter-btn').show();
					$('.PLP .PLP_content.show_filter_by .contentLeft .filter-title span').html('篩選');
					$('.PLP .PLP_content .contentLeft .filter-title').show();
					$('.PLP .PLP_content .contentLeft .brand-filter .brand-name.title').show();
					$('.PLP .PLP_content.show_filter_by .contentLeft .PLP-Filter .brand-filter i').show();
					$('.PLP .PLP_content .contentLeft .brand-filter .all-brand-list').hide();
				})
			}
			
			var windowWidth=$(window).width();
			$(window).resize(function(){
				if(windowWidth<980&&$(window).width()>=980){
					location.reload(true);
				}
				if(windowWidth>=980&&$(window).width()<980){
					location.reload(true);
				}
				windowWidth=$(window).width();
			})

		})
