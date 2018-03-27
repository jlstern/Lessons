// DOM Events - Making things interactive
// Event are everywhere: clicking a button, hover over a link, dragging and dropping, pressing enter key

// We select and element and add an event listener
// "Listen for the click on this button"
// "Listen for a hover event"
// "Listen for a keypress event on text input"

element.addEventListener(type, functionToCall());

var button = document.querySelector("button");
button.addEventListener("click", function(){
	console.log("Someone clicked the button!");
});

var list = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", function(){
		this.style.color = "purple;"
	});
}

// We could aslo rewrite it using a named function
var button = document.querySelector("button");
var paragrah = document.querySelector("p");
button.addEventListener("click", changeText);
function changeText(){
	paragrah.textContent = "Someone clicked the button!";
}