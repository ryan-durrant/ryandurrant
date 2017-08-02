$(document).ready(function() {

    //hi function
    $("h1.fadeIn").fadeIn(3000);

    //my name is function
    $(function() {
        window.setTimeout(fade2, 2000);

        function fade2() {
            $("h1.fadeIn2").css('visibility', 'visible').hide().fadeIn(3000);
        }
    });

    //hamburger menu
    $(".button-collapse").sideNav();

});
