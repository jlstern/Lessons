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


1) install Mongoose
2) 






