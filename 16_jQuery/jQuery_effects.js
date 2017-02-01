// jQuery effects

.fadeOut() // first argument is time, second adds in a function
// will animate an element from full opacity to 0 opacity, then set display to "none"
// 400 milliseconds is the default length
$("button").on("click", function(){
	$("div").fadeOut(1000, function(){
		console.log("Fade completed");
		$(this).remove(); // after fade-out is complete, it will remove from DOM
	});
});

.fadeIn()

$("button").on("click", function(){
	$("div").fadeIn(1000);
});

.fadeToggle() // like toggle class

$("button").on("click", function(){
	$("div").fadeToggle(1000);
});

.slideDown() .slideUp() .slideToggle()

$("button").on("click", function(){
	$("div").slideDown();
});