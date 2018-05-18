let socket;
const score = {};

window.addEventListener('load', function () {
  const getUrl = window.location;
  const baseUrl = getUrl.protocol + '//' + getUrl.host.split(':')[0];
  socket = io.connect(baseUrl + ':3000');

  /*
      _s = serverside triggered event. _c = clientside triggered event.
  */
  socket.on('onShowOptions_s', function (options) {

  });

  // socket.on('onUpdateBuildings_s', function () {

  // });

  socket.on('onOptionFeedback_s', function () {

  });


  socket.on('onCityScoreUpdate_s', function (scores) {
    for (const scoreId in scores) {
      const value = scores[scoreId];

      const container = document.getElementById(scoreId);
      if (container != undefined) {
        container.getElementsByTagName('p')[0].textContent = value;
      }
    }

  });

  socket.on('displayPersona', function (persona) {
    document.getElementById('user-name').innerHTML = persona.name;
    document.getElementById('user-energy').innerHTML = persona.energy;
    document.getElementById('user-security').innerHTML = persona.scores.security;
    document.getElementById('user-nature').innerHTML = persona.scores.nature;
    document.getElementById('user-culture').innerHTML = persona.scores.culture;
    document.getElementById('user-money').innerHTML = persona.scores.money;
    document.getElementById('user-social').innerHTML = persona.scores.social;
  })

  socket.on('displayTasks', function (data) {
    const task1 = document.getElementById('task1');
    const task2 = document.getElementById('task2');
    task1.querySelector('h4').innerHTML = data.task1.name;
    task2.querySelector('h4').innerHTML = data.task2.name;
    task1.querySelector('p').innerHTML = data.task1.taskDescription;
    task2.querySelector('p').innerHTML = data.task2.taskDescription;
  })

  document.getElementsByTagName('form')[0].addEventListener('submit', function (e) {
    e.preventDefault();
    const selectedElement = this.querySelector(':checked');
    if (selectedElement != undefined) {
      const value = selectedElement.value;
      console.log('on card click', value);
      const energy = Number(this.querySelector("[name=\"energyAmount\"]").value);
      if (energy != undefined && energy != "" && energy > 0) {
        console.log(energy);
        socket.emit('onMakeCardChoice_c', value, energy);
      }
    }
    e.preventDefault();
  });

  socket.on('onEnergyChange_s', function (energy) {
    console.log("onEnergyChange_s");
    document.getElementById('user-energy').textContent = energy;
  });
});