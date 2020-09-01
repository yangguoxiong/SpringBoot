$(function(){
    $(".mobile-menu-3 span").text("更新個人資訊");
    $(".globalWrapper").addClass("show-mobile-menu-2");
     
    $(".PLP-Filter .box-head i").click(function(){
        $(this).parent().parent().find(".box-content").slideToggle();
        $(this).parent().toggleClass("active");
    })
})