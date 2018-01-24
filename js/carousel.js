$(document).ready(function(){
  $(".advantage__slider").owlCarousel({
    items: 1,
    nav: true,
    dotClass: "dot"
  });

  $('.promo-secondary__slider').owlCarousel({
    items: 1,
    dotClass: "dot",
    margin: 180
  });
});