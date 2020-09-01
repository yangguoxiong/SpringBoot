$(function(){
    $(".mobile-menu-3 span").text("訂單 00245101");
    $(".globalWrapper").addClass("show-mobile-menu-2 menu-2-myAccount");

    $(".cash-discount").click(function(){
      $(this).toggleClass("active");
      $("#cash-discount").toggleClass("hide");
    })

    $(".read-progress-btn").click(function (e) {
    	$(this).parent().toggleClass("show-content");
    })
    $(".read-progress").click(function(e){
    	e.stopPropagation();
    })
    $(document).click(function(){
    	$(".read-progress").removeClass("show-content");
    })

    $("#comfirm-cancel-btn").click(function(){
        $(".cancel-order-btn").text('已取消 11/03 21:22').addClass("disabled").removeClass("overlayOpen-btn");
    })

    var cancelBtn;
    $(".single-cancel").click(function(){
        if(!$(this).hasClass("disabled")){
            cancelBtn=$(this);
            overlayOpen("single-comfirm-popup");
        } 
    })
    $("#single-comfirm-popup #single-cancel-btn").click(function(){
        cancelBtn.text('已取消').addClass("disabled");
    })
})