const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {

});

io.on('connection', (socket) => {

});

http.listen(3000, () => console.log('http://localhost:3000'));
