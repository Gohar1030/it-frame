$(document).ready(function() {
    "use strict";
    var o = $(window).height();
    $(".slider").height(o),
      $(window).on("resize", function() {
        var o = $(window).height();
        $(".slider").height(o);
      }),
      $(".navbar .navbar-nav .nav-item").on("click", function(o) {
        o.preventDefault(),
          $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
      }),
      $(window).on("scroll", function() {
        $(this).scrollTop() >= $(".count").offset().top - 350 &&
          $(".timer").countTo();
      }),
      $(".port ul li").on("click", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active");
      }),
      // window.mixitup(".port .gallery .container"),
      $(".navbar .navbar-nav .nav-item.active .nav-link").on("click", function(
        o
      ) {
        o.preventDefault(), $("html, body").animate({ scrollTop: 0 }, 1500);
      }),
      $("nav .navbar-nav .nav-item .nav-link").on("click", function(o) {
        o.preventDefault(),
          $("html, body").animate(
            { scrollTop: $($(this).data("target")).offset().top },
            1500
          );
      }),
      $(this).scrollTop() >= $(".feature").offset().top - 200
        ? $(".top").fadeIn()
        : $(".top").fadeOut(),
      $(window).on("scroll", function() {
        $(this).scrollTop() >= $(".feature").offset().top - 200
          ? $(".top").fadeIn()
          : $(".top").fadeOut();
      }),
      $(".top").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 1500);
      }),
      $(window).on("load", function() {
        $(".loading").fadeOut(1e3, function() {
          $(this).remove();
        });
      }),
      $("body").niceScroll({
        cursorcolor: "#17a2b8",
        cursorwidth: "8px",
        cursorborder: "1px solid #17a2b8",
        cursorminheight: 50
      }),
      new WOW().init();
  });   