const express = require("express");
const bodyParser = require('body-parser');
const Sequelize = require ('sequelize');
const db = require('./db');
const routes = express.Router();
const app = express();


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
//Middleware para processar os dados antes de inseri-los no banco de dados

const validacao = function(req,res,next){
  const data = req.body;
  if(data && typeof data.sensorTemperatura === 'number' && typeof data.sensorUmidade === 'number' && typeof data.sensorLuz === 'number'){
    //se os dados estiverem corretos, passa para proxima rota
    next();
  } else {
    console.error("Dados MQTT inválidos:", data);
    res.status(400).json({error: "Dados inválidos"});
  }

}
// app.use((req, res, next)=>{
//     const data = req.body.data;
//     //Local processamento de dado, por exemplo:
//     //validação de dados
//     //transformação ou formatação de dados

//     req.processedData = data; //armazena os dados em um novo campo

//     next() //chama o próximo middleware
//  });


// routes.use(function(req, res, next){
//     console.log(" eu sou o middleware");
//     next();

    
// });

routes.get("/", function(req, res){
   res.sendFile(__dirname + "/views/index.html");
  });

// Rota para receber dados do dispositivo IoT via MQTT e armazená-los no banco de dados
app.post("/storeData", (req, res) => {
    console.log("Aqui")
    const data = req.processedData; //obtendo dados processados do middleware
    //inserir os dados no banco de dados
    data.insert({
      sensorTemperatura: data.sensorTemperatura,
      sensorUmidade: data.sensorUmidade,
      sensorLuz: data.sensorLuz,
    })
    .then(() => {
      console.log('Dados armazenados com sucesso no banco de dados');
      
    })
    .catch(err => {
      console.error('Erro ao inserir dados no banco de dados: ' + err.message);
      res.status(500).send('Erro ao inserir dados no banco de dados');
    });
});
    
   

// routes.get("/", function(req, res){
//     res.sendFile(__dirname + "/views/index.html");

    
// });


module.exports = routes;

