const express = require("express");
const { CharacterService } = require("../services/character.service.js");
const path = require('path');
const fs = require('fs').promises;
const randomNumber = require('../randomNumber');

//Declaramos una variable router que contendrá el metodo router de express.
const router = express.Router();

//Inicializamos una instacia del servicio CharacterService;
const service = new CharacterService;


//Ruta principal endpoint characters.
router.get('/', async(req,res,next) =>{
    try {
        const characters = await service.find();

        res.status(200).json({
            characters
        });
    } catch (error) {
        throw error;
    }
} );

//Ruta para obtener un character
router.get('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;
        const characters = await service.findOne(id);

        res.status(200).json({
            characters
        });
    } catch (error) {
        throw error;
    }
} );




//endpoint para Creacion de characters
router.post('/', async(req,res,next) =>{
    try {
        const body = req.body;
        const files = req.files.sFile;
        const fileName = `${randomNumber()}${files.name}`;
        const uploadPath = path.resolve(__dirname, `../public/img/uploads/${fileName}`);
        files.mv(uploadPath, function(err){
            if(err){
                throw err;
            }
        });

        const movies = JSON.parse(body.movies);

        const data ={
            ...body,
            movies:movies,
            image: `localhost:3000/api/v1/images/${fileName}`,
        }

        const newCharacter = await service.create(data);

        res.status(201).json({
            message:'created',
            newCharacter,
            
        })
    } catch (error) {
        throw error;
    }
});

//endpoint para actualizacion de characters.
router.put('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;
        const body = req.body;
        //const image = req.files.image;

        const updateCharacter = await service.update(id,body);

        res.status(201).json({
            message:"update",
            updateCharacter,
            id
        })
    } catch (error) {
        throw error;
    }
})

//endpoint para actualizacion parcial de characters.
router.patch('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;
        const body = req.body;
        //const image = req.files.image;

        const updateCharacter = await service.update(id,body);

        res.status(201).json({
            message:'update',
            updateCharacter,
            id,
        });
    } catch (error) {
        throw error;
    }
})

//endpoint para eliminacion de characters
router.delete('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;
        const character = await service.findOne(id);
        const pathImage = character.image.split('/images')[1] ;
        fs.unlink(`./public/img/uploads/${pathImage}`)
        .then(() => {
            console.log('File removed')
        }).catch(err => {
            console.error('Something wrong happened removing the file', err)
        })

        const deleteCharacter = await service.delete(id);

        res.status(201).json({
            message:'deleted',
            id: deleteCharacter
        });
    } catch (error) {
        throw error;
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
module.exports = router;