// $(window).ready(function(){
//     $('a').each(function(e){
//         this.href = this.href.replace("https://112.213.89.153/#", "https://112.213.89.153/~metafutu/#");
//     })
// });

// Add class "active" when redirect page for manu-main
$(window).ready(function () {
  var path = window.location.pathname,
    hash = window.location.hash;
  console.log($('a[href=".' + path + hash + '"]').length);
  if ($('a[href=".' + path + hash + '"]').length) {
    $('[data-spy="scroll"]').scrollspy("dispose");
    $("#myScrollspy .nav-item .nav-link").removeClass("active");
    $('a[href=".' + path + hash + '"]')
      .parents("li.nav-item.dropdown")
      .find('a[data-toggle="dropdown"]')
      .addClass("active");
    $('a[href=".' + path + hash + '"]').addClass("active");
  }
  // Scroll to section when load page again
  if (window.location.hash != "")
    $("html, body").animate(
      { scrollTop: $(window.location.hash).offset().top },
      "slow"
    );
});

//carousel-metaf-token slider section
(function ($) {
  var methods = ["addClass", "toggleClass", "removeClass"];

  $.each(methods, function (index, method) {
    var originalMethod = $.fn[method];

    $.fn[method] = function () {
      var oldClass = this.className;
      var result = originalMethod.apply(this, arguments);
      var newClass = this.className;

      this.trigger(method, [oldClass, newClass]);

      return result;
    };
  });
})(window.jQuery || window.Zepto);

$("#carousel-metaf-token .carousel-indicators.nav-bottom li").on(
  "addClass",
  function (e, oldClass, newClass) {
    $(".image-enjoy p").removeClass("active");
    $(
      '.image-enjoy [data-slide-to="' + $(this).data("slide-to") + '"]'
    ).addClass("active");
  }
);

// Set all carousel items to the same height
function carouselNormalization() {
  (window.heights = []), //create empty array to store height values
    window.tallest; //create variable to make note of the tallest slide

  function normalizeHeights() {
    jQuery("#carousel-metaf-token .carousel-inner .carousel-item").each(
      function () {
        //add heights to array
        window.heights.push(jQuery(this).outerHeight());
      }
    );
    window.tallest = Math.max.apply(null, window.heights); //cache largest value
    jQuery("#carousel-metaf-token .carousel-inner .carousel-item").each(
      function () {
        jQuery(this).css("min-height", tallest + "px");
      }
    );
  }
  normalizeHeights();

  jQuery(window).on("resize orientationchange", function () {
    (window.tallest = 0), (window.heights.length = 0); //reset vars
    jQuery("#carousel-metaf-token .carousel-inner .carousel-item").each(
      function () {
        jQuery(this).css("min-height", "0"); //reset min-height
      }
    );

    normalizeHeights(); //run it again
  });
}

jQuery(document).ready(function () {
  carouselNormalization();
});

//Add class active for section "Metaf token" on screen max width 768px
if ($(window).width() <= 768) {
  $("#metaf-token .content > div:not(:first-child)").click(function () {
    $("#metaf-token .content > div:not(:first-child)").removeClass("active");
    $(this).addClass("active");
  });
}

// Menu fixed on PC
$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $("#menu-main-pc").addClass("fixed-menu");
  } else {
    $("#menu-main-pc").removeClass("fixed-menu");
  }
});

// Menu fixed on mobile
$(window).scroll(function () {
  var header = $("#menu-main-mobile > #myScrollspy");
  header.parent().height(header.parent().height());
  var sticky = header.parent().offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() >= sticky) {
      header.addClass("fixed-menu");
    } else {
      header.removeClass("fixed-menu");
    }
  });
});

// Menu main on Mobile
$("[data-trigger]").on("click", function () {
  var trigger_id = $(this).attr("data-trigger");
  $(trigger_id).toggleClass("show");
  $("body").toggleClass("offcanvas-active");
});

// close button Menu main on Mobile
$(".btn-close, .navbar-nav > .nav-item").click(function (e) {
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
});

// $("#menu-main-mobile a").click(function() {  //Class nút click
//     $(trigger_id).toggleClass("hide");
// });

