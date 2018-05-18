const express = require('express');
const path = require("path");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const data = require('./data')
const gameState = {
  task1: '',
  task2: '',
  scores: {
    security: 50,
    nature: 50,
    culture: 50,
    money: 50,
    social: 50,
  },
}

app.use(express.static('public'));
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render("pages/index");
});

io.on('connection', (socket) => {

});

http.listen(3000, () => console.log('http://localhost:3000'));
