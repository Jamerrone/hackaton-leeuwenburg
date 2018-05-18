let socket;
const score = {};

window.addEventListener("load", function () {
  const getUrl = window.location;
  const baseUrl = getUrl.protocol + "//" + getUrl.host.split(":")[0];
  socket = io.connect(baseUrl + ":3000");

  /*
      _s = serverside triggered event. _c = clientside triggered event.
  */
  socket.on("onShowOptions_s", function (options) {

  });

  // socket.on("onUpdateBuildings_s", function () {

  // });

  socket.on("onOptionFeedback_s", function () {

  });


  socket.on("onCityScore_s", function (scoreUpdate) {
    const characteristics = scoreUpdate.characteristics;
    for (const key in characteristics) {
      const characteristicValue = characteristics[key];

      const container = document.getElementById(key);
      if (container != undefined) {
        container.getElementsByTagName("p")[0] = characteristicValue;
      }
    }

  });
});