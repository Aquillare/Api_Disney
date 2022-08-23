import express from "express";
import { CharacterService } from "../services/character.service.mjs";

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
        //next(error);
    }
} );

//endpoint para Creacion de characters
router.post('/', async(req,res,next) =>{
    try {
        const body = req.body;
        //const image = req.files.image;

        const newCharacter = await service.create(body);

        res.status(201).json({
            message:'created',
            newCharacter,
            
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

        const updateCharacter = await service.update(id,body);

        res.status(201).json({
            message:"update",
            updateCharacter,
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

        const updateCharacter = await service.update(id,body);

        res.status(201).json({
            message:'update',
            updateCharacter,
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

        const deleteCharacter = await service.delete(id);

        res.status(201).json({
            message:'deleted',
            id: deleteCharacter.id
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