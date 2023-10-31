const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const Sequelize = require ('sequelize');



//config
//Template Engine
    app.engine("handlebars",handlebars.engine({defaultLayout: "main"}));
    app.set("view engine", "handlebars");
    //conexão banco
    const sequelize = new Sequelize('teste','root','',{
        host:"localhost",
        dialect: 'mysql'
    });
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())

//Rotas
    app.get('/cad', function(req,res){
        res.render('formulario')
    })
    app.get('/',function(req, res){
        res.render('index')
    })
    app.post('/add',function(req,res){
        res.send("Formulário Recebido")
    })



//precisa ser ultima linha
app.listen(8081, function(){
    console.log("Servidor rodando!")
});


module.exports = handlebars;