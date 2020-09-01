var ModeSwitch = {
    init: function(){
        var _this = this;
        this.popOver('#watsonsGoModeOn');
        $('#watsonsGoModeOn .popupAction a').click(function(){
            _this.popOver('#watsonsGoModeOn');
            $('html').removeClass('overlay-open');
        })
        $('#watsonsGoModeOff .popupAction a').click(function(){
            _this.popOver('#watsonsGoModeOff');
            $('html').removeClass('overlay-open');
        })
        // $('#watsonsGoModeOn .popupAction a').click(function(){
        //     _this.popupOpen('#watsonsGoModeOn');
        //     _this.popupShow();
        // })
        // $('#watsonsGoModeOff .popupAction a').click(function(){
        //     _this.popupOpen('#watsonsGoModeOff');
        //     _this.popupShow();
        // })
        $('#mode-switch-popup .close-btn').click(function(){
            _this.popupClose();
            $('html').removeClass('overlay-open');
        })
        $('.watsonsGoSwitch').click(function(){
            if($(this).hasClass('off')){
                _this.popupShow('#watsonsGoModeOn');
            }else{
                _this.popupShow('#watsonsGoModeOff');
            }
        })

        this.selectMode();
    },
    popOver: function(target){
        $('.watsonsGoSwitch .arrow-up, .watsonsGoSwitchNoticePopup > .arrow-up').toggleClass('on off');
        $(target).toggleClass('on off');
        $('.overlayGo').toggleClass('on off');
        $('html').addClass('overlay-open');
        // $('html').toggleClass('overlay-open');
    },
    messageShow: function(){
        if($('.watsonsGoSwitch').hasClass('off')){
            if($('#watsonsGoModeOn_message').is(':checked') && $('.watsonsGoSwitch .arrow-up').hasClass('off')){
                $('#mode-switch-popup').show();
            }else{
                $('.watsonsGoSwitch .arrow-up, .watsonsGoSwitchNoticePopup > .arrow-up').toggleClass('on off');
                $('#watsonsGoModeOn').toggleClass('on off');
                $('.overlayGo').toggleClass('on off'); 
            }
        }else if($('.watsonsGoSwitch').hasClass('on')){
            if($('#watsonsGoModeOff_message').is(':checked') && $('.watsonsGoSwitch .arrow-up').hasClass('off')){
                $('#mode-switch-popup').show();
            }else{
                $('.watsonsGoSwitch .arrow-up, .watsonsGoSwitchNoticePopup > .arrow-up').toggleClass('on off');
                $('#watsonsGoModeOff').toggleClass('on off');
                $('.overlayGo').toggleClass('on off'); 
            }
        }
    },
    popupOpen: function(target){
        $('.watsonsGoSwitch .arrow-up, .watsonsGoSwitchNoticePopup > .arrow-up').toggleClass('on off');
        $(target).toggleClass('on off');
        $('.overlayGo').toggleClass('on off');
    },
    popupShow: function(target){
        console.log(target);
        $('.watsonsGoSwitch .arrow-up, .watsonsGoSwitchNoticePopup > .arrow-up').addClass('off').removeClass('on');
        $(target).addClass('off').removeClass('on');
        $('.overlayGo').toggleClass('on off');
        $('#mode-switch-popup').show();
        $('html').addClass('overlay-open');
    },
    popupClose: function(){
        $('.overlayGo').toggleClass('on off');
        $('#mode-switch-popup').hide();
        // $('html').removeClass('overlay-open');
    },
    selectMode: function(){
        var _this = this;
        $('.modeSwitch-item').click(function(){
            var id = $(this).attr('id')
            if(id == 'switch_CCE'){
                $('.watsonsGoSwitch').removeClass('off').addClass('on');
                $('.productMenu').removeClass('go').addClass('cce');
                var html = '<img src="assets/img/cce/cce@3x.png" alt="" width="15">';
                html += '特快門市取貨';
                html += '<i class="icon-icon_arrow"></i>';
                $('.watsonsGoSwitch .switchOn').html(html);
                _this.popOver('#watsonsGoModeOff');
                // $('#watsonsGoModeOff').addClass('cce_msg');
            }else if(id == 'switch_watsonsGo'){
                $('.watsonsGoSwitch').removeClass('off').addClass('on');
                $('.productMenu').removeClass('cce').addClass('go');
                var html = '<img src="assets/img/cce/watsons-go@3x.png" alt="" width="15">';
                html += 'Watsons GO';
                html += '<i class="icon-icon_arrow"></i>';
                $('.watsonsGoSwitch .switchOn').html(html);
                $('html').removeClass('overlay-open');
                // $('#watsonsGoModeOff').addClass('watsonsGo_msg');
            }else{
                $('.watsonsGoSwitch').removeClass('on').addClass('off');
                $('.productMenu').removeClass('cce go');
                $('html').removeClass('overlay-open');
                // var html = '<img src="assets/img/cce/watsons-logo@3x.png" alt="" width="15">';
                // html += '標準模式';
                // html += '<i class="icon-icon_arrow"></i>';
                // $('.watsonsGoSwitch .switchOff').html(html);
            }
            _this.popupClose();
        })
    }
}
var MobileMenu = {
    init: function(){
        $('.productMenu').on('click', function(){
            console.log('productMenu clicked');
            if($('.globalWrapper').hasClass('show-mobile-header-message')) {
                $(".globalWrapper").removeAttr("class").addClass("globalWrapper"); 
            } else {
                $('.watsonsGoSwitch .arrow-up, .watsonsGoSwitchNoticePopup > .arrow-up').addClass('off').removeClass('on');
                $('#watsonsGoModeOn').addClass('off').removeClass('on');
                $('#watsonsGoModeOff').addClass('off').removeClass('on');
                $('.overlayGo').addClass('off').removeClass('on');
                $(".globalWrapper").removeAttr("class").addClass("globalWrapper").addClass("show-menu").addClass("show-menu-product").addClass("show-mobile-header-message"); 
                // ModeSwitch.messageShow();
            }
        });
        $('#popupBack-btn').click(function(){
            ModeSwitch.popupClose();
            $(".globalWrapper").removeAttr("class").addClass("globalWrapper").addClass("show-menu").addClass("show-menu-product").addClass("show-mobile-header-message"); 
        })
        $('.mobileHeaderMessage .btn-close').click(function(){
            $('html').removeClass('overlay-open');
        })
        $('.show_Switch_Popup a').click(function(e){
            e.preventDefault();
            $('.mobileHeaderMessage .btn-close').click();
            ModeSwitch.popupShow('#watsonsGoModeOn');
        })
    }
}


$(function(){
    ModeSwitch.init();
    MobileMenu.init();
})