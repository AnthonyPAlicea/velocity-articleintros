/*
* Javascript driving the article introductions.
* jQuery and Velocity.js are the dependencies.
* For more information see the github repo.
*
* Anthony P. Alicea
* http://www.anthonypalicea.com/velocityarticleintros
* http://www.github.com/anthonypalicea/velocity-articleintros
*/

(function() {

    // Set to true once the animation has run, and false when an outro occurs
    var introAnimationRun = false;

    // Used to mark the initial scroll attempt (if touch device)
    var isInitialTouchScroll = false;

    // Dummy variable used with setInterval
    var intervalId = -1;

    // Used only for the 'side' effect
    var originalArticleWidth = $('article > div').attr('data-side-width'); /* used only for the 'side' effect */

    // Disable touch scrolling (used while intro is visible)
    function disableTouchScroll() {

                $(document).on("touchmove", "body", function(e) { e.preventDefault(); });

    }

    // Enable touch scrolling (used while intro is invisible)
    function enableTouchScroll() {

                $(document).off("touchmove", "body");

    }
    
    // Initially disable touch
    disableTouchScroll();

    // The intro animations are defined here
    var introAnimation = function() {

        var currentScrollTop = $(this).scrollTop();

        // INTRO
        // If we have scrolled, or attempted to on a touch device
        if (currentScrollTop > 5 || (isInitialTouchScroll)) {

            // If the animation isn't running
            if (!introAnimationRun)
            {
                // initiate intro animation
                introAnimationRun = true;

                // don't bother running setInterval while the animation is running
                window.clearInterval(intervalId);

                var articleIntro = $("body").attr('data-articleintro');
                
                if (!articleIntro || articleIntro == "")
                {
                    alert("Missing 'data-articleintro' attribute from the <body> tag");
                }

                // push
                if (articleIntro == 'push')
                {
                    $('div.header-img').velocity({ translateY: "-80%", opacity: 0, scale: 0.9 }, { duration: 800, queue: false, easing: [0.7,0,0.3,1] });

                }

                // jam
                if (articleIntro == 'jam')
                {
                    $('div.header-img').velocity({ translateY: "-75%", opacity: 0.3 }, { duration: 500, queue: false, easing: "ease-out" });
                }

                // side
                if (articleIntro == 'side')
                {
                    $('article > div').css("width", "50%");
                    $('article > div').velocity({ translateX: "-25%" }, { duration: 0 });
                    $('div.header-img').velocity({ translateX: "70%" }, { duration: 500, easing: [0.7,0,0.3,1] });

                    if (!originalArticleWidth || originalArticleWidth == "")
                    {
                        alert('To use the side effect you need to set a data-side-width attribute on the article <div>.\n\nOtherwise we don\'t know what width to return the content to later.');
                    }
                }

                // bring in the article contents
                $('article').velocity({ translateY: "-200px", opacity: 1 }, { duration: 575, queue: false, delay: 200, easing: "ease-in-out",
                complete: function() {                     
                    if (isInitialTouchScroll) 
                    {
                        // scroll just a bit to not trigger the outro animation
                        $(document).scrollTop(2);
                    } 

                    // reenable touch scrolling once the article contents is visible
                    enableTouchScroll(); 
                    isInitialTouchScroll = false; 
                    } });

                // for demo purposes only: hide the chooser
                $("#chooseEffect").velocity({ opacity: 0 });

                // start the interval check again
                intervalId = setInterval(introAnimation, 100);
            }

        }
        // OUTRO
        // if we have moved back to the top
        else if (currentScrollTop <= 1) {

            // and the animation has been run
            if (introAnimationRun)
            {
                // don't bother running setInterval while the animation is running
                window.clearInterval(intervalId);

                // initiate outro animation of article contents
                $('article').velocity({ translateY: "200px", opacity: 0 }, { duration: 400, queue: false, easing: "ease-out" });

                var articleIntro = $("body").attr('data-articleintro');

                // push
                if (articleIntro == 'push')
                {
                    $('div.header-img').velocity({ translateY: "0", opacity: 1, scale: 1 }, { duration: 700, queue: false, easing: [0.7,0,0.3,1] });
                }

                // jam
                if (articleIntro == 'jam')
                {
                    $('div.header-img').velocity({ translateX: "0", translateY: "0", scale: 1, opacity: 1 }, { duration: 700, queue: false, easing: [0.7,0,0.3,1] });
                }

                // side
                if (articleIntro == 'side')
                {
                    $('div.header-img').velocity({ translateX: "0" }, { duration: 700, delay: 200, queue: false, easing: [0.7,0,0.3,1], complete: function() { $('article > div').css("width", originalArticleWidth); } });
                    $('article > div').velocity({ translateX: "0" }, { duration: 800, queue: false });
                }

                // mark the animation as having not been run since we did the outro
                introAnimationRun = false;

                // for demo purposes only: show the chooser
                $("#chooseEffect").velocity({ opacity: 1});

                // start the interval again
                intervalId = setInterval(introAnimation, 100);

                // disable touch scrolling
                disableTouchScroll();
            }

        }

    }

    // we choose to check the scroll position at intervals rather than rely on the scroll event
    intervalId = setInterval(introAnimation, 100);

    // capture touch scrolling
    $(document).on("touchmove", "body > header", function() { 

        // run the intro if we are at the top and it hasn't been run
        if ($(window).scrollTop() == 0 && !isInitialTouchScroll && !introAnimationRun)
        {
            isInitialTouchScroll = true;
            introAnimation();
        }

    });
})();