// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
    $('.slider').slick({
      vertical: true,
      infinite: false,
      nextArrow: '<div class="slick-prev slick-next"></div>',
      prevArrow: '<div class="slick-prev slick-prev"></div>'
    });

    $(".see-all").click(function () {
      $('.projects').after("<div class='projects p2'></div>");
      $.getJSON("test.json", function (data) {
        $.each(data, function (index, element) {
          $('.p2').append("<div class='single-project'><img src='" + this.imgUrl + "'><div class='project-inner'><div></div><div class='icons'><a class='project-icon icon-view'></a><a class='project-icon icon-like'></a></div><div class='about-project'><strong>" + this.projectName + "</strong> <i>" + this.projectCategory + "</i> </div></div></div>");
        });
      });
      $('html, body').animate({
        scrollTop: $(".p2").offset().top
      }, 1000);
      $('.see-all').hide();
    });

    $(function () {
      $('#newslatterForm').validate({
        rules: {
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          email: {
            required: "Please enter your email address",
            email: "Please enter a valid email address"
          }
        },
      });
    });

    $(".menu-btn").click(function () {
      $(this).toggleClass('active');
    });

  });

})(jQuery);