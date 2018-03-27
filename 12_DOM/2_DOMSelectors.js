document.URL;
// http://www.gogle.com
document.links;
// shows all links in document
document.head;
// shows all code in the header

// Types of selectors
document.getElementById()
document.getElementsByClassName()
document.getElementByTagName()
document.querySelector()
document.querySelectorAll()

// Examples
var tag = document.getElementById("highlight");
// Selects element of a given ID
var tags = document.getElementsByClassName("bolded");
// Selects elements of a given getElementsByClassName
// Returns elements in a node list, works similarly to a function
var listTags = document.getElementByTagName("li")
// Selects elements of a given html tag
// Also returns elements in a node list
var highlightTag = document.querySelector("#highlight") // CSS style
// Returns the first element that matches a given CSS-style selector
// Only returns the very first match-- only one element
var boldedTag = document.querySelectorAll(".bolded") // CSS style
// Returns the ALL elements that matches a given CSS-style selector
// Still works if there is only one match

// Exercise
// 4 different ways to select the first <p>
var first = document.getElementById("first");
var first = document.getElementsByClassName("special")[0];
var first = document.getElementByTagName("p")[0];
var first = document.querySelector("p");