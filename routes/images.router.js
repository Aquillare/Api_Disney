const express = require("express");
const path = require('path');
const fs = require('fs-extra');

const router = express.Router();

//edpoint para servir imagenes
router.get('/:image', async(req,res,next) =>{
    const image = req.params.image;
    const pathImage = path.resolve(__dirname, `../public/img/uploads/${image}`);
    if(fs.existsSync(pathImage)){
        res.sendFile(pathImage);
    }else{
        const pathNoImage = path.resolve(__dirname, '../public/img/uploads/comedyCategory.png');
        res.sendFile(pathNoImage);
    }

})

module.exports = router;