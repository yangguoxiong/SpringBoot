$(function(){
    $(".mobile-menu-3 span").text("再次選購");
    $(".globalWrapper").addClass("show-mobile-menu-2 menu-2-myAccount");

    $(".select-all input").click(function(){
    	if($(this)[0].checked){
    		$(".historyTable input[type='checkbox']").prop("checked",true);
    		$(".watson-delivery[data-id='watson'] input , .watson-delivery[data-id='vendor'] input[type='checkbox']").prop("checked",true);
    	}else{
    		$(".historyTable input[type='checkbox']").prop("checked",false);
    		$(".watson-delivery[data-id='watson'] input , .watson-delivery[data-id='vendor'] input[type='checkbox']").prop("checked",false);
    	}
    })

    $(".watson-delivery[data-id='watson'] input").click(function(){
    	if($(this)[0].checked){
    		$(".historyTable[data-id='watson'] input[type='checkbox']").prop("checked",true);
    	}else{
    		$(".historyTable[data-id='watson'] input[type='checkbox']").prop("checked",false);
    	}
    })

    $(".watson-delivery[data-id='vendor'] input").click(function(){
    	if($(this)[0].checked){
    		$(".historyTable[data-id='vendor'] input[type='checkbox']").prop("checked",true);
    	}else{
    		$(".historyTable[data-id='vendor'] input[type='checkbox']").prop("checked",false);
    	}
    })
})