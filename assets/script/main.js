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
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      renderBullet: function (index, className) {
          // 画面幅に応じてページネーションのドット数を変更
          var dotsNum = window.innerWidth <= 767 ? 6 : 2;  // SPでは6つ、PCでは2つ
          if (index < dotsNum) {
              return '<span class="' + className + '"></span>';
          }
          return '';
      },
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


/* scroll
-----------------------------------------*/
$(document).ready(function() {
  const scrollButton = $('.scroll');
  const footer = $('footer');

  $(window).scroll(function() {
      // スクロール位置が200pxを超えたらボタンを表示
      if ($(this).scrollTop() > 200) {
          scrollButton.fadeIn();
      } else {
          scrollButton.fadeOut();
      }

      // フッターとの重なりを防ぐ位置調整
      if ($(window).scrollTop() + $(window).height() > footer.offset().top) {
          scrollButton.css({
              position: 'absolute',
              bottom: (($(window).height() - footer.offset().top) + 0) + 'px'
          });
      } else {
          scrollButton.css({
              position: 'fixed',
              bottom: '0rem',
          });
      }
  });

  // ボタンクリック時にトップへスムーズスクロール
  scrollButton.find('a').on('click', function(event) {
      event.preventDefault(); // デフォルトのリンク動作を無効化
      $('html, body').animate({ scrollTop: $('#top').offset().top }, 600); // スムーズスクロール
    });
});