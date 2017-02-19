$(document).ready(function () {

	// Start Bootstrap carousel
	$('.carousel').carousel({
		interval: 3000
	});
	
	// Easter egg
	$(".title-main").on("click", function() {
		if ($(".title-main").text() == "FREDDIE MERCURY") {
			$(".title-main").text("JUST CODE IT.");
		} else {
			$(".title-main").text("FREDDIE MERCURY");
		}
	});
});
