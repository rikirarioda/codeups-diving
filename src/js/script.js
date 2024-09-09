jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  $(function () {
    // ハンバーガーメニュー
    $(".js-hamburger, .js-drawer").click(function () {
      $(".js-hamburger").toggleClass("is-active");
      $(".js-drawer").fadeToggle();

    });

    // ウィンドウのリサイズイベント
    // $(window).resize(function () {
    //   if ($(window).width() >= 768) {
    //     // 画面幅が768px以上の場合はドロワーメニューを非表示にし、ハンバーガーアイコンの状態をリセット
    //     $(".js-drawer").hide();
    //     $(".js-hamburger").removeClass("is-active");
    //   }
    // }).trigger('resize'); // 初回ロード時にもリサイズイベントをトリガー
    $(window).resize(function () {
      if ($(window).width() >= 768) {
        if (!$('.js-hamburger').hasClass('is-active')) {
          $(".js-drawer").hide();
          $(".js-hamburger").removeClass("is-active");
          $("body").removeClass("no-scroll"); // no-scroll クラスをリセット
        }
      }
    }).trigger('resize');
    
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



//information-page タブ
$(function () {
  const tabButton = $(".js-tab-list"),
    tabContent = $(".js-information-tab-content");
  tabButton.on("click", function () {
    let index = tabButton.index(this);

    tabButton.removeClass("is-active");
    $(this).addClass("is-active");
    tabContent.removeClass("is-active");
    tabContent.eq(index).addClass("is-active");
  });
});

//campaign-page タブ
$(function () {
  const tabButton = $(".js-tab-button"),
    tabContent = $(".js-tab-content");

  tabButton.on("click", function () {
    let index = tabButton.index(this);

    // ALLタブ以外のタブがクリックされた場合
    if (index !== 0) {
      tabButton.removeClass("is-active");
      tabButton.eq(0).addClass("is-active"); // ALLタブに常にis-activeクラスを保持
      $(this).addClass("is-active");
    }

    tabContent.removeClass("is-active");
    tabContent.eq(index).addClass("is-active");
  });
});



//モーダル
// $(function () {
//   const open = $(".js-modal-open"),
//         close = $(".js-modal-close"),
//         modal = $(".js-modal"),
//         modalImg = $(".js-modal-img"),
//         body = $("body");

//   let scrollPosition = 0;

//   open.on("click", function () {
//     scrollPosition = $(window).scrollTop();  // 現在のスクロール位置を保存
//     const imgSrc = $(this).data("img-src");  // クリックされた画像のsrcを取得
//     modalImg.attr("src", imgSrc);  // モーダル内の画像srcを更新

//     modal.addClass("is-open");  // モーダルを開く

//     // スクロールを無効化し、背景を固定
//     body.css({
//       overflow: 'hidden',
//       position: 'relative',
//       // height: '100vh',  // ビューポートの高さに固定　
//       // top: -scrollPosition + 'px',　//モーダル開いた時の高さTOP削除
//       width: '100%',
//     });
//   });

//   close.add(modal).on("click", function () {
//     modal.removeClass("is-open");  // モーダルを閉じる

//     // 背景スクロールを有効化し、スクロール位置を元に戻す
//     body.css({
//       overflow: '',
//       position: '',
//       top: '',
//       height: '',
//       width: '',
//     });

//     // スクロール位置を復元
//     $(window).scrollTop(scrollPosition);
//   });

//   // モーダルの外側をクリックして閉じる処理
//   modal.on("click", function (e) {
//     if (e.target === modal[0]) {
//       modal.removeClass("is-open");

//       body.css({
//         overflow: '',
//         position: '',
//         top: '',
//         height: '',
//         width: '',
//       });

//       // スクロール位置を復元
//       $(window).scrollTop(scrollPosition);
//     }
//   });
// });

$(function () {
  const open = $(".js-modal-open"),
        close = $(".js-modal-close"),
        modal = $(".js-modal"),
        modalImg = $(".js-modal-img"),
        body = $("body");

  let scrollPosition = 0;

  open.on("click", function () {
    scrollPosition = $(window).scrollTop();  // 現在のスクロール位置を保存
    const imgSrc = $(this).data("img-src");  // クリックされた画像のsrcを取得
    modalImg.attr("src", imgSrc);  // モーダル内の画像srcを更新

    // ウィンドウサイズの90%以内に画像を収める
    adjustImageSize();

    modal.addClass("is-open");  // モーダルを開く

    // スクロールを無効化し、背景を固定
    body.css({
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
    });
  });

  close.add(modal).on("click", function () {
    modal.removeClass("is-open");  // モーダルを閉じる

    // 背景スクロールを有効化し、スクロール位置を元に戻す
    body.css({
      overflow: '',
      position: '',
      top: '',
      height: '',
      width: '',
    });

    // スクロール位置を復元
    $(window).scrollTop(scrollPosition);
  });

  // モーダルの外側をクリックして閉じる処理
  modal.on("click", function (e) {
    if (e.target === modal[0]) {
      modal.removeClass("is-open");

      body.css({
        overflow: '',
        position: '',
        top: '',
        height: '',
        width: '',
      });

      // スクロール位置を復元
      $(window).scrollTop(scrollPosition);
    }
  });

  // ウィンドウサイズに合わせて画像を調整する関数
  function adjustImageSize() {
    const windowWidth = $(window).width();  // ウィンドウの幅
    const windowHeight = $(window).height();  // ウィンドウの高さ

    // 画像の最大幅と最大高さを90%に設定
    const maxWidth = windowWidth * 0.9;
    const maxHeight = windowHeight * 0.9;

    // 画像の自然サイズを取得
    const naturalWidth = modalImg[0].naturalWidth;
    const naturalHeight = modalImg[0].naturalHeight;

    // 画像の比率を保ちつつサイズを調整
    if (naturalWidth / naturalHeight > maxWidth / maxHeight) {
      modalImg.css({
        width: maxWidth + 'px',
        height: 'auto',
      });
    } else {
      modalImg.css({
        width: 'auto',
        height: maxHeight + 'px',
      });
    }
  }

  // ウィンドウのサイズが変更されたときにも画像を再調整
  $(window).on("resize", function () {
    if (modal.hasClass("is-open")) {
      adjustImageSize();
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

//アーカイブアコーディオン
$(function () {
  $(".js-accordion-list").on("click", function () {
    // トグルの開閉状態を切り替え
    $(this).toggleClass("is-open");
    
    // クリックされた要素の次の要素（.article__months）をスライド
    $(this).next(".article__months").slideToggle(300);
    
    // アイコンの変更
    const img = $(this).find("img");
    if ($(this).hasClass("is-open")) {
      img.attr("src", "./assets/images/common/blog-p-archive1.svg"); // 開いた状態のアイコン
    } else {
      img.attr("src", "./assets/images/common/blog-p-archive2.svg"); // 閉じた状態のアイコン
    }
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

  const tabButton = $(".js-tab-list"),
        tabContent = $(".js-information-tab-content");

  // パラメータに対応するタブボタンが存在するかチェック
  if (tabId) {
    // すべてのタブとコンテンツからアクティブクラスを削除
    tabButton.removeClass('is-active');
    tabContent.removeClass('is-active');

    // 対応するタブボタンとコンテンツにアクティブクラスを追加
    const targetTab = $("#" + tabId);
    const targetIndex = tabButton.index(targetTab);

    if (targetIndex !== -1) {
      targetTab.addClass('is-active');
      tabContent.eq(targetIndex).addClass('is-active');
    }
  }

  // タブクリック時の動作
  tabButton.on("click", function () {
    let index = tabButton.index(this);

    tabButton.removeClass("is-active");
    $(this).addClass("is-active");
    tabContent.removeClass("is-active");
    tabContent.eq(index).addClass("is-active");
  });
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







