$(function() {
    $(".globalWrapper").addClass("show-mobile-menu-3");

    $(".Product_Description .show_more").click(function() {
        $(this).parent().toggleClass("show_all");
    })

    $(".Promotions .tab-list .tab").each(function() {
        if ($(this).index() > 2) {
            $(this).hide();
        }
    })
    $(".reviewStar span").click(function() {
        $("html,body").animate({ scrollTop: $(".Customer_Reviews").offset().top - 86 }, 300);
    })

    $(".Reviews-form .right").on("click", ".icon-star02", function() {
        $(this).removeClass("icon-star02").addClass("icon-star01").prevAll().removeClass("icon-star02").addClass("icon-star01");
    })

    $(".Reviews-form .right").on("click", ".icon-star01", function() {
        $(this).nextAll().removeClass("icon-star01").addClass("icon-star02");
    })

    $("#Reviews_conment-submit").click(function() {
        if ($("#Reviews_name").val().trim().length == 0) {
            $("#Reviews_name").addClass("error");
        }
        if ($("#Reviews_conment").val().trim().length == 0) {
            $("#Reviews_conment").addClass("error");
        }
        $(".Reviews-form input , .Reviews-form textarea").each(function() {
            if ($(this).hasClass("error")) {
                $("#" + $(this).attr("id") + "-msg").removeClass("hide");
            }
        })
    })

    $(".Write_a_review").click(function() {
        $(".Reviews-form").removeClass("hide");
    })

    $(".Promotions .tab-list .tab").click(function() {
        var id = $(this).data("id");
        $("html,body").animate({ scrollTop: $(".Promotion-part").offset().top - 86 }, 300);
        $(".Promotion-part").addClass("show_all");
        $(".Promotion-part ul li").removeClass("active");
        $(".Promotion-part ul li[data-id='" + id + "']").addClass("active");
    })
    $(".Promotions .tab-list .show_more").click(function() {
        $(this).parent().find(".tab").show();
        $(this).hide();
    })

    $(".Delivery_Options .to-Payment-and-Delivery , .Installment_Plan p a").click(function() {
        $("html,body").animate({ scrollTop: $(".Payment-and-Delivery-part").offset().top - 86 }, 300);
    })


    $(".Color_Options .color-list p").click(function() {
        $(".Color_Options .color-list p").removeClass("active");
        $(this).addClass("active");
    })
    $(".Volume_Options .Options_list span").not(".disabled").click(function() {
        $(".Volume_Options .Options_list span").removeClass("active");
        $(this).addClass("active");
    })
    $(".PDP .Delivery_Options_seize").height($(".PDP .seize_box").height());
    $(window).resize(function() {
        $(".PDP .Delivery_Options_seize").height($(".PDP .seize_box").height());
    })

    $(".buyBar .count").on("click", ".add", function() {
        var value = $(this).parent().find("input").val();
        if (value < 99) {
            value++;
            $(this).parent().find("input").val(value);
        }
        if (value < 99) {
            $(".buyBar .count .sub").addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
    $(".buyBar .count").on("click", ".sub", function() {
        var value = $(this).parent().find("input").val();
        if (value > 1) {
            value--;
            $(this).parent().find("input").val(value);
        }
        if (value > 1) {
            $(".buyBar .count .add").addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
    $(".ADD_TO_BAG").click(function() {
        if(!$(this).hasClass("notify")){
            $(".ADD_TO_BAG-popup .num").text($(".buyBar .count input").val());
        }
        $(this).find(".ADD_TO_BAG-popup").stop().fadeIn().delay(2000).fadeOut();
    })
    $("#open-Share_with_Friends-popup").click(function() {
        popup_overlay($(this));
        $(".Share_with_Friends-popup").show();
    })
    $(".Share_with_Friends-popup .icon-close").click(function() {
        close_popup_overlay();
        $(".Share_with_Friends-popup").hide();
    })
    $(".buyBar select").change(function() {
        $(".buyBar input").val($(".buyBar select").val());
    })
    $(".Product_Description .title p").click(function() {
        $(this).toggleClass("active");
        $(this).parent().parent().find('.drop-box').slideToggle();
    })
    if ($(window).width() < 980) {

    } else {
        $("#PLP-swiper-container .swiper-slide .swiper-img").each(function() {
            $(this).blowup({
                background: "#fff"
            });
        })
    }
    $(".Redemption_Offers .Show_more_offers a").click(function() {
        $(".Redemption_Offers").toggleClass("show_all");
    })
    $(".shareBtn").click(function() {
        FB.ui({
            method: 'share',
            display: 'popup',
            href: 'https://www.facebook.com/sharer/sharer.php?u=http://devsvr6.mtel.ws/WatsonsTW/html/PDP.html',
        }, function(response) {});
    })
    var evaluate_list_click_time = 0;
    $(".Customer_Reviews-box .Show_more").click(function() {
        if ($(this).hasClass("show-all")) {
            $(".evaluate_list li:gt(1)").remove();
            $(this).removeClass("show-all");
            evaluate_list_click_time == 0;
        } else {
            var html = '';
            for (var i = 0; i < 10; i++) {
                html += '<li>'
                html += '	<div class="User_name">'
                html += '		User name ' + i
                html += '		<div class="time">2016/10/27</div>'
                html += '	</div>'
                html += '	<p>'
                html += '		<i class="icon-star01"></i>'
                html += '		<i class="icon-star01"></i>'
                html += '		<i class="icon-star01"></i>'
                html += '		<i class="icon-star02"></i>'
                html += '		<i class="icon-star02"></i>'
                html += '	</p>'
                html += '	<div class="content">'
                html += '		Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget diol. '
                html += 'Aenean massa. Cum sociis natoque penatibus.'
                html += '	</div>'
                html += '</li>'
            }
            $(".Customer_Reviews-box .evaluate_list").append(html);
            if (evaluate_list_click_time >= 1)
                $(this).addClass("show-all");
            evaluate_list_click_time++;
        }
    })
    $(".Add_to_wish_list , .Add_to_Wishlist").click(function() {
        $("#Add_to_wish_list-popup").show();
        popup_overlay($(this));
        $("#Add_to_wish_list-popup .input input").val("");
    })
    $("#Add_to_wish_list-popup .icon-close").click(function(e) {
        e.stopPropagation();
        $("#Add_to_wish_list-popup").hide();
        close_popup_overlay();
    })
    $("#Add_to_wish_list-popup select").on("change", function(e) {
        e.stopPropagation();
        if ($(this).val() == 'newOne') {
            if ($(this).find("option").length > 10) {
                $("#Add_to_wish_list-popup .add-warning").show();
                $("#Add_to_wish_list-popup .reset-bootstrp-select").addClass("red");
            } else {
                $("#Add_to_wish_list-popup .input").show();
            }
        } else {
            $("#Add_to_wish_list-popup .input").hide();
            $("#Add_to_wish_list-popup .add-warning").hide();
            $("#Add_to_wish_list-popup .reset-bootstrp-select").removeClass("red");
        }
    })
    $("#Add_to_wish_list-popup .green-btn").click(function(e) {
        e.stopPropagation();
        var val = $(this).parent().find(".input input").val();
        if ($("#Add_to_wish_list-popup select").find("option").length > 10 && $("#Add_to_wish_list-popup select").val() == 'newOne') {
            $("#Add_to_wish_list-popup .add-warning").show();
            $("#Add_to_wish_list-popup .reset-bootstrp-select").addClass("red");
            $("#Add_to_wish_list-popup .input").hide();
        } else {
            if ($.trim(val) != "" && $("#Add_to_wish_list-popup select").val() == 'newOne') {
                $("#Add_to_wish_list-popup select").append("<option>" + val + "</option>");
                $('#Add_to_wish_list-popup .selectpicker').selectpicker('refresh');
                $(".Add_to_wish_list , .Add_to_Wishlist").addClass("active");
                $("#Add_to_wish_list-popup").hide();
                close_popup_overlay();
            } else {
                $(".Add_to_wish_list , .Add_to_Wishlist").addClass("active");
                $("#Add_to_wish_list-popup").hide();
                close_popup_overlay();
            }
        }
    })






    var PLPmySwiper = new Swiper('#PLP-swiper-container', {
        simulateTouch: false,
        effect: 'fade',
        virtualTranslate: true,
        pagination: '.productMainImage .swiper-pagination',
        onSlideChangeEnd: function(swiper) {

        },
        onInit: function() {
            if ($(window).width() < 980) {

                $("body").on('click', "#PLP-swiper-container .swiper-slide .swiper-img", function(ev) {
                    var that = $(this);
                    setTimeout(function() {

                        that.parent().find(".panzoom-elements").removeClass("hide");
                        that.parent().find(".panzoom-elements img").panzoom({
                                startTransform: 'scale(2)',
                                minScale: 1,
                                maxScale: 2,
                                contain: 'automatic'
                            })
                            .on('panzoomend', function(e, panzoom, matrix, changed) {
                                if (changed) {
                                    // deal with drags or touch moves
                                } else {
                                    that.parent().find(".panzoom-elements img").panzoom("destroy");
                                    that.parent().find(".panzoom-elements").addClass("hide");
                                }
                            });
                    }, 2);

                })
            }
        }
    })

    $(".productImageSelector ol li").click(function() {
        $(".productImageSelector ol li").removeClass("active");
        $(this).addClass("active");
        PLPmySwiper.slideTo($(this).index());
    })
})