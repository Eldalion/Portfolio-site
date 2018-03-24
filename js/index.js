
/* --------------------- INRODUCTION - ANIMATON ------------------------- */

(function(){
    
    var chars = $("h1").blast({
        delimiter: 'character'
    });
    
    // A character by character animation
        chars.each(function(i) {
    // Initialize position
        $(this).css({
            position: "relative",
            bottom: "50px",
            opacity:0
        })
    // Delay: we don't want to animate characters simultaneously
        .delay(i * 80)
    // Animate to the right
        .animate({ 
        bottom: 0,
        opacity: 1
        }, 300);
            
    });
    
    $(".contact_button").css({
        position: "relative",
        bottom: "50px",
        opacity:0
    })
    .delay(1800)
    .animate({ 
    bottom: 0,
    opacity: 1
    }, 300);
            
    $(".tag_h1,.tag_h1_close").css({
        opacity:0
    })
    .delay(1200)
    .animate({ 
    opacity: 1
    }, 700);
            
    $("#radio")
    .delay(1900)
    .animate({ 
    opacity: 1
    }, 700);
            
    $(".introduction h2").css({
        position: "relative",
        bottom: "50px",
        opacity:0
    })
    .delay(1900)
    .animate({ 
    bottom: 0,
    opacity: 1
    }, 300);
            
    $(".letter_f_image").css({
        opacity:0
    })
    .delay(1900)
    .animate({ 
    opacity: 1
    }, 600);    
    
})();

/* ------------------------- BOUNCY TEXT  ------------------------------- */

$(".introduction span").addClass("bounce");

$(".introduction span:nth-of-type(7)").addClass("letter_f");

$(".bounce:not(.letter_f), .contact_button").mouseenter(function (){
    var el = $(this);
    $(this).addClass('animated rubberBand');
    $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        el.removeClass('animated rubberBand');
    });
});

/* --------------------- RADIO - FUNCTIONALITY -------------------------- */

$("#radio").on("click",function(){
    var el = $("#song")[0];
    if (el.paused == false) { // If radio is playing, pause it
        el.pause();
            $("#radio").removeClass("animated infinite pulse");
    } else {
        el.play();
        $("#radio").addClass("animated infinite pulse");
    }
});

/* ------------------- NAVIGATION MEDIA QUERIES ------------------------- */
    
if (window.matchMedia('(min-width: 721px)').matches) {
    $(".navigation i").hover(function(){
        $(this).next().slideDown().css("display","block");
    },function(){
        $(this).next().slideUp();
    });
}














