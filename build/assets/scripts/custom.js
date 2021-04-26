//------------- Content Area Min Heihgt -----------
var calculateAndApplyMinHeight = function () {
    var headerHeight = $('.header-area').length > 0 ? $('.header-area').outerHeight() : 0;
    var footerHeight = $('.footer-area').length > 0 ? $('.footer-area').outerHeight() : 0;
    var windowHeight = $(window).outerHeight();
    var contentAreaHeight = windowHeight - (footerHeight + headerHeight);

    $('.content-area').css('min-height', contentAreaHeight > 0 ? contentAreaHeight : 0);
};

$(document).ready(function () {
    calculateAndApplyMinHeight();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.carousel_prev').click(function(){
    owl.trigger('prev.owl');
})

$('.carousel_next').click(function(){
    owl.trigger('next.owl');
})

$('.mailbox').click(function(){
    $('.mailbox__container').slideToggle('swing');
});

$('.mailbox__container__close').click(function(){
    $('.mailbox__container').slideUp('swing');
});

$(document).on('click','.file-btn>img, .attachment-btn>img, .img-btn>img',function(){
    $(this).next('input[type="file"]').trigger('click');
});

$('.file-btn>input, .attachment-btn>input, .img-btn>input').change(function(){
    input_val = $(this).val();
    alert(input_val);
});

// main nav slide
$('.main-nav-toggler').click(function(){
    if($('.side-menu').hasClass('menu-fixed') == false){
        $('.header-area #side-menu').addClass('menu-fixed');
        $('body').addClass('menu-open');
    }
});

$(document).on('click', function (event) {
    if (!$(event.target).closest('#main-nav-toggler, #side-menu').length) {
        $('.header-area #side-menu').removeClass('menu-fixed');
        $('body').removeClass('menu-open');
    }
});

//sidebar nav
$(document).on('click','.has-dropdown',function(){
    $(this).toggleClass('dropdown-open');
    $(this).children('ul').slideToggle();
});