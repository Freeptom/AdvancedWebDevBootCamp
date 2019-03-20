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
        const clicked = event.target.parentNode;
        event.stopPropagation();
        removeTodo(clicked);
    });

    list.addEventListener('click', function (event) {
        if (event.target.tagName.toLowerCase() === 'li') {
            const clicked = event.target;
            updateTodo(clicked);
        }
    })


    function addTodos(todos) {
        // add todos to page
        todos.forEach(function (todo) {
            addTodo(todo);
        });
    }

    function addTodo(todo) {
        // create elements
        let newTodo = document.createElement('li');
        let newDelete = document.createElement('span');

        // add styling
        newTodo.classList.add('task');

        // create text content and data
        let todoText = document.createTextNode(todo.name);
        let todoExit = document.createTextNode('X');

        // append data attributes
        newTodo.setAttribute('data-id', todo._id);
        newTodo.setAttribute('data-completed', todo.completed);

        // append content to elements
        newTodo.appendChild(todoText);
        newDelete.appendChild(todoExit);

        // append span to li
        newTodo.appendChild(newDelete);

        // append combination to class
        document.querySelector('.list').appendChild(newTodo);

        // if completed todo, style
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

function removeTodo(todo) {
    if (event.target.tagName.toLowerCase() === 'span') {
        // remove li
        todo.parentNode.removeChild(todo);
        // get data id
        const clickedId = todo.getAttribute('data-id');
        // append data id to delete req
        let deleteUrl = '/api/todos/' + clickedId;
        const deleteId = {
            method: 'DELETE',
            body: "",
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch(deleteUrl, deleteId)
            .then(message => message.json())
            .then(message => console.log(message))
            .catch(err => console.log(err));

    }
}

function updateTodo(todo) {
    // attach completed to var
    let isDone = !todo.getAttribute('data-completed');
    let updateData = {
        completed: isDone
    }
    console.log(updateData);
    // get data id
    const clickedId = todo.getAttribute('data-id');

    // append data id to put req
    let updateUrl = '/api/todos/' + clickedId;
    const updateCompleted = {
        method: 'PUT',
        body: JSON.stringify(updateData),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    // make put req
    fetch(updateUrl, updateCompleted)
        .then(updatedTodo => updatedTodo.json())
        .then(updatedTodo => todo.classList.toggle('done'))
        .then(updatedTodo => todo.setAttribute('data-completed', isDone))
        .catch(err => console.log(err));
};





// let target = event.target;
// if (event.target.tagName.toLowerCase() === 'span') {
//     // x   li         ul                     x      li
//     target.parentNode.parentNode.removeChild(target.parentNode);
//     const clickedId = target.parentNode.getAttribute('data-id');
//     let deleteUrl = '/api/todos/' + clickedId;
//     console.log(clickedId);

//     const deleteId = {
//         method: 'DELETE',
//         body: "",
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     fetch(deleteUrl, deleteId)
//         .then(message => message.json())
//         .then(message => console.log(message));

// }