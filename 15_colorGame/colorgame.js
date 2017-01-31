// If you guess wrong, the color fades away
// If you guess right, all squares change to the same color and the top changes as well
// Easy and hard settings
// Site is responsive
// "Try again" if you guess incorrectly
// +++++++++++++++++++++++++++++++++++++++++++++++++

// Establish color variables
var colors = [
	"rgb(255, 0, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(255, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 255)",
]

// Number of squares
var numSquares = 6;

// Set squares
var squares = document.querySelectorAll(".square");
var hardSquares = document.querySelectorAll(".hardsquare");

// Set correct answer variable
var answer = 0;

// Function for a random number (0-255)
function randomNumber(){
	var x = Math.floor(Math.random() * 256);
	return x;
}
// Function for a random number (0-5 or 0-2)
function setAnswer(){
	var y = Math.floor(Math.random() * numSquares);
	for(i = 0; i < numSquares; i ++){
		squares[i].classList.remove("theAnswer");
	}
	squares[y].classList.add("theAnswer")
	return y;
}

// Generate random colors
function generateColors(){
	for(var i = 0; i < colors.length; i++){
		colors[i] = "rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")"
	}
}

// Add event listener for new game
document.querySelector("#newgame").addEventListener("click", function(){
	if(numSquares === 3){
		easyGame();
	} else if(numSquares ===6){
		hardGame();
	}
	newGame();
});

// Add event listener for easy
document.querySelector("#easy").addEventListener("click", function(){
	easyGame();
	newGame();
});

// Add event listener for hard
document.querySelector("#hard").addEventListener("click", function(){
	hardGame();
	newGame();
});

// Easy game
function easyGame(){
	numSquares = 3;
	for(var i = 0; i < squares.length; i++){
		squares[i].classList.remove("hidden");
	}
	for(var i = 0; i < hardSquares.length; i++){
		hardSquares[i].classList.add("hidden");
	}
}

// Hard game
function hardGame(){
	numSquares = 6;
	for(var i = 0; i < squares.length; i++){
		squares[i].classList.remove("hidden");
	}
}

// New game function
function newGame(){
	generateColors();
	answer = setAnswer();
	document.querySelector("#displayTitle").textContent = colors[answer];
	for(var i = 0; i < squares.length; i ++) {
		squares[i].style.background = colors[i]
	}
	document.querySelector("#feedback").textContent = "";
	document.querySelector("#header").style.background = "lightblue";
	console.log("answer = " + answer);
}

// Add event listeners to squares
for(var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", function(){
		if(this.classList.contains("theAnswer") === true){
			document.querySelector("#feedback").textContent = "You got it right!";
			document.querySelector("#header").style.background = colors[answer];
			for(var i = 0; i < colors.length; i++){
				squares[i].style.background = colors[answer];
			}
		} else {
			document.querySelector("#feedback").textContent = "Try again!";
			this.classList.add("hidden");
		}
	});
}

// Last bit to kick everything off
newGame();

