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

// To include css, add to express file:
app.use(express.static("public"));

// To remove need for .ejs at the end of file names in express file
app.set("view engine", "ejs");

// To include HTML biolerplate, use partials (mini-templates)
// create "partials" directory inside of "views"
// header.ejs and footer.ejs (or similar filenames)

// e.g. <% include partials/header %>

// <link rel="stylesheet" type="text/css" href="/stylesheets/app.css">

// Need body-parser to make forms ****