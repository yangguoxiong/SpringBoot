$(function(){
    $(".mobile-menu-3 span").text("更改密碼");
    $(".globalWrapper").addClass("show-mobile-menu-2 menu-2-myAccount");
     
    $(".PLP-Filter .box-head i").click(function(){
        $(this).parent().parent().find(".box-content").slideToggle();
        $(this).parent().toggleClass("active");
    })

    $("#submit2").click(function(){
        if($("#password0").val().trim().length==0){
            $("#password0").addClass("error");
        }
        if($("#password1").val().trim().length==0){
            $("#password1").addClass("error");
        }
        if($("#password2").val().trim().length==0){
            $("#password2").addClass("error");
        }
        $(".myaccount_MyProfile_pw input").each(function(){
            if($(this).hasClass("error")){
                $("#"+$(this).attr("id")+"-msg").removeClass("hide");
            }
        })
    })
})