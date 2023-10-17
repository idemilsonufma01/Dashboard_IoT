const express = require("express");
const routes = express.Router();



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

