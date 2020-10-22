$(function () {

  // 共通パーツ
  $("header").load("./layout/header.html");
  $("footer").load("./layout/footer.html");

  // サムネ取得
  $(".cover-image").each(function (i, elem) {
    var $path = $(elem).children("a.content").attr("href");
    $(elem).css("background-image", "url('" + $path + "img/thumb.png')");
  });

  // フェード
  ScrollReveal().reveal('.fadein');



  // 作品クラス
  function Work(title, category, subCategory, detail, date, url, thumb) {
    this.title = title;
    this.category = category;
    this.subCategory = subCategory;
    this.detail = detail;
    this.date = date;
    this.url = url;
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
    new Work("STAR TRIPS", Category.Game, "OpenGLゲーム(未リリース)", "大学課題で初ゲーム開発", "2016-2-12", "https://twitter.com/yuji_ap/status/1267044989214679041", "star-trips.gif"),
    new Work("Treasure Hunter", Category.Game, "ブラウザゲーム", "初Unityでの開発", "2016-12-6", "https://unityroom.com/games/treasurehunter", "treasure-hunter.gif"),
    new Work("Knight Puzzle", Category.Game, "iOS/Androidアプリ", "初めてのアプリ開発", "2017-2-7", "https://unity-yuji.xyz/rd/knight-puzzle.html", "knight-puzzle.gif"),
    new Work("鉄骨ワタリ", Category.Game, "iOSアプリ", "1週間で開発/中国で人気", "2017-2-14", "https://unity-yuji.xyz/rd/tekkotsu.html", "tekkotsu.gif"),
    new Work("ハズレピクトを探せ！", Category.Game, "iOSアプリ", "子供も楽しめる間違い探し<br>現在公開停止中", "2017-3-17", "https://unity-yuji.xyz/rd/hazure-pict.html", "hazure-pict.png"),
    new Work("Switch!", Category.Game, "iOSアプリ", "天地を入れ替えるアクション", "2017-4-28", "https://unity-yuji.xyz/rd/switch.html", "switch.gif"),
    new Work("ナンプレ自動計算機", Category.Game, "iOS/Androidアプリ", "ナンプレの答えを出すアプリ", "2017-6-4", "https://unity-yuji.xyz/rd/number-place.html", "number-place.gif"),
    new Work("Three Rings", Category.Game, "iOSアプリ", "スワイプのみの3DSTG", "2017-10-3", "https://unity-yuji.xyz/rd/three-rings.html", "three-rings.gif"),
    new Work("しりとり王", Category.Game, "iOS/Androidアプリ", "しりとり用単語辞典/2万DL", "2017-11-2", "https://unity-yuji.xyz/rd/shiritori.html", "shiritori.png"),
    new Work("GON", Category.Game, "iOSアプリ", "200以上のシンプルパズル", "2017-11-23", "https://unity-yuji.xyz/rd/gon.html", "gon.gif"),
    new Work("ROBOTA", Category.Game, "iOSアプリ", "唯一の有料ゲーム", "2018-1-13", "https://unity-yuji.xyz/rd/robota.html", "robota.gif"),
    new Work("ゆーじのUnity開発日記", Category.Web, "技術ブログ", "Unityなどの技術発信", "2018-1-27", "https://unity-yuji.xyz/", "unity-yuji.png"),
    new Work("シミュレーション仮説を<br>本気で考えるサイト", Category.Web, "WEBサイト", "シミュレーション仮説を解説", "2018-4-30", "http://simulation-hypothesis.info/", "simulation.png"),
    new Work("つくByeBuy", Category.Web, "WEBサイト", "初チーム開発/Rails", "2018-7", "https://unity-yuji.xyz/portfolio/web/tsuku-byebuy", "tsuku-byebuy.png"),
    new Work("Fly Beats", Category.Game, "iOS/Androidアプリ", "リズム × STG", "2018-8-14", "https://unity-yuji.xyz/rd/fly-beats.html", "fly-beats.gif"),
    new Work("ナゾライフ", Category.Web, "WEBサイト", "謎解きを不定期投稿", "2018-10-8", "http://nazolife.work/", "nazolife.png"),
    new Work("真夜中の<br>魔法学校の秘密", Category.Web, "WEBサイト", "大学祭有志企画サイト", "2018-10-11", "http://magical-school.site/", "magical-school.gif"),
    new Work("Yusuke Nakajima の<br>Portfolio", Category.Web, "ポートフォリオサイト", "このサイト", "2018-10-15", "https://yusuke57.github.io/portfolio/", "portfolio.png"),
    new Work("元号消し", Category.Game, "iOSアプリ", "2019-5-1", "令和初日にリリース", "https://unity-yuji.xyz/rd/fall-era.html", "fall-era.gif"),
    new Work("しりとり王2", Category.Game, "iOSアプリ", "しりとり王をSwiftで開発", "2019-7-4", "https://unity-yuji.xyz/rd/shiritori-2.html", "shiritori-2.png"),
    new Work("LIFE GAME<br>-ライフゲーム-", Category.Game, "iOS/Androidアプリ", "大学課題で作成", "2019-7-4", "https://unity-yuji.xyz/rd/life-game.html", "life-game.gif"),
    new Work("縛りしりとり", Category.Game, "iOS/Androidアプリ", "条件付きしりとりで遊べる", "2019-8-8", "https://unity-yuji.xyz/rd/shibari-shiritori.html", "shibari-shiritori.png"),
    new Work("るつぼロケット", Category.Game, "iOSアプリ(未リリース)", "アカツキGameJam準優勝", "2019-9-15", "https://twitter.com/yuji_ap/status/1173403762804658176", "rutsubo.gif"),
    new Work("Lights On", Category.Game, "iOS/Androidアプリ", "綺麗なデザインに注力", "2019-9-26", "https://unity-yuji.xyz/rd/lights-on.html", "lights-on.gif"),
    new Work("約束のネバーランド<br>考察INFO", Category.Web, "WEBサイト", "漫画『約ネバ』考察", "2019-9-30", "http://the-promised-neverland.info/", "prom-neverland.png"),
    new Work("正義の警察", Category.Game, "ブラウザゲーム", "unity1week総合21位", "2019-10-20", "https://unityroom.com/games/justice-police", "justice-police.gif"),
    new Work("cubiron", Category.Game, "iOS/Androidアプリ", "スネーク×ハイカジュ", "2019-12-2", "https://unity-yuji.xyz/rd/cubiron.html", "cubiron.gif"),
    new Work("Charge Rod", Category.Game, "iOS/Androidアプリ", "1週間で開発", "2019-12-10", "https://unity-yuji.xyz/rd/charge-rod.html", "charge-rod.gif"),
    new Work("八月のシンデレラナイン", Category.Game, "iOS/Androidアプリ", "就業型インターンで一部改善", "2019-2-13", "https://unity-yuji.xyz/akatsuki-intern/", "hachinai.png"),
    new Work("GameUI.net", Category.Web, "WEBサイト", "ゲームUIの知見共有", "2020-2-16", "http://game-ui.net/", "game-ui.png"),
    new Work("忘れないで、<br>おとなになっても。", Category.Game, "iOS/Androidアプリ", "長期インターンで勤務", "2020-2-26", "https://www.gagex.co.jp/works/299/", "wasurenaide.png"),
    new Work("Coin&Block", Category.Game, "ブラウザゲーム", "unity1week総合11位", "2020-3-1", "https://unityroom.com/games/coin-block", "coin-block.gif"),
    new Work("Push - ブロックを<br>押して動かすパズル", Category.Game, "iOS/Androidアプリ", "ゲームデザイン/UIに注力", "2020-4-12", "https://unity-yuji.xyz/rd/push.html", "push.gif"),
    new Work("名画を狙う怪盗たち", Category.Game, "ブラウザゲーム", "unity1week総合5位", "2020-5-3", "https://unityroom.com/games/thiefs-art", "thiefs.gif"),
    new Work("『アンリアルライフ』<br>ファンアート", Category.Art, "ピクセルアート", "一番好きなゲームを描いた", "2020-5-16", "https://twitter.com/yuji_ap/status/1261326234740379650", "unreal-life.gif"),
    new Work("『名画を狙う怪盗たち』<br>開発時に描いた名画", Category.Art, "ピクセルアート", "名画×16", "2020-5-20", "https://twitter.com/yuji_ap/status/1263122464139169792", "thief-arts.png"),
    new Work("Swap Motion", Category.Game, "iOS/Androidアプリ", "音と動きの気持ち良さ", "2020-5-29", "https://unity-yuji.xyz/rd/swap.html", "swap.gif"),
    new Work("DOTweenモーション", Category.Art, "モーショングラフィックス", "Sequence1つで実装", "2020-6-19", "https://www.youtube.com/watch?v=gpbn-v8CtgY", "motion-design-portfolio.gif"),
    new Work("MotionDesignFestival", Category.Art, "モーションデザイン", "DOTweenで完走賞", "2020-7-27", "https://github.com/Yusuke57/MotionDesignFES", "motion-design-festival.gif"),
    new Work("宝探しオンライン", Category.Game, "clusterゲーム", "ClusterGameJam参加", "2020-8-2", "https://cluster.mu/w/f728c0d1-2173-4a06-8eab-7ea631ce0e19", "takara.gif"),
    new Work("かたぐるまクローンズ", Category.Game, "iOS/Androidアプリ", "unity1week総合2位", "2020-8-16", "https://unity-yuji.xyz/rd/clones.html", "clones.gif"),
    new Work("Picolor", Category.Game, "iOS/Androidアプリ", "写真の色抽出アプリ", "2020-10-6", "https://unity-yuji.xyz/rd/picolor.html", "picolor.png"),
    new Work("ボクノシメイ", Category.Game, "開発中", "ドット絵謎解きADV", "2022", "https://yuji-ap.fanbox.cc/", "shimei.gif"),
    new Work("笑顔の女の子", Category.Art, "ピクセルアート", "苦手な人物画にトライ", "2020-10-20", "https://yuji-ap.fanbox.cc/posts/1514467", "firstYui.png"),
  ];





  // 作品情報を挿入
  function getWorkHtml(workData) {
    var html = '<div class="cover-image" style="background-image: ' + 'url(\'img/thumbnail/' + workData.thumb + '\')"' + '>\n'
    html += '<a class="content" href="' + workData.url + '" target="_blank">\n';
    html += '<div class="overlay-text">\n';
    html += '<div class="content-title">' + workData.title + '</div>\n';
    html += '<div class="content-category">' + workData.subCategory + '</div>\n';
    html += '<div class="content-date">' + workData.date + '</div>\n';
    html += '<div class="content-detail">' + workData.detail + '</div>\n';
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
  $('.work-list-art').prepend(getWorksHtmlByCategory(Category.Art));


});
