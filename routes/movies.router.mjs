import express from "express";

//Declaramos una variable router que contendrá el metodo router de express.
const router = express.Router();


//Ruta principal endpoint movies.
router.get('/', async(req,res,next) =>{
    try {
        res.status(200).json({
            message:'movies'
        });
    } catch (error) {
        //next(error);
    }
} );

export default router;