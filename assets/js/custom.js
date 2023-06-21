var oldtitle = document.title;
var newtitle = "";

var interval;

window.addEventListener("blur", function () {
    interval = setInterval(updatetitle, 1000);
});

function updatetitle() {
    if (document.title == oldtitle) {
        //document.title = newtitle;
    } else {
        //document.title = oldtitle;
    }
}

window.addEventListener("focus", function () {
    clearInterval(interval);
    $("title").text(oldtitle);
});


/* Mobile Menu */

$(".mega-operations, .mobile-close-button").click(function () {
    if ($(".mobile-menu-operations").css("display") == "none") {
        $(".mega-menu-ic").hide();
        $(".mega-menu").show();

        gsap.to(".mobile-menu-operations .mega-menu-wrapper", {
            duration: 0,
            y: 0,
            opacity: 1
        });
        gsap.from(".mobile-menu-operations .mega-menu-wrapper", {
            duration: 0.2,
            ease: Expo.easeOut,
            y: 100,
            opacity: 0,
            color: "#008000"
        });

        gsap.to(".mobile-menu-operations .mega-menu-head li", {
            duration: 0,
            y: 0,
            opacity: 1
        });
        gsap.from(".mobile-menu-operations .mega-menu-head li", {
            duration: 0.2,
            y: 100,
            opacity: 0,
            stagger: 0.05
        });

        $(".mobile-menu-operations .mobil-sub-menu").first().addClass("active");
    } else {
        $(".mobile-menu-operations").hide();

        $(".mobile-menu-operations .mobil-sub-menu").each(function () {
            $(this).removeClass("active");
        });
    }
});

$(".mobile-close-button").click(function () {
    $(".mobile-menu-operations").hide();

    $(".mobile-menu-operations .mobil-sub-menu").each(function () {
        $(this).removeClass("active");
    });
});

$(".mobile-menu-main-item").click(function () {
    $dataid = $(this).attr("data-id");

    $(".mobile-menu-operations .mobil-sub-menu").each(function () {
        $(this).removeClass("active");

        if ($(this).attr("data-id") == $dataid) {
            $(this).addClass("active");
            gsap.to($(".mobile-menu-operations .mega-menu-sub .active li"), {
                duration: 0,
                y: 0,
                opacity: 1
            });
            gsap.from(".mobile-menu-operations .mega-menu-sub .active li", {
                duration: 0.2,
                y: 100,
                opacity: 0,
                stagger: 0.05
            });
        }
    });
});

$(".mega-menu-menu, .mobile-menu-close").click(function () {
    if ($(".mega-menu-ic").css("display") == "none") {
        $(".mega-menu").hide();
        $(".mega-menu-ic").show();

        var dh = $("html").height();
        var mh = $(".spctq").height();
        $(".mega-menu-ic .mega-menu-sub").css("padding-top", (dh - mh - 65) / 2 + "px");

        gsap.to(".mega-menu-ic li", {
            duration: 0,
            y: 0,
            opacity: 1
        });
        gsap.from(".mega-menu-ic li", {
            duration: 0.2,
            y: 100,
            opacity: 0,
            stagger: 0.05
        });
    } else {
        $(".mega-menu-ic").hide();
    }
});

$(" .mobile-menu-close").click(function () {
    $(".mega-menu-ic").hide();
});


/* Top Language Bar */

document.addEventListener("DOMContentLoaded", function (event) {
    window.addEventListener(
        "load",
        function () {
            $(".lang-bar").mouseover(function () {
                gsap.to(".lang-bar", {
                    duration: 0.5,
                    y: 100,
                    opacity: 1
                });

                $(".d-lang").each(function () {
                    $(this).css("opacity", "1");
                });
            });
            $(".lang-bar").mouseleave(function () {
                gsap.to(".lang-bar", {
                    duration: 0.5,
                    y: 0,
                    opacity: 1
                });

                $(".d-lang").each(function () {
                    $(this).css("opacity", "0");
                });
            });
        },
        false
    );
});


/* Transfer File */

