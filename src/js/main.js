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
	var ViewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (ViewPortWidth < 1200) {
		mySwiper = new Swiper('.swiper-container', mySwiperOptions)
		console.log("init 1");
		console.log(mySwiper);
	};
	$(window).resize(function() {
		var ViewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if (ViewPortWidth < 1200) {
			if (mySwiper == null) {
				mySwiper = new Swiper('.swiper-container', mySwiperOptions);
				console.log(mySwiper);
				console.log("init 2");
			}
		} else {
			if (mySwiper != null) {
				mySwiper.destroy(true, true);
				mySwiper = null;
			}
		}
	});

	//scrollTo

	$("header a").click(function() {
		$.scrollTo($(this).attr("href"), 900);
	});
});