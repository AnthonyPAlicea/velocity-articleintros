Velocity Article Introductions - v 0.1.0
========================================

#<a href="http://www.anthonypalicea.com/velocityarticleintros">See the Demo</a>

These simple 7kb article introductions are powered by jQuery and Velocity.JS. They are inspired by <a href="http://tympanus.net/Development/ArticleIntroEffects/">Tympanus Article Intro Effects</a> and explained in this article <a href="http://tympanus.net/codrops/2014/05/22/inspiration-for-article-intro-effects/">here</a>.

Rather than using CSS3 transitions, we use <a href="http://velocityjs.org">Velocity.JS</a> for animations.

On desktop these introductions happen while you scroll. On mobile/touch devices swipe and then continue scrolling. They have both intro and outro animations.

##Required Structure
The introductions are reusable using the same simple markup and CSS.

Required CSS can be found at 'css/velocityarticleintros.css'
Javascript can be found at 'Scripts/velocityarticleintros.js'

The HTML structure is simply:

<pre><code>
<body data-articleintro=''>
    <header>
        <div class="header-img">
            <img />
        </div>
        <div>
            ...header content...
        </div>
    </header>
    <article>
        <div data-side-width="90%">
            ...article content...
        </div>
    </article>
</body>
</code></pre>

The 'data-articleintro' attribute on the body is set to decide which intro to show ('push', 'jam', or 'side').

The 'data-side-width' attribute is only used by the 'side' effect and is to be the width of the article content (note this would need to be redundantly set in CSS).