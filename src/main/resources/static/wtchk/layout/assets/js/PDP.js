$(function(){
	/* Scroll Nav Bar */
	$('.PDP .PDP_Menu .PDP_Menu_Item').click(function (e) {
        e.preventDefault();
        var dest = $(this).find('a').attr('href');
        var headerHeight = ($(window).width() >= 980) ? $('header').height() : 
                isScrolledIntoView($('header .headerLogoBar'))? $('header .headerLogoBar').height() : 0;
        $('html, body').animate({
            scrollTop: $(dest).offset().top - headerHeight - 15 - $('.PDP .PDP_Menu .PDP_Menu_Item').height()
        }, 500);
    });

    /* Sticky Scrollable Sticky Bar */
    var lastScrollTop = 0;


    $(window).scroll(function(){
    	var section = $('.PDP_Menu_Top');
	    var headerHeight = ($(window).width() > 979) ? $('header').height() : 
	            isScrolledIntoView($('header .headerLogoBar'))? $('header .headerLogoBar').height() : 0;
	    var topBuffer = headerHeight + $('.PDP_Menu').height(); //$(window).height() * 0.1;
	    var bottomBuffer = $(window).height() * 0.3;
	    var docViewTop = $(window).scrollTop() + (topBuffer);
	    var secTop = section.offset().top;
	    var st = $(this).scrollTop();
	    var secBottom = $('footer').offset().top;
	    var tab1 = $('#menu-overviews').position().left;
		var tab2 = $('#menu-details').position().left;
		var tab3 = $('#menu-offers').position().left;
		var tab4 = $('#menu-reviews').position().left;

		if( $(window).width() > 979 ){
			if( st > lastScrollTop ){
		    	//downscroll
		    		if ((secTop <= docViewTop) && (secBottom >= docViewTop)) {
				        $('#tabToScroll').css('position', 'fixed').css('left','0').css('top', headerHeight).css('border-bottom', '1px solid #dfdfdf');
				        $('.PDP_Menu').css('border-width', '0');
				    } else {
				        $('#tabToScroll').css('top', '0').delay(1000).css('position', '').css('border-bottom', '');
				        $('.PDP_Menu').css('border', '1px solid #dfdfdf');
				    }
				     
			    }else{
			    	//upscroll
			    	if ((secTop <= docViewTop) && (secBottom >= docViewTop)) {
					        $('#tabToScroll').css('position', 'fixed').css('left','0').css('top', headerHeight+40).css('border-bottom', '1px solid #dfdfdf');
					        $('.PDP_Menu').css('border-width', '0');
					    } else {
					        $('#tabToScroll').css('top', '0').delay(1000).css('position', '').css('border-bottom', '');
					        $('.PDP_Menu').css('border', '1px solid #dfdfdf');
					    }
			    }
			    lastScrollTop = st;
		}else{
			if( st > lastScrollTop ){
		    	//downscroll
		    		if ((secTop <= docViewTop) && (secBottom >= docViewTop)) {
		    			$('.PDP_Menu_Top').css('position','fixed').css('left','0').css('top', headerHeight+55);
				        $('#tabToScroll').css('position', 'fixed').css('left','0').css('top', headerHeight+55);
				        $('.PDP_Menu').css('border-width', '0');
				    } else {
				    	$('.PDP_Menu_Top').css('top', headerHeight+55).delay(1000).css('position', 'fixed');
				        $('#tabToScroll').css('top', headerHeight+55).delay(1000).css('position', 'fixed');
				        $('.PDP_Menu').css('border', '1px solid #dfdfdf');
				    }
				     
			    }else{
			    	//upscroll
			    	if ((secTop <= docViewTop) && (secBottom >= docViewTop)) {
					        $('.PDP_Menu_Top').css('position','fixed').css('left','0').css('top', headerHeight+55);
				        	$('#tabToScroll').css('position', 'fixed').css('left','0').css('top', headerHeight+55);
				        	$('.PDP_Menu').css('border-width', '0');
					    } else {
					        $('.PDP_Menu_Top').css('position','fixed').css('left','0').css('top', headerHeight+55);
				        	$('#tabToScroll').css('position', 'fixed').css('left','0').css('top', headerHeight+55);
					        $('.PDP_Menu').css('border', '1px solid #dfdfdf');
					    }
			    }
			    lastScrollTop = st;

		}
			    // for TabToScroll section nav bar active tab
				    if (isScrolledIntoView($('#tab-overviews'), topBuffer, bottomBuffer)) {
				        $('.PDP .PDPLeftRightBox .PDPLeftBox .PDP_Menu .active_line').css('left', tab1);
				        $('.PDP .PDPLeftRightBox .PDPLeftBox .PDP_Menu_Top ul .PDP_Menu_Item').removeClass('active');
				        $('#menu-overviews').addClass('active');
				    } else if (isScrolledIntoView($('#tab-details'), topBuffer, bottomBuffer)) {
				        $('.PDP .PDPLeftRightBox .PDPLeftBox .PDP_Menu .active_line').css('left', tab2);
				        $('.PDP .PDPLeftRightBox .PDPLeftBox .PDP_Menu_Top ul .PDP_Menu_Item').removeClass('active');
				        $('#menu-details').addClass('active');
				    } else if (isScrolledIntoView($('#tab-offers'), topBuffer, bottomBuffer)) {
				    	$('.PDP .PDPLeftRightBox .PDPLeftBox .PDP_Menu .active_line').css('left', tab3);
				    	$('.PDP .PDPLeftRightBox .PDPLeftBox .PDP_Menu_Top ul .PDP_Menu_Item').removeClass('active');
				        $('#menu-offers').addClass('active');
				    } else if (isScrolledIntoView($('#tab-reviews'), topBuffer, bottomBuffer)) {
				    	$('.PDP .PDPLeftRightBox .PDPLeftBox .PDP_Menu .active_line').css('left', tab4);
				    	$('.PDP .PDPLeftRightBox .PDPLeftBox .PDP_Menu_Top ul .PDP_Menu_Item').removeClass('active');
				        $('#menu-reviews').addClass('active');
				    }

    })
    

	/* PDP Thumbnail Swiper*/
	var PDPThumbnailSwiper = new Swiper('#PDP-thumbnail-container',{
        slidesPerView : 5,
        spaceBetween : 10,
        prevButton:'#pdp-thumbnail-prev',
        nextButton:'#pdp-thumbnail-next',
    })

	$(".globalWrapper").addClass("show-mobile-menu-3");

	$(".Product_Description .show_more").click(function(){
		$(this).parent().toggleClass("show_all");
	})

	$(".Promotions .tab-list .tab").each(function(){
		if($(this).index()>2){
			$(this).hide();
		}
	})
	$(".reviewStar p, .reviewStar span").click(function(){
		$("html,body").animate({scrollTop: $(".Customer_Reviews").offset().top-86}, 500);
	})

	$(".Reviews-form .right").on("click",".icon-star02",function(){
		$(this).removeClass("icon-star02").addClass("icon-star01").prevAll().removeClass("icon-star02").addClass("icon-star01");
	})

	$(".Reviews-form .right").on("click",".icon-star01",function(){
		$(this).nextAll().removeClass("icon-star01").addClass("icon-star02");
	})

	$("#Reviews_conment-submit").click(function(){
		if($("#Reviews_name").val().trim().length==0){
			$("#Reviews_name").addClass("error");
		}
		if($("#Reviews_conment").val().trim().length==0){
			$("#Reviews_conment").addClass("error");
		}
		$(".Reviews-form input , .Reviews-form textarea").each(function(){
			if($(this).hasClass("error")){
				$("#"+$(this).attr("id")+"-msg").removeClass("hide");
			}
		})
	})

	$(".Write_a_review").not('.disabled').click(function(){
		$(".Reviews-form").removeClass("hide");
	})

	$(".Promotions .tab-list .tab").click(function(){
		var id=$(this).data("id");
		$("html,body").animate({scrollTop: $("#tab-offers").offset().top-160}, 500);
		$(".Promotion-part").addClass("show_all");
		$(".Promotion-part ul li").removeClass("active");
		$(".Promotion-part ul li[data-id='"+id+"']").addClass("active");
	})
	$(".Promotions .tab-list .show_more").click(function(){
		$(this).parent().find(".tab").show();
		$(this).hide();
	})

	$('.PDP_AddToBag_Variants .options .Options_list span').click(function(){
		$(".Options_list span").removeClass("active");
        $(this).addClass("active");
	})
	$(".color-list p, .Volume_Options .Options_list span").click(function(){
		if ($(this).closest(".color-list").length) {
                    $(".color-list p").removeClass("active");
                    
                } else if ($(this).closest(".Volume_Options").length) {
                    $(".Volume_Options .Options_list span").removeClass("active");
                }
		$(this).addClass("active");

		if($(this).hasClass('outOfStock') || $(this).hasClass('disabled')){
			if($(window).width()<768){
                            $(".ADD_TO_BAG.notify").css('left','60px');	
			} else {
                            $(".ADD_TO_BAG.notify").css('left','');	
                        }
			$('.PDP .PDPLeftRightBox .PDPLeftBox .PDPImgBox .PDPImgInfo .buyBar .count').hide();
                        $(".ADD_TO_BAG.notify").css('margin-left','0');
			$(".ADD_TO_BAG.purchase").addClass("hide");
			$(".ADD_TO_BAG.notify").removeClass("hide");
		} else {
                        $('.PDP .PDPLeftRightBox .PDPLeftBox .PDPImgBox .PDPImgInfo .buyBar .count').show();
                        $(".ADD_TO_BAG.notify").addClass("hide");
			$(".ADD_TO_BAG.purchase").removeClass("hide");
                }
	})
	$(".PDP .Delivery_Options_seize").height($(".PDP .seize_box").height());
	$(window).resize(function(){
		$(".PDP .Delivery_Options_seize").height($(".PDP .seize_box").height());
	})
	
	$(".buyBar .count").on("click",".add",function(){
		var value=$(this).parent().find("input").val();
		if(value<99){
			value++;
			$(this).parent().find("input").val(value);
		}
		if(value<99){
			$(".buyBar .count .sub").addClass("active");
		}else{
			$(this).removeClass("active");
		}
	});
	$(".buyBar .count").on("click",".sub",function(){
		var value=$(this).parent().find("input").val();
		if(value>1){
			value--;
			$(this).parent().find("input").val(value);
		}
		if(value>1){
			$(".buyBar .count .add").addClass("active");
		}else{
			$(this).removeClass("active");
		}
	});	
	$('.add_case_offer').click(function(){
		$('.add_case_offer_popup .top .num').text($('this').data('value'));
		$(".add_case_offer_popup").stop().fadeIn().delay(2000).fadeOut();
	})
	$(".ADD_TO_BAG").click(function(){
		if($(window).width() > 767){
			if(!$(this).hasClass("notify")){
	            $(".ADD_TO_BAG-popup .num").text($(".buyBar .count input").val());
	        }else if($(this).hasClass("notify")){
	        	$(this).addClass('active');
	        	$('.ADD_TO_BAG.notify').unbind("click");
	        }
			$(this).find(".ADD_TO_BAG-popup").stop().fadeIn().delay(2000).fadeOut();	
		}else{
			if(!$(this).hasClass("notify")){
	            if($(this).hasClass("variants")){
	                $(".ADD_TO_BAG-popup .num").text($(".buyBar .count input").val());
	                $(this).find(".ADD_TO_BAG-popup").stop().fadeIn().delay(2000).fadeOut();
	            }else{
	                $('.PDP .overlay_shadow').css('opacity','1');
	                $('.PDP .PDP_AddToBag_Variants').addClass('active');
	                $(this).addClass('variants');
	                $('html').addClass('overlay-open');
	            }
	       }else if($(this).hasClass("notify")){
	           $(this).addClass('active');
	           $('.ADD_TO_BAG.notify').unbind("click");
	           $(this).find(".ADD_TO_BAG-popup").stop().fadeIn().delay(2000).fadeOut();
	       }
		}
		
	})
	$("#open-Share_with_Friends-popup").click(function(){
		popup_overlay($(this));
		$(".Share_with_Friends-popup").show();
	})
	$(".Share_with_Friends-popup .icon-close").click(function(){
		close_popup_overlay();
		$(".Share_with_Friends-popup").hide();
	})
	$(".buyBar select").change(function(){
		$(".buyBar input").val($(".buyBar select").val());
	})
	$(".Product_Description .title p").click(function(){
		$(this).toggleClass("active");
		$(this).parent().parent().find('.drop-box').slideToggle();
	})
	if($(window).width()<980){
		
	}else{
		$("#PLP-swiper-container .swiper-slide .swiper-img").each(function(){
			$(this).blowup({
				background : "#fff"
			});
		})
	}
	$(".Redemption_Offers .Show_more_offers a").click(function(){
		$(".Redemption_Offers").toggleClass("show_all");
	})
	$(".shareBtn").click(function() {
		FB.ui({
			method: 'share',
			display: 'popup',
			href: 'https://www.facebook.com/sharer/sharer.php?u=http://devsvr6.mtel.ws/WatsonsTW/html/PDP.html',
		}, function(response){});
	})
	var evaluate_list_click_time=0;
	$(".Customer_Reviews-box .Show_more").click(function(){
		if($(this).hasClass("show-all")){
			$(".evaluate_list li:gt(1)").remove();
			$(this).removeClass("show-all");
			evaluate_list_click_time==0;
		}else{
			var html='';
			for(var i=0; i<10; i++){
				html+='<li>'
				html+=' <div class="rating">'
				html+='  <i class="icon-star01"></i>'
				html+='  <i class="icon-star01"></i>'
				html+='  <i class="icon-star01"></i>'
				html+='  <i class="icon-star02"></i>'
				html+='  <i class="icon-star02"></i>'
				html+='  <span class="time">more than 1 year</span>'
				html+=' </div>'
				html+='	<div class="User_name">'
				html+='		User name '+i
				html+='	</div>'
				html+='	<div class="content">'
				html+='		Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget diol. '
				html+='Aenean massa. Cum sociis natoque penatibus.'
				html+='	</div>'
				html+='</li>'
			}
			$(".Customer_Reviews-box .evaluate_list").append(html);
			if(evaluate_list_click_time>=1)
			$(this).addClass("show-all");
			evaluate_list_click_time++;
		}
	})
	$(".Add_to_wish_list , .Add_to_Wishlist").click(function(){
		$("#Add_to_wish_list-popup").show();
		popup_overlay($(this));
		$("#Add_to_wish_list-popup .input input").val("");
	})
	$("#Add_to_wish_list-popup .icon-close").click(function(e){
		e.stopPropagation();
		$("#Add_to_wish_list-popup").hide();
		close_popup_overlay();
	})
	$("#Add_to_wish_list-popup select").on("change",function(e){
		e.stopPropagation();
		if($(this).val()=='newOne'){
			if($(this).find("option").length>10){
				$("#Add_to_wish_list-popup .add-warning").show();
				$("#Add_to_wish_list-popup .reset-bootstrp-select").addClass("red");
			}else{
				$("#Add_to_wish_list-popup .input").show();
			}
		}else{
			$("#Add_to_wish_list-popup .input").hide();
			$("#Add_to_wish_list-popup .add-warning").hide();
			$("#Add_to_wish_list-popup .reset-bootstrp-select").removeClass("red");
		}
	})
	$("#Add_to_wish_list-popup .green-btn").click(function(e){
		e.stopPropagation();
		var val=$(this).parent().find(".input input").val();
		if($("#Add_to_wish_list-popup select").find("option").length>10&&$("#Add_to_wish_list-popup select").val()=='newOne'){
			$("#Add_to_wish_list-popup .add-warning").show();
			$("#Add_to_wish_list-popup .reset-bootstrp-select").addClass("red");
			$("#Add_to_wish_list-popup .input").hide();
		}else{
			if($.trim(val)!=""&&$("#Add_to_wish_list-popup select").val()=='newOne'){
				$("#Add_to_wish_list-popup select").append("<option>"+val+"</option>");
				$('#Add_to_wish_list-popup .selectpicker').selectpicker('refresh');
				$(".Add_to_wish_list , .Add_to_Wishlist").addClass("active");
				$("#Add_to_wish_list-popup").hide();
				close_popup_overlay();
			}else{
				$(".Add_to_wish_list , .Add_to_Wishlist").addClass("active");
				$("#Add_to_wish_list-popup").hide();
				close_popup_overlay();
			}
		}
	})
	
		
	var PLPmySwiper = new Swiper('#PLP-swiper-container', {
		simulateTouch : false,
		effect : 'fade',
		virtualTranslate : true,
		pagination : '.productMainImage .swiper-pagination',
		onSlideChangeEnd: function(swiper){
			
	    },
	    onInit:function(){

	    	if($(window).width()<980){
	    		var oldX=0,oldY=0;
				
                $("body").on('click', "#PLP-swiper-container .swiper-slide .swiper-img", function(ev){
                	var that=$(this);
                	setTimeout(function(){

                		that.parent().find(".panzoom-elements").removeClass("hide");
						that.parent().find(".panzoom-elements img").panzoom({
		                    startTransform: 'scale(2)',
		                    minScale: 1,
		                    maxScale: 2,
		                    contain: 'automatic'
		                })
		                .on('panzoompan', function(e, panzoom, x, y) {
		                	console.log(Math.abs(x-oldX)+','+Math.abs(y-oldY));

		                	if(Math.abs(x-oldX) < 5 && Math.abs(y-oldY) < 5 ){
		                		that.parent().find(".panzoom-elements img").panzoom("destroy");
								that.parent().find(".panzoom-elements").addClass("hide");
		                	}
		                	setTimeout(function(){
			                	oldX = x;
			                	oldY = y;
		                	},500);
						})
						.on('panzoomend', function(e, panzoom, matrix, changed) {
		                	if (changed) {
						    	// deal with drags or touch moves
							} else {
								that.parent().find(".panzoom-elements img").panzoom("destroy");
								that.parent().find(".panzoom-elements").addClass("hide");
							}
						});
                	},2);
						
				})
			}
	    }
	})
	$('.popup-general .icon-close').click(function(){
		$('.popup-general').hide();
                close_popup_overlay();
	})
	$(".productImageSelector ol li").click(function(){
		$(".productImageSelector ol li").removeClass("active");
		$(this).addClass("active");
		PLPmySwiper.slideTo($(this).index());
	})
	if($(window).width() < 768){
		$('.PDP .PDPLeftRightBox .PDPLeftBox .PDPImgBox .PDPImgInfo .Color_Options').click(function(){		
			$('.PDP .overlay_shadow').css('opacity','1');
			$('.PDP .PDP_AddToBag_Variants').addClass('active');
				$('html').addClass('overlay-open');
		})
		$('.PDP .PDPLeftRightBox .PDPLeftBox .PDPImgBox .PDPImgInfo .subscription').click(function(){		
			$('.PDP .overlay_shadow').css('opacity','1');
			$('.PDP .PDP_AddToBag_Variants').addClass('active');
				$('html').addClass('overlay-open');
		})
	}
	$(".PDP .PDP_AddToBag_Variants .color-list p").click(function(){
		var value = $(this).attr("data-id");
		$('.PDP .PDP_AddToBag_Variants .product_details .right .variants .color').html(value);
		$(".PDP .PDP_AddToBag_Variants .color-list p").removeClass("active");
		$(this).addClass("active");
	})
	$('.PDP .PDP_AddToBag_Variants .close-btn').click(function(){
		$('.PDP .PDP_AddToBag_Variants').removeClass('active');
		$('.PDP .ADD_TO_BAG').removeClass('variants');
		$('.PDP .overlay_shadow').css('opacity','0');
		$('html').removeClass('overlay-open');
	})


        //general
        $('.popup-general .icon-close, .popup-general .background').on('click', function(){ 
        	$('.popup-general').hide(); 
        	$('html').removeClass('overlay-open');
        });
        if($(window).width()<768){
        	$('.PDP.Subscription .PDP_AddToBag_Variants .options.subscription .subOptions:nth-of-type(1) input').prop("checked","checked");
        }
        
        
        /* Watsons Go Popup */
        $('.PDP .Delivery_Options .Options.first').on('click',function(){ openPopupGeneral('#store-pick-popup'); })
        $('.PDP i.icon-delivery_watsonsgo').parent().on('click', function(){ openPopupGeneral('#watsons-go-popup'); });
        $('.PDP i.icon-delivery_watsonsdelivery').parent().on('click', function(){ openPopupGeneral('#home-delivery-popup'); });
        $('.PDP i.icon-delivery_international').parent().on('click', function(){ openPopupGeneral('#overseas-shipping-popup'); });

	/*Subscription*/
    $('.PDP .PDPLeftRightBox .PDPLeftBox .PDPImgBox .PDPImgInfo .subscription input:radio[name="subscription_method"]').change(function(){
    	if($(this).hasClass('sub-input')){
    		$(this).parent().parent().parent().addClass('active');
        	$('.PDP .PDPLeftRightBox .PDPLeftBox .PDPImgBox .PDPImgInfo .buyBar .ADD_TO_BAG').hide();
        	$('.PDP .PDPLeftRightBox .PDPLeftBox .PDPImgBox .PDPImgInfo .buyBar .subscribe_btn').show();
        	$('.PDP .PDPLeftRightBox .PDPLeftBox .PDP_Menu ul #menu-offers').hide();
        	$('.PDP .PDPLeftRightBox .PDPLeftBox #tab-offers').hide();

    	}else{
    		$('.PDP .PDPLeftRightBox .PDPLeftBox .PDPImgBox .PDPImgInfo .subscription .subOptions:last-child').removeClass('active');
        	$('.PDP .PDPLeftRightBox .PDPLeftBox .PDPImgBox .PDPImgInfo .buyBar .ADD_TO_BAG').show();
        	$('.PDP .PDPLeftRightBox .PDPLeftBox .PDPImgBox .PDPImgInfo .buyBar .subscribe_btn').hide();
        	$('.PDP .PDPLeftRightBox .PDPLeftBox .PDP_Menu ul #menu-offers').show();
        	$('.PDP .PDPLeftRightBox .PDPLeftBox #tab-offers').show();
    	}
    })
	$('.PDP_AddToBag_Variants .checkbox-label input:radio[name="subscription_method"]').change(function(){
		if($(this).hasClass('sub-input')){
			$('.PDP_AddToBag_Variants').toggleClass('show-subscription');
			$('.PDP .PDPLeftRightBox .PDPLeftBox .PDP_Menu ul #menu-offers').hide();
        	$('.PDP .PDPLeftRightBox .PDPLeftBox #tab-offers').hide();
		}else{
			$('.PDP_AddToBag_Variants').removeClass('show-subscription');
			$('.PDP .PDPLeftRightBox .PDPLeftBox .PDP_Menu ul #menu-offers').show();
        	$('.PDP .PDPLeftRightBox .PDPLeftBox #tab-offers').show();
		}
	})
	$('.PDP.Subscription .PDP_AddToBag_Variants .options.subscription .subOptions .option .note').click(function(){
		$('.PDP_AddToBag_Variants').removeClass('active');
		$('.PDP .overlay_shadow').css('opacity','0');
		$('#subscription-example-popup').show();
	})
	$('.PDP .PDPLeftRightBox .PDPLeftBox .PDPImgBox .PDPImgInfo .subscription .subOptions span.note').click(function(){
		$('#subscription-example-popup').show();	
	})
	/* PreOrder */
	$('.PDP .PDPLeftRightBox .PDPLeftBox .PDPImgBox .PDPImgInfo .PreOrder i').click(function(){
		$('#pre-order-popup').show();
	})
   
})

function isScrolledIntoView(elem, topBuffer, bottomBuffer) {
    var $elem = elem;
    var $window = $(window);

    var topB = (jQuery.type(topBuffer) === 'undefined') ? 0 : topBuffer;
    var bottomB = (jQuery.type(bottomBuffer) === 'undefined') ? 0 : bottomBuffer;

    var docViewTop = $window.scrollTop() + topB;
    var docViewBottom = docViewTop + $window.height() - bottomB;

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

function openPopupGeneral(targetPopup){
    $('.popup-general').hide();
    $(targetPopup).show();
    $('html').addClass('overlay-open');
}