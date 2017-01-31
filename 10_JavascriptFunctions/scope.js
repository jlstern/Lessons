// ----SCOPE----
// Scope is the contex that code is executed in

function doMath(){
	var x = 40;
	console.log(x);
}
// In the above function, x = 40; outside of this function x is undefined
// Global scope is the scope outside of all functions

var y = 99; // y is available in the global scope

function doMoreMath(){
	console.log(y);
}
// When something is defined in the global scope, it is availble in the function
// However, variables in functions are not available in the global scope
// By declaring a variable inside a function, it becomes only available WITHIN the function (see first example)