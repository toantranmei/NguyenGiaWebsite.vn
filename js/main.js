// Menu Responsive
$(".menu-items-res").click(function() {
    $(".block-menu-res").toggle("active");
});

// Click Scroll To Top
$(".back-top a").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

// Code Slide
$(document).ready(function(){
    $('.slider').bxSlider({
        auto: true,
    });
});