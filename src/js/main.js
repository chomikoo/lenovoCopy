//Discover more 
$(document).ready(function() {

    var mySwiper = null;
    var mySwiperOptions = {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    };
    var ViewPortWidth = Math.max(window.innerWidth || 0);
    if (ViewPortWidth < 990) {
        console.log(document.documentElement.clientWidth);
        mySwiper = new Swiper('.swiper-container', mySwiperOptions)
    };
    $(window).resize(function() {
            var ViewPortWidth = Math.max(docwindow.innerWidth || 0);
            if (ViewPortWidth < 990) {
                if (mySwiper == null) {
                    mySwiper = new Swiper('.swiper-container', mySwiperOptions);
                    console.log(mySwiper);
                    console.log("Init");

                } else {
                    if (mySwiper != null) {
                        mySwiper.destroy(true, true);
                        mySwiper = null;
                    }
                }
            });
    });

// $(window).scroll(function () {
//     if ($(this).width() < 980) {
//         var mySiema = new Siema({
//             loop: true
//         });
//         $(".prev").click(function () {
//             mySiema.prev()
//         });
//         $(".next").click(function () {
//             mySiema.next()
//         });
//     }
//     if($(this).width() >= 980) {
//         location.reload(true);
//     }
// });

//scrollTo

$("header a").click(function() {
    $.scrollTo($(this).attr("href"), 900);
});
});