$(document).ready(function () {
    if ($(window).width() < 992) {

        $(".swiper-transfer1").flickity({
            cellAlign: "left",
            autoPlay: false,
            imagesLoaded: true,

        });

        var flkty = new Flickity(".swiper-transfer1");
        flkty.on("change", function (index) {
            if ($("#transfer .transfer-slider1 .step-no div").hasClass("active")) {
                $("#transfer .transfer-slider1 .step-no div").removeClass("active");
                $("#transfer .transfer-slider1 .step-no").find("div").eq(index).addClass("active");
            } else {
                $("#transfer .transfer-slider1 .step-no").find("div").eq(index).addClass("active");
            }

            if ($("#transfer .transfer-slider1 .content div").hasClass("active")) {
                $("#transfer .transfer-slider1 .content div").removeClass("active");
                $("#transfer .transfer-slider1 .content").find("div").eq(index).addClass("active");
            } else {
                $("#transfer .transfer-slider1 .content").find("div").eq(index).addClass("active");
            }
            if ($(".stepsbar li").hasClass("active")) {
                if (".stepsbar li") $(".stepsbar li").removeClass("active");
                $(".stepsbar").find("li").eq(index).addClass("active");
            } else {
                $(".stepsbar").find("li").eq(index).addClass("active");
            }
            gsap.to("#transfer .transfer-slider1 .content h3", {
                duration: 0,
                y: 0,
                opacity: 1
            });
            gsap.from("#transfer .transfer-slider1 .content h3", {
                duration: 0.2,
                y: 100,
                opacity: 0,
                stagger: 0.05
            });
            gsap.to("#transfer .transfer-slider1 .content p", {
                duration: 0,
                y: 0,
                opacity: 1
            });
            gsap.from("#transfer .transfer-slider1 .content p", {
                duration: 0.3,
                y: 100,
                opacity: 0,
                stagger: 0.05
            });

            gsap.to("#transfer .transfer-slider1 .step-no div", {
                duration: 0,
                x: 0,
                opacity: 1
            });
            gsap.from("#transfer .transfer-slider1 .step-no div", {
                duration: 0.3,
                x: 100,
                opacity: 0,
                stagger: 0.05
            });
        });

    } else {

        $(".swiper-transfer1").flickity({
            cellAlign: "left",
            autoPlay: false,
            imagesLoaded: true


        });

        $(".swiper-transfer2").flickity({
            draggable: false,
            asNavFor: ".swiper-transfer1",
            cellAlign: "left",
            imagesLoaded: true
        });


    }
});


/* Operation File */

$(".product").hover(
    function () {
        $(this).find(".product__bg").addClass("active");
        $(this).find(".product__subtitle").addClass("active");
    },
    function () {
        $(this).find(".product__bg").removeClass("active");
        $(this).find(".product__subtitle").removeClass("active");
    }
);


/* Testimionals File */

