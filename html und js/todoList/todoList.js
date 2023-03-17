let todos = [
    {id: 1, text: "hallo", done: true},
    {id: 2,text: "hallo", done: false},
];

function loadTodos() {
    let todos = window.localStorage.getItem("todos");
    if (todos) {
        console.log(todos);
    }
    showTodos();
}

function addTodo() {

}

function updateTodo(id) {
    console.log(id);
}

function showTodos() {
    if (todos.length > 0) {
        todoList = document.getElementById("todoList");
        todos.forEach(todo => {
            console.log(todo);
            const todoElement = document.createElement("div");
            todoElement.classList.add("todo");
            todoElement.innerHTML = `
                <div class="round">
                    <input type="checkbox" ${todo.done ? 'checked':""} id="checkbox${todo.id}" onclick(updateTodo(${todo.id});)/>
                    <label for="checkbox${todo.id}"></label>
                </div>
                <div class="todoText">${todo.text}</div>
            `;
            todoList.appendChild(todoElement);
        });
    }
}

loadTodos();