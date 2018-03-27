function sing(){;
	console.log("twinkle twinkle...");
	console.log("little star...");
}

setInterval(sing, 1000) //1000 milliseconds is 1 second

clearInterval(2) //to stop function; may be a different number depending on function

// ++++++++++++++++++++++++++++++++++++
// Anonymous function
setInterval(function(){
	console.log("Here is some text")
}, 2000)

// function() is being defined in-line, cannot be called outside of setInterval

