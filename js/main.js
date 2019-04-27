// Animate Smooth Scroll
$('#view-work').on('click', function() {
    const images = $('#explain').position().top;
    $('html, body').animate({
        scrollTop: images
    }, 900);
});