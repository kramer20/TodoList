$(document).ready(function() {
	
	function ToDoItem(content,complete){
		this.content = content;
		this.complete = complete;
	}

	var input = $(".new-todo");
	var todo = [];

	$("form").on('submit',function(e){
		e.preventDefault();
		var content = input.val();
		var newTodo = new ToDoItem(content,false);
		todo.push(newTodo);
		toNewBox();
	})

	function toNewBox() {
		var itemBox = $(".items");
		itemBox.html("");

		todo.forEach(function(event){
			itemBox.append("<li><article><button class='check'></button><p>"+event.content+"</p><input type='text' class='edit-todo' value='learn html'><button class='delete'>X</button></article></li>");
		})
	}

	$(".check").click(function()) {
		var complete = toNewBox.val();
		var crossOut = $(".items").wrap("<strike>");
	}


});