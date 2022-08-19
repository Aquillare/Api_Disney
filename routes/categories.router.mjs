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

//endpoint para Creacion de categorias
router.post('/', async(req,res,next) =>{
    try {
        const body = req.body;

        res.status(201).json({
            message:'created',
            data:body
        })
    } catch (error) {
        //next(error);
    }
});

//endpoint para actualizacion de categorias.
router.put('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;
        const body = req.body;

        res.status(201).json({
            message:"update",
            data:body,
            id
        })
    } catch (error) {
        //next(error);
    }
})

//endpoint para actualizacion parcial de categorias.
router.patch('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;
        const body = req.body;

        res.status(201).json({
            message:'update',
            data: body,
            id,
        });
    } catch (error) {
        //next(error);
    }
})

//endpoint para eliminacion de categorias
router.delete('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;

        res.status(201).json({
            message:'deleted',
            id,
        });
    } catch (error) {
        //next(error);
    }
});



//Accion/aventura
//Animacion
//Comedia
//Documental
//Drama
//Infantil
//Cortos

export default router;