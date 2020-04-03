var percent = 0;

var timer = setInterval(function () {
  $(".bar").css("width", percent + "%");
  percent += 1;
  if (percent > 102) {
    $(".pageLoading").addClass("complete");
    clearInterval(timer);
  }
}, 20);

$(".scrollitem1").hover(
  function () {
    $(".title h1").text("古代文獻");
    $(".title p").text("");
  },
  function () {
    $(".title h1").text("圖書室");
    $(".title p").text("本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。");
  }
);

$(".scrollitem2").hover(
  function () {
    $(".title h1").text("視覺史料");
    $(".title p").text("");
  },
  function () {
    $(".title h1").text("圖書室");
    $(".title p").text("本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。");
  }
);

$(".scrollitem3").hover(
  function () {
    $(".title h1").text("近人論著");
    $(".title p").text("");
  },
  function () {
    $(".title h1").text("圖書室");
    $(".title p").text(
      "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
    );
  }
);

$(".scrollitem4").hover(
  function () {
    $(".title h1").text("報刊網頁");
    $(".title p").text("");
  },
  function () {
    $(".title h1").text("圖書室");
    $(".title p").text(
      "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
    );
  }
);

// $(".scrollitem5").hover(
//   function () {
//     $(".title h1").text("光復迄今的發展：從海洋產業到地方創生");
//     $(".title p").text("");
//   },
//   function () {
//     $(".title h1").text("歷史發展廳");
//     $(".title p").text(
//       "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
//     );
//   }
// );