// Array Methods -- Lots of resources available on MDN

// Push adds item to the end of the array
var colors = ["red", "orange", "yellow"];
colors.push("green");
// ["red", "orange", "yellow", "green"];

// Pop removes last item in an array
var colors = ["red", "orange", "yellow"];
colors.pop();
// ["red", "orange"]

// Unshift adds an item to the front of an array
var colors = ["red", "orange", "yellow"];
colors.unshift("infared")
// ["infared" "red", "orange", "yellow"]

// Shift removes the first item in an array
var colors = ["red", "orange", "yellow"]
colors.shift();
// ["orange", "yellow"]
//shift() returns the removed element

// indexOf finds the first index of an item in an array
var colors = ["red", "orange", "yellow"];
colors.indexOf("orange"); // 1
//returns -1 of the element is not present

// Slice copies parts of an array
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
var citrus = fruits.slice(1, 3);
//citrus contains ['Orange', 'Lemon']

// To copy an entire array, just don't copy in any beginng or end points

//Nested arrays
var friendGroups = [
	["Harry", "Ron", "Hermione"]
	["Malfoy", "Crabbe", "Goyle"]
	["Mooney", "Wormtail", "Padfoot", "Prongs"]
];

friendGroups[2]
// ["Mooney", "Wormtail", "Padfoot", "Prongs"]

friendGroups[2] [0]
// "Mooney"