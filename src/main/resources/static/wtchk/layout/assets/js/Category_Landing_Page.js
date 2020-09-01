$(function(){
    if($('main').hasClass('Category_Landing_Page')){
        $('.globalWrapper.show-mobile-PLP-menu .mobile-PLP-menu').hide();
    }
    $(".mobile-PLP-menu .h1 .s1").text("SKINCARE");
    $(".mobile-PLP-menu .h1 .s2").text("Total: 294 Items");
    $(".globalWrapper").addClass("show-mobile-PLP-menu");
    var mySwiper = new Swiper('#main_banner-swiper-container', {
        autoplay: 5000,
        onSlideChangeEnd: function(swiper){
            $(".banner_progress .cell").removeClass("active");
            $(".banner_progress .cell").eq(swiper.activeIndex).addClass("active");
        }
    })
    $(".banner_progress .cell").click(function(){
        mySwiper.slideTo($(this).index());
    })

    var brandLogo = new Swiper('#brandLogo-swiper-container',{
        slidesPerView : 'auto',
        prevButton:'#brandLogo-prev',
        nextButton:'#brandLogo-next',
    })

    var Sub_Categories = new Swiper('#Sub_Categories-swiper-container',{
        slidesPerView : 'auto',
        //spaceBetween : 12,
        prevButton:'#Sub_Categories-prev',
        nextButton:'#Sub_Categories-next',
    })

    $(".bmi-bmr-table .td-sex .tab span").click(function(){
        $(this).parent().find("span").removeClass("active");
        $(this).addClass("active");
    })
    $(".Average-Daily .drop .drop-title").click(function(){
        if($(this).parent().hasClass("active")){
            $(this).parent().find(".drop-box").slideUp();
            $(this).parent().removeClass("active");
        }else{
            $(this).parent().find(".drop-box").stop().slideDown();
            $(this).parent().addClass("active")
        }
    })
    $(".bmi-bmr-th a").click(function(){
        $(".bmi-bmr-th a").removeClass("active");
        $(this).addClass("active");
        $(".bmi-td").addClass("hide");
        $(".bmi-td[data-id='"+$(this).data("id")+"']").removeClass("hide");
    })


    $(".bmi-td[data-id='bmi'] .green-btn a").click(function(){
        var valide=0;
        if($("#heigth").val().trim().length==0){
            $("#heigth").addClass("error");
            valide=1;
        }
        if($("#weigth").val().trim().length==0){
            $("#weigth").addClass("error");
            valide=1;
        }
        $(".bmi-td[data-id='bmi'] input").each(function(){
            if($(this).hasClass("error")){
                $("#"+$(this).attr("id")+"-msg").removeClass("hide");
            }
        })
        if(valide==0){
            $(".bmi-bmr-table .result .welcome").addClass("hide");
            $(".bmi-bmr-table .result .press").removeClass("hide");
        }
    })
    $(".bmi-td[data-id='bmr'] .green-btn a").click(function(){
        var valide=0;
        if($("#age2").val().trim().length==0){
            $("#age2").addClass("error");
            valide=1;
        }
        if($("#heigth2").val().trim().length==0){
            $("#heigth2").addClass("error");
            valide=1;
        }
        if($("#weigth2").val().trim().length==0){
            $("#weigth2").addClass("error");
            valide=1;
        }
        $(".bmi-td[data-id='bmr'] input").each(function(){
            if($(this).hasClass("error")){
                $("#"+$(this).attr("id")+"-msg").removeClass("hide");
            }
        })
        if(valide==0){
            $(".bmi-bmr-table .result .welcome").addClass("hide");
            $(".bmi-bmr-table .result .press").removeClass("hide");
        }
    })
    $(".PLP-Filter .checkbox-label input[type='checkbox']").click(function(){

        if($(this).parent().parent().parent().find("input[type='checkbox']").length>0){
            if($(this).parent().parent().parent().find("input[type='checkbox']:checked").length>0){
                $(this).parent().parent().parent().parent().find(".clear-all").show();
            }else{
                $(this).parent().parent().parent().parent().find(".clear-all").hide();
            }
        }

        if($(this).prop("checked")){
            $(this).parent().parent().find("span a").addClass("active");
        }else{
            $(this).parent().parent().find("span a").removeClass("active");
        }
        PLP_Filter3();
    })
    function PLP_Filter3(){
        $(".PLP-Filter3 ul").html('');
        $(".PLP-Filter .checkbox-label input[type='checkbox']:checked").each(function(){
            $(".PLP-Filter3 ul").append('<li data-value="'+$(this).data('value')+'">'+$(this).data('value')+' <i class="icon-delete"></i></li>');
        })
    }
    $("body").on("click",".PLP-Filter3 ul li .icon-delete",function(){
        var value=$(this).parent().data("value");
        $(this).parent().remove();
        $('.PLP-Filter .checkbox-label input[data-value="'+value+'"][type="checkbox"]:checked').prop("checked",false);
        $('input[data-value="'+value+'"][type="checkbox"]').parent().parent().find("span a").removeClass("active");
        if($('input[data-value="'+value+'"][type="checkbox"]').parent().parent().parent().find("input[type='checkbox']:checked").length<=0){
            $('input[data-value="'+value+'"][type="checkbox"]').parent().parent().parent().parent().find(".clear-all").hide();
        }
    })
    $(".PLP-Filter .show-all").click(function(){
        $(this).parent().parent().toggleClass("show-h2-box");
    })
    $(".PLP-Filter .clear-all").click(function(){
        $(this).parent().parent().find("input[type='checkbox']").prop("checked",false);
        $(this).parent().parent().find("span a").removeClass("active");
        $(this).hide();
        PLP_Filter3();
    })
    $(".filter-btn .green-empty-btn").click(function(){
        $(".PLP-Filter input[type='checkbox']").prop("checked",false);
        $(".PLP-Filter .price input").val(0);
        $(".PLP-Filter .clear-all").hide();
        PLP_Filter3();
    })
    $(".PLP-Filter .reset").click(function(){
        $(this).parent().parent().find("input").val(0);
    })  
    $(".PLP-Filter .box-head i").click(function(){
        $(this).parent().parent().find(".box-content").slideToggle();
        $(this).parent().toggleClass("active");
    })
    $(".PLP-Filter .box-head").click(function(){
        if($(this).width()<769){
            $(this).parent().find(".box-content").show();
        }
        if($(this).parent().hasClass("level3")){
            $(this).parent().parent().addClass("open-level3");
        }   
    })
    $(".PLP-Filter .h2 span").click(function(){
        $(this).parent().find("input").click();
    })
    $(".box-content h1").click(function(){
        $(".box-content h1").removeClass("active");
        $(this).addClass("active");
    })

    $(".filter-title .icon-close").click(function(){
        $(".PLP_content").removeClass("show_filter_by");
    })
    $(".Filter_by_m").click(function(){
        $(".PLP_content").addClass("show_filter_by");
    })
    $(".Filter2-right .list-style").click(function(){
        $(this).toggleClass("active");
        $(".bottomProductSales").toggleClass("list-row");
    })
    $(".PLP-Filter2 .page .prev").click(function(){
        var val=parseInt($(this).parent().find(".s1").text());
        if(val>1){
            val=val-1;
        }
        if(val==1){
            $(this).removeClass("active");
        }else{
            $(".PLP-Filter2 .page .next").addClass("active");
        }
        $(this).parent().find(".s1").text(val);
    })
    $(".PLP-Filter2 .page .next").click(function(){
        var val=parseInt($(this).parent().find(".s1").text());
        var val2=parseInt($(this).parent().find(".s2").text());
        if(val<val2){
            val=val+1;
        }
        if(val==val2){
            $(this).removeClass("active");
        }else{
            $(".PLP-Filter2 .page .prev").addClass("active");
        }
        $(this).parent().find(".s1").text(val);
    })

    $('.brand-search input').bind('keyup',function(){
        var filterKey = $(this).val().toLowerCase();

        $('.brand-search-list .h2').each(function( index ) {
            var value = $(this).find('input').attr('data-value').toLowerCase();

            if(value.indexOf(filterKey) > -1){
                $(this).show();
            }else{
                $(this).hide();
            }
        });
    });

    $(".brand-search input").on("input",function(){
        $(".brand-search input").parent().addClass("show-delete");
    })
    $(".brand-search .icon-delete").click(function(){
        $(".brand-search input").val("").focus();
        $(this).parent().removeClass("show-delete");
        $(".brand-search input").trigger("keyup");
    })
    if($(window).width()<980){
        $(".PLP .PLP_content .contentLeft .PLP-Filter .box.level3 .box-content").each(function(){
            $(this).width($(window).width()-30);
        })
    }
})