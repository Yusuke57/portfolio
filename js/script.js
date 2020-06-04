$(function () {

  // フェードイン
  $(".top-fade").each(function (i, elem) {
    setTimeout(function () {
      $(elem).fadeTo(800, 1);
    }, 250 * i);
  });

  // ジャンルボタン
  $("#to-game").click(function () {
    scrollToGenre("game");
  });
  $("#to-web").click(function () {
    scrollToGenre("web");
  });
  $("#to-art").click(function () {
    scrollToGenre("art");
  });

  // 目次
  (function () {
    "use strict;"

    tocbot.init({
      tocSelector: '.js-toc',
      contentSelector: '.js-toc-content',
      headingSelector: 'h1, h2, h3, .toc',
      collapseDepth: 3,
    });

  })();
});

function scrollToGenre(genre) {
  $("#" + genre)[0].scrollIntoView(true);
}
