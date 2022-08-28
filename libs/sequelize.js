const {Sequelize} = require("sequelize");
const config = require("../config/config.js");
const setupModels = require("../db/models");
/*
const USER = endoceURIComponent(config.dbUser);
const PASSWORD = endoceURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
*/

const options = {
    dialect : 'postgres',
    logging: config.isProd ? false : true,
};

if(config.isProd){
    options.dialectOptions ={
        ssl:{
            rejectUnauthorized:false
        }
    }
};

//Instancia de sequelize
const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

module.exports = sequelize ;

