$(function(){

  // フェードイン
  $(".top-fade").each(function(i, elem){
    setTimeout(function(){
      $(elem).fadeTo(800, 1);
    }, 250 * i);
  });
  
});
