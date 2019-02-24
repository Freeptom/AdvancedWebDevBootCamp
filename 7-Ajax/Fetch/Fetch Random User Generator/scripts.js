
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
.then(parseJSON)
.then(updateProfile)
.catch(function(error) {
    console.log(error);
    });
});


function parseJSON(res) {
    return res.json().then(function(parsedData) {
        return parsedData.results[0];
    })
}

function updateProfile(data) {
    fullname.innerText = data.name.first + " " + data.name.last;
    username.innerText = data.login.username;
    email.innerText = data.email;
    city.innerText = data.location.city;
    avatar.src = data.picture.medium;
}

function handleErrors(res) {
    if (!res.ok) {
        throw Error(res.status);
    }
    return res;
}
