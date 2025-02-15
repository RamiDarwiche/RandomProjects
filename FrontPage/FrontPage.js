var script = document.createElement("SCRIPT");
script.src = "../jquery-3.7.1.min.js";
script.type = "text/javascript";

$.fn.animateRotate = function (start, angle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function (i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function (now) {
      $.style(e, "transform", "rotate(" + now + "deg)");
      if (step) return step.apply(e, arguments);
    };

    $({ deg: start }).animate({ deg: angle }, args);
  });
};

$(document).ready(function () {
  var viewportWidth = $(window).width();

  if (viewportWidth < 1415) {
    $(".mobileNav").hide();
  }

  $("#toAbout").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".about").offset().top,
      },
      "slow"
    );
  });

  // TODO: fix mobile nav bar still appearing after page expanded
  // TODO: finish mobile navigation menu
  $(".icon").click(function () {
    if ($(".mobileNav").css("display") === "none") {
      $(".mobileNav").slideDown("slow").css("display", "flex");
      $("#icon").animateRotate(0, 90, 200, "linear", function () {});
    } else if ($(".mobileNav").css("display") === "flex") {
      $(".mobileNav").slideUp("slow");
      $("#icon").animateRotate(90, 0, 200, "linear", function () {});
    }
  });
});
