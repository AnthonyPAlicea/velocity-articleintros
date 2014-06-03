Velocity Article Introductions - v 0.1.0
========================================

<strong><a href="http://www.anthonypalicea.com/velocityarticleintros">See the Demo</a></strong>


These simple (3kb minified) article introductions are powered by jQuery and Velocity.JS. They are inspired by <a href="http://tympanus.net/Development/ArticleIntroEffects/">Tympanus Article Intro Effects</a> and explained in this article <a href="http://tympanus.net/codrops/2014/05/22/inspiration-for-article-intro-effects/">here</a>.

Rather than using CSS3 transitions, we use <a href="http://velocityjs.org">Velocity.JS</a> for animations.

On desktop these introductions happen while you scroll. On mobile/touch devices swipe and then continue scrolling. They have both intro and outro animations.

##Javascript and CSS
The introductions are reusable using the same simple markup and CSS.

Required CSS can be found at <strong>'css/velocityarticleintros.css'</strong>

Javascript can be found at <strong>'Scripts/velocityarticleintros.js'</strong>

<em>See comments in both files for more information.</em>

##HTML Structure
The HTML structure is simply:

```html
<body data-articleintro=''>
    <header>
        <div class='header-img'>
            <img />
        </div>
        <div>
            ...header content...
        </div>
    </header>
    <article>
        <div data-side-width=''>
            ...article content...
        </div>
    </article>
</body>
```

Setup your HTML structure as above, and include the needed CSS.

The 'data-articleintro' attribute on the body is set to decide which intro to show ('push', 'jam', or 'side').

The 'data-side-width' attribute is only used by the 'side' effect and is to be the width of the article content (note this would need to be redundantly set in CSS).

<em>See the index.htm file code comments for more information.</em>