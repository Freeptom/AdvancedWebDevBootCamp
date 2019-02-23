let XHR = new XMLHttpRequest();

XHR.onreadystatechange = function () {
    if(XHR.readyState == 4) {
        if(XHR.status == 200) {
            console.log(XHR.responseText); 
        } else {
            console.log("there was a problem!");
        }

    }
}

XHR.open("GET", "https://api.github.com/zen");
XHR.send();

