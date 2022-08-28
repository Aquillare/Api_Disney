const {Boom} = require('@hapi/boom');

//Funcion validadora que retornara el midleware (clousure).
function validatorHandler(schema,property){

    return (req,res,next) => {
        const data = req[property];
        const {error} = schema.validate(data, {abortEarly:false});
        if(error){
            next(Boom.badRequest(error));
        }else{
            next();
        }
    }
};

module.exports = validatorHandler;

/* property es la propiedad que recibimos en el request, ej : req.body o req.params */

/* schema.validate(data) valida que la informacion recibida sea acorde a la reglas declaradas
en el schema, de no serlo devuelve un objeto que posee una propiedad error, lo obtenemos mediante
destructuracion */