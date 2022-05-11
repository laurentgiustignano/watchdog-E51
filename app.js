const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const LaConfig = require('./config');

var path = require('path');
var mqtt = require('mqtt');
var monBroker = LaConfig.laConfig.broker;
var options = {
    port: 1883,
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/js', express.static(__dirname + '/js'));

server.listen(80, () => {
    console.log('listening on *:80');
});


var client = mqtt.connect(monBroker,options);


client.on("connect",() =>{
    console.log("connecté au brocker : " + monBroker + " " + options.clientId);

    client.subscribe(LaConfig.laConfig.topic1,()=>{
        console.log('Subscribe to topic : '+LaConfig.laConfig.topic1)
    })
    client.subscribe(LaConfig.laConfig.topic2,()=>{
        console.log('Subscribe to topic : '+LaConfig.laConfig.topic2)
    })
    client.subscribe(LaConfig.laConfig.topic3,()=>{
        console.log('Subscribe to topic : '+LaConfig.laConfig.topic3)
    })
    client.subscribe(LaConfig.laConfig.topic4,()=>{
        console.log('Subscribe to topic : '+LaConfig.laConfig.topic4)
    })
    client.subscribe(LaConfig.laConfig.topic5,()=>{
        console.log('Subscribe to topic : '+LaConfig.laConfig.topic5)
    })
    client.subscribe(LaConfig.laConfig.topic6,()=>{
        console.log('Subscribe to topic : '+LaConfig.laConfig.topic6)
    })

})

client.on('message',(topic,payload)=>{
    console.log('Message',topic,payload.toString())
    io.emit(topic,payload.toString());
})
