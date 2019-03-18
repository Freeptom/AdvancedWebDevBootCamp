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
    });

    let list = document.querySelector('.list');
    list.addEventListener('click', function (event) {
        let target = event.target;
        if (event.target.tagName.toLowerCase() === 'span') {
            //this.parentNode.removeChild(this);
            console.log(target.nodeName);
            console.log(target.parentNode);
            target.parentNode.remove()


        }
    });


    function addTodos(todos) {
        // add todos to page
        todos.forEach(function (todo) {
            addTodo(todo);
        });
    }

    function addTodo(todo) {
        // create elements
        let newTodo = document.createElement('li');
        let newExit = document.createElement('span');
        // add styling
        newTodo.classList.add('task');
        // create text content
        let TodoText = document.createTextNode(todo.name);
        let TodoExit = document.createTextNode('X');

        // append content to elements
        newTodo.appendChild(TodoText);
        newExit.appendChild(TodoExit);
        // append span to li
        newTodo.appendChild(newExit);
        // append combination to class
        document.querySelector('.list').appendChild(newTodo);
        // if completed, style
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
});