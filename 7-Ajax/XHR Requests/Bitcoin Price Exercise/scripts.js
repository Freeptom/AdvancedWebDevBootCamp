
let btn = document.querySelector('button');
let priceDisplay = document.querySelector('#price');
let currency = "USD";

btn.addEventListener('click', function() {
    let XHR = new XMLHttpRequest();

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();

    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 && XHR.status == 200) {
        let url = JSON.parse(XHR.responseText);
        let gbpPrice = url.bpi[currency].rate;
        priceDisplay.innerHTML = gbpPrice + " " + currency;      
        }
    }
});

