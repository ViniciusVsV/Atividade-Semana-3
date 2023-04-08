const express = require("express");
const router = express.Router();
const Musica = require("../models/Musica");
const MusicaServices = require("../services/MusicaServices");

//Adiciona uma música ao banco de dados
router.post('/', async(req, res) =>{
    const body = req.body;
    try{
        await MusicaServices.criacao(body);
        return res.status(201).json('Música criada com sucesso!');
    }catch{
        return res.status(400);
    }
})

module.exports = router;