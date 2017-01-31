// PROBLEM 1: isEven()
function isEven(x) {
	if(x % 2 === 0) {
		return true;
	}
		return false;
}

// Shortened version
function isEven(x) {
	return num % === 0;
}

// PROBLEM 2: factorial()
function factorial(y) {
	if(y === 0) {
		return 1;
	}
	else if(y < 0) {
		return 0;
	}
	return y * factorial(y - 1);
}

// Alternate version
function factorial(y) {
	var result = 1;
	for(var i = 2; i <= num; i++){
		result *= i
	}
	return result;

// Or
function factorial(y) {
	if(y === 0) {
		return 1;
	}
	var result = y;
	for(var i = y-1; i >= 1; i--){
		result *= i
	return result
}

// PROBLEM 3: kebabToSnake()
function kebabToSnake(z) {
	while(z.indexOf("-") >= 0) {
		var z = z.replace("-", "_");
	}	
	return z
}

// Alternate version
function kebabToSnake(str) {
	var newStr = str.replace(/-/g , "_");
	return newStr
}


