

jQuery('.stellarnav').stellarNav({
    theme: 'plain',
    breakpoint: 767,
    menuLabel: '',
    position: 'right',

});

// ------- banner-slider-js ------ //

  $('#banner-carousel').owlCarousel({
    loop:false,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayHoverPause:true,
    navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        920:{
            items:1
        },
        1400:{
            items:1
        }
    }
});


// ------- sermons-slider-js ------ //




$('#sermons-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    margin:20,
    autoplay:true,
    autoplayHoverPause:true,
    navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        700:{
            items:2
        },
        920:{
            items:3
        },
        1400:{
            items:3
        }
    }
});