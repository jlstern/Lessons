var sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// PROBLEM 1 ++++++++++++++++++++++
// printReverse() is an array that takes an argument and prints out the elements in the reverse order
function printReverse(){
	for(var i = (sequence.length - 1); i >= 0; i--){
		console.log(sequence[i]);
	}
}

// PROBLEM 2 ++++++++++++++++++++++
// isUniform() is an array that returns true if all elements are identical
function isUniform(){
	for(var i = 1; i < sequence.length; i++){
		if(sequence[0] !== sequence[i]){
			return false;
		}
	}
	return true;
}

// PROBLEM 3 ++++++++++++++++++++++
// sumArray() returns sum of numbers in the array
function sumArray(){
	var sum = sequence[0];
	for(var i = 1; i < sequence.length; i++){
		sum += sequence[i];
	}
	return sum;
}

// PROBLEM 4 ++++++++++++++++++++++
// max() returns maximum number in the array
function max(){
	var highest = sequence[0];
	for(var i = 1; i < sequence.length; i++){
		if(sequence[i] > highest){
			highest = sequence[i];
		}
	}
	return highest;
}