if ($(window).width() < 992) {
    $(".testimonials-carousel1").flickity({
        autoPlay: false,
        wrapAround: true,
        prevNextButtons: true,
        imagesLoaded: true


    });

    var tst2 = new Flickity(".testimonials-carousel1");

    tst2.on("change", function (event) {
        $(".testimonials-info-carousel").find(".active").removeClass("active");
        $(".testimonials-info-carousel").find(".tst-item").eq(event).addClass("active");

        gsap.to($(".tst-item .test-hash"), {
            duration: 0,
            ease: "power4.out",
            y: 0,
            opacity: 1
        });
        gsap.from($(".tst-item .test-hash"), {
            duration: 1,
            ease: "power4.out",
            y: -50,
            opacity: 0
        });

        gsap.to($(".tst-item .test-title"), {
            duration: 0,
            ease: "power4.out",
            y: 0,
            opacity: 1
        });
        gsap.from($(".tst-item .test-title"), {
            duration: 1,
            ease: "power4.out",
            y: 50,
            opacity: 0
        });

        gsap.to($(".tst-item .test-flag"), {
            duration: 0,
            ease: "power4.out",
            x: 0,
            opacity: 1
        });
        gsap.from($(".tst-item .test-flag"), {
            duration: 1,
            ease: "power4.out",
            x: -50,
            opacity: 0
        });

        gsap.to($(".tst-item .test-name"), {
            duration: 0,
            ease: "power4.out",
            x: 0,
            opacity: 1
        });
        gsap.from($(".tst-item .test-name"), {
            duration: 1,
            ease: "power4.out",
            x: 50,
            opacity: 0
        });

        gsap.to(".tst-item p", {
            duration: 0,
            ease: "power4.out",
            y: 0,
            opacity: 1
        });
        gsap.from(".tst-item p", {
            duration: 1,
            ease: "power4.out",
            y: 40,
            opacity: 0
        });
    });
} else {
    $(".testimonials-carousel1").flickity({
        autoPlay: false,
        wrapAround: false,
        prevNextButtons: true,
        fade: true,
        imagesLoaded: true
    });

    $(".testimonials-carousel2").flickity({
        draggable: false,
        prevNextButtons: false,
        asNavFor: ".testimonials-carousel1",
        imagesLoaded: true

    });

    var tst1 = new Flickity(".testimonials-carousel1");
    var tst2 = new Flickity(".testimonials-carousel2");

    tst2.on("change", function (event) {
        $(".testimonials-info-carousel").find(".active").removeClass("active");
        $(".testimonials-info-carousel").find(".tst-item").eq(event).addClass("active");

        gsap.to($(".tst-item .test-hash"), {
            duration: 0,
            ease: "power4.out",
            y: 0,
            opacity: 1
        });
        gsap.from($(".tst-item .test-hash"), {
            duration: 1,
            ease: "power4.out",
            y: -50,
            opacity: 0
        });

        gsap.to($(".tst-item .test-title"), {
            duration: 0,
            ease: "power4.out",
            y: 0,
            opacity: 1
        });
        gsap.from($(".tst-item .test-title"), {
            duration: 1,
            ease: "power4.out",
            y: 50,
            opacity: 0
        });

        gsap.to($(".tst-item .test-flag"), {
            duration: 0,
            ease: "power4.out",
            x: 0,
            opacity: 1
        });
        gsap.from($(".tst-item .test-flag"), {
            duration: 1,
            ease: "power4.out",
            x: -50,
            opacity: 0
        });

        gsap.to($(".tst-item .test-name"), {
            duration: 0,
            ease: "power4.out",
            x: 0,
            opacity: 1
        });
        gsap.from($(".tst-item .test-name"), {
            duration: 1,
            ease: "power4.out",
            x: 50,
            opacity: 0
        });

        gsap.to(".tst-item p", {
            duration: 0,
            ease: "power4.out",
            y: 0,
            opacity: 1
        });
        gsap.from(".tst-item p", {
            duration: 1,
            ease: "power4.out",
            y: 40,
            opacity: 0
        });
    });
}

/* Before After */

