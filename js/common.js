$(function () {

  // 共通パーツ
  $("header").load("./layout/header.html");
  $("footer").load("./layout/footer.html");

  // サムネ取得
  $(".cover-image").each(function (i, elem) {
    var $path = $(elem).children("a.content").attr("href");
    $(elem).css("background-image", "url('" + $path + "img/thumb.png')");
  });


  // 作品クラス
  function Work(permalink, title, category, subCategory, date) {
    this.permalink = permalink;
    this.title = title;
    this.category = category;
    this.subCategory = subCategory;
    this.date = date;
  }

  // カテゴリ
  var Category = {
    Game: "game",
    Web: "web",
    Other: "other",
  };

  // 作品一覧
  const works = [
    new Work("star-trips", "STAR TRIPS", Category.Game, "OpenGLブラウザゲーム", "2016-2-12"),
  ];





  // 作品情報を挿入
  function getWorkHtml(workData) {
    var html = '<div class="cover-image" style="background-image: ' + 'url("' + workData.category + '/' + workData.permalink + 'img/thumb.png")' + '>\n'
    html += '<a class="content" href="';
    html += workData.category + '/';
    html += workData.permalink + '/">\n';
    html += '<div class="overlay-text">\n';
    html += '<div class="content-title">' + workData.title + '</div>\n';
    html += '<div class="content-category">' + workData.subCategory + '</div>\n';
    html += '<div class="content-title">' + workData.date + '</div>\n';
    html += '</div>\n</a>\n</div>\n\n';

    return html;
  }

  function getWorksHtmlByCategory(category) {
    var html = "";
    works.forEach(data => {
      if (data.category == category) {
        html += getWorkHtml(data);
      }
    });
    return html;
  }

  $('.work-list-game').prepend(getWorksHtmlByCategory(Category.Game));


});
