// Number function
$('.number').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 7000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// Slick slider
$(function() {
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
});

 //  Menu nav toggle
 $('#nav_toggle').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('#nav__lin').toggleClass('active');
});

// Init AOS
(function ($) {
    "use strict";
    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true
        });
    }
    $(window).on('load', function () {
        aos_init();
    });

})(jQuery);