$(document).ready(function () {
    if ($(window).width() < 992) {
        $(".swiper-before").flickity({
            cellAlign: "left",
            contain: true,
            prevNextButtons: true,
            pageDots: false,
            wrapAround: true,
            imagesLoaded: true
        });

        $(".swiper-before-small1").flickity({
            draggable: false,
            asNavFor: ".swiper-before",
            cellAlign: "left",
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true,
            imagesLoaded: true
        });
        $(".swiper-before-small2").flickity({
            draggable: false,
            asNavFor: ".swiper-before",
            cellAlign: "left",
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true,
            imagesLoaded: true
        });

        var flkty3 = new Flickity(".swiper-before");
        flkty3.on(
            "change",
            function (index) {
                if ($("#before-after .information div").hasClass("active")) {
                    $("#before-after .information div").removeClass("active");
                    $("#before-after .information").find("div").eq(index).addClass("active");
                } else {
                    $("#before-after .information").find("div").eq(index).addClass("active");
                }

                gsap.to("#before-after .information .active .ba-hash", {
                    duration: 0,
                    ease: "power4.out",
                    y: 0,
                    opacity: 1
                });
                gsap.from("#before-after .information .active .ba-hash", {
                    duration: 0.5,
                    ease: "power4.out",
                    y: 100,
                    opacity: 0,
                    delay: 0.1
                });

                gsap.to("#before-after .information .active .ba-title", {
                    duration: 0,
                    ease: "power4.out",
                    y: 0,
                    opacity: 1
                });
                gsap.from("#before-after .information .active .ba-title", {
                    duration: 0.5,
                    ease: "power4.out",
                    y: 100,
                    opacity: 0,
                    delay: 0.2
                });

                gsap.to("#before-after .information .active li", {
                    duration: 0,
                    ease: "power4.out",
                    y: 0,
                    opacity: 1
                });
                gsap.from("#before-after .information .active li", {
                    duration: 0.5,
                    ease: "power4.out",
                    y: 100,
                    opacity: 0,
                    delay: 0.3,
                    stagger: 0.05
                });
            },
            false
        );
    } else {
        $(".swiper-before").flickity({
            cellAlign: "left",
            contain: true,
            prevNextButtons: true,
            pageDots: false,
            wrapAround: true,
            imagesLoaded: true

        });
        $(".swiper-after").flickity({
            draggable: false,
            asNavFor: ".swiper-before",
            cellAlign: "left",
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true,
            imagesLoaded: true

        });
        $(".swiper-after-small1").flickity({
            draggable: false,
            asNavFor: ".swiper-before",
            cellAlign: "left",
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true,
            imagesLoaded: true
        });
        $(".swiper-after-small2").flickity({
            draggable: false,
            asNavFor: ".swiper-before",
            cellAlign: "left",
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true,
            imagesLoaded: true
        });
        $(".swiper-before-small1").flickity({
            draggable: false,
            asNavFor: ".swiper-before",
            cellAlign: "left",
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true,
            imagesLoaded: true
        });
        $(".swiper-before-small2").flickity({
            draggable: false,
            asNavFor: ".swiper-before",
            cellAlign: "left",
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true,
            imagesLoaded: true
        });

        $(".ba-filter-btn").click(function () {
            $(".ba-filter-btn").removeClass("active");
            $(this).addClass("active");

            var item = $(".swiper-before .carousel-cell");

            gsap.to(item.first(), {
                duration: 0,
                ease: "power4.out",
                y: 0,
                opacity: 1
            });
            gsap.from(item.first(), {
                duration: 1,
                ease: "power4.out",
                y: -100,
                opacity: 0.5
            });

            gsap.to(item.first().next(), {
                duration: 0,
                ease: "power4.out",
                y: 0,
                opacity: 1
            });
            gsap.from(item.first().next(), {
                duration: 1,
                ease: "power4.out",
                y: -100,
                opacity: 0.5
            });

            item = $(".swiper-before-small1 .carousel-cell");

            gsap.to(item.first(), {
                duration: 0,
                ease: "power4.out",
                y: 0,
                opacity: 1
            });
            gsap.from(item.first(), {
                duration: 1,
                ease: "power4.out",
                y: 100,
                opacity: 0.5
            });

            gsap.to(item.first().next(), {
                duration: 0,
                ease: "power4.out",
                y: 0,
                opacity: 1
            });
            gsap.from(item.first().next(), {
                duration: 1,
                ease: "power4.out",
                y: 100,
                opacity: 0.5
            });

            item = $(".swiper-before-small2 .carousel-cell");

            gsap.to(item.first(), {
                duration: 0,
                ease: "power4.out",
                y: 0,
                opacity: 1
            });
            gsap.from(item.first(), {
                duration: 1,
                ease: "power4.out",
                y: 100,
                opacity: 0.5
            });

            gsap.to(item.first().next(), {
                duration: 0,
                ease: "power4.out",
                y: 0,
                opacity: 1
            });
            gsap.from(item.first().next(), {
                duration: 1,
                ease: "power4.out",
                y: 100,
                opacity: 0.5
            });

            item = $(".swiper-after .carousel-cell");

            gsap.to(item.first(), {
                duration: 0,
                ease: "power4.out",
                y: 0,
                opacity: 1
            });
            gsap.from(item.first(), {
                duration: 1,
                ease: "power4.out",
                y: -100,
                opacity: 0.5
            });

            gsap.to(item.first().next(), {
                duration: 0,
                ease: "power4.out",
                y: 0,
                opacity: 1
            });
            gsap.from(item.first().next(), {
                duration: 1,
                ease: "power4.out",
                y: -100,
                opacity: 0.5
            });

            item = $(".swiper-after-small1 .carousel-cell");

            gsap.to(item.first(), {
                duration: 0,
                ease: "power4.out",
                y: 0,
                opacity: 1
            });
            gsap.from(item.first(), {
                duration: 1,
                ease: "power4.out",
                y: 100,
                opacity: 0.5
            });

            gsap.to(item.first().next(), {
                duration: 0,
                ease: "power4.out",
                y: 0,
                opacity: 1
            });
            gsap.from(item.first().next(), {
                duration: 1,
                ease: "power4.out",
                y: 100,
                opacity: 0.5
            });

            item = $(".swiper-after-small2 .carousel-cell");

            gsap.to(item.first(), {
                duration: 0,
                ease: "power4.out",
                y: 0,
                opacity: 1
            });
            gsap.from(item.first(), {
                duration: 1,
                ease: "power4.out",
                y: 100,
                opacity: 0.5
            });

            gsap.to(item.first().next(), {
                duration: 0,
                ease: "power4.out",
                y: 0,
                opacity: 1
            });
            gsap.from(item.first().next(), {
                duration: 1,
                ease: "power4.out",
                y: 100,
                opacity: 0.5
            });

            item = $(".ba-f-info");

            gsap.to(item.first(), {
                duration: 0,
                ease: "power4.out",
                y: 0,
                opacity: 1
            });
            gsap.from(item.first(), {
                duration: 1,
                ease: "power4.out",
                y: 50,
                opacity: 0.5
            });

            gsap.to(item.first().next(), {
                duration: 0,
                ease: "power4.out",
                y: 0,
                opacity: 1
            });
            gsap.from(item.first().next(), {
                duration: 1,
                ease: "power4.out",
                y: 50,
                opacity: 0.5
            });
        });

        var flkty3 = new Flickity(".swiper-before");
        flkty3.on(
            "change",
            function (index) {
                if ($("#before-after .information div").hasClass("active")) {
                    $("#before-after .information div").removeClass("active");
                    $("#before-after .information").find("div").eq(index).addClass("active");
                } else {
                    $("#before-after .information").find("div").eq(index).addClass("active");
                }

                gsap.to("#before-after .information .active .ba-hash", {
                    duration: 0,
                    ease: "power4.out",
                    y: 0,
                    opacity: 1
                });
                gsap.from("#before-after .information .active .ba-hash", {
                    duration: 0.5,
                    ease: "power4.out",
                    y: 100,
                    opacity: 0,
                    delay: 0.1
                });

                gsap.to("#before-after .information .active .ba-title", {
                    duration: 0,
                    ease: "power4.out",
                    y: 0,
                    opacity: 1
                });
                gsap.from("#before-after .information .active .ba-title", {
                    duration: 0.5,
                    ease: "power4.out",
                    y: 100,
                    opacity: 0,
                    delay: 0.2
                });

                gsap.to("#before-after .information .active li", {
                    duration: 0,
                    ease: "power4.out",
                    y: 0,
                    opacity: 1
                });
                gsap.from("#before-after .information .active li", {
                    duration: 0.5,
                    ease: "power4.out",
                    y: 100,
                    opacity: 0,
                    delay: 0.3,
                    stagger: 0.05
                });
            },
            false
        );
    }
});

