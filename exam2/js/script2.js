$('.slider2').slick({
    slidesToShow: 3,
    arrows: true,
    dots: true,
    slidesToScroll: 1,
    responsive: [{

            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
                dots: true
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});




});