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
  function Work(title, category, subCategory, date, url, isBlank, thumb) {
    this.title = title;
    this.category = category;
    this.subCategory = subCategory;
    this.date = date;
    this.url = url;
    this.isBlank = isBlank;
    this.thumb = thumb;
  }

  // カテゴリ
  var Category = {
    Game: "game",
    Web: "web",
    Art: "art",
    Other: "other",
  };

  // 作品一覧
  const works = [
    new Work("STAR TRIPS", Category.Game, "OpenGLゲーム", "2016-2-12", null, false, "star-trips.gif"),
    new Work("Treasure Hunter", Category.Game, "ブラウザゲーム", "2016-12-6", "https://unityroom.com/games/treasurehunter", true, "treasure-hunter.gif"),
    new Work("Knight Puzzle", Category.Game, "iOS/Androidアプリ", "2017-2-7", "https://unity-yuji.xyz/rd/knight-puzzle.html", false, "knight-puzzle.gif"),
    new Work("鉄骨ワタリ", Category.Game, "iOSアプリ", "2017-2-14", "https://unity-yuji.xyz/rd/tekkotsu.html", false, "tekkotsu.gif"),
    new Work("ハズレピクトを探せ！", Category.Game, "iOSアプリ", "2017-3-17", "https://unity-yuji.xyz/rd/hazure-pict.html", false, "hazure-pict.gif"),
    new Work("Switch!", Category.Game, "iOSアプリ", "2017-4-28", "https://unity-yuji.xyz/rd/switch.html", false, "switch.gif"),
    new Work("ナンプレ自動計算機", Category.Game, "iOS/Androidアプリ", "2017-6-4", "https://unity-yuji.xyz/rd/number-place.html", false, "number-place.gif"),
    new Work("Three Rings", Category.Game, "iOSアプリ", "2017-10-3", "https://unity-yuji.xyz/rd/three-rings.html", false, "three-rings.gif"),
    new Work("しりとり王", Category.Game, "iOS/Androidアプリ", "2017-11-2", "https://unity-yuji.xyz/rd/shiritori.html", false, "shiritori.gif"),
    new Work("GON", Category.Game, "iOSアプリ", "2017-11-23", "https://unity-yuji.xyz/rd/gon.html", false, "gon.gif"),
    new Work("ROBOTA", Category.Game, "iOSアプリ", "2018-1-13", "https://unity-yuji.xyz/rd/robota.html", false, "robota.gif"),
    new Work("Fly Beats", Category.Game, "iOS/Androidアプリ", "2018-8-14", "https://unity-yuji.xyz/rd/fly-beats.html", false, "fly-beats.gif"),
    new Work("元号消し", Category.Game, "iOSアプリ", "2019-4-30", "https://unity-yuji.xyz/rd/fall-era.html", false, "fall-era.gif"),
    new Work("しりとり王2", Category.Game, "iOSアプリ", "2019-7-4", "https://unity-yuji.xyz/rd/shiritori-2.html", false, "shiritori-2.gif"),
    new Work("LIFE GAME<br>-ライフゲーム-", Category.Game, "iOS/Androidアプリ", "2019-7-4", "https://unity-yuji.xyz/rd/life-game.html", false, "life-game.gif"),
    new Work("縛りしりとり", Category.Game, "iOS/Androidアプリ", "2019-8-8", "https://unity-yuji.xyz/rd/shibari-shiritori.html", false, "shibari-shiritori.gif"),
    new Work("Lights On", Category.Game, "iOS/Androidアプリ", "2019-9-26", "https://unity-yuji.xyz/rd/lights-on.html", false, "lights-on.gif"),
    new Work("正義の警察", Category.Game, "ブラウザゲーム", "2019-10-20", "https://unityroom.com/games/justice-police", true, "justice-police.gif"),
    new Work("cubiron", Category.Game, "iOS/Androidアプリ", "2019-12-2", "https://unity-yuji.xyz/rd/cubiron.html", false, "cubiron.gif"),
    new Work("Charge Rod", Category.Game, "iOS/Androidアプリ", "2019-12-10", "https://unity-yuji.xyz/rd/charge-rod.html", false, "charge-rod.gif"),
    new Work("Coin&Block", Category.Game, "ブラウザゲーム", "2020-3-1", "https://unityroom.com/games/coin-block", false, "coin-block.gif"),
    new Work("Push<br>ブロックを押して動かすパズル", Category.Game, "iOS/Androidアプリ", "2020-4-12", "https://unity-yuji.xyz/rd/push.html", false, "push.gif"),
    new Work("名画を狙う怪盗たち", Category.Game, "ブラウザゲーム", "2020-5-3", "https://unityroom.com/games/thiefs-art", false, "thiefs.gif"),
    new Work("Swap Motion", Category.Game, "iOS/Androidアプリ", "2020-5-29", "https://unity-yuji.xyz/rd/swap.html", false, "swap.gif"),
    new Work("ゆーじのUnity開発日記", Category.Web, "技術ブログ", "2018-1-27", "https://unity-yuji.xyz/", true, "unity-yuji.png"),
    new Work("シミュレーション仮説を<br>本気で考えるサイト", Category.Web, "WEBサイト", "2018-4-30", "http://simulation-hypothesis.info/", true, "simulation.png"),
    new Work("つくByeBuy", Category.Web, "WEBサイト", "2018-7", "https://unity-yuji.xyz/portfolio/web/tsuku-byebuy", true, "tsuku-byebuy.png"),
    new Work("ナゾライフ", Category.Web, "WEBサイト", "2018-10-8", "http://nazolife.work/", true, "nazolife.png"),
    new Work("真夜中の<br>魔法学校の秘密", Category.Web, "WEBサイト", "2018-10-11", "http://magical-school.site/", true, "magical-school.png"),
    new Work("Yusuke Nakajima の<br>Portfolio", Category.Web, "ポートフォリオサイト", "2018-10-15", "https://yusuke57.github.io/portfolio/", true, "portfolio.png"),
    new Work("約束のネバーランド<br>考察INFO", Category.Web, "WEBサイト", "2019-9-30", "http://the-promised-neverland.info/", true, "prom-neverland.png"),
    new Work("GameUI.net", Category.Web, "WEBサイト", "2018-10-11", "http://game-ui.net/", true, "game-ui.png"),
  ];





  // 作品情報を挿入
  function getWorkHtml(workData) {
    var html = '<div class="cover-image" style="background-image: ' + 'url("img/thumbnail/' + workData.thumb + '")' + '>\n'
    html += '<a class="content" href="' + workData.url + '">\n';
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
  $('.work-list-web').prepend(getWorksHtmlByCategory(Category.Web));


});
