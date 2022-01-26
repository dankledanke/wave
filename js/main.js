$(function(){

    $(".menu a, .footer__logo").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

    $('.slider-blog__inner').slick({
        dots: true,
        arrows: false
    });
    $('.menu__btn, .menu a').on('click', function(){
        $('.header, .menu a').toggleClass('header--active');    
    });



    var mixer = mixitup('.portfolio__content');



});