console.log("started");

$(".timeline-wrapper .timeline-content-item > span").on(
  "mouseenter mouseleave",
  function (e) {
    console.log("hover");
    $(".timeline-wrapper .timeline-content-item.active").removeClass("active");
    $(this).parent().addClass("active");
  }
);
