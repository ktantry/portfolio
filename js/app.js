$(document).ready(function() {
	$(".the-man").fadeIn(3500);
	$(".the-man").fadeOut(3500);
	$(".the-myth").hide();
	$(".the-legend").hide();
	$(".the-myth").delay(3500).fadeIn(3500);
	$(".the-myth").fadeOut(3500);
	$(".the-legend").delay(9000).fadeIn(3500);
	$(".slide-down").hide();

	var clickCount = 0;
	$('h1').mousedown(function() {
		if (clickCount % 2 == 0) {
			$('.slide-down').slideDown(1000);
			clickCount++;
			$('h1').text('Click to Hide My Projects.');
			console.log(clickCount);
		}
		else {
			$('.slide-down').slideUp(1000);
			$('h1').text('Click to View Some of My Projects.');
			clickCount++;
			console.log(clickCount);
		}
	})
});

