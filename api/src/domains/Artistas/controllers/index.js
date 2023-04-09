const router = require('express').Router();
const Artista = require('../models/Artista');
const ArtistaServices = require('../services/ArtistaServices');


//Adiciona um artista ao banco de dados
router.post('/criar', async(req, res) =>{
    const body = req.body;
    try{
        await ArtistaServices.criar(body);
        return res.status(201).json('Artista criado com sucesso!');
    }catch{
        return res.status(400);
    }
});

//Lista todas as músicas de um artista pelo nome do artista
router.get("/listarArtista", async(req, res) => {
    const body = req.body;
    try {
        const musicas = await ArtistaServices.listarArtista(body);
        res.status(200).send(musicas);
    } catch(erro){
        res.status(404).send(erro);
    }
});

//Atualiza as informações de um artista no banco de dados
router.put("/atualizar", async(req, res) => {
    const body = req.body;
    try {
        await ArtistaServices.atualizar(body);
        res.status(200).json("Artista atualizada");
    } catch(erro) {
        res.status(404).send(erro);
    }
});

module.exports = router;