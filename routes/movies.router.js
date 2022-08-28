const express = require("express");
const { MoviesService } = require("../services/movie.service.js");

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

//endpoint para Creacion de Movies
router.post('/', async(req,res,next) =>{
    try {
        const body = req.body;
        //const image = req.files.image;

        const newMovie = await service.create(body);

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

        const deleteMovie = await service.delete(id);

        res.status(201).json({
            message:'deleted',
            id:deleteMovie.id
        });
    } catch (error) {
        throw error;
    }
});

module.exports = router;