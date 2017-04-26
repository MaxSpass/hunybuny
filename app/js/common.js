$(document).ready(function(){
	$('.slider').bxSlider({
		mode: 'fade',
		speed: 800,
		controls: false,
	    auto: true,
	    autoHover: true,
	    pause: 6000
	});

	$('.slide-gallery').bxSlider({
		mode: 'fade',
		controls: false,
		speed: 800,
	    auto: true,
	    autoHover: true,
	    pause: 6000
	})

	$('.hp-col-1 .hp-item').viewportChecker({
		classToRemove: 'invis',
		classToAdd: 'animated fadeInRight',
		offset: 50
	});

	$('.hp-col-2 .hp-item').viewportChecker({
		classToRemove: 'invis',
		classToAdd: 'animated fadeInLeft',
		offset: 50
	});

	$('.hunybuny-desc').viewportChecker({
		classToAdd: 'show-bgi',
		offset: 50
	})

	$('.shop-item').viewportChecker({
		classToRemove: 'invis',
		classToAdd: 'animated zoomIn',
		offset: 50
	})

	$('.gift-box').viewportChecker({
		classToRemove: 'invis',
		classToAdd: 'animated zoomIn',
		offset: 50
	})

	$('.gift-item').viewportChecker({
		classToRemove: 'invis',
		classToAdd: 'animated slideInUp',
		offset: 50
	})

	$('.slide-box img').each(function(){
		var srcLink = $(this).attr('src');
		var wrapHref = $('<a>').attr('href',srcLink);
		$(this).wrap(wrapHref);
	})

	$('.slide-box a').magnificPopup({type:'image'})

})
