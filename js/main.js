// Button to top
$(function() {
    $('.contact-us__up--btn').on('click', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

// Animation
function animate(elem) {
    var effect = elem.data('effect');
    elem.addClass('animated ' + effect).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend', function () {
        elem.removeClass('animated ' + effect);
    });
}

$(document).ready(function () {
    $('.footer__social-link').mouseenter(function () {
        animate($(this));
    })
});

// Owl Carousel
$(document).ready(function() {
    $("#owl-slider").owlCarousel({

        navigation : true,
        slideSpeed : 400,
        paginationSpeed : 400,
        singleItem : true

    });
});
