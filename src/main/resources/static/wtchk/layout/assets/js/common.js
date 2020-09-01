$(function(){
    var remind_timeout=1000;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        $('.selectpicker').not(".special").each(function(){
            if(!$(this).prop("multiple")){
                $(this).selectpicker('mobile');
            }
        })
    }
    var mobile_members_point = new Swiper('#mobile-members-point',{
        slidesPerView : 2,
        observer: true,
        observeParents: true
        // prevButton:'#mobile-members-prev',
        // nextButton:'#mobile-members-next',
    })
    //$("html").niceScroll({cursorcolor: "#009AA9",hidecursordelay: 0,cursoropacitymax:"1",cursoropacitymin:"1",cursorwidth:"10px",zindex:11111112,smoothscroll:true});
    $('input, textarea').placeholder({ customClass: 'my-placeholder' });
    $("#searchboxfl").on("blur",function(){
        $("#searchboxItem").slideUp(50);
        $("#searchboxItem2").slideUp(50);
    })

    $("input , textarea").on("focus",function(){
        $(this).removeClass("error");
        $("#"+$(this).attr("id")+"-msg").addClass("hide");
    })
    $("select").on("change",function(){
        $(this).removeClass("error");
        $(this).parent().parent().removeClass("red");
        $("#"+$(this).parent().parent().attr("id")+"-msg").addClass("hide");
        $("#"+$(this).attr("id")+"-msg").addClass("hide");
    })

    $("#searchboxfl").on("focus",function(){
        $("#searchboxItem").slideDown(150);
        $("#searchboxfl").parent().addClass("show-delete");
    })
    $("#searchboxfl").on("input",function(){
        $("#searchboxItem").slideUp(150);
        $("#searchboxItem2").slideDown(150);
        $("#searchboxfl").parent().addClass("show-delete");
        //$("#searchboxItem").slideDown(150);
        //$("#searchboxfl").parent().addClass("show-delete");
    })
     $("#search_form1 .icon-delete-a").click(function(){
        $("#searchboxfl").val("");
        $(this).parent().removeClass("show-delete");
    })

    $("#all_brands-searchboxfl").on("input",function(){
        $("#all_brands-searchboxItem").slideDown(150);
         $("#all_brands-searchboxfl").parent().addClass("show-delete");
    })
     $("#all_brands-search_form1 .icon-delete-a").mousedown(function(){
        $("#all_brands-searchboxfl").val("");
        $(this).parent().removeClass("show-delete");
    })
     $("#all_brands-searchboxfl").on("blur",function(){
        $("#all_brands-searchboxItem").slideUp(150);
    })

    $("#main-searchboxfl").on("blur",function(){
        $("#main-searchboxItem").slideUp(150);
    })

    $("#main-searchboxfl").on("input",function(){
        $("#main-searchboxItem").slideDown(150);
        $("#main-searchboxfl").parent().addClass("show-delete");
    })
    $("#searchForm .icon-delete").click(function(){
        $("#main-searchboxfl").val("").focus();
        $(this).parent().removeClass("show-delete");
    })

    $(".mobile-menu-3-search input").on("input",function(){
        $(".mobile-menu-3-search input").parent().addClass("show-delete");
    })
    $(".mobile-menu-3-search .icon-delete").click(function(){
        $(".mobile-menu-3-search input").val("").focus();
        $(this).parent().removeClass("show-delete");
    })
    $(".mobile-menu-3-search .result-box .title span").click(function(){
        $(this).parent().parent().remove();
    })
    $("a[data-id='show-mobile-menu-3-search']").click(function(){
        $("html").addClass("mobile-overflow");
        $(".globalWrapper").addClass("show-mobile-menu-3-search");
    })
    $(".mobile-menu-3-search .cancel").click(function(){
        $("html").removeClass("mobile-overflow");
        $(".globalWrapper").removeClass("show-mobile-menu-3-search");
    })

    $("#signInItemHome").delay(1500).animate({'opacity':'0'},150,function(){
        $(this).hide();
    })

    $(".store-lang .lang , #myBasket").mouseenter(function(){
        $("#searchboxfl").blur();
    })

    $(".switch-label").each(function(){
        if($(this).find("input[type='checkbox']")[0].checked){
            $(this).find("input[type='checkbox']").removeClass("off").addClass("on");
            $(this).find("i").removeClass("off").addClass("on");
        }else{
            $(this).find("input[type='checkbox']").removeClass("on").addClass("off");
            $(this).find("i").removeClass("on").addClass("off");
        }
    })

    $("body").on("click",".switch-label",function(){
        if($(this).find("input[type='checkbox']")[0].checked){
            $(this).find("input[type='checkbox']").removeClass("off").addClass("on");
            $(this).find("i").removeClass("off").addClass("on");
        }else{
            $(this).find("input[type='checkbox']").removeClass("on").addClass("off");
            $(this).find("i").removeClass("on").addClass("off");
        }
    })

    var mobile_menu="";
    $(".mobile-menu ul").on('click touchstart','li',function(e){
        e.stopImmediatePropagation();
        e.preventDefault();
        $(".mobile-menu ul li").removeClass("active");
        $('html,body').animate({scrollTop: 0},0);
        $(this).addClass("active");
        $(".navSubContainer").addClass("hide-this");
        if($(this).data("id")=='store'){
            window.location = $(this).find('a').attr('href');
            return;
        }
        if($(this).data("id")=='home'){
            if(mobile_menu!=""){
                $(".globalWrapper").attr("class",mobile_menu);
            }
        }else{
            if(mobile_menu==""){mobile_menu = $(".globalWrapper").attr("class");}
            $(".globalWrapper").removeAttr("class").addClass("globalWrapper").addClass("show-menu").addClass("show-menu-"+$(this).data("id"));           
        }
    })
//    $("#show_All_Brand").on('click',function(e){
//        $(".mobile-menu ul li").removeClass("active");
//        $(".mobile-menu ul li[data-id='product']").addClass("active");
//        $(".navSubContainer").addClass("hide-this");
//        $(".menu-product-content").removeClass("show-content-2");
//        if(mobile_menu==""){mobile_menu = $(".globalWrapper").attr("class");}
//        $(".globalWrapper").removeAttr("class").addClass("globalWrapper").addClass("show-menu").addClass("show-menu-product");           
//        
//        $(".menu-product-content .content-1 .navContainer").removeClass("active");
//        $(".menu-product-content .content-1 .navContainer#show_All_Brand").addClass("active");
//        $(".menu-product-content").addClass("show-content-2");
//        $(".navSubContainer").addClass("hide-this");
//        $(".navSubContainer[data-id='all_brands']").removeClass("hide-this");
//    })

//    $(".navSubContainer.sub dt").click(function(){
//        if($(this).parent().find("dd").length>0){
//            if($(this).hasClass("active")){
//                $(this).parent().find("dd").slideUp();
//                $(this).removeClass("active");
//            }else{
//                $(".navSubContainer.sub dt").removeClass("active");
//                $(".navSubContainer.sub dd").slideUp();
//                $(this).parent().find("dd").stop().slideDown();
//                $(this).addClass("active")
//            }
//        } 
//    })
    $(".sitemapLinks dt").click(function(){
        if($(this).parent().find("dd").length>0){
            if($(this).hasClass("active")){
                $(this).parent().find("dd").slideUp();
                $(this).removeClass("active");
            }else{
                $(".sitemapLinks dt").removeClass("active");
                $(".sitemapLinks dd").slideUp();
                $(this).parent().find("dd").stop().slideDown();
                $(this).addClass("active")
            }
        } 
    })

    $(".menu-product-content .content-1 .navContainer").not("#show_All_Brand").click(function(){
        var isExpanded = $(this).hasClass('active');
        $(".menu-product-content .content-1 .navContainer").removeClass("active");
        $(".menu-product-content .content-1 .navContainer .navSubContainer").remove();
        
        if(!isExpanded) { 
            var id=$(this).data("id");
            $(".menu-product-content").addClass("show-content-2");
            $(".navSubContainer").addClass("hide-this");
            $(this).addClass("active");
            
            if($(window).width() < 980) {
                var content = $(".navSubContainer[data-id='"+id+"']").clone();
                $(this).append(content);
            }
        }
    })

    $("#myAccountfl").hover(function(){
        $("#searchboxfl").blur();
        $("#signInItem").stop().show().animate({'opacity':'1'},150);
    },function(){
        $("#signInItem").stop().animate({'opacity':'0'},150,function(){
            $(this).hide();
        })
    })
    var navContainer_timeout;
    $("header .navContainer , header .navSubContainer").mouseenter(function(){
        var id = $(this).data("id");
        $(".navContainer[data-id='"+id+"']").addClass("navHover");
        $(".navSubContainer[data-id='"+id+"']").css("opacity","1").stop();
        var delay=500;
        if($(".navSubContainer[data-id='"+id+"']").length>0){
            $(".navContainer-bg").stop();
            $(".navContainer-bg-cover").stop();
        }
        if($(".navContainer-bg").css("display")=='block'){
            delay=200;
        }else{
            delay=500;
        }
        navContainer_timeout=setTimeout(function(){
            $("#searchboxfl").blur();
            var navContainer_height='0px';
            if($(".navSubContainer[data-id='"+id+"']").length>0){
                $(".navContainer-bg").fadeIn();
                navContainer_height=$(".navSubContainer[data-id='"+id+"']").height()+'px';
            }else{
                navContainer_height='0px';
            }
            $(".navContainer-bg-cover").animate({
                height: navContainer_height
            },{
                duration: 200,
                easing: 'easeOutCubic',
                complete:function(){
                    $(".navSubContainer[data-id='"+id+"']").fadeIn();
                    $(".navSubContainer[data-id='"+id+"']").height($(".navSubContainer[data-id='"+id+"']").height());
                    $(".navSubContainer[data-id='"+id+"'] .col-item").height($(".navSubContainer[data-id='"+id+"']").height()-50);
                }
            });
        },500);

        
    }).mouseleave(function(){
        var id = $(this).data("id");
        $(".navContainer[data-id='"+id+"']").removeClass("navHover");
        clearTimeout(navContainer_timeout);
        $(".navSubContainer[data-id='"+id+"']").css("opacity","0").stop().fadeOut('fast',function(){
            $(".navSubContainer[data-id='"+id+"']").height('auto');
            $(".navSubContainer[data-id='"+id+"'] .col-item").height('auto');
        });
       
        $(".navContainer-bg").stop().fadeOut();
        $(".navContainer-bg-cover").stop().animate({
            height: 0
        },{
            duration: 200,
            easing: 'easeOutCubic',
        });
    })

    var scroll_position=0;
    $(window).scroll(function(){
        if($(document).scrollTop()>105){
            $("header").addClass("mini-nav");
            if($(document).scrollTop()<scroll_position){
                $("header nav").addClass("scroll-height");
            }
            else if($(".navContainer-bg").css("display")!="block"&&$(document).scrollTop()>scroll_position){
                $("header nav").removeClass("scroll-height");
            }
            scroll_position=$(document).scrollTop();
        }else{
            $("header").removeClass("mini-nav");
        }       
    })

    $("#signInItem #login-btn").click(function(){
        $("#signInItem #unload , #signInItem #openCard-btn , .mobile-header-menu.menu-account .s1").addClass("hide");
        $("#signInItem #notOpenCard-btn , #loaded , #signInItem #logout-btn , .mobile-header-menu.menu-account .h1").removeClass("hide");
        $("#signInItem").addClass("loaded");
    })
    $("#signInItem #notOpenCard-btn , #signInItem #notOpenCard-btn-mobile").click(function(){
        $("#signInItem #notOpenCard-btn , #loaded").addClass("hide");
        $("#signInItem .card-point , #signInItem .members-point").removeClass("hide");
        $("#signInItem").removeClass("loaded").addClass("linked");
    })
    var windowWidth=$(window).width();
    $(window).resize(function(){
        if(windowWidth<980&&$(window).width()>=980&&$(".globalWrapper").hasClass("show-menu-account")){
            if(!$("#signInItem #unload").hasClass('hide')){
                location.href='myaccount_landing_before_login.html';
            }else if(!$("#signInItem #loaded").hasClass('hide')){
                location.href='myaccount_landing_eshopper.html';
            }else if(!$("#signInItem .card-point").hasClass('hide')){
                location.href='myaccount_landing.html';
            }
        }
        windowWidth=$(window).width();
    })
    $("#submitBtnId").click(function(){
        if(/^([0-9A-Za-z\-_\.]+)@([0-9a-z\-_]+\.[a-z]{2,3}(\.[a-z]{2})?)$/ig.test($("#signUpWatsonsEmail").val())){
            $(".signUpWatsonsEmailContainer , #eNewletterSubscribeTtl_spanId , #eNewsletterErrorSpanId").hide();
            $("#eNewletterSubscribeTtl_spanId2").show();
            $(".signUpWatsonsEmailContainer").removeClass("red");
            $(".socialMedia").removeClass("mg");
        }else{
            $("#eNewsletterErrorSpanId").show();
            $(".signUpWatsonsEmailContainer").addClass("red");
            $(".socialMedia").addClass("mg");
        }
    })
    $().UItoTop();

    $("body").on("click",".productItemPhotoContainer .like , .myBasketTableProduct .Move_to_wish_list",function(){
        $(".Add_to_wish_list-popup").hide();
        $(this).addClass("z-index").find(".Add_to_wish_list-popup").show();
        popup_overlay($(this));
        $(this).find(".Add_to_wish_list-popup .input input").val("");
    })
    $("body").on("click",".like .Add_to_wish_list-popup .icon-close , .myBasketTableProduct .Add_to_wish_list-popup .icon-close",function(e){
        e.stopPropagation();
        $(".productItemPhotoContainer .like , .Move_to_wish_list").removeClass("z-index");
        $(".Add_to_wish_list-popup").hide();
        close_popup_overlay();
    })
    $("body").on("change",".like .Add_to_wish_list-popup select , .myBasketTableProduct .Add_to_wish_list-popup select",function(e){
        e.stopPropagation();
        if($(this).val()=='newOne'){
            if($(this).find("option").length>10){
                $(this).parent().parent().parent().find(".add-warning").show();
                $(this).parent().parent().parent().find(".reset-bootstrp-select").addClass("red");
            }else{
                $(this).parent().parent().parent().find(".input").show();
            }
        }else{
            $(this).parent().parent().parent().find(".input").hide();
            $(this).parent().parent().parent().find(".add-warning").hide();
            $(this).parent().parent().parent().find(".reset-bootstrp-select").removeClass("red");
        }
    })

    $("body").on("click",".like .Add_to_wish_list-popup .green-btn , .myBasketTableProduct .Add_to_wish_list-popup .green-btn",function(e){
        e.stopPropagation();
        var val=$(this).parent().find(".input input").val();

        if($(this).parent().find("select option").length>10&&$(this).parent().find("select").val()=='newOne'){
            $(this).parent().find(".add-warning").show();
            $(this).parent().find(".reset-bootstrp-select").addClass("red");
            $(this).parent().find(".input").hide();
        }else{
            if($.trim(val)!=""&&$(this).parent().find("select").val()=='newOne'){
                $(this).parent().find("select").append("<option>"+val+"</option>");
                $(this).parent().find('.selectpicker').selectpicker('refresh');
                $(this).parent().parent().addClass("yes");
            }else{
                $(this).parent().parent().addClass("yes");
            }
            $(".productItemPhotoContainer .like , .Move_to_wish_list").removeClass("z-index");
            $(this).parent().hide();
            close_popup_overlay();
        }
    })
    var buy_loading=0;
    // $("body").on("click",".productItemContainer .buy , .productItemContainer .notify , .price_buy .buy",function(event){
    $(".productItemContainer .buy , .productItemContainer .notify , .price_buy .buy").on("click",function(event){        
        event.stopPropagation();
        if(buy_loading==0){
            buy_loading=1;            
            $(this).find(".icon-shopping-bag , .icon-notify , .icon-bag").addClass("buy-loading").addClass("icon-spin5");
            $(this).find(".ADD_TO_BAG-popup").stop().delay(remind_timeout).fadeIn(function(){
                $(".productItemContainer .buy , .productItemContainer .notify , .price_buy .buy").removeClass("disabled");
                $(".productItemContainer .buy .icon-shopping-bag , .productItemContainer .notify .icon-notify , .price_buy .buy .icon-bag").removeClass("buy-loading").removeClass("icon-spin5");
                buy_loading=0;
            }).delay(remind_timeout).fadeOut();
            
        }
    })
    function popup_direction(){
        $(".productItemContainer .like , .PDP .Add_to_wish_list , .PDP .Share_with_Friends , .myBasketTableProduct .Move_to_wish_list").each(function(){
            if($(this).offset().top - $(window).scrollTop()<$(window).height()-$(this).offset().top + $(window).scrollTop()&&$(this).offset().top - $(window).scrollTop()<250){
                $(this).find(".Add_to_wish_list-popup").addClass("dropdown");
                $(this).find(".Share_with_Friends-popup").addClass("dropdown");
            }else{
                $(this).find(".Add_to_wish_list-popup").removeClass("dropdown");
                $(this).find(".Share_with_Friends-popup").removeClass("dropdown");
            }
        })
    }
    popup_direction();
    $(window).on('resize scroll', function () {
        popup_direction();
    });    
    
    if($(window).width()>=980){
        $(".remind").mouseenter(function(){
            $(this).find(".remind-box").stop().fadeIn(0);
        }).mouseleave(function(){
            $(this).find(".remind-box").delay(remind_timeout).fadeOut(0);
        })
        $(".productPromotion-tabs .tab").mouseenter(function(){
            $(this).find(".tab-title").stop().fadeIn(0);
        }).mouseleave(function(){
            $(this).find(".tab-title").fadeOut(0);
        })
        $(".productPromotion-tabs .tab , .Promotions .tab-list a , .redemptionProductOverlayContent .PWPbtn a").each(function(){
            if($(this).width()>135){
                $(this).addClass("addTooltips");
            }
        })
        $("body").tooltip({
            delay : {
                show : 0,
                hide : 0,
            },
            selector: '.tab.addTooltips'
            // selector: '[data-toggle="tooltip"]'
        });
    }else{
        $(".remind").click(function(e){
            e.stopPropagation();
            $(this).find(".remind-box").stop().fadeIn(0);
        });
        $("body").on("click",".myBasketTableProductOptions .option",function(e){
            e.stopPropagation();
            $(".optionName").stop().fadeOut(0);
            $(this).find(".optionName").stop().fadeIn(0);
        });
        $("body").tooltip({
            delay : {
                show : 0,
                hide : 0,
            },
            selector: '.LDdetailProgress .addTooltips'
        });
    }
    $(document).on("click touchend",function(){
        $(".remind-box").stop().hide();
        $(".optionName").stop().hide();
    });
    function checkoutWrapperMainHeight(){
        setTimeout(function(){
            var height=$(window).height()-$("header").height()-$("footer").outerHeight(true)-20;
            $("main").css("min-height",height+"px");
        },1)
    }
    checkoutWrapperMainHeight();
    $(window).resize(function(){
        checkoutWrapperMainHeight();
        if($(window).width()<980){
            $("body").tooltip("destroy");
        }
    })    
    
})

