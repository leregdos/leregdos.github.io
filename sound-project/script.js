$(document).ready(function () {
  $("#startButton").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#home").offset().top,
      },
      1000,
    ); // 1000 milliseconds for smooth scroll duration
  });
});

$(document).ready(function () {
  var scrollPerCandle =
    ($("#first-text").offset().top - $(window).height()) / 12;
  var candlesBlownOut = 0;
  var windSoundPlayed = false; // Flag to ensure the sound only plays once

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    // Check if the user has scrolled to the #first-text section
    if (
      scrollTop >= $("#first-text").offset().top - $(window).height() &&
      !windSoundPlayed
    ) {
      var windSound = new Audio("wind.mp3");
      windSound.play();
      windSoundPlayed = true; // Set the flag to true after playing
    }

    // Start turning off candles after the wind sound has been triggered
    if (windSoundPlayed) {
      var candlesToBlowOut = Math.min(
        Math.floor(
          (scrollTop - ($("#first-text").offset().top - $(window).height())) /
            scrollPerCandle,
        ),
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
    }
  });
});
