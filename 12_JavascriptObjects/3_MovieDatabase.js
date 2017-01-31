function listMovies(){
	for(i = 0; i < movies.length; i++){
		var descript = movies[i].name + "\" - " + movies[i].rating + " stars";
		if(movies[i].watched === true){
			console.log("You have watched \"" + descript);
		}
		else{
			console.log("You have not watched \"" + descript);
		}
	}
}
var movies = [
	{
		name: "In Bruges",
		watched: true,
		rating: 5
	},
	{
		name: "Frozen",
		watched: false,
		rating: 4.5
	},
	{
		name: "Mad Max Fury Road",
		watched: true,
		rating: 5
	},
	{
		name: "Les Miserables",
		watched: false,
		rating: 3.5
	}
];

//++++++++version 2++++++++++++++++++++++++++++
function buildString(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	}
	else{
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	return result;
}

movies.forEach(function(movie){
	console.log(buildString(movie));
});