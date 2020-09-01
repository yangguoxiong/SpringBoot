// // alert('wtchk_update.js')
$(document.body).ready(function(e) {
  $(this).mousedown(function(e) {
    if (e.ctrlKey) {
      if (e.which == 3) {
        window.location.reload()
      }
    }
  })
})
var _tooltipInit = function() {
  $('.tooltip-region .tooltip-content').click(function(e) {
    e.stopPropagation()
  })
  $('.tooltip-region input').click(function(e) {
    e.stopPropagation()
    var _clicked = $(this)
    $('.tooltip-region input').each(function(_i) {
      if (!$(this).is(_clicked)) {
        $(this).prop('checked', false)
      }
    })
  })
  $('body').click(function(e) {
    $('.tooltip-region input').prop('checked', false)
  })
}
var _openPopup = function(targetPopup) {
  if ($(targetPopup).length > 0) {
    $(targetPopup)
      .prepend('<div class="background"></div>')
      .find('.wrapper')
      .eq(0)
      .prepend('<i class="icon-close close-btn" ></i>')
    $(targetPopup)
      .find('.icon-close, .background')
      .on('click', function() {
        $('.popup-general').hide()
        $('html').removeClass('overlay-open')
      })
    $('.popup-general').hide()
    $(targetPopup).show()
    $('html').addClass('overlay-open')
  }
}

