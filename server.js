const routes = require('./routes')
const db = require('./db')
const express = require("express");
const app = express();
app.use('/', routes);



db.sync().then(()=> {
  console.log("Banco de Dados conectado!")
}).catch(err => {
  console.error("Erro ao conectar ao banco de dados", err)
})


const port = 3000;
//precisa ser ultima linha
app.listen(port, function(){
    console.log("Servidor rodando!")
});
