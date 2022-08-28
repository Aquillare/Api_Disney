//Importacion de express
const express = require('express');
//constamos modulo enrutador
const routerApi = require('./routes/index.js');
const cors = require('cors');
const { logsError, errorHandler, boomErrorHanlder, ormErrorHandler } = require('./middleware/error.handler.js');
const fileUpload = require('express-fileUpload');


//Inicializamos un variable que contenga a express
const app = express();

//Middleware para recibir informacion en formato JSON
app.use(express.json());

app.use(fileUpload());
app.use(express.static('files'));




//inicializiamos una variable para almacenar el puerto donde correra la app
//si no hay variable de entorno, usara el puerto 3000.
const port = process.env.PORT || 3000;

app.use(cors());

//definimos una ruta con el metodo get de express
app.get('/', (req,res) => {
    res.send("This Api is for Disney!")
})


app.get('/:img', function(req, res){
    res.sendFile( `./files/${img}` );
}); 



//llamamos al modulo enrutador
routerApi(app);

app.use(logsError);
app.use(ormErrorHandler);
app.use(boomErrorHanlder);
app.use(errorHandler);

//indicamos a express en que puerto escuchará el servidor.
app.listen(port, () => {
    console.log(`linstening in port ${port}`)
});