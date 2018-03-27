// VERSION 6 +++++++++++++++++++++++++++++++++++++++++++++
var list = [];
while(entry !== "quit"){
	var entry = prompt("What would you like to do?");
	if(entry === "new"){
		newToDo()
	}
	else if(entry === "list"){
		listToDo()
	}
	else if(entry === "delete"){
		deleteToDo()
	}
}
console.log("The list has been closed.")

function newToDo(){
	var newItem = prompt("What would you like to add to your list?");
	list.push(newItem);
	console.log(newItem + " has been added to your list.");
}
function listToDo(){
	list.forEach(function(printList, i){
	console.log((i + 1) + ": " + printList);
	})
}
function deleteToDo(){
	var deleteItem = prompt("Which number item would you like to delete?") - 1;
	console.log(list[deleteItem] + " has been removed.");
	list.splice(deleteItem, 1);
}

// // VERSION 5 +++++++++++++++++++++++++++++++++++++++++++++
// var list = [];
// while(entry !== "quit"){
// 	var entry = prompt("What would you like to do?");
// 	if(entry === "new"){
// 		var newItem = prompt("What would you like to add to your list?");
// 		list.push(newItem);
// 		console.log(newItem + " has been added to your list.");
// 	}
// 	else if(entry === "list"){
// 		list.forEach(function(printList, i){
// 			console.log((i + 1) + ": " + printList);
// 		})
// 	}
// 	else if(entry === "delete"){
// 		var deleteItem = prompt("Which number item would you like to delete?") - 1;
// 		console.log(list[deleteItem] + " has been removed.");
// 		list.splice(deleteItem, 1);
		
// 	}
// }
// console.log("The list has been closed.")

// VERSION 4 +++++++++++++++++++++++++++++++++++++++++++++
// var list = [];
// while(entry !== "quit"){
// 	var entry = prompt("What would you like to do?");
// 	if(entry === "new"){
// 		var newItem = prompt("What would you like to add to your list?");
// 		list.push(newItem);
// 		console.log(newItem + " has been added to your list.");
// 	}
// 	else if(entry === "list"){
// 		list.forEach(function(printList){
// 			console.log((list.indexOf(printList) + 1) + ": " + printList);
// 		})
// 	}
// 	else if(entry === "delete"){
// 		var deleteItem = prompt("Which number item would you like to delete?") - 1;
// 		console.log(list[deleteItem] + " has been removed.");
// 		list.splice(deleteItem, 1);
		
// 	}
// }
// console.log("The list has been closed.")

// VERSION 3 +++++++++++++++++++++++++++++++++++++++++++++

// var list = [];
// while(entry !== "quit"){
// 	var entry = prompt("What would you like to do?");
// 	if(entry === "new"){
// 		list.push(prompt("What would you like to add to your list?"));
// 	}
// 	else if(entry === "list"){
// 		console.log(list);
// 	}
// }
// console.log("The list has been closed.")

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