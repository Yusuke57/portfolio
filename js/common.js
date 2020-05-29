$(function () {

  // 共通パーツ
  $("header").load("./layout/header.html");
  $("footer").load("./layout/footer.html");

  // サムネ取得
  $(".cover-image").each(function (i, elem) {
    var $path = $(elem).children("a.content").attr("href");
    $(elem).css("background-image", "url('" + $path + "img/thumb.png')");
  });

});
