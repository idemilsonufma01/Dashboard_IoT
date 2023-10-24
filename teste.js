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

//criar
Postagem.create({
  titulos: "Um Titulo Qualquer",
  conteudo: "Era uma vez um lugazinho no meio do nada com sabor de chocolate"
})

const Usuario = sequelize.define('usuarios',{
  nome: {
    type:Sequelize.STRING
  },
  sobrenome: {
    type:Sequelize.STRING
  },
  idade: {
    type:Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
})

Usuario.create({
  nome: "Idemilson",
  sobrenome: "silva",
  idade: 29,
  email: "idemilsonsilva93@gmail.com"
})

//Usuario.sync({force:true})