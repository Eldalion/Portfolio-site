(function($){
    
    if (window.matchMedia('(min-width: 721px)').matches) {
        $(".navigation i").hover(function(){
            $(this).next().slideDown().css("display","block");
        },function(){
            $(this).next().slideUp();
        });
    }

    $(".introduction span").addClass("bounce");

    $(".bounce:not(.letter_f), .contact_button").mouseenter(function (){
        var el = $(this);
        $(this).addClass('animated rubberBand');
        $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            el.removeClass('animated rubberBand');
        });
    });


    $("#radio").on("click",function(){
        var el = $("#song")[0];
        if (el.paused == false) { // if radio is playing, pause it
            el.pause();
            $("#radio").removeClass("animated infinite pulse");

        } else {
            el.play();
            $("#radio").addClass("animated infinite pulse");
      }
    });



    var gallery = $(".portfolio_gallery");

    $("#html_css_button").on("click", function(){
        gallery.hide();
        $.ajax({
            url:'html_css_gallery.html',
            type: 'GET',
            dataType: 'html'
        }).done(function (data){
            gallery.html($(data).find("a")).fadeIn(1000);
        });
    });

    $("#bootstrap_button").on("click", function(){
        gallery.hide();
        $.ajax({
            url:'bootstrap_gallery.html',
            type: 'GET',
            dataType: 'html'
        }).done(function (data){
            gallery.html($(data).find("a")).fadeIn(1000);
        });
    });

    $("#js_jquery_button").on("click", function(){
        gallery.hide();
        $.ajax({
            url:'js_jquery_gallery.html',
            type: 'GET',
            dataType: 'html'
        }).done(function (data){
            gallery.html($(data).find("a")).fadeIn(1000);
        });
    });

    $("#react_button").on("click", function(){
        gallery.hide();
        $.ajax({
            url:'react_gallery.html',
            type: 'GET',
            dataType: 'html'
        }).done(function (data){
            gallery.html($(data).find("a")).fadeIn(1000);
            
        });
    });
    
})(jQuery);



























