$(document).ready(function () {
    var index = 1;
    showSlides(index);

    var icon1 = document.getElementById("icon_1");
    var icon2 = document.getElementById("icon_2");
    var icon3 = document.getElementById("icon_3");
    var icon4 = document.getElementById("icon_4");

    icon1.addEventListener("click", function () {
        showSlides(1)
    });
    icon2.addEventListener("click", function () {
        showSlides(2)
    });
    icon3.addEventListener("click", function () {
        showSlides(3)
    });
    icon4.addEventListener("click", function () {
        showSlides(4)
    });


    function showSlides(index) {
        var i;
        var slides = document.getElementsByClassName("discover_slider");
        var icons = document.getElementsByClassName("icon");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < icons.length; i++) {
            icons[i].src="./img/icon-" + (i+1) +".png";
        }
        slides[index - 1].style.display = "block";
        
        if (icons[index - 1].src.indexOf("active") == -1) {
                var path = icons[index - 1].src.split(".");
                icons[index - 1].src = path[0] + "active.png";
                console.log(icons[index - 1].src);
            }
    }
});
