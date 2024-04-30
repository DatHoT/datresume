
  $(function () {
    'use strict'

    $(".navbar").addClass("scroll");

    // MENU
    $('.navbar .nav-link').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).on('scroll', function() {     
                               
        $(".navbar").addClass("scroll");          
    });

    // TESTIMONIALS CAROUSEL
    $('#testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:2,
            },
            1200:{
                items:3,
                loop:false
            }
        }
    })

    $(document).ready(function() {
        function adjustImagePadding() {
            var navbarHeight = $('.navbar').outerHeight();
            $('.img-fluid').css('margin-top', navbarHeight + 'px');
        }
    
        // Adjust on load
        adjustImagePadding();
    
        // Adjust on resize
        $(window).resize(adjustImagePadding);
    });
    

    // SMOOTHSCROLL
    $(function() {
      $('.navbar .nav-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });

    $(document).ready(function() {
        var maxPHeight = 0;
    
        // Find the tallest text block
        $('.testimonials-info p').each(function() {
            var thisHeight = $(this).outerHeight();
            if (thisHeight > maxPHeight) {
                maxPHeight = thisHeight;
            }
        });
    
        // Set all text blocks to the height of the tallest
        $('.testimonials-info p').height(maxPHeight);
    
        // Position names and titles at the bottom of the testimonial
        $('.testimonials-info').each(function() {
            var infoHeight = $(this).height();
            var textHeight = $(this).find('p').outerHeight();
            var nameTitleHeight = $(this).find('h6').outerHeight() + $(this).find('span').outerHeight();
    
            // Calculate the top position of the name and title and set it
            $(this).find('h6').css('position', 'absolute').css('top', textHeight + 'px');
            $(this).find('span').css('position', 'absolute').css('top', textHeight + $(this).find('h6').outerHeight() + 'px');
        });
    });

    $(document).ready(function() {
        $('.testimonials-info span').each(function() {
            let $span = $(this);
            if ($span.text().length > 50) {  // Threshold for text length adjustment
                $span.css('font-size', '12px');  // Reduce font size
            }
    
            // Check if text overflows its container
            if (isTextOverflowing($span[0])) {
                $span.css({
                    'overflow': 'auto',  // Enable scrolling for overflow
                    'white-space': 'nowrap'  // Keep text in a single line
                });
            }
        });
    
        function isTextOverflowing(element) {
            return element.scrollWidth > element.clientWidth;
        }
    });
    
    
    $('.certifications h4').on('click', function() {
        $(this).next('p').slideToggle(); // Toggles the visibility of the paragraphs under each header
    });

    $('.testimonials h4').on('click', function() {
        $(this).next('p').slideToggle(); // Toggles the visibility of the paragraphs under each header
    });

    $('.timeline-item .item-title').on('click', function() {
        $(this).siblings('.item-description').slideToggle(); // Toggle visibility of description
    });

    $('.core-competencies h4').on('click', function() {
        $(this).next('ul').slideToggle(); // Toggle the visibility of the list under each header
    });

    $('.publication-title').on('click', function() {
        $(this).next('.publication-detail').slideToggle(); // Toggle the visibility of the details
    });
     
  });
