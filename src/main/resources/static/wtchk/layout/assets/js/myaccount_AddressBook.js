$(function(){
    $(".mobile-menu-3 span").text("收件人記錄本");
    $(".globalWrapper").addClass("show-mobile-menu-2 menu-2-myAccount");
     
    $(".PLP-Filter .box-head i").click(function(){
        $(this).parent().parent().find(".box-content").slideToggle();
        $(this).parent().toggleClass("active");
    })

    $("#city-select").on("changed.bs.select",function(){
        $('#area-code').selectpicker('val', $(this).val());
        if($(this).val()=='hongkong'){
            $("#tel-list input").attr("disabled","true");
            $("#tel-list").addClass("hide");
        }else{
            $("#tel-list input").removeAttr("disabled");
            $("#tel-list").removeClass("hide");
        }

        if($(this).val()=='taiwan'){
            $("#isTaiwang").removeClass("hide");
            $("#notTaiwang").addClass("hide");
            $(".area-code-tel").removeClass("nonTW-tel");
        }else{
            $("#isTaiwang").addClass("hide");
            $("#notTaiwang").removeClass("hide");
            $(".area-code-tel").addClass("nonTW-tel");
        }
    })
    // $("#area-code").on("changed.bs.select",function(){
    //     $('#city-select').selectpicker('val', $(this).val());
    //     if($(this).val()=='hongkong'){
    //         $("#tel-list input").attr("disabled","true");
    //     }else{
    //         $("#tel-list input").removeAttr("disabled");
    //     }
    // })

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
        $(".part-address-list").hide();
        $(".part-add-address").show();
        $("#addProvide").parent().addClass("disabled");
        var that=$(this).parent().parent().parent();
        $(".part-add-address #name").val(that.find("[data-id='name']").text());
        $(".part-add-address #tel").val(that.find("[data-id='tel']").text());
        $(".part-add-address #mail").val(that.find("[data-id='mail']").text());
        $(".part-add-address #city").val(that.find("[data-id='city']").text());
        $(".part-add-address #address").val(that.find("[data-id='address']").text());
        $('#city-select').selectpicker('val', that.find("[data-id='city']").data("name"));
        $('#area-code').selectpicker('val', that.find("[data-id='city']").data("name"));
        $("html,body").animate({scrollTop: $(".part-add-address").offset().top-86}, 200);                
    })
    $(".part-address-list-box").on("click",".icon-delete",function(){
        $(this).parent().remove();
    })
    $("#addProvide").click(function(){
        $(".part-add-address").show();
        $("#addProvide").parent().addClass("disabled");
        $(".part-add-address input").val("");
        $("html,body").animate({scrollTop: $(".part-add-address").offset().top-86}, 200);
    })
    var valida=0;
    $("#submit2").click(function(){
        valida=0;
        if($("#name").val().trim().length==0){
            $("#name").addClass("error");
            valida=1;
        }
        if($("#tel").val().trim().length==0){
            $("#tel").addClass("error");
            valida=1;
        }
        if($("#address").val().trim().length==0){
            $("#address").addClass("error");
            valida=1;
        }
        if($("#city1 select").val()==""){
            $("#city1").addClass("red");
            $("#city1-msg").removeClass("hide");
            valida=1;
        }
        if($("#city2 select").val()==""){
            $("#city2").addClass("red");
            $("#city2-msg").removeClass("hide");
            valida=1;
        }
        $(".part-add-address input").each(function(){
            if($(this).hasClass("error")){
                $("#"+$(this).attr("id")+"-msg").removeClass("hide");
            }
        })
        if(valida==0){
            $(".part-add-address").hide();
            $("#addProvide").parent().removeClass("disabled");
            $(".part-address-list").show();
        }
    })
})