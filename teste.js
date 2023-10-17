const Sequelize = require ('sequelize')
const sequelize = new Sequelize('teste','root','',{
  host:"localhost",
  dialect: 'mysql'
})

//Models(Tabela)
const Postagem = sequelize.define('postagens',{
  titulos: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
})


Postagem.sync({force:true})

// sequelize.authenticate().then(function(){
//   console.log("conectado com sucesso!")
// }).catch(function(erro){
//   console.log("Falha ao se conectar: "+erro)
// })