$(function() {
  // _openPopup('#PointExpiredPopup')
  var _leftBtn = $('.card_stamp_balance .page-arrow-left')
  var _rightBtn = $('.card_stamp_balance .page-arrow-right')
  var _scroller = $('.card_stamp_balance .cont')
  var _eStamp = $('.card_stamp_balance .cont .mb_eStamp')
  var _sTotalW = 0
  $(_eStamp).each(function() {
    _sTotalW = _sTotalW + $(this).width()
  })
  var _eStampW = _eStamp.eq(0).width()
  if (_eStamp.length === 0) {
    $('.card_stamp_balance').hide()
  } else {
    if (_scroller.scrollLeft() == 0) {
      _leftBtn.hide()
      _rightBtn.show()
    }
    if (eval(_scroller.width() + _scroller.scrollLeft()) >= _scroller.prop('scrollWidth')) {
      _leftBtn.show()
      _rightBtn.hide()
    }
    if (_sTotalW <= _scroller.width()) {
      _leftBtn.hide()
      _rightBtn.hide()
    }
    _leftBtn.click(function() {
      _scroller.animate({ scrollLeft: _scroller.scrollLeft() - _eStampW + 8 }, 500, function() {
        if (_scroller.scrollLeft() == 0) {
          _rightBtn.show()
          _leftBtn.hide()
          // $('.card_stamp_balance').css('padding-left', '0px')
        } else {
          _rightBtn.show()
          // $('.card_stamp_balance').css('padding-right', '30px')
        }
      })
    })
    _rightBtn.click(function() {
      _scroller.animate({ scrollLeft: _scroller.scrollLeft() + _eStampW + 8 }, 500, function() {
        if (eval(_scroller.width() + _scroller.scrollLeft()) >= _scroller.prop('scrollWidth')) {
          _leftBtn.show()
          _rightBtn.hide()
          // $('.card_stamp_balance').css('padding-right', '0px')
        } else {
          _leftBtn.show()
          // $('.card_stamp_balance').css('padding-left', '30px')
        }
      })
    })
  }

  // for prototype only
  if ($('title').html() == 'MyAccount_Landing_referral_empty_mobile') {
    // $('#signInItem .popupContainer.load .login-box').removeClass('hide')
    $('#signInItem .popupContainer.load').hide()
    // $('#signInItem .popupContainer.unload .login-box').removeClass('hide')
    $('#signInItem .popupContainer.unload').hide()
    $('#signInItem .popupContainer.link .card-point').removeClass('hide')
    $('#signInItem .popupContainer.link').show()
    $('.mobile-header-menu.menu-account .s1').html('你好 JO LEE')
    // $('.mobile-menu > ul > li[data-id="account"]').click()
  } else if ($('title').html() == 'MyAccount_Landing_guest_mobile') {
    // $('#signInItem .popupContainer.load .login-box').removeClass('hide')
    $('#signInItem .popupContainer.load').hide()
    $('#signInItem .popupContainer.unload .login-box').removeClass('hide')
    $('#signInItem .popupContainer.unload').show()
    // $('#signInItem .popupContainer.link .card-point').removeClass('hide')
    $('#signInItem .popupContainer.link').hide()
    $('.mobile-header-menu.menu-account .s1').html('我的帳戶')
    // $('.mobile-menu > ul > li[data-id="account"]').click()
  } else if ($('title').html() == 'MyAccount_Landing_eshopper_mobile') {
    $('#signInItem .popupContainer.load .login-box').removeClass('hide')
    $('#signInItem .popupContainer.load').show()
    // $('#signInItem .popupContainer.unload .login-box').removeClass('hide')
    $('#signInItem .popupContainer.unload').hide()
    // $('#signInItem .popupContainer.link .card-point').removeClass('hide')
    $('#signInItem .popupContainer.link').hide()
    $('.mobile-header-menu.menu-account .s1').html('你好 JO LI')
    // $('.mobile-menu > ul > li[data-id="account"]').click()
  } else if ($('title').html() == 'MyAccount_Landing_eShopper') {
    $('#signInItem .popupContainer.load .login-box').removeClass('hide')
    $('#signInItem .popupContainer.load').show()
    // $('#signInItem .popupContainer.unload .login-box').removeClass('hide')
    $('#signInItem .popupContainer.unload').hide()
    // $('#signInItem .popupContainer.link .card-point').removeClass('hide')
    $('#signInItem .popupContainer.link').hide()
    $('.mobile-header-menu.menu-account .s1').html('你好 JO LEE')
    // …$('.mobile-menu > ul > li[data-id="account"]').click()
  }

  /* MyAccount_Wishlist */

  function _showEmpty(_this) {
    if (_this.val() === 'empty') {
      // for prototype only
      // show empty
      $('#wishlist-table').hide()
      $('#wishlist-empty').show()
    } else if (_this.val() === 'createList') {
      //for prototype only
      $('#wishlist-table').hide()
      $('#wishlist-empty').hide()
    } else {
      $('#wishlist-table').show()
      $('#wishlist-empty').hide()
    }
  }
  function _showCreatList() {
    if ($('#WishlistDropdown').val() === 'createList') {
      $('#wishlistName').val('')
      $('#wishlistName').prop('placeholder', '輸入新清單名稱')
      $('#WishlistRow01').hide()
      $('#WishlistRow02').show()
      $('#wiishCreateCreateBtn').show()
      $('#wiishCreateEditBtn').hide()
      $('#wiishCreateCancelBtn').show()
    } else {
      $('#WishlistRow01').show()
      $('#WishlistRow02').hide()
    }
  }
  _showEmpty($('#WishlistDropdown'))
  _showCreatList()
  $('#WishlistChangeName').click(function() {
    $('#WishlistRow01').hide()
    $('#WishlistRow02').show()
    $('#wiishCreateEditBtn').show()
    $('#wiishCreateCreateBtn').hide()
    $('#wishlistName').val($('#WishlistDropdown').val())
    $('#wishlistName').prop('placeholder', '清單名稱')
    $('#wishlistName').focus()
    // $('#wishlistName').select()
  })
  $('#wiishCreateCreateBtn').click(function() {
    console.log('createlist')
  })
  $('#wiishCreateCancelBtn').click(function() {
    if ($('#WishlistDropdown').val() === 'createList') {
      $('#WishlistDropdown')
        .prop('selectedIndex', 1)
        .change()
    } else {
      $('#WishlistDropdown').change()
    }
  })

  $('#WishlistDropdown').change(function() {
    _showCreatList()
    _showEmpty($(this))
  })

  $('.wishlist .Show_More_Promotion').click(function() {
    $(this)
      .parent()
      .addClass('show_all')
  })

  $('.pink-tag').each(function() {
    $(this)
      .find('li')
      .each(function(_index) {
        if (_index <= 3) {
          $(this).css('display', 'inline-block')
        }
      })
  })
  $('.pink-tag .show-more').click(function() {
    $(this)
      .parent()
      .find('ul')
      .addClass('show-all')
    $(this).hide()
  })
  // remove wishlist
  $('.remove-col i').click(function() {
    $(this)
      .parent()
      .parent()
      .fadeOut(function() {
        $(this).remove()
      })
  })

  $('.expand-region').each(function() {
    if ($(this).hasClass('closed')) {
      $(this)
        .find('.expand-content')
        .slideUp()
    }
    $(this)
      .find('.expand-btn')
      .click(function() {
        var _this = $(this)
        var _expandRegion = _this.parent().parent()
        var _content = _this
          .parent()
          .parent()
          .find('.expand-content')
        if (_expandRegion.hasClass('closed')) {
          _expandRegion.removeClass('closed')
          _content.stop().slideDown(function() {})
        } else {
          _content.slideUp(function() {
            _expandRegion.addClass('closed')
          })
        }
      })
  })
  _tooltipInit()

  function _starsInit() {
    var _checked = 'icon-star01'
    var _notChecked = 'icon-star02'
    $('.stars').each(function() {
      var _input = $(this)
        .find('input')
        .eq(0)
      var _selected = _input.val()
      if (_selected) {
        $(this)
          .find('i')
          .each(function(_i) {
            if (_i <= _selected - 1) {
              $(this).prop('class', _checked)
            } else {
              $(this).prop('class', _notChecked)
            }
          })
      }
    })
    $('.stars > i').click(function(e) {
      var _index = $(this).prevAll('i').length
      var _checked = 'icon-star01'
      var _notChecked = 'icon-star02'
      $(this)
        .removeClass(_notChecked)
        .addClass(_checked)
      $(this)
        .prevAll('i')
        .removeClass(_notChecked)
        .addClass(_checked)
      $(this)
        .nextAll('i')
        .removeClass(_checked)
        .addClass(_notChecked)
      $(this)
        .prevAll('input')
        .eq(0)
        .val($(this).hasClass(_checked) ? _index + 1 : _index)
        .change()
    })
  }
  _starsInit()
  $('.product-review-table .stars').click(function() {
    if (!$(this).hasClass('disabled')) {
      $(this)
        .nextAll('.review-form')
        .removeClass('hide')
    }
  })
  // OrderDetails.html
  $('.order-detail-form .total-price-trigger').click(function() {
    var _trigger = $(this)
    // var _arrow = _trigger.find('.icon-arrow_down').eq(0)
    var _tgt = $('#total-price-detail')
    if (_tgt.hasClass('closed')) {
      _trigger.addClass('opened').removeClass('closed')
      _tgt.slideDown(function() {
        $(this)
          .addClass('opened')
          .removeClass('closed')
      })
    } else {
      _trigger.addClass('closed').removeClass('opend')
      _tgt.slideUp(function() {
        $(this)
          .addClass('closed')
          .removeClass('opend')
      })
    }
  })

  $('.point-progress-intro, .point_expiry').click(function() {
    _openPopup('#PointExpiredPopup')
  })
})

