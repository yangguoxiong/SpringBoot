$(function() {
    $(".globalWrapper").addClass("checkout_myBag");
    $(".mobile-menu-3 span").text("My Bag");
    $('footer').addClass('checkout');


    $(".bill_information .title").click(function() {
        if ($(this).parent().parent().hasClass("active")) {
            $(this).parent().parent().find(".drop-box").slideUp();
            $(this).parent().parent().removeClass("active");
        } else {
            $(this).parent().parent().find(".drop-box").slideDown();
            $(this).parent().parent().addClass("active")
        }
    })
    $(".bill_information .title .close-btn").click(function() {
        $(".bill_information-box").removeClass("show_mobile");
        $('.globalWrapper').removeClass('checkout_summary');
        $('.fixedTotalBox').prepend($('.total-box'));
        $("html").removeClass("mobile-overflow");
    })
    $(".bill_information-overflow .total-box .total").click(function() {
        $(".bill_information-box").addClass("show_mobile");
        $('.globalWrapper').addClass('checkout_summary');
        $('.sideTotalBox').prepend($('.total-box'));
        $("html").addClass("mobile-overflow");
    })
    $("body").on("click", ".myBasketTableProduct .productRelated", function() {
        $(this).parent().parent().toggleClass("show_myBasketTableSubProduct");
    })
    $("body").on("click", ".myBasketTableProduct .hide-all", function() {
        $(this).parent().parent().parent().removeClass("show_myBasketTableSubProduct");
    })
    $("body").on("click", ".myBasketTableProduct .Show_More_Promotion", function() {
        $(this).parent().addClass("show_all");
    })
    $(".buyBar .count").on("click", ".add", function() {
        var value = $(this).parent().find("input").val();
        if (value < 99) {
            value++;
            $(this).parent().find("input").val(value);
        }
        if (value < 99) {
            $(this).parent().find(".sub").addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
    $(".buyBar .count").on("click", ".sub", function() {
        var value = $(this).parent().find("input").val();
        if (value > 0) {
            value--;
            $(this).parent().find("input").val(value);
        }
        if (value > 0) {
            $(this).parent().find(".add").addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
    $(".buyBar .count").on("change", "select", function() {
        var value = $(this).val();
        $(this).parent().find('input').val(value);

        $('.mobile-overlay-content').focus();
        $('.mobile-overlay-content').click();
    });
    $(".delivery_way .way1").on("change", function() {
        if ($(this).find("option:selected").data("way") == "two") {
            $(".delivery_way .way2").removeClass("hide");
            $(".paymentContentTopBottomBox .remind-box ul , .bill_information .remind-box ul").addClass("hide");
            $(".paymentContentTopBottomBox .remind-box span , .bill_information .remind-box span").removeClass("hide");
            $(".freight_status .one").addClass("hide");
            $(".freight_status .two").removeClass("hide");
            $(".owe").addClass("hide");
        } else {
            $(".delivery_way .way2").addClass("hide");
            $(".paymentContentTopBottomBox .remind-box span , .bill_information .remind-box span").addClass("hide");
            $(".paymentContentTopBottomBox .remind-box ul , .bill_information .remind-box ul").removeClass("hide");
            $(".freight_status .two").addClass("hide");
            $(".freight_status .one").removeClass("hide");
            $(".owe").removeClass("hide");
        }
    })
    $("body").on("click", ".myBasketContent .productRemove .icon-delete", function() {
        $(this).parent().parent().parent().remove();
        removeEmptyTable();
    })
    $("body").on("click", ".myBasketContent .productInfoControl .Save_for_later", function() {
        var clone=$(this).parent().parent().parent().clone();
        $(".part-next-time .myBasketTable").append(clone);
        clone.find('.bootstrap-select').replaceWith(function() { return $('select', this); });
        clone.find('.selectpicker').selectpicker();
        $(this).parent().parent().parent().remove();
        removeEmptyTable();
    })
    $("body").on("click", ".myBasketContent .productInfoControl .Move_to_bag", function() {
        var clone=$(this).parent().parent().parent().clone();
        $("." + $(this).parent().parent().parent().data("delivery") + " .myBasketTable").append(clone);
        clone.find('.bootstrap-select').replaceWith(function() { return $('select', this); });
        clone.find('.selectpicker').selectpicker();
        $(this).parent().parent().parent().remove();
        removeEmptyTable();
    })
    $("body").on("click",".myBasketTableProduct .Add_to_wish_list-popup .green-btn",function(){
        $(this).parent().parent().parent().parent().parent().remove();
        removeEmptyTable();
    })
    $("body").on("click", ".mobileProductPromotion", function() {
        $(this).parent().toggleClass("show_all");
    })
    $("body").on("click", ".part-next-time .Show_more", function() {
        $(this).parent().toggleClass("show-all");
    })
    var buyBar_select=0;
    $("body").on("show.bs.select",".redemptionProductOverlayContent .buyBar select , .myBasketTableProductQuantity select",function(e){
        buyBar_select=$(this).val();
    })
    $("body").on("changed.bs.select",".redemptionProductOverlayContent .buyBar select , .myBasketTableProductQuantity select",function(e){
        if ($(this).val()=="6+") {
            $(this).parent().parent().addClass("hide");
            $(this).parent().parent().parent().find(".buyBar-input-upadte").removeClass("hide").find("input").val(buyBar_select);
            $(this).parent().parent().parent().find(".buyBar-input-upadte .green-btn").removeClass("hide");
        }
    })
    $("body").on("click",".redemptionProductOverlayContent .buyBar .green-btn , .myBasketTableProductQuantity .green-btn",function(e){
        if (parseInt($(this).parent().find("input").val())<=6) {
            $(this).parent().parent().find("select").selectpicker('val', parseInt($(this).parent().find("input").val()));
            $(this).parent().addClass("hide");
            $(this).parent().parent().find(".quantity").removeClass("hide");
        }else{
            $(this).addClass("hide");
        }
    })
    $("body").on("input",".redemptionProductOverlayContent .buyBar-input-upadte input, .myBasketTableProductQuantity .buyBar-input-upadte input",function(e){
        $(this).parent().parent().find(".green-btn").removeClass("hide");
    })
    $('.shop_bag .shopBagContentRightTopBox .delivery_way .method_select input:radio[name="delivery_method"]').change(function(){
        $('.shop_bag .shopBagContentRightTopBox .delivery_way .method_select').removeClass('active');
        $(this).parent().parent().parent().addClass('active');
    })
    $('.shop_bag .redemptionProductOverlay .redemptionProductOverlayContent .product .intro .bottom .buyBar').each(function(){
        var sum = 0;
        $('.shop_bag .redemptionProductOverlay .redemptionProductOverlayContent .product .intro .bottom .buyBar .selectpicker').change(function(){
            if ($(this).val() != "0" && $(this).val() != "6+"){
                $(this).parent().parent().parent().addClass('active');
                sum += +$(this).val();
                $('.shop_bag .redemptionProductOverlay .redemptionProductOk-btn .selected_promo').html(sum); 
                
            }else if($(this).val() == "6+"){
                $(this).parent().parent().siblings('.buyBar-input-upadte').find('.green-btn a').click(function(){
                    console.log('sum + X = ' + sum + '+' + $(this).parent().siblings('.input').find('input').val());
                    sum += +$(this).parent().siblings('.input').find('input').val();
                    
                    $('.shop_bag .redemptionProductOverlay .redemptionProductOk-btn .selected_promo').html(sum); 
                }) 
            }else{
                $(this).parent().parent().parent().removeClass('active');
            }
        })
    })
    //general
    $('.popup-general .icon-close, .popup-general .background, #free-gift-popup .action-btn .green-btn, #free-gift-popup .more-btn a').on('click', function(){ 
        $('.popup-general').hide(); 
        $('html').removeClass('overlay-open');
    });
    $('#free-gift-popup .productItemContainer').click(function(){
        $('#free-gift-popup .productItemContainer').removeClass('active');
        $(this).addClass('active');
        $(this).parent().parent().siblings('.action-btn').find('.green-btn').removeClass('disabled');
    })
    $('.subscription_gift .subscription_table').click(function(){
        $('#subscription-time-popup').show();
        $('html').toggleClass('overlay-open');
    })
    $('#subscription-time-popup .icon-close,#subscription-time-popup .action-btn').click(function(){
        $('#subscription-time-popup').hide(); 
        $('html').removeClass('overlay-open');
    })
    $('.promo_code .green-btn a').click(function(){
        $('.promo_code .reminder').addClass('hide');
        $('.promo_code .promo-error').addClass('active');
    })
    
    if( $(window).width() < 980 ){
        $('.shop_bag .shopBagContentRightTopBox .delivery_way .method_select').click(function(){
            $('.shop_bag .shopBagContentRightTopBox .delivery_way .method_select').removeClass('active');
            $(this).addClass('active');
        })
        $('.shop_bag .shopBagContentbLeftBottomBox .paymentContent').prepend($('.shop_bag .shopBagContentRightBottomBox.promo_code'));
        
        $('.fixedTotalBox').prepend($('.total-box'));
        if($('main').hasClass('xBorder')){
            $('.fixedTotalBox .total-box').addClass('xBorder');    
        }

        $('.shop_bag .shopBagContentRightTopBox .bill_information .content').click(function(){
            $(this).parent().toggleClass('active');
        })

        var secBottom = Math.round($('footer').offset().top);
        var faqHeight = $('.shopBagContentRightBottomBox.FAQ').height();

        $.fn.followTo = function ( pos ) {
           var $this = this,
               $window = $(window);

           $window.scroll(function(e){
               if ($window.scrollTop() + $window.height() - faqHeight > pos) {
               
                   $this.css({
                       position: 'relative'
                   });
               } else {
                   $this.css({
                       position: 'fixed',
                       bottom: 0,
                       width: '100%'
                   });
               }
           });
        };
        $('.fixedTotalBox .total-box').followTo(secBottom);
    } 
    var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
            widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
        $outer.remove();
        var scrollBarWidth = 100 - widthWithScroll;

    $(window).on('resize',function(){
        var wwidth = 980-scrollBarWidth;
       if( $(window).width() < wwidth ){
            $('.shop_bag .shopBagContentRightTopBox .delivery_way .method_select').click(function(){
                $('.shop_bag .shopBagContentRightTopBox .delivery_way .method_select').removeClass('active');
                $(this).addClass('active');
            })
            $('.shop_bag .shopBagContentbLeftBottomBox .paymentContent').prepend($('.shop_bag .shopBagContentRightBottomBox.promo_code'));
            if(!$('.globalWrapper').hasClass('checkout_summary')){
                $('.fixedTotalBox').prepend($('.total-box'));
            }
            if($('main').hasClass('xBorder')){
                $('.fixedTotalBox .total-box').addClass('xBorder');    
            }

            var secBottom = Math.round($('footer').offset().top);
            var faqHeight = $('.shopBagContentRightBottomBox.FAQ').height();

            $.fn.followTo = function ( pos ) {
               var $this = this,
                   $window = $(window);

               $window.scroll(function(e){
                   if ($window.scrollTop() + $window.height() - faqHeight > pos) {
                   
                       $this.css({
                           position: 'relative'
                       });
                   } else {
                       $this.css({
                           position: 'fixed',
                           bottom: 0,
                           width: '100%'
                       });
                   }
               });
            };
            $('.fixedTotalBox .total-box').followTo(secBottom);
        }else{
            $('.promo_code_container').prepend($('.shop_bag .shopBagContentRightBottomBox.promo_code'));    
            $('.sideTotalBox').prepend($('.total-box'));
        }
    })
    $('.shop_bag .shopBagContentbLeftBottomBox .paymentContent .paymentContentTopBottomBox .paymentContentTop .saved_amount').click(function(){
         $(this).parent().toggleClass('active');
    })

    function removeEmptyTable() {
        $(".myBasketTable").each(function() {
            if ($(this).find(".myBasketTableProduct").length > 0) {
                $(this).parent(".myBasketContent").removeClass("hide");
            } else {
                $(this).parent(".myBasketContent").addClass("hide");
            }
        })
        if($(".part-watson-delivery .myBasketTableProduct , .part-original-delivery .myBasketTableProduct").length>0){
            $(".redemptionProduct , .paymentContent").removeClass("hide");
            $(".only-save-for-later").addClass("hide");
        }else{
            $(".redemptionProduct , .paymentContent").addClass("hide");
            $(".only-save-for-later").removeClass("hide");
        }
    }
})
