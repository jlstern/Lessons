// Style property
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px"
tag.style.background = "yellow"

// Rather than directylu manipulating a style with JS, we can define a CSS class and then toggle it on or off with JS
tag.classList.add("some-class");
tag.classList.remove("some-class");
tag.classList.toggle("some-class"); //toggles a class on or off depending

// classList is not an array, cannot use push/pull -- only use add or remove

// CHANGING TEXT CONTENT - returns a string of all text contained in a given element
var tag = document.querySelector("p");
// retrieve the textContent;
tag.textContent // won't return style tags, just raw text
// alter the textContent
tag.textContent = "blah blah blah";
// overwrites any in-line style tags
tag.innerHTML = "blah <strong>blah</strong> blah"
// does not chang in-line style tags

// doesn't have to be saved as a variable neccesarily:
document.querySelector("h1").textContent = "blah blah blah";

// text.Content will not treat HTML tags as tags, only as text