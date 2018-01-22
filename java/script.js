

$(document).ready(function(){

	//  $('h1').click(function(){
	//  $(this).css('background-color', '#ff0000');
	// })


	// scroll on 
	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});



	$('.js--nav-icon').click(function(){

		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');

		nav.slideToggle(1000);
		if (icon.hasClass('fa-bars')) {
			icon.addClass('fa-times');
			icon.removeClass('fa-bars');

		}else {
			icon.addClass('fa-bars');
			icon.removeClass('fa-times');
		}
	});



	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},1000);
		return false;
	});
	

});