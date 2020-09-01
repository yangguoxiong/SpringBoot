$(function(){
    $(".globalWrapper").addClass("checkoutWrapper");
    $("#change-address").click(function(){
        $(".checkout_homeD_content").removeClass("show-part-add-address").addClass("show-part-address-list");
    })
    $("#add-address").click(function(){
        $(".part-address .tool-box").attr("style","");
        $(".checkout_homeD_content").removeClass("show-part-address-list").addClass("show-part-add-address");
        $("html,body").animate({scrollTop: $(".part-add-address").offset().top-86}, 200);
    })
    $("#city-select").on("changed.bs.select",function(){
        $('#area-code').selectpicker('val', $(this).val());
        if($(this).val()=='hongkong'){
            $("#tel-list input").attr("disabled","true");
        }else{
            $("#tel-list input").removeAttr("disabled");
        }
    })
    $("#area-code").on("changed.bs.select",function(){
        $('#city-select').selectpicker('val', $(this).val());
        if($(this).val()=='hongkong'){
            $("#tel-list input").attr("disabled","true");
        }else{
            $("#tel-list input").removeAttr("disabled");
        }
    })
    $(".part-address-list-box .checkbox-label input[type='radio']").click(function(){
        $(".part-address-list-box .checkbox-label input[type='radio']").each(function(){
            if($(this).prop("checked")){
                $(this).parent().parent().addClass("active");
            }else{
                $(this).parent().parent().removeClass("active");
            }
        })
    })
    $(".part-address-list-box .tr-edit").click(function(){
        $(".checkout_homeD_content").removeClass("show-part-address-list").addClass("show-part-add-address");
        var that=$(this).parent().parent().parent();
        $(".part-add-address #name").val(that.find("[data-id='name']").text());
        $(".part-add-address #tel").val(that.find("[data-id='tel']").text());
        $(".part-add-address #mail").val(that.find("[data-id='mail']").text());
        $(".part-add-address #city").val(that.find("[data-id='city']").text());
        $(".part-add-address #address").val(that.find("[data-id='address']").text());
        $('#city-select').selectpicker('val', that.find("[data-id='city']").data("name"));
        $('#area-code').selectpicker('val', that.find("[data-id='city']").data("name"));                
    })
    $("#submit2").click(function(){
        if($("#name").val().trim().length==0){
            $("#name").addClass("error");
        }
        if($("#mail").val().trim().length==0){
            $("#mail").addClass("error");
        }
        if($("#tel").val().trim().length==0){
            $("#tel").addClass("error");
        }
        if($("#address").val().trim().length==0){
            $("#address").addClass("error");
        }
        if($("#city1 select").val()==""){
            $("#city1").addClass("red");
            $("#city1-msg").removeClass("hide");
        }
        if($("#city2 select").val()==""){
            $("#city2").addClass("red");
            $("#city2-msg").removeClass("hide");
        }
        $(".checkout_homeD input").each(function(){
            if($(this).hasClass("error")){
                $("#"+$(this).attr("id")+"-msg").removeClass("hide");
            }
        })
    })
    function tool_box_hei(){
        if($(window).width()<980){
            var height=$(window).height()-$(".part-address .tool-box").offset().top-$(".part-address .tool-box").height();
            $(".part-address .tool-box").css("margin-top",height+"px");
        }
    }
    tool_box_hei();
})