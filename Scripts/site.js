/*
* Javascript for choosing the intro in the demo.
* This file is NOT needed beyond the needs of the demo.
* See 'velocityarticleintros.js' for the needed Javascript.
*
* Anthony P. Alicea
* http://www.anthonypalicea.com/velocityarticleintros
* http://www.github.com/anthonypalicea/velocity-articleintros
*/

$("#push").click(function(e) {
    e.preventDefault();

    $("#chooseEffect a").css("font-weight", "normal");
    $(this).css("font-weight", "bold");
    $("body").attr('data-articleintro', 'push');
});

$("#jam").click(function(e) {
    e.preventDefault();

    $("#chooseEffect a").css("font-weight", "normal");
    $(this).css("font-weight", "bold");
    $("body").attr('data-articleintro', 'jam');
});

$("#side").click(function(e) {
    e.preventDefault();

    $("#chooseEffect a").css("font-weight", "normal");
    $(this).css("font-weight", "bold");
    $("body").attr('data-articleintro', 'side');
});
// End demo purposes only
