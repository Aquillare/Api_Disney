const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(2).max(25);
const image = Joi.string().uri();
const age = Joi.number().integer();
const weight = Joi.number().integer();
const history = Joi.string().min(20).max(600);
const movieId = Joi.number().integer();

const createCharacterSchema = Joi.object({
    name: name.required(),
    image: image.required(),
    age: age.required(),
    weight: weight,
    history: history.required(),
    movieId: Joi.array([movieId.required()])
});

const updateCharacterSchema = Joi.object({
    name: name,
    image: image,
    age: age,
    weight: weight,
    history: history,
    movieId: Joi.array([movieId])
});

const getCharacterSchema = Joi.object({
    id: id.required()
});

const queryCharacterSchema = Joi.object({
    name,
    age,
    weight
});

module.exports = {createCharacterSchema,updateCharacterSchema,getCharacterSchema,queryCharacterSchema};
