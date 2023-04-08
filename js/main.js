
$(document).ready(function () {
  //jquery for toggle sub menus
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });

  //jquery for expand and collapse the sidebar
  $(".menu-btn").click(function () {
    $(".side-bar").addClass("active");
    $(".menu-btn").css("visibility", "hidden");
  });

  $(".close-btn").click(function () {
    $(".side-bar").removeClass("active");
    $(".menu-btn").css("visibility", "visible");
  });
});
// menu mobile end
$(document).ready(function() {

  // required elements
  var imgPopup = $('.img-popup');
  var imgCont  = $('.container__img-holder');
  var popupImage = $('.img-popup img');
  var closeBtn = $('.close-btn');

  // handle events
  imgCont.on('click', function() {
    var img_src = $(this).children('img').attr('src');
    imgPopup.children('img').attr('src', img_src);
    imgPopup.addClass('opened');
  });

  $(imgPopup, closeBtn).on('click', function() {
    imgPopup.removeClass('opened');
    imgPopup.children('img').attr('src', '');
  });

  popupImage.on('click', function(e) {
    e.stopPropagation();
  });
  
});
// life style end 
(function($){
  
  $('.gallery').each(function() { // the containers for all your galleries
      $(this).magnificPopup({
          delegate: 'a', // the selector for gallery item
          type: 'image',
          gallery: {
            enabled:true
          }
      });
  });
  
})(jQuery);
// new 


$('.read-more').click(function() {
  $(this).prev().slideToggle();
  if (($(this).text()) == "Read More") {
      $(this).text("");
  } else {
      $(this).text("");
  }
});
// show more end 
$('.video-more').click(function() {
  $(this).prev().slideToggle();
  if (($(this).text()) == "Read More") {
      $(this).text("Click to see photos and videos of Kathmandu");
  } else {
      $(this).text("Less");
  }
});
// Click to see photos and videos of Kathmandu
$(document).ready(function () {
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    header.classList.toggle("sticky-bar", window.scrollY > 50);
  });
});
// sticky end


$('.slider').slick({
  autoplay: false,
  speed: 800,
  lazyLoad: 'progressive',
  arrows: true,
  dots: false,
}).slickAnimation();

// slider home end
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// slide up end



$(document).ready(function () {
  $(".youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    autoplay: true,
  });
});
// youtube video end


$(".slider_home").slick({
  dots: false,
  arrow: true,
  infinite: true,
  autoplay: true,
  fade: true,
  speed: 800,
  slidesToShow: 1,
  pauseOnDotsHover:true,
    cssEase:'linear',
    
});
// slider home end


// read more start
class readMore {
  constructor() {
    this.content = ".readmore__content";
    this.buttonToggle = ".readmore__toggle";
  }

  bootstrap() {
    this.setNodes();
    this.init();
    this.addEventListeners();
  }

  setNodes() {
    this.nodes = {
      contentToggle: document.querySelector(this.content),
    };

    this.buttonToggle = this.nodes.contentToggle.parentElement.querySelector(
      this.buttonToggle
    );
  }

  init() {
    const { contentToggle } = this.nodes;

    this.stateContent = contentToggle.innerHTML;

    contentToggle.innerHTML = `${this.stateContent.substring(0, 800)}...`;
  }

  addEventListeners() {
    this.buttonToggle.addEventListener("click", this.onClick.bind(this));
  }

  onClick(event) {
    const targetEvent = event.currentTarget;
    const { contentToggle } = this.nodes;

    if (targetEvent.getAttribute("aria-checked") === "true") {
      targetEvent.setAttribute("aria-checked", "false");
      contentToggle.innerHTML = this.stateContent;
      this.buttonToggle.innerHTML = "Show Less";
    } else {
      targetEvent.setAttribute("aria-checked", "true");
      contentToggle.innerHTML = `${this.stateContent.substring(0, 800)}...`;
      this.buttonToggle.innerHTML = "Show more";
    }
  }
}

const initReadMore = new readMore();
initReadMore.bootstrap();
//about read more end
