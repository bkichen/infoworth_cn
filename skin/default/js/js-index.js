

// left industry-bar
$(function(){
    var winHeight = $(document).scrollTop();
    $(window).scroll(function() {
        var scrollY = $(document).scrollTop();
        if (scrollY > 100){
            $('.industry-bar').fadeIn();
            $('.reach-bar').addClass('show')
        }
        else {
            $('.industry-bar').fadeOut();
            $('.reach-bar').removeClass('show')
        }
     });
});

