const express = require("express");
const bodyParser = require('body-parser');
const routes = express.Router();


//app.use(bodyParser.json());



routes.use(function(req, res, next){
    console.log(" eu sou o middleware");
    next();

    
});


// routes.post("/storeData", function(req, res){
//     const data = req.body.data;
//     //codigo para salvar no banco de dados

//     res.send("Dados armazenados com sucesso");
// })

routes.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");

    
});








// routes.get("/sobre", function(req, res){
//     res.send("Minha pagina sobre");
// });

// routes.get("/blog", function(req, res){
//     res.send("Minha pagina blog");
// });

// routes.get("/ola/:nome/:cargo", function(req, res){
//     res.send("<h1> Ola "+req.params.nome+ "<h1>" + "<h2> Seu cargo é: "+req.params.cargo+ "<h2>");
    
// });

module.exports = routes;

