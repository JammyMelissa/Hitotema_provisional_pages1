
//メインメニューにカーソルをあてると日本語へ
$(function(){
  $(".list1").hover(
    function(){
      $(this).text("お知らせ");
    },
    function(){
      $(this).text("News");
    });
});

$(function(){
  $(".list2").hover(
    function(){
      $(this).text("ヒトテマについて");
    },
    function(){
      $(this).text("About");
    });
});

$(function(){
  $(".list3").hover(
    function(){
      $(this).text("メニュー");
    },
    function(){
      $(this).text("Menu");
    });
});

$(function(){
  $(".list4").hover(
    function(){
      $(this).text("お問い合わせ");
    },
    function(){
      $(this).text("Contact");
    });
});

$(function(){
  $(".list4").hover(
    function(){
      $(this).text("お問い合わせ");
    },
    function(){
      $(this).text("Contact");
    });
});

$(function(){
  $(".list4").hover(
    function(){
      $(this).text("お問い合わせ");
    },
    function(){
      $(this).text("Contact");
    });
});

$(function(){
  $(".list4").hover(
    function(){
      $(this).text("お問い合わせ");
    },
    function(){
      $(this).text("Contact");
    });
});

$(function(){
  $("button").hover(
    function(){
      $(this).text("送信");
    },
    function(){
      $(this).text("Submit");
    });
});

$(function(){
  $(".big-img").vegas({
    slides: [
        { src: "img/background/1.jpg" },
        { src: "img/background/2.jpg" },
        { src: "img/background/3.jpg" }
    ]
 });
});
