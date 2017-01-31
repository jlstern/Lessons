// No order to objects (as opposed to arrays)
// In some languages, objects are called dictionaries

// Array
var dogs = ["Rusty", "Lucky", "Bubba"];

// Object
var dog = {
	name: "Bubba"
	breed: "Lab"
}

// Objects can be inside of arrays or arrays can be inside objects
var posts = [
	{
		title: "Cats are mediocre",
		author: "Colt",
		comments: ["Awesome post", "terrible post"]
	},
	{
		title: "Cats are actually awesome",
		author: "Cat Luvr",
		comments: ["<3", "Don't like it"]
	}
];

// Activity
console.log(someObject.friends[0].name);