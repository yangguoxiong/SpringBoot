$(function(){
    $(".mobile-PLP-menu .h1 .s1").text("關於取消/退貨");
    $(".mobile-PLP-menu .h1 .s2").text("Total:3 Items");
    $(".mobile-PLP-menu .i3").addClass("hide");
    $(".globalWrapper").addClass("show-mobile-PLP-menu");

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
        $(".FAQ-menu .h1").removeClass("active");
        $(".FAQ-menu .h1[data-menu='"+$(this).parent().parent().data("menu")+"']").addClass("active");        
        $(this).parent().parent().addClass("active");
        $(this).parent().parent().find(".A-box").stop().slideDown();
    })
})