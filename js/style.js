$(function () {
    $(".nav>li>a").click(function () {
        /*$(this).next().slideToggle(300)
        .parent()
        .siblings()
        .children(".sub").slideup(300);*/

        $(this).next().slideToggle(300);
        $(this).parent().siblings().children(".sub").slideUp(300);

        // $(".nav>li>a").removeClass("active");
        $(this).toggleClass("active");
        $(this).parent().siblings().children().removeClass("active");
    });

    $(".bestBox>ul").bxSlider({
        maxSlides: 4,
        minSlides: 2,
        slideWidth: 220,
        slideMargin: 60,
        moveSlides: 1,
        pagerSelector: "#btn"
    });

    var button = false;
    $(".ham").on("click", function () {
        if (button == false) {
            // console.log("클릭")
            $(".nav").stop().animate({
                right: 0
            }, 500)
            button = true;
        }
        else {
            $(".nav").stop().animate({
                right: -100 + "%"
            }, 500)
            button = false;
        }
    });
    $(".nav>li ").mouseenter(function () {
        $(".bg").slideDown(0);
    }).mouseleave(function () {
        $(".bg").slideUp(0);
    });
})