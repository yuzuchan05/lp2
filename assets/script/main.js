/* 手動slider
-----------------------------------------*/
var mySwiper = new Swiper(".swiper", {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 76,
    centeredSlides: false,
    watchOverflow: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active'
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 2,
            spaceBetween: 40,
        },
    },
});

/* acordion
-----------------------------------------*/
$('.qa dt').on('click',function() {
    $(this).parent().toggleClass("open");
    $(this).next().slideToggle();
});


/* scroll
-----------------------------------------*/
$(document).ready(function() {
    const scrollButton = $('.scroll');
    const footer = $('footer');

    scrollButton.hide();

    $(window).scroll(function() {

    if ($(this).scrollTop() > 200) {
        scrollButton.fadeIn();
    } else {
        scrollButton.fadeOut();
    }


    if ($(window).scrollTop() + $(window).height() > footer.offset().top) {
        scrollButton.css({
            position: 'absolute',
            bottom: (($(window).height() - footer.offset().top) + 0) + 'px'
        });
    } else {
        scrollButton.css({
            position: 'fixed',
            bottom: '4rem',
        });
    }
    });
});

