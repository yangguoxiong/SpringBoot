$(function(){
    $(".preference-part .title").click(function(){
        if($(this).parent().hasClass("active")){
            $(this).parent().find(".preference-part_drop_box").slideUp();
            $(this).parent().removeClass("active");
        }else{
            $(this).parent().find(".preference-part_drop_box").stop().slideDown();
            $(this).parent().addClass("active")
        }
    })
    $(".preference-part .hide-all").click(function(){
    $(".preference-part .title").click();
    })
});

/* 20180119 - Homepage 5 secs timeout slider */
$(function(){
    setTimeout(function(){
        $('.homepage .timeout_slider').slideUp(500)
    },5000)
});
/* End of 20180119 - Homepage 5 secs timeout slider */

/* WTCHK */
$(document).ready(function(){
    $('.mSearchbox .icon-search').on('click', function(){
        $('.mSearchMenu').show();
        $('.globalWrapper').addClass('mobile-searching');
        $('#searchinput').addClass('active').focus();
        if(!$('#searchinput').val()){
    		$('.search-suggestion').show();
    		$('.search-brand').hide();
    	}
    });

    $('#searchinput').on('click',function(){
    	if(!$(this).val()){
    		$(this).addClass('active');
    		$('.search-suggestion').show();
    		$('.search-brand').hide();
    	}
    });

    $('#searchinput').on('input',function(){
    	$('.mSearchMenu .searchbox .search-field').addClass('show-delete');
    	$('.search-suggestion').hide();
    	$('.search-brand').show();
    });

    $('.mSearchMenu .icon-delete').on('click',function(){
    	$('#searchinput').val('');
    	$('.mSearchMenu .searchbox .search-field').removeClass('show-delete');
    	$('.search-suggestion').show();
    	$('.search-brand').hide();
    });

    $('.mSearchMenu .searchbox .cancel-search').on('click',function(){
    	$('.globalWrapper').removeClass('mobile-searching');
    	$('.mSearchMenu').hide();
    });
});


/* 20180228 - For revamp store locator*/
//sticky mobile header
var num = 150;
var lastScrollTop = 0;

