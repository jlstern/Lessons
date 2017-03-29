// Mongoose is a tool that helps us interact with MongoDB
var mongoose = require("mongoose");
mongoose.connect("mongod://localhost/name_of_app");

var catSchema = new mongoose.Scheme({
	name: String,
	age: Number,
	color: String
});

var Cat = mongoose.model("Cat", catSchema)

// var objectModel = mongoose.model("SingularNameOfCollection", aboveSchema)

var george = new Cat({
	name: "George",
	age: 11,
	color: "black"
});
// the above "george" variable does not impact anyting

// to add to database
george.save(function(err, cat){
	if(err){
		console.log("Something went wrong");
		console.log(err);
	} else {
		console.log("Save successful:")
		console.log(cat);
	}
});

// to search database -> returns an array
Cat.find({}, function(err, cats){
	if(err){
		console.log("Something went wrong");
		console.log(err);
	} else {
		console.log("All of the cats:");
		console.log(cats);
	}
});


Cat.create({
	name: "Snowball",
	age: 15,
	color: "white"
}, function(err, cat){
	if(err){
		console.log(err);
	} else {
		console.log(cat);
	}
});

// Steps to add a database
// 1) install Mongoose
// 2) require Mongoose
var mongoose = require("mongoose");
// 3) set up schema
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
});
// 4) create a model
var Campground = mongoose.model("Campground", campgroundSchema);
// 5) Set up get request to request the data an object
app.get("/campgrounds", function(req, res){
Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log("Something went wrong");
    } else {
      res.render("campgrounds", {campgrounds:allCampgrounds});
    }
  });
});
// 6) Set up post request to add to database
app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name:name, image:image}
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log("Something went wrong");
    } else {
      res.redirect("/campgrounds");
    }
  });
});






