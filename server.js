const express = require('express');
const path = require("path");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {

});

io.on('connection', (socket) => {

});

http.listen(3000, () => console.log('http://localhost:3000'));
