const LaConfig = require('../js/config');
var socket = io();

socket.on(LaConfig.laConfig.topic1, function(msg) {
    var elemValeur = document.getElementById('alphavalue');
    var elemBar = document.getElementById('alphabar');

    if(msg > 25){
        elemValeur.setAttribute("class","text-danger");
        elemBar.setAttribute("class","progress-bar bg-danger")
    }
    else{
        elemValeur.setAttribute("class","text-success");
        elemBar.setAttribute("class","progress-bar bg-success")
    }

    elemValeur.textContent = msg;
    elemBar.setAttribute("style","width: "+msg+"%;");
});

socket.on(LaConfig.laConfig.topic2, function(msg) {
    var elemValeur = document.getElementById('betavalue');
    var elemBar = document.getElementById('betabar');

    if(msg > 25){
        elemValeur.setAttribute("class","text-danger");
        elemBar.setAttribute("class","progress-bar bg-danger")
    }
    else{
        elemValeur.setAttribute("class","text-success");
        elemBar.setAttribute("class","progress-bar bg-success")
    }
    elemValeur.textContent = msg;
    elemBar.setAttribute("style","width: "+msg+"%;");
});

socket.on(LaConfig.laConfig.topic3, function(msg) {
    var elemValeur = document.getElementById('gammavalue');

    if(msg == 0){

        elemValeur.textContent = "Fermée";
        elemValeur.setAttribute("class","btn btn-success disabled");
    }
    else{
        elemValeur.textContent = "ouverte";
        elemValeur.setAttribute("class","btn btn-danger disabled");
    }

});


socket.on(LaConfig.laConfig.topic4, function(msg) {
    var elemValeur = document.getElementById('deltavalue');
    var elemBar = document.getElementById('deltabar');

    if(msg > 25){
        elemValeur.setAttribute("class","text-danger");
        elemBar.setAttribute("class","progress-bar bg-danger")
    }
    else{
        elemValeur.setAttribute("class","text-success");
        elemBar.setAttribute("class","progress-bar bg-success")
    }
    elemValeur.textContent = msg;
    elemBar.setAttribute("style","width: "+msg+"%;");
});

socket.on(LaConfig.laConfig.topic5, function(msg) {
    var elemValeur = document.getElementById('epsilonvalue');
    var elemBar = document.getElementById('epsilonbar');

    if(msg > 25){
        elemValeur.setAttribute("class","text-danger");
        elemBar.setAttribute("class","progress-bar bg-danger")
    }
    else{
        elemValeur.setAttribute("class","text-success");
        elemBar.setAttribute("class","progress-bar bg-success")
    }
    elemValeur.textContent = msg;
    elemBar.setAttribute("style","width: "+msg+"%;");
});

socket.on(LaConfig.laConfig.topic6, function(msg) {
    var elemValeur = document.getElementById('zetavalue');

    if(msg == 0){

        elemValeur.textContent = "Fermée";
        elemValeur.setAttribute("class","btn btn-success disabled");
    }
    else{
        elemValeur.textContent = "ouverte";
        elemValeur.setAttribute("class","btn btn-danger disabled");
    }
});

