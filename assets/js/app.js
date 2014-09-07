$(document).on("click", "a.viewProject, a.closeProject", function () {

    // get the href attribute
    var newUrl = $(this).attr("href");

    // veryfy if the new url exists or is a hash
    if (!newUrl || newUrl[0] === "#") {
        // set that hash
        location.hash = newUrl;
        return;
    }

    // now, fadeout the html (whole page)
    $("html").fadeOut(function () {
        // when the animation is complete, set the new location
        location = newUrl;
    });

    // prevent the default browser behavior.
    return false;
});


$(document).ready(function () {
    var headerHeight = $(".project header").height();

    $(window).scroll(function() {    
        var scroll = $(this).scrollTop();

        if (scroll >= headerHeight) {
            $(".closeProject").removeClass("light").addClass("dark");
        } else {
            $(".closeProject").removeClass("dark").addClass("light");
        }
    });
});