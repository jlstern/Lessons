// API Stands for Application Programming Interface
// Write code for applications to talk to one another

// IFTTT.com is a way to connect applications
// ProgrammableWeb is an API directory (15k APIs)

// APIs use simpler data formats likes XML and JSON

// XML stands for Extended Markup Language
// XML is synatacically similar to HTML, but does not describe presentation like HTML does

// JSON stands for Javascript Object Notation
// Looks exactly like JavaScript objects, but everything is a string

// Chrome Extension called JSONView can make JSON easier to look at

// +++++ Making requests +++++
// How do I write JavaScript that will make a request for make
// request are independent of browsers, can be made from terminal, etc.

// Install package "Request"; e.g. below
// create new js file

var request = require("request");
request("http://www.google.com", function(error, response, body){
	// check for error
	if(error){
		console.log("SOMETHING WENT WRONG!");
		console.log(error);
	} else {
		if(response.statusCode === 200){
			// If we get here, things worked
			// This will print body of request
			console.log(body);
		}
	}
});

// Cleaner version
var request = require("request");
request("[insert API URL here]", function(error, response, body){
	if(!error && response.statusCode == 200){
		// make request here
	}
});

// JSON objects get sent back to javascript as a string

// Example
var request = require("request");
request("[insert API URL here]", function(error, response, body){
	if(!error && response.statusCode == 200){
		var parsedData = JSON.parse(body);
		console.log(parsedData["query"]["results"]["channel"]);
	}
});


