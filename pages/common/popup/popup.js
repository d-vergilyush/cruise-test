$(document).ready(function () {
    var popup = $('.popup-wrap');

    $('.jsShowCallback').on('click', function () {
        $('#popup').fadeIn();
    });

    $('.jsPopupClose').on('click', function () {
        popup.fadeOut();
    });
});