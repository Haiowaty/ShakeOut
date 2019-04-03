let trigger;

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
        $(this).addClass('border border-darkness rounded');
        $('#highlight').removeClass('border border-darkness rounded');
        if($(this).is('#highlight'))
        {
            $('#highlight').addClass('border border-darkness rounded');
        }
        else{
            $('.nav-item').mouseout(function() {
                $('#highlight').addClass('border border-darkness rounded');
            });
        }
    });
    });
$(function() {
    $('.nav-item').mouseout(function() {
        $('#highlight').addClass('border border-darkness rounded');
        $(this).removeClass('border border-darkness rounded');
        if($(this).is('#highlight'))
        {
            $('#highlight').addClass('border border-darkness rounded');
        }
        else{
            $('.nav-item').mouseout(function() {
                $('#highlight').addClass('border border-darkness rounded');
            });
        }
    });
});

$(function () {
    const $clicken = $('.single-service');

    $($clicken).click(function(){
        window.location='oferta/index.html#'+$(this).data('anchor');
    })});
