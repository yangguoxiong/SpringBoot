$(function() {
  $('.globalWrapper').addClass('show-mobile-menu-2')

  if ($('main.myAccount .login').hasClass('link_card')) {
    $('.mobile-menu-3 span').text('鏈結易賞錢會員卡')
  } else if ($('main.myAccount').hasClass('credit_card')) {
    $('.mobile-menu-3 span').text('信用卡')
    $('.mobile-menu-3 i:not(.i1)').hide()
  } else if ($('main.myAccount').hasClass('personal_info')) {
    $('.mobile-menu-3 span').text('個人資料')
    $('.mobile-menu-3 i:not(.i1)').hide()
  } else if ($('main.myAccount').hasClass('address_book')) {
    $('.mobile-menu-3 span').text('送貨地址')
    $('.mobile-menu-3 i:not(.i1)').hide()
  } else if ($('main.myAccount').hasClass('change_pw')) {
    $('.mobile-menu-3 span').text('更改密碼')
    $('.mobile-menu-3 i:not(.i1)').hide()
  } else if ($('main.myAccount').hasClass('enquiry')) {
    $('.mobile-menu-3 span').text('詢問')
    $('.mobile-menu-3 i:not(.i1)').hide()
  } else if ($('main.myAccount').hasClass('my_coupon')) {
    $('.mobile-menu-3 span').text('電子優惠券/電子現金券')
    $('.mobile-menu-3 i:not(.i1)').hide()
  } else if ($('main.myAccount').hasClass('point_summary')) {
    $('.mobile-menu-3 span').text('積分查詢')
    $('.mobile-menu-3 i:not(.i1)').hide()
  }

  /*Side Menu Toggle*/
  $('.PLP-Filter .box-head i').click(function() {
    $(this)
      .parent()
      .parent()
      .find('.box-content')
      .slideToggle()
    $(this)
      .parent()
      .toggleClass('active')
  })

  $('.myAccount .address_book .saved_address_detail')
    .on('click', function() {
      $('.myAccount .address_book .saved_address_detail').removeClass('active')
      if ($(this).hasClass('add_new')) {
        $(this).addClass('active')
        $('.myAccount .address_book .recipient_form').addClass('active')
        $('html, body').animate(
          {
            scrollTop: $('#recipient_form').offset().top - 100
          },
          700
        )
        $('.myAccount .address_book .recipient_form .sub-title.new-info').html('新增收件人資料')
      } else {
        $(this).addClass('active')
        $('.myAccount .address_book .recipient_form').removeClass('active')
      }
    })
    .on('click', '.edit_address', function(e) {
      $('.myAccount .address_book .saved_address_detail').removeClass('active')
      $(this)
        .parent()
        .parent()
        .addClass('active')
      var that = $(this)
        .parent()
        .parent()
      $('.recipient_form #first-name').val(that.find("[data-id='first-name']").text())
      $('.recipient_form #last-name').val(that.find("[data-id='last-name']").text())
      $('.recipient_form #mobile').val(that.find("[data-id='mobile']").text())
      $('.recipient_form #home-tel').val(that.find("[data-id='home-tel']").text())

      $('.myAccount .address_book .recipient_form').addClass('active')
      $('.myAccount .address_book .recipient_form .sub-title.new-info').html('更改收件人資料')

      $('html, body').animate(
        {
          scrollTop: $('#recipient_form').offset().top - 100
        },
        700
      )
      e.StopPropagation()
    })
    .on('click', '.remove_address', function(e) {
      $('.myAccount .address_book .saved_address_detail').removeClass('active')
      $(this)
        .parent()
        .parent()
        .remove()
      $('.myAccount .address_book .saved_address_detail:first-child .default_address').addClass('active')
    })
    .on('click', '.default_address', function(e) {
      $('.myAccount .address_book .saved_address_detail').removeClass('active')
      $(this)
        .parent()
        .parent()
        .addClass('active')
      $('.myAccount .address_book .saved_address_detail .item_bottom .item_action.default_address').removeClass('active')
      $(this).addClass('active')
    })

  /* myAccount_Coupon */
  $('.myAccount .comment-tabs a').click(function() {
    $('.comment-tabs a').removeClass('active')
    $(this).addClass('active')
    var id = $(this).data('id')
    $('.coupon-box').hide()
    $(".coupon-box[data-id='" + id + "']").show()
  })
  $('.myAccount .explain-btn').click(function() {
    if (
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .find('.explain')
        .css('display') == 'block'
    ) {
      $(this).removeClass('active')
      $(this)
        .parent()
        .parent()
        .parent()
        .removeClass('active')
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .find('.explain')
        .slideUp()
    } else {
      $(this).addClass('active')
      $('.explain').slideUp()
      $(this)
        .parent()
        .parent()
        .parent()
        .addClass('active')
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .find('.explain')
        .stop()
        .slideDown()
    }
  })
})
