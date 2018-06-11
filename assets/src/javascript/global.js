'use strict';

(function($){

	/**
  * Remove attr "style" from .nav__list whem window resize
  */
	$(window).on('resize', function () {
		if (  $(document).width() > 1024 ) { 
			$('.main-nav__list').removeAttr( "style" );     
		}
    
  });

  /**
  * Document ready state
  */
  $( function() {

    //slider-block
    $('.slider__wrap').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      fade: true,
      arrows: false,
      respondTo: 'window',
      appendDots: $('.slider__nav'),
      dots: true,
      dotsClass: 'custom-dots-slider'
    });

   //responsive menu       
  	$('.main-nav__toggle').click(function(e) {
			$('.main-nav__list').slideToggle('slow');
			e.preventDefault();

		});


  });   


})(jQuery);






