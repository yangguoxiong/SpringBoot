$(function(){
    $(".mobile-menu-3 span").text("退貨 00245101");
    $(".globalWrapper").addClass("show-mobile-menu-2 menu-2-myAccount");
    $(".return-word").niceScroll({
        "horizrailenabled": false,
        "cursorcolor": "#009AA9",
        "cursorwidth": "8px",
        "hidecursordelay": 1000,
        "railpadding": { top: 0, right: 1, left: 0, bottom: 0 },
    });
    
    var valida=0;
    $("#send-btn").click(function(){
        valida=0;
        if($("#name").val().trim().length==0){
            $("#name").addClass("error");
            valida=1;
        }
        if($("#account-name").val().trim().length==0){
            $("#account-name").addClass("error");
            valida=1;
        }
        if($("#bank-no").val().trim().length==0){
            $("#bank-no").addClass("error");
            valida=1;
        }
        if($("#bank select").val()==""){
            $("#bank").addClass("red");
            $("#bank-msg").removeClass("hide");
            valida=1;
        }
        if($("#agree").prop("checked")==false){
            $("#agree").addClass("error");
            valida=1;
        }
        if($("#reason select").val()==""){
            $("#reason").addClass("red");
            $("#reason-msg").removeClass("hide");
            valida=1;
        }
        if($("#branch select").val()==""){
            $("#branch").addClass("red");
            $("#branch-msg").removeClass("hide");
            valida=1;
        }
        $(".myAccountAddressBook_Page input").each(function(){
            if($(this).hasClass("error")){
                $("#"+$(this).attr("id")+"-msg").removeClass("hide");
            }
        })
        if(valida==0){
            overlayOpen("comfirm-popup");
        }
    })
})