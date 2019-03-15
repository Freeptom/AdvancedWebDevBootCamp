// import { createTodo } from "../helpers/todos";

document.addEventListener("DOMContentLoaded", function () {
    fetch('api/todos/')
        .then(function (response) {
            return response.json();
        })
        .then(addTodos);

    let todoInput = document.querySelector('#todoInput');
    todoInput.addEventListener('keypress', function (e) {
        if (e.which == 13) {
            // create todo
            createTodo();
        }
    })
});

function addTodos(todos) {
    // add todos to page
    todos.forEach(function (todo) {
        addTodo(todo);
    });
}

function addTodo(todo) {
    let newTodo = document.createElement('li');
    newTodo.classList.add('task');
    let TodoText = document.createTextNode(todo.name);
    newTodo.appendChild(TodoText);
    document.querySelector('.list').appendChild(newTodo);
    if (todo.completed) {
        newTodo.classList.add('done');
    }
}

function createTodo() {
    let userInput = todoInput.value;
    // send req to create new todo
    fetch('api/todos/', {
            method: 'POST',
            body: JSON.stringify({
                name: userInput
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(function (res) {
            return res.json();
        })
        .then(function (newTodo) {
            todoInput.value = "";
            addTodo(newTodo);
        })
        .catch(function (err) {
            console.log(err);
        })
}