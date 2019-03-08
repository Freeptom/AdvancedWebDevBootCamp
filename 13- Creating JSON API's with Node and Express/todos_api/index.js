let express = require('express'),
    app = express(),
    port = 3000;

let todoRoutes = require('./routes/todos');

app.get('/', function (req, res) {
    res.send("😀 Hello from the Root route");
});

app.use('/api/todos', todoRoutes);







app.listen(port, function () {
    console.log('app is running on ' + port);
});