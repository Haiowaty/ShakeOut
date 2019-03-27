var trigger;

$(window).scroll(function() {

    trigger = $('#services').offset().top - $('.navbar').height();

    if ($(this).scrollTop() > trigger) {
        $('.navbar').addClass('navbar-smaller');

    } else {
        $('.navbar').removeClass('navbar-smaller');

    }
});
$(function() {
    $('.nav-item').mouseover(function() {
        $(this).addClass('border border-darkness rounded transition');
        $('#highlight').removeClass('border border-darkness rounded transition');

        if($(this).is('#highlight'))
        {
            $('#highlight').addClass('border border-darkness rounded transition');
        }
        else{
            $('.nav-item').mouseout(function() {
                $('#highlight').addClass('border border-darkness rounded transition');
            });
        }
    });
    });
$(function() {
    $('.nav-item').mouseout(function() {
        $('#highlight').addClass('border border-darkness rounded transition');
        $(this).removeClass('border border-darkness rounded transition');
    });
});

$(function () {
    const $clicken = $('.single-service');

    $($clicken).click(function(){
        window.location='oferta/index.html#'+$(this).data('anchor');
    })});
