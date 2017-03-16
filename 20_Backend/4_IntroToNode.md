What is NPM?
NPM is the package manager for node (comes with node)
- NPM adds packages (libraries) to server

command line:
npm install + name of package

js file:
var nameOfVar = require("nameOfPackage") --- includes a package
Can execute nameOfVar as function (e.g. nameOfVar()) for various effects

+++++ Intro to Express +++++
* What is a framework? How is it different from a library?
	- External code that creates a framework in your code, we have to give up a little control
	- Pre-packages basic functions so we don't have to set it up

* Why use express?
	- Most popular node framework

Two descriptions for frameworks: heavy and light
	- Heavy has less flexibility
	- Express is a very light framework

ROUTES are the code for listening to GET requests and determining what to send back

EXAMPLE:
app.get("/", function(req, res){
	res.send("text");
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Server has started");
})

+++++ package.json +++++
Every npm file has a package.json
stands for javascript object notation

npm init --- creates a new package.json

npm install express --save 