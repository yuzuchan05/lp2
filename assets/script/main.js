/* 手動slider
-----------------------------------------*/
var mySwiper = new Swiper(".swiper", {
  loop: true,
  speed: 1000,
  slidesPerView: 1,  // SP表示時のスライド数
  slidesPerGroup: 1,
  spaceBetween: 76,
  centeredSlides: false, // スライドを中央揃えしない
  watchOverflow: true, // スライド数が少ない場合に無限ループを防ぐ
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper_button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active'
  },
  breakpoints: {
      768: {
          slidesPerView: 3,   // pc表示(768~1199px)時のスライド数
          slidesPerGroup: 2,
          spaceBetween: 20,
      },
      1200: {                  // pc表示(1200px以上)
          slidesPerView: 3,
          slidesPerGroup: 2,
          spaceBetween: 40,
      },
  },
});

/* acordion
-----------------------------------------*/
$('.qu dt').on('click',function() {
  $(this).parent().toggleClass("open");
  $(this).next().slideToggle();
});