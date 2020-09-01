$(function(){
    var mySwiper = new Swiper('#main-banner-container', {
        autoplay: 5000,
        pagination : '#main-banner-pagination',
        paginationClickable :true,
        prevButton:'#main-banner-prev',
        nextButton:'#main-banner-next',
		preventClicks				 : false,
		preventClicksPropagation	 : false,
    })

    var quick_link = new Swiper('#quick-link-container',{
        slidesPerView : $("#quick-link-container .swiper-slide").length>5?5:$("#quick-link-container .swiper-slide").length,
        spaceBetween : 0,
        //slidesOffsetBefore : $("#quick-link-container .swiper-slide").width()*$("#quick-link-container .swiper-slide").length>$(window).width()?0:($(window).width()-$("#quick-link-container .swiper-slide").width()*$("#quick-link-container .swiper-slide").length)/2,
        prevButton:'#quick-link-prev',
        nextButton:'#quick-link-next',
        breakpoints: { 
            1279: {
                slidesPerView : $("#quick-link-container .swiper-slide").length>4?4.5:$("#quick-link-container .swiper-slide").length,
            },
            767: {
                slidesPerView : $("#quick-link-container .swiper-slide").length>4?4.5:$("#quick-link-container .swiper-slide").length,
            }
        }
    })

    var carousel1 = new Swiper('#small-banner-carousel1', {
        pagination : '#small-banner-carousel1-pagination',
        paginationClickable :true,
        autoplay: 5000,
    })

    var carousel2 = new Swiper('#small-banner-carousel2', {
        pagination : '#small-banner-carousel2-pagination',
        paginationClickable :true,
        autoplay: 5000,
    })

    var carousel3 = new Swiper('#small-banner-carousel3', {
        pagination : '#small-banner-carousel3-pagination',
        paginationClickable :true,
        autoplay: 5000,
    })

    $(".category-header a").click(function(){
        $(".category-header ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".ProductSales").addClass("hide");
        $(".ProductSales[data-id='"+$(this).data("id")+"']").removeClass("hide");
    });
    
    //wtchk brand logo slider
    var brandSwiper;
    if ($(window).width() < 400) {
        brandSwiper = new Swiper('#brand-logo-container', {
            direction: 'horizontal',
            slidesPerView: 4.2,
            spaceBetween: 0,
            loop: true,
            mousewheel: true,
            prevButton:'#brand-logo-prev',
            nextButton:'#brand-logo-next',
        });
    } else if ($(window).width() < 768) {
        brandSwiper = new Swiper('#brand-logo-container', {
            direction: 'horizontal',
            slidesPerView: 4.2,
            spaceBetween: 0,
            loop: true,
            mousewheel: true,
            prevButton:'#brand-logo-prev',
            nextButton:'#brand-logo-next',
        });
    } else if($(window).width() < 980) {
        brandSwiper = new Swiper('#brand-logo-container', {
            direction: 'horizontal',
            slidesPerView: 6,
            spaceBetween: 0,
            loop: true,
            mousewheel: true,
            prevButton:'#brand-logo-prev',
            nextButton:'#brand-logo-next',
        });
    } else {
        brandSwiper = new Swiper('#brand-logo-container', {
            direction: 'horizontal',
            slidesPerView: 7,
            spaceBetween: 0,
            loop: true,
            mousewheel: true,
            prevButton:'#brand-logo-prev',
            nextButton:'#brand-logo-next',
        });
    }
    
    $('.pop-up .close-btn').click(function () {
        $(this).closest('.pop-up').hide();
    });
})