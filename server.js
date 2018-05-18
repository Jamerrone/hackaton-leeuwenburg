const express = require('express');
const path = require("path");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const deepcopy = require("deepcopy");

const data = require('./data')
const gameState = {
  task1: getRamdomTask(),
  task2: getRamdomTask(),
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

function getRamdomTask() {
  let count = 0;
  for (let prop in data.tasks) {
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
  console.log("connection");
  socket.persona = deepcopy(data.personas[getRamdomPersona()]);
  socket.emit('displayPersona', socket.persona)
  socket.emit('displayTasks', {task1: data.tasks[gameState.task1], task2: data.tasks[gameState.task1]})
  socket.emit("onCityScoreUpdate_s", gameState.scores);

  socket.on("onMakeCardChoice_c", function (cardIndex, energy) {
    console.log("onMakeCardChoice_c");
    cardIndex = Number(cardIndex);

    let cardName;
    if (cardIndex === 0) {
      cardName = gameState.task1;
    } else if (cardIndex == 1) {
      cardName = gameState.task2;
    }
    if (cardName !== undefined) {
      console.log(cardIndex, cardName)
      socket.persona.energy -= energy; // remove energy from the persona
      data.tasks[cardName].currentValue += energy; // add energy to the current task.
      console.log("onEnergyChange_s")
      socket.emit('onEnergyChange_s', socket.persona.energy);
    }
  });
});

http.listen(3000, () => console.log('http://localhost:3000'));