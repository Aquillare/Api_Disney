//Importacion de express
import express from 'express';

//Inicializamos un variable que contenga a express
const app = express();

//Middleware para recibir informacion en formato JSON
app.use(express.json());

//importamos modulo enrutador
import routerApi from './routes/index.js';


//inicializiamos una variable para almacenar el puerto donde correra la app
//si no hay variable de entorno, usara el puerto 3000.
const port = process.env.PORT || 3000;

//definimos una ruta con el metodo get de express
app.get('/', (req,res) => {
    res.send("This Api is for Disney!")
})


//llamamos al modulo enrutador
routerApi(app);

//indicamos a express en que puerto escuchará el servidor.
app.listen(port, () => {
    console.log(`linstening in port ${port}`)
});