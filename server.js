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

function getRamdomPersona() {
  let result;
  let count = 0;
  for (let prop in data.personas) {
    if (Math.random() < 1 / ++count) {
      result = prop;
    }
  }
  return result;
}

app.use(express.static('public'));
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render("pages/index");
});

io.on('connection', (socket) => {
<<<<<<< HEAD
  socket.persona = getRamdomPersona();
  socket.emit("onCityScoreUpdate_s", scores);
  socket.on("onMakeCardChoice", function (choice) {
  });
=======
    socket.emit("onCityScoreUpdate_s", gameState.scores);
    socket.on("onMakeCardChoice", function (choice) {
        
    });
>>>>>>> server-side-communication
});

http.listen(3000, () => console.log('http://localhost:3000'));