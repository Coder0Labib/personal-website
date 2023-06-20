$(function(){
  $(window).on('scroll', function(){
    let scrolling = $(this).scrollTop();
    if (scrolling > 20) {
        $('.navbar').addClass('sticky_nav');
    }
    else{
        $('.navbar').removeClass('sticky_nav');
    }
    if (scrolling > 500) {
      $('.scroll_btn').addClass('show_btn');
    }
    else{
      $('.scroll_btn').removeClass('show_btn');
    }
});
});

// scroll to top:
$(function(){
$('.scroll_btn').on('click', function(){
  $('html, body').scrollTop(0);
});
});

// particle js banner:
$(function(){
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
});

// typed js in banner:
$(function(){
  var typed = new Typed(".typing", {
    strings: ["Web Designer", "Graphics Designer", "Web Developer", "Blogger"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
  var typed = new Typed(".typing-2", {
    strings: ["Web Designer", "Web Developer", "Blogger"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
});

// wow js in banner:
$(function(){
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();
});

// progressbar skills:
$(function(){
  $('.web_design').rProgressbar({
    percentage: 90,
    fillBackgroundColor: '#1ABC9C',
    backgroundColor: '#dcdde1',
    borderRadius: '0px',
    height: '8px',
    width: '100%'
  });
  $('.web_development').rProgressbar({
    percentage: 95,
    fillBackgroundColor: '#2ECC71',
    backgroundColor: '#dcdde1',
    borderRadius: '0px',
    height: '8px',
    width: '100%'
  });
  $('.c_security').rProgressbar({
    percentage: 60,
    fillBackgroundColor: '#9B59B6',
    backgroundColor: '#dcdde1',
    borderRadius: '0px',
    height: '8px',
    width: '100%'
  });
  $('.photography').rProgressbar({
    percentage: 55,
    fillBackgroundColor: '#34495E',
    backgroundColor: '#dcdde1',
    borderRadius: '0px',
    height: '8px',
    width: '100%'
  });
  $('.graphic_design').rProgressbar({
    percentage: 70,
    fillBackgroundColor: '#F1C40F',
    backgroundColor: '#dcdde1',
    borderRadius: '0px',
    height: '8px',
    width: '100%'
  });
  $('.digital_marketing').rProgressbar({
    percentage: 65,
    fillBackgroundColor: '#ed1c24',
    backgroundColor: '#dcdde1',
    borderRadius: '0px',
    height: '8px',
    width: '100%'
  });
});

// slick team:
$(function(){
$('.slick_team').slick({
  prevArrow: true,
  nextArrow: true,
  autoplay: true,
  centerMode:true,
  centerPadding: '0px',
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});