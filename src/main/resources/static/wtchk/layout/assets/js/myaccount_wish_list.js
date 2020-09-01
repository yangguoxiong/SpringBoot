$(function(){
    $(".mobile-menu-3 span").text("貨到通知");
    $(".globalWrapper").addClass("show-mobile-menu-2 menu-2-myAccount");
     
    $(".PLP-Filter .box-head i").click(function(){
        $(this).parent().parent().find(".box-content").slideToggle();
        $(this).parent().toggleClass("active");
    })

    $("#myaccount_wish_list-select select").on("change",function(){
    	if($(this).find("option:selected").data("value")=='newOne'){
            if($(this).find("option").length>10){
                $("#myaccount_wish_list-msg").removeClass("hide");
                $(this).parent().parent().parent().find(".reset-bootstrp-select").addClass("red");
            }else{
            	$("#myaccount_wish_list-add-input").val("");
                $("#myaccount_wish_list-select-btn").addClass("disabled");
                $("#myaccount_wish_list-add").show();
                $("#myaccount_wish_list-add .clean").addClass("hide");
                $("#myaccount_wish_list-add-input").focus();
            }
        }else{
            $("#myaccount_wish_list-title").text($(this).val());
            $("#myaccount_wish_list-select-btn").removeClass("disabled");
            $("#myaccount_wish_list-input").hide();
            $("#myaccount_wish_list-select").show();
            $("#myaccount_wish_list-add").hide();
        }
    })

    $("#myaccount_wish_list-add input").on("input",function(){
        if($(this).val().length>0){
            $("#myaccount_wish_list-add .clean").removeClass("hide");
        }else{
            $("#myaccount_wish_list-add .clean").addClass("hide");
        }
    })

    $("#myaccount_wish_list-add .clean").click(function(){
        $("#myaccount_wish_list-add input").val("");
        $("#myaccount_wish_list-add .clean").addClass("hide");
    })

    $("body").on("click","#myaccount_wish_list-add .add",function(e){
        var val=$(this).parent().find(".input input").val();
        if($("#myaccount_wish_list-select select option").length>10&&$("#myaccount_wish_list-select option:selected").data("value")=='newOne'){
            $("#myaccount_wish_list-select .reset-bootstrp-select").addClass("red");
            $("#myaccount_wish_list-add").addClass("hide");
            $("#myaccount_wish_list-msg").removeClass("hide");
        }else{
            if($.trim(val)!=""&&$("#myaccount_wish_list-select option:selected").data("value")=='newOne'){
                $("#myaccount_wish_list-select select option").removeAttr("selected");
                $("#myaccount_wish_list-select select").append("<option selected>"+val+"</option>");
                $("#myaccount_wish_list-title").text(val);
                $('#myaccount_wish_list-select .selectpicker').selectpicker('refresh');
                $("#myaccount_wish_list-add").hide();
                $("#myaccount_wish_list-select").show();
                $("#myaccount_wish_list-select-btn").removeClass("disabled");
            }else{
                $("#myaccount_wish_list-add-input").addClass("error");
                $("#myaccount_wish_list-add-input-msg").removeClass("hide");
            }
        }
    })

    $("#myaccount_wish_list-select-btn").click(function(){
        if(!$(this).hasClass("disabled")){
            var val=$("#myaccount_wish_list-select select").val();
            $("#myaccount_wish_list-select").hide();
            $("#myaccount_wish_list-edit input").val(val);
            $("#myaccount_wish_list-edit").show();
            $("#myaccount_wish_list-edit-input").focus();
        }  
    })
    $("#myaccount_wish_list-edit input").on("input",function(){
        if($(this).val().length>0){
            $("#myaccount_wish_list-edit .clean").removeClass("hide");
        }else{
            $("#myaccount_wish_list-edit .clean").addClass("hide");
        }
    })
    $("#myaccount_wish_list-edit .clean").click(function(){
        $("#myaccount_wish_list-edit input").val("");
        $("#myaccount_wish_list-edit .clean").addClass("hide");
    })
    $("body").on("click","#myaccount_wish_list-edit .edit",function(e){
        var val=$("#myaccount_wish_list-edit input").val();
        if($.trim(val)!=""){
            $("#myaccount_wish_list-select select option:selected").text(val).attr("value",val);
            $("#myaccount_wish_list-title").text(val);
            $('#myaccount_wish_list-select .selectpicker').selectpicker('refresh');
            $("#myaccount_wish_list-edit").hide();
            $("#myaccount_wish_list-select").show();
        }else{
            $("#myaccount_wish_list-edit-input").addClass("error");
            $("#myaccount_wish_list-edit-input-msg").removeClass("hide");
        }
    })
    $("body").on("click","#myaccount_wish_list-edit .cancel",function(e){
        $("#myaccount_wish_list-edit").hide();
        $("#myaccount_wish_list-select").show();
    })
})