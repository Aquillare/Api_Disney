import express from "express";

//Declaramos una variable router que contendrá el metodo router de express.
const router = express.Router();


//Ruta principal endpoint categories.
router.get('/', async(req,res,next) =>{
    try {
        res.status(200).json({
            message:'categories'
        });
    } catch (error) {
        //next(error);
    }
} );

//Accion/aventura
//Animacion
//Comedia
//Documental
//Drama
//Infantil
//Cortos

export default router;