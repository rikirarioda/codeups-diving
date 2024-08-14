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
$(function () {
  const open = $(".js-modal-open .gallery__img"),
        close = $(".js-modal__close"),
        modal = $(".js-modal"),
        modalImg = $(".modal__img"),
        body = $("body");
  let scrollTop;  // スクロール位置を保存する変数

  // 開くボタンをクリックしたらモーダルを表示する
  open.on("click", function () {
    scrollTop = $(window).scrollTop();  // 現在のスクロール位置を保存
    const src = $(this).attr("src");
    modalImg.attr("src", src);
    modal.addClass("is-open");
    body.addClass("no-scroll");  // モーダルを開くときに背景のスクロールを禁止する
    body.css('top', -scrollTop);  // 現在のスクロール位置をtopに設定して背景を固定
  });

  // 閉じるボタンをクリックしたらモーダルを閉じる
  close.on("click", function () {
    modal.removeClass("is-open");
    modalImg.attr("src", "");  // モーダルを閉じたときに画像をクリアする
    body.removeClass("no-scroll");  // モーダルを閉じるときに背景のスクロールを許可する
    body.css('top', '');  // top の値をリセット
    $(window).scrollTop(scrollTop);  // 保存したスクロール位置に戻す
  });

  // モーダル自体をクリックしたらモーダルを閉じる
  modal.on("click", function (e) {
    if ($(e.target).is(modal)) {
      modal.removeClass("is-open");
      modalImg.attr("src", "");  // モーダルを閉じたときに画像をクリアする
      body.removeClass("no-scroll");  // モーダルを閉じるときに背景のスクロールを許可する
      body.css('top', '');  // top の値をリセット
      $(window).scrollTop(scrollTop);  // 保存したスクロール位置に戻す
    }
  });
});





//アコーディオン
$(function () {
  $(".js-accordion__title").on("click", function () {
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


});
