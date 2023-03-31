
function registerEvents() {
    document.getElementById("loadUsers").addEventListener("click", () => loadData("users"));
    document.getElementById("loadTodos").addEventListener("click", () => loadData("todos"));
}

function loadUser() {
    alert("loadUser");
}

function loadData(whichData) {
    fetch('https://jsonplaceholder.typicode.com/' + whichData)
        .then(response => response.json())
        .then(json => { whichData === "users" ? showUsers(json) : showTodos(json) })
        .catch(error => console.error(error));
}

function showTodos(todos) {
    let html = "";
    for (let todo of todos) {
        html += `
            <li>
                <h3>${todo.title}</h3>
            </li>
        `;
    }
    document.getElementById("todos").innerHTML = html;
}

function showUsers(users) {
    let html = "";
    for (let user of users) {
        html += `
            <li>
                <h3>${user.name}</h3>
            </li>
        `;
    }
    document.getElementById("todos").innerHTML = html;
}

registerEvents();