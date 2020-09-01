$(function(){
    $(".mobile-menu-3 span").text("請登錄入你的賬號");
    $(".globalWrapper").addClass("show-mobile-menu-2 menu-2-myAccount");
     
    $(".PLP-Filter .box-head i").click(function(){
        $(this).parent().parent().find(".box-content").slideToggle();
        $(this).parent().toggleClass("active");
    })

    var windowWidth=$(window).width();
    $(window).resize(function(){
        if(windowWidth>=980&&$(window).width()<980){
            $(".mobile-menu ul li[data-id='account']").click();
        }
        windowWidth=$(window).width();
    })
})