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
	if (ViewPortWidth < 990) {
		mySwiper = new Swiper('.swiper-container', mySwiperOptions)
		console.log("init 1");
		console.log(mySwiper);
	};
	$(window).resize(function() {
		var ViewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if (ViewPortWidth < 990) {
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


	// Animate.css

	// HEADER
	$(".hero_content .yoga_logo").addClass("animated fadeInLeft");
	setTimeout(function() {
		$(".hero_content .title").addClass("animated fadeInLeft");
	}, 2000);
	setTimeout(function() {
		$(".hero_content p").addClass("animated fadeInLeft");
	}, 2500);
	setTimeout(function() {
		$(".hero_content .btn").addClass("animated fadeInLeft");
	}, 3000);

	// SPECIFICATION

	//show specification
	// $(".spec-show").on('scrollSpy:enter', function() {
	// 	console.log("list appear", this);
	// 	$(".spec_element").addClass("animated fadeInLeft");
	// });
	// $(".spec-show").scrollSpy();


	
	
$(".spec-show").on("scrollSpy:enter", function() {
	console.log("ev");
	$(".spec_element").each(function(i) {
		delay = (i)*500;
		console.log(i);
		setTimeout(function(li) {
			console.log(li);
			li.addClass("animated fadeInLeft");
		}, delay, $(this));
		console.log(this);
		})
	});
});

$(".spec-show").scrollSpy();