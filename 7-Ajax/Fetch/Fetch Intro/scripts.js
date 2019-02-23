let url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url)
.then(function(res) {
   return res.json();
})
.then(function(data) {
    console.log(data);
});