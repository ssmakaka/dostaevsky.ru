$(document).ready(function () {
    $('.link1').on('click', function () {
        $('.navbar-collapse').removeClass('in');
        $a = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $('#preimuschestva').position().top
        }, 2000);
        return false;
    });
    $('.link2').on('click', function () {
        $('.navbar-collapse').removeClass('in');
        $a = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $('#natur').position().top
        }, 2000);
        return false;
    });
    $('.link3').on('click', function () {
        $('.navbar-collapse').removeClass('in');
        $a = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $('#regen').position().top
        }, 2000);
        return false;
    });
    $('.link4').on('click', function () {
        $('.navbar-collapse').removeClass('in');
        $a = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $('#gallery').position().top
        }, 2000);
        return false;
    });
    $('.link5').on('click', function () {
        $('.navbar-collapse').removeClass('in');
        $a = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $('#sertifikaty').position().top
        }, 2000);
        return false;
    });

});