/* About US */


$("#mobile-media-container").flickity({
    cellAlign: "left",
    contain: true,
    prevNextButtons: false,
    groupCells: 1,
    wrapAround: true,
    pageDots: false,
    imagesLoaded: true

});
var mobilemediacontainer = new Flickity("#mobile-media-container");


$(document).ready(function () {
    $(".logo-swip2").click(function () {
        var lg2 = new Flickity(".logo-swip2");
        lg2.next();
    });
});


/* Gsap Gradient */

gsap.registerPlugin({
    name: "gradient",
    init(target, value) {
        let forceDeg = (value) => (~value.indexOf("deg") ? value : (value = value.split("(")) && value.shift() + "(135deg, " + value.join("("));
        this.add(target.style, "backgroundImage", forceDeg(window.getComputedStyle(target).backgroundImage + ""), forceDeg(value));
    },
});


/* Product Hover Animation */

$(".product").hover(function () {
        $(this).find('.product__bg').addClass('active');
        $(this).find('.product__subtitle').addClass('active');
    },
    function () {
        $(this).find('.product__bg').removeClass('active');
        $(this).find('.product__subtitle').removeClass('active');
    });

/* Hero Slider */
document.addEventListener("DOMContentLoaded", function (event) {
    window.addEventListener("load", function () {
    }, false);
    if ($(window).width() < 992) {

        $('.swiper-hero').flickity({
            cellAlign: 'center',
            contain: true,
            prevNextButtons: true,
            fade: true,
            imagesLoaded: true

        });

    } else {

        $('.swiper-hero').flickity({
            cellAlign: 'center',
            contain: true,
            prevNextButtons: true,
            fade: true,
            imagesLoaded: true,
            pageDots: false,
        });

    }
    gsap.registerPlugin({
        name: "gradient",
        init(target, value) {
            let forceDeg = value => ~value.indexOf("deg") ? value : (value = value.split("(")) && value.shift() + "(135deg, " + value.join("(");
            this.add(target.style, "backgroundImage", forceDeg(window.getComputedStyle(target).backgroundImage + ""), forceDeg(value));
        }
    })
    var flkty2 = new Flickity('.swiper-hero');
    flkty2.on('change', function (index) {

        if ($('#hero .hero-item').hasClass('active')) {
            $('#hero .hero-item').removeClass('active');
            $('#hero').find(".hero-item").eq(index).addClass("active");
        } else {
            $('#hero').find(".hero-item").eq(index).addClass("active");
        }
        if (flkty2.selectedIndex == 0) {
            console.log(flkty2.selectedIndex);
            gsap.from("#hero .hero-item .h1-bar", {
                opacity: 0,
                transformOrigin: '0 0',
                scaleX: 0,
                duration: .5,
                stagger: .1
            });
            gsap.from("#hero .hero-item .hero-2", {opacity: 0, x: 220, duration: 1});
            gsap.from("#hero .hero-item .hero-1 h6", {opacity: 0, y: 50, duration: .5});
            gsap.from("#hero .hero-item .hero-1 h1", {opacity: 0, y: 50, duration: .5, stagger: .1});
            gsap.from("#hero .hero-item .hero-1 p", {opacity: 0, y: 50, duration: .5, stagger: .1});
            gsap.to('#hero .hero-container', {
                gradient: "linear-gradient(135deg, rgba(44,44,94,1) 0%, rgba(44,44,94,1) 80%, rgba(44,44,94,1) 100%)",
                duration: 2
            });

            gsap.to('#hero .hero-container .hero-box', {
                gradient: "linear-gradient(135deg, rgba(44,44,94,1) 0%, rgba(44,44,94,1) 80%, rgba(44,44,94,1) 100%)",
                duration: 2
            });
            gsap.to('nav .lang-bar-inline', {
                gradient: "linear-gradient(135deg,rgba(44,44,94,1) 0%,rgba(44,44,94,1) 80%, rgba(44,44,94,1) 100%)",
                duration: 2
            });
            gsap.to('nav .contact-bar', {
                gradient: "linear-gradient(0deg, rgba(44,44,94,1) 34%, rgba(44,44,94,1) 100%)",
                duration: 2
            });
            gsap.to('nav .contact-bar', {
                filter: "drop-shadow(3mm -3mm 6mm rgb(128, 255, 0,.2))",
                duration: 2
            });
            gsap.to('nav .contact-bar-inline', {
                gradient: "linear-gradient(0deg, rgb(0 70 75) 34%, rgb(0 74 79) 100%)",
                duration: 2
            });

        }
        if (flkty2.selectedIndex == 1) {
            console.log(flkty2.selectedIndex);
            gsap.from("#hero .hero-item .h1-bar", {
                opacity: 0,
                transformOrigin: '0 0',
                scaleX: 1,
                duration: .5,
                stagger: .1
            });
            gsap.from("#hero .hero-item .hero-2-r", {opacity: 0, x: -220, duration: 1});
            gsap.from("#hero .hero-item .hero-1-r h6", {opacity: 0, y: 50, duration: .5});
            gsap.from("#hero .hero-item .hero-1-r h1", {opacity: 0, y: 50, duration: .5, stagger: .1});
            gsap.from("#hero .hero-item .hero-1-r p", {opacity: 0, y: 50, duration: .5, stagger: .1});
            gsap.to('#hero .hero-container', {
                gradient: "linear-gradient(135deg, rgba(44,44,94,1) 0%, rgba(44,44,94,1) 80%, rgba(44,44,94,1) 100%)",
                duration: 2
            });
            gsap.to('#hero .hero-container .hero-box', {
                gradient: "linear-gradient(135deg, rgba(44,44,94,1) 0%, rgba(44,44,94,1) 80%, rgba(44,44,94,1) 100%)",
                duration: 2
            });
            gsap.to('nav .lang-bar-inline', {
                gradient: "linear-gradient(135deg,rgba(44,44,94,1) 0%, rgba(44,44,94,1) 80%, rgba(44,44,94,1) 100%)",
                duration: 2
            });
            gsap.to('nav .contact-bar', {
                gradient: "linear-gradient(0deg, rgba(44,44,94,1) 34%, rgba(44,44,94,1) 100%)",
                duration: 2
            });
            gsap.to('nav .contact-bar', {
                filter: "drop-shadow(3mm -3mm 6mm rgba(44,44,94,1))",
                duration: 2
            });
            gsap.to('nav .contact-bar-inline', {
                gradient: "linear-gradient(135deg, rgba(44,44,94,1) 0%, rgba(44,44,94,1) 80%, rgba(44,44,94,1) 100%)",
                duration: 2
            });

        }
    }, false)
});

