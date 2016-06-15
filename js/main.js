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

		todo.forEach(function(todo){
			if (todo.complete===false){
				itemBox.append("<li><article><button class='check'></button><p>"+todo.content+"</p><input type='text' class='edit-todo' value='learn html'><button class='delete'>X</button></article></li>");
			}
			else {
				itemBox.append("<li><article class='completed'><button class='check'></button><p>"+todo.content+"</p><input type='text' class='edit-todo' value='learn css'><button class='delete'>X</button></article></li>");
			}
		})
	}

	$("body").on("click",".check",function() {
		var content = $(this).parent().find("p").text();
		todo.forEach(function(todo){
			if(content === todo.content){
				todo.complete = true;
			}
		})
		toNewBox();
	});

	index=todo.indexOf(this);

	//$("body").on("click",".delete",function() {
		//var content = $(this).parent().find("p").text();
		//todo.forEach(function(todo,index){
			//if(content === todo.content){
				//todo.splice(index,1);
			//}
		//})
		//toNewBox();
	//});


   	$("body").on("click",".delete",function(){
        // get my index from my ID rather than indexOf:
        var index=parseInt(this.id.split('_')[1]);
        this.parentNode.removeChild(this);

        todo.splice(index,1);
     	
     		console.log(todo);
     	})	

});