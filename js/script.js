$(document).ready(function(){
	// == owl carousel
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:2
        },
        992:{
            items:3
        }

    }
});

         // Fancy Box
    $('[data-fancybox]').fancybox();
    // Isotope = Sort and Filtering
    $('.items').isotope({
        filter : '*',
        animationOption:{
            duration: 1500,
            easing: 'linear',
            queue : false,
        }
    });
     // Apply Sort and Filtering
    $("#filter a").click(function() {
        $("#filter .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

    // header
    var fixHeight = function(){
        $('.navbar-nav').css('max-height',document.documentElement.clientHeight - 150);
    }
    fixHeight();
    $(window).resize(function(){
        fixHeight();
    });

    $('.navar .navbar-toggler').click(function(){
        fixHeight();
    });

    $('.navbar-toggler, .overlay').click(function(){
        $('.menu, .overlay').toggleClass('open');
    });


})