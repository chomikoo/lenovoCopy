//Discover more 

$(window).scroll(function () {
    if ($(this).width() < 949) {
        var mySiema = new Siema();
        $(".prev").click(function () {
            mySiema.prev()
        });
        $(".next").click(function () {
            mySiema.next()
        });
    }
});

//scrollTo

 $("header a").click(function () {
        $.scrollTo($(this).attr("href"), 900);
    });