$(function() {
  $('.review-form .round-tags ul li').click(function() {
    var _textA = $(this)
      .closest('.col')
      .find('textarea')
      .eq(0)
      .text()
    $(this)
      .closest('.col')
      .find('textarea')
      .eq(0)
      .html(_textA + ' ' + $(this).text())
  })
})

$(function() {
  if ($('.paging-table').length > 0) {
    var _table = $('.paging-table')
    var _pageSize = _table.data('page-size') == undefined ? 6 : _table.data('page-size')
    var _noOfRecords = _table.find('> .td').length
    var _records = _table.find('> .td')
    var _noOfPages = Math.ceil(_noOfRecords / _pageSize)
    var _currentPage = 0
    if (_table.data('current-page') != undefined) {
      _currentPage = _table.data('current-page') - 1
      if (_currentPage < 0) {
        _currentPage = 0
      }
      if (_currentPage > _noOfPages) {
        _currentPage = _noOfPages - 1
      }
    }
    var _prev = $('.paging-table + .paging > .btn-prev')
    var _next = $('.paging-table + .paging > .btn-next')
    var _offSetBtn = 2
    var _noOfBtn = 5
    function updateOffSetBtn() {
      if (_noOfPages > _noOfBtn) {
        if (_currentPage == 0) _offSetBtn = 4
        if (_currentPage == 1) _offSetBtn = 3
        if (_currentPage == _noOfPages - 1) _offSetBtn = 4
        if (_currentPage == _noOfPages - 2) _offSetBtn = 3
        // alert(_offSetBtn + '----' + _currentPage + '---' + _noOfPages)
        if (_currentPage > 1 && _currentPage < _noOfPages - 2) _offSetBtn = 2
      }
    }
    function pageBtns() {
      $('.paging .pages').html('')
      updateOffSetBtn()
      for (i = 0; i < _noOfPages; i++) {
        if (_noOfPages > _noOfBtn) {
          if ((i > _currentPage - _offSetBtn && i < _currentPage + _offSetBtn) || i == _noOfPages - 1 || i == 0) {
            $('.paging .pages').append('<div class="page ' + (_currentPage == i ? 'active' : '') + '" >' + (i + 1) + '</div>')
          }
        } else {
          $('.paging .pages').append('<div class="page ' + (_currentPage == i ? 'active' : '') + '" >' + (i + 1) + '</div>')
        }
      }
      if (_noOfPages > _noOfBtn) {
        if (_currentPage > _offSetBtn) {
          $('.paging .pages .page')
            .first()
            .after('<div class="page dot" >..</div>')
        }
        if (_currentPage < _noOfPages - _offSetBtn) {
          $('.paging .pages .page')
            .last()
            .before('<div class="page dot" >..</div>')
        }
      }
      $('.paging .pages .page').click(function() {
        if ($(this).hasClass('dot') == false) {
          _currentPage = eval($(this).text() - 1)
          refreshList()
        }
      })
    }
    function refreshList() {
      _records.hide()
      _records.each(function(_index) {
        if (Math.floor(_index / _pageSize) == _currentPage) {
          $(this).show()
        }
      })
      if (_currentPage == 0) {
        _prev.addClass('disabled')
      } else {
        _prev.removeClass('disabled')
      }
      if (_currentPage == _noOfPages - 1) {
        _next.addClass('disabled')
      } else {
        _next.removeClass('disabled')
      }
      pageBtns()
    }
    refreshList()
    _prev.click(function() {
      if (_currentPage > 0) {
        _currentPage--
        refreshList()
      }
    })
    _next.click(function() {
      if (_currentPage < _noOfPages - 1) {
        _currentPage++
        refreshList()
      }
    })
  }
})

