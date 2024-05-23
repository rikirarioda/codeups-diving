
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  $(function () {
    // ハンバーガーメニュー
    $(".js-hamburger, .js-drawer").click(function () {
      $(".js-hamburger").toggleClass("is-active");
      $(".js-drawer").fadeToggle();
    });

    // ウィンドウのリサイズイベント
    $(window).resize(function () {
      if ($(window).width() >= 768) {
        // 画面幅が768px以上の場合はドロワーメニューを非表示にし、ハンバーガーアイコンの状態をリセット
        $(".js-drawer").hide();
        $(".js-hamburger").removeClass("is-active");
      }
    }).trigger('resize'); // 初回ロード時にもリサイズイベントをトリガー
  });

  // Swiperの初期化
  const main_swiper = new Swiper(".js-main-swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
  });


  // キャンペーンカードスワイパー
  const campaign_swiper = new Swiper(".js-campaign-swiper", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: "auto",
    speed: 3000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {
      768: {
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//アニメーション
//要素の取得とスピードの設定
var box = $('.js-colorbox'),
    speed = 700;

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;

    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
　　　　　$(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});

//ページトップ
$(document).ready(function() {
  const pageTop = $(".back-to-top");
  pageTop.hide();

  $(window).on("scroll", function () {
    const scrollHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop();
    const footHeight = $("footer").innerHeight();

    if (scrollHeight - scrollPosition <= footHeight) {
      pageTop.css({
        position: "absolute",
        bottom: footHeight + 20,
      });
    } else {
      pageTop.css({
        position: "fixed",
        bottom: 30,
      });
    }

    if ($(this).scrollTop() > 100) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });

  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});



});

