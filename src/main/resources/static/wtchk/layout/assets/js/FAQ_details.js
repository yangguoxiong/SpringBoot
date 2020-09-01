$(function(){
    $(".mobile-menu-3 span").text("關於取消/退貨");
    $(".globalWrapper").addClass("show-mobile-menu-2 menu-2-myAccount");

    $(".FAQ-menu .box-head").click(function(){
        $(this).parent().find(".box-content").slideToggle();
        $(this).toggleClass("active");
    })

    $(".filter-title .icon-close").click(function(){
        $(".contentpage_content").removeClass("show-FAQ-menu");
    })

    $(".choice-theme").click(function(){
        $(".contentpage_content").addClass("show-FAQ-menu");
    })

    $("#FAQ-searchbox1 input").on("blur",function(){
        //$("#Online-searchbox1 .miniPopup").slideUp(150);
    })
    $("#FAQ-searchbox1 input").on("input",function(){
        //$("#Online-searchbox1 .miniPopup").slideDown(150);
        $("#FAQ-searchbox1 input").parent().addClass("show-delete");
    })
    $("#FAQ-searchbox1 .icon-delete").click(function(){
        $("#FAQ-searchbox1 input").val("").focus();
        $(this).parent().removeClass("show-delete");
        $("#FAQ-searchbox1 input").trigger("keyup");
    })

    $(".Q-box .box").click(function(){
        $(".A-box").slideUp();
        $(".Q-A-box").removeClass("active");
        $(this).parent().parent().addClass("active");
        $(".FAQ-menu .h1").removeClass("active");
        $(".FAQ-menu .h1[data-menu='"+$(this).parent().parent().data("menu")+"']").addClass("active");
        $(this).parent().parent().find(".A-box").stop().slideDown();
    })


})