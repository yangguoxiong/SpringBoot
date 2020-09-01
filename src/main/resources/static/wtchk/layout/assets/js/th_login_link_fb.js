$(function () {
    $(".globalWrapper").addClass("show-mobile-menu-3");
    $(".mobile-menu-3 span").text("Link with Facebook");
    $(".signup_send-btn").click(function () {
        if ($("#registerEmail").val().trim().length == 0) {
            $("#registerEmail").addClass("error");
        }

    })
    $(".provide_dropDown .provide_dropDown_title").click(function () {
        if ($(this).parent().hasClass("active")) {
            $(this).parent().find(".provide_dropDown_box").slideUp();
            $(this).parent().removeClass("active");
        } else {
            $(this).parent().find(".provide_dropDown_box").stop().slideDown();
            $(this).parent().addClass("active");
        }
    });
});