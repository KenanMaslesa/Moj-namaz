(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 17;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }


  // Intro carousel
  var introCarousel = $(".carousel");
  var introCarouselIndicators = $(".carousel-indicators");
  introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>"):
      introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
  });

  introCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animate__animated animate__fadeInDown');
    $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
  });


  // jQuery counterUp (used in Facts section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });


  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: false
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

$("[data-toggle=popover]").popover(); 

$("#expand").on('click', function(){
  $("#expand").hide();
  $("#exit").show();
  $("#header").hide();
  $("#footer").hide();
  $("#visit_btn").hide();
  $(".frame").css("padding","0px");
});

$("#exit").on('click', function(){
  $("#expand").show();
  $("#exit").hide();
  $("#header").show();
  $("#footer").show();
  $("#visit_btn").show();
  $(".frame").css("padding","120px 0 30px 0");
});

var fontSize = 16;
$("#plus").on('click', function(){
  fontSize++;
  $("#main").css("font-size",fontSize.toString()+"px");
  var arabicFontsize = fontSize + 6;
  $(".arabic").css("font-size",arabicFontsize.toString()+"px");
});

$("#minus").on('click', function(){
  fontSize--;
  var arabicFontsize = fontSize + 6;
  $("#main").css("font-size",fontSize.toString()+"px");
  $(".arabic").css("font-size",arabicFontsize.toString()+"px");
});


var audio, audioPath;
$(".play-btn").on("click", function(){
   if(audioPath == $(this).attr("data-audio"))
   audio.play();
   else{
    audioPath = $(this).attr("data-audio");
     audio = new Audio(audioPath);
     audio.play();
   }
});

$(".pause-btn").on("click", function(){
  audioPath = $(this).attr("data-audio");
  if(audioPath == $(this).attr("data-audio"))
    audio.pause();
});

$(".stop-btn").on("click", function(){
  audioPath = $(this).attr("data-audio");
  if(audioPath == $(this).attr("data-audio"))
   {
    audio.pause();
    audio.currentTime = 0;
   } 
});

var counter = 0;
$("#counter").on("click", function(){
counter++;

$("#counterup").html(counter);
});

$("#reset_counter").on("click", function(){
  counter = 0;
  $("#counterup").html(counter);
  });

  var mobileCounter1 = 0;

$("#mobile-counterup1").on("click", function(){
  mobileCounter1++;
  
$("#mobile-counterup1").html(mobileCounter1);
});

$("#reset_mobile_counter1").on("click", function(){
  mobileCounter1 = 0;
  $("#mobile-counterup1").html(mobileCounter1);
  });


  var mobileCounter2 = 0;
  $("#mobile-counterup2").on("click", function(){
    mobileCounter2++;
  $("#mobile-counterup2").html(mobileCounter2);
  });
  
  $("#reset_mobile_counter2").on("click", function(){
    mobileCounter2 = 0;
    $("#mobile-counterup2").html(mobileCounter2);
    });

//Typed
if ($('.typed').length) {
  var typed_strings = $(".typed").data('typed-items');
  typed_strings = typed_strings.split(',')
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 50,
    backSpeed: 10,
    backDelay: 10000
  });
}

//service worker
if("serviceWorker" in navigator)
{
  navigator.serviceWorker.register("/sw.js")
  .then(registration => {
    console.log(registration);
  })
  .catch(error => console.error(error));
}