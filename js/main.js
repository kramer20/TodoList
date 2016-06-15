$(document).ready(function() {
	
	//object for items
	function ToDoItem(content,complete){
		this.content = content;
		this.complete = complete;
	}

	//accessing from HTML the input class and assigining it a variable
	var input = $(".new-todo");

	//array for items to filter through
	var todo = [];

	//$("form").on('submit'...tells computer to submit on enter key.
	//function that pushes through new todo item and makes creates its own "box"
	$("form").on('submit',function(e){
		e.preventDefault();
		var content = input.val();
		var newTodo = new ToDoItem(content,false);
		todo.push(newTodo);
		toNewBox();
	});

	//when click, shows all active
	$("body").on("click",".show-active",function() {
		toActive();
	});

	//when click, shows all completed
	$("body").on("click",".show-completed",function() {
		toComplete();
	});

	$("body").on("click",".show-all",function() {
		toNewBox();
	});

	//function for "toNewBox", creates path for each item to run through the array
	function toNewBox() {
		var itemBox = $(".items");
		itemBox.html("");

		todo.forEach(function(todo){
			if (todo.complete===false){
				itemBox.append("<li><article><button class='check'></button><p>"+todo.content+"</p><input type='text' class='edit-todo' value='learn html'><button class='delete'>X</button></article></li>");
			}
			else {
				itemBox.append("<li><article class='completed'><button class='check'></button><p>"+todo.content+"</p><input type='text' class='edit-todo' value='learn css'><button class='delete'>X</button></article></li>");
			}
		});
	};

	//function for "active box"
	function toActive() {
		var itemBox = $(".items");
		itemBox.html("");

		todo.forEach(function(todo){
			if (todo.complete===false){
				itemBox.append("<li><article><button class='check'></button><p>"+todo.content+"</p><input type='text' class='edit-todo' value='learn html'><button class='delete'>X</button></article></li>");
			}
	});

};

	//function for "complete box"
	function toComplete() {
		var itemBox = $(".items");
		itemBox.html("");

		todo.forEach(function(todo){
			if (todo.complete===true){
				itemBox.append("<li><article class='completed'><button class='check'></button><p>"+todo.content+"</p><input type='text' class='edit-todo' value='learn css'><button class='delete'>X</button></article></li>");
			}
	});
};

		//function for checking off/striking out
	$("body").on("click",".check",function() {
		var unCheck = $(this).parent().find("p").text();
		todo.forEach(function(todo){
			if(todo.content === unCheck && todo.complete === false){
				todo.complete = true;
			}
			else if(todo.content === unCheck && todo.complete === true){
				todo.complete = false;
			}
		});
		toNewBox();
	});

		//function for deleting item
	$("body").on("click",".delete",function() {
		var content = $(this).parent().find("p").text();
		todo.forEach(function(aTodo,index){
			if(content === aTodo.content){
				todo.splice(index,1);
			}
		});
		toNewBox();
	});

});



