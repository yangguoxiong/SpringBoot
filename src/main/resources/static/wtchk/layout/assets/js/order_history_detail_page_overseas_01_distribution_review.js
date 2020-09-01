$(function(){
    $(".mobile-menu-3 span").text("產品評論");
    $(".globalWrapper").addClass("show-mobile-menu-2 menu-2-myAccount");

   	$(".comment-tabs span").click(function(){ 
      var val=$(this).parent().next(".decription-area").find("textarea").val();
      $(this).parent().next(".decription-area").find("textarea").val(val+" "+$(this).text());
   	})

  $(".distribution_return-comment .star").on("click","i",function(){
		$(this).removeClass("icon-star02").addClass("icon-star01").prevAll().removeClass("icon-star02").addClass("icon-star01");
	   $(this).nextAll().removeClass("icon-star01").addClass("icon-star02");
     $(this).parent().attr("data-num",$(this).index());
  })

  $(".distribution_return-comment .star").on("mouseenter","i",function(){
    $(this).removeClass("icon-star02").addClass("icon-star01").prevAll().removeClass("icon-star02").addClass("icon-star01");
     $(this).nextAll().removeClass("icon-star01").addClass("icon-star02");
  }).on("mouseleave",function(e){
    $(this).find("i").eq($(this).attr("data-num")).click();
  })
  
})