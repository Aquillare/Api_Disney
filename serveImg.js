const express = require('express');

async function serveImg(path){
    express().get(path, async(req,res) => {
        const pathImg = await path.split('apiDisney/').pop().toString();
        return res.sendFile(pathImg)
    })
}

module.exports = serveImg;