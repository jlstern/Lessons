// Functions can be added to an object
// A method is a function that has been added to an object

var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["Bob", "Tina"],
	add: function(x, y){
		return x + y;
	}
}

// to call add(), we need to type obj.add(x, y)
obj.add(10, 5)	// 15

// Example
function speak(){
	return "WOOF!";
}

function speak(){
	return "MEOW!";
}
// Name/space collission 

// V V  to call either cat or dog speak  V V 

var dogSpace = {};

dogSpace.speak = function(){
	return "WOOF!"
}

var CatSpace = {};

catSpace.speak = function(){
	return "MEOW!"
}

// THIS
var comments = {};
comments.data = ["Good job", "Bye", "Lame!"];

comments.print = function(){
	this.data.forEach(function(el){
		console.log(el);
	})
}

// Keyword "this" is often used to make methods...
// ...work with other data within the same object