$.fn.UItoTop = function(options) {

    var defaults = {
        text: '',
        min: 105,           
        scrollSpeed: 300,
        containerID: 'toTop',
        containerClass: 'toTop fa fa-angle-up',
        easingType: ''
                
    };

    var settings = $.extend(defaults, options);
    var containerIDhash = '#' + settings.containerID;

    $(containerIDhash).hide().click(function(){         
        $('html, body').stop().animate({scrollTop:0}, settings.scrollSpeed, settings.easingType);
        return false;
    })
    
                            
    $(window).scroll(function() {
        var sd = $(window).scrollTop();
        var footerPositionTop;
        if($(".globalWrapper").hasClass("checkoutWrapper")){
            footerPositionTop=$(document).height();
        }else{
            footerPositionTop = $('footer').position().top;
        }
        var diff = (footerPositionTop-sd);
        if($(window).width()<980){
            if(diff < $(window).height()){
                $(containerIDhash).css({
                    'position': 'absolute',
                    'top': footerPositionTop - 50
                });
            }else{
                $(containerIDhash).css({
                    'position': 'fixed',
                    'top': $(window).height() - 100
                });
            }
        }else{
            if(diff < $(window).height()){
                $(containerIDhash).css({
                    'position': 'absolute',
                    'top': footerPositionTop 
                });
            }else{
                $(containerIDhash).css({
                    'position': 'fixed',
                    'top': $(window).height() - 50
                });
            }
        }
            
        if ( sd > settings.min ) 
            $(containerIDhash).fadeIn(400);
        else 
            $(containerIDhash).fadeOut(400);
    });
    $("body").on("click",".popup_overlay",function(e){
        e.stopPropagation();
        $(".Add_to_wish_list-popup , .Share_with_Friends-popup").hide();
        $(".productItemPhotoContainer .like").removeClass("z-index");
        close_popup_overlay();
    })
};

