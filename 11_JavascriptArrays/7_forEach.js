arr.forEach(someFunction)

var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(color){
	console.log(colors);
});

// Need to pass in both an array and a function
function myForEach(arr, func){
	for(var i = 0; i < arr.length; i++);
	func(arr[i]);
}

myForEach(colors, function(color){console.log(color);
});


// Homemade forEach
Array.prototype.myForEach = function(func){
	for(var i = 0; i < this.length; i++){
	func(this[i]);
	}
}