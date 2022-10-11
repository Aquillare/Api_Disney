const express = require("express");
const { MoviesService } = require("../services/movie.service.js");
const path = require("path");
const fs = require('fs').promises;
const randomNumber = require('../randomNumber');

//Declaramos una variable router que contendrá el metodo router de express.
const router = express.Router();

//Declaramos una istancia de la clase MoviesService.
const service = new MoviesService;

//Ruta principal endpoint movies.
router.get('/', async(req,res,next) =>{
    try {

        const movies = await service.find();

        res.status(200).json({
            movies
        });
    } catch (error) {
        throw error;
    }
} );

//ruta para buscar una pelicula
router.get('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;
        const movie = await service.findOne(id);

        res.status(200).json({
            movie
        });
    } catch (error) {
        throw error;
    }
} );

//endpoint para Creacion de Movies
router.post('/', async(req,res,next) =>{
    try {
        const body = req.body;

        const files = req.files.sampFile;
        const fileName = `${randomNumber()}${files.name}`;
        const uploadPath = path.resolve(__dirname, `../public/img/uploads/${fileName}`);
        files.mv(uploadPath, function(err){
            if(err){
                throw err;
            }
        });

        body.categoryId = parseInt(body.categoryId);
        body.rating = parseInt(body.rating); 

        const data ={
            ...body,
            image: `localhost:3000/api/v1/images/${fileName}`,
        }

        const newMovie = await service.create(data);

        res.status(201).json({
            message:'created',
            newMovie
        })
    } catch (error) {
        throw error;
    }
});

//endpoint para actualizacion de Movies.
router.put('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;
        const body = req.body;
        //const image = req.files.image;

        const updateMovie = await service.update(id,body);

        res.status(201).json({
            message:"update",
            updateMovie,
            id
        })
    } catch (error) {
        throw error;
    }
})

//endpoint para actualizacion parcial de Movies.
router.patch('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;
        const body = req.body;
        //const image = req.files.image;

        const updateMovie = await service.update(id,body);

        res.status(201).json({
            message:'update',
            updateMovie,
            id,
        });
    } catch (error) {
        throw error;
    }
})

//endpoint para eliminacion de Movies
router.delete('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;
        const movie = await service.findOne(id);
        const pathImage = movie.image.split('/images')[1] ;
        fs.unlink(`./public/img/uploads/${pathImage}`)
        .then(() => {
            console.log('File removed')
        }).catch(err => {
            console.error('Something wrong happened removing the file', err)
        })

        const deleteMovie = await service.delete(id);

        res.status(201).json({
            message:'deleted',
            id:deleteMovie
        });
    } catch (error) {
        throw error;
    }
});

module.exports = router;