var popup_overlay=function(a){
    a.append('<div class="popup_overlay"></div>');
}
var close_popup_overlay=function(){

    $(".popup_overlay").remove();
}


$('html').on('click','.overlayOpen-btn',function(e) {
    overlayOpen($(this).data("id"));
    e.preventDefault();
});

$('html').on('click','.overlay .close-btn',function(e) {
    overlayClose();
    e.preventDefault();
});

var overlayClose = function() {
    $(".overlay").hide();
    $('html').removeClass('overlay-open');
}
var overlayOpen = function(id) {
    $('html').addClass('overlay-open');
    $("#"+ id).show();
    $.lockBody(id);
}

$.lockBody = function(id) {
    var height=0;
    $(".redemptionProductOverlayContent .PWPbtn a").each(function(){
        if($(this).width()>135){
            $(this).addClass("addTooltips");
        }
    })
    if($("#"+ id +" .overlay-content").hasClass("redemptionProductOverlay")&&$("#"+ id +" .overlay-content").height()>$(window).height()*93/100){
        $("#"+ id +" .overlay-content").addClass("redemptionProductOverlay-maxHeight");
        if($(window).width()>=980){
            $(".redemptionProductOverlayContent").niceScroll({
                "horizrailenabled": false,
                "cursorcolor": "#009AA9",
                "cursorwidth": "8px",
                "hidecursordelay": 1000,
            });
        } 
    }else if($("#"+ id +" .overlay-content").height()>$(window).height()){
        height=0;
    }else{
        height=($(window).height()-$("#"+ id +" .overlay-content").height())/2;
    }
    $("#"+ id +" .overlay-content").css('margin-top',height+'px');
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.dataset.includeHtml;
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      } 
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

