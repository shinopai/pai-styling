$(function () {
  // topへ戻るボタン
  var topBtn = $(".back-top-btn");
  topBtn.hide();
  //スクロールが500に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スルスルっとスクロールでトップへもどる
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  // ヘッダーメニュー
  var headerMenu = $(".header");
  $(window).scroll(function () {
    if (window.matchMedia("(max-width: 960px)").matches) {
      if ($(this).scrollTop() > 600) {
        headerMenu.css("marginTop", "0");
      } else {
        headerMenu.css("marginTop", "-130px");
      }
    } else {
      if ($(this).scrollTop() > 600) {
        headerMenu.css("marginTop", "0");
      } else {
        headerMenu.css("marginTop", "-69px");
      }
    }
    if (window.matchMedia("(max-width: 768px)").matches) {
      if ($(this).scrollTop() > 600) {
        headerMenu.css("marginTop", "0");
      } else {
        headerMenu.css("marginTop", "0");
      }
    }
  });

  // ナビメニュースマホ
  var navMenu = $(".nav-menu");
  var headerIco = $(".header__ico");
  var closeIco = $(".nav-menu__ico");

  headerIco.click(function () {
    navMenu.css("marginLeft", "0");
  });
  closeIco.click(function () {
    navMenu.css("marginLeft", "-70%");
  });
});
