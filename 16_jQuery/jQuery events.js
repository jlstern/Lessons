click()
// add a click listenter to an element or series of elements
$(".submit").click(function(){
	console.log("Another click");
});

$("button").click(function(){
	$(this).css("background", "pink") // must use jQuery version of "this"
})

/////////

keypress()
// add a keypress listener to element(s)
// keypress() will return end result character, not key code value
$(".target").keypress(function(event){
	if(event.which === 13){
		alert("You hit enter");
	}
});

// event doesn't need to be called event, it's entirely up to user
// often abbreviated to 'e'

/////////

on()
// most common method; lets you specify the type of event to listen for
$("h1").on("click", function(){
	$(this).css("color", "purple");
});

$("h1").on("keypress", function(){
	$(this).css("color", "purple");
});
//click() only adds listeners for existing elements
// on() will add listeners for all POTENTIONAL FUTURE elements