const express = require("express");
const app = express();



app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre");
});

app.get("/blog", function(req, res){
    res.send("Minha pagina blog");
});

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("<h1> Ola "+req.params.nome+ "<h1>" + "<h2> Seu cargo é: "+req.params.cargo+ "<h2>");
    
});


//precisa ser ultima linha
app.listen(8081, function(){
    console.log("Servidor rodando!")
});
