$(document).ready(function(){
	$(".tnc_detail").niceScroll({
		"horizrailenabled": false,
		"cursorcolor": "#d8d8d8",
		"cursorwidth": "8px",
		"hidecursordelay": 1000
	});
	$(".ticket-box ul").niceScroll({
		"horizrailenabled": false,
		"cursorcolor": "#009AA9",
		"cursorwidth": "8px",
		"hidecursordelay": 1000
	});
  $('.popup-general .icon-close, .popup-general .background, #free-gift-popup .action-btn .green-btn, #free-gift-popup .more-btn').on('click', function(){ 
    $('.popup-general').hide(); 
    $('html').removeClass('overlay-open');
  });
  $('.summary_bar .total-amount').click(function(){
    $('#order-summary-popup').show();
    $('html').addClass('overlay-open');
  })
  $('.checkout_homeD .summary_bar .title .check_out-btn').hover(
    function() {
      $(this).parent().addClass( "hover" );
    }, function() {
      $(this).parent().removeClass( "hover" );
    }
  );
  $(".checkout_homeD .summary_bar .remind-alert.hidden-md").show().delay(3000).fadeOut();
  $('#order-summary-popup .paymentContentTop .saved_amount').click(function(){
         $(this).parent().toggleClass('active');
  })
  $('.checkout_homeD .item_details .delivery_details .saved_address_detail').click(function(e){

    if($(this).hasClass('add_new')){
      if($('#recipient_form').hasClass('remarks')){
        $('#recipient_form').removeClass('remarks');
      }
      $('.checkout_homeD .item_details .delivery_details .saved_address_detail').removeClass('active');
      $(this).toggleClass('active');
      $('.checkout_homeD .item_details .content .deliveryRemarks.default').hide();
      $('.checkout_homeD .item_details .delivery_details .saved_address .right-btn').hide();
      $('.checkout_homeD .item_details .content .sub-title.new-info').html('Create New Information');
      $('.checkout_homeD .item_details .delivery_details .tax_payer_info').hide();
      $('.checkout_homeD .item_details .content .recipient_form .deliveryRemarks').hide();
      $('.recipient_form').addClass('active');

      $('html, body').animate({
        scrollTop: $("#recipient_form").offset().top - 100
      }, 700);
    }else{
      $('.checkout_homeD .item_details .delivery_details .saved_address_detail').removeClass('active');
      $(this).toggleClass('active'); 
      $('.checkout_homeD .item_details .content .deliveryRemarks.default').show();
      $('.checkout_homeD .item_details .delivery_details .saved_address .right-btn').show();
      $('.checkout_homeD .item_details .delivery_details .tax_payer_info').show();
      $('.checkout_homeD .item_details .content .recipient_form').addClass('remarks');
      $('.checkout_homeD .item_details .content .recipient_form .deliveryRemarks').show();
      $('.recipient_form').removeClass('active');
    }
  }).on('click','.edit_address',function(e){
    if($('#recipient_form').hasClass('remarks')){
       $('#recipient_form').removeClass('remarks');
     }
    $('.checkout_homeD .item_details .delivery_details .saved_address .right-btn').hide();
     var that=$(this).parent();
        $(".recipient_form #first-name").val(that.find("[data-id='first-name']").text());
        $(".recipient_form #last-name").val(that.find("[data-id='last-name']").text());
        $(".recipient_form #mobile").val(that.find("[data-id='mobile']").text());
        $(".recipient_form #home-tel").val(that.find("[data-id='home-tel']").text());             
        $('.checkout_homeD .item_details .content .sub-title.new-info').html('Edit Information');
        $('.checkout_homeD .item_details .delivery_details .tax_payer_info').hide();
        $('.checkout_homeD .item_details .content .recipient_form .deliveryRemarks').hide();
        $('.recipient_form').addClass('active');


        $('html, body').animate({
            scrollTop: $("#recipient_form").offset().top - 100
        }, 700);

        e.StopPropagation();

  })
  $('.checkout_homeD .payment_details .select_payment_content .card-select input:radio[name="card-select"]').change(function(){
    $('.checkout_homeD .payment_details .select_payment_content .card-select label').removeClass('active');
    $(this).parent().parent().addClass('active');
    if($(this).hasClass('addNewCard')){
      $('.checkout_homeD .payment_details .select_payment_content .card-select .save_card').show();
    }else{
      $('.checkout_homeD .payment_details .select_payment_content .card-select .save_card').hide();
    }
  })
  $('.checkout_homeD .payment_details .select_payment_method .card-select input:radio[name="card-select"]').change(function(){
    $('.checkout_homeD .payment_details .select_payment_method .card-select label').removeClass('active');
    $(this).parent().parent().addClass('active');
    if($(this).hasClass('addNewCard')){
      $('.checkout_homeD .payment_details .select_payment_method .card-select .save_card').show();
    }else{
      $('.checkout_homeD .payment_details .select_payment_method .card-select .save_card').hide();
    }
  })
  //Sticky Summary bar
	  var secBottom = Math.round($('footer').offset().top);
    var contentHeight = $('.content_bottom').height();
    
        $.fn.followTo = function ( pos ) {

           var $this = this,
               $window = $(window);

           $window.scroll(function(e){

               if ($window.scrollTop() + $window.height() - contentHeight > pos) {

                   $this.css({
                       position: 'relative'
                   });
               } else {
                   $this.css({
                       position: 'fixed',
                       bottom: 0,
                       width: '100%'
                   });
               }
           });
        };
        $('.checkout_homeD .summary_bar').followTo(secBottom);

    $(window).on('resize',function(){
      var secBottom = Math.round($('footer').offset().top);
      var contentHeight = $('.content_bottom').height();

        $.fn.followTo = function ( pos ) {
           var $this = this,
               $window = $(window);

           $window.scroll(function(e){
               if ($window.scrollTop() + $window.height() - contentHeight > pos) {
               
                   $this.css({
                       position: 'relative'
                   });
               } else {
                   $this.css({
                       position: 'fixed',
                       bottom: 0,
                       width: '100%'
                   });
               }
           });
        };
        $('.checkout_homeD .summary_bar').followTo(secBottom);
    })

    //Select Payment Method
    $('.checkout_homeD .payment_details .select_payment_method .method').click(function(){
      if($(window).width()<768){
          if(!$(this).hasClass('alipayCN')){
            var desc;
            $('.descriptionContainer').show();
            if($(this).hasClass('visa')){
              $('.checkout_homeD .payment_details .select_payment_method .method').removeClass('active');
              $(this).addClass('active');
              $('.checkout_homeD .payment_details .select_payment_content .description').hide();
              desc = $('.checkout_homeD .payment_details .select_payment_content .description.visa').html();
              $('.descriptionContainer').html(desc);
            }else if($(this).hasClass('unionpay')){
              $('.checkout_homeD .payment_details .select_payment_method .method').removeClass('active');
              $(this).addClass('active');
              $('.checkout_homeD .payment_details .select_payment_content .description').hide();
              desc = $('.checkout_homeD .payment_details .select_payment_content .description.unionpay').html();
              $('.descriptionContainer').html(desc);
            }else if($(this).hasClass('alipayHK')){
              $('.checkout_homeD .payment_details .select_payment_method .method').removeClass('active');
              $(this).addClass('active');
              $('.checkout_homeD .payment_details .select_payment_content .description').hide();
              desc = $('.checkout_homeD .payment_details .select_payment_content .description.alipayHK').html();
              $('.descriptionContainer').html(desc);
            }

          }else{
            $('.descriptionContainer').hide();
            $('.checkout_homeD .payment_details .select_payment_method .method').removeClass('active');
            $(this).addClass('active');
            $('.checkout_homeD .payment_details .select_payment_content .description').hide();
            $('.checkout_homeD .payment_details .select_payment_content .description.alipayCN').show();
          }
      }else{
        if($(this).hasClass('visa')){
        $('.checkout_homeD .payment_details .select_payment_method .method').removeClass('active');
        $(this).addClass('active');
        $('.checkout_homeD .payment_details .select_payment_content .description').hide();
        $('.checkout_homeD .payment_details .select_payment_content .description.visa').show();
      }else if($(this).hasClass('unionpay')){
        $('.checkout_homeD .payment_details .select_payment_method .method').removeClass('active');
        $(this).addClass('active');
        $('.checkout_homeD .payment_details .select_payment_content .description').hide();
        $('.checkout_homeD .payment_details .select_payment_content .description.unionpay').show();
      }else if($(this).hasClass('alipayHK')){
        $('.checkout_homeD .payment_details .select_payment_method .method').removeClass('active');
        $(this).addClass('active');
        $('.checkout_homeD .payment_details .select_payment_content .description').hide();
        $('.checkout_homeD .payment_details .select_payment_content .description.alipayHK').show();
      }else if($(this).hasClass('alipayCN')){
        $('.checkout_homeD .payment_details .select_payment_method .method').removeClass('active');
        $(this).addClass('active');
        $('.checkout_homeD .payment_details .select_payment_content .description').hide();
        $('.checkout_homeD .payment_details .select_payment_content .description.alipayCN').show();
      }
      } 
    })

    $('.checkout_homeD .payment_details .redemption_option').click(function(){
      $(this).parent().toggleClass('active');
    })
    $('.select_btn').on('click','.list-view', function(){
        $('.map-address.full-width').show();

        map_text=$(this).parent().parent().parent().html();
        var lat = mobile_lat = $(this).parent().parent().attr('data-lat');
        var lng = mobile_lng = $(this).parent().parent().attr('data-lng');
              $(".address-box").removeClass("active");
              $(".address-box[data-lat='"+lat+"'][data-lng='"+lng+"']").addClass("active");
              $(".checkout_store_content").addClass("show-part-choseStore").removeClass("show-mobile-map");
              $(".map-address").addClass("active");
              show_infoWindow=1;
              if($(window).width()<768){
                $('.map').prepend($('.map-header'));
              }
              initMap();
                    addSingleMapMarker(lat, lng);
                    
                    if($(window).width() > 768){
                        $(".map-address ul").niceScroll({
                                "horizrailenabled": false,
                                "cursorcolor": "#009AA9",
                                "cursorwidth": "8px",
                                "hidecursordelay": 1000
                        });
                    }

    })
    $('.checkout_homeD .item_details .content .recipient_form .select_store_pick .select_btn .list-view').click(function(){
        $(window).scrollTop(0);
        $('.checkout_store .checkout_store_content').addClass('select_store');
    })
    $('.checkout_store .checkout_store_content .full-width .address-box .address-btn .green-btn a').click(function(){

        $('.checkout_store .checkout_store_content').removeClass('select_store');
        $('.checkout_store .checkout_store_content').removeClass('show-part-choseStore');
    })
    
    $('.checkout_homeD .payment_details .redemption_details .select-col .apply-btn').click(function(){
      
      // Select checkbox checking
      if($(this).parent().parent().hasClass('eCoupon')){
        var click1 = 0;
        $('.checkout_homeD .payment_details .redemption_details .select-col.eCoupon .checkbox-label input').each(function(){
          if($(this).is(':checked')){
            click1++;
          }else{
            $(this).parent().hide();
          }
          $('.checkout_homeD .payment_details .redemption_details .select-col.eCoupon .title-bar .coupon_title .coupon_qty .used').html(click1);
          $('.checkout_homeD .payment_details .redemption_details .select-col.eCoupon .title-bar .coupon_title .coupon_qty').css('display','inline-block');
        })  
      }else{
        var click2 = 0;
        $('.checkout_homeD .payment_details .redemption_details .select-col.eVoucher .checkbox-label input').each(function(){
          if($(this).is(':checked')){
            click2++;
          }else{
            $(this).parent().hide();
          }
          $('.checkout_homeD .payment_details .redemption_details .select-col.eVoucher .title-bar .coupon_title .coupon_qty .used').html(click2);
          $('.checkout_homeD .payment_details .redemption_details .select-col.eVoucher .title-bar .coupon_title .coupon_qty').css('display','inline-block');
        })
      }
      
      
      $(this).hide();
      $(this).parent().find('.edit-btn').show();
      $('.checkout_homeD .payment_details .redemption_option .used-btn').show();
      $('.checkout_homeD .payment_details .redemption_content').addClass('used');
      $('.checkbox-label input:checked').each(function(){
        $(this).parent().parent().find('.used').show();
        $(this).parent().parent().find('.checkbox-label').hide();
      })
    })
    $('.checkout_homeD .payment_details .redemption_details .input-col .apply-btn').click(function(){
      var value = $(this).parent().find('.input-area input').val(); 
      $(this).parent().toggleClass('applied');
      $(this).parent().find('.applied-code span').text('value');
      $(this).parent().find('.applied-code').toggleClass('active');
      $(this).hide();
      $(this).parent().find('.input').hide();
    })
    $('.checkout_homeD .payment_details .redemption_details .input-col .input-area .applied-code i').click(function(){
      $(this).parent().toggleClass('active');
      $(this).parent().parent().find('.input').show();
      $(this).parent().parent().find('.apply-btn').show();
    })



    maxOrderAmountAlert()  
})

/* 20191029 Max Order Amount */
var maxOrderAmountAlert = function(){
  $( '.over-alert').on('click', function(event){
    event.preventDefault()
    $(this).hide();
  })
}
/* End of Max Order Amount */