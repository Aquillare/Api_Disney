//Ruta principal

const express = require("express");

//constación de rutas
const categoriesRouter = require('./categories.router.js');
const charactersRouter = require('./characters.router.js');
const moviesRouter = require('./movies.router.js');

//declaramos la función donde llamamos al método router de express
/**
 * 
 * @param {object} app [Será la libreria express]
 */
function routerApi(app){
    const router = express.Router();

    //usamos el metodo use de app (express).
    app.use('/api/v1', router);
    router.use('/movies', moviesRouter);
    router.use('/categories', categoriesRouter);
    router.use('/characters', charactersRouter);
};

module.exports = routerApi;