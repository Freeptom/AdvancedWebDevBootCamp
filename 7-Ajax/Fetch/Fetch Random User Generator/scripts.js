
let btn = document.querySelector("#btn");
let fullname = document.querySelector("#fullname");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let city = document.querySelector("#city");
let avatar = document.querySelector("#avatar");


btn.addEventListener('click', function() {
    let url = "https://randomuser.me/api/"
fetch(url)
.then(handleErrors)
.then(function(request) {
    return request.json()
  })
.then(function(request) {
    console.log(request);
    fullname.innerText = (request).results[0].name.first + " " + (request).results[0].name.last;
    username.innerText = (request).results[0].login.username;
    email.innerText = (request).results[0].email;
    city.innerText = (request).results[0].location.city;
    avatar.src = (request).results[0].picture.medium;
})
.catch(function(error) {
    console.log(error);
});
});

function handleErrors(request) {
    if (!request.ok) {
        throw Error(request.status);
    }
    return request;
}
