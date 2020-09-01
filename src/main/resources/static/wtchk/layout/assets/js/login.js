$(function () {
	$(".globalWrapper").addClass("show-no-searchbox-menu");

	if($('main .login').hasClass('forgot_pw')){
		$(".mobile-menu-3 span").text("FORGOT PASSWORD");
		$(".globalWrapper").addClass("show-mobile-menu-2");
	}
	if($('main').hasClass('upgrade_form')){
		$(".mobile-menu-3 span").text("MEMBERSHIP UPGRADE");
		$(".globalWrapper").addClass("show-mobile-menu-2");
	}

	$(".tnc_detail").niceScroll({
		"horizrailenabled": false,
		"cursorcolor": "#d8d8d8",
		"cursorwidth": "8px",
		"hidecursordelay": 1000
	});

	var validaLogin , validaPw , submitCount = 0;
	$(".checkout_login_content #login-submit").click(function(){
		validaLogin = 0;
		validaPw = 0; 
		if ($("#mail").val().trim().length == 0) {
			$("#mail").addClass("error");
			validaLogin = 1;
		}
		if ($("#password").val().trim().length == 0) {
			$("#password").addClass("error");
			validaPw = 1;
		}
		if (validaLogin == 1) {
			$("#errorLogin").removeClass("hide");
		}
		if (validaPw == 1) {
			$("#errorPw").removeClass("hide");
		}
		if(validaLogin == 0 && validaPw == 0){
			openPopupGeneral('#first-login-tnc');
		}
	})
	//general for popup
    $('.popup-general .icon-close, .popup-general .background').on('click', function(){ 
        $('.popup-general').hide(); 
        $('html').removeClass('overlay-open');
    });
	$('.popup-general .icon-close').click(function(){
		$('.popup-general').hide();
        close_popup_overlay();
	})
	//tnc popup
	$('#first-login-tnc .agree-tnc input').change(function(){
		$(this).toggleClass('clicked');
		if(!$('#first-login-tnc .action-btn .green-btn').hasClass('disabled-light')){
			$('#first-login-tnc .action-btn .green-btn').addClass('disabled-light');
		}
		if($(this).hasClass('clicked')){
			$('#first-login-tnc .action-btn .green-btn').removeClass('disabled-light');
		}
	})
	//duplicate acc popup
	if($('main').hasClass('duplicate_acc')){
		openPopupGeneral('#duplicate_acc');
	}
	//update email popup
	if($('main').hasClass('email_changed')){
		openPopupGeneral('#email_changed');
	}
	$('#email_changed .agree-tnc input').change(function(){
		$(this).toggleClass('clicked');
		if(!$('#email_changed .action-btn .green-btn').hasClass('disabled-light')){
			$('#email_changed .action-btn .green-btn').addClass('disabled-light');
		}
		if($(this).hasClass('clicked')){
			$('#email_changed .action-btn .green-btn').removeClass('disabled-light');
		}
	})
	$('#forgot_pw_email').on('input',function(){
		$(this).parent().find('.green-btn').removeClass('disabled-light');
		if($(this).val().trim().length==0){
			$(this).parent().find('.green-btn').addClass('disabled-light');
		}
	})
	$('#new_pw').change(function(){
		if(!$(this).val().trim().length==0){
			$(this).parent().toggleClass('checked'); 
		}
	})
	$('#confirm_new_pw').on('input',function(){
		if($(this).val().trim().length==0){
			$(this).parent().parent().parent().find('.green-btn').addClass('disabled-light');
			$(this).parent().removeClass('error');
		}
		if($(this).val() == $('#new_pw').val()){
			$(this).parent().removeClass('error');
			$(this).parent().addClass('checked');
			$(this).parent().parent().parent().find('.green-btn').removeClass('disabled-light');
		}else{
			$(this).parent().removeClass('checked');
			$(this).parent().addClass('error');
			$(this).parent().parent().parent().find('.green-btn').addClass('disabled-light');
		}
	})
	//Upgrade Form Verification Code
	if($('main').hasClass('upgrade_form')){
		$('#get-code').click(function(){
			$(this).hide();
			$('#get-code-again').css('display','inline-block');
			count=10;
			counter=setInterval(timer, 1000);
        	timer();
		})
	}
	//check password or code
	$('.upgrade_form #email_veri_code').change(function(){
		if(!$(this).val().trim().length==0){
			$(this).parent().toggleClass('checked'); 
			$('#email_veri_submit').removeClass('disabled-light');
		}
	})
	$('.upgrade_form #verification_code').change(function(){
		if(!$(this).val().trim().length==0){
			$(this).parent().toggleClass('checked'); 
		}else{
			$(this).parent().removeClass('checked');
		}
	})
	$('.upgrade_form #pw_enter').change(function(){
		if(!$(this).val().trim().length==0){
			$(this).parent().toggleClass('checked'); 
		}
	})
	$('.upgrade_form #pw_reenter').on('input',function(){
		if($(this).val().trim().length==0){
			$(this).parent().removeClass('error');
		}
		if($(this).val() == $('.upgrade_form #pw_enter').val()){
			$(this).parent().removeClass('error');
			$(this).parent().addClass('checked');
		}else{
			$(this).parent().removeClass('checked');
			$(this).parent().addClass('error');
		}
	})
	$('.member_upgrade .agree_check #tnc-agree').change(function(){
		if($('main').hasClass('confirm_mb2')){
			$(this).toggleClass('clicked');
			$('#confirm_upgrade').toggleClass('disabled-light');
		}else{
			$(this).toggleClass('clicked');
			if( $('#verification_code').parent().hasClass('checked') && $('#pw_enter').parent().hasClass('checked') && $('#pw_reenter').parent().hasClass('checked')){
				$('.verification_form').addClass('all-checked');
			}
			if($(this).hasClass('clicked') && $('.verification_form').hasClass('all-checked')){		
				$('#confirm_upgrade').removeClass('disabled-light');
			}else{
				$('#confirm_upgrade').addClass('disabled-light');
			}	
		}
		
	})
	$('#email_veri_submit').click(function(){
		openPopupGeneral('#link_card_error');
	})
	//Register Select Member Type
	$('.login_page .upgrade_detail .select-member-type .member-type').click(function(){
		$('.login_page .upgrade_detail .select-member-type .member-type').removeClass('active');
		$(this).addClass('active');

		if($(this).hasClass('new')){
			$('.login_page .upgrade_detail .select-member-content .description').hide();
			$('.login_page .upgrade_detail .select-member-content .description.new').show();

		}else if($(this).hasClass('mbMember')){
			$('.login_page .upgrade_detail .select-member-content .description').hide();
			$('.login_page .upgrade_detail .select-member-content .description.mbMember').show();
		}else if($(this).hasClass('app')){
			$('.login_page .upgrade_detail .select-member-content .description').hide();
			$('.login_page .upgrade_detail .select-member-content .description.app').show();
		}
	})
	$('.login_page .upgrade_detail .select-member-type .member-type').each(function(){
		if($(this).is('.active','.new')){
			$('.login_page .upgrade_detail .select-member-content .description').hide();
			$('.login_page .upgrade_detail .select-member-content .description.new').show();

		}else if($(this).is('.active','.mbMember')){
			$('.login_page .upgrade_detail .select-member-content .description').hide();
			$('.login_page .upgrade_detail .select-member-content .description.mbMember').show();
		}else if($(this).is('.active','.app')){
			$('.login_page .upgrade_detail .select-member-content .description').hide();
			$('.login_page .upgrade_detail .select-member-content .description.app').show();
		}
	})
	//Register
	$('.register #reg_tel').change(function(){
		if(!$(this).val().trim().length==0){
			$('.register #get-code').toggleClass('disabled-light');
		}else{
			$('.register #get-code').addClass('disabled-light');
		}
	})
	$('.register #mbCard_pw').change(function(){
		if(!$(this).val().trim().length==0){
			if($('.register #mbCard_no').val().trim.length==0){
				$('.register #mbCard_next').removeClass('disabled-light');
			}
		}else{
			$('.register #mbCard_next').addClass('disabled-light');
		}
	})
	$('.register #mbCard_next').click(function(){
		openPopupGeneral('#mbCard_ac');
	})
})

function openPopupGeneral(targetPopup){
    $('.popup-general').hide();
    $(targetPopup).show();
    $('html').addClass('overlay-open');
}

//countdown for upgrade_form
var count = 0;
var counter;
function timer()
{
  count=count-1;
  if (count < 0)
  {
     clearInterval(counter);
     document.getElementById("get-code-again").style.display = 'none';
     document.getElementById("get-code").style.display = 'inline-block';
     return;
  }
  document.getElementById("timer").innerHTML = count;
}
