$("li").on("mouseover", function(){
	$(this).animate({
		width: 200,
		marginLeft: "+=60"
	}, "fast");
});
$("li").on("mouseout", function(){
	$(this).animate({
		width: 260,
		marginLeft: "-=60"
	}, "fast");
});