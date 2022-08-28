//Configuracion de la conexion a la DB para migraciones
const config = require('../config/config.js');

//ambiente de desarollo y produccion
 module.exports = {
    development: {
        url: config.dbUrl,
        dialect:'postgres',
    },
    production:{
        url: config.dbUrl,
        dialect: 'postgres',
        dialectOptions:{
            ssl:{
                rejectUnauthorized: false
            }
        }
    }
};

