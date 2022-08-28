const { ValidationError} = require('sequelize');

//Middlware de error, se usara de forma global para los logs.
function logsError(error, req, res, next){
    console.log(error);
    next(error);
}

//Middleware que enviara el error al cliente.
function errorHandler(error, req, res, next){
    res.status(500).json({
        message: error.message,
        stack: error.stack,
    });
}

//Middleware para recibir los errores de tipo boom
function boomErrorHanlder(error, req, res, next){
    if(err.isBoom){
        const {output} = error;
        res.status(output.statusCode).json(output.payload);
    }else{
        next(error);
    };
};

//middleware para recibir los errores provenientes de la DB
function ormErrorHandler(error, req, res, next){
    if( error instanceof ValidationError){
        res.status(409).json({
            statusCode: 409,
            message: error.message,
            errors: error.errors
        });
    }else{
        next(error);
    }
};

module.exports = {logsError,errorHandler,boomErrorHanlder,ormErrorHandler};