// Initialize Swiper
$(window).ready(function () {
  var menu = [
    "./img/pagination/line.png",
    "./img/pagination/line.png",
    "./img/pagination/line.png",
    "./img/pagination/line.png",
    "./img/pagination/line.png",
    "./img/pagination/line.png",
    "./img/pagination/line.png",
    "./img/pagination/line.png",
    "./img/pagination/line.png",
    "./img/pagination/line.png",
    "./img/pagination/line.png",
  ];

  if ($(".swiper-metaversa").length) {
    new Swiper(".swiper-metaversa", {
      slidesPerView: 1,
      spaceBetween: 50,
      slidesPerGroup: 1,
      // loop: true,
      autoplay: {
        delay: 2500,
        // disableOnInteraction: true,
      },
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className, ...rest) {
          console.log("index", index);
          console.log("rest", rest);
          return '<img src="' + menu[index] + '" class="' + className + '">';
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1025: {
          //min-width: 1025px
          slidesPerView: 1,
          spaceBetween: 50,
        },
        769: {
          //min-width: 769px
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          //min-width: 320px
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
    $(".swiper").on("mouseover", function () {
      // this.swiper.autoplay.stop();
    });

    $(".swiper").on("mouseout", function () {
      // this.swiper.autoplay.start();
    });
  }

  if ($(".mySwiper-partner").length) {
    new Swiper(".mySwiper-partner", {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
      // loop: true,
      autoplay: {
        delay: 2500,
        // disableOnInteraction: true,
      },
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1025: {
          //min-width: 1025px
          slidesPerView: 4,
          spaceBetween: 30,
        },
        769: {
          //min-width: 769px
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          //min-width: 320px
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });
    $(".swiper").on("mouseover", function () {
      // this.swiper.autoplay.stop();
    });

    $(".swiper").on("mouseout", function () {
      // this.swiper.autoplay.start();
    });
  }

  if ($(".swiper").length) {
    new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
      // loop: true,
      autoplay: {
        delay: 2500,
        // disableOnInteraction: true,
      },
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1025: {
          //min-width: 1025px
          slidesPerView: 4,
          spaceBetween: 30,
        },
        769: {
          //min-width: 769px
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          //min-width: 320px
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    });
    $(".swiper").on("mouseover", function () {
      // this.swiper.autoplay.stop();
    });

    $(".swiper").on("mouseout", function () {
      // this.swiper.autoplay.start();
    });
  }
});

//Effect WOW
new WOW().init();

//MIN-HEIGHT FIT SCREEN ON TABLET
if ($(window).width() <= 768) {
  $(window).ready(function () {
    console.log(
      "menu-main-mobile height =" + $("#menu-main-mobile").height() + "px"
    );
    console.log("calc(100vh - " + $("#menu-main-mobile").height() + "px )");

    // var h_nav = "calc(100vh - " + $("#menu-main-mobile").height() + "px )";
    var h_nav = "calc(100vh - " + 57.8281 + "px )";
    $("#vill-meta, [id*='meta-']").css("min-height", h_nav);
  });
}

// Trigger play button when click img
$(".play-btn .content").click(function () {
  $(".video video").get(0).play();
});
$(".video video").on("pause", function () {
  $(".play-btn").css("display", "flex");
});
$(".video video").on("play", function () {
  $(".play-btn").css("display", "none");
});

// SET IMAGE ROAD MAP
if ($(window).width() <= 577) {
  $(window).ready(function () {
    const imgEl = $("#bg-road-map").get(0);
    imgEl.src = "./img/road-map/bg-road-map-mobile.png";

    $(".artboard_1").hide();
    $(".artboard_2").hide();
    $(".artboard_3").hide();
    $(".artboard_4").hide();
    $(".process-item").hide();

    $("#road-map-content1").show();
    $("#road-map-content2").show();
    $("#road-map-content3").show();
    $("#road-map-content4").show();
  });
} else {
  $("#road-map-content1").hide();
  $("#road-map-content2").hide();
  $("#road-map-content3").hide();
  $("#road-map-content4").hide();
}
