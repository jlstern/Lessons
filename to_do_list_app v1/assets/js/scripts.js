$("li").on("mouseover", function(){
	$("li").animate({
		width: 260,
		marginLeft: 0
	}, "fast");
	$(this).animate({
		width: 200,
		marginLeft: "+=60"
	}, "fast");
});


$("#container").on("mouseout", function(){
	$("li").animate({
		width: 260,
		marginLeft: 0
	}, "fast");
});