let socket;
const score = {};

window.addEventListener("load", function () {
    const getUrl = window.location;
    const baseUrl = getUrl .protocol + "//" + getUrl.host.split(":")[0];
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

    
    socket.on("onCityScoreUpdate_s", function (scores) {

        for (const scoreId in scores) {
            const value = scores[scoreId];
                
            const container = document.getElementById(scoreId);
            if (container != undefined) {
                container.getElementsByTagName("p")[0] = value;
            }
        }

    });
});