(function ($, Drupal) {
    'use strict';
  
    Drupal.behaviors.featuredSlider = {
      attach: function attach() {
        $('.field--name-field-slider-img testimonial').slick({
          dots: true,
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: 'ondemand',
          autoplay: true,
          autoplaySpeed: 4000
        });
      }
    };
  })(jQuery, Drupal);

//  testimmonial
  (function ($, Drupal) {
    'use strict';
  
    Drupal.behaviors.featuredSlider = {
      attach: function attach() {
        $('.tesimonial__wrapper').slick({
          dots: true,
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: 'ondemand',
          autoplay: true,
          autoplaySpeed: 4000
        });
      }
    };
  })(jQuery, Drupal);


 