if($(window).width()<768){
    $(window).bind('scroll',function(){
        var st = $(this).scrollTop();
        
        // Interested element caching
        var hkGrid = $('ul .hongkongisland');
        var klGrid = $('ul .kowloon');
        var ntGrid = $('ul .newterritories');
        var addressDistrict = $('.store-map .map .map-address .address-district');

        var hkTop = hkGrid.offset().top - $(window).scrollTop() - addressDistrict.height() - 80;
        var klTop = klGrid.offset().top - $(window).scrollTop() - addressDistrict.height() - 80;
        var ntTop = ntGrid.offset().top - $(window).scrollTop() - addressDistrict.height() - 80;

        var storeListTop = $('.map-address').offset().top - $(window).scrollTop() - 70;
        
        // Scrolling Down
        if (st > lastScrollTop) {   
            
            if ($('.checkout_store_content .choseStoreFilter').offset().top - $(window).scrollTop() > -55) {
                $('.fixedMapFilter').empty().removeClass('showFixedMapFilter');
                
            } else {
                if($('.fixedMapFilter').html().length !== 0) {
                    $('.fixedMapFilter').removeClass('showFixedMapFilter');
                }
            }
            
            $('.address-district').removeClass('showFixedMapFilter');
            $('.address-district').removeClass('fixed-mobile');
            $('.store-map .map .map-address').css('padding-top', '0');

            if ( ntTop <= 0 && klTop <= 0 && hkTop <= 0 ) {
                $('.store-map .map .map-address').css('padding-top', addressDistrict.outerHeight());
                $('.address-district.nt').addClass('fixed-mobile');
            
            } else if ( klTop <= 0 && ntTop > 0 && hkTop <= 0 ) {
                $('.store-map .map .map-address').css('padding-top', addressDistrict.outerHeight());
                $('.address-district.kl').addClass('fixed-mobile');
                
            } else if ( hkTop <= 0 && ntTop > 0 && klTop > 0 ) {
                $('.store-map .map .map-address').css('padding-top', addressDistrict.outerHeight());
                $('.address-district.hk').addClass('fixed-mobile');
            }
        
        // Scrolling Up
        } else {    
            if ($('.checkout_store_content .choseStoreFilter').offset().top - $(window).scrollTop() > -55) { 
                // if the default filter section is visible, remove and hide the fixed filter part
                $('.fixedMapFilter').empty();
                $('.fixedMapFilter').removeClass('showFixedMapFilter');
                $('.address-district').removeClass('showFixedMapFilter');
                
            } else {
                // if the default filter section is INVISIBLE
                
                // if fixed filter does not init yet
                if($('.fixedMapFilter').html().length === 0) {
                    // clone the current default filter into it
                    $('.fixedMapFilter').addClass('showFixedMapFilter');
                    $('.checkout_store_content .choseStoreFilter').clone().appendTo( ".fixedMapFilter" );
                
                // if fixed filter init already, just show
                } else {
                    $('.fixedMapFilter').addClass('showFixedMapFilter');
                }
                
                $('.address-district').addClass('showFixedMapFilter');
            }
            
            $('.store-map .map .map-address').css('padding-top', '0');
            if ( storeListTop > 0) {
                $('.address-district').removeClass('fixed-mobile');
                
            } else if ( ntTop <= 0 && klTop <= 0 && hkTop <= 0 ) {
                $('.store-map .map .map-address').css('padding-top', addressDistrict.outerHeight());
                $('.address-district').removeClass('fixed-mobile');
                $('.address-district.nt').addClass('fixed-mobile');
                

            } else if ( klTop <= 0 && ntTop > 0 && hkTop <= 0 ) {
                $('.store-map .map .map-address').css('padding-top', addressDistrict.outerHeight());
                $('.address-district').removeClass('fixed-mobile');
                $('.address-district.kl').addClass('fixed-mobile');
                
            } else if ( hkTop <= 0 && ntTop > 0 && klTop > 0 ) {
                $('.store-map .map .map-address').css('padding-top', addressDistrict.outerHeight());
                $('.address-district').removeClass('fixed-mobile');
                $('.address-district.hk').addClass('fixed-mobile');
            }
            
        }
        
        lastScrollTop = st;
    });    
}

//select-filter detail menu
$(document).ready(function(){
    $('body').on('click','.width.select-filter.hidden-md.hidden-lg',function(){
        $('.select-filter-full').removeClass('hide');
        
        $('.select-filter-full i , .select-filter-full .select-filter-button .green-btn').on('click',function(){
            $('.select-filter-full').addClass('hide');
        })      
    })
})

/*mobile filter menu*/
$(document).ready(function(){
    $('.select-filter-button .green-empty-btn').click(function(){
        $('.checkbox-label input[type="checkbox"]:checked').prop('checked',false);
        $('.width.select-filter.hidden-md.hidden-lg').removeClass('checked');
    })
    $('.select-filter-button .green-btn').click(function(){
        if($('.checkbox-label input[type="checkbox"]:checked').prop('checked',true)){
            $('.width.select-filter.hidden-md.hidden-lg').addClass('checked');
        }
    })
})

//scroll to change district title
$(document).ready(function () {
    // Get window height, and the bottom of the viewport
    var windowHeight = $(window).height(),
            gridTop = $('.store-map .map .map-address ul').offset().top - $(window).scrollTop() + $('.store-map .map .map-address .address-district').height()+ $('.store-map .map .map-address .address-district').height(),
            gridBottom = gridTop + $('.store-map .map .map-address ul').height();

    // On each scroll event on window
    $('.store-map .map .map-address ul').scroll( function () {
        // Interested element caching
        var hkGrid = $('ul .hongkongisland');
        var klGrid = $('ul .kowloon');
        var ntGrid = $('ul .newterritories');
        
        // Get elemets top
        var hkTop = hkGrid.offset().top - $(window).scrollTop() - $('.store-map .map .map-address .address-district').height()*2-20;
        var klTop = klGrid.offset().top - $(window).scrollTop() - $('.store-map .map .map-address .address-district').height()*2-20;
        var ntTop = ntGrid.offset().top - $(window).scrollTop() - $('.store-map .map .map-address .address-district').height()*2-20;
        
        // Check if the element is in the current viewport
        if (ntTop <= gridTop && klTop < gridTop && hkTop < gridTop) {
            //$('.store-map .map .map-address .address-district').text('新界');
            $('.store-map .map .map-address .address-district').removeClass('fixed');
            $('.store-map .map .map-address .hongkongisland').removeClass('fixed');
            $('.store-map .map .map-address .address-district.nt').addClass('fixed');

        } else if (klTop <= gridTop && ntTop > gridTop && hkTop < gridTop) {
            //$('.store-map .map .map-address .address-district').text('九龍');
            $('.store-map .map .map-address .address-district').removeClass('fixed');
            $('.store-map .map .map-address .hongkongisland').removeClass('fixed');
            $('.store-map .map .map-address .address-district.kl').addClass('fixed');

        } else if (hkTop <= gridTop && ntTop > gridTop && klTop > gridTop) {
            //$('.store-map .map .map-address .address-district').text('香港島');
            $('.store-map .map .map-address .address-district').removeClass('fixed');
            $('.store-map .map .map-address .address-district.hk').addClass('fixed');
            $('.store-map .map .map-address .hongkongisland').addClass('fixed');
        }
    });    
});

