//Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", editDelete);

//Function
function addTodo(event) {

  if(todoInput.value === "") {
    alert('Input box cannot be empty')
  } else {

    event.preventDefault();
  
    //Create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
  
    //Create li
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);
  
    //Create checked button
    const checkedButton = document.createElement("button");
    checkedButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    checkedButton.classList.add("edit-btn");
    todoDiv.appendChild(checkedButton);
  
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
  
    //Append li
    todoList.appendChild(todoDiv);
  
    todoInput.value = "";
  }
}

function editDelete(e) {
  const item = e.target;

  //Delete ToDo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  //Edit ToDo
  if (item.classList[0] === "edit-btn") {
    const todo = item.parentElement;
    const first = todo.firstChild.innerText;
    const edit = prompt("Edit", first);

  }
}