$('.story').children().first().append('<div class="astory"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40"></circle></svg></div>');


$('#op-tabselect').change(function () {
    var index = this.selectedIndex;

    $(".op-tabs").each(function () {

        $(this).removeClass("show");
        $(this).removeClass("active");

    });

    $(".op-tabs").eq(index).addClass("show");
    $(".op-tabs").eq(index).addClass("active");


    gsap.to($(".op-tabs").eq(index), {
        duration: 0,
        x: 0,
        opacity: 1
    });
    gsap.from($(".op-tabs").eq(index), {
        duration: 0.4,
        x: -100,
        opacity: 0,
        stagger: 0.05
    });

});

$(".faqbutton").each(function () {
    $(this).parent().find(".faq-content").hide();
});

$(".faqbutton").click(function () {
    var actb = 0;

    $(".faq-ttactive").each(function () {
        actb++;
    });

    if (actb == 0) {
        $(this).prev().find(".faq-content").slideDown(200);
        $(this).parent().find(".faqbtnin").html("-");
        $(this).prev().addClass("faq-ttactive");
        $(this).addClass("faqbuttonactive");
    } else {
        if ($(this).prev().hasClass("faq-ttactive") == true) {
            $(this).parent().find(".faq-content").slideUp(200);

            $(this).find(".faqbtnin").html("+");
            $(this).removeClass("faqbuttonactive");

            $(this).prev().removeClass("faq-ttactive");
        } else {
            $(".faq-item").each(function () {
                $(document).find(".faq-content").slideUp(200);

                $(document).find(".faqbtnin").html("+");

                $(document).find(".faq-tt").removeClass("faq-ttactive");
                $(document).find(".faqbutton").removeClass("faqbuttonactive");
            });

            $(this).prev().find(".faq-content").slideDown(200);
            $(this).parent().find(".faqbtnin").html("-");
            $(this).prev().addClass("faq-ttactive");
            $(this).addClass("faqbuttonactive");
        }
    }
});

