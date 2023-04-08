const express = require("express");
const router = express.Router();
const Musica = require("../models/Musica");
const MusicaServices = require("../services/MusicaServices");

//Adiciona uma música ao banco de dados
router.post('/', async(req, res) =>{
    const body = req.body;
    try{
        await MusicaServices.criacao(body);
        res.status(201).json('Música criada com sucesso!');
    }catch{
        res.status(400);
    }
})

//Retorna todas as músicas
router.get("/all", async(req, res) => {
    try{
        const musicas = MusicaServices.leitura();
        res.status(200).json(musicas);
    } catch(error){
        res.status(404).send(error);
    }
})

//Remove uma música do banco de dados
router.delete("/delete", async (req, res) => {
    try {
        const id = req.body.id;
        MusicaServices.remover(id);
    } catch (error) {
        res.status(404).send(error);
    }
})

module.exports = router;