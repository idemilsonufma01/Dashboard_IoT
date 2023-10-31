const express = require("express");
const mqtt = require("mqtt");
const bodyParser = require("body-parser");
const routes = require('./routes')
const db = require('./db')

const app = express();
app.use(bodyParser.json());
app.use('/', routes);

const mqttClient = mqtt.connect("mqtt://localhost:1883") //substituir pelo broker utilizado

mqttClient.on("connect",()=>{
  console.log("conectado ap MQTT Broker");
  mqttClient.subscribe("esp32/data");  //Tópico MQTT para receber os dados da ESP32
})

mqttClient.on('message',(topic,message)=>{
  try{
    //const data = JSON.parse(message);
    console.log("Mensagem:", topic, message.json);
  } catch (error){
    console.error("Erro ao processar mensagem MQTT: ", error);
  }
});





// db.sync().then(()=> {
//   console.log("Banco de Dados conectado!")
// }).catch(err => {
//   console.error("Erro ao conectar ao banco de dados", err)
// })


const port = 3000;
//precisa ser ultima linha
app.listen(port, function(){
    console.log("Servidor rodando!")
});
