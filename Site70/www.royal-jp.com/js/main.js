;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Main Menu Superfish
	var mainMenu = function() {

		$('#qz-primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});

	};

	// Offcanvas and cloning of the main menu
	var offcanvas = function() {

		var $clone = $('#qz-menu-wrap').clone();
		$clone.attr({
			'id' : 'offcanvas-menu'
		});
		$clone.find('> ul').attr({
			'class' : '',
			'id' : ''
		});

		$('#qz-page').prepend($clone);

		// click the burger
		$('.js-qz-nav-toggle').on('click', function(){

			if ( $('body').hasClass('qz-offcanvas') ) {
				$('body').removeClass('qz-offcanvas');
			} else {
				$('body').addClass('qz-offcanvas');

			}
		
			// $('body').toggleClass('qz-offcanvas');

		});
$clone.on('click', function(){

				if ( $('body').hasClass('qz-offcanvas') ) {
				$('body').removeClass('qz-offcanvas');
			}
		
			// $('body').toggleClass('qz-offcanvas');

		});


		$(window).resize(function(){
			var w = $(window);

			if ( w.width() > 769 ) {
				if ( $('body').hasClass('qz-offcanvas') ) {
					$('body').removeClass('qz-offcanvas');
				}

			}

		});	

	}

	// Superfish Sub Menu Click ( Mobiles/Tablets )
	var mobileClickSubMenus = function() {

		$('body').on('click', '.qz-sub-ddown', function(event) {
			event.preventDefault();
			var $this = $(this),
				li = $this.closest('li');
			li.find('> .qz-sub-menu').slideToggle(200);
		});


	};


	

	// Document on load.
	$(function(){

		offcanvas();

		

	});


}());



