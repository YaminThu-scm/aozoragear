/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...
$(document).ready(function () {
  // slider event
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    infinite: true,
    cssEase: 'linear',
    autoplaySpeed: 2000,
    variableWidth: true,
    centerMode: true,
    dots: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

});

$(window).on('load', function () {
  $('#loader-img').hide();
});

$(function(){
	// object fit css not working in IE script
if (document.documentMode || /Edge/.test(navigator.userAgent)) {
		jQuery('.topic .topic-img .img img ').each(function() {
				var t = jQuery(this),
						s = 'url(' + t.attr('src') + ')',
						p = t.parent(),
						d = jQuery('<div></div>');

				p.append(d);
				d.css({
						'height': t.parent().css('height'),
						'background-size': 'cover',
						'background-repeat': 'no-repeat',
						'background-position': 'center',
						'background-image': s
				});
				t.hide();
		});
}
});


$(function () {

	$('.menu-button').click(function () {
		$(this).toggleClass('active');
		$('.menu-bg').fadeToggle();
		$('nav').toggleClass('open');
	})
	$('.menu-bg').click(function () {
		$(this).fadeOut();
		$('.menu-button').removeClass('active');
		$('nav').removeClass('open');
	});
    $('.sp-nav a[href]').click(function () {
		$(this).removeClass('active');
		$('.menu-bg').fadeToggle();
        $('.menu-button').removeClass('active');
		$('nav').removeClass('open');
	})
});