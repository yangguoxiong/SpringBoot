$(function(){
    $(".mobile-menu-3 span").text("更新個人資訊");
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
    $(".more-part .more-part-title").click(function(){
    	if($(this).parent().hasClass("active")){
    		$(this).parent().find(".more-part-drop-box").slideUp();
    		$(this).parent().removeClass("active");
    	}else{
    		$(this).parent().find(".more-part-drop-box").stop().slideDown();
    		$(this).parent().addClass("active")
    	}
    })

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
        $(".myaccount_MyProfile input").each(function(){
            if($(this).hasClass("error")){
                $("#"+$(this).attr("id")+"-msg").removeClass("hide");
            }
        })
    })
})