/* WTCHK */
$(document).ready(function(){
    includeHTML();
    $('.productMenu').on('click', function(){
        console.log('productMenu clicked');
        if($('.globalWrapper').hasClass('show-mobile-header-message')) {
            $(".globalWrapper").removeAttr("class").addClass("globalWrapper"); 
        } else {
            $(".globalWrapper").removeAttr("class").addClass("globalWrapper").addClass("show-menu").addClass("show-menu-product").addClass("show-mobile-header-message"); 
        }
    });
    $('.mobileHeaderMessage .btn-close').on('click', function(){
        $(".globalWrapper").removeAttr("class").addClass("globalWrapper"); 
        $(".menu-product-content .content-1 .navContainer").removeClass("active");
        $(".menu-product-content .content-1 .navContainer .navSubContainer").remove();
    });
    
    $('.watsonsGoSwitch').click(function(){
        if($('.watsonsGoSwitch').hasClass('off')){
            $('.watsonsGoSwitch .arrow-up').toggleClass('on off');
            $('#watsonsGoModeOn').toggleClass('on off');
            $('.overlayGo').toggleClass('on off');     
        }else if($('.watsonsGoSwitch').hasClass('on')){
            $('.watsonsGoSwitch .arrow-up').toggleClass('on off');
            $('#watsonsGoModeOff').toggleClass('on off');
            $('.overlayGo').toggleClass('on off'); 
        }
    })
    $('#watsonsGoModeOn i, #watsonsGoModeOff i').click(function(){
        console.log('i clicked');
        $('#watsonsGoModeOn').removeClass('on');
        $('#watsonsGoModeOn').addClass('off');
        $('#watsonsGoModeOff').removeClass('on');
        $('#watsonsGoModeOff').addClass('off');
        $('.overlayGo').removeClass('on');
        $('.overlayGo').addClass('off');
    })
    $('#watsonsGoModeOn button').click(function(){
        $('#watsonsGoModeOn').removeClass('on');
        $('#watsonsGoModeOn').addClass('off');
        $('.overlayGo').removeClass('on');
        $('.overlayGo').addClass('off');
        $('.watsonsGoSwitch .arrow-up').toggleClass('on off');
        $('.watsonsGoSwitch').toggleClass('on off');
        $('.productMenu').toggleClass('go');
    })
    $('#watsonsGoModeOff button').click(function(){
        $('#watsonsGoModeOff').removeClass('on');
        $('#watsonsGoModeOff').addClass('off');
        $('.overlayGo').removeClass('on');
        $('.overlayGo').addClass('off');
        $('.watsonsGoSwitch .arrow-up').toggleClass('on off');
        $('.watsonsGoSwitch').toggleClass('on off');
        $('.productMenu').toggleClass('go');
    })
    
    /* Delivery Destination Notice Popup*/
    $("body").on("click", ".headerMessage .delivery .dest-box a, .mobileHeaderMessage  .delivery .dest-box a", function (e) {
        e.preventDefault();
        $("#deliveryDestUpdatePopup").show();
        $("body").addClass('overlay-open');
    })

    $("body").on("click", ".popup .close-btn", function () {
        $("this").parent(".popup").hide();
        $("body").removeClass('overlay-open');
    });

    $("#deliveryDestUpdatePopup .submit-btn").click(function () {
        window.location = $(this).attr('href');
    });
});