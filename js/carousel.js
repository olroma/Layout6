$(document).ready(function(){
  $(".advantage__slider").owlCarousel({
    items: 1,
    nav: true,
    dotClass: "dot",
    margin: 180,
    responsive : {
      600: {
        nav: true
      },
      0: {
        nav: false
      }
    }
  });

  $('.promo-secondary__slider').owlCarousel({
    items: 1,
    dotClass: "dot",
    margin: 30
  });

  $('.product__slider').owlCarousel({
    items: 4,
    nav: true,
    dots: false,
    margin: 80,
    responsive : {
      1300: {
        items: 4
      },
      1000: {
        items: 3
      },
      800: {
        items: 2,
        nav: true
      },
      0: {
        items: 1,
        nav: false
      }
    }
  });
});