$(".faq-tt").click(function () {
    var actb = 0;

    $(".faq-ttactive").each(function () {
        actb++;
    });

    if (actb == 0) {
        $(this).find(".faq-content").slideDown(200);
        $(this).next().parent().find(".faqbtnin").html("-");
        $(this).addClass("faq-ttactive");
        $(this).next().addClass("faqbuttonactive");
    } else {
        if ($(this).closest(".faq-tt").hasClass("faq-ttactive") == true) {
        } else {
            $(".faq-item").each(function () {
                $(document).find(".faq-content").slideUp(200);

                $(document).find(".faqbtnin").html("+");

                $(document).find(".faq-tt").removeClass("faq-ttactive");
                $(document).find(".faqbutton").removeClass("faqbuttonactive");
            });

            $(this).find(".faq-content").slideDown(200);
            $(this).next().parent().find(".faqbtnin").html("-");
            $(this).addClass("faq-ttactive");
            $(this).next().addClass("faqbuttonactive");
        }
    }
});

$(document).ready(function () {


    var durationin = 0.5;
    var durationout = 0;
    var delayduration = 0;


    var haircarousel = $('.hair-trans-carousel').flickity({});


});


$(".blog-select").change(function () {
    var category = $(this).find(":selected").attr("data-category");
    if (category == "all") {
        $(".blog-list ul li").show();
    } else {
        var $current = $('.blog-list ul li[data-cat="' + category + '"]').show();
        $(".blog-list ul li").not($current).hide();
    }
});


