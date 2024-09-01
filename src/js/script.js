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

//ハンバーガー開いている時背景スクロールしない
$(".js-hamburger").click(function () {
  $("body").toggleClass('no-scroll');
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
    slidesPerView: 1.27,
    speed: 3000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {
      768: {
        slidesPerView: 3.45,
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


//campaign-page タブ
//information-page タブ
$(function () {
  const tabButton = $(".js-tab-button"),
    tabContent = $(".js-tab-content");
  tabButton.on("click", function () {
    let index = tabButton.index(this);

    tabButton.removeClass("is-active");
    $(this).addClass("is-active");
    tabContent.removeClass("is-active");
    tabContent.eq(index).addClass("is-active");
  });
});


//モーダル

// $(function () {
//   const open = $(".js-modal-open"),
//         close = $(".js-modal__close"),
//         modal = $(".js-modal"),
//         modalImg = $(".js-modal-img"),
//         body = $("body");

//   let scrollPosition = 0;  // スクロール位置を保持する変数

//   open.on("click", function () {
//     scrollPosition = $(window).scrollTop();  // 現在のスクロール位置を保存
//     const imgSrc = $(this).data("img-src");  // クリックされた画像のsrcを取得
//     modalImg.attr("src", imgSrc);  // モーダル内の画像srcを更新

//     // モーダル内の画像サイズをウィンドウサイズに応じて調整
//     const windowHeight = $(window).height();
//     const windowWidth = $(window).width();
//     modalImg.css({
//       'max-height': windowHeight * 0.9 + 'px',  // ウィンドウ高さの90%に制限
//       'max-width': windowWidth * 0.9 + 'px'    // ウィンドウ幅の90%に制限
//     });

//     modal.addClass("is-open");  // モーダルを開く

//     // 背景スクロールを無効化
//     body.css({
//       overflow: 'hidden',
//       position: 'relative',
//       top: -scrollPosition + 'px'
//     });
//   });

//   close.add(modal).on("click", function () {
//     modal.removeClass("is-open");  // モーダルを閉じる

//     // 背景スクロールを有効化し、スクロール位置を元に戻す
//     body.css({
//       overflow: '',
//       position: '',
//       top: ''
//     });
//     $(window).scrollTop(scrollPosition);  // 元のスクロール位置に戻す
//   });
  
// });

$(function () {
  const open = $(".js-modal-open"),
        close = $(".js-modal-close"),
        modal = $(".js-modal"),
        modalImg = $(".js-modal-img"),
        body = $("body");

  let scrollPosition = 0;  // スクロール位置を保持する変数

  open.on("click", function () {
    scrollPosition = $(window).scrollTop();  // 現在のスクロール位置を保存
    const imgSrc = $(this).data("img-src");  // クリックされた画像のsrcを取得
    modalImg.attr("src", imgSrc);  // モーダル内の画像srcを更新

    // モーダル内の画像サイズをウィンドウサイズに応じて調整
    const windowHeight = $(window).height();
    const windowWidth = $(window).width();
    modalImg.css({
      'max-height': windowHeight * 0.9 + 'px',  // ウィンドウ高さの90%に制限
      'max-width': windowWidth * 0.9 + 'px'    // ウィンドウ幅の90%に制限
    });

    modal.addClass("is-open");  // モーダルを開く

    // 背景スクロールを無効化
    body.css({
      overflow: 'hidden',
      position: 'relative',
      top: -scrollPosition + 'px'
    });
  });

  close.add(modal).on("click", function () {
    modal.removeClass("is-open");  // モーダルを閉じる

    // 背景スクロールを有効化し、スクロール位置を元に戻す
    body.css({
      overflow: '',
      position: '',
      top: ''
    });
    $(window).scrollTop(scrollPosition);  // 元のスクロール位置に戻す
  });

  // 追加部分: モーダルをクリックして閉じる処理
  modal.on("click", function (e) {
    if (e.target === modal[0]) {  // モーダルの外側をクリックしたかどうかをチェック
      modal.removeClass("is-open");
      body.css({
        overflow: '',
        position: '',
        top: ''
      });
      $(window).scrollTop(scrollPosition);  // 元のスクロール位置に戻す
    }
  });
});




//アコーディオン
$(function () {
  $(".js-accordion-title").on("click", function () {
    $(this).toggleClass("is-open");
    $(this).next().slideToggle(300);
  });
});



function validateForm(event) {
  event.preventDefault();

  // 必須フィールドの取得
  const nameField = document.querySelector('input[name="お名前"]');
  const emailField = document.querySelector('input[name="メールアドレス"]');
  const phoneField = document.querySelector('input[name="電話番号"]');
  const messageField = document.querySelector('textarea[name="message"]');

  // エラーメッセージ要素の取得
  const errorMessage = document.getElementById('error-message');

  // フィールドの値のチェック
  let hasError = false;

  if (!nameField.value.trim()) {
    nameField.classList.add('input-error');
    hasError = true;
  } else {
    nameField.classList.remove('input-error');
  }

  if (!emailField.value.trim()) {
    emailField.classList.add('input-error');
    hasError = true;
  } else {
    emailField.classList.remove('input-error');
  }

  if (!phoneField.value.trim()) {
    phoneField.classList.add('input-error');
    hasError = true;
  } else {
    phoneField.classList.remove('input-error');
  }

  if (!messageField.value.trim()) {
    messageField.classList.add('input-error');
    hasError = true;
  } else {
    messageField.classList.remove('input-error');
  }

  // エラーメッセージの表示
  if (hasError) {
    errorMessage.style.display = 'block';
    return false;
  } else {
    errorMessage.style.display = 'none';
    // フォームの送信
    event.target.submit();
  }
}


//インフォメーションページ　パラメータ
$(function () {
  // URLからクエリパラメータを取得する関数
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // URLのパラメータから対応するIDを取得
  const tabId = getQueryParam('tab');

  // パラメータに対応するタブボタンが存在するかチェック
  if (tabId) {
    // すべてのタブとコンテンツからアクティブクラスを削除
    $('.js-tab-button').removeClass('is-active');
    $('.js-tab-content').removeClass('is-active');

    // 対応するタブボタンとコンテンツにアクティブクラスを追加
    $('#' + tabId).addClass('is-active');
    $('#' + tabId).closest('.tab__list').next('.tab__contents').find('.js-tab-content').eq($('#' + tabId).index()).addClass('is-active');
  }
});


//別ページに飛ぶ　料金一覧ページ
$(window).on('load', function() {
  // ページが読み込まれたときに、URLにハッシュがあるかチェック
  if (window.location.hash) {
    const headerHeight = $(".js-header").height(); // ヘッダーの高さを取得
    const target = $(window.location.hash); // ハッシュのターゲット要素を取得

    if (target.length) {
      const position = target.offset().top - headerHeight; // ヘッダーの高さを引いて位置を調整
      $("html, body").animate({ scrollTop: position }, 0); // ページをスクロール位置に移動
    }
  }

  // 同じページ内のリンクをクリックしたときの処理
  $('a[href^="#"]').click(function () {
    const headerHeight = $(".js-header").height();
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);

    // ヘッダーの高さ分下げる
    let position = target.offset().top - headerHeight;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});





});