/* 20180502 - Citi pwp vertification otp */
$(document).ready(function() {
    $('input.partition-otp').keydown(function(e) {
        if ((e.which == 8 || e.which == 46) && $(this).val() =='') {
            $(this).prev('input.partition-otp').focus();
        }else if ((e.which == 8 || e.which == 46) && $(this).val() !='') {
            return;
        }else if (this.value.length >= this.maxLength) {
            $(this).next('input').focus();
        }
    });
});


//countdown 90s
var count = 0;

var counter; //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  console.log(count);
  if (count < 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     document.getElementById("expired-otp").style.display = 'none';
     document.getElementById("send-otp").style.display = 'block';
     return;
  }

  //Do code for showing the number of seconds here
  document.getElementById("timer").innerHTML = count;
  
}

$(document).ready(function(){
    $('.citi-main .confirmation #confirm-otp').click(function(){
        $(this).hide();
        $('.citi-main .confirmation .citi-button-grey').show();
        count = 10;
        counter=setInterval(timer, 1000);
        timer();
        $('.citi-main .confirmation .error').show();
    })
})




$(document).ready(function(){
    $("#SliderSingle").slider({ from: 30, to: 102.5, step: 0.5, round: 2, format: { format: '##.00'}, dimension: 'HK$', skin: "round",
       onstatechange: function( value ){
           $("#redemptionAmount").val("" + value);
       }
   });
   $("body").on('change', 'input#redemptionAmount', function(){
       $("#SliderSingle").slider("value", $(this).val().replace("", ""));
   });
})


/* End of 20180502 - Citi pwp vertification otp */

/* 20180514 - Citi PWP Popup */
$(document).ready(function(){
    $('.citi-main .confirmation .continue-shopping a').click(function(){
        $('.pwp_confirmation').show();
    })
    $('.pwp_confirmation .pwp_confirmation_popup .close-btn').click(function(){
        $('.pwp_confirmation').hide();
    })
    $('.pwp_confirmation .pwp_confirmation_popup .back-btn .citi-button-blue a').click(function(){
        $('.pwp_confirmation').hide();
    })
})
/* End of 20180514 - Citi PWP Popup */

/* 20180525 - Mobile Search Filter Issue */
$(document).ready(function(){
    if($('main').hasClass('storeLocator_map')){
        $('header .fixedMapFilter').show();
    }
})
/* End of 20180525 - Mobile Search Filter Issue */ 



/* 20180809 - add pages for Category entry DY at homepage (by vendor) */
$(function() { 
  var dyProductsSwiper;
  dyProductsSwiper = new Swiper("#dy-products-carousel", {
    direction: "horizontal",
    slidesPerView: 5,
    spaceBetween: 0,
    prevButton: ".swiper-button-prev",
    nextButton: ".swiper-button-next",
    loop: false,
    breakpoints: {
      980: {
        slidesPerView: 5
      },
      979: {
        slidesPerView: 4
      },
      767: {
        slidesPerView: 2
      }      
    }
  });
});
/* End of 20180809 - add pages for Category entry DY at homepage (by vendor) */