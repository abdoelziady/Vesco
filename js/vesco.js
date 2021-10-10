$(document).ready(function () {

    /////////////////////////////////////////

    $(".header").height($(window).height());

    $(window).resize(function () {
        $(".header").height($(window).height())
    });

    //////////////////////////////////

    $(".navbar li a").on("click", function () {
        $(this).addClass("active")
            .parent().siblings().find("a").removeClass("active");
//        $("html ,body").stop().animate({
//            scrollTop: $("#" + $(this).attr("data-value")).offset().top - 120
//        }, 1800)
    });
    
    /////////////////////////////////////

//    $(window).scroll(function () {
//        $(".block").each(function () {
//            if ($(window).scrollTop() >= $(this).offset().top - 160) {
//                var blockdiv = $(this).attr("id");
//                $(".navbar li a[data-value='" + blockdiv + "']").addClass("active")
//                    .parent().siblings().find("a").removeClass("active");
//            }
//        });
//    });

    //////////////////////////////////// 

    $(".header .navbar-toggler span i").on("click", function () {
        $(this).toggleClass("fa-times fa-bars");
    });

    /////////////////////////////////////////

   $(".header .texthead .fa-angle-double-down").on("click", function () {
       $("html ,body").animate({
           scrollTop: $("#" + $(".btndown").attr("data-value")).offset().top - 130
       }, 600)
   });

    ///////////////////////////////////////////
    var topbtn = $(".topbtn");

//    $(window).scroll(function () {
//        if ($(window).scrollTop() >= 300) {
//            if (topbtn.is(":hidden")) {
//                topbtn.fadeIn(600)
//            }
//        } else {
//            topbtn.fadeOut(500)
//        }
//    });

    ///////////////

    topbtn.on("click", function () {
        $("html ,body").animate({
            scrollTop: 0
        }, 200)
    });

    ///////////////////////////
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $(".navbar-expand-lg").css("backgroundColor", "rgba(3,3,3,.8)");
             topbtn.fadeIn(500)
        } else {
            $(".navbar-expand-lg").css("backgroundColor", "transparent");
            topbtn.fadeOut(500)
        }
    });

    ////////////////////////////////////
    //    Our Work /////////////////////
    ////////////////////////////////////

    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
        },
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out'
        }
        // other options
    });

    ////////////////////////////////////
    // Teammm /////////////////////
    ////////////////////////////////////

    $('.team-leaders').owlCarousel({
        loop: false,
        margin: 20,
        mouseDrag: false,
        smartSpeed: 100,

        animateIn: true,
        autoplay: true,
        responsive: {
           0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 2
            },
            1000: {
                items: 3
            }
        }


    });

    ///////////////////////////////////////////  
    //    Stats////////////////
    $('.counter').counterUp({
        delay: 5,
        time: 1200
    });
    ////////////////////////////////////////////
    //    Nice Scrollllll
    $("body").niceScroll({
        cursorcolor: "#007ffb",
        cursorwidth: "12px",
        cursorminheight: 100,
        cursorborderradius:  0,
        scrollspeed: 80,
        cursorborder: "none"
    });
    ////////////////////////////////////////
    ///////////// Scroll //////////////////
   var scroll = new SmoothScroll('a[href*="#"]', {
	speed:500,
       offset:100
     });
    //////////////////////////////////////////////
    /////////////// Clients /////////////////////
  $(function(){
       $(".clients-divs").owlCarousel({
           items:6,
        loop: true,
        margin: 10,
        animateIn: true,
        autoplay: true,
            responsive:{
        0:{
            items:3
        },
                600:{
            items:4
        },
        1000:{
            items:6
        }
            }
    
       });
});
    
    
     /////////////////////////////////////////
     var placeinput =" ";
    $("input[placeholder]").on("focus",function(){
        placeinput =$(this).attr("placeholder");
       $(this).attr("placeholder",""); 
    }).
    
   blur(function(){
       $(this).attr("placeholder",placeinput); 
    });
});