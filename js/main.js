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
        slidesToShow: 3,
        slidesToScroll: 3,
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

$(function() {
    var header = $('#nav'),
        introH = $('#intro, #news-partner__title, #new-h3').innerHeight(),
        scrollOffset = $(window).scrollTop();

        // ! Fixed header
        checkScroll(scrollOffset);
    $(window).on('scroll', function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if(scrollOffset >= introH) {
            header.addClass('fixed');
        }   else(
            header.removeClass('fixed')
        );
    }
});

// Contact Tabs
const tabsBtn   = document.querySelectorAll(".tab__link");
const tabsItems = document.querySelectorAll(".tab__item, .city-img");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tab__link').click();
