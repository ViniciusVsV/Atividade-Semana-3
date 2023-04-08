const express = require("express");
const router = express.Router();
const Musica = require("../models/Musica");
const MusicaServices = require("../services/MusicaServices");

//Adiciona uma música ao banco de dados
router.post('/create', async(req, res) =>{
    const body = req.body;
    try{
        await MusicaServices.criacao(body);
        res.status(201).json('Música criada com sucesso!');
    }catch{
        res.status(400);
    }
});

//Lista todas as músicas no banco de dados
router.get("/listAll", async(req, res) => {
    try {
        const musicas = await MusicaServices.listarTodas();
        res.status(200).json(musicas);
    } catch(error) {
        res.status(404).send(error);
    }
})

//Remove uma música do banco de dados pelo id
router.delete("/delete", async(req, res) => {
    const id = req.body.id;
    try{
        await MusicaServices.remover(id);
        res.status(200).json("Música removida");
    }catch(error){
        res.status(404).send(error);
    }
});

module.exports = router;