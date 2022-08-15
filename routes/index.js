//Ruta principal

import express from "express";

//importación de rutas
import categoriesRouter from './categories.router.mjs';
import charactersRouter from './characters.router.mjs';
import moviesRouter from './movies.router.mjs';

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

export default routerApi;