$('#ot-tabselect').change(function () {
    var index = this.selectedIndex;
    index++;
    $(".ot-tabs").each(function () {

        $(this).removeClass("show");
        $(this).removeClass("active");

    });

    $("#ot-tab-" + index).addClass("show");
    $("#ot-tab-" + index).addClass("active");


    gsap.to($("#tab-" + index), {
        duration: 0,
        x: 0,
        opacity: 1
    });
    gsap.from($("#tab-" + index), {
        duration: 0.4,
        x: 100,
        opacity: 0,
        stagger: 0.05
    });


});

$(".reqclass").hide();

$(".job-item").click(function () {


    if ($(this).hasClass("active")) {

    } else {
        $(".career-list").find(".active").each(function () {


            $(this).children().find(".reqclass").slideUp();
            $(this).removeClass("active");

        });
    }

    $(this).addClass("active");
    $(this).children().find(".reqlist>li").show();
    $(this).children().find(".reqclass").slideDown();

});


$(".filter-a").click(function () {


    $(".job-item").each(function () {


        $(this).removeClass("active");


    });


    var filtercategory = $(this).attr("data-category");

    if (filtercategory == "All") {
        $(".job-item").each(function () {


            $(this).show();


        });
    } else {

        $(".job-item").each(function () {

            if ($(this).attr("data-category") == filtercategory) {
                $(this).show();
            } else {
                $(this).hide();
            }

        });

    }

    $(".reqclass").hide();


});

jQuery(document).on("click", ".career-filter ul li a", function () {
    var category = $(this).attr("data-category");
    if (category == "all") {
        $(".career-list ul li").show();
    } else {
        var $current = $('.career-list ul li[data-cat="' + category + '"]').show();
        $(".career-list ul li").not($current).hide();
    }
});

$(".job-select").change(function () {
    var category = $(this).find(":selected").attr("data-category");
    if (category == "all") {
        $(".career-list ul li").show();
    } else {
        var $current = $('.career-list ul li[data-cat="' + category + '"]').show();
        $(".career-list ul li").not($current).hide();
    }
});

$(".qty").keyup(function () {
    $('.update_cart_button').removeAttr("disabled")


});



$(document).ready(function () {


    var app = document.getElementById('text-writing');
    var txt = $('#text-writing').text();
    var txtExtra = $('#text-writing').data('extra');
    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.typeString(txt)
        .pauseFor(500)
        .deleteAll()
        .pauseFor(500)
        .typeString(txtExtra)
        .pauseFor(500)
        .start();


    /*var Sliderx = document.getElementById('hero-box');
    var navbarx = document.getElementById('containerx');

    style = window.getComputedStyle(Sliderx);
    wdt = style.getPropertyValue('width');
    navbarx.style.width = wdt;*/

});


function validateContact(form) {

    var valid = true;
    var resultsDiv = $(form).find('.results');

    $(resultsDiv).html('');


    if (!$(form).find('input[name ="name"]').val()) {
        $(form).find('input[name ="name"]').toggleClass('shaker');
        valid = false;
    }
    if (!$(form).find('input[name ="phone"]').val()) {
        $(form).find('input[name ="phone"]').toggleClass('shaker');
        valid = false;
        //$("#subject").css('background-color','#FFFFDF');
    }
    if (!$(form).find('textarea[name ="message"]').val()) {
        $(form).find('textarea[name ="message"]').toggleClass('shaker');
        valid = false;
    }
    return valid;
}

