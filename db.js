const Sequelize = require ('sequelize')
const dotenv = require ('dotenv');
dotenv.config();
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword,{
  dialect: "mysql",
  host: dbHost,
})

//models(Tabela)

const Data = sequelize.define('data',{
  sensorTemperatura: {
    type:Sequelize.DOUBLE,
  },
  sensorLuz: {
    type:Sequelize.DOUBLE,
  },
  sensorUmidade: {
    type:Sequelize.DOUBLE,
  },
});


sequelize.sync()


module.exports = {sequelize};
