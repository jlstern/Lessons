// EJS Example
var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("love.ejs", {thingVar: thing});
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Server is running");
})

// dynamic HTML files are .ejs files
// <%= put javascript here %>
// every individual line must include tags

// <%= %> used to add HTML to the page
// <% %> is just for raw javascript

