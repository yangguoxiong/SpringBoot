$(function(){
    $(".mobile-menu-3 span").text("產品評論");
    $(".globalWrapper").addClass("show-mobile-menu-2 menu-2-myAccount");
     
    $(".comment-tabs a").click(function(){
        $(".comment-tabs a").removeClass("active");
        $(this).addClass("active");
        var id=$(this).data("id");
        $(".comment-table-box").hide();
        $(".comment-table-box[data-id='"+id+"']").show();
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
})