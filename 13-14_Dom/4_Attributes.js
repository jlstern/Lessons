// Use getAttribute and setAttribute to read and write attributes like src or href
var link = document.querySelector("a");
link.getAttribute("href"); //"www.google.com"
//Change href attribute
link.setAttribute("href", "http://www.dogs.com");

// To change image src
var img1 = document.getElementsByTagName("img")[0];
img1.setAttribute("src", "http://www.website.com/image")
// if http:// is not included, link while try to go to a relative path