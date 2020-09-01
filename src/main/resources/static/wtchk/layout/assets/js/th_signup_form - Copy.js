$(function() {
  $('.globalWrapper').addClass('show-mobile-menu-3')
  $('.mobile-menu-3 span').text('Register')
  $('.signup_send-btn').click(function() {
    if (
      $('#registerEmail')
        .val()
        .trim().length == 0
    ) {
      $('#registerEmail').addClass('error')
    }
  })
  $('.provide_dropDown .provide_dropDown_title').click(function() {
    if (
      $(this)
        .parent()
        .hasClass('active')
    ) {
      $(this)
        .parent()
        .find('.provide_dropDown_box')
        .slideUp()
      $(this)
        .parent()
        .removeClass('active')
    } else {
      $(this)
        .parent()
        .find('.provide_dropDown_box')
        .stop()
        .slideDown()
      $(this)
        .parent()
        .addClass('active')
    }
  })
  function tool_box_hei() {
    if ($(window).width() < 980) {
      var height = $(window).height() - $('#yes_card_box-btn').offset().top - $('#yes_card_box-btn').height() - 20
      $('#yes_card_box-btn').css('margin-top', height + 'px')
      $('#yes_card_box-btn').css('margin-bottom', 20 + 'px')
    }
  }
  $('#yes_card_box-btn').click(function() {
    var verify = true
    if (
      $('#memberCardCode')
        .val()
        .trim().length == 0
    ) {
      $('#memberCardCode').addClass('error')
      verify = false
    }
    if (
      $('#yes_password')
        .val()
        .trim().length == 0
    ) {
      $('#yes_password').addClass('error')
      verify = false
    }
    $('.yes_card_box input').each(function() {
      if ($(this).hasClass('error')) {
        $('#' + $(this).attr('id') + '-msg').removeClass('hide')
      }
    })
    if (verify) {
      $('#yes_card_box-btn').addClass('disabled')
      $('#memberCardCode , #yes_password').attr('disabled', true)
      $('.yes_card_provide , .checkout_signup_part2').removeClass('hide')
      $('#yes_card_box-btn').removeAttr('style')
      $('.yes_card_box .forget-password a')
        .attr('onclick', 'return false;')
        .attr('disabled', true)
    }
  })
  $('#open_card_check').click(function() {
    if (
      $(this)
        .find("input[type='checkbox']")
        .prop('checked') == false
    ) {
      if ($('#yes_card_box-btn').hasClass('disabled')) {
        overlayOpen('signup_form-popup')
      } else {
        $('.yes_card_provide , .yes_card_box').addClass('hide')
        $('.no_card_provide , .checkout_signup_part2').removeClass('hide')
      }
    } else {
      $('.no_card_provide , .checkout_signup_part2').addClass('hide')
      $('.yes_card_box').removeClass('hide')
      if ($('#yes_card_box-btn').hasClass('disabled')) {
        $('.yes_card_provide').removeClass('hide')
        $('#yes_card_box-btn').removeAttr('style')
      } else {
        tool_box_hei()
      }
    }
  })
  $('.signup_form-popup-no').click(function() {
    $('#open_card_check')
      .find("input[type='checkbox']")
      .prop('checked', true)
  })
  $('.signup_form-popup-yes').click(function() {
    $('.yes_card_provide , .yes_card_box').addClass('hide')
    $('.no_card_provide , .checkout_signup_part2').removeClass('hide')
    $('#yes_card_box-btn').removeClass('disabled')
    $('#memberCardCode , #yes_password').removeAttr('disabled')
    $('.yes_card_provide , .checkout_signup_part2').addClass('hide')
    $('.yes_card_box .forget-password a')
      .removeAttr('onclick')
      .removeAttr('disabled')
    $('#memberCardCode , #yes_password').val('')
  })
})
