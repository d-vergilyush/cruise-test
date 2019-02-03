$(document).ready(function () {

    $('.down').click(function () {
        console.log(123);
        $('body,html').animate({
            scrollTop: offset($('.about')[0]).top
        }, 500);
        return false;
    });
});