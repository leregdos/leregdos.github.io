$(document).ready(function () {
  var windowHeight = $(window).height();
  var totalScrollHeight = $(document).height() - windowHeight;
  var scrollPerCandle = totalScrollHeight / 12;
  var candlesBlownOut = 0;

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var candlesToBlowOut = Math.min(
      Math.floor(scrollTop / scrollPerCandle),
      11,
    );

    for (var i = candlesBlownOut; i <= candlesToBlowOut; i++) {
      $("#candles-container .candle")
        .eq(i)
        .fadeOut(300, function () {
          $(this).attr("src", "img/unlit-candle.png").fadeIn(300);
        });
    }

    candlesBlownOut = candlesToBlowOut + 1;
  });
});
