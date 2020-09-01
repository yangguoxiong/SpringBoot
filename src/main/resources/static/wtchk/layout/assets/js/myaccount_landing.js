$(function(){
    $(".mobile-menu-3 span").text("Welcome");
    $(".globalWrapper").addClass("show-mobile-menu-2 menu-2-myAccount");
     
    $(".PLP-Filter .box-head i").click(function(){
        $(this).parent().parent().find(".box-content").slideToggle();
        $(this).parent().toggleClass("active");
    })

    var members_point = new Swiper('#members-point',{
		slidesPerView : 2,
		prevButton:'#members-prev',
        nextButton:'#members-next',
	})

    var windowWidth=$(window).width();
    $(window).resize(function(){
        if(windowWidth>=980&&$(window).width()<980){
            $(".mobile-menu ul li[data-id='account']").click();
            $("#signInItem #login-btn").click();
            $("#signInItem #notOpenCard-btn , #signInItem #notOpenCard-btn-mobile").click();
        }
        windowWidth=$(window).width();
    })
})