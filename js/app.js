
/* -------------------- Particles animation --------------------- */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 2
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

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






$("#bootstrap_button").on("click", function(){
    $(".portfolio_gallery").hide();
    
    $.ajax({
        url:'bootstrap_gallery.html',
        type: 'GET',
        dataType: 'html'
    }).done(function (data){
        $(".portfolio_gallery").html(data).fadeIn('slow');
    });
});

$("#javascript_button").on("click", function(){
    $(".portfolio_gallery").hide();
    $.ajax({
        url:'javascript_gallery.html',
        type: 'GET',
        dataType: 'html'
    }).done(function (data){
        $(".portfolio_gallery").html(data).fadeIn('slow');
    });
});

$("#jquery_button").on("click", function(){
    $(".portfolio_gallery").hide();
    $.ajax({
        url:'jquery_gallery.html',
        type: 'GET',
        dataType: 'html'
    }).done(function (data){
        $(".portfolio_gallery").html(data).fadeIn('slow');
    });
});

$("#react_button").on("click", function(){
    $(".portfolio_gallery").hide();
    $.ajax({
        url:'react_gallery.html',
        type: 'GET',
        dataType: 'html'
    }).done(function (data){
        $(".portfolio_gallery").html(data).fadeIn('slow');
    });
});

























