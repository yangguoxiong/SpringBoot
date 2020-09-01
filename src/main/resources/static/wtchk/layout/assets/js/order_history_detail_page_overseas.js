$(function(){
    $(".mobile-menu-3 span").text("詢問");
    $(".globalWrapper").addClass("show-mobile-menu-2 menu-2-myAccount");

    $(".PLP-Filter .box-head i").click(function(){
        $(this).parent().parent().find(".box-content").slideToggle();
        $(this).parent().toggleClass("active");
    })
    $("input[name='productList']").click(function(){
    	if($("input[name='productList']:checked").length!=0){
            $("#product-list-msg").addClass("hide");
        }
    })
    $("#submit").click(function(){
        valida=0;
        if($("#contactUs_mailText").val().trim().length==0){
            $("#contactUs_mailText").addClass("error");
            valida=1;
        }
        if($("input[name='productList']:checked").length==0){
            $("#product-list-msg").removeClass("hide");
            valida=1;
        }

        $(".order_history_detail_page_overseas input , .order_history_detail_page_overseas textarea").each(function(){
            if($(this).hasClass("error")){
                $("#"+$(this).attr("id")+"-msg").removeClass("hide");
            }
        })
    })
})