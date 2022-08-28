const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(2).max(40);
const image = Joi.string().uri();
const creationDate = Joi.string().min(10).max(10);
const categoryId = Joi.number().integer();

const createMovieSchema = Joi.object({
    name: name.required(),
    image: image.required(),
    creationDate: creationDate.required(),
    categoryId: Joi.array([categoryId.required()])
});

const updateMovieSchema = Joi.object({
    name: name,
    image: image,
    creationDate: creationDate,
    categoryId: Joi.array([categoryId])
});

const getMovieSchema = Joi.object({
    id: id.required()
});

module.exports = {createMovieSchema,updateMovieSchema,getMovieSchema}