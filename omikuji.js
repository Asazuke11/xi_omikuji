$(function () {

  //キャラクター人数分の配列プッシュ
  var omikuji = [];
  for (let i = 1; i < 103; i++) {
    let x = $(`#result-` + i);
    omikuji.push(x);
  };


  // クリックでイベントを実行
  $("#btn-start").on("click", function () {
    let audioclick = new Audio();
    audioclick.src = "audio/decision22.mp3";
    audioclick.volume = 0.1;
    audioclick.play();

    // スライドアニメーションを開始
    $("#slide").addClass("open"),
      setTimeout(function () {
        $("#app").append("<div id='loading' class='layer wf-nicomoji'>あなたのうんめいフェイスは・・</div>")
        $(".first-screen").hide();
        $("#slide").addClass("close");
        let audioopen = new Audio();
        audioopen.src = "audio/tirin1.mp3";
        audioopen.volume = 0.1;
        audioopen.play();
      }, 1000)

    // スライドアニメーションを終了
    setTimeout(function () {
      $("#loading").addClass("animated fadeOutUp");
    }, 3000)
    setTimeout(function () {
      let audiokekka = new Audio();
      audiokekka.src = "audio/hyoushigi1.mp3";
      audiokekka.volume = 0.1;
      audiokekka.play();
      var random = Math.floor(Math.random() * 102);
      $(".result-screen").show();
      omikuji[random].show();
      omikuji[random].addClass("animated bounceInUp");
    }, 4000)
    setTimeout(function () {
      $("#btn-back").show();
      $("#btn-back").addClass("animated slideInUp faster");
    }, 6000)
  })
  $("#btn-back").on("click", function () {
    location.reload();
    let audioclick = new Audio();
    audioclick.src = "audio/decision22.mp3";
    audioclick.volume = 0.1;
    audioclick.play();
  })
})
