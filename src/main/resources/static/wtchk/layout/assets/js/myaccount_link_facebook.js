$(function(){
    $(".mobile-menu-3 span").text("Facebook 設定");
    $(".globalWrapper").addClass("show-mobile-menu-2 menu-2-myAccount");
     
    $(".PLP-Filter .box-head i").click(function(){
        $(this).parent().parent().find(".box-content").slideToggle();
        $(this).parent().toggleClass("active");
    })

    // $(".facebook-btn").click(function(){
    // 	$(this).addClass("hide");
    // 	$(".facebook-member").removeClass("hide");
    // })
    // $("#cancel-facebook").click(function(){
    // 	$(".facebook-btn").removeClass("hide");
    // 	$(".facebook-member").addClass("hide");
    // })
})