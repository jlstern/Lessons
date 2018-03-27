// Suppose I wanted to model a single person: name, age, and city
var person = {
	name: "Cindy",
	age: "32",
	city: "Missoula"
};

// Unlike arrays, objects have no order

// To retrieve data...
var person = {
	name: "Travis",
	age: 21,
	city: "LA"
};

// bracket notation, similar to arrays:
console.log(person["name"]);
// you can lookup using a variable with bracket notation

// dot notation:
console.log(person.name);
// cannot use when property starts with a number
// cannot use when property has a space in the name

// Updated data inside of an object
var person = {
	name: "Travis",
	age: 21,
	city: "LA"
};
// to update age
person["age"] += 1;
// to update city
person.city = "London";
// or
person["city"] = "London";

// Creating objects:
// (1) Create an empty object then add to it
// (2) Create is all at once
// (3) Use new Object() function -- see below
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";

// Objects can hold all sorts of data, including arrays and other objects
