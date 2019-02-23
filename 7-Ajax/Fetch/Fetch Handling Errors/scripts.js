let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    let url = "https://api.github.com/users/coltasdgj";
    // get url
    fetch(url)
    // run error handler
    .then(handleErrors)
    // if OK, take request from error handler
    .then(function(request) {
        console.log("everything is fine!")
        console.log(request);
    })
    // if error handler !request then catch
    .catch(function(error) {
        console.log(error);
    })
});

// error handler
function handleErrors (request) {
    if(!request.ok) {
        throw Error(request.status);
    }
    return request;
};