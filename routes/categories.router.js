const express = require("express");
const fs = require('fs').promises;
const path = require('path');
const randomNumber = require('../randomNumber');

const { CategoryService } = require("../services/category.services.js");


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

router.get('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;
        const category = await service.findOne(id);

        res.status(200).json({
            category
        });
    } catch (error) {
        next(error);
    }
} );

//endpoint para Creacion de categorias
router.post('/', async(req,res,next) =>{
    try {
        const body = req.body;
        const files = req.files.sampleFile;
        const fileName = `${randomNumber()}${files.name}`;
        const uploadPath = path.resolve(__dirname, `../public/img/uploads/${fileName}`);
        files.mv(uploadPath, function(err){
            if(err){
                throw err;
            }
        });

        const data ={
            ...body,
            image: `localhost:3000/api/v1/images/${fileName}`,
        }

        const newCategory = await service.create(data);

        res.status(201).json({
            message:'created',
            newCategory
        })
    } catch (error) {
        next(error);
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
        next(error);
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
        next(error);
    }
})

//endpoint para eliminacion de categorias
router.delete('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;
        const category = await service.findOne(id);
        const pathImage = category.image.split('/images')[1] ;
        fs.unlink(`./public/img/uploads/${pathImage}`)
        .then(() => {
            console.log('File removed')
        }).catch(err => {
            console.error('Something wrong happened removing the file', err)
        })

        const deleteCategory = await service.delete(id);

        res.status(201).json({
            message:'deleted',
            deleteCategory
        });
    } catch (error) {
        next(error);
    }
});


//Accion/aventura
//Animacion
//Comedia
//Documental
//Drama
//Infantil
//Cortos

module.exports = router;
