import express from "express";

import { CategoryService } from "../services/category.services.mjs";


//Declaramos una variable router que contendrá el metodo router de express.
const router = express.Router();

//Inicializamos una instacia del servicio CategoryService
const service = new CategoryService; 


//Ruta principal endpoint categories.
router.get('/', async(req,res,next) =>{
    try {

        const categories = await service.find()

        res.status(200).json({
            categories,
        });
    } catch (error) {
        console.log(error);
    }
} );

//endpoint para Creacion de categorias
router.post('/', async(req,res,next) =>{
    try {
        const body = req.body;
        const newCategory = await service.create(body);

        res.status(201).json({
            message:'created',
            newCategory
        })
    } catch (error) {
        y;
    }
});

//endpoint para actualizacion de categorias.
router.put('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;
        const body = req.body;

        const updateCategory = await service.update(id,body);

        res.status(201).json({
            message:"update",
            data:updateCategory,
            id
        })
    } catch (error) {
        y;
    }
})

//endpoint para actualizacion parcial de categorias.
router.patch('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;
        const body = req.body;

        const updateCategory = await service.update(id,body);

        res.status(201).json({
            message:'update',
            data: updateCategory,
        });
    } catch (error) {
        y;
    }
})

//endpoint para eliminacion de categorias
router.delete('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;

        const deleteCategory = await service.delete(id);

        res.status(201).json({
            message:'deleted',
            deleteCategory
        });
    } catch (error) {
        y;
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