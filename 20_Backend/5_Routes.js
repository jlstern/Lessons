// To start the server on cloud 9
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Server has started");
});

// Star method -- will run when a specific /page is not found
// Must be at the bottom of the list of routes
app.get("*", function(req, res){
	res.send("Page not found");
});

// define a pattern using route parameters/variables
app.get("/r/:subredditName/", function(req, res){
	var subreddit = req.params.subredditName;
	res.send("Welcome to the " + subreddit + " subreddit!");
});

res.render()