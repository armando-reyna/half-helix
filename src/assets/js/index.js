import $ from 'jquery';
import 'slick-carousel';
import 'bootstrap';

$(document).ready(function () {

  $('#carousel').slick({
    autoplay: true,
    dots: true
  });

  $('.carousel-arrow').click(function () {
    $('#carousel').slick('slickNext');
  });

});
