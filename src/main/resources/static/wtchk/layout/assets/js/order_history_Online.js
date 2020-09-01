$(function(){
    $(".mobile-menu-3 span").text("交易紀錄");
    $(".globalWrapper").addClass("show-mobile-menu-2 menu-2-myAccount");
     
    $(".comment-tabs a").click(function(){
        $(".comment-tabs a").removeClass("active");
        $(this).addClass("active");
        var id=$(this).data("id");
        $(".order_history_Online").hide();
        $(".order_history_Online[data-id='"+id+"']").show();
    })
    $(".PLP-Filter .box-head i").click(function(){
        $(this).parent().parent().find(".box-content").slideToggle();
        $(this).parent().toggleClass("active");
    })

    $("#Online-searchbox1 input").on("blur",function(){
        $("#Online-searchbox1 .miniPopup").slideUp(150);
    })
    $("#Online-searchbox1 input").on("input",function(){
        $("#Online-searchbox1 .miniPopup").slideDown(150);
        $("#Online-searchbox1 input").parent().addClass("show-delete");
    })
    $("#Online-searchbox1 .icon-delete").click(function(){
        $("#Online-searchbox1 input").val("").focus();
        $(this).parent().removeClass("show-delete");
        $("#Online-searchbox1 input").trigger("keyup");
    })

    $("#Online-searchbox2 input").on("blur",function(){
        $("#Online-searchbox2 .miniPopup").slideUp(150);
    })
    $("#Online-searchbox2 input").on("input",function(){
        $("#Online-searchbox2 .miniPopup").slideDown(150);
        $("#Online-searchbox2 input").parent().addClass("show-delete");
    })
    $("#Online-searchbox2 .icon-delete").click(function(){
        $("#Online-searchbox2 input").val("").focus();
        $(this).parent().removeClass("show-delete");
        $("#Online-searchbox2 input").trigger("keyup");
    })
    $(".order_history_Store-table .show-btn").click(function(){
        if($(window).width()<768){
            if($(this).parent().parent().parent().hasClass("active")){
                $(this).parent().parent().parent().removeClass("active");
                $(this).parent().parent().parent().find(".row2").slideUp();
            }else{
                $(".order_history_Store-table .tr").removeClass("active");
                $(this).parent().parent().parent().addClass("active");
                $(".order_history_Store-table .row2").slideUp();
                $(this).parent().parent().parent().find(".row2").stop().slideDown();
            }
        }
    })

    /*$(".order_history_Store-table .row1").click(function(){
        if($(window).width()>767){
            if($(this).parent().hasClass("active")){
                $(this).parent().removeClass("active");
                $(this).parent().find(".row2").slideUp();
            }else{
                $(".order_history_Store-table .tr").removeClass("active");
                $(this).parent().addClass("active");
                $(".order_history_Store-table .row2").slideUp();
                $(this).parent().find(".row2").stop().slideDown();
            }
        }
    })
    
    $(".order_history_Online2-table .show-btn").click(function(){
        if($(this).parent().parent().parent().hasClass("active")){
            $(this).parent().parent().parent().removeClass("active");
            $(this).parent().parent().parent().find(".row2").slideUp();
        }else{
            $(".order_history_Online2-table .tr").removeClass("active");
            $(this).parent().parent().parent().addClass("active");
            $(".order_history_Online2-table .row2").slideUp();
            $(this).parent().parent().parent().find(".row2").stop().slideDown();
        }
    })*/

    /* 20171229 - Removing sliding function for show-btn*/
    $(".order_history_Online2-table .show-btn").click(function(){
        if($(this).parent().parent().parent().hasClass("active")){
            $(this).parent().parent().parent().removeClass("active");
            $(this).parent().parent().parent().find(".row2").toggleClass("show");
        }else{
            $(".order_history_Online2-table .tr").removeClass("active");
            $(".order_history_Online2-table .tr .row2").removeClass("show");
            console.log("remove");
            $(this).parent().parent().parent().addClass("active");
            $(this).parent().parent().parent().find(".row2").toggleClass("show");
        }
    })

})