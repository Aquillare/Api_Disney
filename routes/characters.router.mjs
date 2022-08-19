import express from "express";

//Declaramos una variable router que contendrá el metodo router de express.
const router = express.Router();


//Ruta principal endpoint characters.
router.get('/', async(req,res,next) =>{
    try {
        res.status(200).json({
            message:'characters'
        });
    } catch (error) {
        //next(error);
    }
} );

//endpoint para Creacion de characters
router.post('/', async(req,res,next) =>{
    try {
        const body = req.body;
        //const image = req.files.image;

        res.status(201).json({
            message:'created',
            data:{
                ...body,
            }
        })
    } catch (error) {
        //next(error);
    }
});

//endpoint para actualizacion de characters.
router.put('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;
        const body = req.body;
        //const image = req.files.image;

        res.status(201).json({
            message:"update",
            data:body,
            id
        })
    } catch (error) {
        //next(error);
    }
})

//endpoint para actualizacion parcial de characters.
router.patch('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;
        const body = req.body;
        //const image = req.files.image;

        res.status(201).json({
            message:'update',
            data: body,
            id,
        });
    } catch (error) {
        //next(error);
    }
})

//endpoint para eliminacion de characters
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

/* Characters

Image
Name
Age
Heigth
History
Movies
s
*/
export default router;