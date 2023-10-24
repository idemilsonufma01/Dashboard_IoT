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

const SensorTemperatura = sequelize.define('SensorTemperatura',{
  valor: {
    type:Sequelize.INTEGER,
  },
});

//SensorTemperatura.sync({force:true})

const SensorPresenca = sequelize.define('SensorPresenca',{
  valor: {
    type: Sequelize.INTEGER,
  },
});

//SensorPresenca.sync({force:true})

const SensorLuz = sequelize.define('SensorLuz',{
  valor: {
    type: Sequelize.INTEGER,
  },
});

//SensorLuz.sync({force:true})


module.exports = sequelize;
