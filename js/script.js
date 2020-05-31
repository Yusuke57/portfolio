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
});

function scrollToGenre(genre) {
  $("#" + genre)[0].scrollIntoView(true);
}
