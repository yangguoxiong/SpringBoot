$(function(){
    $(".mobile-menu-3 span").text("折價券/提貨券");
    $(".globalWrapper").addClass("show-mobile-menu-2 menu-2-myAccount");
     
    $(".comment-tabs a").click(function(){
        $(".comment-tabs a").removeClass("active");
        $(this).addClass("active");
        var id=$(this).data("id");
        $(".coupon-box").hide();
        $(".coupon-box[data-id='"+id+"']").show();
    })
    $(".PLP-Filter .box-head i").click(function(){
        $(this).parent().parent().find(".box-content").slideToggle();
        $(this).parent().toggleClass("active");
    })
    $(".explain-btn").click(function(){
        if($(this).parent().parent().parent().find(".explain").css("display")=="block"){
            $(this).parent().parent().parent().find(".explain").slideUp();
        }else{
            $(".explain").slideUp();
            $(this).parent().parent().parent().find(".explain").stop().slideDown();
        }
    })
})