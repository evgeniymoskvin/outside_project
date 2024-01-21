// $(document).ready(function(){
//     console.log('сработало')
//   $('.owl-carousel-simple').addClass('owl-carousel owl-theme').owlCarousel({
//     items: 1,
//     loop: true,
//     dots: true,
//     nav: true,
//     autoHeight: true,
//     navText: ""
//   });
//
//   $('.menu-open').on("click", function() {
//     $('.additional-menu-wrapper').addClass('menu-change-visibility')
//   });
//
//   $('.menu-close').on( "click", function() {
//     $('.additional-menu-wrapper').removeClass('menu-change-visibility')
//   });
//
//   if ($('.scrollbar-dynamic').size) {
//     $('.scrollbar-dynamic').scrollbar();
//   }
//
//
// 	$('.navigation-toggle-link').click(function()
// 		{
// 			if($('.navigation-list').css('display')=='block'){$('.navigation-list').css('display','none');}else{$('.navigation-list').css('display','block');}
// 		}
// 	);
//
// /*
// if( screen.width <= 1059 ) {
// 	$('.search-box').on('click',function()
// 		{
// 			if($('.dropdown-header-block').first().css('display')=='block'){$('.dropdown-header-block').first().css('display','none');}else{$('.dropdown-header-block').first().css('display','block');}
// 		}
// 	);
// }*/
// /*
// 	$('.top-menu-list-item.sitemap').click(function()
// 		{
// 			if($('.dropdown-header-block').last().css('display')=='block'){$('.dropdown-header-block').last().css('display','none');}else{$('.dropdown-header-block').last().css('display','block');}
// 		}
// 	);
// */
// });
$(document).ready(function () {
    $('.slide-one').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 5000, //Время смены слайда
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            450: {
                items: 1,
                nav: false,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        navText: [
            "<a class='carousel-control-prev' href='#' role='button' data-slide='prev'>" +
            "<span class = 'carousel-control-prev-icon' aria-hidden = 'true'>" +
            "</span>" +
            "</a>",
            "<a class='carousel-control-next' href='#' role='button' data-slide='next'>" +
            "<span class='carousel-control-next-icon' aria-hidden='true'>" +
            "</span>" +
            "</a>"
        ],
        dots: false,

    })

    var smallCarousel = $('.slide-two')
    smallCarousel.owlCarousel({
        loop: false,
        margin: 0,

        // nav: true,
        // autoplay: true,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 5000, //Время смены слайда
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        },
        dots: false,

    })

})

function prevSmallCarousel() {
    var smallCarousel = $('.slide-two')
    smallCarousel.trigger('prev.owl.carousel');
}

function nextSmallCarousel() {
    var smallCarousel = $('.slide-two')
    smallCarousel.trigger('next.owl.carousel');
}
