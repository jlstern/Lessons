// For Loops + Arrays
// To loop over an array using a for loop, we need to muse the array's length property
var colors = ["red", "orange", "yellow", "green"];
for(var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

// ForEach (relatively new to JavaScript)
var colors = ["red", "orange", "yellow", "green"];
colors.forEach(function(printColor){
	console.log(printColor);
});
// In the above script, "function" is an anonymous function
// To call function later:
colors.forEach(function); // Notice no () after function


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(var i = 0; i < numbers.length; i++){
	if(i % 3 === 0){
		console.log(i)
	}
}