$(function() {
  var remind_timeout = 1000
  var buy_loading = 0
  $('.input-btn.notify, .input-btn.buy').on('click', function(event) {
    event.stopPropagation()
    if (buy_loading == 0) {
      buy_loading = 1
      $(this)
        .find('.icon-shopping-bag , .icon-notify , .icon-bag')
        .addClass('buy-loading')
        .addClass('icon-spin5')
      $(this)
        .find('.ADD_TO_BAG-popup')
        .stop()
        .delay(remind_timeout)
        .fadeIn(function() {
          $('.input-btn.notify, .input-btn.buy')
            .removeClass('disabled')
            .find('.icon-shopping-bag , .icon-notify , .icon-bag')
            .removeClass('buy-loading')
            .removeClass('icon-spin5')
          buy_loading = 0
        })
        .delay(remind_timeout)
        .fadeOut()
    }
  })
  $('.more-part .more-part-title').click(function() {
    if (
      $(this)
        .parent()
        .hasClass('active')
    ) {
      $(this)
        .parent()
        .find('.more-part-drop-box')
        .slideUp()
      $(this)
        .parent()
        .removeClass('active')
    } else {
      $(this)
        .parent()
        .find('.more-part-drop-box')
        .stop()
        .slideDown()
      $(this)
        .parent()
        .addClass('active')
    }
  })
})

$(function() {
  var mySwiper = new Swiper('#stamp-swiper-container', {
    // autoplay: 5000,
    // pagination: '#main-banner-pagination',
    // paginationClickable: false,
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 10,
    prevButton: '#stamp-swiper-prev',
    nextButton: '#stamp-swiper-next',
    preventClicks: false,
    preventClicksPropagation: false,
    // breakpoints: {
    //   1280: {
    //     slidesPerView: 1.5,
    //     spaceBetween: 5
    //   },
    //   960: {
    //     slidesPerView: 1.5,
    //     spaceBetween: 5
    //   }
    // },
    loop: false
  })
})

$(function() {
  $('.mobile-menu li[data-id=account]').click(function() {
    if (!$('#stamp-swiper-container-at-mobile-menu').hasClass('swiper-container-horizontal')) {
      var _timer = setTimeout(function() {
        var mySwiper = new Swiper('#stamp-swiper-container-at-mobile-menu', {
          // autoplay: 5000,
          // pagination: '#main-banner-pagination',
          // paginationClickable: false,
          direction: 'horizontal',
          // slidesPerView: 'auto',
          slidesPerView: 2,
          spaceBetween: 10,
          prevButton: '#stamp-swiper-prev-at-mobile-menu',
          nextButton: '#stamp-swiper-next-at-mobile-menu',
          preventClicks: false,
          preventClicksPropagation: false,
          loop: false
        })
      }, 100)
    }
  })
})
