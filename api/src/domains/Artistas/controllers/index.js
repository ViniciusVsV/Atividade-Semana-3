const router = require('express').Router();
const Artista = require('../models/Artista');
const ArtistaService = require('../services/ArtistaServices');


//Adiciona um artista ao banco de dados
router.post('/criar', async(req, res) =>{
    const body = req.body;
    try{
        await ArtistaService.criar(body);
        return res.status(201).json('Artista criado com sucesso!');
    }catch{
        return res.status(400);
    }
});

//Lista todas as músicas de um artista pelo nome do artista
router.get("/listarArtista", async(req, res) => {
    const body = req.body;
    try {
        const musicas = await ArtistaService.listarArtista(body);
        res.status(200).send(musicas);
    } catch(erro){
        res.status(404).send(erro);
    }
})

module.exports = router;