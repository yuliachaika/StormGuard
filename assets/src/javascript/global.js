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


  	$('.main-nav__toggle').click(function(e) {
			$('.main-nav__list').slideToggle('slow');
			e.preventDefault();

		});


  });   


})(jQuery);






