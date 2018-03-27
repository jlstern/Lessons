// VERSION 3 +++++++++++++++++++++++++++++++++++++++++++++
var list = [];
while(entry !== "quit"){
	var entry = prompt("What would you like to do?");
	if(entry === "new"){
		list.push(prompt("What would you like to add to your list?"));
	}
	else if(entry === "list"){
		console.log(list);
	}
}
console.log("The list has been closed.")

// VERSION 2 +++++++++++++++++++++++++++++++++++++++++++++

// var list = [];
// function promptToDo(){
// 	var entry = prompt("What would you like to do?");
// 	if(entry === "new"){
// 		list.push(prompt("What would you like to add to your list?"));
// 		promptToDo();
// 	}
// 	else if(entry === "list"){
// 		console.log(list);
// 		promptToDo();
// 	}
// 	else if(entry === "quit"){
// 		console.log("List has been closed.");
// 	}
// 	else{
// 		promptToDo();
// 	}
// }
// promptToDo();

// VERSION 1 +++++++++++++++++++++++++++++++++++++++++++++

// var list = [];
// function promptToDo() {
// 	var entry = prompt("What would you like to do?");
// 	if(entry === "new"){
// 	newToDo();
// 	}
// 	else if(entry === "list"){
// 		listToDo();
// 	}
// 	else if(entry === "quit"){
// 		quitToDo();
// 	}
// 	else{
// 		promptToDo();
// 	}
// }
// function newToDo() {
// 	list.push(prompt("What would you like to add to your list?"));
// 	promptToDo();
// }
// function listToDo() {
// 	console.log(list);
// 	promptToDo();
// }
// function quitToDo() {
// 	console.log("List has been closed.")
// }