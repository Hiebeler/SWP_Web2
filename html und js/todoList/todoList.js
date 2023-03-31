let todos = [];

function loadTodos() {
    if (JSON.parse(window.localStorage.getItem("todos"))) {
        todos = JSON.parse(window.localStorage.getItem("todos"));
    }
    showTodos();
}

function addTodo() {
    let todoText = prompt("Todo eingeben");
    if (todoText) {
        todos.push({id: todos.length + 1, text: todoText, done: false});
        showTodos();
    }
    console.log(todos);
}

function updateTodo(id) {
    console.log(id);
    todos.map(todo => {
        if (todo.id === id) {
            todo.done = !todo.done;
        }
        return todo;
    });
    window.localStorage.setItem("todos",  JSON.stringify(todos));
    console.log(todos);
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    window.localStorage.setItem("todos",  JSON.stringify(todos));
    console.log(todos);
    showTodos();
}


function showTodos() {
    if (todos) {
        todoList = document.getElementById("todoList");
        todoList.innerHTML = "";
        todos.forEach(todo => {
            console.log(todo);
            const todoElement = document.createElement("div");
            todoElement.classList.add("todo");
            todoElement.innerHTML = `
                <div class="round">
                    <button>
                        <input type="checkbox" ${todo.done ? 'checked':""} id="checkbox${todo.id}"/>
                        <label for="checkbox${todo.id}" onclick="updateTodo(${todo.id})"></label>
                    </button>
                </div>
                <div class="todoText">${todo.text}</div>
                <button class="todoDelete" onclick="deleteTodo(${todo.id});">&#x2715</button>
            `;
            todoList.appendChild(todoElement);
        });
    }
}

loadTodos();