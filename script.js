$(document).ready(function(){
    $('#about-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#about-slider-nav'
    });
});
